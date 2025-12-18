__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 7,
    "end": 16,
    "range": [
      7,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 17,
    "end": 19,
    "range": [
      17,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 26,
    "end": 32,
    "range": [
      26,
      32
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 33,
    "end": 42,
    "range": [
      33,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_i_public",
    "start": 43,
    "end": 54,
    "range": [
      43,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 68,
    "end": 77,
    "range": [
      68,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_i_private",
    "start": 78,
    "end": 90,
    "range": [
      78,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 104,
    "end": 110,
    "range": [
      104,
      110
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 111,
    "end": 116,
    "range": [
      111,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c_public",
    "start": 117,
    "end": 128,
    "range": [
      117,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 139,
    "end": 146,
    "range": [
      139,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 147,
    "end": 149,
    "range": [
      147,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 175,
    "end": 180,
    "range": [
      175,
      180
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c_private",
    "start": 181,
    "end": 193,
    "range": [
      181,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 207,
    "end": 212,
    "range": [
      207,
      212
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_C1_private",
    "start": 213,
    "end": 226,
    "range": [
      213,
      226
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 227,
    "end": 234,
    "range": [
      227,
      234
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c_public",
    "start": 235,
    "end": 246,
    "range": [
      235,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 259,
    "end": 264,
    "range": [
      259,
      264
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_C2_private",
    "start": 265,
    "end": 278,
    "range": [
      265,
      278
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 279,
    "end": 286,
    "range": [
      279,
      286
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c_private",
    "start": 287,
    "end": 299,
    "range": [
      287,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 312,
    "end": 318,
    "range": [
      312,
      318
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 319,
    "end": 324,
    "range": [
      319,
      324
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_C3_public",
    "start": 325,
    "end": 337,
    "range": [
      325,
      337
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 338,
    "end": 345,
    "range": [
      338,
      345
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c_public",
    "start": 346,
    "end": 357,
    "range": [
      346,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 370,
    "end": 376,
    "range": [
      370,
      376
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 377,
    "end": 382,
    "range": [
      377,
      382
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_C4_public",
    "start": 383,
    "end": 395,
    "range": [
      383,
      395
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 396,
    "end": 403,
    "range": [
      396,
      403
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c_private",
    "start": 404,
    "end": 416,
    "range": [
      404,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 430,
    "end": 435,
    "range": [
      430,
      435
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_C5_private",
    "start": 436,
    "end": 449,
    "range": [
      436,
      449
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 450,
    "end": 460,
    "range": [
      450,
      460
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_i_public",
    "start": 461,
    "end": 472,
    "range": [
      461,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 485,
    "end": 490,
    "range": [
      485,
      490
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_C6_private",
    "start": 491,
    "end": 504,
    "range": [
      491,
      504
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 505,
    "end": 515,
    "range": [
      505,
      515
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_i_private",
    "start": 516,
    "end": 528,
    "range": [
      516,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 541,
    "end": 547,
    "range": [
      541,
      547
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 548,
    "end": 553,
    "range": [
      548,
      553
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_C7_public",
    "start": 554,
    "end": 566,
    "range": [
      554,
      566
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 567,
    "end": 577,
    "range": [
      567,
      577
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_i_public",
    "start": 578,
    "end": 589,
    "range": [
      578,
      589
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 590,
    "end": 591,
    "range": [
      590,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 602,
    "end": 608,
    "range": [
      602,
      608
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 609,
    "end": 614,
    "range": [
      609,
      614
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_C8_public",
    "start": 615,
    "end": 627,
    "range": [
      615,
      627
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 628,
    "end": 638,
    "range": [
      628,
      638
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_i_private",
    "start": 639,
    "end": 651,
    "range": [
      639,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 665,
    "end": 670,
    "range": [
      665,
      670
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_C9_private",
    "start": 671,
    "end": 684,
    "range": [
      671,
      684
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 685,
    "end": 692,
    "range": [
      685,
      692
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c_public",
    "start": 693,
    "end": 704,
    "range": [
      693,
      704
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 705,
    "end": 715,
    "range": [
      705,
      715
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_i_private",
    "start": 716,
    "end": 728,
    "range": [
      716,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_i_public",
    "start": 730,
    "end": 741,
    "range": [
      730,
      741
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 742,
    "end": 743,
    "range": [
      742,
      743
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 754,
    "end": 759,
    "range": [
      754,
      759
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_C10_private",
    "start": 760,
    "end": 774,
    "range": [
      760,
      774
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 775,
    "end": 782,
    "range": [
      775,
      782
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c_private",
    "start": 783,
    "end": 795,
    "range": [
      783,
      795
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 796,
    "end": 806,
    "range": [
      796,
      806
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_i_private",
    "start": 808,
    "end": 820,
    "range": [
      808,
      820
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 820,
    "end": 821,
    "range": [
      820,
      821
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_i_public",
    "start": 822,
    "end": 833,
    "range": [
      822,
      833
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 834,
    "end": 835,
    "range": [
      834,
      835
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "start": 846,
    "end": 852,
    "range": [
      846,
      852
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 853,
    "end": 858,
    "range": [
      853,
      858
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_C11_public",
    "start": 859,
    "end": 872,
    "range": [
      859,
      872
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 873,
    "end": 880,
    "range": [
      873,
      880
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c_public",
    "start": 881,
    "end": 892,
    "range": [
      881,
      892
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 893,
    "end": 903,
    "range": [
      893,
      903
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_i_private",
    "start": 905,
    "end": 917,
    "range": [
      905,
      917
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 917,
    "end": 918,
    "range": [
      917,
      918
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_i_public",
    "start": 919,
    "end": 930,
    "range": [
      919,
      930
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 931,
    "end": 932,
    "range": [
      931,
      932
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 937,
    "end": 938,
    "range": [
      937,
      938
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 943,
    "end": 949,
    "range": [
      943,
      949
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 950,
    "end": 955,
    "range": [
      950,
      955
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_C12_public",
    "start": 956,
    "end": 969,
    "range": [
      956,
      969
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 970,
    "end": 977,
    "range": [
      970,
      977
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c_private",
    "start": 978,
    "end": 990,
    "range": [
      978,
      990
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 991,
    "end": 1001,
    "range": [
      991,
      1001
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_i_private",
    "start": 1003,
    "end": 1015,
    "range": [
      1003,
      1015
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1015,
    "end": 1016,
    "range": [
      1015,
      1016
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_i_public",
    "start": 1017,
    "end": 1028,
    "range": [
      1017,
      1028
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1035,
    "end": 1036,
    "range": [
      1035,
      1036
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1037,
    "end": 1038,
    "range": [
      1037,
      1038
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1041,
    "end": 1050,
    "range": [
      1041,
      1050
    ]
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 1051,
    "end": 1053,
    "range": [
      1051,
      1053
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1054,
    "end": 1055,
    "range": [
      1054,
      1055
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1060,
    "end": 1066,
    "range": [
      1060,
      1066
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1067,
    "end": 1076,
    "range": [
      1067,
      1076
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_i_public",
    "start": 1077,
    "end": 1088,
    "range": [
      1077,
      1088
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1089,
    "end": 1090,
    "range": [
      1089,
      1090
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1095,
    "end": 1096,
    "range": [
      1095,
      1096
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1102,
    "end": 1111,
    "range": [
      1102,
      1111
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_i_private",
    "start": 1112,
    "end": 1124,
    "range": [
      1112,
      1124
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1125,
    "end": 1126,
    "range": [
      1125,
      1126
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1131,
    "end": 1132,
    "range": [
      1131,
      1132
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1138,
    "end": 1144,
    "range": [
      1138,
      1144
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1145,
    "end": 1150,
    "range": [
      1145,
      1150
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_c_public",
    "start": 1151,
    "end": 1162,
    "range": [
      1151,
      1162
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1163,
    "end": 1164,
    "range": [
      1163,
      1164
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1173,
    "end": 1180,
    "range": [
      1173,
      1180
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1181,
    "end": 1183,
    "range": [
      1181,
      1183
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1183,
    "end": 1184,
    "range": [
      1183,
      1184
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1184,
    "end": 1185,
    "range": [
      1184,
      1185
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1186,
    "end": 1187,
    "range": [
      1186,
      1187
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1196,
    "end": 1197,
    "range": [
      1196,
      1197
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1202,
    "end": 1203,
    "range": [
      1202,
      1203
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1209,
    "end": 1214,
    "range": [
      1209,
      1214
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_c_private",
    "start": 1215,
    "end": 1227,
    "range": [
      1215,
      1227
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1228,
    "end": 1229,
    "range": [
      1228,
      1229
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1234,
    "end": 1235,
    "range": [
      1234,
      1235
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1241,
    "end": 1246,
    "range": [
      1241,
      1246
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_private",
    "start": 1247,
    "end": 1260,
    "range": [
      1247,
      1260
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1261,
    "end": 1268,
    "range": [
      1261,
      1268
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_c_public",
    "start": 1269,
    "end": 1280,
    "range": [
      1269,
      1280
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1281,
    "end": 1282,
    "range": [
      1281,
      1282
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1287,
    "end": 1288,
    "range": [
      1287,
      1288
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1293,
    "end": 1298,
    "range": [
      1293,
      1298
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 1299,
    "end": 1312,
    "range": [
      1299,
      1312
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1313,
    "end": 1320,
    "range": [
      1313,
      1320
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_c_private",
    "start": 1321,
    "end": 1333,
    "range": [
      1321,
      1333
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1334,
    "end": 1335,
    "range": [
      1334,
      1335
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1340,
    "end": 1341,
    "range": [
      1340,
      1341
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1346,
    "end": 1352,
    "range": [
      1346,
      1352
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1353,
    "end": 1358,
    "range": [
      1353,
      1358
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C3_public",
    "start": 1359,
    "end": 1371,
    "range": [
      1359,
      1371
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1372,
    "end": 1379,
    "range": [
      1372,
      1379
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_c_public",
    "start": 1380,
    "end": 1391,
    "range": [
      1380,
      1391
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1392,
    "end": 1393,
    "range": [
      1392,
      1393
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1398,
    "end": 1399,
    "range": [
      1398,
      1399
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1404,
    "end": 1410,
    "range": [
      1404,
      1410
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1411,
    "end": 1416,
    "range": [
      1411,
      1416
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C4_public",
    "start": 1417,
    "end": 1429,
    "range": [
      1417,
      1429
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1430,
    "end": 1437,
    "range": [
      1430,
      1437
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_c_private",
    "start": 1438,
    "end": 1450,
    "range": [
      1438,
      1450
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1451,
    "end": 1452,
    "range": [
      1451,
      1452
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1457,
    "end": 1458,
    "range": [
      1457,
      1458
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1464,
    "end": 1469,
    "range": [
      1464,
      1469
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C5_private",
    "start": 1470,
    "end": 1483,
    "range": [
      1470,
      1483
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 1484,
    "end": 1494,
    "range": [
      1484,
      1494
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_i_public",
    "start": 1495,
    "end": 1506,
    "range": [
      1495,
      1506
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1507,
    "end": 1508,
    "range": [
      1507,
      1508
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1513,
    "end": 1514,
    "range": [
      1513,
      1514
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1519,
    "end": 1524,
    "range": [
      1519,
      1524
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C6_private",
    "start": 1525,
    "end": 1538,
    "range": [
      1525,
      1538
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 1539,
    "end": 1549,
    "range": [
      1539,
      1549
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_i_private",
    "start": 1550,
    "end": 1562,
    "range": [
      1550,
      1562
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1563,
    "end": 1564,
    "range": [
      1563,
      1564
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1569,
    "end": 1570,
    "range": [
      1569,
      1570
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1575,
    "end": 1581,
    "range": [
      1575,
      1581
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1582,
    "end": 1587,
    "range": [
      1582,
      1587
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C7_public",
    "start": 1588,
    "end": 1600,
    "range": [
      1588,
      1600
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 1601,
    "end": 1611,
    "range": [
      1601,
      1611
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_i_public",
    "start": 1612,
    "end": 1623,
    "range": [
      1612,
      1623
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1624,
    "end": 1625,
    "range": [
      1624,
      1625
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1630,
    "end": 1631,
    "range": [
      1630,
      1631
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1636,
    "end": 1642,
    "range": [
      1636,
      1642
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1643,
    "end": 1648,
    "range": [
      1643,
      1648
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C8_public",
    "start": 1649,
    "end": 1661,
    "range": [
      1649,
      1661
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 1662,
    "end": 1672,
    "range": [
      1662,
      1672
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_i_private",
    "start": 1673,
    "end": 1685,
    "range": [
      1673,
      1685
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1686,
    "end": 1687,
    "range": [
      1686,
      1687
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1692,
    "end": 1693,
    "range": [
      1692,
      1693
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1699,
    "end": 1704,
    "range": [
      1699,
      1704
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C9_private",
    "start": 1705,
    "end": 1718,
    "range": [
      1705,
      1718
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1719,
    "end": 1726,
    "range": [
      1719,
      1726
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_c_public",
    "start": 1727,
    "end": 1738,
    "range": [
      1727,
      1738
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 1739,
    "end": 1749,
    "range": [
      1739,
      1749
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_i_private",
    "start": 1750,
    "end": 1762,
    "range": [
      1750,
      1762
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1762,
    "end": 1763,
    "range": [
      1762,
      1763
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_i_public",
    "start": 1764,
    "end": 1775,
    "range": [
      1764,
      1775
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1776,
    "end": 1777,
    "range": [
      1776,
      1777
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1782,
    "end": 1783,
    "range": [
      1782,
      1783
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1788,
    "end": 1793,
    "range": [
      1788,
      1793
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C10_private",
    "start": 1794,
    "end": 1808,
    "range": [
      1794,
      1808
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1809,
    "end": 1816,
    "range": [
      1809,
      1816
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_c_private",
    "start": 1817,
    "end": 1829,
    "range": [
      1817,
      1829
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 1830,
    "end": 1840,
    "range": [
      1830,
      1840
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_i_private",
    "start": 1842,
    "end": 1854,
    "range": [
      1842,
      1854
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1854,
    "end": 1855,
    "range": [
      1854,
      1855
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_i_public",
    "start": 1856,
    "end": 1867,
    "range": [
      1856,
      1867
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1868,
    "end": 1869,
    "range": [
      1868,
      1869
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1874,
    "end": 1875,
    "range": [
      1874,
      1875
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1880,
    "end": 1886,
    "range": [
      1880,
      1886
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1887,
    "end": 1892,
    "range": [
      1887,
      1892
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C11_public",
    "start": 1893,
    "end": 1906,
    "range": [
      1893,
      1906
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1907,
    "end": 1914,
    "range": [
      1907,
      1914
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_c_public",
    "start": 1915,
    "end": 1926,
    "range": [
      1915,
      1926
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 1927,
    "end": 1937,
    "range": [
      1927,
      1937
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_i_private",
    "start": 1939,
    "end": 1951,
    "range": [
      1939,
      1951
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1951,
    "end": 1952,
    "range": [
      1951,
      1952
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_i_public",
    "start": 1953,
    "end": 1964,
    "range": [
      1953,
      1964
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1965,
    "end": 1966,
    "range": [
      1965,
      1966
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1971,
    "end": 1972,
    "range": [
      1971,
      1972
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1977,
    "end": 1983,
    "range": [
      1977,
      1983
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1984,
    "end": 1989,
    "range": [
      1984,
      1989
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C12_public",
    "start": 1990,
    "end": 2003,
    "range": [
      1990,
      2003
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2004,
    "end": 2011,
    "range": [
      2004,
      2011
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_c_private",
    "start": 2012,
    "end": 2024,
    "range": [
      2012,
      2024
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 2025,
    "end": 2035,
    "range": [
      2025,
      2035
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_i_private",
    "start": 2037,
    "end": 2049,
    "range": [
      2037,
      2049
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2049,
    "end": 2050,
    "range": [
      2049,
      2050
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_i_public",
    "start": 2051,
    "end": 2062,
    "range": [
      2051,
      2062
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2063,
    "end": 2064,
    "range": [
      2063,
      2064
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2069,
    "end": 2070,
    "range": [
      2069,
      2070
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2071,
    "end": 2072,
    "range": [
      2071,
      2072
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2074,
    "end": 2080,
    "range": [
      2074,
      2080
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2081,
    "end": 2090,
    "range": [
      2081,
      2090
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_i_public",
    "start": 2091,
    "end": 2103,
    "range": [
      2091,
      2103
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2104,
    "end": 2105,
    "range": [
      2104,
      2105
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2106,
    "end": 2107,
    "range": [
      2106,
      2107
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2109,
    "end": 2118,
    "range": [
      2109,
      2118
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_i_private",
    "start": 2119,
    "end": 2132,
    "range": [
      2119,
      2132
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2133,
    "end": 2134,
    "range": [
      2133,
      2134
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2135,
    "end": 2136,
    "range": [
      2135,
      2136
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2138,
    "end": 2144,
    "range": [
      2138,
      2144
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2145,
    "end": 2150,
    "range": [
      2145,
      2150
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_c_public",
    "start": 2151,
    "end": 2163,
    "range": [
      2151,
      2163
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2164,
    "end": 2165,
    "range": [
      2164,
      2165
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2170,
    "end": 2177,
    "range": [
      2170,
      2177
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 2178,
    "end": 2180,
    "range": [
      2178,
      2180
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2180,
    "end": 2181,
    "range": [
      2180,
      2181
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2181,
    "end": 2182,
    "range": [
      2181,
      2182
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2183,
    "end": 2184,
    "range": [
      2183,
      2184
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2189,
    "end": 2190,
    "range": [
      2189,
      2190
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2191,
    "end": 2192,
    "range": [
      2191,
      2192
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2194,
    "end": 2199,
    "range": [
      2194,
      2199
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_c_private",
    "start": 2200,
    "end": 2213,
    "range": [
      2200,
      2213
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2214,
    "end": 2215,
    "range": [
      2214,
      2215
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2216,
    "end": 2217,
    "range": [
      2216,
      2217
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2219,
    "end": 2224,
    "range": [
      2219,
      2224
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C1_private",
    "start": 2225,
    "end": 2239,
    "range": [
      2225,
      2239
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2240,
    "end": 2247,
    "range": [
      2240,
      2247
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_c_public",
    "start": 2248,
    "end": 2260,
    "range": [
      2248,
      2260
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2261,
    "end": 2262,
    "range": [
      2261,
      2262
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2263,
    "end": 2264,
    "range": [
      2263,
      2264
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2265,
    "end": 2270,
    "range": [
      2265,
      2270
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C2_private",
    "start": 2271,
    "end": 2285,
    "range": [
      2271,
      2285
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2286,
    "end": 2293,
    "range": [
      2286,
      2293
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_c_private",
    "start": 2294,
    "end": 2307,
    "range": [
      2294,
      2307
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2308,
    "end": 2309,
    "range": [
      2308,
      2309
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2310,
    "end": 2311,
    "range": [
      2310,
      2311
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2312,
    "end": 2318,
    "range": [
      2312,
      2318
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2319,
    "end": 2324,
    "range": [
      2319,
      2324
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C3_public",
    "start": 2325,
    "end": 2338,
    "range": [
      2325,
      2338
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2339,
    "end": 2346,
    "range": [
      2339,
      2346
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_c_public",
    "start": 2347,
    "end": 2359,
    "range": [
      2347,
      2359
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2360,
    "end": 2361,
    "range": [
      2360,
      2361
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2362,
    "end": 2363,
    "range": [
      2362,
      2363
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2364,
    "end": 2370,
    "range": [
      2364,
      2370
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2371,
    "end": 2376,
    "range": [
      2371,
      2376
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C4_public",
    "start": 2377,
    "end": 2390,
    "range": [
      2377,
      2390
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2391,
    "end": 2398,
    "range": [
      2391,
      2398
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_c_private",
    "start": 2399,
    "end": 2412,
    "range": [
      2399,
      2412
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2413,
    "end": 2414,
    "range": [
      2413,
      2414
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2415,
    "end": 2416,
    "range": [
      2415,
      2416
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2418,
    "end": 2423,
    "range": [
      2418,
      2423
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C5_private",
    "start": 2424,
    "end": 2438,
    "range": [
      2424,
      2438
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 2439,
    "end": 2449,
    "range": [
      2439,
      2449
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_i_public",
    "start": 2450,
    "end": 2462,
    "range": [
      2450,
      2462
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2463,
    "end": 2464,
    "range": [
      2463,
      2464
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2465,
    "end": 2466,
    "range": [
      2465,
      2466
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2467,
    "end": 2472,
    "range": [
      2467,
      2472
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C6_private",
    "start": 2473,
    "end": 2487,
    "range": [
      2473,
      2487
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 2488,
    "end": 2498,
    "range": [
      2488,
      2498
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_i_private",
    "start": 2499,
    "end": 2512,
    "range": [
      2499,
      2512
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2513,
    "end": 2514,
    "range": [
      2513,
      2514
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2515,
    "end": 2516,
    "range": [
      2515,
      2516
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2517,
    "end": 2523,
    "range": [
      2517,
      2523
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2524,
    "end": 2529,
    "range": [
      2524,
      2529
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C7_public",
    "start": 2530,
    "end": 2543,
    "range": [
      2530,
      2543
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 2544,
    "end": 2554,
    "range": [
      2544,
      2554
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_i_public",
    "start": 2555,
    "end": 2567,
    "range": [
      2555,
      2567
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2568,
    "end": 2569,
    "range": [
      2568,
      2569
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2570,
    "end": 2571,
    "range": [
      2570,
      2571
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2572,
    "end": 2578,
    "range": [
      2572,
      2578
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2579,
    "end": 2584,
    "range": [
      2579,
      2584
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C8_public",
    "start": 2585,
    "end": 2598,
    "range": [
      2585,
      2598
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 2599,
    "end": 2609,
    "range": [
      2599,
      2609
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_i_private",
    "start": 2610,
    "end": 2623,
    "range": [
      2610,
      2623
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2624,
    "end": 2625,
    "range": [
      2624,
      2625
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2626,
    "end": 2627,
    "range": [
      2626,
      2627
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2629,
    "end": 2634,
    "range": [
      2629,
      2634
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C9_private",
    "start": 2635,
    "end": 2649,
    "range": [
      2635,
      2649
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2650,
    "end": 2657,
    "range": [
      2650,
      2657
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_c_public",
    "start": 2658,
    "end": 2670,
    "range": [
      2658,
      2670
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 2671,
    "end": 2681,
    "range": [
      2671,
      2681
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_i_private",
    "start": 2682,
    "end": 2695,
    "range": [
      2682,
      2695
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2695,
    "end": 2696,
    "range": [
      2695,
      2696
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_i_public",
    "start": 2697,
    "end": 2709,
    "range": [
      2697,
      2709
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2710,
    "end": 2711,
    "range": [
      2710,
      2711
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2712,
    "end": 2713,
    "range": [
      2712,
      2713
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2714,
    "end": 2719,
    "range": [
      2714,
      2719
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C10_private",
    "start": 2720,
    "end": 2735,
    "range": [
      2720,
      2735
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2736,
    "end": 2743,
    "range": [
      2736,
      2743
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_c_private",
    "start": 2744,
    "end": 2757,
    "range": [
      2744,
      2757
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 2758,
    "end": 2768,
    "range": [
      2758,
      2768
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_i_private",
    "start": 2770,
    "end": 2783,
    "range": [
      2770,
      2783
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2783,
    "end": 2784,
    "range": [
      2783,
      2784
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_i_public",
    "start": 2785,
    "end": 2797,
    "range": [
      2785,
      2797
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2798,
    "end": 2799,
    "range": [
      2798,
      2799
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2800,
    "end": 2801,
    "range": [
      2800,
      2801
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2802,
    "end": 2808,
    "range": [
      2802,
      2808
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2809,
    "end": 2814,
    "range": [
      2809,
      2814
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C11_public",
    "start": 2815,
    "end": 2829,
    "range": [
      2815,
      2829
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2830,
    "end": 2837,
    "range": [
      2830,
      2837
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_c_public",
    "start": 2838,
    "end": 2850,
    "range": [
      2838,
      2850
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 2851,
    "end": 2861,
    "range": [
      2851,
      2861
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_i_private",
    "start": 2863,
    "end": 2876,
    "range": [
      2863,
      2876
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2876,
    "end": 2877,
    "range": [
      2876,
      2877
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_i_public",
    "start": 2878,
    "end": 2890,
    "range": [
      2878,
      2890
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2891,
    "end": 2892,
    "range": [
      2891,
      2892
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2893,
    "end": 2894,
    "range": [
      2893,
      2894
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2895,
    "end": 2901,
    "range": [
      2895,
      2901
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2902,
    "end": 2907,
    "range": [
      2902,
      2907
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C12_public",
    "start": 2908,
    "end": 2922,
    "range": [
      2908,
      2922
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2923,
    "end": 2930,
    "range": [
      2923,
      2930
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_c_private",
    "start": 2931,
    "end": 2944,
    "range": [
      2931,
      2944
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 2945,
    "end": 2955,
    "range": [
      2945,
      2955
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_i_private",
    "start": 2957,
    "end": 2970,
    "range": [
      2957,
      2970
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2970,
    "end": 2971,
    "range": [
      2970,
      2971
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_i_public",
    "start": 2972,
    "end": 2984,
    "range": [
      2972,
      2984
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2985,
    "end": 2986,
    "range": [
      2985,
      2986
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2987,
    "end": 2988,
    "range": [
      2987,
      2988
    ]
  }
]
```
