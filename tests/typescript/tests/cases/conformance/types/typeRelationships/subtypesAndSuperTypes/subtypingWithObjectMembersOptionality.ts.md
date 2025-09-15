__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 82
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 85,
              "end": 88
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 90,
                "end": 96
              },
              "start": 88,
              "end": 96
            },
            "accessibility": null,
            "static": false,
            "start": 85,
            "end": 97
          }
        ],
        "start": 83,
        "end": 99
      },
      "declare": false,
      "start": 68,
      "end": 99
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 110,
        "end": 117
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 130
          },
          "typeArguments": null,
          "start": 126,
          "end": 130
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 133,
              "end": 136
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 138,
                "end": 144
              },
              "start": 136,
              "end": 144
            },
            "accessibility": null,
            "static": false,
            "start": 133,
            "end": 145
          }
        ],
        "start": 131,
        "end": 147
      },
      "declare": false,
      "start": 100,
      "end": 147
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 158,
        "end": 166
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Derived",
            "optional": false,
            "typeAnnotation": null,
            "start": 175,
            "end": 182
          },
          "typeArguments": null,
          "start": 175,
          "end": 182
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 188
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 190,
                "end": 196
              },
              "start": 188,
              "end": 196
            },
            "accessibility": null,
            "static": false,
            "start": 185,
            "end": 197
          }
        ],
        "start": 183,
        "end": 199
      },
      "declare": false,
      "start": 148,
      "end": 199
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 821,
        "end": 822
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 829,
              "end": 832
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 835,
                  "end": 839
                },
                "typeArguments": null,
                "start": 835,
                "end": 839
              },
              "start": 833,
              "end": 839
            },
            "accessibility": null,
            "static": false,
            "start": 829,
            "end": 840
          }
        ],
        "start": 823,
        "end": 842
      },
      "declare": false,
      "start": 811,
      "end": 842
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null,
        "start": 854,
        "end": 855
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 864,
            "end": 865
          },
          "typeArguments": null,
          "start": 864,
          "end": 865
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 872,
              "end": 875
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 877,
                  "end": 884
                },
                "typeArguments": null,
                "start": 877,
                "end": 884
              },
              "start": 875,
              "end": 884
            },
            "accessibility": null,
            "static": false,
            "start": 872,
            "end": 884
          }
        ],
        "start": 866,
        "end": 886
      },
      "declare": false,
      "start": 844,
      "end": 886
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 898,
        "end": 900
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 907,
              "end": 908
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 911,
                  "end": 915
                },
                "typeArguments": null,
                "start": 911,
                "end": 915
              },
              "start": 909,
              "end": 915
            },
            "accessibility": null,
            "static": false,
            "start": 907,
            "end": 916
          }
        ],
        "start": 901,
        "end": 919
      },
      "declare": false,
      "start": 888,
      "end": 919
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S2",
        "optional": false,
        "typeAnnotation": null,
        "start": 931,
        "end": 933
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "T2",
            "optional": false,
            "typeAnnotation": null,
            "start": 942,
            "end": 944
          },
          "typeArguments": null,
          "start": 942,
          "end": 944
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 951,
              "end": 952
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 954,
                  "end": 961
                },
                "typeArguments": null,
                "start": 954,
                "end": 961
              },
              "start": 952,
              "end": 961
            },
            "accessibility": null,
            "static": false,
            "start": 951,
            "end": 962
          }
        ],
        "start": 945,
        "end": 964
      },
      "declare": false,
      "start": 921,
      "end": 964
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 976,
        "end": 978
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "1",
              "raw": "'1'",
              "start": 985,
              "end": 988
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 991,
                  "end": 995
                },
                "typeArguments": null,
                "start": 991,
                "end": 995
              },
              "start": 989,
              "end": 995
            },
            "accessibility": null,
            "static": false,
            "start": 985,
            "end": 996
          }
        ],
        "start": 979,
        "end": 998
      },
      "declare": false,
      "start": 966,
      "end": 998
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1010,
        "end": 1012
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "T3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1021,
            "end": 1023
          },
          "typeArguments": null,
          "start": 1021,
          "end": 1023
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "1.",
              "raw": "'1.'",
              "start": 1030,
              "end": 1034
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1036,
                  "end": 1043
                },
                "typeArguments": null,
                "start": 1036,
                "end": 1043
              },
              "start": 1034,
              "end": 1043
            },
            "accessibility": null,
            "static": false,
            "start": 1030,
            "end": 1044
          }
        ],
        "start": 1024,
        "end": 1046
      },
      "declare": false,
      "start": 1000,
      "end": 1046
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1080,
                      "end": 1083
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1086,
                          "end": 1090
                        },
                        "typeArguments": null,
                        "start": 1086,
                        "end": 1090
                      },
                      "start": 1084,
                      "end": 1090
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1080,
                    "end": 1091
                  }
                ],
                "start": 1078,
                "end": 1093
              },
              "start": 1076,
              "end": 1093
            },
            "start": 1075,
            "end": 1093
          },
          "init": null,
          "definite": false,
          "start": 1075,
          "end": 1093
        }
      ],
      "declare": false,
      "start": 1071,
      "end": 1094
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 1099,
            "end": 1100
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1105,
                  "end": 1108
                },
                "value": {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1111,
                      "end": 1118
                    },
                    "typeArguments": null,
                    "start": 1111,
                    "end": 1118
                  },
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 1119,
                    "end": 1123
                  },
                  "start": 1110,
                  "end": 1123
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1105,
                "end": 1123
              }
            ],
            "start": 1103,
            "end": 1125
          },
          "definite": false,
          "start": 1099,
          "end": 1125
        }
      ],
      "declare": false,
      "start": 1095,
      "end": 1126
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 1131,
            "end": 1132
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1135,
              "end": 1139
            },
            "consequent": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1142,
              "end": 1143
            },
            "alternate": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1146,
              "end": 1147
            },
            "start": 1135,
            "end": 1147
          },
          "definite": false,
          "start": 1131,
          "end": 1147
        }
      ],
      "declare": false,
      "start": 1127,
      "end": 1148
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TwoLevels",
        "optional": false,
        "typeAnnotation": null,
        "start": 1160,
        "end": 1169
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1186,
              "end": 1187
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1198,
                    "end": 1201
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1204,
                        "end": 1208
                      },
                      "typeArguments": null,
                      "start": 1204,
                      "end": 1208
                    },
                    "start": 1202,
                    "end": 1208
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1198,
                  "end": 1209
                }
              ],
              "start": 1188,
              "end": 1215
            },
            "declare": false,
            "start": 1176,
            "end": 1215
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 1231,
              "end": 1232
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1241,
                  "end": 1242
                },
                "typeArguments": null,
                "start": 1241,
                "end": 1242
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1253,
                    "end": 1256
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1258,
                        "end": 1266
                      },
                      "typeArguments": null,
                      "start": 1258,
                      "end": 1266
                    },
                    "start": 1256,
                    "end": 1266
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1253,
                  "end": 1266
                }
              ],
              "start": 1243,
              "end": 1273
            },
            "declare": false,
            "start": 1221,
            "end": 1273
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1289,
              "end": 1291
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1302,
                    "end": 1303
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1306,
                        "end": 1310
                      },
                      "typeArguments": null,
                      "start": 1306,
                      "end": 1310
                    },
                    "start": 1304,
                    "end": 1310
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1302,
                  "end": 1311
                }
              ],
              "start": 1292,
              "end": 1317
            },
            "declare": false,
            "start": 1279,
            "end": 1317
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1333,
              "end": 1335
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1344,
                  "end": 1346
                },
                "typeArguments": null,
                "start": 1344,
                "end": 1346
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1357,
                    "end": 1358
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1360,
                        "end": 1368
                      },
                      "typeArguments": null,
                      "start": 1360,
                      "end": 1368
                    },
                    "start": 1358,
                    "end": 1368
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1357,
                  "end": 1369
                }
              ],
              "start": 1347,
              "end": 1375
            },
            "declare": false,
            "start": 1323,
            "end": 1375
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1391,
              "end": 1393
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": "1",
                    "raw": "'1'",
                    "start": 1404,
                    "end": 1407
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1410,
                        "end": 1414
                      },
                      "typeArguments": null,
                      "start": 1410,
                      "end": 1414
                    },
                    "start": 1408,
                    "end": 1414
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1404,
                  "end": 1415
                }
              ],
              "start": 1394,
              "end": 1421
            },
            "declare": false,
            "start": 1381,
            "end": 1421
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1437,
              "end": 1439
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1448,
                  "end": 1450
                },
                "typeArguments": null,
                "start": 1448,
                "end": 1450
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": "1.",
                    "raw": "'1.'",
                    "start": 1461,
                    "end": 1465
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1467,
                        "end": 1475
                      },
                      "typeArguments": null,
                      "start": 1467,
                      "end": 1475
                    },
                    "start": 1465,
                    "end": 1475
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1461,
                  "end": 1476
                }
              ],
              "start": 1451,
              "end": 1482
            },
            "declare": false,
            "start": 1427,
            "end": 1482
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1524,
                            "end": 1527
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1530,
                                "end": 1534
                              },
                              "typeArguments": null,
                              "start": 1530,
                              "end": 1534
                            },
                            "start": 1528,
                            "end": 1534
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1524,
                          "end": 1535
                        }
                      ],
                      "start": 1522,
                      "end": 1537
                    },
                    "start": 1520,
                    "end": 1537
                  },
                  "start": 1519,
                  "end": 1537
                },
                "init": null,
                "definite": false,
                "start": 1519,
                "end": 1537
              }
            ],
            "declare": false,
            "start": 1515,
            "end": 1538
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1547,
                  "end": 1548
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1553,
                        "end": 1556
                      },
                      "value": {
                        "type": "TSTypeAssertion",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1559,
                            "end": 1567
                          },
                          "typeArguments": null,
                          "start": 1559,
                          "end": 1567
                        },
                        "expression": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 1568,
                          "end": 1572
                        },
                        "start": 1558,
                        "end": 1572
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1553,
                      "end": 1572
                    }
                  ],
                  "start": 1551,
                  "end": 1574
                },
                "definite": false,
                "start": 1547,
                "end": 1574
              }
            ],
            "declare": false,
            "start": 1543,
            "end": 1575
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1584,
                  "end": 1585
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1588,
                    "end": 1592
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1595,
                    "end": 1596
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1599,
                    "end": 1600
                  },
                  "start": 1588,
                  "end": 1600
                },
                "definite": false,
                "start": 1584,
                "end": 1600
              }
            ],
            "declare": false,
            "start": 1580,
            "end": 1601
          }
        ],
        "start": 1170,
        "end": 1603
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1150,
      "end": 1603
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 68,
  "end": 1603
}
```
