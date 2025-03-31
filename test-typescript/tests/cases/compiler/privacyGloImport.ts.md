__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 5095,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 3166,
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
        "end": 3166,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 209,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 23,
              "end": 209,
              "id": {
                "type": "Identifier",
                "start": 30,
                "end": 42,
                "name": "m1_M1_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 43,
                "end": 209,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 53,
                    "end": 80,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 60,
                      "end": 80,
                      "id": {
                        "type": "Identifier",
                        "start": 66,
                        "end": 68,
                        "name": "c1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "superClass": null,
                      "body": {
                        "type": "ClassBody",
                        "start": 69,
                        "end": 80,
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
                    "start": 89,
                    "end": 148,
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "start": 96,
                      "end": 148,
                      "id": {
                        "type": "Identifier",
                        "start": 105,
                        "end": 107,
                        "name": "f1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 110,
                        "end": 148,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 124,
                            "end": 138,
                            "argument": {
                              "type": "NewExpression",
                              "start": 131,
                              "end": 137,
                              "callee": {
                                "type": "Identifier",
                                "start": 135,
                                "end": 137,
                                "name": "c1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "value"
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 157,
                    "end": 176,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 164,
                      "end": 176,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 168,
                          "end": 175,
                          "id": {
                            "type": "Identifier",
                            "start": 168,
                            "end": 170,
                            "name": "v1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "Identifier",
                            "start": 173,
                            "end": 175,
                            "name": "c1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "definite": false
                        }
                      ],
                      "kind": "var",
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "value"
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 185,
                    "end": 203,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 192,
                      "end": 203,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 196,
                          "end": 202,
                          "id": {
                            "type": "Identifier",
                            "start": 196,
                            "end": 202,
                            "name": "v2",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 198,
                              "end": 202,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 200,
                                "end": 202,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 200,
                                  "end": 202,
                                  "name": "c1",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          },
                          "init": null,
                          "definite": false
                        }
                      ],
                      "kind": "var",
                      "declare": false
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "TSModuleDeclaration",
            "start": 215,
            "end": 402,
            "id": {
              "type": "Identifier",
              "start": 222,
              "end": 235,
              "name": "m1_M2_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 236,
              "end": 402,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 246,
                  "end": 273,
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 253,
                    "end": 273,
                    "id": {
                      "type": "Identifier",
                      "start": 259,
                      "end": 261,
                      "name": "c1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 262,
                      "end": 273,
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
                  "start": 282,
                  "end": 341,
                  "declaration": {
                    "type": "FunctionDeclaration",
                    "start": 289,
                    "end": 341,
                    "id": {
                      "type": "Identifier",
                      "start": 298,
                      "end": 300,
                      "name": "f1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 303,
                      "end": 341,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 317,
                          "end": 331,
                          "argument": {
                            "type": "NewExpression",
                            "start": 324,
                            "end": 330,
                            "callee": {
                              "type": "Identifier",
                              "start": 328,
                              "end": 330,
                              "name": "c1",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 350,
                  "end": 369,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 357,
                    "end": 369,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 361,
                        "end": 368,
                        "id": {
                          "type": "Identifier",
                          "start": 361,
                          "end": 363,
                          "name": "v1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 366,
                          "end": 368,
                          "name": "c1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 378,
                  "end": 396,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 385,
                    "end": 396,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 389,
                        "end": 395,
                        "id": {
                          "type": "Identifier",
                          "start": 389,
                          "end": 395,
                          "name": "v2",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 391,
                            "end": 395,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 393,
                              "end": 395,
                              "typeName": {
                                "type": "Identifier",
                                "start": 393,
                                "end": 395,
                                "name": "c1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
            "type": "TSImportEqualsDeclaration",
            "start": 796,
            "end": 833,
            "id": {
              "type": "Identifier",
              "start": 803,
              "end": 817,
              "name": "m1_im1_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 820,
              "end": 832,
              "name": "m1_M1_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 838,
            "end": 894,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 845,
              "end": 894,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 849,
                  "end": 893,
                  "id": {
                    "type": "Identifier",
                    "start": 849,
                    "end": 873,
                    "name": "m1_im1_private_v1_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 876,
                    "end": 893,
                    "object": {
                      "type": "Identifier",
                      "start": 876,
                      "end": 890,
                      "name": "m1_im1_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 891,
                      "end": 893,
                      "name": "c1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 899,
            "end": 961,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 906,
              "end": 961,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 910,
                  "end": 960,
                  "id": {
                    "type": "Identifier",
                    "start": 910,
                    "end": 934,
                    "name": "m1_im1_private_v2_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 937,
                    "end": 960,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 941,
                      "end": 958,
                      "object": {
                        "type": "Identifier",
                        "start": 941,
                        "end": 955,
                        "name": "m1_im1_private",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 956,
                        "end": 958,
                        "name": "c1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 966,
            "end": 1022,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 973,
              "end": 1022,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 977,
                  "end": 1021,
                  "id": {
                    "type": "Identifier",
                    "start": 977,
                    "end": 1001,
                    "name": "m1_im1_private_v3_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 1004,
                    "end": 1021,
                    "object": {
                      "type": "Identifier",
                      "start": 1004,
                      "end": 1018,
                      "name": "m1_im1_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1019,
                      "end": 1021,
                      "name": "f1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1027,
            "end": 1085,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1034,
              "end": 1085,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1038,
                  "end": 1084,
                  "id": {
                    "type": "Identifier",
                    "start": 1038,
                    "end": 1062,
                    "name": "m1_im1_private_v4_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 1065,
                    "end": 1084,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1065,
                      "end": 1082,
                      "object": {
                        "type": "Identifier",
                        "start": 1065,
                        "end": 1079,
                        "name": "m1_im1_private",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1080,
                        "end": 1082,
                        "name": "f1",
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
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "VariableDeclaration",
            "start": 1090,
            "end": 1140,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1094,
                "end": 1139,
                "id": {
                  "type": "Identifier",
                  "start": 1094,
                  "end": 1119,
                  "name": "m1_im1_private_v1_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1122,
                  "end": 1139,
                  "object": {
                    "type": "Identifier",
                    "start": 1122,
                    "end": 1136,
                    "name": "m1_im1_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1137,
                    "end": 1139,
                    "name": "c1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1145,
            "end": 1201,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1149,
                "end": 1200,
                "id": {
                  "type": "Identifier",
                  "start": 1149,
                  "end": 1174,
                  "name": "m1_im1_private_v2_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 1177,
                  "end": 1200,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1181,
                    "end": 1198,
                    "object": {
                      "type": "Identifier",
                      "start": 1181,
                      "end": 1195,
                      "name": "m1_im1_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1196,
                      "end": 1198,
                      "name": "c1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1206,
            "end": 1256,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1210,
                "end": 1255,
                "id": {
                  "type": "Identifier",
                  "start": 1210,
                  "end": 1235,
                  "name": "m1_im1_private_v3_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1238,
                  "end": 1255,
                  "object": {
                    "type": "Identifier",
                    "start": 1238,
                    "end": 1252,
                    "name": "m1_im1_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1253,
                    "end": 1255,
                    "name": "f1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1261,
            "end": 1313,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1265,
                "end": 1312,
                "id": {
                  "type": "Identifier",
                  "start": 1265,
                  "end": 1290,
                  "name": "m1_im1_private_v4_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1293,
                  "end": 1312,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1293,
                    "end": 1310,
                    "object": {
                      "type": "Identifier",
                      "start": 1293,
                      "end": 1307,
                      "name": "m1_im1_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1308,
                      "end": 1310,
                      "name": "f1",
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
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 1320,
            "end": 1358,
            "id": {
              "type": "Identifier",
              "start": 1327,
              "end": 1341,
              "name": "m1_im2_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 1344,
              "end": 1357,
              "name": "m1_M2_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1363,
            "end": 1419,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1370,
              "end": 1419,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1374,
                  "end": 1418,
                  "id": {
                    "type": "Identifier",
                    "start": 1374,
                    "end": 1398,
                    "name": "m1_im2_private_v1_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 1401,
                    "end": 1418,
                    "object": {
                      "type": "Identifier",
                      "start": 1401,
                      "end": 1415,
                      "name": "m1_im2_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1416,
                      "end": 1418,
                      "name": "c1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1424,
            "end": 1486,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1431,
              "end": 1486,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1435,
                  "end": 1485,
                  "id": {
                    "type": "Identifier",
                    "start": 1435,
                    "end": 1459,
                    "name": "m1_im2_private_v2_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 1462,
                    "end": 1485,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1466,
                      "end": 1483,
                      "object": {
                        "type": "Identifier",
                        "start": 1466,
                        "end": 1480,
                        "name": "m1_im2_private",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1481,
                        "end": 1483,
                        "name": "c1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1491,
            "end": 1547,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1498,
              "end": 1547,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1502,
                  "end": 1546,
                  "id": {
                    "type": "Identifier",
                    "start": 1502,
                    "end": 1526,
                    "name": "m1_im2_private_v3_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 1529,
                    "end": 1546,
                    "object": {
                      "type": "Identifier",
                      "start": 1529,
                      "end": 1543,
                      "name": "m1_im2_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1544,
                      "end": 1546,
                      "name": "f1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1552,
            "end": 1610,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1559,
              "end": 1610,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1563,
                  "end": 1609,
                  "id": {
                    "type": "Identifier",
                    "start": 1563,
                    "end": 1587,
                    "name": "m1_im2_private_v4_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 1590,
                    "end": 1609,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1590,
                      "end": 1607,
                      "object": {
                        "type": "Identifier",
                        "start": 1590,
                        "end": 1604,
                        "name": "m1_im2_private",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1605,
                        "end": 1607,
                        "name": "f1",
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
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "VariableDeclaration",
            "start": 1615,
            "end": 1665,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1619,
                "end": 1664,
                "id": {
                  "type": "Identifier",
                  "start": 1619,
                  "end": 1644,
                  "name": "m1_im2_private_v1_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1647,
                  "end": 1664,
                  "object": {
                    "type": "Identifier",
                    "start": 1647,
                    "end": 1661,
                    "name": "m1_im2_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1662,
                    "end": 1664,
                    "name": "c1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1670,
            "end": 1726,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1674,
                "end": 1725,
                "id": {
                  "type": "Identifier",
                  "start": 1674,
                  "end": 1699,
                  "name": "m1_im2_private_v2_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 1702,
                  "end": 1725,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1706,
                    "end": 1723,
                    "object": {
                      "type": "Identifier",
                      "start": 1706,
                      "end": 1720,
                      "name": "m1_im2_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1721,
                      "end": 1723,
                      "name": "c1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1731,
            "end": 1781,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1735,
                "end": 1780,
                "id": {
                  "type": "Identifier",
                  "start": 1735,
                  "end": 1760,
                  "name": "m1_im2_private_v3_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1763,
                  "end": 1780,
                  "object": {
                    "type": "Identifier",
                    "start": 1763,
                    "end": 1777,
                    "name": "m1_im2_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1778,
                    "end": 1780,
                    "name": "f1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1786,
            "end": 1838,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1790,
                "end": 1837,
                "id": {
                  "type": "Identifier",
                  "start": 1790,
                  "end": 1815,
                  "name": "m1_im2_private_v4_private",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1818,
                  "end": 1837,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1818,
                    "end": 1835,
                    "object": {
                      "type": "Identifier",
                      "start": 1818,
                      "end": 1832,
                      "name": "m1_im2_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1833,
                      "end": 1835,
                      "name": "f1",
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
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 2949,
            "end": 2992,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 2956,
              "end": 2992,
              "id": {
                "type": "Identifier",
                "start": 2963,
                "end": 2976,
                "name": "m1_im1_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "Identifier",
                "start": 2979,
                "end": 2991,
                "name": "m1_M1_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 2997,
            "end": 3041,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 3004,
              "end": 3041,
              "id": {
                "type": "Identifier",
                "start": 3011,
                "end": 3024,
                "name": "m1_im2_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "Identifier",
                "start": 3027,
                "end": 3040,
                "name": "m1_M2_private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "importKind": "value"
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
      "type": "TSModuleDeclaration",
      "start": 3168,
      "end": 3323,
      "id": {
        "type": "Identifier",
        "start": 3175,
        "end": 3188,
        "name": "glo_M1_public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 3189,
        "end": 3323,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 3195,
            "end": 3218,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 3202,
              "end": 3218,
              "id": {
                "type": "Identifier",
                "start": 3208,
                "end": 3210,
                "name": "c1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 3211,
                "end": 3218,
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
            "start": 3223,
            "end": 3274,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 3230,
              "end": 3274,
              "id": {
                "type": "Identifier",
                "start": 3239,
                "end": 3241,
                "name": "f1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 3244,
                "end": 3274,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 3254,
                    "end": 3268,
                    "argument": {
                      "type": "NewExpression",
                      "start": 3261,
                      "end": 3267,
                      "callee": {
                        "type": "Identifier",
                        "start": 3265,
                        "end": 3267,
                        "name": "c1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 3279,
            "end": 3298,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 3286,
              "end": 3298,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3290,
                  "end": 3297,
                  "id": {
                    "type": "Identifier",
                    "start": 3290,
                    "end": 3292,
                    "name": "v1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 3295,
                    "end": 3297,
                    "name": "c1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 3303,
            "end": 3321,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 3310,
              "end": 3321,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3314,
                  "end": 3320,
                  "id": {
                    "type": "Identifier",
                    "start": 3314,
                    "end": 3320,
                    "name": "v2",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3316,
                      "end": 3320,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3318,
                        "end": 3320,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3318,
                          "end": 3320,
                          "name": "c1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
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
      "type": "TSModuleDeclaration",
      "start": 3325,
      "end": 3472,
      "id": {
        "type": "Literal",
        "start": 3340,
        "end": 3355,
        "value": "glo_M2_public",
        "raw": "\"glo_M2_public\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 3356,
        "end": 3472,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 3362,
            "end": 3383,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 3369,
              "end": 3383,
              "id": {
                "type": "Identifier",
                "start": 3378,
                "end": 3380,
                "name": "f1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 3388,
            "end": 3411,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 3395,
              "end": 3411,
              "id": {
                "type": "Identifier",
                "start": 3401,
                "end": 3403,
                "name": "c1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 3404,
                "end": 3411,
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
            "start": 3416,
            "end": 3447,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 3423,
              "end": 3447,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3427,
                  "end": 3446,
                  "id": {
                    "type": "Identifier",
                    "start": 3427,
                    "end": 3446,
                    "name": "v1",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3429,
                      "end": 3446,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 3431,
                        "end": 3446,
                        "members": [
                          {
                            "type": "TSConstructSignatureDeclaration",
                            "start": 3433,
                            "end": 3444,
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 3439,
                              "end": 3443,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 3441,
                                "end": 3443,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3441,
                                  "end": 3443,
                                  "name": "c1",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        ]
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 3452,
            "end": 3470,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 3459,
              "end": 3470,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3463,
                  "end": 3469,
                  "id": {
                    "type": "Identifier",
                    "start": 3463,
                    "end": 3469,
                    "name": "v2",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3465,
                      "end": 3469,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3467,
                        "end": 3469,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3467,
                          "end": 3469,
                          "name": "c1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 3474,
      "end": 4739,
      "id": {
        "type": "Literal",
        "start": 3489,
        "end": 3508,
        "value": "use_glo_M1_public",
        "raw": "\"use_glo_M1_public\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 3509,
        "end": 4739,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 3515,
            "end": 3556,
            "id": {
              "type": "Identifier",
              "start": 3522,
              "end": 3539,
              "name": "use_glo_M1_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 3542,
              "end": 3555,
              "name": "glo_M1_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 3561,
            "end": 3635,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 3568,
              "end": 3635,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3572,
                  "end": 3634,
                  "id": {
                    "type": "Identifier",
                    "start": 3572,
                    "end": 3634,
                    "name": "use_glo_M1_public_v1_public",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3599,
                      "end": 3634,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 3601,
                        "end": 3634,
                        "members": [
                          {
                            "type": "TSConstructSignatureDeclaration",
                            "start": 3603,
                            "end": 3632,
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 3609,
                              "end": 3631,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 3611,
                                "end": 3631,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 3611,
                                  "end": 3631,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 3611,
                                    "end": 3628,
                                    "name": "use_glo_M1_public",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 3629,
                                    "end": 3631,
                                    "name": "c1",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        ]
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 3640,
            "end": 3705,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 3647,
              "end": 3705,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3651,
                  "end": 3704,
                  "id": {
                    "type": "Identifier",
                    "start": 3651,
                    "end": 3704,
                    "name": "use_glo_M1_public_v2_public",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3678,
                      "end": 3704,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 3680,
                        "end": 3704,
                        "exprName": {
                          "type": "Identifier",
                          "start": 3687,
                          "end": 3704,
                          "name": "use_glo_M1_public",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 3710,
            "end": 3776,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 3717,
              "end": 3776,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3721,
                  "end": 3775,
                  "id": {
                    "type": "Identifier",
                    "start": 3721,
                    "end": 3775,
                    "name": "use_glo_M1_public_v3_public",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3748,
                      "end": 3775,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 3750,
                        "end": 3775,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 3752,
                          "end": 3775,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3755,
                            "end": 3775,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 3755,
                              "end": 3775,
                              "left": {
                                "type": "Identifier",
                                "start": 3755,
                                "end": 3772,
                                "name": "use_glo_M1_public",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 3773,
                                "end": 3775,
                                "name": "c1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "VariableDeclaration",
            "start": 3781,
            "end": 3849,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3785,
                "end": 3848,
                "id": {
                  "type": "Identifier",
                  "start": 3785,
                  "end": 3848,
                  "name": "use_glo_M1_public_v1_private",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3813,
                    "end": 3848,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 3815,
                      "end": 3848,
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 3817,
                          "end": 3846,
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 3823,
                            "end": 3845,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3825,
                              "end": 3845,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 3825,
                                "end": 3845,
                                "left": {
                                  "type": "Identifier",
                                  "start": 3825,
                                  "end": 3842,
                                  "name": "use_glo_M1_public",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 3843,
                                  "end": 3845,
                                  "name": "c1",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3854,
            "end": 3913,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3858,
                "end": 3912,
                "id": {
                  "type": "Identifier",
                  "start": 3858,
                  "end": 3912,
                  "name": "use_glo_M1_public_v2_private",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3886,
                    "end": 3912,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 3888,
                      "end": 3912,
                      "exprName": {
                        "type": "Identifier",
                        "start": 3895,
                        "end": 3912,
                        "name": "use_glo_M1_public",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3918,
            "end": 3979,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3922,
                "end": 3978,
                "id": {
                  "type": "Identifier",
                  "start": 3922,
                  "end": 3978,
                  "name": "use_glo_M1_public_v3_private",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3950,
                    "end": 3978,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 3952,
                      "end": 3978,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 3955,
                        "end": 3978,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3958,
                          "end": 3978,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 3958,
                            "end": 3978,
                            "left": {
                              "type": "Identifier",
                              "start": 3958,
                              "end": 3975,
                              "name": "use_glo_M1_public",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 3976,
                              "end": 3978,
                              "name": "c1",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 3985,
            "end": 4037,
            "id": {
              "type": "Identifier",
              "start": 3992,
              "end": 4009,
              "name": "use_glo_M2_public",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 4012,
              "end": 4036,
              "expression": {
                "type": "Literal",
                "start": 4020,
                "end": 4035,
                "value": "glo_M2_public",
                "raw": "\"glo_M2_public\""
              }
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4042,
            "end": 4116,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 4049,
              "end": 4116,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4053,
                  "end": 4115,
                  "id": {
                    "type": "Identifier",
                    "start": 4053,
                    "end": 4115,
                    "name": "use_glo_M2_public_v1_public",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4080,
                      "end": 4115,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 4082,
                        "end": 4115,
                        "members": [
                          {
                            "type": "TSConstructSignatureDeclaration",
                            "start": 4084,
                            "end": 4113,
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 4090,
                              "end": 4112,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 4092,
                                "end": 4112,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 4092,
                                  "end": 4112,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 4092,
                                    "end": 4109,
                                    "name": "use_glo_M2_public",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 4110,
                                    "end": 4112,
                                    "name": "c1",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        ]
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4121,
            "end": 4186,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 4128,
              "end": 4186,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4132,
                  "end": 4185,
                  "id": {
                    "type": "Identifier",
                    "start": 4132,
                    "end": 4185,
                    "name": "use_glo_M2_public_v2_public",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4159,
                      "end": 4185,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 4161,
                        "end": 4185,
                        "exprName": {
                          "type": "Identifier",
                          "start": 4168,
                          "end": 4185,
                          "name": "use_glo_M2_public",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4191,
            "end": 4258,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 4198,
              "end": 4258,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4202,
                  "end": 4257,
                  "id": {
                    "type": "Identifier",
                    "start": 4202,
                    "end": 4257,
                    "name": "use_glo_M2_public_v3_public",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4229,
                      "end": 4257,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 4231,
                        "end": 4257,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 4234,
                          "end": 4257,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4237,
                            "end": 4257,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 4237,
                              "end": 4257,
                              "left": {
                                "type": "Identifier",
                                "start": 4237,
                                "end": 4254,
                                "name": "use_glo_M2_public",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 4255,
                                "end": 4257,
                                "name": "c1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "VariableDeclaration",
            "start": 4263,
            "end": 4331,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4267,
                "end": 4330,
                "id": {
                  "type": "Identifier",
                  "start": 4267,
                  "end": 4330,
                  "name": "use_glo_M2_public_v1_private",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4295,
                    "end": 4330,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 4297,
                      "end": 4330,
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 4299,
                          "end": 4328,
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 4305,
                            "end": 4327,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4307,
                              "end": 4327,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 4307,
                                "end": 4327,
                                "left": {
                                  "type": "Identifier",
                                  "start": 4307,
                                  "end": 4324,
                                  "name": "use_glo_M2_public",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 4325,
                                  "end": 4327,
                                  "name": "c1",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 4336,
            "end": 4395,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4340,
                "end": 4394,
                "id": {
                  "type": "Identifier",
                  "start": 4340,
                  "end": 4394,
                  "name": "use_glo_M2_public_v2_private",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4368,
                    "end": 4394,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 4370,
                      "end": 4394,
                      "exprName": {
                        "type": "Identifier",
                        "start": 4377,
                        "end": 4394,
                        "name": "use_glo_M2_public",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 4400,
            "end": 4461,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4404,
                "end": 4460,
                "id": {
                  "type": "Identifier",
                  "start": 4404,
                  "end": 4460,
                  "name": "use_glo_M2_public_v3_private",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4432,
                    "end": 4460,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 4434,
                      "end": 4460,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 4437,
                        "end": 4460,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4440,
                          "end": 4460,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 4440,
                            "end": 4460,
                            "left": {
                              "type": "Identifier",
                              "start": 4440,
                              "end": 4457,
                              "name": "use_glo_M2_public",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 4458,
                              "end": 4460,
                              "name": "c1",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "TSModuleDeclaration",
            "start": 4467,
            "end": 4737,
            "id": {
              "type": "Identifier",
              "start": 4474,
              "end": 4476,
              "name": "m2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 4477,
              "end": 4737,
              "body": [
                {
                  "type": "TSImportEqualsDeclaration",
                  "start": 4544,
                  "end": 4582,
                  "id": {
                    "type": "Identifier",
                    "start": 4551,
                    "end": 4565,
                    "name": "nonerrorImport",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "moduleReference": {
                    "type": "Identifier",
                    "start": 4568,
                    "end": 4581,
                    "name": "glo_M1_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "importKind": "value"
                },
                {
                  "type": "TSModuleDeclaration",
                  "start": 4592,
                  "end": 4731,
                  "id": {
                    "type": "Identifier",
                    "start": 4599,
                    "end": 4601,
                    "name": "m5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "body": {
                    "type": "TSModuleBlock",
                    "start": 4602,
                    "end": 4731,
                    "body": [
                      {
                        "type": "TSImportEqualsDeclaration",
                        "start": 4680,
                        "end": 4721,
                        "id": {
                          "type": "Identifier",
                          "start": 4687,
                          "end": 4704,
                          "name": "m5_nonerrorImport",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "moduleReference": {
                          "type": "Identifier",
                          "start": 4707,
                          "end": 4720,
                          "name": "glo_M1_public",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "importKind": "value"
                      }
                    ]
                  },
                  "kind": "module",
                  "declare": false,
                  "global": false
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 4741,
      "end": 4937,
      "id": {
        "type": "Literal",
        "start": 4756,
        "end": 4775,
        "value": "anotherParseError",
        "raw": "\"anotherParseError\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 4776,
        "end": 4937,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 4782,
            "end": 4844,
            "id": {
              "type": "Identifier",
              "start": 4789,
              "end": 4791,
              "name": "m2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 4792,
              "end": 4844,
              "body": []
            },
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "TSModuleDeclaration",
            "start": 4850,
            "end": 4905,
            "id": {
              "type": "Identifier",
              "start": 4857,
              "end": 4859,
              "name": "m2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 4860,
              "end": 4905,
              "body": []
            },
            "kind": "module",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 4939,
      "end": 5095,
      "id": {
        "type": "Identifier",
        "start": 4946,
        "end": 4948,
        "name": "m2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 4949,
        "end": 5095,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 5003,
            "end": 5092,
            "id": {
              "type": "Identifier",
              "start": 5010,
              "end": 5012,
              "name": "m4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 5013,
              "end": 5092,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 5023,
                  "end": 5034,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 5027,
                      "end": 5033,
                      "id": {
                        "type": "Identifier",
                        "start": 5027,
                        "end": 5028,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 5031,
                        "end": 5033,
                        "value": 10,
                        "raw": "10"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
