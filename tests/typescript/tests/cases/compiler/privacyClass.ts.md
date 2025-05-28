__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2982,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 1035,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 1035,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 16,
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 17,
          "end": 1035,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 23,
              "end": 59,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 30,
                "end": 59,
                "id": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 51,
                  "decorators": [],
                  "name": "m1_i_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 52,
                  "end": 59,
                  "body": []
                },
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": []
            },
            {
              "type": "TSInterfaceDeclaration",
              "start": 65,
              "end": 95,
              "id": {
                "type": "Identifier",
                "start": 75,
                "end": 87,
                "decorators": [],
                "name": "m1_i_private",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 88,
                "end": 95,
                "body": []
              },
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 101,
              "end": 166,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 108,
                "end": 166,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 125,
                  "decorators": [],
                  "name": "m1_c_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 126,
                  "end": 166,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 136,
                      "end": 160,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 144,
                        "end": 146,
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 146,
                        "end": 160,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 149,
                          "end": 160,
                          "body": []
                        },
                        "expression": false
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private"
                    }
                  ]
                },
                "abstract": false,
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ClassDeclaration",
              "start": 172,
              "end": 198,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 178,
                "end": 190,
                "decorators": [],
                "name": "m1_c_private",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 191,
                "end": 198,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            {
              "type": "ClassDeclaration",
              "start": 204,
              "end": 251,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 210,
                "end": 223,
                "decorators": [],
                "name": "m1_C1_private",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "start": 232,
                "end": 243,
                "decorators": [],
                "name": "m1_c_public",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 244,
                "end": 251,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            {
              "type": "ClassDeclaration",
              "start": 256,
              "end": 304,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 262,
                "end": 275,
                "decorators": [],
                "name": "m1_C2_private",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "start": 284,
                "end": 296,
                "decorators": [],
                "name": "m1_c_private",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 297,
                "end": 304,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 309,
              "end": 362,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 316,
                "end": 362,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 322,
                  "end": 334,
                  "decorators": [],
                  "name": "m1_C3_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "start": 343,
                  "end": 354,
                  "decorators": [],
                  "name": "m1_c_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 355,
                  "end": 362,
                  "body": []
                },
                "abstract": false,
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 367,
              "end": 421,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 374,
                "end": 421,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 380,
                  "end": 392,
                  "decorators": [],
                  "name": "m1_C4_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "start": 401,
                  "end": 413,
                  "decorators": [],
                  "name": "m1_c_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 414,
                  "end": 421,
                  "body": []
                },
                "abstract": false,
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ClassDeclaration",
              "start": 427,
              "end": 477,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 433,
                "end": 446,
                "decorators": [],
                "name": "m1_C5_private",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 458,
                  "end": 469,
                  "expression": {
                    "type": "Identifier",
                    "start": 458,
                    "end": 469,
                    "decorators": [],
                    "name": "m1_i_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "body": {
                "type": "ClassBody",
                "start": 470,
                "end": 477,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            {
              "type": "ClassDeclaration",
              "start": 482,
              "end": 533,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 488,
                "end": 501,
                "decorators": [],
                "name": "m1_C6_private",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 513,
                  "end": 525,
                  "expression": {
                    "type": "Identifier",
                    "start": 513,
                    "end": 525,
                    "decorators": [],
                    "name": "m1_i_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "body": {
                "type": "ClassBody",
                "start": 526,
                "end": 533,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 538,
              "end": 594,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 545,
                "end": 594,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 551,
                  "end": 563,
                  "decorators": [],
                  "name": "m1_C7_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [
                  {
                    "type": "TSClassImplements",
                    "start": 575,
                    "end": 586,
                    "expression": {
                      "type": "Identifier",
                      "start": 575,
                      "end": 586,
                      "decorators": [],
                      "name": "m1_i_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ],
                "body": {
                  "type": "ClassBody",
                  "start": 587,
                  "end": 594,
                  "body": []
                },
                "abstract": false,
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 599,
              "end": 656,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 606,
                "end": 656,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 612,
                  "end": 624,
                  "decorators": [],
                  "name": "m1_C8_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [
                  {
                    "type": "TSClassImplements",
                    "start": 636,
                    "end": 648,
                    "expression": {
                      "type": "Identifier",
                      "start": 636,
                      "end": 648,
                      "decorators": [],
                      "name": "m1_i_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ],
                "body": {
                  "type": "ClassBody",
                  "start": 649,
                  "end": 656,
                  "body": []
                },
                "abstract": false,
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ClassDeclaration",
              "start": 662,
              "end": 746,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 668,
                "end": 681,
                "decorators": [],
                "name": "m1_C9_private",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "start": 690,
                "end": 701,
                "decorators": [],
                "name": "m1_c_public",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 713,
                  "end": 725,
                  "expression": {
                    "type": "Identifier",
                    "start": 713,
                    "end": 725,
                    "decorators": [],
                    "name": "m1_i_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSClassImplements",
                  "start": 727,
                  "end": 738,
                  "expression": {
                    "type": "Identifier",
                    "start": 727,
                    "end": 738,
                    "decorators": [],
                    "name": "m1_i_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "body": {
                "type": "ClassBody",
                "start": 739,
                "end": 746,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            {
              "type": "ClassDeclaration",
              "start": 751,
              "end": 838,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 757,
                "end": 771,
                "decorators": [],
                "name": "m1_C10_private",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "start": 780,
                "end": 792,
                "decorators": [],
                "name": "m1_c_private",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 805,
                  "end": 817,
                  "expression": {
                    "type": "Identifier",
                    "start": 805,
                    "end": 817,
                    "decorators": [],
                    "name": "m1_i_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSClassImplements",
                  "start": 819,
                  "end": 830,
                  "expression": {
                    "type": "Identifier",
                    "start": 819,
                    "end": 830,
                    "decorators": [],
                    "name": "m1_i_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "body": {
                "type": "ClassBody",
                "start": 831,
                "end": 838,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 843,
              "end": 935,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 850,
                "end": 935,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 856,
                  "end": 869,
                  "decorators": [],
                  "name": "m1_C11_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "start": 878,
                  "end": 889,
                  "decorators": [],
                  "name": "m1_c_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "superTypeArguments": null,
                "implements": [
                  {
                    "type": "TSClassImplements",
                    "start": 902,
                    "end": 914,
                    "expression": {
                      "type": "Identifier",
                      "start": 902,
                      "end": 914,
                      "decorators": [],
                      "name": "m1_i_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSClassImplements",
                    "start": 916,
                    "end": 927,
                    "expression": {
                      "type": "Identifier",
                      "start": 916,
                      "end": 927,
                      "decorators": [],
                      "name": "m1_i_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ],
                "body": {
                  "type": "ClassBody",
                  "start": 928,
                  "end": 935,
                  "body": []
                },
                "abstract": false,
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 940,
              "end": 1033,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 947,
                "end": 1033,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 953,
                  "end": 966,
                  "decorators": [],
                  "name": "m1_C12_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "start": 975,
                  "end": 987,
                  "decorators": [],
                  "name": "m1_c_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "superTypeArguments": null,
                "implements": [
                  {
                    "type": "TSClassImplements",
                    "start": 1000,
                    "end": 1012,
                    "expression": {
                      "type": "Identifier",
                      "start": 1000,
                      "end": 1012,
                      "decorators": [],
                      "name": "m1_i_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSClassImplements",
                    "start": 1014,
                    "end": 1025,
                    "expression": {
                      "type": "Identifier",
                      "start": 1014,
                      "end": 1025,
                      "decorators": [],
                      "name": "m1_i_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ],
                "body": {
                  "type": "ClassBody",
                  "start": 1026,
                  "end": 1033,
                  "body": []
                },
                "abstract": false,
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1038,
      "end": 2066,
      "id": {
        "type": "Identifier",
        "start": 1045,
        "end": 1047,
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1048,
        "end": 2066,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1054,
            "end": 1090,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 1061,
              "end": 1090,
              "id": {
                "type": "Identifier",
                "start": 1071,
                "end": 1082,
                "decorators": [],
                "name": "m2_i_public",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 1083,
                "end": 1090,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1096,
            "end": 1126,
            "id": {
              "type": "Identifier",
              "start": 1106,
              "end": 1118,
              "decorators": [],
              "name": "m2_i_private",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 1119,
              "end": 1126,
              "body": []
            },
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1132,
            "end": 1197,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1139,
              "end": 1197,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 1145,
                "end": 1156,
                "decorators": [],
                "name": "m2_c_public",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 1157,
                "end": 1197,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 1167,
                    "end": 1191,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1175,
                      "end": 1177,
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1177,
                      "end": 1191,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1180,
                        "end": 1191,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ClassDeclaration",
            "start": 1203,
            "end": 1229,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 1209,
              "end": 1221,
              "decorators": [],
              "name": "m2_c_private",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 1222,
              "end": 1229,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 1235,
            "end": 1282,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 1241,
              "end": 1254,
              "decorators": [],
              "name": "m2_C1_private",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 1263,
              "end": 1274,
              "decorators": [],
              "name": "m2_c_public",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 1275,
              "end": 1282,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 1287,
            "end": 1335,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 1293,
              "end": 1306,
              "decorators": [],
              "name": "m2_C2_private",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 1315,
              "end": 1327,
              "decorators": [],
              "name": "m2_c_private",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 1328,
              "end": 1335,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1340,
            "end": 1393,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1347,
              "end": 1393,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 1353,
                "end": 1365,
                "decorators": [],
                "name": "m2_C3_public",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "start": 1374,
                "end": 1385,
                "decorators": [],
                "name": "m2_c_public",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 1386,
                "end": 1393,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1398,
            "end": 1452,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1405,
              "end": 1452,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 1411,
                "end": 1423,
                "decorators": [],
                "name": "m2_C4_public",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "start": 1432,
                "end": 1444,
                "decorators": [],
                "name": "m2_c_private",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 1445,
                "end": 1452,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ClassDeclaration",
            "start": 1458,
            "end": 1508,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 1464,
              "end": 1477,
              "decorators": [],
              "name": "m2_C5_private",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 1489,
                "end": 1500,
                "expression": {
                  "type": "Identifier",
                  "start": 1489,
                  "end": 1500,
                  "decorators": [],
                  "name": "m2_i_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "body": {
              "type": "ClassBody",
              "start": 1501,
              "end": 1508,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 1513,
            "end": 1564,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 1519,
              "end": 1532,
              "decorators": [],
              "name": "m2_C6_private",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 1544,
                "end": 1556,
                "expression": {
                  "type": "Identifier",
                  "start": 1544,
                  "end": 1556,
                  "decorators": [],
                  "name": "m2_i_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "body": {
              "type": "ClassBody",
              "start": 1557,
              "end": 1564,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1569,
            "end": 1625,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1576,
              "end": 1625,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 1582,
                "end": 1594,
                "decorators": [],
                "name": "m2_C7_public",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 1606,
                  "end": 1617,
                  "expression": {
                    "type": "Identifier",
                    "start": 1606,
                    "end": 1617,
                    "decorators": [],
                    "name": "m2_i_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "body": {
                "type": "ClassBody",
                "start": 1618,
                "end": 1625,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1630,
            "end": 1687,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1637,
              "end": 1687,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 1643,
                "end": 1655,
                "decorators": [],
                "name": "m2_C8_public",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 1667,
                  "end": 1679,
                  "expression": {
                    "type": "Identifier",
                    "start": 1667,
                    "end": 1679,
                    "decorators": [],
                    "name": "m2_i_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "body": {
                "type": "ClassBody",
                "start": 1680,
                "end": 1687,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ClassDeclaration",
            "start": 1693,
            "end": 1777,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 1699,
              "end": 1712,
              "decorators": [],
              "name": "m2_C9_private",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 1721,
              "end": 1732,
              "decorators": [],
              "name": "m2_c_public",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 1744,
                "end": 1756,
                "expression": {
                  "type": "Identifier",
                  "start": 1744,
                  "end": 1756,
                  "decorators": [],
                  "name": "m2_i_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSClassImplements",
                "start": 1758,
                "end": 1769,
                "expression": {
                  "type": "Identifier",
                  "start": 1758,
                  "end": 1769,
                  "decorators": [],
                  "name": "m2_i_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "body": {
              "type": "ClassBody",
              "start": 1770,
              "end": 1777,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 1782,
            "end": 1869,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 1788,
              "end": 1802,
              "decorators": [],
              "name": "m2_C10_private",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 1811,
              "end": 1823,
              "decorators": [],
              "name": "m2_c_private",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 1836,
                "end": 1848,
                "expression": {
                  "type": "Identifier",
                  "start": 1836,
                  "end": 1848,
                  "decorators": [],
                  "name": "m2_i_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSClassImplements",
                "start": 1850,
                "end": 1861,
                "expression": {
                  "type": "Identifier",
                  "start": 1850,
                  "end": 1861,
                  "decorators": [],
                  "name": "m2_i_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "body": {
              "type": "ClassBody",
              "start": 1862,
              "end": 1869,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1874,
            "end": 1966,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1881,
              "end": 1966,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 1887,
                "end": 1900,
                "decorators": [],
                "name": "m2_C11_public",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "start": 1909,
                "end": 1920,
                "decorators": [],
                "name": "m2_c_public",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 1933,
                  "end": 1945,
                  "expression": {
                    "type": "Identifier",
                    "start": 1933,
                    "end": 1945,
                    "decorators": [],
                    "name": "m2_i_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSClassImplements",
                  "start": 1947,
                  "end": 1958,
                  "expression": {
                    "type": "Identifier",
                    "start": 1947,
                    "end": 1958,
                    "decorators": [],
                    "name": "m2_i_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "body": {
                "type": "ClassBody",
                "start": 1959,
                "end": 1966,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1971,
            "end": 2064,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1978,
              "end": 2064,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 1984,
                "end": 1997,
                "decorators": [],
                "name": "m2_C12_public",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "start": 2006,
                "end": 2018,
                "decorators": [],
                "name": "m2_c_private",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 2031,
                  "end": 2043,
                  "expression": {
                    "type": "Identifier",
                    "start": 2031,
                    "end": 2043,
                    "decorators": [],
                    "name": "m2_i_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSClassImplements",
                  "start": 2045,
                  "end": 2056,
                  "expression": {
                    "type": "Identifier",
                    "start": 2045,
                    "end": 2056,
                    "decorators": [],
                    "name": "m2_i_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "body": {
                "type": "ClassBody",
                "start": 2057,
                "end": 2064,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2068,
      "end": 2101,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 2075,
        "end": 2101,
        "id": {
          "type": "Identifier",
          "start": 2085,
          "end": 2097,
          "decorators": [],
          "name": "glo_i_public",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 2098,
          "end": 2101,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2103,
      "end": 2130,
      "id": {
        "type": "Identifier",
        "start": 2113,
        "end": 2126,
        "decorators": [],
        "name": "glo_i_private",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 2127,
        "end": 2130,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2132,
      "end": 2186,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 2139,
        "end": 2186,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 2145,
          "end": 2157,
          "decorators": [],
          "name": "glo_c_public",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 2158,
          "end": 2186,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 2164,
              "end": 2184,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2172,
                "end": 2174,
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 2174,
                "end": 2184,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 2177,
                  "end": 2184,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private"
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ClassDeclaration",
      "start": 2188,
      "end": 2211,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2194,
        "end": 2207,
        "decorators": [],
        "name": "glo_c_private",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 2208,
        "end": 2211,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 2213,
      "end": 2258,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2219,
        "end": 2233,
        "decorators": [],
        "name": "glo_C1_private",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 2242,
        "end": 2254,
        "decorators": [],
        "name": "glo_c_public",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 2255,
        "end": 2258,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 2259,
      "end": 2305,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2265,
        "end": 2279,
        "decorators": [],
        "name": "glo_C2_private",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 2288,
        "end": 2301,
        "decorators": [],
        "name": "glo_c_private",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 2302,
        "end": 2305,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2306,
      "end": 2357,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 2313,
        "end": 2357,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 2319,
          "end": 2332,
          "decorators": [],
          "name": "glo_C3_public",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "start": 2341,
          "end": 2353,
          "decorators": [],
          "name": "glo_c_public",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 2354,
          "end": 2357,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2358,
      "end": 2410,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 2365,
        "end": 2410,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 2371,
          "end": 2384,
          "decorators": [],
          "name": "glo_C4_public",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "start": 2393,
          "end": 2406,
          "decorators": [],
          "name": "glo_c_private",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 2407,
          "end": 2410,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ClassDeclaration",
      "start": 2412,
      "end": 2460,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2418,
        "end": 2432,
        "decorators": [],
        "name": "glo_C5_private",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 2444,
          "end": 2456,
          "expression": {
            "type": "Identifier",
            "start": 2444,
            "end": 2456,
            "decorators": [],
            "name": "glo_i_public",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 2457,
        "end": 2460,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 2461,
      "end": 2510,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2467,
        "end": 2481,
        "decorators": [],
        "name": "glo_C6_private",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 2493,
          "end": 2506,
          "expression": {
            "type": "Identifier",
            "start": 2493,
            "end": 2506,
            "decorators": [],
            "name": "glo_i_private",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 2507,
        "end": 2510,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2511,
      "end": 2565,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 2518,
        "end": 2565,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 2524,
          "end": 2537,
          "decorators": [],
          "name": "glo_C7_public",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 2549,
            "end": 2561,
            "expression": {
              "type": "Identifier",
              "start": 2549,
              "end": 2561,
              "decorators": [],
              "name": "glo_i_public",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "body": {
          "type": "ClassBody",
          "start": 2562,
          "end": 2565,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2566,
      "end": 2621,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 2573,
        "end": 2621,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 2579,
          "end": 2592,
          "decorators": [],
          "name": "glo_C8_public",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 2604,
            "end": 2617,
            "expression": {
              "type": "Identifier",
              "start": 2604,
              "end": 2617,
              "decorators": [],
              "name": "glo_i_private",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "body": {
          "type": "ClassBody",
          "start": 2618,
          "end": 2621,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ClassDeclaration",
      "start": 2623,
      "end": 2707,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2629,
        "end": 2643,
        "decorators": [],
        "name": "glo_C9_private",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 2652,
        "end": 2664,
        "decorators": [],
        "name": "glo_c_public",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 2676,
          "end": 2689,
          "expression": {
            "type": "Identifier",
            "start": 2676,
            "end": 2689,
            "decorators": [],
            "name": "glo_i_private",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        {
          "type": "TSClassImplements",
          "start": 2691,
          "end": 2703,
          "expression": {
            "type": "Identifier",
            "start": 2691,
            "end": 2703,
            "decorators": [],
            "name": "glo_i_public",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 2704,
        "end": 2707,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 2708,
      "end": 2795,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2714,
        "end": 2729,
        "decorators": [],
        "name": "glo_C10_private",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 2738,
        "end": 2751,
        "decorators": [],
        "name": "glo_c_private",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 2764,
          "end": 2777,
          "expression": {
            "type": "Identifier",
            "start": 2764,
            "end": 2777,
            "decorators": [],
            "name": "glo_i_private",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        {
          "type": "TSClassImplements",
          "start": 2779,
          "end": 2791,
          "expression": {
            "type": "Identifier",
            "start": 2779,
            "end": 2791,
            "decorators": [],
            "name": "glo_i_public",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 2792,
        "end": 2795,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2796,
      "end": 2888,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 2803,
        "end": 2888,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 2809,
          "end": 2823,
          "decorators": [],
          "name": "glo_C11_public",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "start": 2832,
          "end": 2844,
          "decorators": [],
          "name": "glo_c_public",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 2857,
            "end": 2870,
            "expression": {
              "type": "Identifier",
              "start": 2857,
              "end": 2870,
              "decorators": [],
              "name": "glo_i_private",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSClassImplements",
            "start": 2872,
            "end": 2884,
            "expression": {
              "type": "Identifier",
              "start": 2872,
              "end": 2884,
              "decorators": [],
              "name": "glo_i_public",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "body": {
          "type": "ClassBody",
          "start": 2885,
          "end": 2888,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2889,
      "end": 2982,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 2896,
        "end": 2982,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 2902,
          "end": 2916,
          "decorators": [],
          "name": "glo_C12_public",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "start": 2925,
          "end": 2938,
          "decorators": [],
          "name": "glo_c_private",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 2951,
            "end": 2964,
            "expression": {
              "type": "Identifier",
              "start": 2951,
              "end": 2964,
              "decorators": [],
              "name": "glo_i_private",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSClassImplements",
            "start": 2966,
            "end": 2978,
            "expression": {
              "type": "Identifier",
              "start": 2966,
              "end": 2978,
              "decorators": [],
              "name": "glo_i_public",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "body": {
          "type": "ClassBody",
          "start": 2979,
          "end": 2982,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
