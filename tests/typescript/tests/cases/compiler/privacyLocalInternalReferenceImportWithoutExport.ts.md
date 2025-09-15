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
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 988,
                "end": 1008
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1011,
                  "end": 1020
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1021,
                  "end": 1030
                },
                "start": 1011,
                "end": 1030
              },
              "importKind": "value",
              "start": 981,
              "end": 1031
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_e_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1043,
                "end": 1063
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1066,
                  "end": 1075
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1076,
                  "end": 1085
                },
                "start": 1066,
                "end": 1085
              },
              "importKind": "value",
              "start": 1036,
              "end": 1086
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_f_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1098,
                "end": 1118
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1121,
                  "end": 1130
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1131,
                  "end": 1140
                },
                "start": 1121,
                "end": 1140
              },
              "importKind": "value",
              "start": 1091,
              "end": 1141
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_v_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1153,
                "end": 1173
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1176,
                  "end": 1185
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1186,
                  "end": 1195
                },
                "start": 1176,
                "end": 1195
              },
              "importKind": "value",
              "start": 1146,
              "end": 1196
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_i_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1208,
                "end": 1228
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1231,
                  "end": 1240
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1241,
                  "end": 1250
                },
                "start": 1231,
                "end": 1250
              },
              "importKind": "value",
              "start": 1201,
              "end": 1251
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_mi_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1263,
                "end": 1284
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1287,
                  "end": 1296
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mi_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1297,
                  "end": 1307
                },
                "start": 1287,
                "end": 1307
              },
              "importKind": "value",
              "start": 1256,
              "end": 1308
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_mu_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1320,
                "end": 1341
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1344,
                  "end": 1353
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mu_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1354,
                  "end": 1364
                },
                "start": 1344,
                "end": 1364
              },
              "importKind": "value",
              "start": 1313,
              "end": 1365
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
                    "start": 1403,
                    "end": 1434
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_c_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1441,
                      "end": 1461
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1437,
                    "end": 1463
                  },
                  "definite": false,
                  "start": 1403,
                  "end": 1463
                }
              ],
              "declare": false,
              "start": 1399,
              "end": 1464
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
                      "start": 1480,
                      "end": 1510
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_private_c_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1517,
                        "end": 1537
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1513,
                      "end": 1539
                    },
                    "definite": false,
                    "start": 1480,
                    "end": 1539
                  }
                ],
                "declare": false,
                "start": 1476,
                "end": 1540
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1469,
              "end": 1540
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
                    "start": 1549,
                    "end": 1580
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_e_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1583,
                      "end": 1603
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Happy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1604,
                      "end": 1609
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1583,
                    "end": 1609
                  },
                  "definite": false,
                  "start": 1549,
                  "end": 1609
                }
              ],
              "declare": false,
              "start": 1545,
              "end": 1610
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
                      "start": 1626,
                      "end": 1656
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_private_e_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1659,
                        "end": 1679
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Grumpy",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1680,
                        "end": 1686
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1659,
                      "end": 1686
                    },
                    "definite": false,
                    "start": 1626,
                    "end": 1686
                  }
                ],
                "declare": false,
                "start": 1622,
                "end": 1687
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1615,
              "end": 1687
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
                    "start": 1696,
                    "end": 1727
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_f_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1730,
                      "end": 1750
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1730,
                    "end": 1752
                  },
                  "definite": false,
                  "start": 1696,
                  "end": 1752
                }
              ],
              "declare": false,
              "start": 1692,
              "end": 1753
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
                      "start": 1769,
                      "end": 1799
                    },
                    "init": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_private_f_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1802,
                        "end": 1822
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1802,
                      "end": 1824
                    },
                    "definite": false,
                    "start": 1769,
                    "end": 1824
                  }
                ],
                "declare": false,
                "start": 1765,
                "end": 1825
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1758,
              "end": 1825
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
                    "start": 1834,
                    "end": 1865
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_v_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1868,
                    "end": 1888
                  },
                  "definite": false,
                  "start": 1834,
                  "end": 1888
                }
              ],
              "declare": false,
              "start": 1830,
              "end": 1889
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
                      "start": 1905,
                      "end": 1935
                    },
                    "init": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_v_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1938,
                      "end": 1958
                    },
                    "definite": false,
                    "start": 1905,
                    "end": 1958
                  }
                ],
                "declare": false,
                "start": 1901,
                "end": 1959
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1894,
              "end": 1959
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
                          "start": 2001,
                          "end": 2021
                        },
                        "typeArguments": null,
                        "start": 2001,
                        "end": 2021
                      },
                      "start": 1999,
                      "end": 2021
                    },
                    "start": 1968,
                    "end": 2021
                  },
                  "init": null,
                  "definite": false,
                  "start": 1968,
                  "end": 2021
                }
              ],
              "declare": false,
              "start": 1964,
              "end": 2022
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
                            "start": 2070,
                            "end": 2090
                          },
                          "typeArguments": null,
                          "start": 2070,
                          "end": 2090
                        },
                        "start": 2068,
                        "end": 2090
                      },
                      "start": 2038,
                      "end": 2090
                    },
                    "init": null,
                    "definite": false,
                    "start": 2038,
                    "end": 2090
                  }
                ],
                "declare": false,
                "start": 2034,
                "end": 2091
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2027,
              "end": 2091
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
                    "start": 2100,
                    "end": 2132
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
                        "start": 2139,
                        "end": 2160
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2161,
                        "end": 2162
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2139,
                      "end": 2162
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 2135,
                    "end": 2164
                  },
                  "definite": false,
                  "start": 2100,
                  "end": 2164
                }
              ],
              "declare": false,
              "start": 2096,
              "end": 2165
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
                      "start": 2181,
                      "end": 2212
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
                          "start": 2219,
                          "end": 2240
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2241,
                          "end": 2242
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2219,
                        "end": 2242
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2215,
                      "end": 2244
                    },
                    "definite": false,
                    "start": 2181,
                    "end": 2244
                  }
                ],
                "declare": false,
                "start": 2177,
                "end": 2245
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2170,
              "end": 2245
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
                            "start": 2288,
                            "end": 2309
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2310,
                            "end": 2311
                          },
                          "start": 2288,
                          "end": 2311
                        },
                        "typeArguments": null,
                        "start": 2288,
                        "end": 2311
                      },
                      "start": 2286,
                      "end": 2311
                    },
                    "start": 2254,
                    "end": 2311
                  },
                  "init": null,
                  "definite": false,
                  "start": 2254,
                  "end": 2311
                }
              ],
              "declare": false,
              "start": 2250,
              "end": 2312
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
                              "start": 2361,
                              "end": 2382
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2383,
                              "end": 2384
                            },
                            "start": 2361,
                            "end": 2384
                          },
                          "typeArguments": null,
                          "start": 2361,
                          "end": 2384
                        },
                        "start": 2359,
                        "end": 2384
                      },
                      "start": 2328,
                      "end": 2384
                    },
                    "init": null,
                    "definite": false,
                    "start": 2328,
                    "end": 2384
                  }
                ],
                "declare": false,
                "start": 2324,
                "end": 2385
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2317,
              "end": 2385
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_c_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2452,
                "end": 2471
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2474,
                  "end": 2482
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2483,
                  "end": 2491
                },
                "start": 2474,
                "end": 2491
              },
              "importKind": "value",
              "start": 2445,
              "end": 2492
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_e_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2504,
                "end": 2523
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2526,
                  "end": 2534
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2535,
                  "end": 2543
                },
                "start": 2526,
                "end": 2543
              },
              "importKind": "value",
              "start": 2497,
              "end": 2544
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_f_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2556,
                "end": 2575
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2578,
                  "end": 2586
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2587,
                  "end": 2595
                },
                "start": 2578,
                "end": 2595
              },
              "importKind": "value",
              "start": 2549,
              "end": 2596
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_v_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2608,
                "end": 2627
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2630,
                  "end": 2638
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2639,
                  "end": 2647
                },
                "start": 2630,
                "end": 2647
              },
              "importKind": "value",
              "start": 2601,
              "end": 2648
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_i_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2660,
                "end": 2679
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2682,
                  "end": 2690
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2691,
                  "end": 2699
                },
                "start": 2682,
                "end": 2699
              },
              "importKind": "value",
              "start": 2653,
              "end": 2700
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_mi_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2712,
                "end": 2732
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2735,
                  "end": 2743
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mi_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2744,
                  "end": 2753
                },
                "start": 2735,
                "end": 2753
              },
              "importKind": "value",
              "start": 2705,
              "end": 2754
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_mu_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2766,
                "end": 2786
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2789,
                  "end": 2797
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mu_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2798,
                  "end": 2807
                },
                "start": 2789,
                "end": 2807
              },
              "importKind": "value",
              "start": 2759,
              "end": 2808
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
                    "start": 2846,
                    "end": 2876
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_c_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2883,
                      "end": 2902
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 2879,
                    "end": 2904
                  },
                  "definite": false,
                  "start": 2846,
                  "end": 2904
                }
              ],
              "declare": false,
              "start": 2842,
              "end": 2905
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
                      "start": 2921,
                      "end": 2950
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_private_c_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2957,
                        "end": 2976
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2953,
                      "end": 2978
                    },
                    "definite": false,
                    "start": 2921,
                    "end": 2978
                  }
                ],
                "declare": false,
                "start": 2917,
                "end": 2979
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2910,
              "end": 2979
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
                    "start": 2988,
                    "end": 3018
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_e_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3021,
                      "end": 3040
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Happy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3041,
                      "end": 3046
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3021,
                    "end": 3046
                  },
                  "definite": false,
                  "start": 2988,
                  "end": 3046
                }
              ],
              "declare": false,
              "start": 2984,
              "end": 3047
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
                      "start": 3063,
                      "end": 3092
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_private_e_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3095,
                        "end": 3114
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Grumpy",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3115,
                        "end": 3121
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3095,
                      "end": 3121
                    },
                    "definite": false,
                    "start": 3063,
                    "end": 3121
                  }
                ],
                "declare": false,
                "start": 3059,
                "end": 3122
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3052,
              "end": 3122
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
                    "start": 3131,
                    "end": 3161
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_f_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3164,
                      "end": 3183
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 3164,
                    "end": 3185
                  },
                  "definite": false,
                  "start": 3131,
                  "end": 3185
                }
              ],
              "declare": false,
              "start": 3127,
              "end": 3186
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
                      "start": 3202,
                      "end": 3231
                    },
                    "init": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "im_private_f_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3234,
                        "end": 3253
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 3234,
                      "end": 3255
                    },
                    "definite": false,
                    "start": 3202,
                    "end": 3255
                  }
                ],
                "declare": false,
                "start": 3198,
                "end": 3256
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3191,
              "end": 3256
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
                    "start": 3265,
                    "end": 3295
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_v_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3298,
                    "end": 3317
                  },
                  "definite": false,
                  "start": 3265,
                  "end": 3317
                }
              ],
              "declare": false,
              "start": 3261,
              "end": 3318
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
                      "start": 3334,
                      "end": 3363
                    },
                    "init": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_v_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3366,
                      "end": 3385
                    },
                    "definite": false,
                    "start": 3334,
                    "end": 3385
                  }
                ],
                "declare": false,
                "start": 3330,
                "end": 3386
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3323,
              "end": 3386
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
                          "start": 3427,
                          "end": 3446
                        },
                        "typeArguments": null,
                        "start": 3427,
                        "end": 3446
                      },
                      "start": 3425,
                      "end": 3446
                    },
                    "start": 3395,
                    "end": 3446
                  },
                  "init": null,
                  "definite": false,
                  "start": 3395,
                  "end": 3446
                }
              ],
              "declare": false,
              "start": 3391,
              "end": 3447
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
                            "start": 3494,
                            "end": 3513
                          },
                          "typeArguments": null,
                          "start": 3494,
                          "end": 3513
                        },
                        "start": 3492,
                        "end": 3513
                      },
                      "start": 3463,
                      "end": 3513
                    },
                    "init": null,
                    "definite": false,
                    "start": 3463,
                    "end": 3513
                  }
                ],
                "declare": false,
                "start": 3459,
                "end": 3514
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3452,
              "end": 3514
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
                    "start": 3523,
                    "end": 3554
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
                        "start": 3561,
                        "end": 3581
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3582,
                        "end": 3583
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3561,
                      "end": 3583
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 3557,
                    "end": 3585
                  },
                  "definite": false,
                  "start": 3523,
                  "end": 3585
                }
              ],
              "declare": false,
              "start": 3519,
              "end": 3586
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
                      "start": 3602,
                      "end": 3632
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
                          "start": 3639,
                          "end": 3659
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3660,
                          "end": 3661
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3639,
                        "end": 3661
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3635,
                      "end": 3663
                    },
                    "definite": false,
                    "start": 3602,
                    "end": 3663
                  }
                ],
                "declare": false,
                "start": 3598,
                "end": 3664
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3591,
              "end": 3664
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
                            "start": 3706,
                            "end": 3726
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3727,
                            "end": 3728
                          },
                          "start": 3706,
                          "end": 3728
                        },
                        "typeArguments": null,
                        "start": 3706,
                        "end": 3728
                      },
                      "start": 3704,
                      "end": 3728
                    },
                    "start": 3673,
                    "end": 3728
                  },
                  "init": null,
                  "definite": false,
                  "start": 3673,
                  "end": 3728
                }
              ],
              "declare": false,
              "start": 3669,
              "end": 3729
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
                              "start": 3777,
                              "end": 3797
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3798,
                              "end": 3799
                            },
                            "start": 3777,
                            "end": 3799
                          },
                          "typeArguments": null,
                          "start": 3777,
                          "end": 3799
                        },
                        "start": 3775,
                        "end": 3799
                      },
                      "start": 3745,
                      "end": 3799
                    },
                    "init": null,
                    "definite": false,
                    "start": 3745,
                    "end": 3799
                  }
                ],
                "declare": false,
                "start": 3741,
                "end": 3800
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3734,
              "end": 3800
            }
          ],
          "start": 921,
          "end": 3802
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 897,
        "end": 3802
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 890,
      "end": 3802
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "import_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 3814,
        "end": 3828
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_c_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3896,
              "end": 3916
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3919,
                "end": 3928
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3929,
                "end": 3938
              },
              "start": 3919,
              "end": 3938
            },
            "importKind": "value",
            "start": 3889,
            "end": 3939
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_e_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3951,
              "end": 3971
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3974,
                "end": 3983
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3984,
                "end": 3993
              },
              "start": 3974,
              "end": 3993
            },
            "importKind": "value",
            "start": 3944,
            "end": 3994
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_f_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4006,
              "end": 4026
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4029,
                "end": 4038
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "f_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4039,
                "end": 4048
              },
              "start": 4029,
              "end": 4048
            },
            "importKind": "value",
            "start": 3999,
            "end": 4049
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_v_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4061,
              "end": 4081
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4084,
                "end": 4093
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "v_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4094,
                "end": 4103
              },
              "start": 4084,
              "end": 4103
            },
            "importKind": "value",
            "start": 4054,
            "end": 4104
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_i_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4116,
              "end": 4136
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4139,
                "end": 4148
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "i_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4149,
                "end": 4158
              },
              "start": 4139,
              "end": 4158
            },
            "importKind": "value",
            "start": 4109,
            "end": 4159
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_mi_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4171,
              "end": 4192
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4195,
                "end": 4204
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "mi_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4205,
                "end": 4215
              },
              "start": 4195,
              "end": 4215
            },
            "importKind": "value",
            "start": 4164,
            "end": 4216
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_mu_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4228,
              "end": 4249
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4252,
                "end": 4261
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "mu_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 4262,
                "end": 4272
              },
              "start": 4252,
              "end": 4272
            },
            "importKind": "value",
            "start": 4221,
            "end": 4273
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
                  "start": 4311,
                  "end": 4342
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_c_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4349,
                    "end": 4369
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 4345,
                  "end": 4371
                },
                "definite": false,
                "start": 4311,
                "end": 4371
              }
            ],
            "declare": false,
            "start": 4307,
            "end": 4372
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
                    "start": 4388,
                    "end": 4418
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_c_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4425,
                      "end": 4445
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 4421,
                    "end": 4447
                  },
                  "definite": false,
                  "start": 4388,
                  "end": 4447
                }
              ],
              "declare": false,
              "start": 4384,
              "end": 4448
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4377,
            "end": 4448
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
                  "start": 4457,
                  "end": 4488
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_e_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4491,
                    "end": 4511
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Happy",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4512,
                    "end": 4517
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4491,
                  "end": 4517
                },
                "definite": false,
                "start": 4457,
                "end": 4517
              }
            ],
            "declare": false,
            "start": 4453,
            "end": 4518
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
                    "start": 4534,
                    "end": 4564
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_e_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4567,
                      "end": 4587
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Grumpy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4588,
                      "end": 4594
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4567,
                    "end": 4594
                  },
                  "definite": false,
                  "start": 4534,
                  "end": 4594
                }
              ],
              "declare": false,
              "start": 4530,
              "end": 4595
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4523,
            "end": 4595
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
                  "start": 4604,
                  "end": 4635
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_f_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4638,
                    "end": 4658
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 4638,
                  "end": 4660
                },
                "definite": false,
                "start": 4604,
                "end": 4660
              }
            ],
            "declare": false,
            "start": 4600,
            "end": 4661
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
                    "start": 4677,
                    "end": 4707
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_f_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4710,
                      "end": 4730
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 4710,
                    "end": 4732
                  },
                  "definite": false,
                  "start": 4677,
                  "end": 4732
                }
              ],
              "declare": false,
              "start": 4673,
              "end": 4733
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4666,
            "end": 4733
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
                  "start": 4742,
                  "end": 4773
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_private_v_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4776,
                  "end": 4796
                },
                "definite": false,
                "start": 4742,
                "end": 4796
              }
            ],
            "declare": false,
            "start": 4738,
            "end": 4797
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
                    "start": 4813,
                    "end": 4843
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_v_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4846,
                    "end": 4866
                  },
                  "definite": false,
                  "start": 4813,
                  "end": 4866
                }
              ],
              "declare": false,
              "start": 4809,
              "end": 4867
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4802,
            "end": 4867
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
                        "start": 4909,
                        "end": 4929
                      },
                      "typeArguments": null,
                      "start": 4909,
                      "end": 4929
                    },
                    "start": 4907,
                    "end": 4929
                  },
                  "start": 4876,
                  "end": 4929
                },
                "init": null,
                "definite": false,
                "start": 4876,
                "end": 4929
              }
            ],
            "declare": false,
            "start": 4872,
            "end": 4930
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
                          "start": 4978,
                          "end": 4998
                        },
                        "typeArguments": null,
                        "start": 4978,
                        "end": 4998
                      },
                      "start": 4976,
                      "end": 4998
                    },
                    "start": 4946,
                    "end": 4998
                  },
                  "init": null,
                  "definite": false,
                  "start": 4946,
                  "end": 4998
                }
              ],
              "declare": false,
              "start": 4942,
              "end": 4999
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4935,
            "end": 4999
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
                  "start": 5008,
                  "end": 5040
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
                      "start": 5047,
                      "end": 5068
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5069,
                      "end": 5070
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5047,
                    "end": 5070
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 5043,
                  "end": 5072
                },
                "definite": false,
                "start": 5008,
                "end": 5072
              }
            ],
            "declare": false,
            "start": 5004,
            "end": 5073
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
                    "start": 5089,
                    "end": 5120
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
                        "start": 5127,
                        "end": 5148
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5149,
                        "end": 5150
                      },
                      "optional": false,
                      "computed": false,
                      "start": 5127,
                      "end": 5150
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 5123,
                    "end": 5152
                  },
                  "definite": false,
                  "start": 5089,
                  "end": 5152
                }
              ],
              "declare": false,
              "start": 5085,
              "end": 5153
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5078,
            "end": 5153
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
                          "start": 5196,
                          "end": 5217
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5218,
                          "end": 5219
                        },
                        "start": 5196,
                        "end": 5219
                      },
                      "typeArguments": null,
                      "start": 5196,
                      "end": 5219
                    },
                    "start": 5194,
                    "end": 5219
                  },
                  "start": 5162,
                  "end": 5219
                },
                "init": null,
                "definite": false,
                "start": 5162,
                "end": 5219
              }
            ],
            "declare": false,
            "start": 5158,
            "end": 5220
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
                            "start": 5269,
                            "end": 5290
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5291,
                            "end": 5292
                          },
                          "start": 5269,
                          "end": 5292
                        },
                        "typeArguments": null,
                        "start": 5269,
                        "end": 5292
                      },
                      "start": 5267,
                      "end": 5292
                    },
                    "start": 5236,
                    "end": 5292
                  },
                  "init": null,
                  "definite": false,
                  "start": 5236,
                  "end": 5292
                }
              ],
              "declare": false,
              "start": 5232,
              "end": 5293
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5225,
            "end": 5293
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_c_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 5358,
              "end": 5377
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5380,
                "end": 5388
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5389,
                "end": 5397
              },
              "start": 5380,
              "end": 5397
            },
            "importKind": "value",
            "start": 5351,
            "end": 5398
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_e_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 5410,
              "end": 5429
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5432,
                "end": 5440
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5441,
                "end": 5449
              },
              "start": 5432,
              "end": 5449
            },
            "importKind": "value",
            "start": 5403,
            "end": 5450
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_f_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 5462,
              "end": 5481
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5484,
                "end": 5492
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "f_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5493,
                "end": 5501
              },
              "start": 5484,
              "end": 5501
            },
            "importKind": "value",
            "start": 5455,
            "end": 5502
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_v_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 5514,
              "end": 5533
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5536,
                "end": 5544
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "v_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5545,
                "end": 5553
              },
              "start": 5536,
              "end": 5553
            },
            "importKind": "value",
            "start": 5507,
            "end": 5554
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_i_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 5566,
              "end": 5585
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5588,
                "end": 5596
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "i_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5597,
                "end": 5605
              },
              "start": 5588,
              "end": 5605
            },
            "importKind": "value",
            "start": 5559,
            "end": 5606
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_mi_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 5618,
              "end": 5638
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5641,
                "end": 5649
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "mi_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5650,
                "end": 5659
              },
              "start": 5641,
              "end": 5659
            },
            "importKind": "value",
            "start": 5611,
            "end": 5660
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_mu_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 5672,
              "end": 5692
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5695,
                "end": 5703
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "mu_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 5704,
                "end": 5713
              },
              "start": 5695,
              "end": 5713
            },
            "importKind": "value",
            "start": 5665,
            "end": 5714
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
                  "start": 5752,
                  "end": 5782
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_c_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5789,
                    "end": 5808
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 5785,
                  "end": 5810
                },
                "definite": false,
                "start": 5752,
                "end": 5810
              }
            ],
            "declare": false,
            "start": 5748,
            "end": 5811
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
                    "start": 5827,
                    "end": 5856
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_c_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5863,
                      "end": 5882
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 5859,
                    "end": 5884
                  },
                  "definite": false,
                  "start": 5827,
                  "end": 5884
                }
              ],
              "declare": false,
              "start": 5823,
              "end": 5885
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5816,
            "end": 5885
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
                  "start": 5894,
                  "end": 5924
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_e_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5927,
                    "end": 5946
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Happy",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5947,
                    "end": 5952
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5927,
                  "end": 5952
                },
                "definite": false,
                "start": 5894,
                "end": 5952
              }
            ],
            "declare": false,
            "start": 5890,
            "end": 5953
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
                    "start": 5969,
                    "end": 5998
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_e_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6001,
                      "end": 6020
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Grumpy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6021,
                      "end": 6027
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6001,
                    "end": 6027
                  },
                  "definite": false,
                  "start": 5969,
                  "end": 6027
                }
              ],
              "declare": false,
              "start": 5965,
              "end": 6028
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5958,
            "end": 6028
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
                  "start": 6037,
                  "end": 6067
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_f_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6070,
                    "end": 6089
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 6070,
                  "end": 6091
                },
                "definite": false,
                "start": 6037,
                "end": 6091
              }
            ],
            "declare": false,
            "start": 6033,
            "end": 6092
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
                    "start": 6108,
                    "end": 6137
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "im_private_f_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6140,
                      "end": 6159
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 6140,
                    "end": 6161
                  },
                  "definite": false,
                  "start": 6108,
                  "end": 6161
                }
              ],
              "declare": false,
              "start": 6104,
              "end": 6162
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6097,
            "end": 6162
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
                  "start": 6171,
                  "end": 6201
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "im_private_v_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6204,
                  "end": 6223
                },
                "definite": false,
                "start": 6171,
                "end": 6223
              }
            ],
            "declare": false,
            "start": 6167,
            "end": 6224
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
                    "start": 6240,
                    "end": 6269
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "im_private_v_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6272,
                    "end": 6291
                  },
                  "definite": false,
                  "start": 6240,
                  "end": 6291
                }
              ],
              "declare": false,
              "start": 6236,
              "end": 6292
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6229,
            "end": 6292
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
                        "start": 6333,
                        "end": 6352
                      },
                      "typeArguments": null,
                      "start": 6333,
                      "end": 6352
                    },
                    "start": 6331,
                    "end": 6352
                  },
                  "start": 6301,
                  "end": 6352
                },
                "init": null,
                "definite": false,
                "start": 6301,
                "end": 6352
              }
            ],
            "declare": false,
            "start": 6297,
            "end": 6353
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
                          "start": 6400,
                          "end": 6419
                        },
                        "typeArguments": null,
                        "start": 6400,
                        "end": 6419
                      },
                      "start": 6398,
                      "end": 6419
                    },
                    "start": 6369,
                    "end": 6419
                  },
                  "init": null,
                  "definite": false,
                  "start": 6369,
                  "end": 6419
                }
              ],
              "declare": false,
              "start": 6365,
              "end": 6420
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6358,
            "end": 6420
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
                  "start": 6429,
                  "end": 6460
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
                      "start": 6467,
                      "end": 6487
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6488,
                      "end": 6489
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6467,
                    "end": 6489
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 6463,
                  "end": 6491
                },
                "definite": false,
                "start": 6429,
                "end": 6491
              }
            ],
            "declare": false,
            "start": 6425,
            "end": 6492
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
                    "start": 6508,
                    "end": 6538
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
                        "start": 6545,
                        "end": 6565
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6566,
                        "end": 6567
                      },
                      "optional": false,
                      "computed": false,
                      "start": 6545,
                      "end": 6567
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 6541,
                    "end": 6569
                  },
                  "definite": false,
                  "start": 6508,
                  "end": 6569
                }
              ],
              "declare": false,
              "start": 6504,
              "end": 6570
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6497,
            "end": 6570
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
                          "start": 6612,
                          "end": 6632
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6633,
                          "end": 6634
                        },
                        "start": 6612,
                        "end": 6634
                      },
                      "typeArguments": null,
                      "start": 6612,
                      "end": 6634
                    },
                    "start": 6610,
                    "end": 6634
                  },
                  "start": 6579,
                  "end": 6634
                },
                "init": null,
                "definite": false,
                "start": 6579,
                "end": 6634
              }
            ],
            "declare": false,
            "start": 6575,
            "end": 6635
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
                            "start": 6683,
                            "end": 6703
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6704,
                            "end": 6705
                          },
                          "start": 6683,
                          "end": 6705
                        },
                        "typeArguments": null,
                        "start": 6683,
                        "end": 6705
                      },
                      "start": 6681,
                      "end": 6705
                    },
                    "start": 6651,
                    "end": 6705
                  },
                  "init": null,
                  "definite": false,
                  "start": 6651,
                  "end": 6705
                }
              ],
              "declare": false,
              "start": 6647,
              "end": 6706
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6640,
            "end": 6706
          }
        ],
        "start": 3829,
        "end": 6708
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 3804,
      "end": 6708
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 20,
  "end": 6708
}
```
