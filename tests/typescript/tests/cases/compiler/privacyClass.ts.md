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
          "start": 17,
          "end": 19
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
                  "start": 43,
                  "end": 54
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [],
                  "start": 55,
                  "end": 62
                },
                "declare": false,
                "start": 33,
                "end": 62
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 26,
              "end": 62
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_i_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 78,
                "end": 90
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 91,
                "end": 98
              },
              "declare": false,
              "start": 68,
              "end": 98
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
                  "start": 117,
                  "end": 128
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
                        "start": 147,
                        "end": 149
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
                          "start": 152,
                          "end": 163
                        },
                        "expression": false,
                        "start": 149,
                        "end": 163
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 139,
                      "end": 163
                    }
                  ],
                  "start": 129,
                  "end": 169
                },
                "abstract": false,
                "declare": false,
                "start": 111,
                "end": 169
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 104,
              "end": 169
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
                "start": 181,
                "end": 193
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 194,
                "end": 201
              },
              "abstract": false,
              "declare": false,
              "start": 175,
              "end": 201
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
                "start": 213,
                "end": 226
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_c_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 235,
                "end": 246
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 247,
                "end": 254
              },
              "abstract": false,
              "declare": false,
              "start": 207,
              "end": 254
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
                "start": 265,
                "end": 278
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 287,
                "end": 299
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 300,
                "end": 307
              },
              "abstract": false,
              "declare": false,
              "start": 259,
              "end": 307
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
                  "start": 325,
                  "end": 337
                },
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_c_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 346,
                  "end": 357
                },
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 358,
                  "end": 365
                },
                "abstract": false,
                "declare": false,
                "start": 319,
                "end": 365
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 312,
              "end": 365
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
                  "start": 383,
                  "end": 395
                },
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_c_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 404,
                  "end": 416
                },
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 417,
                  "end": 424
                },
                "abstract": false,
                "declare": false,
                "start": 377,
                "end": 424
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 370,
              "end": 424
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
                "start": 436,
                "end": 449
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
                    "start": 461,
                    "end": 472
                  },
                  "typeArguments": null,
                  "start": 461,
                  "end": 472
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 473,
                "end": 480
              },
              "abstract": false,
              "declare": false,
              "start": 430,
              "end": 480
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
                "start": 491,
                "end": 504
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
                    "start": 516,
                    "end": 528
                  },
                  "typeArguments": null,
                  "start": 516,
                  "end": 528
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 529,
                "end": 536
              },
              "abstract": false,
              "declare": false,
              "start": 485,
              "end": 536
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
                  "start": 554,
                  "end": 566
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
                      "start": 578,
                      "end": 589
                    },
                    "typeArguments": null,
                    "start": 578,
                    "end": 589
                  }
                ],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 590,
                  "end": 597
                },
                "abstract": false,
                "declare": false,
                "start": 548,
                "end": 597
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 541,
              "end": 597
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
                  "start": 615,
                  "end": 627
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
                      "start": 639,
                      "end": 651
                    },
                    "typeArguments": null,
                    "start": 639,
                    "end": 651
                  }
                ],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 652,
                  "end": 659
                },
                "abstract": false,
                "declare": false,
                "start": 609,
                "end": 659
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 602,
              "end": 659
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
                "start": 671,
                "end": 684
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_c_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 693,
                "end": 704
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
                    "start": 716,
                    "end": 728
                  },
                  "typeArguments": null,
                  "start": 716,
                  "end": 728
                },
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_i_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 730,
                    "end": 741
                  },
                  "typeArguments": null,
                  "start": 730,
                  "end": 741
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 742,
                "end": 749
              },
              "abstract": false,
              "declare": false,
              "start": 665,
              "end": 749
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
                "start": 760,
                "end": 774
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 783,
                "end": 795
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
                    "start": 808,
                    "end": 820
                  },
                  "typeArguments": null,
                  "start": 808,
                  "end": 820
                },
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_i_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 822,
                    "end": 833
                  },
                  "typeArguments": null,
                  "start": 822,
                  "end": 833
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 834,
                "end": 841
              },
              "abstract": false,
              "declare": false,
              "start": 754,
              "end": 841
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
                  "start": 859,
                  "end": 872
                },
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_c_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 881,
                  "end": 892
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
                      "start": 905,
                      "end": 917
                    },
                    "typeArguments": null,
                    "start": 905,
                    "end": 917
                  },
                  {
                    "type": "TSClassImplements",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_i_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 919,
                      "end": 930
                    },
                    "typeArguments": null,
                    "start": 919,
                    "end": 930
                  }
                ],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 931,
                  "end": 938
                },
                "abstract": false,
                "declare": false,
                "start": 853,
                "end": 938
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 846,
              "end": 938
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
                  "start": 956,
                  "end": 969
                },
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_c_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 978,
                  "end": 990
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
                      "start": 1003,
                      "end": 1015
                    },
                    "typeArguments": null,
                    "start": 1003,
                    "end": 1015
                  },
                  {
                    "type": "TSClassImplements",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_i_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1017,
                      "end": 1028
                    },
                    "typeArguments": null,
                    "start": 1017,
                    "end": 1028
                  }
                ],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 1029,
                  "end": 1036
                },
                "abstract": false,
                "declare": false,
                "start": 950,
                "end": 1036
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 943,
              "end": 1036
            }
          ],
          "start": 20,
          "end": 1038
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 1038
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 1038
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1051,
        "end": 1053
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
                "start": 1077,
                "end": 1088
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 1089,
                "end": 1096
              },
              "declare": false,
              "start": 1067,
              "end": 1096
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1060,
            "end": 1096
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_i_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1112,
              "end": 1124
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 1125,
              "end": 1132
            },
            "declare": false,
            "start": 1102,
            "end": 1132
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
                "start": 1151,
                "end": 1162
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
                      "start": 1181,
                      "end": 1183
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
                        "start": 1186,
                        "end": 1197
                      },
                      "expression": false,
                      "start": 1183,
                      "end": 1197
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1173,
                    "end": 1197
                  }
                ],
                "start": 1163,
                "end": 1203
              },
              "abstract": false,
              "declare": false,
              "start": 1145,
              "end": 1203
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1138,
            "end": 1203
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
              "start": 1215,
              "end": 1227
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1228,
              "end": 1235
            },
            "abstract": false,
            "declare": false,
            "start": 1209,
            "end": 1235
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
              "start": 1247,
              "end": 1260
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_c_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 1269,
              "end": 1280
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1281,
              "end": 1288
            },
            "abstract": false,
            "declare": false,
            "start": 1241,
            "end": 1288
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
              "start": 1299,
              "end": 1312
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_c_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1321,
              "end": 1333
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1334,
              "end": 1341
            },
            "abstract": false,
            "declare": false,
            "start": 1293,
            "end": 1341
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
                "start": 1359,
                "end": 1371
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_c_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 1380,
                "end": 1391
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 1392,
                "end": 1399
              },
              "abstract": false,
              "declare": false,
              "start": 1353,
              "end": 1399
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1346,
            "end": 1399
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
                "start": 1417,
                "end": 1429
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1438,
                "end": 1450
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 1451,
                "end": 1458
              },
              "abstract": false,
              "declare": false,
              "start": 1411,
              "end": 1458
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1404,
            "end": 1458
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
              "start": 1470,
              "end": 1483
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
                  "start": 1495,
                  "end": 1506
                },
                "typeArguments": null,
                "start": 1495,
                "end": 1506
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1507,
              "end": 1514
            },
            "abstract": false,
            "declare": false,
            "start": 1464,
            "end": 1514
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
              "start": 1525,
              "end": 1538
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
                  "start": 1550,
                  "end": 1562
                },
                "typeArguments": null,
                "start": 1550,
                "end": 1562
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1563,
              "end": 1570
            },
            "abstract": false,
            "declare": false,
            "start": 1519,
            "end": 1570
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
                "start": 1588,
                "end": 1600
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
                    "start": 1612,
                    "end": 1623
                  },
                  "typeArguments": null,
                  "start": 1612,
                  "end": 1623
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 1624,
                "end": 1631
              },
              "abstract": false,
              "declare": false,
              "start": 1582,
              "end": 1631
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1575,
            "end": 1631
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
                "start": 1649,
                "end": 1661
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
                    "start": 1673,
                    "end": 1685
                  },
                  "typeArguments": null,
                  "start": 1673,
                  "end": 1685
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 1686,
                "end": 1693
              },
              "abstract": false,
              "declare": false,
              "start": 1643,
              "end": 1693
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1636,
            "end": 1693
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
              "start": 1705,
              "end": 1718
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_c_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 1727,
              "end": 1738
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
                  "start": 1750,
                  "end": 1762
                },
                "typeArguments": null,
                "start": 1750,
                "end": 1762
              },
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m2_i_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1764,
                  "end": 1775
                },
                "typeArguments": null,
                "start": 1764,
                "end": 1775
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1776,
              "end": 1783
            },
            "abstract": false,
            "declare": false,
            "start": 1699,
            "end": 1783
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
              "start": 1794,
              "end": 1808
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_c_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1817,
              "end": 1829
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
                  "start": 1842,
                  "end": 1854
                },
                "typeArguments": null,
                "start": 1842,
                "end": 1854
              },
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m2_i_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1856,
                  "end": 1867
                },
                "typeArguments": null,
                "start": 1856,
                "end": 1867
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1868,
              "end": 1875
            },
            "abstract": false,
            "declare": false,
            "start": 1788,
            "end": 1875
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
                "start": 1893,
                "end": 1906
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_c_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 1915,
                "end": 1926
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
                    "start": 1939,
                    "end": 1951
                  },
                  "typeArguments": null,
                  "start": 1939,
                  "end": 1951
                },
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2_i_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1953,
                    "end": 1964
                  },
                  "typeArguments": null,
                  "start": 1953,
                  "end": 1964
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 1965,
                "end": 1972
              },
              "abstract": false,
              "declare": false,
              "start": 1887,
              "end": 1972
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1880,
            "end": 1972
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
                "start": 1990,
                "end": 2003
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 2012,
                "end": 2024
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
                    "start": 2037,
                    "end": 2049
                  },
                  "typeArguments": null,
                  "start": 2037,
                  "end": 2049
                },
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2_i_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2051,
                    "end": 2062
                  },
                  "typeArguments": null,
                  "start": 2051,
                  "end": 2062
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 2063,
                "end": 2070
              },
              "abstract": false,
              "declare": false,
              "start": 1984,
              "end": 2070
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1977,
            "end": 2070
          }
        ],
        "start": 1054,
        "end": 2072
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1041,
      "end": 2072
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
          "start": 2091,
          "end": 2103
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 2104,
          "end": 2107
        },
        "declare": false,
        "start": 2081,
        "end": 2107
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2074,
      "end": 2107
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_i_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 2119,
        "end": 2132
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 2133,
        "end": 2136
      },
      "declare": false,
      "start": 2109,
      "end": 2136
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
          "start": 2151,
          "end": 2163
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
                "start": 2178,
                "end": 2180
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
                  "start": 2183,
                  "end": 2190
                },
                "expression": false,
                "start": 2180,
                "end": 2190
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 2170,
              "end": 2190
            }
          ],
          "start": 2164,
          "end": 2192
        },
        "abstract": false,
        "declare": false,
        "start": 2145,
        "end": 2192
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2138,
      "end": 2192
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
        "start": 2200,
        "end": 2213
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 2214,
        "end": 2217
      },
      "abstract": false,
      "declare": false,
      "start": 2194,
      "end": 2217
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
        "start": 2225,
        "end": 2239
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_c_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 2248,
        "end": 2260
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 2261,
        "end": 2264
      },
      "abstract": false,
      "declare": false,
      "start": 2219,
      "end": 2264
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
        "start": 2271,
        "end": 2285
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_c_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 2294,
        "end": 2307
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 2308,
        "end": 2311
      },
      "abstract": false,
      "declare": false,
      "start": 2265,
      "end": 2311
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
          "start": 2325,
          "end": 2338
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_c_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2347,
          "end": 2359
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 2360,
          "end": 2363
        },
        "abstract": false,
        "declare": false,
        "start": 2319,
        "end": 2363
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2312,
      "end": 2363
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
          "start": 2377,
          "end": 2390
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_c_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 2399,
          "end": 2412
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 2413,
          "end": 2416
        },
        "abstract": false,
        "declare": false,
        "start": 2371,
        "end": 2416
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2364,
      "end": 2416
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
        "start": 2424,
        "end": 2438
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
            "start": 2450,
            "end": 2462
          },
          "typeArguments": null,
          "start": 2450,
          "end": 2462
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 2463,
        "end": 2466
      },
      "abstract": false,
      "declare": false,
      "start": 2418,
      "end": 2466
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
        "start": 2473,
        "end": 2487
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
            "start": 2499,
            "end": 2512
          },
          "typeArguments": null,
          "start": 2499,
          "end": 2512
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 2513,
        "end": 2516
      },
      "abstract": false,
      "declare": false,
      "start": 2467,
      "end": 2516
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
          "start": 2530,
          "end": 2543
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
              "start": 2555,
              "end": 2567
            },
            "typeArguments": null,
            "start": 2555,
            "end": 2567
          }
        ],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 2568,
          "end": 2571
        },
        "abstract": false,
        "declare": false,
        "start": 2524,
        "end": 2571
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2517,
      "end": 2571
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
          "start": 2585,
          "end": 2598
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
              "start": 2610,
              "end": 2623
            },
            "typeArguments": null,
            "start": 2610,
            "end": 2623
          }
        ],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 2624,
          "end": 2627
        },
        "abstract": false,
        "declare": false,
        "start": 2579,
        "end": 2627
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2572,
      "end": 2627
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
        "start": 2635,
        "end": 2649
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_c_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 2658,
        "end": 2670
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
            "start": 2682,
            "end": 2695
          },
          "typeArguments": null,
          "start": 2682,
          "end": 2695
        },
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "glo_i_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2697,
            "end": 2709
          },
          "typeArguments": null,
          "start": 2697,
          "end": 2709
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 2710,
        "end": 2713
      },
      "abstract": false,
      "declare": false,
      "start": 2629,
      "end": 2713
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
        "start": 2720,
        "end": 2735
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_c_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 2744,
        "end": 2757
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
            "start": 2770,
            "end": 2783
          },
          "typeArguments": null,
          "start": 2770,
          "end": 2783
        },
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "glo_i_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2785,
            "end": 2797
          },
          "typeArguments": null,
          "start": 2785,
          "end": 2797
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 2798,
        "end": 2801
      },
      "abstract": false,
      "declare": false,
      "start": 2714,
      "end": 2801
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
          "start": 2815,
          "end": 2829
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_c_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2838,
          "end": 2850
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
              "start": 2863,
              "end": 2876
            },
            "typeArguments": null,
            "start": 2863,
            "end": 2876
          },
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_i_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2878,
              "end": 2890
            },
            "typeArguments": null,
            "start": 2878,
            "end": 2890
          }
        ],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 2891,
          "end": 2894
        },
        "abstract": false,
        "declare": false,
        "start": 2809,
        "end": 2894
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2802,
      "end": 2894
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
          "start": 2908,
          "end": 2922
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_c_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 2931,
          "end": 2944
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
              "start": 2957,
              "end": 2970
            },
            "typeArguments": null,
            "start": 2957,
            "end": 2970
          },
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_i_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2972,
              "end": 2984
            },
            "typeArguments": null,
            "start": 2972,
            "end": 2984
          }
        ],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 2985,
          "end": 2988
        },
        "abstract": false,
        "declare": false,
        "start": 2902,
        "end": 2988
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2895,
      "end": 2988
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 2988
}
```
