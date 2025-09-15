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
        "name": "m_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 30,
        "end": 39
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 59,
                "end": 68
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 69,
                "end": 76
              },
              "abstract": false,
              "declare": false,
              "start": 53,
              "end": 76
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 46,
            "end": 76
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "e_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 93,
                "end": 102
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Happy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 113,
                      "end": 118
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 113,
                    "end": 118
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Grumpy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 128,
                      "end": 134
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 128,
                    "end": 134
                  }
                ],
                "start": 103,
                "end": 140
              },
              "const": false,
              "declare": false,
              "start": 88,
              "end": 140
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 81,
            "end": 140
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 161,
                "end": 170
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 194,
                        "end": 203
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 190,
                      "end": 205
                    },
                    "start": 183,
                    "end": 206
                  }
                ],
                "start": 173,
                "end": 212
              },
              "expression": false,
              "start": 152,
              "end": 212
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 145,
            "end": 212
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 228,
                    "end": 237
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 244,
                      "end": 253
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 240,
                    "end": 255
                  },
                  "definite": false,
                  "start": 228,
                  "end": 255
                }
              ],
              "declare": false,
              "start": 224,
              "end": 256
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 217,
            "end": 256
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "i_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 278,
                "end": 287
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 288,
                "end": 295
              },
              "declare": false,
              "start": 268,
              "end": 295
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 261,
            "end": 295
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "mi_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 317,
                "end": 327
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "ClassDeclaration",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 351,
                        "end": 352
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 353,
                        "end": 364
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 345,
                      "end": 364
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 338,
                    "end": 364
                  }
                ],
                "start": 328,
                "end": 370
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 307,
              "end": 370
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 300,
            "end": 370
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "mu_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 392,
                "end": 402
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 430,
                        "end": 431
                      },
                      "typeParameters": null,
                      "extends": [],
                      "body": {
                        "type": "TSInterfaceBody",
                        "body": [],
                        "start": 432,
                        "end": 443
                      },
                      "declare": false,
                      "start": 420,
                      "end": 443
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 413,
                    "end": 443
                  }
                ],
                "start": 403,
                "end": 449
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 382,
              "end": 449
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 375,
            "end": 449
          }
        ],
        "start": 40,
        "end": 451
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 20,
      "end": 451
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 489,
          "end": 497
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 517,
                  "end": 525
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 526,
                  "end": 533
                },
                "abstract": false,
                "declare": false,
                "start": 511,
                "end": 533
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 504,
              "end": 533
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSEnumDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 550,
                  "end": 558
                },
                "body": {
                  "type": "TSEnumBody",
                  "members": [
                    {
                      "type": "TSEnumMember",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Happy",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 569,
                        "end": 574
                      },
                      "initializer": null,
                      "computed": false,
                      "start": 569,
                      "end": 574
                    },
                    {
                      "type": "TSEnumMember",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Grumpy",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 584,
                        "end": 590
                      },
                      "initializer": null,
                      "computed": false,
                      "start": 584,
                      "end": 590
                    }
                  ],
                  "start": 559,
                  "end": 596
                },
                "const": false,
                "declare": false,
                "start": 545,
                "end": 596
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 538,
              "end": 596
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 617,
                  "end": 625
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 649,
                          "end": 657
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 645,
                        "end": 659
                      },
                      "start": 638,
                      "end": 660
                    }
                  ],
                  "start": 628,
                  "end": 666
                },
                "expression": false,
                "start": 608,
                "end": 666
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 601,
              "end": 666
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 682,
                      "end": 690
                    },
                    "init": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 693,
                      "end": 695
                    },
                    "definite": false,
                    "start": 682,
                    "end": 695
                  }
                ],
                "declare": false,
                "start": 678,
                "end": 696
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 671,
              "end": 696
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 718,
                  "end": 726
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [],
                  "start": 727,
                  "end": 734
                },
                "declare": false,
                "start": 708,
                "end": 734
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 701,
              "end": 734
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSModuleDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mi_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 756,
                  "end": 765
                },
                "body": {
                  "type": "TSModuleBlock",
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "declaration": {
                        "type": "ClassDeclaration",
                        "decorators": [],
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 789,
                          "end": 790
                        },
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "body": [],
                          "start": 791,
                          "end": 802
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 783,
                        "end": 802
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 776,
                      "end": 802
                    }
                  ],
                  "start": 766,
                  "end": 808
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 746,
                "end": 808
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 739,
              "end": 808
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSModuleDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mu_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 830,
                  "end": 839
                },
                "body": {
                  "type": "TSModuleBlock",
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "declaration": {
                        "type": "TSInterfaceDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 867,
                          "end": 868
                        },
                        "typeParameters": null,
                        "extends": [],
                        "body": {
                          "type": "TSInterfaceBody",
                          "body": [],
                          "start": 869,
                          "end": 880
                        },
                        "declare": false,
                        "start": 857,
                        "end": 880
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "type",
                      "attributes": [],
                      "start": 850,
                      "end": 880
                    }
                  ],
                  "start": 840,
                  "end": 886
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 820,
                "end": 886
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 813,
              "end": 886
            }
          ],
          "start": 498,
          "end": 888
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 479,
        "end": 888
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 472,
      "end": 888
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "import_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 907,
          "end": 920
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_c_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 992,
                  "end": 1011
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1014,
                    "end": 1023
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1024,
                    "end": 1033
                  },
                  "start": 1014,
                  "end": 1033
                },
                "importKind": "value",
                "start": 985,
                "end": 1034
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 978,
              "end": 1034
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_e_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1053,
                  "end": 1072
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1075,
                    "end": 1084
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1085,
                    "end": 1094
                  },
                  "start": 1075,
                  "end": 1094
                },
                "importKind": "value",
                "start": 1046,
                "end": 1095
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1039,
              "end": 1095
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_f_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1114,
                  "end": 1133
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1136,
                    "end": 1145
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1146,
                    "end": 1155
                  },
                  "start": 1136,
                  "end": 1155
                },
                "importKind": "value",
                "start": 1107,
                "end": 1156
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1100,
              "end": 1156
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_v_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1175,
                  "end": 1194
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1197,
                    "end": 1206
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1207,
                    "end": 1216
                  },
                  "start": 1197,
                  "end": 1216
                },
                "importKind": "value",
                "start": 1168,
                "end": 1217
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1161,
              "end": 1217
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_i_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1236,
                  "end": 1255
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1258,
                    "end": 1267
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1268,
                    "end": 1277
                  },
                  "start": 1258,
                  "end": 1277
                },
                "importKind": "value",
                "start": 1229,
                "end": 1278
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1222,
              "end": 1278
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_mi_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1297,
                  "end": 1317
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1320,
                    "end": 1329
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mi_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1330,
                    "end": 1340
                  },
                  "start": 1320,
                  "end": 1340
                },
                "importKind": "value",
                "start": 1290,
                "end": 1341
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1283,
              "end": 1341
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_mu_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1360,
                  "end": 1380
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1383,
                    "end": 1392
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mu_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1393,
                    "end": 1403
                  },
                  "start": 1383,
                  "end": 1403
                },
                "importKind": "value",
                "start": 1353,
                "end": 1404
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1346,
              "end": 1404
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
                    "name": "privateUse_im_public_c_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1452,
                    "end": 1482
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_public_c_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1489,
                      "end": 1508
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1485,
                    "end": 1510
                  },
                  "definite": false,
                  "start": 1452,
                  "end": 1510
                }
              ],
              "declare": false,
              "start": 1448,
              "end": 1511
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_public_c_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1527,
                      "end": 1556
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_public_c_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1563,
                        "end": 1582
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1559,
                      "end": 1584
                    },
                    "definite": false,
                    "start": 1527,
                    "end": 1584
                  }
                ],
                "declare": false,
                "start": 1523,
                "end": 1585
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1516,
              "end": 1585
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
                    "name": "privateUse_im_public_e_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1594,
                    "end": 1624
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_public_e_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1627,
                      "end": 1646
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Happy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1647,
                      "end": 1652
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1627,
                    "end": 1652
                  },
                  "definite": false,
                  "start": 1594,
                  "end": 1652
                }
              ],
              "declare": false,
              "start": 1590,
              "end": 1653
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_public_e_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1669,
                      "end": 1698
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_public_e_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1701,
                        "end": 1720
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Grumpy",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1721,
                        "end": 1727
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1701,
                      "end": 1727
                    },
                    "definite": false,
                    "start": 1669,
                    "end": 1727
                  }
                ],
                "declare": false,
                "start": 1665,
                "end": 1728
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1658,
              "end": 1728
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
                    "name": "privateUse_im_public_f_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1737,
                    "end": 1767
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_public_f_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1770,
                      "end": 1789
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1770,
                    "end": 1791
                  },
                  "definite": false,
                  "start": 1737,
                  "end": 1791
                }
              ],
              "declare": false,
              "start": 1733,
              "end": 1792
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_public_f_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1808,
                      "end": 1837
                    },
                    "init": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_public_f_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1840,
                        "end": 1859
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1840,
                      "end": 1861
                    },
                    "definite": false,
                    "start": 1808,
                    "end": 1861
                  }
                ],
                "declare": false,
                "start": 1804,
                "end": 1862
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1797,
              "end": 1862
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
                    "name": "privateUse_im_public_v_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1871,
                    "end": 1901
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_public_v_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1904,
                    "end": 1923
                  },
                  "definite": false,
                  "start": 1871,
                  "end": 1923
                }
              ],
              "declare": false,
              "start": 1867,
              "end": 1924
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_public_v_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1940,
                      "end": 1969
                    },
                    "init": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_public_v_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1972,
                      "end": 1991
                    },
                    "definite": false,
                    "start": 1940,
                    "end": 1991
                  }
                ],
                "declare": false,
                "start": 1936,
                "end": 1992
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1929,
              "end": 1992
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
                    "name": "privateUse_im_public_i_private",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "im_public_i_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2033,
                          "end": 2052
                        },
                        "typeArguments": null,
                        "start": 2033,
                        "end": 2052
                      },
                      "start": 2031,
                      "end": 2052
                    },
                    "start": 2001,
                    "end": 2052
                  },
                  "init": null,
                  "definite": false,
                  "start": 2001,
                  "end": 2052
                }
              ],
              "declare": false,
              "start": 1997,
              "end": 2053
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_public_i_private",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "im_public_i_private",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2100,
                            "end": 2119
                          },
                          "typeArguments": null,
                          "start": 2100,
                          "end": 2119
                        },
                        "start": 2098,
                        "end": 2119
                      },
                      "start": 2069,
                      "end": 2119
                    },
                    "init": null,
                    "definite": false,
                    "start": 2069,
                    "end": 2119
                  }
                ],
                "declare": false,
                "start": 2065,
                "end": 2120
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2058,
              "end": 2120
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
                    "name": "privateUse_im_public_mi_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2129,
                    "end": 2160
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_public_mi_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2167,
                        "end": 2187
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2188,
                        "end": 2189
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2167,
                      "end": 2189
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 2163,
                    "end": 2191
                  },
                  "definite": false,
                  "start": 2129,
                  "end": 2191
                }
              ],
              "declare": false,
              "start": 2125,
              "end": 2192
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_public_mi_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2208,
                      "end": 2238
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "im_public_mi_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2245,
                          "end": 2265
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2266,
                          "end": 2267
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2245,
                        "end": 2267
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2241,
                      "end": 2269
                    },
                    "definite": false,
                    "start": 2208,
                    "end": 2269
                  }
                ],
                "declare": false,
                "start": 2204,
                "end": 2270
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2197,
              "end": 2270
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
                    "name": "privateUse_im_public_mu_private",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "im_public_mu_private",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2312,
                            "end": 2332
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2333,
                            "end": 2334
                          },
                          "start": 2312,
                          "end": 2334
                        },
                        "typeArguments": null,
                        "start": 2312,
                        "end": 2334
                      },
                      "start": 2310,
                      "end": 2334
                    },
                    "start": 2279,
                    "end": 2334
                  },
                  "init": null,
                  "definite": false,
                  "start": 2279,
                  "end": 2334
                }
              ],
              "declare": false,
              "start": 2275,
              "end": 2335
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_public_mu_private",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "im_public_mu_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2383,
                              "end": 2403
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2404,
                              "end": 2405
                            },
                            "start": 2383,
                            "end": 2405
                          },
                          "typeArguments": null,
                          "start": 2383,
                          "end": 2405
                        },
                        "start": 2381,
                        "end": 2405
                      },
                      "start": 2351,
                      "end": 2405
                    },
                    "init": null,
                    "definite": false,
                    "start": 2351,
                    "end": 2405
                  }
                ],
                "declare": false,
                "start": 2347,
                "end": 2406
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2340,
              "end": 2406
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_c_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2480,
                  "end": 2498
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2501,
                    "end": 2509
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2510,
                    "end": 2518
                  },
                  "start": 2501,
                  "end": 2518
                },
                "importKind": "value",
                "start": 2473,
                "end": 2519
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2466,
              "end": 2519
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_e_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2538,
                  "end": 2556
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2559,
                    "end": 2567
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2568,
                    "end": 2576
                  },
                  "start": 2559,
                  "end": 2576
                },
                "importKind": "value",
                "start": 2531,
                "end": 2577
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2524,
              "end": 2577
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_f_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2596,
                  "end": 2614
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2617,
                    "end": 2625
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2626,
                    "end": 2634
                  },
                  "start": 2617,
                  "end": 2634
                },
                "importKind": "value",
                "start": 2589,
                "end": 2635
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2582,
              "end": 2635
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_v_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2654,
                  "end": 2672
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2675,
                    "end": 2683
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2684,
                    "end": 2692
                  },
                  "start": 2675,
                  "end": 2692
                },
                "importKind": "value",
                "start": 2647,
                "end": 2693
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2640,
              "end": 2693
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_i_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2712,
                  "end": 2730
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2733,
                    "end": 2741
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2742,
                    "end": 2750
                  },
                  "start": 2733,
                  "end": 2750
                },
                "importKind": "value",
                "start": 2705,
                "end": 2751
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2698,
              "end": 2751
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_mi_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2770,
                  "end": 2789
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2792,
                    "end": 2800
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mi_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2801,
                    "end": 2810
                  },
                  "start": 2792,
                  "end": 2810
                },
                "importKind": "value",
                "start": 2763,
                "end": 2811
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2756,
              "end": 2811
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_public_mu_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2830,
                  "end": 2849
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2852,
                    "end": 2860
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mu_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2861,
                    "end": 2870
                  },
                  "start": 2852,
                  "end": 2870
                },
                "importKind": "value",
                "start": 2823,
                "end": 2871
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2816,
              "end": 2871
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
                    "name": "privateUse_im_public_c_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2903,
                    "end": 2932
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_public_c_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2939,
                      "end": 2957
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 2935,
                    "end": 2959
                  },
                  "definite": false,
                  "start": 2903,
                  "end": 2959
                }
              ],
              "declare": false,
              "start": 2899,
              "end": 2960
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_public_c_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2976,
                      "end": 3004
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_public_c_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3011,
                        "end": 3029
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3007,
                      "end": 3031
                    },
                    "definite": false,
                    "start": 2976,
                    "end": 3031
                  }
                ],
                "declare": false,
                "start": 2972,
                "end": 3032
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2965,
              "end": 3032
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
                    "name": "privateUse_im_public_e_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3041,
                    "end": 3070
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_public_e_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3073,
                      "end": 3091
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Happy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3092,
                      "end": 3097
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3073,
                    "end": 3097
                  },
                  "definite": false,
                  "start": 3041,
                  "end": 3097
                }
              ],
              "declare": false,
              "start": 3037,
              "end": 3098
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_public_e_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3114,
                      "end": 3142
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_public_e_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3145,
                        "end": 3163
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Grumpy",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3164,
                        "end": 3170
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3145,
                      "end": 3170
                    },
                    "definite": false,
                    "start": 3114,
                    "end": 3170
                  }
                ],
                "declare": false,
                "start": 3110,
                "end": 3171
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3103,
              "end": 3171
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
                    "name": "privateUse_im_public_f_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3180,
                    "end": 3209
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_public_f_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3212,
                      "end": 3230
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 3212,
                    "end": 3232
                  },
                  "definite": false,
                  "start": 3180,
                  "end": 3232
                }
              ],
              "declare": false,
              "start": 3176,
              "end": 3233
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_public_f_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3249,
                      "end": 3277
                    },
                    "init": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_public_f_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3280,
                        "end": 3298
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 3280,
                      "end": 3300
                    },
                    "definite": false,
                    "start": 3249,
                    "end": 3300
                  }
                ],
                "declare": false,
                "start": 3245,
                "end": 3301
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3238,
              "end": 3301
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
                    "name": "privateUse_im_public_v_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3310,
                    "end": 3339
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_public_v_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3342,
                    "end": 3360
                  },
                  "definite": false,
                  "start": 3310,
                  "end": 3360
                }
              ],
              "declare": false,
              "start": 3306,
              "end": 3361
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_public_v_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3377,
                      "end": 3405
                    },
                    "init": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_public_v_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3408,
                      "end": 3426
                    },
                    "definite": false,
                    "start": 3377,
                    "end": 3426
                  }
                ],
                "declare": false,
                "start": 3373,
                "end": 3427
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3366,
              "end": 3427
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
                    "name": "privateUse_im_public_i_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "im_public_i_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3467,
                          "end": 3485
                        },
                        "typeArguments": null,
                        "start": 3467,
                        "end": 3485
                      },
                      "start": 3465,
                      "end": 3485
                    },
                    "start": 3436,
                    "end": 3485
                  },
                  "init": null,
                  "definite": false,
                  "start": 3436,
                  "end": 3485
                }
              ],
              "declare": false,
              "start": 3432,
              "end": 3486
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_public_i_public",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "im_public_i_public",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3532,
                            "end": 3550
                          },
                          "typeArguments": null,
                          "start": 3532,
                          "end": 3550
                        },
                        "start": 3530,
                        "end": 3550
                      },
                      "start": 3502,
                      "end": 3550
                    },
                    "init": null,
                    "definite": false,
                    "start": 3502,
                    "end": 3550
                  }
                ],
                "declare": false,
                "start": 3498,
                "end": 3551
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3491,
              "end": 3551
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
                    "name": "privateUse_im_public_mi_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3560,
                    "end": 3590
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_public_mi_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3597,
                        "end": 3616
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3617,
                        "end": 3618
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3597,
                      "end": 3618
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 3593,
                    "end": 3620
                  },
                  "definite": false,
                  "start": 3560,
                  "end": 3620
                }
              ],
              "declare": false,
              "start": 3556,
              "end": 3621
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_public_mi_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3637,
                      "end": 3666
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "im_public_mi_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3673,
                          "end": 3692
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3693,
                          "end": 3694
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3673,
                        "end": 3694
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3669,
                      "end": 3696
                    },
                    "definite": false,
                    "start": 3637,
                    "end": 3696
                  }
                ],
                "declare": false,
                "start": 3633,
                "end": 3697
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3626,
              "end": 3697
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
                    "name": "privateUse_im_public_mu_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "im_public_mu_public",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3738,
                            "end": 3757
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3758,
                            "end": 3759
                          },
                          "start": 3738,
                          "end": 3759
                        },
                        "typeArguments": null,
                        "start": 3738,
                        "end": 3759
                      },
                      "start": 3736,
                      "end": 3759
                    },
                    "start": 3706,
                    "end": 3759
                  },
                  "init": null,
                  "definite": false,
                  "start": 3706,
                  "end": 3759
                }
              ],
              "declare": false,
              "start": 3702,
              "end": 3760
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicUse_im_public_mu_public",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "im_public_mu_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3807,
                              "end": 3826
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3827,
                              "end": 3828
                            },
                            "start": 3807,
                            "end": 3828
                          },
                          "typeArguments": null,
                          "start": 3807,
                          "end": 3828
                        },
                        "start": 3805,
                        "end": 3828
                      },
                      "start": 3776,
                      "end": 3828
                    },
                    "init": null,
                    "definite": false,
                    "start": 3776,
                    "end": 3828
                  }
                ],
                "declare": false,
                "start": 3772,
                "end": 3829
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3765,
              "end": 3829
            }
          ],
          "start": 921,
          "end": 3831
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 897,
        "end": 3831
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 890,
      "end": 3831
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "import_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 3843,
        "end": 3857
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3932,
                "end": 3952
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3955,
                  "end": 3964
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3965,
                  "end": 3974
                },
                "start": 3955,
                "end": 3974
              },
              "importKind": "value",
              "start": 3925,
              "end": 3975
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3918,
            "end": 3975
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_e_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3994,
                "end": 4014
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4017,
                  "end": 4026
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4027,
                  "end": 4036
                },
                "start": 4017,
                "end": 4036
              },
              "importKind": "value",
              "start": 3987,
              "end": 4037
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3980,
            "end": 4037
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_f_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4056,
                "end": 4076
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4079,
                  "end": 4088
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4089,
                  "end": 4098
                },
                "start": 4079,
                "end": 4098
              },
              "importKind": "value",
              "start": 4049,
              "end": 4099
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4042,
            "end": 4099
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_v_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4118,
                "end": 4138
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4141,
                  "end": 4150
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4151,
                  "end": 4160
                },
                "start": 4141,
                "end": 4160
              },
              "importKind": "value",
              "start": 4111,
              "end": 4161
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4104,
            "end": 4161
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_i_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4180,
                "end": 4200
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4203,
                  "end": 4212
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4213,
                  "end": 4222
                },
                "start": 4203,
                "end": 4222
              },
              "importKind": "value",
              "start": 4173,
              "end": 4223
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4166,
            "end": 4223
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_mi_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4242,
                "end": 4263
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4266,
                  "end": 4275
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mi_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4276,
                  "end": 4286
                },
                "start": 4266,
                "end": 4286
              },
              "importKind": "value",
              "start": 4235,
              "end": 4287
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4228,
            "end": 4287
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_mu_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4306,
                "end": 4327
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4330,
                  "end": 4339
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mu_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4340,
                  "end": 4350
                },
                "start": 4330,
                "end": 4350
              },
              "importKind": "value",
              "start": 4299,
              "end": 4351
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4292,
            "end": 4351
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
                  "name": "privateUse_im_private_c_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4389,
                  "end": 4420
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_c_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4427,
                    "end": 4447
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 4423,
                  "end": 4449
                },
                "definite": false,
                "start": 4389,
                "end": 4449
              }
            ],
            "declare": false,
            "start": 4385,
            "end": 4450
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_c_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4466,
                    "end": 4496
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_c_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4503,
                      "end": 4523
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 4499,
                    "end": 4525
                  },
                  "definite": false,
                  "start": 4466,
                  "end": 4525
                }
              ],
              "declare": false,
              "start": 4462,
              "end": 4526
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4455,
            "end": 4526
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
                  "name": "privateUse_im_private_e_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4535,
                  "end": 4566
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_e_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4569,
                    "end": 4589
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Happy",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4590,
                    "end": 4595
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4569,
                  "end": 4595
                },
                "definite": false,
                "start": 4535,
                "end": 4595
              }
            ],
            "declare": false,
            "start": 4531,
            "end": 4596
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_e_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4612,
                    "end": 4642
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_e_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4645,
                      "end": 4665
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Grumpy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4666,
                      "end": 4672
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4645,
                    "end": 4672
                  },
                  "definite": false,
                  "start": 4612,
                  "end": 4672
                }
              ],
              "declare": false,
              "start": 4608,
              "end": 4673
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4601,
            "end": 4673
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
                  "name": "privateUse_im_private_f_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4682,
                  "end": 4713
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_f_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4716,
                    "end": 4736
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 4716,
                  "end": 4738
                },
                "definite": false,
                "start": 4682,
                "end": 4738
              }
            ],
            "declare": false,
            "start": 4678,
            "end": 4739
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_f_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4755,
                    "end": 4785
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_f_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4788,
                      "end": 4808
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 4788,
                    "end": 4810
                  },
                  "definite": false,
                  "start": 4755,
                  "end": 4810
                }
              ],
              "declare": false,
              "start": 4751,
              "end": 4811
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4744,
            "end": 4811
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
                  "name": "privateUse_im_private_v_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4820,
                  "end": 4851
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_private_v_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4854,
                  "end": 4874
                },
                "definite": false,
                "start": 4820,
                "end": 4874
              }
            ],
            "declare": false,
            "start": 4816,
            "end": 4875
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_v_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4891,
                    "end": 4921
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_v_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4924,
                    "end": 4944
                  },
                  "definite": false,
                  "start": 4891,
                  "end": 4944
                }
              ],
              "declare": false,
              "start": 4887,
              "end": 4945
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4880,
            "end": 4945
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
                  "name": "privateUse_im_private_i_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_private_i_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4987,
                        "end": 5007
                      },
                      "typeArguments": null,
                      "start": 4987,
                      "end": 5007
                    },
                    "start": 4985,
                    "end": 5007
                  },
                  "start": 4954,
                  "end": 5007
                },
                "init": null,
                "definite": false,
                "start": 4954,
                "end": 5007
              }
            ],
            "declare": false,
            "start": 4950,
            "end": 5008
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_i_private",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "im_private_i_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5056,
                          "end": 5076
                        },
                        "typeArguments": null,
                        "start": 5056,
                        "end": 5076
                      },
                      "start": 5054,
                      "end": 5076
                    },
                    "start": 5024,
                    "end": 5076
                  },
                  "init": null,
                  "definite": false,
                  "start": 5024,
                  "end": 5076
                }
              ],
              "declare": false,
              "start": 5020,
              "end": 5077
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5013,
            "end": 5077
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
                  "name": "privateUse_im_private_mi_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5086,
                  "end": 5118
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_mi_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5125,
                      "end": 5146
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5147,
                      "end": 5148
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5125,
                    "end": 5148
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 5121,
                  "end": 5150
                },
                "definite": false,
                "start": 5086,
                "end": 5150
              }
            ],
            "declare": false,
            "start": 5082,
            "end": 5151
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_mi_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5167,
                    "end": 5198
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_private_mi_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5205,
                        "end": 5226
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5227,
                        "end": 5228
                      },
                      "optional": false,
                      "computed": false,
                      "start": 5205,
                      "end": 5228
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 5201,
                    "end": 5230
                  },
                  "definite": false,
                  "start": 5167,
                  "end": 5230
                }
              ],
              "declare": false,
              "start": 5163,
              "end": 5231
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5156,
            "end": 5231
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
                  "name": "privateUse_im_private_mu_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "im_private_mu_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5274,
                          "end": 5295
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5296,
                          "end": 5297
                        },
                        "start": 5274,
                        "end": 5297
                      },
                      "typeArguments": null,
                      "start": 5274,
                      "end": 5297
                    },
                    "start": 5272,
                    "end": 5297
                  },
                  "start": 5240,
                  "end": 5297
                },
                "init": null,
                "definite": false,
                "start": 5240,
                "end": 5297
              }
            ],
            "declare": false,
            "start": 5236,
            "end": 5298
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_mu_private",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "im_private_mu_private",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5347,
                            "end": 5368
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5369,
                            "end": 5370
                          },
                          "start": 5347,
                          "end": 5370
                        },
                        "typeArguments": null,
                        "start": 5347,
                        "end": 5370
                      },
                      "start": 5345,
                      "end": 5370
                    },
                    "start": 5314,
                    "end": 5370
                  },
                  "init": null,
                  "definite": false,
                  "start": 5314,
                  "end": 5370
                }
              ],
              "declare": false,
              "start": 5310,
              "end": 5371
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5303,
            "end": 5371
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_c_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5443,
                "end": 5462
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5465,
                  "end": 5473
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5474,
                  "end": 5482
                },
                "start": 5465,
                "end": 5482
              },
              "importKind": "value",
              "start": 5436,
              "end": 5483
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5429,
            "end": 5483
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_e_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5502,
                "end": 5521
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5524,
                  "end": 5532
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5533,
                  "end": 5541
                },
                "start": 5524,
                "end": 5541
              },
              "importKind": "value",
              "start": 5495,
              "end": 5542
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5488,
            "end": 5542
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_f_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5561,
                "end": 5580
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5583,
                  "end": 5591
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5592,
                  "end": 5600
                },
                "start": 5583,
                "end": 5600
              },
              "importKind": "value",
              "start": 5554,
              "end": 5601
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5547,
            "end": 5601
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_v_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5620,
                "end": 5639
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5642,
                  "end": 5650
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5651,
                  "end": 5659
                },
                "start": 5642,
                "end": 5659
              },
              "importKind": "value",
              "start": 5613,
              "end": 5660
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5606,
            "end": 5660
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_i_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5679,
                "end": 5698
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5701,
                  "end": 5709
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5710,
                  "end": 5718
                },
                "start": 5701,
                "end": 5718
              },
              "importKind": "value",
              "start": 5672,
              "end": 5719
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5665,
            "end": 5719
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_mi_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5738,
                "end": 5758
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5761,
                  "end": 5769
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mi_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5770,
                  "end": 5779
                },
                "start": 5761,
                "end": 5779
              },
              "importKind": "value",
              "start": 5731,
              "end": 5780
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5724,
            "end": 5780
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_mu_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5799,
                "end": 5819
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5822,
                  "end": 5830
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mu_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5831,
                  "end": 5840
                },
                "start": 5822,
                "end": 5840
              },
              "importKind": "value",
              "start": 5792,
              "end": 5841
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5785,
            "end": 5841
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
                  "name": "privateUse_im_private_c_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5892,
                  "end": 5922
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_c_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5929,
                    "end": 5948
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 5925,
                  "end": 5950
                },
                "definite": false,
                "start": 5892,
                "end": 5950
              }
            ],
            "declare": false,
            "start": 5888,
            "end": 5951
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_c_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5967,
                    "end": 5996
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_c_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6003,
                      "end": 6022
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 5999,
                    "end": 6024
                  },
                  "definite": false,
                  "start": 5967,
                  "end": 6024
                }
              ],
              "declare": false,
              "start": 5963,
              "end": 6025
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5956,
            "end": 6025
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
                  "name": "privateUse_im_private_e_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6034,
                  "end": 6064
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_e_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6067,
                    "end": 6086
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Happy",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6087,
                    "end": 6092
                  },
                  "optional": false,
                  "computed": false,
                  "start": 6067,
                  "end": 6092
                },
                "definite": false,
                "start": 6034,
                "end": 6092
              }
            ],
            "declare": false,
            "start": 6030,
            "end": 6093
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_e_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6109,
                    "end": 6138
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_e_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6141,
                      "end": 6160
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Grumpy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6161,
                      "end": 6167
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6141,
                    "end": 6167
                  },
                  "definite": false,
                  "start": 6109,
                  "end": 6167
                }
              ],
              "declare": false,
              "start": 6105,
              "end": 6168
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6098,
            "end": 6168
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
                  "name": "privateUse_im_private_f_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6177,
                  "end": 6207
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_f_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6210,
                    "end": 6229
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 6210,
                  "end": 6231
                },
                "definite": false,
                "start": 6177,
                "end": 6231
              }
            ],
            "declare": false,
            "start": 6173,
            "end": 6232
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_f_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6248,
                    "end": 6277
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_f_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6280,
                      "end": 6299
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 6280,
                    "end": 6301
                  },
                  "definite": false,
                  "start": 6248,
                  "end": 6301
                }
              ],
              "declare": false,
              "start": 6244,
              "end": 6302
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6237,
            "end": 6302
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
                  "name": "privateUse_im_private_v_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6311,
                  "end": 6341
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_private_v_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6344,
                  "end": 6363
                },
                "definite": false,
                "start": 6311,
                "end": 6363
              }
            ],
            "declare": false,
            "start": 6307,
            "end": 6364
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_v_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6380,
                    "end": 6409
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_v_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6412,
                    "end": 6431
                  },
                  "definite": false,
                  "start": 6380,
                  "end": 6431
                }
              ],
              "declare": false,
              "start": 6376,
              "end": 6432
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6369,
            "end": 6432
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
                  "name": "privateUse_im_private_i_public",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_private_i_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6473,
                        "end": 6492
                      },
                      "typeArguments": null,
                      "start": 6473,
                      "end": 6492
                    },
                    "start": 6471,
                    "end": 6492
                  },
                  "start": 6441,
                  "end": 6492
                },
                "init": null,
                "definite": false,
                "start": 6441,
                "end": 6492
              }
            ],
            "declare": false,
            "start": 6437,
            "end": 6493
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_i_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "im_private_i_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6540,
                          "end": 6559
                        },
                        "typeArguments": null,
                        "start": 6540,
                        "end": 6559
                      },
                      "start": 6538,
                      "end": 6559
                    },
                    "start": 6509,
                    "end": 6559
                  },
                  "init": null,
                  "definite": false,
                  "start": 6509,
                  "end": 6559
                }
              ],
              "declare": false,
              "start": 6505,
              "end": 6560
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6498,
            "end": 6560
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
                  "name": "privateUse_im_private_mi_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6569,
                  "end": 6600
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_mi_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6607,
                      "end": 6627
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6628,
                      "end": 6629
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6607,
                    "end": 6629
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 6603,
                  "end": 6631
                },
                "definite": false,
                "start": 6569,
                "end": 6631
              }
            ],
            "declare": false,
            "start": 6565,
            "end": 6632
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_mi_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6648,
                    "end": 6678
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_private_mi_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6685,
                        "end": 6705
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6706,
                        "end": 6707
                      },
                      "optional": false,
                      "computed": false,
                      "start": 6685,
                      "end": 6707
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 6681,
                    "end": 6709
                  },
                  "definite": false,
                  "start": 6648,
                  "end": 6709
                }
              ],
              "declare": false,
              "start": 6644,
              "end": 6710
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6637,
            "end": 6710
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
                  "name": "privateUse_im_private_mu_public",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "im_private_mu_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6752,
                          "end": 6772
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6773,
                          "end": 6774
                        },
                        "start": 6752,
                        "end": 6774
                      },
                      "typeArguments": null,
                      "start": 6752,
                      "end": 6774
                    },
                    "start": 6750,
                    "end": 6774
                  },
                  "start": 6719,
                  "end": 6774
                },
                "init": null,
                "definite": false,
                "start": 6719,
                "end": 6774
              }
            ],
            "declare": false,
            "start": 6715,
            "end": 6775
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicUse_im_private_mu_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "im_private_mu_public",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6823,
                            "end": 6843
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6844,
                            "end": 6845
                          },
                          "start": 6823,
                          "end": 6845
                        },
                        "typeArguments": null,
                        "start": 6823,
                        "end": 6845
                      },
                      "start": 6821,
                      "end": 6845
                    },
                    "start": 6791,
                    "end": 6845
                  },
                  "init": null,
                  "definite": false,
                  "start": 6791,
                  "end": 6845
                }
              ],
              "declare": false,
              "start": 6787,
              "end": 6846
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6780,
            "end": 6846
          }
        ],
        "start": 3858,
        "end": 6848
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 3833,
      "end": 6848
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 20,
  "end": 6848
}
```
