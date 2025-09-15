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
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
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
                "start": 36,
                "end": 47
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 48,
                "end": 55
              },
              "declare": false,
              "start": 26,
              "end": 55
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 19,
            "end": 55
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_i_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 83
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 84,
              "end": 91
            },
            "declare": false,
            "start": 61,
            "end": 91
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
                "start": 110,
                "end": 121
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
                      "start": 140,
                      "end": 142
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
                        "start": 145,
                        "end": 156
                      },
                      "expression": false,
                      "start": 142,
                      "end": 156
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 132,
                    "end": 156
                  }
                ],
                "start": 122,
                "end": 162
              },
              "abstract": false,
              "declare": false,
              "start": 104,
              "end": 162
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 97,
            "end": 162
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
              "start": 174,
              "end": 186
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 187,
              "end": 194
            },
            "abstract": false,
            "declare": false,
            "start": 168,
            "end": 194
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
              "start": 206,
              "end": 219
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_c_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 228,
              "end": 239
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 240,
              "end": 247
            },
            "abstract": false,
            "declare": false,
            "start": 200,
            "end": 247
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
              "start": 258,
              "end": 271
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_c_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 280,
              "end": 292
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 293,
              "end": 300
            },
            "abstract": false,
            "declare": false,
            "start": 252,
            "end": 300
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
                "start": 318,
                "end": 330
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_c_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 339,
                "end": 350
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 351,
                "end": 358
              },
              "abstract": false,
              "declare": false,
              "start": 312,
              "end": 358
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 305,
            "end": 358
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
                "start": 376,
                "end": 388
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 397,
                "end": 409
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 410,
                "end": 417
              },
              "abstract": false,
              "declare": false,
              "start": 370,
              "end": 417
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 363,
            "end": 417
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
              "start": 429,
              "end": 442
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
                  "start": 454,
                  "end": 465
                },
                "typeArguments": null,
                "start": 454,
                "end": 465
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 466,
              "end": 473
            },
            "abstract": false,
            "declare": false,
            "start": 423,
            "end": 473
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
              "start": 484,
              "end": 497
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
                  "start": 509,
                  "end": 521
                },
                "typeArguments": null,
                "start": 509,
                "end": 521
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 522,
              "end": 529
            },
            "abstract": false,
            "declare": false,
            "start": 478,
            "end": 529
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
                "start": 547,
                "end": 559
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
                    "start": 571,
                    "end": 582
                  },
                  "typeArguments": null,
                  "start": 571,
                  "end": 582
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 583,
                "end": 590
              },
              "abstract": false,
              "declare": false,
              "start": 541,
              "end": 590
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 534,
            "end": 590
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
                "start": 608,
                "end": 620
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
                    "start": 632,
                    "end": 644
                  },
                  "typeArguments": null,
                  "start": 632,
                  "end": 644
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 645,
                "end": 652
              },
              "abstract": false,
              "declare": false,
              "start": 602,
              "end": 652
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 595,
            "end": 652
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
              "start": 664,
              "end": 677
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_c_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 686,
              "end": 697
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
                  "start": 709,
                  "end": 721
                },
                "typeArguments": null,
                "start": 709,
                "end": 721
              },
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_i_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 723,
                  "end": 734
                },
                "typeArguments": null,
                "start": 723,
                "end": 734
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 735,
              "end": 742
            },
            "abstract": false,
            "declare": false,
            "start": 658,
            "end": 742
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
              "start": 753,
              "end": 767
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_c_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 776,
              "end": 788
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
                  "start": 801,
                  "end": 813
                },
                "typeArguments": null,
                "start": 801,
                "end": 813
              },
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_i_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 815,
                  "end": 826
                },
                "typeArguments": null,
                "start": 815,
                "end": 826
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 827,
              "end": 834
            },
            "abstract": false,
            "declare": false,
            "start": 747,
            "end": 834
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
                "start": 852,
                "end": 865
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_c_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 874,
                "end": 885
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
                    "start": 898,
                    "end": 910
                  },
                  "typeArguments": null,
                  "start": 898,
                  "end": 910
                },
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_i_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 912,
                    "end": 923
                  },
                  "typeArguments": null,
                  "start": 912,
                  "end": 923
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 924,
                "end": 931
              },
              "abstract": false,
              "declare": false,
              "start": 846,
              "end": 931
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 839,
            "end": 931
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
                "start": 949,
                "end": 962
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 971,
                "end": 983
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
                    "start": 996,
                    "end": 1008
                  },
                  "typeArguments": null,
                  "start": 996,
                  "end": 1008
                },
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_i_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1010,
                    "end": 1021
                  },
                  "typeArguments": null,
                  "start": 1010,
                  "end": 1021
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 1022,
                "end": 1029
              },
              "abstract": false,
              "declare": false,
              "start": 943,
              "end": 1029
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 936,
            "end": 1029
          }
        ],
        "start": 13,
        "end": 1031
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 1031
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_i_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 1043,
        "end": 1055
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 1056,
        "end": 1059
      },
      "declare": false,
      "start": 1033,
      "end": 1059
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_c_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 1067,
        "end": 1079
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
              "start": 1094,
              "end": 1096
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
                "start": 1099,
                "end": 1106
              },
              "expression": false,
              "start": 1096,
              "end": 1106
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1086,
            "end": 1106
          }
        ],
        "start": 1080,
        "end": 1108
      },
      "abstract": false,
      "declare": false,
      "start": 1061,
      "end": 1108
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_C3_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 1116,
        "end": 1129
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_c_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 1138,
        "end": 1150
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1151,
        "end": 1154
      },
      "abstract": false,
      "declare": false,
      "start": 1110,
      "end": 1154
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_C7_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 1162,
        "end": 1175
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
            "start": 1187,
            "end": 1199
          },
          "typeArguments": null,
          "start": 1187,
          "end": 1199
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1200,
        "end": 1203
      },
      "abstract": false,
      "declare": false,
      "start": 1156,
      "end": 1203
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_C11_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 1211,
        "end": 1225
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_c_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 1234,
        "end": 1246
      },
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
            "start": 1258,
            "end": 1270
          },
          "typeArguments": null,
          "start": 1258,
          "end": 1270
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1271,
        "end": 1274
      },
      "abstract": false,
      "declare": false,
      "start": 1205,
      "end": 1274
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1274
}
```
