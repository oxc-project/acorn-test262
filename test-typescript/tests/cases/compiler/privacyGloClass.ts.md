__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1272,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 1028,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "name": "m1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "name": "m1_i_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
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
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 58,
            "end": 88,
            "id": {
              "type": "Identifier",
              "start": 68,
              "end": 80,
              "name": "m1_i_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
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
              "id": {
                "type": "Identifier",
                "start": 107,
                "end": 118,
                "name": "m1_c_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 119,
                "end": 159,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 129,
                    "end": 153,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 137,
                      "end": 139,
                      "name": "f1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 139,
                      "end": 153,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 142,
                        "end": 153,
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
            "start": 165,
            "end": 191,
            "id": {
              "type": "Identifier",
              "start": 171,
              "end": 183,
              "name": "m1_c_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 184,
              "end": 191,
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
            "start": 197,
            "end": 244,
            "id": {
              "type": "Identifier",
              "start": 203,
              "end": 216,
              "name": "m1_C1_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 225,
              "end": 236,
              "name": "m1_c_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 237,
              "end": 244,
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
            "start": 249,
            "end": 297,
            "id": {
              "type": "Identifier",
              "start": 255,
              "end": 268,
              "name": "m1_C2_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 277,
              "end": 289,
              "name": "m1_c_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 290,
              "end": 297,
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
            "start": 302,
            "end": 355,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 309,
              "end": 355,
              "id": {
                "type": "Identifier",
                "start": 315,
                "end": 327,
                "name": "m1_C3_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 336,
                "end": 347,
                "name": "m1_c_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 348,
                "end": 355,
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
            "start": 360,
            "end": 414,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 367,
              "end": 414,
              "id": {
                "type": "Identifier",
                "start": 373,
                "end": 385,
                "name": "m1_C4_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 394,
                "end": 406,
                "name": "m1_c_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 407,
                "end": 414,
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
            "start": 420,
            "end": 470,
            "id": {
              "type": "Identifier",
              "start": 426,
              "end": 439,
              "name": "m1_C5_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 463,
              "end": 470,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 451,
                "end": 462,
                "expression": {
                  "type": "Identifier",
                  "start": 451,
                  "end": 462,
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
            "start": 475,
            "end": 526,
            "id": {
              "type": "Identifier",
              "start": 481,
              "end": 494,
              "name": "m1_C6_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 519,
              "end": 526,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 506,
                "end": 518,
                "expression": {
                  "type": "Identifier",
                  "start": 506,
                  "end": 518,
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
            "start": 531,
            "end": 587,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 538,
              "end": 587,
              "id": {
                "type": "Identifier",
                "start": 544,
                "end": 556,
                "name": "m1_C7_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 580,
                "end": 587,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 568,
                  "end": 579,
                  "expression": {
                    "type": "Identifier",
                    "start": 568,
                    "end": 579,
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
            "start": 592,
            "end": 649,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 599,
              "end": 649,
              "id": {
                "type": "Identifier",
                "start": 605,
                "end": 617,
                "name": "m1_C8_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 642,
                "end": 649,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 629,
                  "end": 641,
                  "expression": {
                    "type": "Identifier",
                    "start": 629,
                    "end": 641,
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
            "start": 655,
            "end": 739,
            "id": {
              "type": "Identifier",
              "start": 661,
              "end": 674,
              "name": "m1_C9_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 683,
              "end": 694,
              "name": "m1_c_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 732,
              "end": 739,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 706,
                "end": 718,
                "expression": {
                  "type": "Identifier",
                  "start": 706,
                  "end": 718,
                  "name": "m1_i_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "start": 744,
            "end": 831,
            "id": {
              "type": "Identifier",
              "start": 750,
              "end": 764,
              "name": "m1_C10_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 773,
              "end": 785,
              "name": "m1_c_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 824,
              "end": 831,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 798,
                "end": 810,
                "expression": {
                  "type": "Identifier",
                  "start": 798,
                  "end": 810,
                  "name": "m1_i_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "start": 836,
            "end": 928,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 843,
              "end": 928,
              "id": {
                "type": "Identifier",
                "start": 849,
                "end": 862,
                "name": "m1_C11_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 871,
                "end": 882,
                "name": "m1_c_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 921,
                "end": 928,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 895,
                  "end": 907,
                  "expression": {
                    "type": "Identifier",
                    "start": 895,
                    "end": 907,
                    "name": "m1_i_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
            "start": 933,
            "end": 1026,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 940,
              "end": 1026,
              "id": {
                "type": "Identifier",
                "start": 946,
                "end": 959,
                "name": "m1_C12_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 968,
                "end": 980,
                "name": "m1_c_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 1019,
                "end": 1026,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 993,
                  "end": 1005,
                  "expression": {
                    "type": "Identifier",
                    "start": 993,
                    "end": 1005,
                    "name": "m1_i_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
    {
      "type": "TSInterfaceDeclaration",
      "start": 1030,
      "end": 1056,
      "id": {
        "type": "Identifier",
        "start": 1040,
        "end": 1052,
        "name": "glo_i_public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
      "id": {
        "type": "Identifier",
        "start": 1064,
        "end": 1076,
        "name": "glo_c_public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1077,
        "end": 1105,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1083,
            "end": 1103,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1091,
              "end": 1093,
              "name": "f1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1093,
              "end": 1103,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1096,
                "end": 1103,
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
    {
      "type": "ClassDeclaration",
      "start": 1107,
      "end": 1151,
      "id": {
        "type": "Identifier",
        "start": 1113,
        "end": 1126,
        "name": "glo_C3_public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 1135,
        "end": 1147,
        "name": "glo_c_public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 1148,
        "end": 1151,
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
      "start": 1153,
      "end": 1200,
      "id": {
        "type": "Identifier",
        "start": 1159,
        "end": 1172,
        "name": "glo_C7_public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1197,
        "end": 1200,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 1184,
          "end": 1196,
          "expression": {
            "type": "Identifier",
            "start": 1184,
            "end": 1196,
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
      "start": 1202,
      "end": 1271,
      "id": {
        "type": "Identifier",
        "start": 1208,
        "end": 1222,
        "name": "glo_C11_public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 1231,
        "end": 1243,
        "name": "glo_c_public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 1268,
        "end": 1271,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 1255,
          "end": 1267,
          "expression": {
            "type": "Identifier",
            "start": 1255,
            "end": 1267,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
