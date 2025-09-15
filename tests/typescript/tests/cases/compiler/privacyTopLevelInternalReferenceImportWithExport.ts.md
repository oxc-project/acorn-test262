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
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "im_public_c_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 951,
          "end": 970
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 973,
            "end": 982
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "c_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 983,
            "end": 992
          },
          "start": 973,
          "end": 992
        },
        "importKind": "value",
        "start": 944,
        "end": 993
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 937,
      "end": 993
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
          "start": 1008,
          "end": 1027
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1030,
            "end": 1039
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "e_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1040,
            "end": 1049
          },
          "start": 1030,
          "end": 1049
        },
        "importKind": "value",
        "start": 1001,
        "end": 1050
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 994,
      "end": 1050
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
          "start": 1065,
          "end": 1084
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1087,
            "end": 1096
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "f_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1097,
            "end": 1106
          },
          "start": 1087,
          "end": 1106
        },
        "importKind": "value",
        "start": 1058,
        "end": 1107
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1051,
      "end": 1107
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
          "start": 1122,
          "end": 1141
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1144,
            "end": 1153
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "v_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1154,
            "end": 1163
          },
          "start": 1144,
          "end": 1163
        },
        "importKind": "value",
        "start": 1115,
        "end": 1164
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1108,
      "end": 1164
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
          "start": 1179,
          "end": 1198
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1201,
            "end": 1210
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "i_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1211,
            "end": 1220
          },
          "start": 1201,
          "end": 1220
        },
        "importKind": "value",
        "start": 1172,
        "end": 1221
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1165,
      "end": 1221
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
          "start": 1236,
          "end": 1256
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1259,
            "end": 1268
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "mi_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1269,
            "end": 1279
          },
          "start": 1259,
          "end": 1279
        },
        "importKind": "value",
        "start": 1229,
        "end": 1280
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1222,
      "end": 1280
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
          "start": 1295,
          "end": 1315
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1318,
            "end": 1327
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "mu_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1328,
            "end": 1338
          },
          "start": 1318,
          "end": 1338
        },
        "importKind": "value",
        "start": 1288,
        "end": 1339
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1281,
      "end": 1339
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
            "start": 1379,
            "end": 1409
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_public_c_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1416,
              "end": 1435
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1412,
            "end": 1437
          },
          "definite": false,
          "start": 1379,
          "end": 1437
        }
      ],
      "declare": false,
      "start": 1375,
      "end": 1438
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
              "start": 1450,
              "end": 1479
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_public_c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1486,
                "end": 1505
              },
              "typeArguments": null,
              "arguments": [],
              "start": 1482,
              "end": 1507
            },
            "definite": false,
            "start": 1450,
            "end": 1507
          }
        ],
        "declare": false,
        "start": 1446,
        "end": 1508
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1439,
      "end": 1508
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
            "start": 1513,
            "end": 1543
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_public_e_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1546,
              "end": 1565
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Happy",
              "optional": false,
              "typeAnnotation": null,
              "start": 1566,
              "end": 1571
            },
            "optional": false,
            "computed": false,
            "start": 1546,
            "end": 1571
          },
          "definite": false,
          "start": 1513,
          "end": 1571
        }
      ],
      "declare": false,
      "start": 1509,
      "end": 1572
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
              "start": 1584,
              "end": 1613
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_public_e_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1616,
                "end": 1635
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Grumpy",
                "optional": false,
                "typeAnnotation": null,
                "start": 1636,
                "end": 1642
              },
              "optional": false,
              "computed": false,
              "start": 1616,
              "end": 1642
            },
            "definite": false,
            "start": 1584,
            "end": 1642
          }
        ],
        "declare": false,
        "start": 1580,
        "end": 1643
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1573,
      "end": 1643
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
            "start": 1648,
            "end": 1678
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_public_f_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1681,
              "end": 1700
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1681,
            "end": 1702
          },
          "definite": false,
          "start": 1648,
          "end": 1702
        }
      ],
      "declare": false,
      "start": 1644,
      "end": 1703
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
              "start": 1715,
              "end": 1744
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_public_f_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1747,
                "end": 1766
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1747,
              "end": 1768
            },
            "definite": false,
            "start": 1715,
            "end": 1768
          }
        ],
        "declare": false,
        "start": 1711,
        "end": 1769
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1704,
      "end": 1769
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
            "start": 1774,
            "end": 1804
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "im_public_v_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1807,
            "end": 1826
          },
          "definite": false,
          "start": 1774,
          "end": 1826
        }
      ],
      "declare": false,
      "start": 1770,
      "end": 1827
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
              "start": 1839,
              "end": 1868
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_public_v_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1871,
              "end": 1890
            },
            "definite": false,
            "start": 1839,
            "end": 1890
          }
        ],
        "declare": false,
        "start": 1835,
        "end": 1891
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1828,
      "end": 1891
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
                  "start": 1928,
                  "end": 1947
                },
                "typeArguments": null,
                "start": 1928,
                "end": 1947
              },
              "start": 1926,
              "end": 1947
            },
            "start": 1896,
            "end": 1947
          },
          "init": null,
          "definite": false,
          "start": 1896,
          "end": 1947
        }
      ],
      "declare": false,
      "start": 1892,
      "end": 1948
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
                    "start": 1991,
                    "end": 2010
                  },
                  "typeArguments": null,
                  "start": 1991,
                  "end": 2010
                },
                "start": 1989,
                "end": 2010
              },
              "start": 1960,
              "end": 2010
            },
            "init": null,
            "definite": false,
            "start": 1960,
            "end": 2010
          }
        ],
        "declare": false,
        "start": 1956,
        "end": 2011
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1949,
      "end": 2011
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
            "start": 2016,
            "end": 2047
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
                "start": 2054,
                "end": 2074
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 2075,
                "end": 2076
              },
              "optional": false,
              "computed": false,
              "start": 2054,
              "end": 2076
            },
            "typeArguments": null,
            "arguments": [],
            "start": 2050,
            "end": 2078
          },
          "definite": false,
          "start": 2016,
          "end": 2078
        }
      ],
      "declare": false,
      "start": 2012,
      "end": 2079
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
              "start": 2091,
              "end": 2121
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
                  "start": 2128,
                  "end": 2148
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2149,
                  "end": 2150
                },
                "optional": false,
                "computed": false,
                "start": 2128,
                "end": 2150
              },
              "typeArguments": null,
              "arguments": [],
              "start": 2124,
              "end": 2152
            },
            "definite": false,
            "start": 2091,
            "end": 2152
          }
        ],
        "declare": false,
        "start": 2087,
        "end": 2153
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2080,
      "end": 2153
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
                    "start": 2191,
                    "end": 2211
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2212,
                    "end": 2213
                  },
                  "start": 2191,
                  "end": 2213
                },
                "typeArguments": null,
                "start": 2191,
                "end": 2213
              },
              "start": 2189,
              "end": 2213
            },
            "start": 2158,
            "end": 2213
          },
          "init": null,
          "definite": false,
          "start": 2158,
          "end": 2213
        }
      ],
      "declare": false,
      "start": 2154,
      "end": 2214
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
                      "start": 2258,
                      "end": 2278
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2279,
                      "end": 2280
                    },
                    "start": 2258,
                    "end": 2280
                  },
                  "typeArguments": null,
                  "start": 2258,
                  "end": 2280
                },
                "start": 2256,
                "end": 2280
              },
              "start": 2226,
              "end": 2280
            },
            "init": null,
            "definite": false,
            "start": 2226,
            "end": 2280
          }
        ],
        "declare": false,
        "start": 2222,
        "end": 2281
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2215,
      "end": 2281
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
          "start": 2347,
          "end": 2365
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2368,
            "end": 2376
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "c_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2377,
            "end": 2385
          },
          "start": 2368,
          "end": 2385
        },
        "importKind": "value",
        "start": 2340,
        "end": 2386
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2333,
      "end": 2386
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
          "start": 2401,
          "end": 2419
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2422,
            "end": 2430
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "e_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2431,
            "end": 2439
          },
          "start": 2422,
          "end": 2439
        },
        "importKind": "value",
        "start": 2394,
        "end": 2440
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2387,
      "end": 2440
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
          "start": 2455,
          "end": 2473
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2476,
            "end": 2484
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "f_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2485,
            "end": 2493
          },
          "start": 2476,
          "end": 2493
        },
        "importKind": "value",
        "start": 2448,
        "end": 2494
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2441,
      "end": 2494
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
          "start": 2509,
          "end": 2527
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2530,
            "end": 2538
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "v_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2539,
            "end": 2547
          },
          "start": 2530,
          "end": 2547
        },
        "importKind": "value",
        "start": 2502,
        "end": 2548
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2495,
      "end": 2548
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
          "start": 2563,
          "end": 2581
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2584,
            "end": 2592
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "i_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2593,
            "end": 2601
          },
          "start": 2584,
          "end": 2601
        },
        "importKind": "value",
        "start": 2556,
        "end": 2602
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2549,
      "end": 2602
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
          "start": 2617,
          "end": 2636
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2639,
            "end": 2647
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "mi_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2648,
            "end": 2657
          },
          "start": 2639,
          "end": 2657
        },
        "importKind": "value",
        "start": 2610,
        "end": 2658
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2603,
      "end": 2658
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
          "start": 2673,
          "end": 2692
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2695,
            "end": 2703
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "mu_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2704,
            "end": 2713
          },
          "start": 2695,
          "end": 2713
        },
        "importKind": "value",
        "start": 2666,
        "end": 2714
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2659,
      "end": 2714
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
            "start": 2744,
            "end": 2773
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_public_c_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2780,
              "end": 2798
            },
            "typeArguments": null,
            "arguments": [],
            "start": 2776,
            "end": 2800
          },
          "definite": false,
          "start": 2744,
          "end": 2800
        }
      ],
      "declare": false,
      "start": 2740,
      "end": 2801
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
              "start": 2813,
              "end": 2841
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_public_c_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2848,
                "end": 2866
              },
              "typeArguments": null,
              "arguments": [],
              "start": 2844,
              "end": 2868
            },
            "definite": false,
            "start": 2813,
            "end": 2868
          }
        ],
        "declare": false,
        "start": 2809,
        "end": 2869
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2802,
      "end": 2869
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
            "start": 2874,
            "end": 2903
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_public_e_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2906,
              "end": 2924
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Happy",
              "optional": false,
              "typeAnnotation": null,
              "start": 2925,
              "end": 2930
            },
            "optional": false,
            "computed": false,
            "start": 2906,
            "end": 2930
          },
          "definite": false,
          "start": 2874,
          "end": 2930
        }
      ],
      "declare": false,
      "start": 2870,
      "end": 2931
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
              "start": 2943,
              "end": 2971
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_public_e_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2974,
                "end": 2992
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Grumpy",
                "optional": false,
                "typeAnnotation": null,
                "start": 2993,
                "end": 2999
              },
              "optional": false,
              "computed": false,
              "start": 2974,
              "end": 2999
            },
            "definite": false,
            "start": 2943,
            "end": 2999
          }
        ],
        "declare": false,
        "start": 2939,
        "end": 3000
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2932,
      "end": 3000
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
            "start": 3005,
            "end": 3034
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_public_f_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 3037,
              "end": 3055
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 3037,
            "end": 3057
          },
          "definite": false,
          "start": 3005,
          "end": 3057
        }
      ],
      "declare": false,
      "start": 3001,
      "end": 3058
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
              "start": 3070,
              "end": 3098
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "im_public_f_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 3101,
                "end": 3119
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 3101,
              "end": 3121
            },
            "definite": false,
            "start": 3070,
            "end": 3121
          }
        ],
        "declare": false,
        "start": 3066,
        "end": 3122
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3059,
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
            "name": "privateUse_im_public_v_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 3127,
            "end": 3156
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "im_public_v_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 3159,
            "end": 3177
          },
          "definite": false,
          "start": 3127,
          "end": 3177
        }
      ],
      "declare": false,
      "start": 3123,
      "end": 3178
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
              "start": 3190,
              "end": 3218
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "im_public_v_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 3221,
              "end": 3239
            },
            "definite": false,
            "start": 3190,
            "end": 3239
          }
        ],
        "declare": false,
        "start": 3186,
        "end": 3240
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3179,
      "end": 3240
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
                  "start": 3276,
                  "end": 3294
                },
                "typeArguments": null,
                "start": 3276,
                "end": 3294
              },
              "start": 3274,
              "end": 3294
            },
            "start": 3245,
            "end": 3294
          },
          "init": null,
          "definite": false,
          "start": 3245,
          "end": 3294
        }
      ],
      "declare": false,
      "start": 3241,
      "end": 3295
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
                    "start": 3337,
                    "end": 3355
                  },
                  "typeArguments": null,
                  "start": 3337,
                  "end": 3355
                },
                "start": 3335,
                "end": 3355
              },
              "start": 3307,
              "end": 3355
            },
            "init": null,
            "definite": false,
            "start": 3307,
            "end": 3355
          }
        ],
        "declare": false,
        "start": 3303,
        "end": 3356
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3296,
      "end": 3356
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
            "start": 3361,
            "end": 3391
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
                "start": 3398,
                "end": 3417
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 3418,
                "end": 3419
              },
              "optional": false,
              "computed": false,
              "start": 3398,
              "end": 3419
            },
            "typeArguments": null,
            "arguments": [],
            "start": 3394,
            "end": 3421
          },
          "definite": false,
          "start": 3361,
          "end": 3421
        }
      ],
      "declare": false,
      "start": 3357,
      "end": 3422
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
              "start": 3434,
              "end": 3463
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
                  "start": 3470,
                  "end": 3489
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3490,
                  "end": 3491
                },
                "optional": false,
                "computed": false,
                "start": 3470,
                "end": 3491
              },
              "typeArguments": null,
              "arguments": [],
              "start": 3466,
              "end": 3493
            },
            "definite": false,
            "start": 3434,
            "end": 3493
          }
        ],
        "declare": false,
        "start": 3430,
        "end": 3494
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3423,
      "end": 3494
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
                    "start": 3531,
                    "end": 3550
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3551,
                    "end": 3552
                  },
                  "start": 3531,
                  "end": 3552
                },
                "typeArguments": null,
                "start": 3531,
                "end": 3552
              },
              "start": 3529,
              "end": 3552
            },
            "start": 3499,
            "end": 3552
          },
          "init": null,
          "definite": false,
          "start": 3499,
          "end": 3552
        }
      ],
      "declare": false,
      "start": 3495,
      "end": 3553
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
                      "start": 3596,
                      "end": 3615
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3616,
                      "end": 3617
                    },
                    "start": 3596,
                    "end": 3617
                  },
                  "typeArguments": null,
                  "start": 3596,
                  "end": 3617
                },
                "start": 3594,
                "end": 3617
              },
              "start": 3565,
              "end": 3617
            },
            "init": null,
            "definite": false,
            "start": 3565,
            "end": 3617
          }
        ],
        "declare": false,
        "start": 3561,
        "end": 3618
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3554,
      "end": 3618
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 20,
  "end": 3618
}
```
