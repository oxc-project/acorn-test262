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
          "name": "m1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                  "name": "m1_i_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "extends": [],
                "typeParameters": null,
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
              "attributes": [],
              "exportKind": "type"
            },
            {
              "type": "TSInterfaceDeclaration",
              "start": 65,
              "end": 95,
              "id": {
                "type": "Identifier",
                "start": 75,
                "end": 87,
                "name": "m1_i_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
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
                "id": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 125,
                  "name": "m1_c_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 126,
                  "end": 166,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 136,
                      "end": 160,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 144,
                        "end": 146,
                        "name": "f1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "method",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 146,
                        "end": 160,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 149,
                          "end": 160,
                          "body": []
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "decorators": [],
                      "override": false,
                      "optional": false,
                      "accessibility": "private"
                    }
                  ]
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [],
                "abstract": false,
                "declare": false,
                "superTypeArguments": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ClassDeclaration",
              "start": 172,
              "end": 198,
              "id": {
                "type": "Identifier",
                "start": 178,
                "end": 190,
                "name": "m1_c_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 191,
                "end": 198,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            {
              "type": "ClassDeclaration",
              "start": 204,
              "end": 251,
              "id": {
                "type": "Identifier",
                "start": 210,
                "end": 223,
                "name": "m1_C1_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 232,
                "end": 243,
                "name": "m1_c_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 244,
                "end": 251,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            {
              "type": "ClassDeclaration",
              "start": 256,
              "end": 304,
              "id": {
                "type": "Identifier",
                "start": 262,
                "end": 275,
                "name": "m1_C2_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 284,
                "end": 296,
                "name": "m1_c_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 297,
                "end": 304,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 309,
              "end": 362,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 316,
                "end": 362,
                "id": {
                  "type": "Identifier",
                  "start": 322,
                  "end": 334,
                  "name": "m1_C3_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": {
                  "type": "Identifier",
                  "start": 343,
                  "end": 354,
                  "name": "m1_c_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "body": {
                  "type": "ClassBody",
                  "start": 355,
                  "end": 362,
                  "body": []
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [],
                "abstract": false,
                "declare": false,
                "superTypeArguments": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 367,
              "end": 421,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 374,
                "end": 421,
                "id": {
                  "type": "Identifier",
                  "start": 380,
                  "end": 392,
                  "name": "m1_C4_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": {
                  "type": "Identifier",
                  "start": 401,
                  "end": 413,
                  "name": "m1_c_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "body": {
                  "type": "ClassBody",
                  "start": 414,
                  "end": 421,
                  "body": []
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [],
                "abstract": false,
                "declare": false,
                "superTypeArguments": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ClassDeclaration",
              "start": 427,
              "end": 477,
              "id": {
                "type": "Identifier",
                "start": 433,
                "end": 446,
                "name": "m1_C5_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 470,
                "end": 477,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 458,
                  "end": 469,
                  "expression": {
                    "type": "Identifier",
                    "start": 458,
                    "end": 469,
                    "name": "m1_i_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            {
              "type": "ClassDeclaration",
              "start": 482,
              "end": 533,
              "id": {
                "type": "Identifier",
                "start": 488,
                "end": 501,
                "name": "m1_C6_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 526,
                "end": 533,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 513,
                  "end": 525,
                  "expression": {
                    "type": "Identifier",
                    "start": 513,
                    "end": 525,
                    "name": "m1_i_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 538,
              "end": 594,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 545,
                "end": 594,
                "id": {
                  "type": "Identifier",
                  "start": 551,
                  "end": 563,
                  "name": "m1_C7_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 587,
                  "end": 594,
                  "body": []
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [
                  {
                    "type": "TSClassImplements",
                    "start": 575,
                    "end": 586,
                    "expression": {
                      "type": "Identifier",
                      "start": 575,
                      "end": 586,
                      "name": "m1_i_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ],
                "abstract": false,
                "declare": false,
                "superTypeArguments": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 599,
              "end": 656,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 606,
                "end": 656,
                "id": {
                  "type": "Identifier",
                  "start": 612,
                  "end": 624,
                  "name": "m1_C8_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 649,
                  "end": 656,
                  "body": []
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [
                  {
                    "type": "TSClassImplements",
                    "start": 636,
                    "end": 648,
                    "expression": {
                      "type": "Identifier",
                      "start": 636,
                      "end": 648,
                      "name": "m1_i_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ],
                "abstract": false,
                "declare": false,
                "superTypeArguments": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ClassDeclaration",
              "start": 662,
              "end": 746,
              "id": {
                "type": "Identifier",
                "start": 668,
                "end": 681,
                "name": "m1_C9_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 690,
                "end": 701,
                "name": "m1_c_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 739,
                "end": 746,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 713,
                  "end": 725,
                  "expression": {
                    "type": "Identifier",
                    "start": 713,
                    "end": 725,
                    "name": "m1_i_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "m1_i_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            {
              "type": "ClassDeclaration",
              "start": 751,
              "end": 838,
              "id": {
                "type": "Identifier",
                "start": 757,
                "end": 771,
                "name": "m1_C10_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 780,
                "end": 792,
                "name": "m1_c_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 831,
                "end": 838,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 805,
                  "end": 817,
                  "expression": {
                    "type": "Identifier",
                    "start": 805,
                    "end": 817,
                    "name": "m1_i_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "m1_i_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 843,
              "end": 935,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 850,
                "end": 935,
                "id": {
                  "type": "Identifier",
                  "start": 856,
                  "end": 869,
                  "name": "m1_C11_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": {
                  "type": "Identifier",
                  "start": 878,
                  "end": 889,
                  "name": "m1_c_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "body": {
                  "type": "ClassBody",
                  "start": 928,
                  "end": 935,
                  "body": []
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [
                  {
                    "type": "TSClassImplements",
                    "start": 902,
                    "end": 914,
                    "expression": {
                      "type": "Identifier",
                      "start": 902,
                      "end": 914,
                      "name": "m1_i_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "m1_i_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ],
                "abstract": false,
                "declare": false,
                "superTypeArguments": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 940,
              "end": 1033,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 947,
                "end": 1033,
                "id": {
                  "type": "Identifier",
                  "start": 953,
                  "end": 966,
                  "name": "m1_C12_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": {
                  "type": "Identifier",
                  "start": 975,
                  "end": 987,
                  "name": "m1_c_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "body": {
                  "type": "ClassBody",
                  "start": 1026,
                  "end": 1033,
                  "body": []
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [
                  {
                    "type": "TSClassImplements",
                    "start": 1000,
                    "end": 1012,
                    "expression": {
                      "type": "Identifier",
                      "start": 1000,
                      "end": 1012,
                      "name": "m1_i_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "m1_i_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ],
                "abstract": false,
                "declare": false,
                "superTypeArguments": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1038,
      "end": 2066,
      "id": {
        "type": "Identifier",
        "start": 1045,
        "end": 1047,
        "name": "m2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "name": "m2_i_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
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
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1096,
            "end": 1126,
            "id": {
              "type": "Identifier",
              "start": 1106,
              "end": 1118,
              "name": "m2_i_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
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
              "id": {
                "type": "Identifier",
                "start": 1145,
                "end": 1156,
                "name": "m2_c_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 1157,
                "end": 1197,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 1167,
                    "end": 1191,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1175,
                      "end": 1177,
                      "name": "f1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1177,
                      "end": 1191,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 1180,
                        "end": 1191,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ClassDeclaration",
            "start": 1203,
            "end": 1229,
            "id": {
              "type": "Identifier",
              "start": 1209,
              "end": 1221,
              "name": "m2_c_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 1222,
              "end": 1229,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 1235,
            "end": 1282,
            "id": {
              "type": "Identifier",
              "start": 1241,
              "end": 1254,
              "name": "m2_C1_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 1263,
              "end": 1274,
              "name": "m2_c_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 1275,
              "end": 1282,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 1287,
            "end": 1335,
            "id": {
              "type": "Identifier",
              "start": 1293,
              "end": 1306,
              "name": "m2_C2_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 1315,
              "end": 1327,
              "name": "m2_c_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 1328,
              "end": 1335,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1340,
            "end": 1393,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1347,
              "end": 1393,
              "id": {
                "type": "Identifier",
                "start": 1353,
                "end": 1365,
                "name": "m2_C3_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 1374,
                "end": 1385,
                "name": "m2_c_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 1386,
                "end": 1393,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1398,
            "end": 1452,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1405,
              "end": 1452,
              "id": {
                "type": "Identifier",
                "start": 1411,
                "end": 1423,
                "name": "m2_C4_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 1432,
                "end": 1444,
                "name": "m2_c_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 1445,
                "end": 1452,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ClassDeclaration",
            "start": 1458,
            "end": 1508,
            "id": {
              "type": "Identifier",
              "start": 1464,
              "end": 1477,
              "name": "m2_C5_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 1501,
              "end": 1508,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 1489,
                "end": 1500,
                "expression": {
                  "type": "Identifier",
                  "start": 1489,
                  "end": 1500,
                  "name": "m2_i_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 1513,
            "end": 1564,
            "id": {
              "type": "Identifier",
              "start": 1519,
              "end": 1532,
              "name": "m2_C6_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 1557,
              "end": 1564,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 1544,
                "end": 1556,
                "expression": {
                  "type": "Identifier",
                  "start": 1544,
                  "end": 1556,
                  "name": "m2_i_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1569,
            "end": 1625,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1576,
              "end": 1625,
              "id": {
                "type": "Identifier",
                "start": 1582,
                "end": 1594,
                "name": "m2_C7_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 1618,
                "end": 1625,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 1606,
                  "end": 1617,
                  "expression": {
                    "type": "Identifier",
                    "start": 1606,
                    "end": 1617,
                    "name": "m2_i_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1630,
            "end": 1687,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1637,
              "end": 1687,
              "id": {
                "type": "Identifier",
                "start": 1643,
                "end": 1655,
                "name": "m2_C8_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 1680,
                "end": 1687,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 1667,
                  "end": 1679,
                  "expression": {
                    "type": "Identifier",
                    "start": 1667,
                    "end": 1679,
                    "name": "m2_i_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ClassDeclaration",
            "start": 1693,
            "end": 1777,
            "id": {
              "type": "Identifier",
              "start": 1699,
              "end": 1712,
              "name": "m2_C9_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 1721,
              "end": 1732,
              "name": "m2_c_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 1770,
              "end": 1777,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 1744,
                "end": 1756,
                "expression": {
                  "type": "Identifier",
                  "start": 1744,
                  "end": 1756,
                  "name": "m2_i_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "m2_i_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 1782,
            "end": 1869,
            "id": {
              "type": "Identifier",
              "start": 1788,
              "end": 1802,
              "name": "m2_C10_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 1811,
              "end": 1823,
              "name": "m2_c_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 1862,
              "end": 1869,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 1836,
                "end": 1848,
                "expression": {
                  "type": "Identifier",
                  "start": 1836,
                  "end": 1848,
                  "name": "m2_i_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "m2_i_public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1874,
            "end": 1966,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1881,
              "end": 1966,
              "id": {
                "type": "Identifier",
                "start": 1887,
                "end": 1900,
                "name": "m2_C11_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 1909,
                "end": 1920,
                "name": "m2_c_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 1959,
                "end": 1966,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 1933,
                  "end": 1945,
                  "expression": {
                    "type": "Identifier",
                    "start": 1933,
                    "end": 1945,
                    "name": "m2_i_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "m2_i_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1971,
            "end": 2064,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1978,
              "end": 2064,
              "id": {
                "type": "Identifier",
                "start": 1984,
                "end": 1997,
                "name": "m2_C12_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 2006,
                "end": 2018,
                "name": "m2_c_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 2057,
                "end": 2064,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 2031,
                  "end": 2043,
                  "expression": {
                    "type": "Identifier",
                    "start": 2031,
                    "end": 2043,
                    "name": "m2_i_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "m2_i_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
          "name": "glo_i_public",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
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
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2103,
      "end": 2130,
      "id": {
        "type": "Identifier",
        "start": 2113,
        "end": 2126,
        "name": "glo_i_private",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
        "id": {
          "type": "Identifier",
          "start": 2145,
          "end": 2157,
          "name": "glo_c_public",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 2158,
          "end": 2186,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 2164,
              "end": 2184,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2172,
                "end": 2174,
                "name": "f1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 2174,
                "end": 2184,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 2177,
                  "end": 2184,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "private"
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 2188,
      "end": 2211,
      "id": {
        "type": "Identifier",
        "start": 2194,
        "end": 2207,
        "name": "glo_c_private",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2208,
        "end": 2211,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 2213,
      "end": 2258,
      "id": {
        "type": "Identifier",
        "start": 2219,
        "end": 2233,
        "name": "glo_C1_private",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 2242,
        "end": 2254,
        "name": "glo_c_public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 2255,
        "end": 2258,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 2259,
      "end": 2305,
      "id": {
        "type": "Identifier",
        "start": 2265,
        "end": 2279,
        "name": "glo_C2_private",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 2288,
        "end": 2301,
        "name": "glo_c_private",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 2302,
        "end": 2305,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2306,
      "end": 2357,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 2313,
        "end": 2357,
        "id": {
          "type": "Identifier",
          "start": 2319,
          "end": 2332,
          "name": "glo_C3_public",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "Identifier",
          "start": 2341,
          "end": 2353,
          "name": "glo_c_public",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 2354,
          "end": 2357,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2358,
      "end": 2410,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 2365,
        "end": 2410,
        "id": {
          "type": "Identifier",
          "start": 2371,
          "end": 2384,
          "name": "glo_C4_public",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "Identifier",
          "start": 2393,
          "end": 2406,
          "name": "glo_c_private",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 2407,
          "end": 2410,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 2412,
      "end": 2460,
      "id": {
        "type": "Identifier",
        "start": 2418,
        "end": 2432,
        "name": "glo_C5_private",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2457,
        "end": 2460,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 2444,
          "end": 2456,
          "expression": {
            "type": "Identifier",
            "start": 2444,
            "end": 2456,
            "name": "glo_i_public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 2461,
      "end": 2510,
      "id": {
        "type": "Identifier",
        "start": 2467,
        "end": 2481,
        "name": "glo_C6_private",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2507,
        "end": 2510,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 2493,
          "end": 2506,
          "expression": {
            "type": "Identifier",
            "start": 2493,
            "end": 2506,
            "name": "glo_i_private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2511,
      "end": 2565,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 2518,
        "end": 2565,
        "id": {
          "type": "Identifier",
          "start": 2524,
          "end": 2537,
          "name": "glo_C7_public",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 2562,
          "end": 2565,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 2549,
            "end": 2561,
            "expression": {
              "type": "Identifier",
              "start": 2549,
              "end": 2561,
              "name": "glo_i_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2566,
      "end": 2621,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 2573,
        "end": 2621,
        "id": {
          "type": "Identifier",
          "start": 2579,
          "end": 2592,
          "name": "glo_C8_public",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 2618,
          "end": 2621,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 2604,
            "end": 2617,
            "expression": {
              "type": "Identifier",
              "start": 2604,
              "end": 2617,
              "name": "glo_i_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 2623,
      "end": 2707,
      "id": {
        "type": "Identifier",
        "start": 2629,
        "end": 2643,
        "name": "glo_C9_private",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 2652,
        "end": 2664,
        "name": "glo_c_public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 2704,
        "end": 2707,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 2676,
          "end": 2689,
          "expression": {
            "type": "Identifier",
            "start": 2676,
            "end": 2689,
            "name": "glo_i_private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "glo_i_public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 2708,
      "end": 2795,
      "id": {
        "type": "Identifier",
        "start": 2714,
        "end": 2729,
        "name": "glo_C10_private",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 2738,
        "end": 2751,
        "name": "glo_c_private",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 2792,
        "end": 2795,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 2764,
          "end": 2777,
          "expression": {
            "type": "Identifier",
            "start": 2764,
            "end": 2777,
            "name": "glo_i_private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "glo_i_public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2796,
      "end": 2888,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 2803,
        "end": 2888,
        "id": {
          "type": "Identifier",
          "start": 2809,
          "end": 2823,
          "name": "glo_C11_public",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "Identifier",
          "start": 2832,
          "end": 2844,
          "name": "glo_c_public",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 2885,
          "end": 2888,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 2857,
            "end": 2870,
            "expression": {
              "type": "Identifier",
              "start": 2857,
              "end": 2870,
              "name": "glo_i_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "glo_i_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2889,
      "end": 2982,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 2896,
        "end": 2982,
        "id": {
          "type": "Identifier",
          "start": 2902,
          "end": 2916,
          "name": "glo_C12_public",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "Identifier",
          "start": 2925,
          "end": 2938,
          "name": "glo_c_private",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 2979,
          "end": 2982,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 2951,
            "end": 2964,
            "expression": {
              "type": "Identifier",
              "start": 2951,
              "end": 2964,
              "name": "glo_i_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "glo_i_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
