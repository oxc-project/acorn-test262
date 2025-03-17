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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 16,
        "name": "MyClassErr",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 17,
        "end": 91,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 54,
            "end": 89,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 65,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 65,
              "end": 89,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "foo",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 76,
                      "end": 84,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 78,
                        "end": 84
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 86,
                "end": 89,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
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
      "type": "TSModuleDeclaration",
      "start": 93,
      "end": 157,
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 129,
        "name": "IllegalBecauseInstantiated",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 149,
                  "end": 154,
                  "id": {
                    "type": "Identifier",
                    "start": 149,
                    "end": 150,
                    "name": "m",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "kind": "const",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
        "name": "AlsoIllegalBecauseInstantiated",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "id": {
              "type": "Identifier",
              "start": 212,
              "end": 224,
              "name": "PrivateClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 225,
              "end": 233,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
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
        "name": "IllegalBecauseNestedInstantiated",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "Nested",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 326,
                        "end": 331,
                        "id": {
                          "type": "Identifier",
                          "start": 326,
                          "end": 327,
                          "name": "m",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "kind": "const",
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
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
        "name": "NotLegalEnum",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 366,
          "end": 371,
          "id": {
            "type": "Identifier",
            "start": 366,
            "end": 367,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      ],
      "const": false,
      "declare": false,
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
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 375,
      "end": 411,
      "id": {
        "type": "Identifier",
        "start": 382,
        "end": 393,
        "name": "NoGoodAlias",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 396,
        "end": 410,
        "left": {
          "type": "Identifier",
          "start": 396,
          "end": 408,
          "name": "NotLegalEnum",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 409,
          "end": 410,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
        "name": "NotLegalConstEnum",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 448,
          "end": 453,
          "id": {
            "type": "Identifier",
            "start": 448,
            "end": 449,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      ],
      "const": true,
      "declare": false,
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
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 487,
      "end": 575,
      "id": {
        "type": "Identifier",
        "start": 493,
        "end": 502,
        "name": "MyClassOk",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 503,
        "end": 575,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 545,
            "end": 573,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 545,
              "end": 556,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 556,
              "end": 573,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 557,
                  "end": 568,
                  "name": "foo",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 560,
                    "end": 568,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 562,
                      "end": 568
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 570,
                "end": 573,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
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
      "type": "TSModuleDeclaration",
      "start": 681,
      "end": 858,
      "id": {
        "type": "Identifier",
        "start": 691,
        "end": 706,
        "name": "NotInstantiated",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "name": "JustAType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
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
            "attributes": [],
            "exportKind": "type"
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
                "name": "ATypeInANamespace",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "TSModuleDeclaration",
            "start": 788,
            "end": 856,
            "id": {
              "type": "Identifier",
              "start": 798,
              "end": 804,
              "name": "Nested",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                      "name": "ATypeInANamespace",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                  "attributes": [],
                  "exportKind": "type"
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
        "name": "AmbientIsNotInstantiated",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 921,
                  "end": 933,
                  "id": {
                    "type": "Identifier",
                    "start": 921,
                    "end": 928,
                    "name": "stillOk",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "kind": "const",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
        "name": "LegalEnum",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 967,
          "end": 972,
          "id": {
            "type": "Identifier",
            "start": 967,
            "end": 968,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      ],
      "const": false,
      "declare": true,
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
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 976,
      "end": 1174,
      "id": {
        "type": "Identifier",
        "start": 994,
        "end": 1006,
        "name": "AmbientStuff",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "Nested",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1053,
                        "end": 1065,
                        "id": {
                          "type": "Identifier",
                          "start": 1053,
                          "end": 1060,
                          "name": "stillOk",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "kind": "const",
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
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
              "name": "EnumInAmbientContext",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "members": [
              {
                "type": "TSEnumMember",
                "start": 1113,
                "end": 1118,
                "id": {
                  "type": "Identifier",
                  "start": 1113,
                  "end": 1114,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            ],
            "const": false,
            "declare": false,
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
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
            }
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 1130,
            "end": 1172,
            "id": {
              "type": "Identifier",
              "start": 1137,
              "end": 1146,
              "name": "FineAlias",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 1149,
              "end": 1171,
              "left": {
                "type": "Identifier",
                "start": 1149,
                "end": 1169,
                "name": "EnumInAmbientContext",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1170,
                "end": 1171,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [],
          "body": {
            "type": "TSTypeAssertion",
            "start": 1197,
            "end": 1204,
            "expression": {
              "type": "ObjectExpression",
              "start": 1202,
              "end": 1204,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1198,
              "end": 1201
            }
          },
          "typeParameters": null,
          "returnType": null
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
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
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [],
          "body": {
            "type": "TSTypeAssertion",
            "start": 1214,
            "end": 1223,
            "expression": {
              "type": "ObjectExpression",
              "start": 1221,
              "end": 1223,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1216,
              "end": 1219
            }
          },
          "typeParameters": null,
          "returnType": null
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
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
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [],
          "body": {
            "type": "TSTypeAssertion",
            "start": 1234,
            "end": 1244,
            "expression": {
              "type": "ObjectExpression",
              "start": 1242,
              "end": 1244,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1236,
              "end": 1239
            }
          },
          "typeParameters": null,
          "returnType": null
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
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
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [],
          "body": {
            "type": "TSTypeAssertion",
            "start": 1267,
            "end": 1276,
            "expression": {
              "type": "ObjectExpression",
              "start": 1273,
              "end": 1275,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1268,
              "end": 1271
            }
          },
          "typeParameters": null,
          "returnType": null
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
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
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [],
          "body": {
            "type": "TSTypeAssertion",
            "start": 1287,
            "end": 1294,
            "expression": {
              "type": "ObjectExpression",
              "start": 1292,
              "end": 1294,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1288,
              "end": 1291
            }
          },
          "typeParameters": null,
          "returnType": null
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
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
        "expression": {
          "type": "ObjectExpression",
          "start": 1305,
          "end": 1307,
          "properties": []
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1301,
          "end": 1304
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
        "name": "gen",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
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
                "expression": {
                  "type": "Literal",
                  "start": 1377,
                  "end": 1378,
                  "value": 1,
                  "raw": "1"
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1364,
                  "end": 1367
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
              "expression": {
                "type": "Literal",
                "start": 1405,
                "end": 1406,
                "value": 1,
                "raw": "1"
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1392,
                "end": 1395
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1534,
      "end": 1560,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 1534,
        "end": 1559,
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
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1544,
                    "end": 1547,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1547,
                    "end": 1552,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 1550,
                      "end": 1552,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "property": {
              "type": "Identifier",
              "start": 1554,
              "end": 1557,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        },
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 1535,
          "end": 1542
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
        "expression": {
          "type": "CallExpression",
          "start": 1645,
          "end": 1660,
          "callee": {
            "type": "FunctionExpression",
            "start": 1645,
            "end": 1658,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 1656,
              "end": 1658,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        },
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 1637,
          "end": 1644
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
        "expression": {
          "type": "FunctionExpression",
          "start": 1671,
          "end": 1684,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [],
          "body": {
            "type": "BlockStatement",
            "start": 1682,
            "end": 1684,
            "body": []
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        },
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 1663,
          "end": 1670
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
        "expression": {
          "type": "ClassExpression",
          "start": 1888,
          "end": 1896,
          "id": null,
          "superClass": null,
          "body": {
            "type": "ClassBody",
            "start": 1894,
            "end": 1896,
            "body": []
          },
          "decorators": [],
          "typeParameters": null,
          "implements": [],
          "abstract": false,
          "declare": false,
          "superTypeArguments": null
        },
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 1880,
          "end": 1887
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
