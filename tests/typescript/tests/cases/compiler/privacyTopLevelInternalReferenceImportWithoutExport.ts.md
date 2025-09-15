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
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_c_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 947,
        "end": 967
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 970,
          "end": 979
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 980,
          "end": 989
        },
        "start": 970,
        "end": 989
      },
      "importKind": "value",
      "start": 940,
      "end": 990
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_e_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 998,
        "end": 1018
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1021,
          "end": 1030
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "e_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1031,
          "end": 1040
        },
        "start": 1021,
        "end": 1040
      },
      "importKind": "value",
      "start": 991,
      "end": 1041
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_f_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 1049,
        "end": 1069
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1072,
          "end": 1081
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1082,
          "end": 1091
        },
        "start": 1072,
        "end": 1091
      },
      "importKind": "value",
      "start": 1042,
      "end": 1092
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_v_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 1100,
        "end": 1120
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1123,
          "end": 1132
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "v_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1133,
          "end": 1142
        },
        "start": 1123,
        "end": 1142
      },
      "importKind": "value",
      "start": 1093,
      "end": 1143
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_i_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 1151,
        "end": 1171
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1174,
          "end": 1183
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1184,
          "end": 1193
        },
        "start": 1174,
        "end": 1193
      },
      "importKind": "value",
      "start": 1144,
      "end": 1194
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_mi_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 1202,
        "end": 1223
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1226,
          "end": 1235
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "mi_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1236,
          "end": 1246
        },
        "start": 1226,
        "end": 1246
      },
      "importKind": "value",
      "start": 1195,
      "end": 1247
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_mu_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 1255,
        "end": 1276
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1279,
          "end": 1288
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "mu_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 1289,
          "end": 1299
        },
        "start": 1279,
        "end": 1299
      },
      "importKind": "value",
      "start": 1248,
      "end": 1300
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
            "start": 1330,
            "end": 1361
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_c_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1368,
              "end": 1388
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1364,
            "end": 1390
          },
          "definite": false,
          "start": 1330,
          "end": 1390
        }
      ],
      "declare": false,
      "start": 1326,
      "end": 1391
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
              "start": 1403,
              "end": 1433
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1440,
                "end": 1460
              },
              "typeArguments": null,
              "arguments": [],
              "start": 1436,
              "end": 1462
            },
            "definite": false,
            "start": 1403,
            "end": 1462
          }
        ],
        "declare": false,
        "start": 1399,
        "end": 1463
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1392,
      "end": 1463
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
            "start": 1468,
            "end": 1499
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_e_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1502,
              "end": 1522
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Happy",
              "optional": false,
              "typeAnnotation": null,
              "start": 1523,
              "end": 1528
            },
            "optional": false,
            "computed": false,
            "start": 1502,
            "end": 1528
          },
          "definite": false,
          "start": 1468,
          "end": 1528
        }
      ],
      "declare": false,
      "start": 1464,
      "end": 1529
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
              "start": 1541,
              "end": 1571
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_e_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1574,
                "end": 1594
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Grumpy",
                "optional": false,
                "typeAnnotation": null,
                "start": 1595,
                "end": 1601
              },
              "optional": false,
              "computed": false,
              "start": 1574,
              "end": 1601
            },
            "definite": false,
            "start": 1541,
            "end": 1601
          }
        ],
        "declare": false,
        "start": 1537,
        "end": 1602
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1530,
      "end": 1602
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
            "start": 1607,
            "end": 1638
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_f_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1641,
              "end": 1661
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1641,
            "end": 1663
          },
          "definite": false,
          "start": 1607,
          "end": 1663
        }
      ],
      "declare": false,
      "start": 1603,
      "end": 1664
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
              "start": 1676,
              "end": 1706
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_f_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1709,
                "end": 1729
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1709,
              "end": 1731
            },
            "definite": false,
            "start": 1676,
            "end": 1731
          }
        ],
        "declare": false,
        "start": 1672,
        "end": 1732
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1665,
      "end": 1732
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
            "start": 1737,
            "end": 1768
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "im_private_v_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1771,
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
              "name": "publicUse_im_private_v_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1804,
              "end": 1834
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_v_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1837,
              "end": 1857
            },
            "definite": false,
            "start": 1804,
            "end": 1857
          }
        ],
        "declare": false,
        "start": 1800,
        "end": 1858
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1793,
      "end": 1858
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
                  "start": 1896,
                  "end": 1916
                },
                "typeArguments": null,
                "start": 1896,
                "end": 1916
              },
              "start": 1894,
              "end": 1916
            },
            "start": 1863,
            "end": 1916
          },
          "init": null,
          "definite": false,
          "start": 1863,
          "end": 1916
        }
      ],
      "declare": false,
      "start": 1859,
      "end": 1917
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
                    "start": 1961,
                    "end": 1981
                  },
                  "typeArguments": null,
                  "start": 1961,
                  "end": 1981
                },
                "start": 1959,
                "end": 1981
              },
              "start": 1929,
              "end": 1981
            },
            "init": null,
            "definite": false,
            "start": 1929,
            "end": 1981
          }
        ],
        "declare": false,
        "start": 1925,
        "end": 1982
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1918,
      "end": 1982
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
            "start": 1987,
            "end": 2019
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
                "start": 2026,
                "end": 2047
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 2048,
                "end": 2049
              },
              "optional": false,
              "computed": false,
              "start": 2026,
              "end": 2049
            },
            "typeArguments": null,
            "arguments": [],
            "start": 2022,
            "end": 2051
          },
          "definite": false,
          "start": 1987,
          "end": 2051
        }
      ],
      "declare": false,
      "start": 1983,
      "end": 2052
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
              "start": 2064,
              "end": 2095
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
                  "start": 2102,
                  "end": 2123
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2124,
                  "end": 2125
                },
                "optional": false,
                "computed": false,
                "start": 2102,
                "end": 2125
              },
              "typeArguments": null,
              "arguments": [],
              "start": 2098,
              "end": 2127
            },
            "definite": false,
            "start": 2064,
            "end": 2127
          }
        ],
        "declare": false,
        "start": 2060,
        "end": 2128
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2053,
      "end": 2128
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
                    "start": 2167,
                    "end": 2188
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2189,
                    "end": 2190
                  },
                  "start": 2167,
                  "end": 2190
                },
                "typeArguments": null,
                "start": 2167,
                "end": 2190
              },
              "start": 2165,
              "end": 2190
            },
            "start": 2133,
            "end": 2190
          },
          "init": null,
          "definite": false,
          "start": 2133,
          "end": 2190
        }
      ],
      "declare": false,
      "start": 2129,
      "end": 2191
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
                      "start": 2236,
                      "end": 2257
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2258,
                      "end": 2259
                    },
                    "start": 2236,
                    "end": 2259
                  },
                  "typeArguments": null,
                  "start": 2236,
                  "end": 2259
                },
                "start": 2234,
                "end": 2259
              },
              "start": 2203,
              "end": 2259
            },
            "init": null,
            "definite": false,
            "start": 2203,
            "end": 2259
          }
        ],
        "declare": false,
        "start": 2199,
        "end": 2260
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2192,
      "end": 2260
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_c_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 2319,
        "end": 2338
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2341,
          "end": 2349
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2350,
          "end": 2358
        },
        "start": 2341,
        "end": 2358
      },
      "importKind": "value",
      "start": 2312,
      "end": 2359
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_e_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 2367,
        "end": 2386
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2389,
          "end": 2397
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "e_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2398,
          "end": 2406
        },
        "start": 2389,
        "end": 2406
      },
      "importKind": "value",
      "start": 2360,
      "end": 2407
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_f_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 2415,
        "end": 2434
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2437,
          "end": 2445
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2446,
          "end": 2454
        },
        "start": 2437,
        "end": 2454
      },
      "importKind": "value",
      "start": 2408,
      "end": 2455
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_v_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 2463,
        "end": 2482
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2485,
          "end": 2493
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "v_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2494,
          "end": 2502
        },
        "start": 2485,
        "end": 2502
      },
      "importKind": "value",
      "start": 2456,
      "end": 2503
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_i_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 2511,
        "end": 2530
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2533,
          "end": 2541
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2542,
          "end": 2550
        },
        "start": 2533,
        "end": 2550
      },
      "importKind": "value",
      "start": 2504,
      "end": 2551
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_mi_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 2559,
        "end": 2579
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2582,
          "end": 2590
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "mi_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2591,
          "end": 2600
        },
        "start": 2582,
        "end": 2600
      },
      "importKind": "value",
      "start": 2552,
      "end": 2601
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "im_private_mu_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 2609,
        "end": 2629
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2632,
          "end": 2640
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "mu_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2641,
          "end": 2650
        },
        "start": 2632,
        "end": 2650
      },
      "importKind": "value",
      "start": 2602,
      "end": 2651
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
            "start": 2681,
            "end": 2711
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_c_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2718,
              "end": 2737
            },
            "typeArguments": null,
            "arguments": [],
            "start": 2714,
            "end": 2739
          },
          "definite": false,
          "start": 2681,
          "end": 2739
        }
      ],
      "declare": false,
      "start": 2677,
      "end": 2740
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
              "start": 2752,
              "end": 2781
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_c_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2788,
                "end": 2807
              },
              "typeArguments": null,
              "arguments": [],
              "start": 2784,
              "end": 2809
            },
            "definite": false,
            "start": 2752,
            "end": 2809
          }
        ],
        "declare": false,
        "start": 2748,
        "end": 2810
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2741,
      "end": 2810
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
            "start": 2815,
            "end": 2845
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_e_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2848,
              "end": 2867
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Happy",
              "optional": false,
              "typeAnnotation": null,
              "start": 2868,
              "end": 2873
            },
            "optional": false,
            "computed": false,
            "start": 2848,
            "end": 2873
          },
          "definite": false,
          "start": 2815,
          "end": 2873
        }
      ],
      "declare": false,
      "start": 2811,
      "end": 2874
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
              "start": 2886,
              "end": 2915
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_e_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2918,
                "end": 2937
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Grumpy",
                "optional": false,
                "typeAnnotation": null,
                "start": 2938,
                "end": 2944
              },
              "optional": false,
              "computed": false,
              "start": 2918,
              "end": 2944
            },
            "definite": false,
            "start": 2886,
            "end": 2944
          }
        ],
        "declare": false,
        "start": 2882,
        "end": 2945
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2875,
      "end": 2945
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
            "start": 2950,
            "end": 2980
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_f_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2983,
              "end": 3002
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 2983,
            "end": 3004
          },
          "definite": false,
          "start": 2950,
          "end": 3004
        }
      ],
      "declare": false,
      "start": 2946,
      "end": 3005
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
              "start": 3017,
              "end": 3046
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_private_f_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 3049,
                "end": 3068
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 3049,
              "end": 3070
            },
            "definite": false,
            "start": 3017,
            "end": 3070
          }
        ],
        "declare": false,
        "start": 3013,
        "end": 3071
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3006,
      "end": 3071
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
            "start": 3076,
            "end": 3106
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "im_private_v_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 3109,
            "end": 3128
          },
          "definite": false,
          "start": 3076,
          "end": 3128
        }
      ],
      "declare": false,
      "start": 3072,
      "end": 3129
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
              "start": 3141,
              "end": 3170
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_private_v_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 3173,
              "end": 3192
            },
            "definite": false,
            "start": 3141,
            "end": 3192
          }
        ],
        "declare": false,
        "start": 3137,
        "end": 3193
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3130,
      "end": 3193
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
                  "start": 3230,
                  "end": 3249
                },
                "typeArguments": null,
                "start": 3230,
                "end": 3249
              },
              "start": 3228,
              "end": 3249
            },
            "start": 3198,
            "end": 3249
          },
          "init": null,
          "definite": false,
          "start": 3198,
          "end": 3249
        }
      ],
      "declare": false,
      "start": 3194,
      "end": 3250
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
                    "start": 3293,
                    "end": 3312
                  },
                  "typeArguments": null,
                  "start": 3293,
                  "end": 3312
                },
                "start": 3291,
                "end": 3312
              },
              "start": 3262,
              "end": 3312
            },
            "init": null,
            "definite": false,
            "start": 3262,
            "end": 3312
          }
        ],
        "declare": false,
        "start": 3258,
        "end": 3313
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3251,
      "end": 3313
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
            "start": 3318,
            "end": 3349
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
                "start": 3356,
                "end": 3376
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 3377,
                "end": 3378
              },
              "optional": false,
              "computed": false,
              "start": 3356,
              "end": 3378
            },
            "typeArguments": null,
            "arguments": [],
            "start": 3352,
            "end": 3380
          },
          "definite": false,
          "start": 3318,
          "end": 3380
        }
      ],
      "declare": false,
      "start": 3314,
      "end": 3381
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
              "start": 3393,
              "end": 3423
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
                  "start": 3430,
                  "end": 3450
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3451,
                  "end": 3452
                },
                "optional": false,
                "computed": false,
                "start": 3430,
                "end": 3452
              },
              "typeArguments": null,
              "arguments": [],
              "start": 3426,
              "end": 3454
            },
            "definite": false,
            "start": 3393,
            "end": 3454
          }
        ],
        "declare": false,
        "start": 3389,
        "end": 3455
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3382,
      "end": 3455
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
                    "start": 3493,
                    "end": 3513
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3514,
                    "end": 3515
                  },
                  "start": 3493,
                  "end": 3515
                },
                "typeArguments": null,
                "start": 3493,
                "end": 3515
              },
              "start": 3491,
              "end": 3515
            },
            "start": 3460,
            "end": 3515
          },
          "init": null,
          "definite": false,
          "start": 3460,
          "end": 3515
        }
      ],
      "declare": false,
      "start": 3456,
      "end": 3516
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
                      "start": 3560,
                      "end": 3580
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3581,
                      "end": 3582
                    },
                    "start": 3560,
                    "end": 3582
                  },
                  "typeArguments": null,
                  "start": 3560,
                  "end": 3582
                },
                "start": 3558,
                "end": 3582
              },
              "start": 3528,
              "end": 3582
            },
            "init": null,
            "definite": false,
            "start": 3528,
            "end": 3582
          }
        ],
        "declare": false,
        "start": 3524,
        "end": 3583
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3517,
      "end": 3583
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 20,
  "end": 3583
}
```
