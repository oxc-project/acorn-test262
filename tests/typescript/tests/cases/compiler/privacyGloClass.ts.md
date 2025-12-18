__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 10,
    "end": 12,
    "range": [
      10,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 19,
    "end": 25,
    "range": [
      19,
      25
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 26,
    "end": 35,
    "range": [
      26,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_i_public",
    "start": 36,
    "end": 47,
    "range": [
      36,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 61,
    "end": 70,
    "range": [
      61,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_i_private",
    "start": 71,
    "end": 83,
    "range": [
      71,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 97,
    "end": 103,
    "range": [
      97,
      103
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 104,
    "end": 109,
    "range": [
      104,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c_public",
    "start": 110,
    "end": 121,
    "range": [
      110,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 132,
    "end": 139,
    "range": [
      132,
      139
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 140,
    "end": 142,
    "range": [
      140,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 168,
    "end": 173,
    "range": [
      168,
      173
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c_private",
    "start": 174,
    "end": 186,
    "range": [
      174,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 200,
    "end": 205,
    "range": [
      200,
      205
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_C1_private",
    "start": 206,
    "end": 219,
    "range": [
      206,
      219
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 220,
    "end": 227,
    "range": [
      220,
      227
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c_public",
    "start": 228,
    "end": 239,
    "range": [
      228,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 252,
    "end": 257,
    "range": [
      252,
      257
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_C2_private",
    "start": 258,
    "end": 271,
    "range": [
      258,
      271
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 272,
    "end": 279,
    "range": [
      272,
      279
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c_private",
    "start": 280,
    "end": 292,
    "range": [
      280,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 305,
    "end": 311,
    "range": [
      305,
      311
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 312,
    "end": 317,
    "range": [
      312,
      317
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_C3_public",
    "start": 318,
    "end": 330,
    "range": [
      318,
      330
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 331,
    "end": 338,
    "range": [
      331,
      338
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c_public",
    "start": 339,
    "end": 350,
    "range": [
      339,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 363,
    "end": 369,
    "range": [
      363,
      369
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 370,
    "end": 375,
    "range": [
      370,
      375
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_C4_public",
    "start": 376,
    "end": 388,
    "range": [
      376,
      388
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 389,
    "end": 396,
    "range": [
      389,
      396
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c_private",
    "start": 397,
    "end": 409,
    "range": [
      397,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 423,
    "end": 428,
    "range": [
      423,
      428
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_C5_private",
    "start": 429,
    "end": 442,
    "range": [
      429,
      442
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 443,
    "end": 453,
    "range": [
      443,
      453
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_i_public",
    "start": 454,
    "end": 465,
    "range": [
      454,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 478,
    "end": 483,
    "range": [
      478,
      483
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_C6_private",
    "start": 484,
    "end": 497,
    "range": [
      484,
      497
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 498,
    "end": 508,
    "range": [
      498,
      508
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_i_private",
    "start": 509,
    "end": 521,
    "range": [
      509,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 534,
    "end": 540,
    "range": [
      534,
      540
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 541,
    "end": 546,
    "range": [
      541,
      546
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_C7_public",
    "start": 547,
    "end": 559,
    "range": [
      547,
      559
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 560,
    "end": 570,
    "range": [
      560,
      570
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_i_public",
    "start": 571,
    "end": 582,
    "range": [
      571,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 595,
    "end": 601,
    "range": [
      595,
      601
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 602,
    "end": 607,
    "range": [
      602,
      607
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_C8_public",
    "start": 608,
    "end": 620,
    "range": [
      608,
      620
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 621,
    "end": 631,
    "range": [
      621,
      631
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_i_private",
    "start": 632,
    "end": 644,
    "range": [
      632,
      644
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 645,
    "end": 646,
    "range": [
      645,
      646
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 658,
    "end": 663,
    "range": [
      658,
      663
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_C9_private",
    "start": 664,
    "end": 677,
    "range": [
      664,
      677
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 678,
    "end": 685,
    "range": [
      678,
      685
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c_public",
    "start": 686,
    "end": 697,
    "range": [
      686,
      697
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 698,
    "end": 708,
    "range": [
      698,
      708
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_i_private",
    "start": 709,
    "end": 721,
    "range": [
      709,
      721
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 721,
    "end": 722,
    "range": [
      721,
      722
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_i_public",
    "start": 723,
    "end": 734,
    "range": [
      723,
      734
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 735,
    "end": 736,
    "range": [
      735,
      736
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 741,
    "end": 742,
    "range": [
      741,
      742
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 747,
    "end": 752,
    "range": [
      747,
      752
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_C10_private",
    "start": 753,
    "end": 767,
    "range": [
      753,
      767
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 768,
    "end": 775,
    "range": [
      768,
      775
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c_private",
    "start": 776,
    "end": 788,
    "range": [
      776,
      788
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 789,
    "end": 799,
    "range": [
      789,
      799
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_i_private",
    "start": 801,
    "end": 813,
    "range": [
      801,
      813
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 813,
    "end": 814,
    "range": [
      813,
      814
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_i_public",
    "start": 815,
    "end": 826,
    "range": [
      815,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 827,
    "end": 828,
    "range": [
      827,
      828
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 839,
    "end": 845,
    "range": [
      839,
      845
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 846,
    "end": 851,
    "range": [
      846,
      851
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_C11_public",
    "start": 852,
    "end": 865,
    "range": [
      852,
      865
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 866,
    "end": 873,
    "range": [
      866,
      873
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c_public",
    "start": 874,
    "end": 885,
    "range": [
      874,
      885
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 886,
    "end": 896,
    "range": [
      886,
      896
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_i_private",
    "start": 898,
    "end": 910,
    "range": [
      898,
      910
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 910,
    "end": 911,
    "range": [
      910,
      911
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_i_public",
    "start": 912,
    "end": 923,
    "range": [
      912,
      923
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 930,
    "end": 931,
    "range": [
      930,
      931
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 936,
    "end": 942,
    "range": [
      936,
      942
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 943,
    "end": 948,
    "range": [
      943,
      948
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_C12_public",
    "start": 949,
    "end": 962,
    "range": [
      949,
      962
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 963,
    "end": 970,
    "range": [
      963,
      970
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c_private",
    "start": 971,
    "end": 983,
    "range": [
      971,
      983
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 984,
    "end": 994,
    "range": [
      984,
      994
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_i_private",
    "start": 996,
    "end": 1008,
    "range": [
      996,
      1008
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1008,
    "end": 1009,
    "range": [
      1008,
      1009
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_i_public",
    "start": 1010,
    "end": 1021,
    "range": [
      1010,
      1021
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1022,
    "end": 1023,
    "range": [
      1022,
      1023
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1028,
    "end": 1029,
    "range": [
      1028,
      1029
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1030,
    "end": 1031,
    "range": [
      1030,
      1031
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1033,
    "end": 1042,
    "range": [
      1033,
      1042
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_i_public",
    "start": 1043,
    "end": 1055,
    "range": [
      1043,
      1055
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1056,
    "end": 1057,
    "range": [
      1056,
      1057
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1058,
    "end": 1059,
    "range": [
      1058,
      1059
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1061,
    "end": 1066,
    "range": [
      1061,
      1066
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_c_public",
    "start": 1067,
    "end": 1079,
    "range": [
      1067,
      1079
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1080,
    "end": 1081,
    "range": [
      1080,
      1081
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1086,
    "end": 1093,
    "range": [
      1086,
      1093
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1094,
    "end": 1096,
    "range": [
      1094,
      1096
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1096,
    "end": 1097,
    "range": [
      1096,
      1097
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1097,
    "end": 1098,
    "range": [
      1097,
      1098
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1105,
    "end": 1106,
    "range": [
      1105,
      1106
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1107,
    "end": 1108,
    "range": [
      1107,
      1108
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1110,
    "end": 1115,
    "range": [
      1110,
      1115
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C3_public",
    "start": 1116,
    "end": 1129,
    "range": [
      1116,
      1129
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1130,
    "end": 1137,
    "range": [
      1130,
      1137
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_c_public",
    "start": 1138,
    "end": 1150,
    "range": [
      1138,
      1150
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1151,
    "end": 1152,
    "range": [
      1151,
      1152
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1153,
    "end": 1154,
    "range": [
      1153,
      1154
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1156,
    "end": 1161,
    "range": [
      1156,
      1161
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C7_public",
    "start": 1162,
    "end": 1175,
    "range": [
      1162,
      1175
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 1176,
    "end": 1186,
    "range": [
      1176,
      1186
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_i_public",
    "start": 1187,
    "end": 1199,
    "range": [
      1187,
      1199
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1200,
    "end": 1201,
    "range": [
      1200,
      1201
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
    "start": 1205,
    "end": 1210,
    "range": [
      1205,
      1210
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C11_public",
    "start": 1211,
    "end": 1225,
    "range": [
      1211,
      1225
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1226,
    "end": 1233,
    "range": [
      1226,
      1233
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_c_public",
    "start": 1234,
    "end": 1246,
    "range": [
      1234,
      1246
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 1247,
    "end": 1257,
    "range": [
      1247,
      1257
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_i_public",
    "start": 1258,
    "end": 1270,
    "range": [
      1258,
      1270
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1271,
    "end": 1272,
    "range": [
      1271,
      1272
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1273,
    "end": 1274,
    "range": [
      1273,
      1274
    ]
  }
]
```
