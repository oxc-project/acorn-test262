__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 14,
          "end": 16
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
                  "name": "m1_i_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 40,
                  "end": 51
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [],
                  "start": 52,
                  "end": 59
                },
                "declare": false,
                "start": 30,
                "end": 59
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 23,
              "end": 59
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_i_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 75,
                "end": 87
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 88,
                "end": 95
              },
              "declare": false,
              "start": 65,
              "end": 95
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_c_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 114,
                  "end": 125
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 144,
                        "end": 146
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 149,
                          "end": 160
                        },
                        "expression": false,
                        "start": 146,
                        "end": 160
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 136,
                      "end": 160
                    }
                  ],
                  "start": 126,
                  "end": 166
                },
                "abstract": false,
                "declare": false,
                "start": 108,
                "end": 166
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 101,
              "end": 166
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 178,
                "end": 190
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 191,
                "end": 198
              },
              "abstract": false,
              "declare": false,
              "start": 172,
              "end": 198
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_C1_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 210,
                "end": 223
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_c_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 232,
                "end": 243
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 244,
                "end": 251
              },
              "abstract": false,
              "declare": false,
              "start": 204,
              "end": 251
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_C2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 262,
                "end": 275
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 284,
                "end": 296
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 297,
                "end": 304
              },
              "abstract": false,
              "declare": false,
              "start": 256,
              "end": 304
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_C3_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 322,
                  "end": 334
                },
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_c_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 343,
                  "end": 354
                },
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 355,
                  "end": 362
                },
                "abstract": false,
                "declare": false,
                "start": 316,
                "end": 362
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 309,
              "end": 362
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_C4_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 380,
                  "end": 392
                },
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_c_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 401,
                  "end": 413
                },
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 414,
                  "end": 421
                },
                "abstract": false,
                "declare": false,
                "start": 374,
                "end": 421
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 367,
              "end": 421
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_C5_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 433,
                "end": 446
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_i_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 458,
                    "end": 469
                  },
                  "typeArguments": null,
                  "start": 458,
                  "end": 469
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 470,
                "end": 477
              },
              "abstract": false,
              "declare": false,
              "start": 427,
              "end": 477
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_C6_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 488,
                "end": 501
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_i_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 513,
                    "end": 525
                  },
                  "typeArguments": null,
                  "start": 513,
                  "end": 525
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 526,
                "end": 533
              },
              "abstract": false,
              "declare": false,
              "start": 482,
              "end": 533
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_C7_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 551,
                  "end": 563
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [
                  {
                    "type": "TSClassImplements",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_i_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 575,
                      "end": 586
                    },
                    "typeArguments": null,
                    "start": 575,
                    "end": 586
                  }
                ],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 587,
                  "end": 594
                },
                "abstract": false,
                "declare": false,
                "start": 545,
                "end": 594
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 538,
              "end": 594
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_C8_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 612,
                  "end": 624
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [
                  {
                    "type": "TSClassImplements",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_i_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 636,
                      "end": 648
                    },
                    "typeArguments": null,
                    "start": 636,
                    "end": 648
                  }
                ],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 649,
                  "end": 656
                },
                "abstract": false,
                "declare": false,
                "start": 606,
                "end": 656
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 599,
              "end": 656
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_C9_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 668,
                "end": 681
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_c_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 690,
                "end": 701
              },
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_i_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 713,
                    "end": 725
                  },
                  "typeArguments": null,
                  "start": 713,
                  "end": 725
                },
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_i_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 727,
                    "end": 738
                  },
                  "typeArguments": null,
                  "start": 727,
                  "end": 738
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 739,
                "end": 746
              },
              "abstract": false,
              "declare": false,
              "start": 662,
              "end": 746
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_C10_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 757,
                "end": 771
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 780,
                "end": 792
              },
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_i_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 805,
                    "end": 817
                  },
                  "typeArguments": null,
                  "start": 805,
                  "end": 817
                },
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_i_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 819,
                    "end": 830
                  },
                  "typeArguments": null,
                  "start": 819,
                  "end": 830
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 831,
                "end": 838
              },
              "abstract": false,
              "declare": false,
              "start": 751,
              "end": 838
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_C11_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 856,
                  "end": 869
                },
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_c_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 878,
                  "end": 889
                },
                "superTypeArguments": null,
                "implements": [
                  {
                    "type": "TSClassImplements",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_i_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 902,
                      "end": 914
                    },
                    "typeArguments": null,
                    "start": 902,
                    "end": 914
                  },
                  {
                    "type": "TSClassImplements",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_i_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 916,
                      "end": 927
                    },
                    "typeArguments": null,
                    "start": 916,
                    "end": 927
                  }
                ],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 928,
                  "end": 935
                },
                "abstract": false,
                "declare": false,
                "start": 850,
                "end": 935
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 843,
              "end": 935
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_C12_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 953,
                  "end": 966
                },
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_c_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 975,
                  "end": 987
                },
                "superTypeArguments": null,
                "implements": [
                  {
                    "type": "TSClassImplements",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_i_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1000,
                      "end": 1012
                    },
                    "typeArguments": null,
                    "start": 1000,
                    "end": 1012
                  },
                  {
                    "type": "TSClassImplements",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_i_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1014,
                      "end": 1025
                    },
                    "typeArguments": null,
                    "start": 1014,
                    "end": 1025
                  }
                ],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 1026,
                  "end": 1033
                },
                "abstract": false,
                "declare": false,
                "start": 947,
                "end": 1033
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 940,
              "end": 1033
            }
          ],
          "start": 17,
          "end": 1035
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 1035
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 1035
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1045,
        "end": 1047
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
                "name": "m2_i_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 1071,
                "end": 1082
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 1083,
                "end": 1090
              },
              "declare": false,
              "start": 1061,
              "end": 1090
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1054,
            "end": 1090
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_i_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1106,
              "end": 1118
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 1119,
              "end": 1126
            },
            "declare": false,
            "start": 1096,
            "end": 1126
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_c_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 1145,
                "end": 1156
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1175,
                      "end": 1177
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1180,
                        "end": 1191
                      },
                      "expression": false,
                      "start": 1177,
                      "end": 1191
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1167,
                    "end": 1191
                  }
                ],
                "start": 1157,
                "end": 1197
              },
              "abstract": false,
              "declare": false,
              "start": 1139,
              "end": 1197
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1132,
            "end": 1197
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_c_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1209,
              "end": 1221
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1222,
              "end": 1229
            },
            "abstract": false,
            "declare": false,
            "start": 1203,
            "end": 1229
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_C1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1241,
              "end": 1254
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_c_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 1263,
              "end": 1274
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1275,
              "end": 1282
            },
            "abstract": false,
            "declare": false,
            "start": 1235,
            "end": 1282
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_C2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1293,
              "end": 1306
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_c_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1315,
              "end": 1327
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1328,
              "end": 1335
            },
            "abstract": false,
            "declare": false,
            "start": 1287,
            "end": 1335
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_C3_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 1353,
                "end": 1365
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_c_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 1374,
                "end": 1385
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 1386,
                "end": 1393
              },
              "abstract": false,
              "declare": false,
              "start": 1347,
              "end": 1393
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1340,
            "end": 1393
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_C4_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 1411,
                "end": 1423
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1432,
                "end": 1444
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 1445,
                "end": 1452
              },
              "abstract": false,
              "declare": false,
              "start": 1405,
              "end": 1452
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1398,
            "end": 1452
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_C5_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1464,
              "end": 1477
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m2_i_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1489,
                  "end": 1500
                },
                "typeArguments": null,
                "start": 1489,
                "end": 1500
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1501,
              "end": 1508
            },
            "abstract": false,
            "declare": false,
            "start": 1458,
            "end": 1508
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_C6_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1519,
              "end": 1532
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m2_i_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1544,
                  "end": 1556
                },
                "typeArguments": null,
                "start": 1544,
                "end": 1556
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1557,
              "end": 1564
            },
            "abstract": false,
            "declare": false,
            "start": 1513,
            "end": 1564
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_C7_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 1582,
                "end": 1594
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2_i_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1606,
                    "end": 1617
                  },
                  "typeArguments": null,
                  "start": 1606,
                  "end": 1617
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 1618,
                "end": 1625
              },
              "abstract": false,
              "declare": false,
              "start": 1576,
              "end": 1625
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1569,
            "end": 1625
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_C8_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 1643,
                "end": 1655
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2_i_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1667,
                    "end": 1679
                  },
                  "typeArguments": null,
                  "start": 1667,
                  "end": 1679
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 1680,
                "end": 1687
              },
              "abstract": false,
              "declare": false,
              "start": 1637,
              "end": 1687
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1630,
            "end": 1687
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_C9_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1699,
              "end": 1712
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_c_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 1721,
              "end": 1732
            },
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m2_i_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1744,
                  "end": 1756
                },
                "typeArguments": null,
                "start": 1744,
                "end": 1756
              },
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m2_i_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1758,
                  "end": 1769
                },
                "typeArguments": null,
                "start": 1758,
                "end": 1769
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1770,
              "end": 1777
            },
            "abstract": false,
            "declare": false,
            "start": 1693,
            "end": 1777
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_C10_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1788,
              "end": 1802
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_c_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1811,
              "end": 1823
            },
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m2_i_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1836,
                  "end": 1848
                },
                "typeArguments": null,
                "start": 1836,
                "end": 1848
              },
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m2_i_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1850,
                  "end": 1861
                },
                "typeArguments": null,
                "start": 1850,
                "end": 1861
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1862,
              "end": 1869
            },
            "abstract": false,
            "declare": false,
            "start": 1782,
            "end": 1869
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_C11_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 1887,
                "end": 1900
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_c_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 1909,
                "end": 1920
              },
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2_i_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1933,
                    "end": 1945
                  },
                  "typeArguments": null,
                  "start": 1933,
                  "end": 1945
                },
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2_i_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1947,
                    "end": 1958
                  },
                  "typeArguments": null,
                  "start": 1947,
                  "end": 1958
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 1959,
                "end": 1966
              },
              "abstract": false,
              "declare": false,
              "start": 1881,
              "end": 1966
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1874,
            "end": 1966
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_C12_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 1984,
                "end": 1997
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 2006,
                "end": 2018
              },
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2_i_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2031,
                    "end": 2043
                  },
                  "typeArguments": null,
                  "start": 2031,
                  "end": 2043
                },
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2_i_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2045,
                    "end": 2056
                  },
                  "typeArguments": null,
                  "start": 2045,
                  "end": 2056
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 2057,
                "end": 2064
              },
              "abstract": false,
              "declare": false,
              "start": 1978,
              "end": 2064
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1971,
            "end": 2064
          }
        ],
        "start": 1048,
        "end": 2066
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1038,
      "end": 2066
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_i_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2085,
          "end": 2097
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 2098,
          "end": 2101
        },
        "declare": false,
        "start": 2075,
        "end": 2101
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2068,
      "end": 2101
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_i_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 2113,
        "end": 2126
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 2127,
        "end": 2130
      },
      "declare": false,
      "start": 2103,
      "end": 2130
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_c_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2145,
          "end": 2157
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2172,
                "end": 2174
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 2177,
                  "end": 2184
                },
                "expression": false,
                "start": 2174,
                "end": 2184
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 2164,
              "end": 2184
            }
          ],
          "start": 2158,
          "end": 2186
        },
        "abstract": false,
        "declare": false,
        "start": 2139,
        "end": 2186
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2132,
      "end": 2186
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_c_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 2194,
        "end": 2207
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 2208,
        "end": 2211
      },
      "abstract": false,
      "declare": false,
      "start": 2188,
      "end": 2211
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_C1_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 2219,
        "end": 2233
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_c_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 2242,
        "end": 2254
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 2255,
        "end": 2258
      },
      "abstract": false,
      "declare": false,
      "start": 2213,
      "end": 2258
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_C2_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 2265,
        "end": 2279
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_c_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 2288,
        "end": 2301
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 2302,
        "end": 2305
      },
      "abstract": false,
      "declare": false,
      "start": 2259,
      "end": 2305
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_C3_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2319,
          "end": 2332
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_c_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2341,
          "end": 2353
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 2354,
          "end": 2357
        },
        "abstract": false,
        "declare": false,
        "start": 2313,
        "end": 2357
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2306,
      "end": 2357
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_C4_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2371,
          "end": 2384
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_c_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 2393,
          "end": 2406
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 2407,
          "end": 2410
        },
        "abstract": false,
        "declare": false,
        "start": 2365,
        "end": 2410
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2358,
      "end": 2410
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_C5_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 2418,
        "end": 2432
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "glo_i_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2444,
            "end": 2456
          },
          "typeArguments": null,
          "start": 2444,
          "end": 2456
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 2457,
        "end": 2460
      },
      "abstract": false,
      "declare": false,
      "start": 2412,
      "end": 2460
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_C6_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 2467,
        "end": 2481
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "glo_i_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 2493,
            "end": 2506
          },
          "typeArguments": null,
          "start": 2493,
          "end": 2506
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 2507,
        "end": 2510
      },
      "abstract": false,
      "declare": false,
      "start": 2461,
      "end": 2510
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_C7_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2524,
          "end": 2537
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_i_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2549,
              "end": 2561
            },
            "typeArguments": null,
            "start": 2549,
            "end": 2561
          }
        ],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 2562,
          "end": 2565
        },
        "abstract": false,
        "declare": false,
        "start": 2518,
        "end": 2565
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2511,
      "end": 2565
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_C8_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2579,
          "end": 2592
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_i_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 2604,
              "end": 2617
            },
            "typeArguments": null,
            "start": 2604,
            "end": 2617
          }
        ],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 2618,
          "end": 2621
        },
        "abstract": false,
        "declare": false,
        "start": 2573,
        "end": 2621
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2566,
      "end": 2621
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_C9_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 2629,
        "end": 2643
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_c_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 2652,
        "end": 2664
      },
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "glo_i_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 2676,
            "end": 2689
          },
          "typeArguments": null,
          "start": 2676,
          "end": 2689
        },
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "glo_i_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2691,
            "end": 2703
          },
          "typeArguments": null,
          "start": 2691,
          "end": 2703
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 2704,
        "end": 2707
      },
      "abstract": false,
      "declare": false,
      "start": 2623,
      "end": 2707
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_C10_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 2714,
        "end": 2729
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_c_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 2738,
        "end": 2751
      },
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "glo_i_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 2764,
            "end": 2777
          },
          "typeArguments": null,
          "start": 2764,
          "end": 2777
        },
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "glo_i_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2779,
            "end": 2791
          },
          "typeArguments": null,
          "start": 2779,
          "end": 2791
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 2792,
        "end": 2795
      },
      "abstract": false,
      "declare": false,
      "start": 2708,
      "end": 2795
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_C11_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2809,
          "end": 2823
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_c_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2832,
          "end": 2844
        },
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_i_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 2857,
              "end": 2870
            },
            "typeArguments": null,
            "start": 2857,
            "end": 2870
          },
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_i_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2872,
              "end": 2884
            },
            "typeArguments": null,
            "start": 2872,
            "end": 2884
          }
        ],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 2885,
          "end": 2888
        },
        "abstract": false,
        "declare": false,
        "start": 2803,
        "end": 2888
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2796,
      "end": 2888
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_C12_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2902,
          "end": 2916
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_c_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 2925,
          "end": 2938
        },
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_i_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 2951,
              "end": 2964
            },
            "typeArguments": null,
            "start": 2951,
            "end": 2964
          },
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_i_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2966,
              "end": 2978
            },
            "typeArguments": null,
            "start": 2966,
            "end": 2978
          }
        ],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 2979,
          "end": 2982
        },
        "abstract": false,
        "declare": false,
        "start": 2896,
        "end": 2982
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2889,
      "end": 2982
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 2982
}
```
