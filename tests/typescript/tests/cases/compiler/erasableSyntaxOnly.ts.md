__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClassErr",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 16
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 65
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 78,
                        "end": 84
                      },
                      "start": 76,
                      "end": 84
                    },
                    "start": 73,
                    "end": 84
                  },
                  "readonly": false,
                  "static": false,
                  "start": 66,
                  "end": 84
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 86,
                "end": 89
              },
              "expression": false,
              "start": 65,
              "end": 89
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 54,
            "end": 89
          }
        ],
        "start": 17,
        "end": 91
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 91
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IllegalBecauseInstantiated",
        "optional": false,
        "typeAnnotation": null,
        "start": 103,
        "end": 129
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 149,
                    "end": 150
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 153,
                    "end": 154
                  },
                  "definite": false,
                  "start": 149,
                  "end": 154
                }
              ],
              "declare": false,
              "start": 143,
              "end": 155
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 136,
            "end": 155
          }
        ],
        "start": 130,
        "end": 157
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 93,
      "end": 157
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AlsoIllegalBecauseInstantiated",
        "optional": false,
        "typeAnnotation": null,
        "start": 169,
        "end": 199
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "PrivateClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 212,
              "end": 224
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 225,
              "end": 233
            },
            "abstract": false,
            "declare": false,
            "start": 206,
            "end": 233
          }
        ],
        "start": 200,
        "end": 235
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 159,
      "end": 235
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IllegalBecauseNestedInstantiated",
        "optional": false,
        "typeAnnotation": null,
        "start": 247,
        "end": 279
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 296,
              "end": 302
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 326,
                          "end": 327
                        },
                        "init": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 330,
                          "end": 331
                        },
                        "definite": false,
                        "start": 326,
                        "end": 331
                      }
                    ],
                    "declare": false,
                    "start": 320,
                    "end": 332
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 313,
                  "end": 332
                }
              ],
              "start": 303,
              "end": 338
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 286,
            "end": 338
          }
        ],
        "start": 280,
        "end": 340
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 237,
      "end": 340
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NotLegalEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 347,
        "end": 359
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 366,
              "end": 367
            },
            "initializer": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 370,
              "end": 371
            },
            "computed": false,
            "start": 366,
            "end": 371
          }
        ],
        "start": 360,
        "end": 373
      },
      "const": false,
      "declare": false,
      "start": 342,
      "end": 373
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NoGoodAlias",
        "optional": false,
        "typeAnnotation": null,
        "start": 382,
        "end": 393
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NotLegalEnum",
          "optional": false,
          "typeAnnotation": null,
          "start": 396,
          "end": 408
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 409,
          "end": 410
        },
        "start": 396,
        "end": 410
      },
      "importKind": "value",
      "start": 375,
      "end": 411
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NotLegalConstEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 424,
        "end": 441
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 448,
              "end": 449
            },
            "initializer": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 452,
              "end": 453
            },
            "computed": false,
            "start": 448,
            "end": 453
          }
        ],
        "start": 442,
        "end": 455
      },
      "const": true,
      "declare": false,
      "start": 413,
      "end": 455
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClassOk",
        "optional": false,
        "typeAnnotation": null,
        "start": 493,
        "end": 502
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 545,
              "end": 556
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 562,
                      "end": 568
                    },
                    "start": 560,
                    "end": 568
                  },
                  "start": 557,
                  "end": 568
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 570,
                "end": 573
              },
              "expression": false,
              "start": 556,
              "end": 573
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 545,
            "end": 573
          }
        ],
        "start": 503,
        "end": 575
      },
      "abstract": false,
      "declare": false,
      "start": 487,
      "end": 575
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NotInstantiated",
        "optional": false,
        "typeAnnotation": null,
        "start": 691,
        "end": 706
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
                "name": "JustAType",
                "optional": false,
                "typeAnnotation": null,
                "start": 730,
                "end": 739
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 740,
                "end": 743
              },
              "declare": false,
              "start": 720,
              "end": 743
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 713,
            "end": 743
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ATypeInANamespace",
                "optional": false,
                "typeAnnotation": null,
                "start": 760,
                "end": 777
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 780,
                "end": 782
              },
              "declare": false,
              "start": 755,
              "end": 783
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 748,
            "end": 783
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 798,
              "end": 804
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "TSTypeAliasDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ATypeInANamespace",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 827,
                      "end": 844
                    },
                    "typeParameters": null,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 847,
                      "end": 849
                    },
                    "declare": false,
                    "start": 822,
                    "end": 850
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 815,
                  "end": 850
                }
              ],
              "start": 805,
              "end": 856
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 788,
            "end": 856
          }
        ],
        "start": 707,
        "end": 858
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 681,
      "end": 858
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AmbientIsNotInstantiated",
        "optional": false,
        "typeAnnotation": null,
        "start": 877,
        "end": 901
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "stillOk",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 921,
                    "end": 928
                  },
                  "init": {
                    "type": "Literal",
                    "value": 12,
                    "raw": "12",
                    "start": 931,
                    "end": 933
                  },
                  "definite": false,
                  "start": 921,
                  "end": 933
                }
              ],
              "declare": false,
              "start": 915,
              "end": 934
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 908,
            "end": 934
          }
        ],
        "start": 902,
        "end": 936
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 859,
      "end": 936
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LegalEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 951,
        "end": 960
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 967,
              "end": 968
            },
            "initializer": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 971,
              "end": 972
            },
            "computed": false,
            "start": 967,
            "end": 972
          }
        ],
        "start": 961,
        "end": 974
      },
      "const": false,
      "declare": true,
      "start": 938,
      "end": 974
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AmbientStuff",
        "optional": false,
        "typeAnnotation": null,
        "start": 994,
        "end": 1006
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 1023,
              "end": 1029
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "stillOk",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1053,
                          "end": 1060
                        },
                        "init": {
                          "type": "Literal",
                          "value": 12,
                          "raw": "12",
                          "start": 1063,
                          "end": 1065
                        },
                        "definite": false,
                        "start": 1053,
                        "end": 1065
                      }
                    ],
                    "declare": false,
                    "start": 1047,
                    "end": 1066
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 1040,
                  "end": 1066
                }
              ],
              "start": 1030,
              "end": 1072
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 1013,
            "end": 1072
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "EnumInAmbientContext",
              "optional": false,
              "typeAnnotation": null,
              "start": 1082,
              "end": 1102
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1113,
                    "end": 1114
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1117,
                    "end": 1118
                  },
                  "computed": false,
                  "start": 1113,
                  "end": 1118
                }
              ],
              "start": 1103,
              "end": 1124
            },
            "const": false,
            "declare": false,
            "start": 1077,
            "end": 1124
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "FineAlias",
              "optional": false,
              "typeAnnotation": null,
              "start": 1137,
              "end": 1146
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "EnumInAmbientContext",
                "optional": false,
                "typeAnnotation": null,
                "start": 1149,
                "end": 1169
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1170,
                "end": 1171
              },
              "start": 1149,
              "end": 1171
            },
            "importKind": "value",
            "start": 1130,
            "end": 1172
          }
        ],
        "start": 1007,
        "end": 1174
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 976,
      "end": 1174
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1198,
              "end": 1201
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 1202,
              "end": 1204
            },
            "start": 1197,
            "end": 1204
          },
          "id": null,
          "generator": false,
          "start": 1193,
          "end": 1204
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1192,
        "end": 1207
      },
      "directive": null,
      "start": 1192,
      "end": 1208
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1216,
              "end": 1219
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 1221,
              "end": 1223
            },
            "start": 1214,
            "end": 1223
          },
          "id": null,
          "generator": false,
          "start": 1210,
          "end": 1223
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1209,
        "end": 1226
      },
      "directive": null,
      "start": 1209,
      "end": 1227
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1236,
              "end": 1239
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 1242,
              "end": 1244
            },
            "start": 1234,
            "end": 1244
          },
          "id": null,
          "generator": false,
          "start": 1229,
          "end": 1244
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1228,
        "end": 1247
      },
      "directive": null,
      "start": 1228,
      "end": 1248
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1268,
              "end": 1271
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 1273,
              "end": 1275
            },
            "start": 1267,
            "end": 1276
          },
          "id": null,
          "generator": false,
          "start": 1263,
          "end": 1276
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1262,
        "end": 1279
      },
      "directive": null,
      "start": 1262,
      "end": 1280
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1288,
              "end": 1291
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 1292,
              "end": 1294
            },
            "start": 1287,
            "end": 1294
          },
          "id": null,
          "generator": false,
          "start": 1282,
          "end": 1295
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1281,
        "end": 1298
      },
      "directive": null,
      "start": 1281,
      "end": 1299
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1301,
          "end": 1304
        },
        "expression": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 1305,
          "end": 1307
        },
        "start": 1300,
        "end": 1307
      },
      "directive": null,
      "start": 1300,
      "end": 1308
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "gen",
        "optional": false,
        "typeAnnotation": null,
        "start": 1345,
        "end": 1348
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1364,
                  "end": 1367
                },
                "expression": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1377,
                  "end": 1378
                },
                "start": 1363,
                "end": 1378
              },
              "start": 1357,
              "end": 1378
            },
            "directive": null,
            "start": 1357,
            "end": 1379
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1392,
                "end": 1395
              },
              "expression": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1405,
                "end": 1406
              },
              "start": 1391,
              "end": 1406
            },
            "start": 1384,
            "end": 1407
          }
        ],
        "start": 1351,
        "end": 1409
      },
      "expression": false,
      "start": 1335,
      "end": 1409
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 1535,
          "end": 1542
        },
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1544,
                    "end": 1547
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
                      "start": 1550,
                      "end": 1552
                    },
                    "expression": false,
                    "start": 1547,
                    "end": 1552
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1544,
                  "end": 1552
                }
              ],
              "start": 1543,
              "end": 1553
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1554,
              "end": 1557
            },
            "optional": false,
            "computed": false,
            "start": 1543,
            "end": 1557
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1543,
          "end": 1559
        },
        "start": 1534,
        "end": 1559
      },
      "directive": null,
      "start": 1534,
      "end": 1560
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 1637,
          "end": 1644
        },
        "expression": {
          "type": "CallExpression",
          "callee": {
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
              "start": 1656,
              "end": 1658
            },
            "expression": false,
            "start": 1645,
            "end": 1658
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1645,
          "end": 1660
        },
        "start": 1636,
        "end": 1660
      },
      "directive": null,
      "start": 1636,
      "end": 1661
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 1663,
          "end": 1670
        },
        "expression": {
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
            "start": 1682,
            "end": 1684
          },
          "expression": false,
          "start": 1671,
          "end": 1684
        },
        "start": 1662,
        "end": 1684
      },
      "directive": null,
      "start": 1662,
      "end": 1685
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 1880,
          "end": 1887
        },
        "expression": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 1894,
            "end": 1896
          },
          "abstract": false,
          "declare": false,
          "start": 1888,
          "end": 1896
        },
        "start": 1879,
        "end": 1896
      },
      "directive": null,
      "start": 1879,
      "end": 1896
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1897
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 10
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./other.cjs",
          "raw": "\"./other.cjs\"",
          "start": 21,
          "end": 34
        },
        "start": 13,
        "end": 35
      },
      "importKind": "value",
      "start": 0,
      "end": 36
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 49
      },
      "start": 37,
      "end": 50
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 52
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 24,
          "end": 28
        },
        "start": 22,
        "end": 28
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 42
      },
      "start": 30,
      "end": 43
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 45
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 9
          },
          "init": {
            "type": "Literal",
            "value": 1234,
            "raw": "1234",
            "start": 12,
            "end": 16
          },
          "definite": false,
          "start": 6,
          "end": 16
        }
      ],
      "declare": false,
      "start": 0,
      "end": 17
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 36
      },
      "exportKind": "value",
      "start": 18,
      "end": 37
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 37
}
```
