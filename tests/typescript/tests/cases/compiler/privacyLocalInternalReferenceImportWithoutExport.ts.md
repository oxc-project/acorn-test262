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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 20,
    "end": 29,
    "range": [
      20,
      29
    ]
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 30,
    "end": 39,
    "range": [
      30,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 46,
    "end": 52,
    "range": [
      46,
      52
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 53,
    "end": 58,
    "range": [
      53,
      58
    ]
  },
  {
    "type": "Identifier",
    "value": "c_private",
    "start": 59,
    "end": 68,
    "range": [
      59,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 81,
    "end": 87,
    "range": [
      81,
      87
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 88,
    "end": 92,
    "range": [
      88,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "e_private",
    "start": 93,
    "end": 102,
    "range": [
      93,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "Happy",
    "start": 113,
    "end": 118,
    "range": [
      113,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "Grumpy",
    "start": 128,
    "end": 134,
    "range": [
      128,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 145,
    "end": 151,
    "range": [
      145,
      151
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 152,
    "end": 160,
    "range": [
      152,
      160
    ]
  },
  {
    "type": "Identifier",
    "value": "f_private",
    "start": 161,
    "end": 170,
    "range": [
      161,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 183,
    "end": 189,
    "range": [
      183,
      189
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 190,
    "end": 193,
    "range": [
      190,
      193
    ]
  },
  {
    "type": "Identifier",
    "value": "c_private",
    "start": 194,
    "end": 203,
    "range": [
      194,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 203,
    "end": 204,
    "range": [
      203,
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
    "value": ";",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 217,
    "end": 223,
    "range": [
      217,
      223
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 224,
    "end": 227,
    "range": [
      224,
      227
    ]
  },
  {
    "type": "Identifier",
    "value": "v_private",
    "start": 228,
    "end": 237,
    "range": [
      228,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 240,
    "end": 243,
    "range": [
      240,
      243
    ]
  },
  {
    "type": "Identifier",
    "value": "c_private",
    "start": 244,
    "end": 253,
    "range": [
      244,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 261,
    "end": 267,
    "range": [
      261,
      267
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 268,
    "end": 277,
    "range": [
      268,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "i_private",
    "start": 278,
    "end": 287,
    "range": [
      278,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 300,
    "end": 306,
    "range": [
      300,
      306
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 307,
    "end": 316,
    "range": [
      307,
      316
    ]
  },
  {
    "type": "Identifier",
    "value": "mi_private",
    "start": 317,
    "end": 327,
    "range": [
      317,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 338,
    "end": 344,
    "range": [
      338,
      344
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 345,
    "end": 350,
    "range": [
      345,
      350
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 353,
    "end": 354,
    "range": [
      353,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 375,
    "end": 381,
    "range": [
      375,
      381
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 382,
    "end": 391,
    "range": [
      382,
      391
    ]
  },
  {
    "type": "Identifier",
    "value": "mu_private",
    "start": 392,
    "end": 402,
    "range": [
      392,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 413,
    "end": 419,
    "range": [
      413,
      419
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 420,
    "end": 429,
    "range": [
      420,
      429
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 472,
    "end": 478,
    "range": [
      472,
      478
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 479,
    "end": 488,
    "range": [
      479,
      488
    ]
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 489,
    "end": 497,
    "range": [
      489,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 504,
    "end": 510,
    "range": [
      504,
      510
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 511,
    "end": 516,
    "range": [
      511,
      516
    ]
  },
  {
    "type": "Identifier",
    "value": "c_public",
    "start": 517,
    "end": 525,
    "range": [
      517,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 538,
    "end": 544,
    "range": [
      538,
      544
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 545,
    "end": 549,
    "range": [
      545,
      549
    ]
  },
  {
    "type": "Identifier",
    "value": "e_public",
    "start": 550,
    "end": 558,
    "range": [
      550,
      558
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Identifier",
    "value": "Happy",
    "start": 569,
    "end": 574,
    "range": [
      569,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Identifier",
    "value": "Grumpy",
    "start": 584,
    "end": 590,
    "range": [
      584,
      590
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 601,
    "end": 607,
    "range": [
      601,
      607
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 608,
    "end": 616,
    "range": [
      608,
      616
    ]
  },
  {
    "type": "Identifier",
    "value": "f_public",
    "start": 617,
    "end": 625,
    "range": [
      617,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 638,
    "end": 644,
    "range": [
      638,
      644
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 645,
    "end": 648,
    "range": [
      645,
      648
    ]
  },
  {
    "type": "Identifier",
    "value": "c_public",
    "start": 649,
    "end": 657,
    "range": [
      649,
      657
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 657,
    "end": 658,
    "range": [
      657,
      658
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 671,
    "end": 677,
    "range": [
      671,
      677
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 678,
    "end": 681,
    "range": [
      678,
      681
    ]
  },
  {
    "type": "Identifier",
    "value": "v_public",
    "start": 682,
    "end": 690,
    "range": [
      682,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 691,
    "end": 692,
    "range": [
      691,
      692
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 693,
    "end": 695,
    "range": [
      693,
      695
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 695,
    "end": 696,
    "range": [
      695,
      696
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 701,
    "end": 707,
    "range": [
      701,
      707
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 708,
    "end": 717,
    "range": [
      708,
      717
    ]
  },
  {
    "type": "Identifier",
    "value": "i_public",
    "start": 718,
    "end": 726,
    "range": [
      718,
      726
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 733,
    "end": 734,
    "range": [
      733,
      734
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 739,
    "end": 745,
    "range": [
      739,
      745
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 746,
    "end": 755,
    "range": [
      746,
      755
    ]
  },
  {
    "type": "Identifier",
    "value": "mi_public",
    "start": 756,
    "end": 765,
    "range": [
      756,
      765
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 766,
    "end": 767,
    "range": [
      766,
      767
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 776,
    "end": 782,
    "range": [
      776,
      782
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 783,
    "end": 788,
    "range": [
      783,
      788
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 789,
    "end": 790,
    "range": [
      789,
      790
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 801,
    "end": 802,
    "range": [
      801,
      802
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 807,
    "end": 808,
    "range": [
      807,
      808
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 813,
    "end": 819,
    "range": [
      813,
      819
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 820,
    "end": 829,
    "range": [
      820,
      829
    ]
  },
  {
    "type": "Identifier",
    "value": "mu_public",
    "start": 830,
    "end": 839,
    "range": [
      830,
      839
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 840,
    "end": 841,
    "range": [
      840,
      841
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 850,
    "end": 856,
    "range": [
      850,
      856
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 857,
    "end": 866,
    "range": [
      857,
      866
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 867,
    "end": 868,
    "range": [
      867,
      868
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 869,
    "end": 870,
    "range": [
      869,
      870
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 879,
    "end": 880,
    "range": [
      879,
      880
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 887,
    "end": 888,
    "range": [
      887,
      888
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 890,
    "end": 896,
    "range": [
      890,
      896
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 897,
    "end": 906,
    "range": [
      897,
      906
    ]
  },
  {
    "type": "Identifier",
    "value": "import_public",
    "start": 907,
    "end": 920,
    "range": [
      907,
      920
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 921,
    "end": 922,
    "range": [
      921,
      922
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 981,
    "end": 987,
    "range": [
      981,
      987
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_c_private",
    "start": 988,
    "end": 1008,
    "range": [
      988,
      1008
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1009,
    "end": 1010,
    "range": [
      1009,
      1010
    ]
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 1011,
    "end": 1020,
    "range": [
      1011,
      1020
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1020,
    "end": 1021,
    "range": [
      1020,
      1021
    ]
  },
  {
    "type": "Identifier",
    "value": "c_private",
    "start": 1021,
    "end": 1030,
    "range": [
      1021,
      1030
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1030,
    "end": 1031,
    "range": [
      1030,
      1031
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1036,
    "end": 1042,
    "range": [
      1036,
      1042
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_e_private",
    "start": 1043,
    "end": 1063,
    "range": [
      1043,
      1063
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1064,
    "end": 1065,
    "range": [
      1064,
      1065
    ]
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 1066,
    "end": 1075,
    "range": [
      1066,
      1075
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1075,
    "end": 1076,
    "range": [
      1075,
      1076
    ]
  },
  {
    "type": "Identifier",
    "value": "e_private",
    "start": 1076,
    "end": 1085,
    "range": [
      1076,
      1085
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1085,
    "end": 1086,
    "range": [
      1085,
      1086
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1091,
    "end": 1097,
    "range": [
      1091,
      1097
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_f_private",
    "start": 1098,
    "end": 1118,
    "range": [
      1098,
      1118
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1119,
    "end": 1120,
    "range": [
      1119,
      1120
    ]
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 1121,
    "end": 1130,
    "range": [
      1121,
      1130
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1130,
    "end": 1131,
    "range": [
      1130,
      1131
    ]
  },
  {
    "type": "Identifier",
    "value": "f_private",
    "start": 1131,
    "end": 1140,
    "range": [
      1131,
      1140
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1140,
    "end": 1141,
    "range": [
      1140,
      1141
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1146,
    "end": 1152,
    "range": [
      1146,
      1152
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_v_private",
    "start": 1153,
    "end": 1173,
    "range": [
      1153,
      1173
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1174,
    "end": 1175,
    "range": [
      1174,
      1175
    ]
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 1176,
    "end": 1185,
    "range": [
      1176,
      1185
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1185,
    "end": 1186,
    "range": [
      1185,
      1186
    ]
  },
  {
    "type": "Identifier",
    "value": "v_private",
    "start": 1186,
    "end": 1195,
    "range": [
      1186,
      1195
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1195,
    "end": 1196,
    "range": [
      1195,
      1196
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1201,
    "end": 1207,
    "range": [
      1201,
      1207
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_i_private",
    "start": 1208,
    "end": 1228,
    "range": [
      1208,
      1228
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1229,
    "end": 1230,
    "range": [
      1229,
      1230
    ]
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 1231,
    "end": 1240,
    "range": [
      1231,
      1240
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1240,
    "end": 1241,
    "range": [
      1240,
      1241
    ]
  },
  {
    "type": "Identifier",
    "value": "i_private",
    "start": 1241,
    "end": 1250,
    "range": [
      1241,
      1250
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1250,
    "end": 1251,
    "range": [
      1250,
      1251
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1256,
    "end": 1262,
    "range": [
      1256,
      1262
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_private",
    "start": 1263,
    "end": 1284,
    "range": [
      1263,
      1284
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1285,
    "end": 1286,
    "range": [
      1285,
      1286
    ]
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 1287,
    "end": 1296,
    "range": [
      1287,
      1296
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1296,
    "end": 1297,
    "range": [
      1296,
      1297
    ]
  },
  {
    "type": "Identifier",
    "value": "mi_private",
    "start": 1297,
    "end": 1307,
    "range": [
      1297,
      1307
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1307,
    "end": 1308,
    "range": [
      1307,
      1308
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1313,
    "end": 1319,
    "range": [
      1313,
      1319
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_mu_private",
    "start": 1320,
    "end": 1341,
    "range": [
      1320,
      1341
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1342,
    "end": 1343,
    "range": [
      1342,
      1343
    ]
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 1344,
    "end": 1353,
    "range": [
      1344,
      1353
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1353,
    "end": 1354,
    "range": [
      1353,
      1354
    ]
  },
  {
    "type": "Identifier",
    "value": "mu_private",
    "start": 1354,
    "end": 1364,
    "range": [
      1354,
      1364
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1364,
    "end": 1365,
    "range": [
      1364,
      1365
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1399,
    "end": 1402,
    "range": [
      1399,
      1402
    ]
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_c_private",
    "start": 1403,
    "end": 1434,
    "range": [
      1403,
      1434
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1435,
    "end": 1436,
    "range": [
      1435,
      1436
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1437,
    "end": 1440,
    "range": [
      1437,
      1440
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_c_private",
    "start": 1441,
    "end": 1461,
    "range": [
      1441,
      1461
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1461,
    "end": 1462,
    "range": [
      1461,
      1462
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1462,
    "end": 1463,
    "range": [
      1462,
      1463
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1463,
    "end": 1464,
    "range": [
      1463,
      1464
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1469,
    "end": 1475,
    "range": [
      1469,
      1475
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1476,
    "end": 1479,
    "range": [
      1476,
      1479
    ]
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_c_private",
    "start": 1480,
    "end": 1510,
    "range": [
      1480,
      1510
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1511,
    "end": 1512,
    "range": [
      1511,
      1512
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1513,
    "end": 1516,
    "range": [
      1513,
      1516
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_c_private",
    "start": 1517,
    "end": 1537,
    "range": [
      1517,
      1537
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1537,
    "end": 1538,
    "range": [
      1537,
      1538
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1538,
    "end": 1539,
    "range": [
      1538,
      1539
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1539,
    "end": 1540,
    "range": [
      1539,
      1540
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1545,
    "end": 1548,
    "range": [
      1545,
      1548
    ]
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_e_private",
    "start": 1549,
    "end": 1580,
    "range": [
      1549,
      1580
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1581,
    "end": 1582,
    "range": [
      1581,
      1582
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_e_private",
    "start": 1583,
    "end": 1603,
    "range": [
      1583,
      1603
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1603,
    "end": 1604,
    "range": [
      1603,
      1604
    ]
  },
  {
    "type": "Identifier",
    "value": "Happy",
    "start": 1604,
    "end": 1609,
    "range": [
      1604,
      1609
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1609,
    "end": 1610,
    "range": [
      1609,
      1610
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1615,
    "end": 1621,
    "range": [
      1615,
      1621
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1622,
    "end": 1625,
    "range": [
      1622,
      1625
    ]
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_e_private",
    "start": 1626,
    "end": 1656,
    "range": [
      1626,
      1656
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1657,
    "end": 1658,
    "range": [
      1657,
      1658
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_e_private",
    "start": 1659,
    "end": 1679,
    "range": [
      1659,
      1679
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1679,
    "end": 1680,
    "range": [
      1679,
      1680
    ]
  },
  {
    "type": "Identifier",
    "value": "Grumpy",
    "start": 1680,
    "end": 1686,
    "range": [
      1680,
      1686
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1686,
    "end": 1687,
    "range": [
      1686,
      1687
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1692,
    "end": 1695,
    "range": [
      1692,
      1695
    ]
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_f_private",
    "start": 1696,
    "end": 1727,
    "range": [
      1696,
      1727
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1728,
    "end": 1729,
    "range": [
      1728,
      1729
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_f_private",
    "start": 1730,
    "end": 1750,
    "range": [
      1730,
      1750
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1750,
    "end": 1751,
    "range": [
      1750,
      1751
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1751,
    "end": 1752,
    "range": [
      1751,
      1752
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1752,
    "end": 1753,
    "range": [
      1752,
      1753
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1758,
    "end": 1764,
    "range": [
      1758,
      1764
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1765,
    "end": 1768,
    "range": [
      1765,
      1768
    ]
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_f_private",
    "start": 1769,
    "end": 1799,
    "range": [
      1769,
      1799
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1800,
    "end": 1801,
    "range": [
      1800,
      1801
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_f_private",
    "start": 1802,
    "end": 1822,
    "range": [
      1802,
      1822
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1822,
    "end": 1823,
    "range": [
      1822,
      1823
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1823,
    "end": 1824,
    "range": [
      1823,
      1824
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1824,
    "end": 1825,
    "range": [
      1824,
      1825
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1830,
    "end": 1833,
    "range": [
      1830,
      1833
    ]
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_v_private",
    "start": 1834,
    "end": 1865,
    "range": [
      1834,
      1865
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1866,
    "end": 1867,
    "range": [
      1866,
      1867
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_v_private",
    "start": 1868,
    "end": 1888,
    "range": [
      1868,
      1888
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1888,
    "end": 1889,
    "range": [
      1888,
      1889
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1894,
    "end": 1900,
    "range": [
      1894,
      1900
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1901,
    "end": 1904,
    "range": [
      1901,
      1904
    ]
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_v_private",
    "start": 1905,
    "end": 1935,
    "range": [
      1905,
      1935
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1936,
    "end": 1937,
    "range": [
      1936,
      1937
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_v_private",
    "start": 1938,
    "end": 1958,
    "range": [
      1938,
      1958
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1958,
    "end": 1959,
    "range": [
      1958,
      1959
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1964,
    "end": 1967,
    "range": [
      1964,
      1967
    ]
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_i_private",
    "start": 1968,
    "end": 1999,
    "range": [
      1968,
      1999
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1999,
    "end": 2000,
    "range": [
      1999,
      2000
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_i_private",
    "start": 2001,
    "end": 2021,
    "range": [
      2001,
      2021
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2021,
    "end": 2022,
    "range": [
      2021,
      2022
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2027,
    "end": 2033,
    "range": [
      2027,
      2033
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2034,
    "end": 2037,
    "range": [
      2034,
      2037
    ]
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_i_private",
    "start": 2038,
    "end": 2068,
    "range": [
      2038,
      2068
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2068,
    "end": 2069,
    "range": [
      2068,
      2069
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_i_private",
    "start": 2070,
    "end": 2090,
    "range": [
      2070,
      2090
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2090,
    "end": 2091,
    "range": [
      2090,
      2091
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2096,
    "end": 2099,
    "range": [
      2096,
      2099
    ]
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_mi_private",
    "start": 2100,
    "end": 2132,
    "range": [
      2100,
      2132
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2133,
    "end": 2134,
    "range": [
      2133,
      2134
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2135,
    "end": 2138,
    "range": [
      2135,
      2138
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_private",
    "start": 2139,
    "end": 2160,
    "range": [
      2139,
      2160
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2160,
    "end": 2161,
    "range": [
      2160,
      2161
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2161,
    "end": 2162,
    "range": [
      2161,
      2162
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2162,
    "end": 2163,
    "range": [
      2162,
      2163
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2163,
    "end": 2164,
    "range": [
      2163,
      2164
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2164,
    "end": 2165,
    "range": [
      2164,
      2165
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2170,
    "end": 2176,
    "range": [
      2170,
      2176
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2177,
    "end": 2180,
    "range": [
      2177,
      2180
    ]
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_mi_private",
    "start": 2181,
    "end": 2212,
    "range": [
      2181,
      2212
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2213,
    "end": 2214,
    "range": [
      2213,
      2214
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2215,
    "end": 2218,
    "range": [
      2215,
      2218
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_private",
    "start": 2219,
    "end": 2240,
    "range": [
      2219,
      2240
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2240,
    "end": 2241,
    "range": [
      2240,
      2241
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2241,
    "end": 2242,
    "range": [
      2241,
      2242
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2242,
    "end": 2243,
    "range": [
      2242,
      2243
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2243,
    "end": 2244,
    "range": [
      2243,
      2244
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2244,
    "end": 2245,
    "range": [
      2244,
      2245
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2250,
    "end": 2253,
    "range": [
      2250,
      2253
    ]
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_mu_private",
    "start": 2254,
    "end": 2286,
    "range": [
      2254,
      2286
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2286,
    "end": 2287,
    "range": [
      2286,
      2287
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_mu_private",
    "start": 2288,
    "end": 2309,
    "range": [
      2288,
      2309
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2309,
    "end": 2310,
    "range": [
      2309,
      2310
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2310,
    "end": 2311,
    "range": [
      2310,
      2311
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2311,
    "end": 2312,
    "range": [
      2311,
      2312
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2317,
    "end": 2323,
    "range": [
      2317,
      2323
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2324,
    "end": 2327,
    "range": [
      2324,
      2327
    ]
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_mu_private",
    "start": 2328,
    "end": 2359,
    "range": [
      2328,
      2359
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2359,
    "end": 2360,
    "range": [
      2359,
      2360
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_mu_private",
    "start": 2361,
    "end": 2382,
    "range": [
      2361,
      2382
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2382,
    "end": 2383,
    "range": [
      2382,
      2383
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2383,
    "end": 2384,
    "range": [
      2383,
      2384
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2384,
    "end": 2385,
    "range": [
      2384,
      2385
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2445,
    "end": 2451,
    "range": [
      2445,
      2451
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_c_public",
    "start": 2452,
    "end": 2471,
    "range": [
      2452,
      2471
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2472,
    "end": 2473,
    "range": [
      2472,
      2473
    ]
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 2474,
    "end": 2482,
    "range": [
      2474,
      2482
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2482,
    "end": 2483,
    "range": [
      2482,
      2483
    ]
  },
  {
    "type": "Identifier",
    "value": "c_public",
    "start": 2483,
    "end": 2491,
    "range": [
      2483,
      2491
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2491,
    "end": 2492,
    "range": [
      2491,
      2492
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2497,
    "end": 2503,
    "range": [
      2497,
      2503
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_e_public",
    "start": 2504,
    "end": 2523,
    "range": [
      2504,
      2523
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2524,
    "end": 2525,
    "range": [
      2524,
      2525
    ]
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 2526,
    "end": 2534,
    "range": [
      2526,
      2534
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2534,
    "end": 2535,
    "range": [
      2534,
      2535
    ]
  },
  {
    "type": "Identifier",
    "value": "e_public",
    "start": 2535,
    "end": 2543,
    "range": [
      2535,
      2543
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2543,
    "end": 2544,
    "range": [
      2543,
      2544
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2549,
    "end": 2555,
    "range": [
      2549,
      2555
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_f_public",
    "start": 2556,
    "end": 2575,
    "range": [
      2556,
      2575
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2576,
    "end": 2577,
    "range": [
      2576,
      2577
    ]
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 2578,
    "end": 2586,
    "range": [
      2578,
      2586
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2586,
    "end": 2587,
    "range": [
      2586,
      2587
    ]
  },
  {
    "type": "Identifier",
    "value": "f_public",
    "start": 2587,
    "end": 2595,
    "range": [
      2587,
      2595
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2595,
    "end": 2596,
    "range": [
      2595,
      2596
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2601,
    "end": 2607,
    "range": [
      2601,
      2607
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_v_public",
    "start": 2608,
    "end": 2627,
    "range": [
      2608,
      2627
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2628,
    "end": 2629,
    "range": [
      2628,
      2629
    ]
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 2630,
    "end": 2638,
    "range": [
      2630,
      2638
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2638,
    "end": 2639,
    "range": [
      2638,
      2639
    ]
  },
  {
    "type": "Identifier",
    "value": "v_public",
    "start": 2639,
    "end": 2647,
    "range": [
      2639,
      2647
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2647,
    "end": 2648,
    "range": [
      2647,
      2648
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2653,
    "end": 2659,
    "range": [
      2653,
      2659
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_i_public",
    "start": 2660,
    "end": 2679,
    "range": [
      2660,
      2679
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2680,
    "end": 2681,
    "range": [
      2680,
      2681
    ]
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 2682,
    "end": 2690,
    "range": [
      2682,
      2690
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2690,
    "end": 2691,
    "range": [
      2690,
      2691
    ]
  },
  {
    "type": "Identifier",
    "value": "i_public",
    "start": 2691,
    "end": 2699,
    "range": [
      2691,
      2699
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2699,
    "end": 2700,
    "range": [
      2699,
      2700
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2705,
    "end": 2711,
    "range": [
      2705,
      2711
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_public",
    "start": 2712,
    "end": 2732,
    "range": [
      2712,
      2732
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2733,
    "end": 2734,
    "range": [
      2733,
      2734
    ]
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 2735,
    "end": 2743,
    "range": [
      2735,
      2743
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2743,
    "end": 2744,
    "range": [
      2743,
      2744
    ]
  },
  {
    "type": "Identifier",
    "value": "mi_public",
    "start": 2744,
    "end": 2753,
    "range": [
      2744,
      2753
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2753,
    "end": 2754,
    "range": [
      2753,
      2754
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2759,
    "end": 2765,
    "range": [
      2759,
      2765
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_mu_public",
    "start": 2766,
    "end": 2786,
    "range": [
      2766,
      2786
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2787,
    "end": 2788,
    "range": [
      2787,
      2788
    ]
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 2789,
    "end": 2797,
    "range": [
      2789,
      2797
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2797,
    "end": 2798,
    "range": [
      2797,
      2798
    ]
  },
  {
    "type": "Identifier",
    "value": "mu_public",
    "start": 2798,
    "end": 2807,
    "range": [
      2798,
      2807
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2807,
    "end": 2808,
    "range": [
      2807,
      2808
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2842,
    "end": 2845,
    "range": [
      2842,
      2845
    ]
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_c_public",
    "start": 2846,
    "end": 2876,
    "range": [
      2846,
      2876
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2877,
    "end": 2878,
    "range": [
      2877,
      2878
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2879,
    "end": 2882,
    "range": [
      2879,
      2882
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_c_public",
    "start": 2883,
    "end": 2902,
    "range": [
      2883,
      2902
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2902,
    "end": 2903,
    "range": [
      2902,
      2903
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2903,
    "end": 2904,
    "range": [
      2903,
      2904
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2904,
    "end": 2905,
    "range": [
      2904,
      2905
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2910,
    "end": 2916,
    "range": [
      2910,
      2916
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2917,
    "end": 2920,
    "range": [
      2917,
      2920
    ]
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_c_public",
    "start": 2921,
    "end": 2950,
    "range": [
      2921,
      2950
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2951,
    "end": 2952,
    "range": [
      2951,
      2952
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2953,
    "end": 2956,
    "range": [
      2953,
      2956
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_c_public",
    "start": 2957,
    "end": 2976,
    "range": [
      2957,
      2976
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2976,
    "end": 2977,
    "range": [
      2976,
      2977
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2977,
    "end": 2978,
    "range": [
      2977,
      2978
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2978,
    "end": 2979,
    "range": [
      2978,
      2979
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2984,
    "end": 2987,
    "range": [
      2984,
      2987
    ]
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_e_public",
    "start": 2988,
    "end": 3018,
    "range": [
      2988,
      3018
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3019,
    "end": 3020,
    "range": [
      3019,
      3020
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_e_public",
    "start": 3021,
    "end": 3040,
    "range": [
      3021,
      3040
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3040,
    "end": 3041,
    "range": [
      3040,
      3041
    ]
  },
  {
    "type": "Identifier",
    "value": "Happy",
    "start": 3041,
    "end": 3046,
    "range": [
      3041,
      3046
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3046,
    "end": 3047,
    "range": [
      3046,
      3047
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3052,
    "end": 3058,
    "range": [
      3052,
      3058
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3059,
    "end": 3062,
    "range": [
      3059,
      3062
    ]
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_e_public",
    "start": 3063,
    "end": 3092,
    "range": [
      3063,
      3092
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3093,
    "end": 3094,
    "range": [
      3093,
      3094
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_e_public",
    "start": 3095,
    "end": 3114,
    "range": [
      3095,
      3114
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3114,
    "end": 3115,
    "range": [
      3114,
      3115
    ]
  },
  {
    "type": "Identifier",
    "value": "Grumpy",
    "start": 3115,
    "end": 3121,
    "range": [
      3115,
      3121
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3121,
    "end": 3122,
    "range": [
      3121,
      3122
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3127,
    "end": 3130,
    "range": [
      3127,
      3130
    ]
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_f_public",
    "start": 3131,
    "end": 3161,
    "range": [
      3131,
      3161
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3162,
    "end": 3163,
    "range": [
      3162,
      3163
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_f_public",
    "start": 3164,
    "end": 3183,
    "range": [
      3164,
      3183
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3183,
    "end": 3184,
    "range": [
      3183,
      3184
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3184,
    "end": 3185,
    "range": [
      3184,
      3185
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3185,
    "end": 3186,
    "range": [
      3185,
      3186
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3191,
    "end": 3197,
    "range": [
      3191,
      3197
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3198,
    "end": 3201,
    "range": [
      3198,
      3201
    ]
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_f_public",
    "start": 3202,
    "end": 3231,
    "range": [
      3202,
      3231
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3232,
    "end": 3233,
    "range": [
      3232,
      3233
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_f_public",
    "start": 3234,
    "end": 3253,
    "range": [
      3234,
      3253
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3253,
    "end": 3254,
    "range": [
      3253,
      3254
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3254,
    "end": 3255,
    "range": [
      3254,
      3255
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3255,
    "end": 3256,
    "range": [
      3255,
      3256
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3261,
    "end": 3264,
    "range": [
      3261,
      3264
    ]
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_v_public",
    "start": 3265,
    "end": 3295,
    "range": [
      3265,
      3295
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3296,
    "end": 3297,
    "range": [
      3296,
      3297
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_v_public",
    "start": 3298,
    "end": 3317,
    "range": [
      3298,
      3317
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3317,
    "end": 3318,
    "range": [
      3317,
      3318
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3323,
    "end": 3329,
    "range": [
      3323,
      3329
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3330,
    "end": 3333,
    "range": [
      3330,
      3333
    ]
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_v_public",
    "start": 3334,
    "end": 3363,
    "range": [
      3334,
      3363
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3364,
    "end": 3365,
    "range": [
      3364,
      3365
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_v_public",
    "start": 3366,
    "end": 3385,
    "range": [
      3366,
      3385
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3385,
    "end": 3386,
    "range": [
      3385,
      3386
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3391,
    "end": 3394,
    "range": [
      3391,
      3394
    ]
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_i_public",
    "start": 3395,
    "end": 3425,
    "range": [
      3395,
      3425
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3425,
    "end": 3426,
    "range": [
      3425,
      3426
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_i_public",
    "start": 3427,
    "end": 3446,
    "range": [
      3427,
      3446
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3446,
    "end": 3447,
    "range": [
      3446,
      3447
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3452,
    "end": 3458,
    "range": [
      3452,
      3458
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3459,
    "end": 3462,
    "range": [
      3459,
      3462
    ]
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_i_public",
    "start": 3463,
    "end": 3492,
    "range": [
      3463,
      3492
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3492,
    "end": 3493,
    "range": [
      3492,
      3493
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_i_public",
    "start": 3494,
    "end": 3513,
    "range": [
      3494,
      3513
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3513,
    "end": 3514,
    "range": [
      3513,
      3514
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3519,
    "end": 3522,
    "range": [
      3519,
      3522
    ]
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_mi_public",
    "start": 3523,
    "end": 3554,
    "range": [
      3523,
      3554
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3555,
    "end": 3556,
    "range": [
      3555,
      3556
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3557,
    "end": 3560,
    "range": [
      3557,
      3560
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_public",
    "start": 3561,
    "end": 3581,
    "range": [
      3561,
      3581
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3581,
    "end": 3582,
    "range": [
      3581,
      3582
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3582,
    "end": 3583,
    "range": [
      3582,
      3583
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3583,
    "end": 3584,
    "range": [
      3583,
      3584
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3584,
    "end": 3585,
    "range": [
      3584,
      3585
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3585,
    "end": 3586,
    "range": [
      3585,
      3586
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3591,
    "end": 3597,
    "range": [
      3591,
      3597
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3598,
    "end": 3601,
    "range": [
      3598,
      3601
    ]
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_mi_public",
    "start": 3602,
    "end": 3632,
    "range": [
      3602,
      3632
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3633,
    "end": 3634,
    "range": [
      3633,
      3634
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3635,
    "end": 3638,
    "range": [
      3635,
      3638
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_public",
    "start": 3639,
    "end": 3659,
    "range": [
      3639,
      3659
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3659,
    "end": 3660,
    "range": [
      3659,
      3660
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3660,
    "end": 3661,
    "range": [
      3660,
      3661
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3661,
    "end": 3662,
    "range": [
      3661,
      3662
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3662,
    "end": 3663,
    "range": [
      3662,
      3663
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3663,
    "end": 3664,
    "range": [
      3663,
      3664
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3669,
    "end": 3672,
    "range": [
      3669,
      3672
    ]
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_mu_public",
    "start": 3673,
    "end": 3704,
    "range": [
      3673,
      3704
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3704,
    "end": 3705,
    "range": [
      3704,
      3705
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_mu_public",
    "start": 3706,
    "end": 3726,
    "range": [
      3706,
      3726
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3726,
    "end": 3727,
    "range": [
      3726,
      3727
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3727,
    "end": 3728,
    "range": [
      3727,
      3728
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3728,
    "end": 3729,
    "range": [
      3728,
      3729
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3734,
    "end": 3740,
    "range": [
      3734,
      3740
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3741,
    "end": 3744,
    "range": [
      3741,
      3744
    ]
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_mu_public",
    "start": 3745,
    "end": 3775,
    "range": [
      3745,
      3775
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3775,
    "end": 3776,
    "range": [
      3775,
      3776
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_mu_public",
    "start": 3777,
    "end": 3797,
    "range": [
      3777,
      3797
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3797,
    "end": 3798,
    "range": [
      3797,
      3798
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3798,
    "end": 3799,
    "range": [
      3798,
      3799
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3799,
    "end": 3800,
    "range": [
      3799,
      3800
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3801,
    "end": 3802,
    "range": [
      3801,
      3802
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 3804,
    "end": 3813,
    "range": [
      3804,
      3813
    ]
  },
  {
    "type": "Identifier",
    "value": "import_private",
    "start": 3814,
    "end": 3828,
    "range": [
      3814,
      3828
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3829,
    "end": 3830,
    "range": [
      3829,
      3830
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 3889,
    "end": 3895,
    "range": [
      3889,
      3895
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_c_private",
    "start": 3896,
    "end": 3916,
    "range": [
      3896,
      3916
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3917,
    "end": 3918,
    "range": [
      3917,
      3918
    ]
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 3919,
    "end": 3928,
    "range": [
      3919,
      3928
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3928,
    "end": 3929,
    "range": [
      3928,
      3929
    ]
  },
  {
    "type": "Identifier",
    "value": "c_private",
    "start": 3929,
    "end": 3938,
    "range": [
      3929,
      3938
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3938,
    "end": 3939,
    "range": [
      3938,
      3939
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 3944,
    "end": 3950,
    "range": [
      3944,
      3950
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_e_private",
    "start": 3951,
    "end": 3971,
    "range": [
      3951,
      3971
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3972,
    "end": 3973,
    "range": [
      3972,
      3973
    ]
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 3974,
    "end": 3983,
    "range": [
      3974,
      3983
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3983,
    "end": 3984,
    "range": [
      3983,
      3984
    ]
  },
  {
    "type": "Identifier",
    "value": "e_private",
    "start": 3984,
    "end": 3993,
    "range": [
      3984,
      3993
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3993,
    "end": 3994,
    "range": [
      3993,
      3994
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 3999,
    "end": 4005,
    "range": [
      3999,
      4005
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_f_private",
    "start": 4006,
    "end": 4026,
    "range": [
      4006,
      4026
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4027,
    "end": 4028,
    "range": [
      4027,
      4028
    ]
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 4029,
    "end": 4038,
    "range": [
      4029,
      4038
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4038,
    "end": 4039,
    "range": [
      4038,
      4039
    ]
  },
  {
    "type": "Identifier",
    "value": "f_private",
    "start": 4039,
    "end": 4048,
    "range": [
      4039,
      4048
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4048,
    "end": 4049,
    "range": [
      4048,
      4049
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 4054,
    "end": 4060,
    "range": [
      4054,
      4060
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_v_private",
    "start": 4061,
    "end": 4081,
    "range": [
      4061,
      4081
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4082,
    "end": 4083,
    "range": [
      4082,
      4083
    ]
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 4084,
    "end": 4093,
    "range": [
      4084,
      4093
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4093,
    "end": 4094,
    "range": [
      4093,
      4094
    ]
  },
  {
    "type": "Identifier",
    "value": "v_private",
    "start": 4094,
    "end": 4103,
    "range": [
      4094,
      4103
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4103,
    "end": 4104,
    "range": [
      4103,
      4104
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 4109,
    "end": 4115,
    "range": [
      4109,
      4115
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_i_private",
    "start": 4116,
    "end": 4136,
    "range": [
      4116,
      4136
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4137,
    "end": 4138,
    "range": [
      4137,
      4138
    ]
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 4139,
    "end": 4148,
    "range": [
      4139,
      4148
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4148,
    "end": 4149,
    "range": [
      4148,
      4149
    ]
  },
  {
    "type": "Identifier",
    "value": "i_private",
    "start": 4149,
    "end": 4158,
    "range": [
      4149,
      4158
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4158,
    "end": 4159,
    "range": [
      4158,
      4159
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 4164,
    "end": 4170,
    "range": [
      4164,
      4170
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_private",
    "start": 4171,
    "end": 4192,
    "range": [
      4171,
      4192
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4193,
    "end": 4194,
    "range": [
      4193,
      4194
    ]
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 4195,
    "end": 4204,
    "range": [
      4195,
      4204
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4204,
    "end": 4205,
    "range": [
      4204,
      4205
    ]
  },
  {
    "type": "Identifier",
    "value": "mi_private",
    "start": 4205,
    "end": 4215,
    "range": [
      4205,
      4215
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4215,
    "end": 4216,
    "range": [
      4215,
      4216
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 4221,
    "end": 4227,
    "range": [
      4221,
      4227
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_mu_private",
    "start": 4228,
    "end": 4249,
    "range": [
      4228,
      4249
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4250,
    "end": 4251,
    "range": [
      4250,
      4251
    ]
  },
  {
    "type": "Identifier",
    "value": "m_private",
    "start": 4252,
    "end": 4261,
    "range": [
      4252,
      4261
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4261,
    "end": 4262,
    "range": [
      4261,
      4262
    ]
  },
  {
    "type": "Identifier",
    "value": "mu_private",
    "start": 4262,
    "end": 4272,
    "range": [
      4262,
      4272
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4272,
    "end": 4273,
    "range": [
      4272,
      4273
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4307,
    "end": 4310,
    "range": [
      4307,
      4310
    ]
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_c_private",
    "start": 4311,
    "end": 4342,
    "range": [
      4311,
      4342
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4343,
    "end": 4344,
    "range": [
      4343,
      4344
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4345,
    "end": 4348,
    "range": [
      4345,
      4348
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_c_private",
    "start": 4349,
    "end": 4369,
    "range": [
      4349,
      4369
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4369,
    "end": 4370,
    "range": [
      4369,
      4370
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4370,
    "end": 4371,
    "range": [
      4370,
      4371
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4371,
    "end": 4372,
    "range": [
      4371,
      4372
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4377,
    "end": 4383,
    "range": [
      4377,
      4383
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4384,
    "end": 4387,
    "range": [
      4384,
      4387
    ]
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_c_private",
    "start": 4388,
    "end": 4418,
    "range": [
      4388,
      4418
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4419,
    "end": 4420,
    "range": [
      4419,
      4420
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4421,
    "end": 4424,
    "range": [
      4421,
      4424
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_c_private",
    "start": 4425,
    "end": 4445,
    "range": [
      4425,
      4445
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4445,
    "end": 4446,
    "range": [
      4445,
      4446
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4446,
    "end": 4447,
    "range": [
      4446,
      4447
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4447,
    "end": 4448,
    "range": [
      4447,
      4448
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4453,
    "end": 4456,
    "range": [
      4453,
      4456
    ]
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_e_private",
    "start": 4457,
    "end": 4488,
    "range": [
      4457,
      4488
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4489,
    "end": 4490,
    "range": [
      4489,
      4490
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_e_private",
    "start": 4491,
    "end": 4511,
    "range": [
      4491,
      4511
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4511,
    "end": 4512,
    "range": [
      4511,
      4512
    ]
  },
  {
    "type": "Identifier",
    "value": "Happy",
    "start": 4512,
    "end": 4517,
    "range": [
      4512,
      4517
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4517,
    "end": 4518,
    "range": [
      4517,
      4518
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4523,
    "end": 4529,
    "range": [
      4523,
      4529
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4530,
    "end": 4533,
    "range": [
      4530,
      4533
    ]
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_e_private",
    "start": 4534,
    "end": 4564,
    "range": [
      4534,
      4564
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4565,
    "end": 4566,
    "range": [
      4565,
      4566
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_e_private",
    "start": 4567,
    "end": 4587,
    "range": [
      4567,
      4587
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4587,
    "end": 4588,
    "range": [
      4587,
      4588
    ]
  },
  {
    "type": "Identifier",
    "value": "Grumpy",
    "start": 4588,
    "end": 4594,
    "range": [
      4588,
      4594
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4594,
    "end": 4595,
    "range": [
      4594,
      4595
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4600,
    "end": 4603,
    "range": [
      4600,
      4603
    ]
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_f_private",
    "start": 4604,
    "end": 4635,
    "range": [
      4604,
      4635
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4636,
    "end": 4637,
    "range": [
      4636,
      4637
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_f_private",
    "start": 4638,
    "end": 4658,
    "range": [
      4638,
      4658
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4658,
    "end": 4659,
    "range": [
      4658,
      4659
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4659,
    "end": 4660,
    "range": [
      4659,
      4660
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4660,
    "end": 4661,
    "range": [
      4660,
      4661
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4666,
    "end": 4672,
    "range": [
      4666,
      4672
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4673,
    "end": 4676,
    "range": [
      4673,
      4676
    ]
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_f_private",
    "start": 4677,
    "end": 4707,
    "range": [
      4677,
      4707
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4708,
    "end": 4709,
    "range": [
      4708,
      4709
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_f_private",
    "start": 4710,
    "end": 4730,
    "range": [
      4710,
      4730
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4730,
    "end": 4731,
    "range": [
      4730,
      4731
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4731,
    "end": 4732,
    "range": [
      4731,
      4732
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4732,
    "end": 4733,
    "range": [
      4732,
      4733
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4738,
    "end": 4741,
    "range": [
      4738,
      4741
    ]
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_v_private",
    "start": 4742,
    "end": 4773,
    "range": [
      4742,
      4773
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4774,
    "end": 4775,
    "range": [
      4774,
      4775
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_v_private",
    "start": 4776,
    "end": 4796,
    "range": [
      4776,
      4796
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4796,
    "end": 4797,
    "range": [
      4796,
      4797
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4802,
    "end": 4808,
    "range": [
      4802,
      4808
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4809,
    "end": 4812,
    "range": [
      4809,
      4812
    ]
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_v_private",
    "start": 4813,
    "end": 4843,
    "range": [
      4813,
      4843
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4844,
    "end": 4845,
    "range": [
      4844,
      4845
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_v_private",
    "start": 4846,
    "end": 4866,
    "range": [
      4846,
      4866
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4866,
    "end": 4867,
    "range": [
      4866,
      4867
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4872,
    "end": 4875,
    "range": [
      4872,
      4875
    ]
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_i_private",
    "start": 4876,
    "end": 4907,
    "range": [
      4876,
      4907
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4907,
    "end": 4908,
    "range": [
      4907,
      4908
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_i_private",
    "start": 4909,
    "end": 4929,
    "range": [
      4909,
      4929
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4929,
    "end": 4930,
    "range": [
      4929,
      4930
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4935,
    "end": 4941,
    "range": [
      4935,
      4941
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4942,
    "end": 4945,
    "range": [
      4942,
      4945
    ]
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_i_private",
    "start": 4946,
    "end": 4976,
    "range": [
      4946,
      4976
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4976,
    "end": 4977,
    "range": [
      4976,
      4977
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_i_private",
    "start": 4978,
    "end": 4998,
    "range": [
      4978,
      4998
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4998,
    "end": 4999,
    "range": [
      4998,
      4999
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5004,
    "end": 5007,
    "range": [
      5004,
      5007
    ]
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_mi_private",
    "start": 5008,
    "end": 5040,
    "range": [
      5008,
      5040
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5041,
    "end": 5042,
    "range": [
      5041,
      5042
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5043,
    "end": 5046,
    "range": [
      5043,
      5046
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_private",
    "start": 5047,
    "end": 5068,
    "range": [
      5047,
      5068
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5068,
    "end": 5069,
    "range": [
      5068,
      5069
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 5069,
    "end": 5070,
    "range": [
      5069,
      5070
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5070,
    "end": 5071,
    "range": [
      5070,
      5071
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5071,
    "end": 5072,
    "range": [
      5071,
      5072
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5072,
    "end": 5073,
    "range": [
      5072,
      5073
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5078,
    "end": 5084,
    "range": [
      5078,
      5084
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5085,
    "end": 5088,
    "range": [
      5085,
      5088
    ]
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_mi_private",
    "start": 5089,
    "end": 5120,
    "range": [
      5089,
      5120
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5121,
    "end": 5122,
    "range": [
      5121,
      5122
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5123,
    "end": 5126,
    "range": [
      5123,
      5126
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_private",
    "start": 5127,
    "end": 5148,
    "range": [
      5127,
      5148
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5148,
    "end": 5149,
    "range": [
      5148,
      5149
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 5149,
    "end": 5150,
    "range": [
      5149,
      5150
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5150,
    "end": 5151,
    "range": [
      5150,
      5151
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5151,
    "end": 5152,
    "range": [
      5151,
      5152
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5152,
    "end": 5153,
    "range": [
      5152,
      5153
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5158,
    "end": 5161,
    "range": [
      5158,
      5161
    ]
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_mu_private",
    "start": 5162,
    "end": 5194,
    "range": [
      5162,
      5194
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5194,
    "end": 5195,
    "range": [
      5194,
      5195
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_mu_private",
    "start": 5196,
    "end": 5217,
    "range": [
      5196,
      5217
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5217,
    "end": 5218,
    "range": [
      5217,
      5218
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 5218,
    "end": 5219,
    "range": [
      5218,
      5219
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5219,
    "end": 5220,
    "range": [
      5219,
      5220
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5225,
    "end": 5231,
    "range": [
      5225,
      5231
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5232,
    "end": 5235,
    "range": [
      5232,
      5235
    ]
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_mu_private",
    "start": 5236,
    "end": 5267,
    "range": [
      5236,
      5267
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5267,
    "end": 5268,
    "range": [
      5267,
      5268
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_mu_private",
    "start": 5269,
    "end": 5290,
    "range": [
      5269,
      5290
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5290,
    "end": 5291,
    "range": [
      5290,
      5291
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 5291,
    "end": 5292,
    "range": [
      5291,
      5292
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5292,
    "end": 5293,
    "range": [
      5292,
      5293
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 5351,
    "end": 5357,
    "range": [
      5351,
      5357
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_c_public",
    "start": 5358,
    "end": 5377,
    "range": [
      5358,
      5377
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5378,
    "end": 5379,
    "range": [
      5378,
      5379
    ]
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 5380,
    "end": 5388,
    "range": [
      5380,
      5388
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5388,
    "end": 5389,
    "range": [
      5388,
      5389
    ]
  },
  {
    "type": "Identifier",
    "value": "c_public",
    "start": 5389,
    "end": 5397,
    "range": [
      5389,
      5397
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5397,
    "end": 5398,
    "range": [
      5397,
      5398
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 5403,
    "end": 5409,
    "range": [
      5403,
      5409
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_e_public",
    "start": 5410,
    "end": 5429,
    "range": [
      5410,
      5429
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5430,
    "end": 5431,
    "range": [
      5430,
      5431
    ]
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 5432,
    "end": 5440,
    "range": [
      5432,
      5440
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5440,
    "end": 5441,
    "range": [
      5440,
      5441
    ]
  },
  {
    "type": "Identifier",
    "value": "e_public",
    "start": 5441,
    "end": 5449,
    "range": [
      5441,
      5449
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5449,
    "end": 5450,
    "range": [
      5449,
      5450
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 5455,
    "end": 5461,
    "range": [
      5455,
      5461
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_f_public",
    "start": 5462,
    "end": 5481,
    "range": [
      5462,
      5481
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5482,
    "end": 5483,
    "range": [
      5482,
      5483
    ]
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 5484,
    "end": 5492,
    "range": [
      5484,
      5492
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5492,
    "end": 5493,
    "range": [
      5492,
      5493
    ]
  },
  {
    "type": "Identifier",
    "value": "f_public",
    "start": 5493,
    "end": 5501,
    "range": [
      5493,
      5501
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5501,
    "end": 5502,
    "range": [
      5501,
      5502
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 5507,
    "end": 5513,
    "range": [
      5507,
      5513
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_v_public",
    "start": 5514,
    "end": 5533,
    "range": [
      5514,
      5533
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5534,
    "end": 5535,
    "range": [
      5534,
      5535
    ]
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 5536,
    "end": 5544,
    "range": [
      5536,
      5544
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5544,
    "end": 5545,
    "range": [
      5544,
      5545
    ]
  },
  {
    "type": "Identifier",
    "value": "v_public",
    "start": 5545,
    "end": 5553,
    "range": [
      5545,
      5553
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5553,
    "end": 5554,
    "range": [
      5553,
      5554
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 5559,
    "end": 5565,
    "range": [
      5559,
      5565
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_i_public",
    "start": 5566,
    "end": 5585,
    "range": [
      5566,
      5585
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5586,
    "end": 5587,
    "range": [
      5586,
      5587
    ]
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 5588,
    "end": 5596,
    "range": [
      5588,
      5596
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5596,
    "end": 5597,
    "range": [
      5596,
      5597
    ]
  },
  {
    "type": "Identifier",
    "value": "i_public",
    "start": 5597,
    "end": 5605,
    "range": [
      5597,
      5605
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5605,
    "end": 5606,
    "range": [
      5605,
      5606
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 5611,
    "end": 5617,
    "range": [
      5611,
      5617
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_public",
    "start": 5618,
    "end": 5638,
    "range": [
      5618,
      5638
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5639,
    "end": 5640,
    "range": [
      5639,
      5640
    ]
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 5641,
    "end": 5649,
    "range": [
      5641,
      5649
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5649,
    "end": 5650,
    "range": [
      5649,
      5650
    ]
  },
  {
    "type": "Identifier",
    "value": "mi_public",
    "start": 5650,
    "end": 5659,
    "range": [
      5650,
      5659
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5659,
    "end": 5660,
    "range": [
      5659,
      5660
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 5665,
    "end": 5671,
    "range": [
      5665,
      5671
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_mu_public",
    "start": 5672,
    "end": 5692,
    "range": [
      5672,
      5692
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5693,
    "end": 5694,
    "range": [
      5693,
      5694
    ]
  },
  {
    "type": "Identifier",
    "value": "m_public",
    "start": 5695,
    "end": 5703,
    "range": [
      5695,
      5703
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5703,
    "end": 5704,
    "range": [
      5703,
      5704
    ]
  },
  {
    "type": "Identifier",
    "value": "mu_public",
    "start": 5704,
    "end": 5713,
    "range": [
      5704,
      5713
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5713,
    "end": 5714,
    "range": [
      5713,
      5714
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5748,
    "end": 5751,
    "range": [
      5748,
      5751
    ]
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_c_public",
    "start": 5752,
    "end": 5782,
    "range": [
      5752,
      5782
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5783,
    "end": 5784,
    "range": [
      5783,
      5784
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5785,
    "end": 5788,
    "range": [
      5785,
      5788
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_c_public",
    "start": 5789,
    "end": 5808,
    "range": [
      5789,
      5808
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5808,
    "end": 5809,
    "range": [
      5808,
      5809
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5809,
    "end": 5810,
    "range": [
      5809,
      5810
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5810,
    "end": 5811,
    "range": [
      5810,
      5811
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5816,
    "end": 5822,
    "range": [
      5816,
      5822
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5823,
    "end": 5826,
    "range": [
      5823,
      5826
    ]
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_c_public",
    "start": 5827,
    "end": 5856,
    "range": [
      5827,
      5856
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5857,
    "end": 5858,
    "range": [
      5857,
      5858
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5859,
    "end": 5862,
    "range": [
      5859,
      5862
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_c_public",
    "start": 5863,
    "end": 5882,
    "range": [
      5863,
      5882
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5882,
    "end": 5883,
    "range": [
      5882,
      5883
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5883,
    "end": 5884,
    "range": [
      5883,
      5884
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5884,
    "end": 5885,
    "range": [
      5884,
      5885
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5890,
    "end": 5893,
    "range": [
      5890,
      5893
    ]
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_e_public",
    "start": 5894,
    "end": 5924,
    "range": [
      5894,
      5924
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5925,
    "end": 5926,
    "range": [
      5925,
      5926
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_e_public",
    "start": 5927,
    "end": 5946,
    "range": [
      5927,
      5946
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5946,
    "end": 5947,
    "range": [
      5946,
      5947
    ]
  },
  {
    "type": "Identifier",
    "value": "Happy",
    "start": 5947,
    "end": 5952,
    "range": [
      5947,
      5952
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5952,
    "end": 5953,
    "range": [
      5952,
      5953
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5958,
    "end": 5964,
    "range": [
      5958,
      5964
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5965,
    "end": 5968,
    "range": [
      5965,
      5968
    ]
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_e_public",
    "start": 5969,
    "end": 5998,
    "range": [
      5969,
      5998
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5999,
    "end": 6000,
    "range": [
      5999,
      6000
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_e_public",
    "start": 6001,
    "end": 6020,
    "range": [
      6001,
      6020
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6020,
    "end": 6021,
    "range": [
      6020,
      6021
    ]
  },
  {
    "type": "Identifier",
    "value": "Grumpy",
    "start": 6021,
    "end": 6027,
    "range": [
      6021,
      6027
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6027,
    "end": 6028,
    "range": [
      6027,
      6028
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6033,
    "end": 6036,
    "range": [
      6033,
      6036
    ]
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_f_public",
    "start": 6037,
    "end": 6067,
    "range": [
      6037,
      6067
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6068,
    "end": 6069,
    "range": [
      6068,
      6069
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_f_public",
    "start": 6070,
    "end": 6089,
    "range": [
      6070,
      6089
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6089,
    "end": 6090,
    "range": [
      6089,
      6090
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6090,
    "end": 6091,
    "range": [
      6090,
      6091
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6091,
    "end": 6092,
    "range": [
      6091,
      6092
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6097,
    "end": 6103,
    "range": [
      6097,
      6103
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6104,
    "end": 6107,
    "range": [
      6104,
      6107
    ]
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_f_public",
    "start": 6108,
    "end": 6137,
    "range": [
      6108,
      6137
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6138,
    "end": 6139,
    "range": [
      6138,
      6139
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_f_public",
    "start": 6140,
    "end": 6159,
    "range": [
      6140,
      6159
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6159,
    "end": 6160,
    "range": [
      6159,
      6160
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6160,
    "end": 6161,
    "range": [
      6160,
      6161
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6161,
    "end": 6162,
    "range": [
      6161,
      6162
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6167,
    "end": 6170,
    "range": [
      6167,
      6170
    ]
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_v_public",
    "start": 6171,
    "end": 6201,
    "range": [
      6171,
      6201
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6202,
    "end": 6203,
    "range": [
      6202,
      6203
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_v_public",
    "start": 6204,
    "end": 6223,
    "range": [
      6204,
      6223
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6223,
    "end": 6224,
    "range": [
      6223,
      6224
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6229,
    "end": 6235,
    "range": [
      6229,
      6235
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6236,
    "end": 6239,
    "range": [
      6236,
      6239
    ]
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_v_public",
    "start": 6240,
    "end": 6269,
    "range": [
      6240,
      6269
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6270,
    "end": 6271,
    "range": [
      6270,
      6271
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_v_public",
    "start": 6272,
    "end": 6291,
    "range": [
      6272,
      6291
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6291,
    "end": 6292,
    "range": [
      6291,
      6292
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6297,
    "end": 6300,
    "range": [
      6297,
      6300
    ]
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_i_public",
    "start": 6301,
    "end": 6331,
    "range": [
      6301,
      6331
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6331,
    "end": 6332,
    "range": [
      6331,
      6332
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_i_public",
    "start": 6333,
    "end": 6352,
    "range": [
      6333,
      6352
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6352,
    "end": 6353,
    "range": [
      6352,
      6353
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6358,
    "end": 6364,
    "range": [
      6358,
      6364
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6365,
    "end": 6368,
    "range": [
      6365,
      6368
    ]
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_i_public",
    "start": 6369,
    "end": 6398,
    "range": [
      6369,
      6398
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6398,
    "end": 6399,
    "range": [
      6398,
      6399
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_i_public",
    "start": 6400,
    "end": 6419,
    "range": [
      6400,
      6419
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6419,
    "end": 6420,
    "range": [
      6419,
      6420
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6425,
    "end": 6428,
    "range": [
      6425,
      6428
    ]
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_mi_public",
    "start": 6429,
    "end": 6460,
    "range": [
      6429,
      6460
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6461,
    "end": 6462,
    "range": [
      6461,
      6462
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6463,
    "end": 6466,
    "range": [
      6463,
      6466
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_public",
    "start": 6467,
    "end": 6487,
    "range": [
      6467,
      6487
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6487,
    "end": 6488,
    "range": [
      6487,
      6488
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 6488,
    "end": 6489,
    "range": [
      6488,
      6489
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6489,
    "end": 6490,
    "range": [
      6489,
      6490
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6490,
    "end": 6491,
    "range": [
      6490,
      6491
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6491,
    "end": 6492,
    "range": [
      6491,
      6492
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6497,
    "end": 6503,
    "range": [
      6497,
      6503
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6504,
    "end": 6507,
    "range": [
      6504,
      6507
    ]
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_mi_public",
    "start": 6508,
    "end": 6538,
    "range": [
      6508,
      6538
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6539,
    "end": 6540,
    "range": [
      6539,
      6540
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6541,
    "end": 6544,
    "range": [
      6541,
      6544
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_mi_public",
    "start": 6545,
    "end": 6565,
    "range": [
      6545,
      6565
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6565,
    "end": 6566,
    "range": [
      6565,
      6566
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 6566,
    "end": 6567,
    "range": [
      6566,
      6567
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6567,
    "end": 6568,
    "range": [
      6567,
      6568
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6568,
    "end": 6569,
    "range": [
      6568,
      6569
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6569,
    "end": 6570,
    "range": [
      6569,
      6570
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6575,
    "end": 6578,
    "range": [
      6575,
      6578
    ]
  },
  {
    "type": "Identifier",
    "value": "privateUse_im_private_mu_public",
    "start": 6579,
    "end": 6610,
    "range": [
      6579,
      6610
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6610,
    "end": 6611,
    "range": [
      6610,
      6611
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_mu_public",
    "start": 6612,
    "end": 6632,
    "range": [
      6612,
      6632
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6632,
    "end": 6633,
    "range": [
      6632,
      6633
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 6633,
    "end": 6634,
    "range": [
      6633,
      6634
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6634,
    "end": 6635,
    "range": [
      6634,
      6635
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6640,
    "end": 6646,
    "range": [
      6640,
      6646
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6647,
    "end": 6650,
    "range": [
      6647,
      6650
    ]
  },
  {
    "type": "Identifier",
    "value": "publicUse_im_private_mu_public",
    "start": 6651,
    "end": 6681,
    "range": [
      6651,
      6681
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6681,
    "end": 6682,
    "range": [
      6681,
      6682
    ]
  },
  {
    "type": "Identifier",
    "value": "im_private_mu_public",
    "start": 6683,
    "end": 6703,
    "range": [
      6683,
      6703
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6703,
    "end": 6704,
    "range": [
      6703,
      6704
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 6704,
    "end": 6705,
    "range": [
      6704,
      6705
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6705,
    "end": 6706,
    "range": [
      6705,
      6706
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6707,
    "end": 6708,
    "range": [
      6707,
      6708
    ]
  }
]
```
