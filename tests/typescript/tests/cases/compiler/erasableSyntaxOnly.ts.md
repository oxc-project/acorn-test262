__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1897,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 91,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 16,
        "decorators": [],
        "name": "MyClassErr",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 17,
        "end": 91,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 54,
            "end": 89,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 65,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 65,
              "end": 89,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 66,
                  "end": 84,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 84,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 76,
                      "end": 84,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 78,
                        "end": 84
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 86,
                "end": 89,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 93,
      "end": 157,
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 129,
        "decorators": [],
        "name": "IllegalBecauseInstantiated",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 130,
        "end": 157,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 136,
            "end": 155,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 143,
              "end": 155,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 149,
                  "end": 154,
                  "id": {
                    "type": "Identifier",
                    "start": 149,
                    "end": 150,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 153,
                    "end": 154,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 159,
      "end": 235,
      "id": {
        "type": "Identifier",
        "start": 169,
        "end": 199,
        "decorators": [],
        "name": "AlsoIllegalBecauseInstantiated",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 200,
        "end": 235,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 206,
            "end": 233,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 212,
              "end": 224,
              "decorators": [],
              "name": "PrivateClass",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 225,
              "end": 233,
              "body": []
            },
            "abstract": false,
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 237,
      "end": 340,
      "id": {
        "type": "Identifier",
        "start": 247,
        "end": 279,
        "decorators": [],
        "name": "IllegalBecauseNestedInstantiated",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 280,
        "end": 340,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 286,
            "end": 338,
            "id": {
              "type": "Identifier",
              "start": 296,
              "end": 302,
              "decorators": [],
              "name": "Nested",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 303,
              "end": 338,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 313,
                  "end": 332,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 320,
                    "end": 332,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 326,
                        "end": 331,
                        "id": {
                          "type": "Identifier",
                          "start": 326,
                          "end": 327,
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 330,
                          "end": 331,
                          "value": 1,
                          "raw": "1"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": []
                }
              ]
            },
            "kind": "namespace",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 342,
      "end": 373,
      "id": {
        "type": "Identifier",
        "start": 347,
        "end": 359,
        "decorators": [],
        "name": "NotLegalEnum",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 360,
        "end": 373,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 366,
            "end": 371,
            "id": {
              "type": "Identifier",
              "start": 366,
              "end": 367,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 370,
              "end": 371,
              "value": 1,
              "raw": "1"
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 375,
      "end": 411,
      "id": {
        "type": "Identifier",
        "start": 382,
        "end": 393,
        "decorators": [],
        "name": "NoGoodAlias",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 396,
        "end": 410,
        "left": {
          "type": "Identifier",
          "start": 396,
          "end": 408,
          "decorators": [],
          "name": "NotLegalEnum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 409,
          "end": 410,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSEnumDeclaration",
      "start": 413,
      "end": 455,
      "id": {
        "type": "Identifier",
        "start": 424,
        "end": 441,
        "decorators": [],
        "name": "NotLegalConstEnum",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 442,
        "end": 455,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 448,
            "end": 453,
            "id": {
              "type": "Identifier",
              "start": 448,
              "end": 449,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 452,
              "end": 453,
              "value": 2,
              "raw": "2"
            },
            "computed": false
          }
        ]
      },
      "const": true,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 487,
      "end": 575,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 493,
        "end": 502,
        "decorators": [],
        "name": "MyClassOk",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 503,
        "end": 575,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 545,
            "end": 573,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 545,
              "end": 556,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 556,
              "end": 573,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 557,
                  "end": 568,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 560,
                    "end": 568,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 562,
                      "end": 568
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 570,
                "end": 573,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 681,
      "end": 858,
      "id": {
        "type": "Identifier",
        "start": 691,
        "end": 706,
        "decorators": [],
        "name": "NotInstantiated",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 707,
        "end": 858,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 713,
            "end": 743,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 720,
              "end": 743,
              "id": {
                "type": "Identifier",
                "start": 730,
                "end": 739,
                "decorators": [],
                "name": "JustAType",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 740,
                "end": 743,
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
            "type": "ExportNamedDeclaration",
            "start": 748,
            "end": 783,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 755,
              "end": 783,
              "id": {
                "type": "Identifier",
                "start": 760,
                "end": 777,
                "decorators": [],
                "name": "ATypeInANamespace",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 780,
                "end": 782,
                "members": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "TSModuleDeclaration",
            "start": 788,
            "end": 856,
            "id": {
              "type": "Identifier",
              "start": 798,
              "end": 804,
              "decorators": [],
              "name": "Nested",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 805,
              "end": 856,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 815,
                  "end": 850,
                  "declaration": {
                    "type": "TSTypeAliasDeclaration",
                    "start": 822,
                    "end": 850,
                    "id": {
                      "type": "Identifier",
                      "start": 827,
                      "end": 844,
                      "decorators": [],
                      "name": "ATypeInANamespace",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 847,
                      "end": 849,
                      "members": []
                    },
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": []
                }
              ]
            },
            "kind": "namespace",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 859,
      "end": 936,
      "id": {
        "type": "Identifier",
        "start": 877,
        "end": 901,
        "decorators": [],
        "name": "AmbientIsNotInstantiated",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 902,
        "end": 936,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 908,
            "end": 934,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 915,
              "end": 934,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 921,
                  "end": 933,
                  "id": {
                    "type": "Identifier",
                    "start": 921,
                    "end": 928,
                    "decorators": [],
                    "name": "stillOk",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 931,
                    "end": 933,
                    "value": 12,
                    "raw": "12"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 938,
      "end": 974,
      "id": {
        "type": "Identifier",
        "start": 951,
        "end": 960,
        "decorators": [],
        "name": "LegalEnum",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 961,
        "end": 974,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 967,
            "end": 972,
            "id": {
              "type": "Identifier",
              "start": 967,
              "end": 968,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 971,
              "end": 972,
              "value": 1,
              "raw": "1"
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": true
    },
    {
      "type": "TSModuleDeclaration",
      "start": 976,
      "end": 1174,
      "id": {
        "type": "Identifier",
        "start": 994,
        "end": 1006,
        "decorators": [],
        "name": "AmbientStuff",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1007,
        "end": 1174,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 1013,
            "end": 1072,
            "id": {
              "type": "Identifier",
              "start": 1023,
              "end": 1029,
              "decorators": [],
              "name": "Nested",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 1030,
              "end": 1072,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 1040,
                  "end": 1066,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 1047,
                    "end": 1066,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1053,
                        "end": 1065,
                        "id": {
                          "type": "Identifier",
                          "start": 1053,
                          "end": 1060,
                          "decorators": [],
                          "name": "stillOk",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 1063,
                          "end": 1065,
                          "value": 12,
                          "raw": "12"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": []
                }
              ]
            },
            "kind": "namespace",
            "declare": false,
            "global": false
          },
          {
            "type": "TSEnumDeclaration",
            "start": 1077,
            "end": 1124,
            "id": {
              "type": "Identifier",
              "start": 1082,
              "end": 1102,
              "decorators": [],
              "name": "EnumInAmbientContext",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSEnumBody",
              "start": 1103,
              "end": 1124,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 1113,
                  "end": 1118,
                  "id": {
                    "type": "Identifier",
                    "start": 1113,
                    "end": 1114,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 1117,
                    "end": 1118,
                    "value": 1,
                    "raw": "1"
                  },
                  "computed": false
                }
              ]
            },
            "const": false,
            "declare": false
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 1130,
            "end": 1172,
            "id": {
              "type": "Identifier",
              "start": 1137,
              "end": 1146,
              "decorators": [],
              "name": "FineAlias",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 1149,
              "end": 1171,
              "left": {
                "type": "Identifier",
                "start": 1149,
                "end": 1169,
                "decorators": [],
                "name": "EnumInAmbientContext",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1170,
                "end": 1171,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "importKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1192,
      "end": 1208,
      "expression": {
        "type": "CallExpression",
        "start": 1192,
        "end": 1207,
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 1193,
          "end": 1204,
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "TSTypeAssertion",
            "start": 1197,
            "end": 1204,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1198,
              "end": 1201
            },
            "expression": {
              "type": "ObjectExpression",
              "start": 1202,
              "end": 1204,
              "properties": []
            }
          },
          "id": null,
          "generator": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1209,
      "end": 1227,
      "expression": {
        "type": "CallExpression",
        "start": 1209,
        "end": 1226,
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 1210,
          "end": 1223,
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "TSTypeAssertion",
            "start": 1214,
            "end": 1223,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1216,
              "end": 1219
            },
            "expression": {
              "type": "ObjectExpression",
              "start": 1221,
              "end": 1223,
              "properties": []
            }
          },
          "id": null,
          "generator": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1228,
      "end": 1248,
      "expression": {
        "type": "CallExpression",
        "start": 1228,
        "end": 1247,
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 1229,
          "end": 1244,
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "TSTypeAssertion",
            "start": 1234,
            "end": 1244,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1236,
              "end": 1239
            },
            "expression": {
              "type": "ObjectExpression",
              "start": 1242,
              "end": 1244,
              "properties": []
            }
          },
          "id": null,
          "generator": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1262,
      "end": 1280,
      "expression": {
        "type": "CallExpression",
        "start": 1262,
        "end": 1279,
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 1263,
          "end": 1276,
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "TSTypeAssertion",
            "start": 1267,
            "end": 1276,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1268,
              "end": 1271
            },
            "expression": {
              "type": "ObjectExpression",
              "start": 1273,
              "end": 1275,
              "properties": []
            }
          },
          "id": null,
          "generator": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1281,
      "end": 1299,
      "expression": {
        "type": "CallExpression",
        "start": 1281,
        "end": 1298,
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 1282,
          "end": 1295,
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "TSTypeAssertion",
            "start": 1287,
            "end": 1294,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1288,
              "end": 1291
            },
            "expression": {
              "type": "ObjectExpression",
              "start": 1292,
              "end": 1294,
              "properties": []
            }
          },
          "id": null,
          "generator": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1300,
      "end": 1308,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 1300,
        "end": 1307,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1301,
          "end": 1304
        },
        "expression": {
          "type": "ObjectExpression",
          "start": 1305,
          "end": 1307,
          "properties": []
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1335,
      "end": 1409,
      "id": {
        "type": "Identifier",
        "start": 1345,
        "end": 1348,
        "decorators": [],
        "name": "gen",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1351,
        "end": 1409,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1357,
            "end": 1379,
            "expression": {
              "type": "YieldExpression",
              "start": 1357,
              "end": 1378,
              "delegate": false,
              "argument": {
                "type": "TSTypeAssertion",
                "start": 1363,
                "end": 1378,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1364,
                  "end": 1367
                },
                "expression": {
                  "type": "Literal",
                  "start": 1377,
                  "end": 1378,
                  "value": 1,
                  "raw": "1"
                }
              }
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 1384,
            "end": 1407,
            "argument": {
              "type": "TSTypeAssertion",
              "start": 1391,
              "end": 1406,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1392,
                "end": 1395
              },
              "expression": {
                "type": "Literal",
                "start": 1405,
                "end": 1406,
                "value": 1,
                "raw": "1"
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1534,
      "end": 1560,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 1534,
        "end": 1559,
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 1535,
          "end": 1542
        },
        "expression": {
          "type": "CallExpression",
          "start": 1543,
          "end": 1559,
          "callee": {
            "type": "MemberExpression",
            "start": 1543,
            "end": 1557,
            "object": {
              "type": "ObjectExpression",
              "start": 1543,
              "end": 1553,
              "properties": [
                {
                  "type": "Property",
                  "start": 1544,
                  "end": 1552,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1544,
                    "end": 1547,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1547,
                    "end": 1552,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1550,
                      "end": 1552,
                      "body": []
                    },
                    "expression": false
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "property": {
              "type": "Identifier",
              "start": 1554,
              "end": 1557,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1636,
      "end": 1661,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 1636,
        "end": 1660,
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 1637,
          "end": 1644
        },
        "expression": {
          "type": "CallExpression",
          "start": 1645,
          "end": 1660,
          "callee": {
            "type": "FunctionExpression",
            "start": 1645,
            "end": 1658,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 1656,
              "end": 1658,
              "body": []
            },
            "expression": false
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1662,
      "end": 1685,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 1662,
        "end": 1684,
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 1663,
          "end": 1670
        },
        "expression": {
          "type": "FunctionExpression",
          "start": 1671,
          "end": 1684,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 1682,
            "end": 1684,
            "body": []
          },
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1879,
      "end": 1896,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 1879,
        "end": 1896,
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 1880,
          "end": 1887
        },
        "expression": {
          "type": "ClassExpression",
          "start": 1888,
          "end": 1896,
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 1894,
            "end": 1896,
            "body": []
          },
          "abstract": false,
          "declare": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 52,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 36,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 13,
        "end": 35,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 34,
          "value": "./other.cjs",
          "raw": "\"./other.cjs\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSExportAssignment",
      "start": 37,
      "end": 50,
      "expression": {
        "type": "Identifier",
        "start": 46,
        "end": 49,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 45,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 29,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 22,
        "end": 28,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 24,
          "end": 28
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSExportAssignment",
      "start": 30,
      "end": 43,
      "expression": {
        "type": "Identifier",
        "start": 39,
        "end": 42,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 37,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 17,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 16,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 12,
            "end": 16,
            "value": 1234,
            "raw": "1234"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 18,
      "end": 37,
      "declaration": {
        "type": "Identifier",
        "start": 33,
        "end": 36,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
