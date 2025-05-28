__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1271,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 1028,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 1028,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 52,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 23,
              "end": 52,
              "id": {
                "type": "Identifier",
                "start": 33,
                "end": 44,
                "decorators": [],
                "name": "m1_i_public",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 45,
                "end": 52,
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
            "start": 58,
            "end": 88,
            "id": {
              "type": "Identifier",
              "start": 68,
              "end": 80,
              "decorators": [],
              "name": "m1_i_private",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 81,
              "end": 88,
              "body": []
            },
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 94,
            "end": 159,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 101,
              "end": 159,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 107,
                "end": 118,
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
                "start": 119,
                "end": 159,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 129,
                    "end": 153,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 137,
                      "end": 139,
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 139,
                      "end": 153,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 142,
                        "end": 153,
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
            "start": 165,
            "end": 191,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 171,
              "end": 183,
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
              "start": 184,
              "end": 191,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 197,
            "end": 244,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 203,
              "end": 216,
              "decorators": [],
              "name": "m1_C1_private",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 225,
              "end": 236,
              "decorators": [],
              "name": "m1_c_public",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 237,
              "end": 244,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 249,
            "end": 297,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 255,
              "end": 268,
              "decorators": [],
              "name": "m1_C2_private",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 277,
              "end": 289,
              "decorators": [],
              "name": "m1_c_private",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 290,
              "end": 297,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 302,
            "end": 355,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 309,
              "end": 355,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 315,
                "end": 327,
                "decorators": [],
                "name": "m1_C3_public",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "start": 336,
                "end": 347,
                "decorators": [],
                "name": "m1_c_public",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 348,
                "end": 355,
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
            "start": 360,
            "end": 414,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 367,
              "end": 414,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 373,
                "end": 385,
                "decorators": [],
                "name": "m1_C4_public",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "start": 394,
                "end": 406,
                "decorators": [],
                "name": "m1_c_private",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 407,
                "end": 414,
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
            "start": 420,
            "end": 470,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 426,
              "end": 439,
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
                "start": 451,
                "end": 462,
                "expression": {
                  "type": "Identifier",
                  "start": 451,
                  "end": 462,
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
              "start": 463,
              "end": 470,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 475,
            "end": 526,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 481,
              "end": 494,
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
                "start": 506,
                "end": 518,
                "expression": {
                  "type": "Identifier",
                  "start": 506,
                  "end": 518,
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
              "start": 519,
              "end": 526,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 531,
            "end": 587,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 538,
              "end": 587,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 544,
                "end": 556,
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
                  "start": 568,
                  "end": 579,
                  "expression": {
                    "type": "Identifier",
                    "start": 568,
                    "end": 579,
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
                "start": 580,
                "end": 587,
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
            "start": 592,
            "end": 649,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 599,
              "end": 649,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 605,
                "end": 617,
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
                  "start": 629,
                  "end": 641,
                  "expression": {
                    "type": "Identifier",
                    "start": 629,
                    "end": 641,
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
                "start": 642,
                "end": 649,
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
            "start": 655,
            "end": 739,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 661,
              "end": 674,
              "decorators": [],
              "name": "m1_C9_private",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 683,
              "end": 694,
              "decorators": [],
              "name": "m1_c_public",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 706,
                "end": 718,
                "expression": {
                  "type": "Identifier",
                  "start": 706,
                  "end": 718,
                  "decorators": [],
                  "name": "m1_i_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSClassImplements",
                "start": 720,
                "end": 731,
                "expression": {
                  "type": "Identifier",
                  "start": 720,
                  "end": 731,
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
              "start": 732,
              "end": 739,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 744,
            "end": 831,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 750,
              "end": 764,
              "decorators": [],
              "name": "m1_C10_private",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 773,
              "end": 785,
              "decorators": [],
              "name": "m1_c_private",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 798,
                "end": 810,
                "expression": {
                  "type": "Identifier",
                  "start": 798,
                  "end": 810,
                  "decorators": [],
                  "name": "m1_i_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSClassImplements",
                "start": 812,
                "end": 823,
                "expression": {
                  "type": "Identifier",
                  "start": 812,
                  "end": 823,
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
              "start": 824,
              "end": 831,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 836,
            "end": 928,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 843,
              "end": 928,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 849,
                "end": 862,
                "decorators": [],
                "name": "m1_C11_public",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "start": 871,
                "end": 882,
                "decorators": [],
                "name": "m1_c_public",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 895,
                  "end": 907,
                  "expression": {
                    "type": "Identifier",
                    "start": 895,
                    "end": 907,
                    "decorators": [],
                    "name": "m1_i_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSClassImplements",
                  "start": 909,
                  "end": 920,
                  "expression": {
                    "type": "Identifier",
                    "start": 909,
                    "end": 920,
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
                "start": 921,
                "end": 928,
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
            "start": 933,
            "end": 1026,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 940,
              "end": 1026,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 946,
                "end": 959,
                "decorators": [],
                "name": "m1_C12_public",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "start": 968,
                "end": 980,
                "decorators": [],
                "name": "m1_c_private",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 993,
                  "end": 1005,
                  "expression": {
                    "type": "Identifier",
                    "start": 993,
                    "end": 1005,
                    "decorators": [],
                    "name": "m1_i_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSClassImplements",
                  "start": 1007,
                  "end": 1018,
                  "expression": {
                    "type": "Identifier",
                    "start": 1007,
                    "end": 1018,
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
                "start": 1019,
                "end": 1026,
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
      "type": "TSInterfaceDeclaration",
      "start": 1030,
      "end": 1056,
      "id": {
        "type": "Identifier",
        "start": 1040,
        "end": 1052,
        "decorators": [],
        "name": "glo_i_public",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1053,
        "end": 1056,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1058,
      "end": 1105,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1064,
        "end": 1076,
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
        "start": 1077,
        "end": 1105,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1083,
            "end": 1103,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1091,
              "end": 1093,
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1093,
              "end": 1103,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1096,
                "end": 1103,
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
    {
      "type": "ClassDeclaration",
      "start": 1107,
      "end": 1151,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1113,
        "end": 1126,
        "decorators": [],
        "name": "glo_C3_public",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 1135,
        "end": 1147,
        "decorators": [],
        "name": "glo_c_public",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1148,
        "end": 1151,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1153,
      "end": 1200,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1159,
        "end": 1172,
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
          "start": 1184,
          "end": 1196,
          "expression": {
            "type": "Identifier",
            "start": 1184,
            "end": 1196,
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
        "start": 1197,
        "end": 1200,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1202,
      "end": 1271,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1208,
        "end": 1222,
        "decorators": [],
        "name": "glo_C11_public",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 1231,
        "end": 1243,
        "decorators": [],
        "name": "glo_c_public",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 1255,
          "end": 1267,
          "expression": {
            "type": "Identifier",
            "start": 1255,
            "end": 1267,
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
        "start": 1268,
        "end": 1271,
        "body": []
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
