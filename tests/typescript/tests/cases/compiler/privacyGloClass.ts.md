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
        "start": 7,
        "end": 9
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
                "start": 33,
                "end": 44
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 45,
                "end": 52
              },
              "declare": false,
              "start": 23,
              "end": 52
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 16,
            "end": 52
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_i_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 80
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 81,
              "end": 88
            },
            "declare": false,
            "start": 58,
            "end": 88
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
                "start": 107,
                "end": 118
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
                      "start": 137,
                      "end": 139
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
                        "start": 142,
                        "end": 153
                      },
                      "expression": false,
                      "start": 139,
                      "end": 153
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 129,
                    "end": 153
                  }
                ],
                "start": 119,
                "end": 159
              },
              "abstract": false,
              "declare": false,
              "start": 101,
              "end": 159
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 94,
            "end": 159
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
              "start": 171,
              "end": 183
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 184,
              "end": 191
            },
            "abstract": false,
            "declare": false,
            "start": 165,
            "end": 191
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
              "start": 203,
              "end": 216
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_c_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 225,
              "end": 236
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 237,
              "end": 244
            },
            "abstract": false,
            "declare": false,
            "start": 197,
            "end": 244
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
              "start": 255,
              "end": 268
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_c_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 277,
              "end": 289
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 290,
              "end": 297
            },
            "abstract": false,
            "declare": false,
            "start": 249,
            "end": 297
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
                "start": 315,
                "end": 327
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_c_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 336,
                "end": 347
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 348,
                "end": 355
              },
              "abstract": false,
              "declare": false,
              "start": 309,
              "end": 355
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 302,
            "end": 355
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
                "start": 373,
                "end": 385
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 394,
                "end": 406
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 407,
                "end": 414
              },
              "abstract": false,
              "declare": false,
              "start": 367,
              "end": 414
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 360,
            "end": 414
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
              "start": 426,
              "end": 439
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
                  "start": 451,
                  "end": 462
                },
                "typeArguments": null,
                "start": 451,
                "end": 462
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 463,
              "end": 470
            },
            "abstract": false,
            "declare": false,
            "start": 420,
            "end": 470
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
              "start": 481,
              "end": 494
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
                  "start": 506,
                  "end": 518
                },
                "typeArguments": null,
                "start": 506,
                "end": 518
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 519,
              "end": 526
            },
            "abstract": false,
            "declare": false,
            "start": 475,
            "end": 526
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
                "start": 544,
                "end": 556
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
                    "start": 568,
                    "end": 579
                  },
                  "typeArguments": null,
                  "start": 568,
                  "end": 579
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 580,
                "end": 587
              },
              "abstract": false,
              "declare": false,
              "start": 538,
              "end": 587
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 531,
            "end": 587
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
                "start": 605,
                "end": 617
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
                    "start": 629,
                    "end": 641
                  },
                  "typeArguments": null,
                  "start": 629,
                  "end": 641
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 642,
                "end": 649
              },
              "abstract": false,
              "declare": false,
              "start": 599,
              "end": 649
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 592,
            "end": 649
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
              "start": 661,
              "end": 674
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_c_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 683,
              "end": 694
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
                  "start": 706,
                  "end": 718
                },
                "typeArguments": null,
                "start": 706,
                "end": 718
              },
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_i_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 720,
                  "end": 731
                },
                "typeArguments": null,
                "start": 720,
                "end": 731
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 732,
              "end": 739
            },
            "abstract": false,
            "declare": false,
            "start": 655,
            "end": 739
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
              "start": 750,
              "end": 764
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_c_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 773,
              "end": 785
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
                  "start": 798,
                  "end": 810
                },
                "typeArguments": null,
                "start": 798,
                "end": 810
              },
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_i_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 812,
                  "end": 823
                },
                "typeArguments": null,
                "start": 812,
                "end": 823
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 824,
              "end": 831
            },
            "abstract": false,
            "declare": false,
            "start": 744,
            "end": 831
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
                "start": 849,
                "end": 862
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_c_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 871,
                "end": 882
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
                    "start": 895,
                    "end": 907
                  },
                  "typeArguments": null,
                  "start": 895,
                  "end": 907
                },
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_i_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 909,
                    "end": 920
                  },
                  "typeArguments": null,
                  "start": 909,
                  "end": 920
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 921,
                "end": 928
              },
              "abstract": false,
              "declare": false,
              "start": 843,
              "end": 928
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 836,
            "end": 928
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
                "start": 946,
                "end": 959
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_c_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 968,
                "end": 980
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
                    "start": 993,
                    "end": 1005
                  },
                  "typeArguments": null,
                  "start": 993,
                  "end": 1005
                },
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_i_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1007,
                    "end": 1018
                  },
                  "typeArguments": null,
                  "start": 1007,
                  "end": 1018
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 1019,
                "end": 1026
              },
              "abstract": false,
              "declare": false,
              "start": 940,
              "end": 1026
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 933,
            "end": 1026
          }
        ],
        "start": 10,
        "end": 1028
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 1028
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_i_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 1040,
        "end": 1052
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 1053,
        "end": 1056
      },
      "declare": false,
      "start": 1030,
      "end": 1056
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
        "start": 1064,
        "end": 1076
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
              "start": 1091,
              "end": 1093
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
                "start": 1096,
                "end": 1103
              },
              "expression": false,
              "start": 1093,
              "end": 1103
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1083,
            "end": 1103
          }
        ],
        "start": 1077,
        "end": 1105
      },
      "abstract": false,
      "declare": false,
      "start": 1058,
      "end": 1105
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
        "start": 1113,
        "end": 1126
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_c_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 1135,
        "end": 1147
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1148,
        "end": 1151
      },
      "abstract": false,
      "declare": false,
      "start": 1107,
      "end": 1151
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
        "start": 1159,
        "end": 1172
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
            "start": 1184,
            "end": 1196
          },
          "typeArguments": null,
          "start": 1184,
          "end": 1196
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1197,
        "end": 1200
      },
      "abstract": false,
      "declare": false,
      "start": 1153,
      "end": 1200
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
        "start": 1208,
        "end": 1222
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_c_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 1231,
        "end": 1243
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
            "start": 1255,
            "end": 1267
          },
          "typeArguments": null,
          "start": 1255,
          "end": 1267
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1268,
        "end": 1271
      },
      "abstract": false,
      "declare": false,
      "start": 1202,
      "end": 1271
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1271
}
```
