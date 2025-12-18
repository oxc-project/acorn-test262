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
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_M1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 36,
                "end": 48
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "ClassDeclaration",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 72,
                        "end": 74
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 75,
                        "end": 86
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 66,
                      "end": 86
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 59,
                    "end": 86
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 111,
                        "end": 113
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 141,
                                "end": 143
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 137,
                              "end": 143
                            },
                            "start": 130,
                            "end": 144
                          }
                        ],
                        "start": 116,
                        "end": 154
                      },
                      "expression": false,
                      "start": 102,
                      "end": 154
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 95,
                    "end": 154
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "v1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 174,
                            "end": 176
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 179,
                            "end": 181
                          },
                          "definite": false,
                          "start": 174,
                          "end": 181
                        }
                      ],
                      "declare": false,
                      "start": 170,
                      "end": 182
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 163,
                    "end": 182
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "v2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 206,
                                  "end": 208
                                },
                                "typeArguments": null,
                                "start": 206,
                                "end": 208
                              },
                              "start": 204,
                              "end": 208
                            },
                            "start": 202,
                            "end": 208
                          },
                          "init": null,
                          "definite": false,
                          "start": 202,
                          "end": 208
                        }
                      ],
                      "declare": false,
                      "start": 198,
                      "end": 209
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 191,
                    "end": 209
                  }
                ],
                "start": 49,
                "end": 215
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 26,
              "end": 215
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 19,
            "end": 215
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_M2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 244
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 268,
                      "end": 270
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 271,
                      "end": 282
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 262,
                    "end": 282
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 255,
                  "end": 282
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 307,
                      "end": 309
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 337,
                              "end": 339
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 333,
                            "end": 339
                          },
                          "start": 326,
                          "end": 340
                        }
                      ],
                      "start": 312,
                      "end": 350
                    },
                    "expression": false,
                    "start": 298,
                    "end": 350
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 291,
                  "end": 350
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 370,
                          "end": 372
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 375,
                          "end": 377
                        },
                        "definite": false,
                        "start": 370,
                        "end": 377
                      }
                    ],
                    "declare": false,
                    "start": 366,
                    "end": 378
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 359,
                  "end": 378
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 402,
                                "end": 404
                              },
                              "typeArguments": null,
                              "start": 402,
                              "end": 404
                            },
                            "start": 400,
                            "end": 404
                          },
                          "start": 398,
                          "end": 404
                        },
                        "init": null,
                        "definite": false,
                        "start": 398,
                        "end": 404
                      }
                    ],
                    "declare": false,
                    "start": 394,
                    "end": 405
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 387,
                  "end": 405
                }
              ],
              "start": 245,
              "end": 411
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 221,
            "end": 411
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_im1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 812,
              "end": 826
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_M1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 829,
              "end": 841
            },
            "importKind": "value",
            "start": 805,
            "end": 842
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im1_private_v1_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 858,
                    "end": 882
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 885,
                      "end": 899
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 900,
                      "end": 902
                    },
                    "optional": false,
                    "computed": false,
                    "start": 885,
                    "end": 902
                  },
                  "definite": false,
                  "start": 858,
                  "end": 902
                }
              ],
              "declare": false,
              "start": 854,
              "end": 903
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 847,
            "end": 903
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im1_private_v2_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 919,
                    "end": 943
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im1_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 950,
                        "end": 964
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 965,
                        "end": 967
                      },
                      "optional": false,
                      "computed": false,
                      "start": 950,
                      "end": 967
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 946,
                    "end": 969
                  },
                  "definite": false,
                  "start": 919,
                  "end": 969
                }
              ],
              "declare": false,
              "start": 915,
              "end": 970
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 908,
            "end": 970
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im1_private_v3_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 986,
                    "end": 1010
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1013,
                      "end": 1027
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1028,
                      "end": 1030
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1013,
                    "end": 1030
                  },
                  "definite": false,
                  "start": 986,
                  "end": 1030
                }
              ],
              "declare": false,
              "start": 982,
              "end": 1031
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 975,
            "end": 1031
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im1_private_v4_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1047,
                    "end": 1071
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im1_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1074,
                        "end": 1088
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1089,
                        "end": 1091
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1074,
                      "end": 1091
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1074,
                    "end": 1093
                  },
                  "definite": false,
                  "start": 1047,
                  "end": 1093
                }
              ],
              "declare": false,
              "start": 1043,
              "end": 1094
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1036,
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
                  "name": "m1_im1_private_v1_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1103,
                  "end": 1128
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im1_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1131,
                    "end": 1145
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1146,
                    "end": 1148
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1131,
                  "end": 1148
                },
                "definite": false,
                "start": 1103,
                "end": 1148
              }
            ],
            "declare": false,
            "start": 1099,
            "end": 1149
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
                  "name": "m1_im1_private_v2_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1158,
                  "end": 1183
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1190,
                      "end": 1204
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1205,
                      "end": 1207
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1190,
                    "end": 1207
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 1186,
                  "end": 1209
                },
                "definite": false,
                "start": 1158,
                "end": 1209
              }
            ],
            "declare": false,
            "start": 1154,
            "end": 1210
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
                  "name": "m1_im1_private_v3_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1219,
                  "end": 1244
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im1_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1247,
                    "end": 1261
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1262,
                    "end": 1264
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1247,
                  "end": 1264
                },
                "definite": false,
                "start": 1219,
                "end": 1264
              }
            ],
            "declare": false,
            "start": 1215,
            "end": 1265
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
                  "name": "m1_im1_private_v4_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1274,
                  "end": 1299
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1302,
                      "end": 1316
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1317,
                      "end": 1319
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1302,
                    "end": 1319
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1302,
                  "end": 1321
                },
                "definite": false,
                "start": 1274,
                "end": 1321
              }
            ],
            "declare": false,
            "start": 1270,
            "end": 1322
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_im2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1336,
              "end": 1350
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_M2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1353,
              "end": 1366
            },
            "importKind": "value",
            "start": 1329,
            "end": 1367
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im2_private_v1_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1383,
                    "end": 1407
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1410,
                      "end": 1424
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1425,
                      "end": 1427
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1410,
                    "end": 1427
                  },
                  "definite": false,
                  "start": 1383,
                  "end": 1427
                }
              ],
              "declare": false,
              "start": 1379,
              "end": 1428
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1372,
            "end": 1428
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im2_private_v2_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1444,
                    "end": 1468
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1475,
                        "end": 1489
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1490,
                        "end": 1492
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1475,
                      "end": 1492
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1471,
                    "end": 1494
                  },
                  "definite": false,
                  "start": 1444,
                  "end": 1494
                }
              ],
              "declare": false,
              "start": 1440,
              "end": 1495
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1433,
            "end": 1495
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im2_private_v3_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1511,
                    "end": 1535
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1538,
                      "end": 1552
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1553,
                      "end": 1555
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1538,
                    "end": 1555
                  },
                  "definite": false,
                  "start": 1511,
                  "end": 1555
                }
              ],
              "declare": false,
              "start": 1507,
              "end": 1556
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1500,
            "end": 1556
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im2_private_v4_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1572,
                    "end": 1596
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1599,
                        "end": 1613
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1614,
                        "end": 1616
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1599,
                      "end": 1616
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1599,
                    "end": 1618
                  },
                  "definite": false,
                  "start": 1572,
                  "end": 1618
                }
              ],
              "declare": false,
              "start": 1568,
              "end": 1619
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1561,
            "end": 1619
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
                  "name": "m1_im2_private_v1_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1628,
                  "end": 1653
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1656,
                    "end": 1670
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1671,
                    "end": 1673
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1656,
                  "end": 1673
                },
                "definite": false,
                "start": 1628,
                "end": 1673
              }
            ],
            "declare": false,
            "start": 1624,
            "end": 1674
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
                  "name": "m1_im2_private_v2_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1683,
                  "end": 1708
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1715,
                      "end": 1729
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1730,
                      "end": 1732
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1715,
                    "end": 1732
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 1711,
                  "end": 1734
                },
                "definite": false,
                "start": 1683,
                "end": 1734
              }
            ],
            "declare": false,
            "start": 1679,
            "end": 1735
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
                  "name": "m1_im2_private_v3_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1744,
                  "end": 1769
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1772,
                    "end": 1786
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1787,
                    "end": 1789
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1772,
                  "end": 1789
                },
                "definite": false,
                "start": 1744,
                "end": 1789
              }
            ],
            "declare": false,
            "start": 1740,
            "end": 1790
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
                  "name": "m1_im2_private_v4_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1799,
                  "end": 1824
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1827,
                      "end": 1841
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1842,
                      "end": 1844
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1827,
                    "end": 1844
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1827,
                  "end": 1846
                },
                "definite": false,
                "start": 1799,
                "end": 1846
              }
            ],
            "declare": false,
            "start": 1795,
            "end": 1847
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_im1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2972,
                "end": 2985
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_M1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2988,
                "end": 3000
              },
              "importKind": "value",
              "start": 2965,
              "end": 3001
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2958,
            "end": 3001
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_im2_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 3020,
                "end": 3033
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_M2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3036,
                "end": 3049
              },
              "importKind": "value",
              "start": 3013,
              "end": 3050
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3006,
            "end": 3050
          }
        ],
        "start": 13,
        "end": 3175
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 3175
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_M1_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 3187,
        "end": 3200
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3220,
                "end": 3222
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 3223,
                "end": 3230
              },
              "abstract": false,
              "declare": false,
              "start": 3214,
              "end": 3230
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3207,
            "end": 3230
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3251,
                "end": 3253
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3277,
                        "end": 3279
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3273,
                      "end": 3279
                    },
                    "start": 3266,
                    "end": 3280
                  }
                ],
                "start": 3256,
                "end": 3286
              },
              "expression": false,
              "start": 3242,
              "end": 3286
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3235,
            "end": 3286
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3302,
                    "end": 3304
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3307,
                    "end": 3309
                  },
                  "definite": false,
                  "start": 3302,
                  "end": 3309
                }
              ],
              "declare": false,
              "start": 3298,
              "end": 3310
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3291,
            "end": 3310
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3330,
                          "end": 3332
                        },
                        "typeArguments": null,
                        "start": 3330,
                        "end": 3332
                      },
                      "start": 3328,
                      "end": 3332
                    },
                    "start": 3326,
                    "end": 3332
                  },
                  "init": null,
                  "definite": false,
                  "start": 3326,
                  "end": 3332
                }
              ],
              "declare": false,
              "start": 3322,
              "end": 3333
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3315,
            "end": 3333
          }
        ],
        "start": 3201,
        "end": 3335
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 3177,
      "end": 3335
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "glo_M2_public",
        "raw": "\"glo_M2_public\"",
        "start": 3352,
        "end": 3367
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3390,
                "end": 3392
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 3381,
              "end": 3395
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3374,
            "end": 3395
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3413,
                "end": 3415
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 3416,
                "end": 3423
              },
              "abstract": false,
              "declare": false,
              "start": 3407,
              "end": 3423
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3400,
            "end": 3423
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSConstructSignatureDeclaration",
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3453,
                                  "end": 3455
                                },
                                "typeArguments": null,
                                "start": 3453,
                                "end": 3455
                              },
                              "start": 3451,
                              "end": 3455
                            },
                            "start": 3445,
                            "end": 3456
                          }
                        ],
                        "start": 3443,
                        "end": 3458
                      },
                      "start": 3441,
                      "end": 3458
                    },
                    "start": 3439,
                    "end": 3458
                  },
                  "init": null,
                  "definite": false,
                  "start": 3439,
                  "end": 3458
                }
              ],
              "declare": false,
              "start": 3435,
              "end": 3459
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3428,
            "end": 3459
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3479,
                          "end": 3481
                        },
                        "typeArguments": null,
                        "start": 3479,
                        "end": 3481
                      },
                      "start": 3477,
                      "end": 3481
                    },
                    "start": 3475,
                    "end": 3481
                  },
                  "init": null,
                  "definite": false,
                  "start": 3475,
                  "end": 3481
                }
              ],
              "declare": false,
              "start": 3471,
              "end": 3482
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3464,
            "end": 3482
          }
        ],
        "start": 3368,
        "end": 3484
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 3337,
      "end": 3484
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "use_glo_M1_public",
        "raw": "\"use_glo_M1_public\"",
        "start": 3501,
        "end": 3520
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "use_glo_M1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 3534,
              "end": 3551
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_M1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 3554,
              "end": 3567
            },
            "importKind": "value",
            "start": 3527,
            "end": 3568
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "use_glo_M1_public_v1_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSConstructSignatureDeclaration",
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "use_glo_M1_public",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3623,
                                    "end": 3640
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3641,
                                    "end": 3643
                                  },
                                  "start": 3623,
                                  "end": 3643
                                },
                                "typeArguments": null,
                                "start": 3623,
                                "end": 3643
                              },
                              "start": 3621,
                              "end": 3643
                            },
                            "start": 3615,
                            "end": 3644
                          }
                        ],
                        "start": 3613,
                        "end": 3646
                      },
                      "start": 3611,
                      "end": 3646
                    },
                    "start": 3584,
                    "end": 3646
                  },
                  "init": null,
                  "definite": false,
                  "start": 3584,
                  "end": 3646
                }
              ],
              "declare": false,
              "start": 3580,
              "end": 3647
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3573,
            "end": 3647
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "use_glo_M1_public_v2_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "use_glo_M1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3699,
                          "end": 3716
                        },
                        "typeArguments": null,
                        "start": 3692,
                        "end": 3716
                      },
                      "start": 3690,
                      "end": 3716
                    },
                    "start": 3663,
                    "end": 3716
                  },
                  "init": null,
                  "definite": false,
                  "start": 3663,
                  "end": 3716
                }
              ],
              "declare": false,
              "start": 3659,
              "end": 3717
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3652,
            "end": 3717
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "use_glo_M1_public_v3_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "use_glo_M1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3767,
                                "end": 3784
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3785,
                                "end": 3787
                              },
                              "start": 3767,
                              "end": 3787
                            },
                            "typeArguments": null,
                            "start": 3767,
                            "end": 3787
                          },
                          "start": 3764,
                          "end": 3787
                        },
                        "start": 3762,
                        "end": 3787
                      },
                      "start": 3760,
                      "end": 3787
                    },
                    "start": 3733,
                    "end": 3787
                  },
                  "init": null,
                  "definite": false,
                  "start": 3733,
                  "end": 3787
                }
              ],
              "declare": false,
              "start": 3729,
              "end": 3788
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3722,
            "end": 3788
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
                  "name": "use_glo_M1_public_v1_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "use_glo_M1_public",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3837,
                                  "end": 3854
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3855,
                                  "end": 3857
                                },
                                "start": 3837,
                                "end": 3857
                              },
                              "typeArguments": null,
                              "start": 3837,
                              "end": 3857
                            },
                            "start": 3835,
                            "end": 3857
                          },
                          "start": 3829,
                          "end": 3858
                        }
                      ],
                      "start": 3827,
                      "end": 3860
                    },
                    "start": 3825,
                    "end": 3860
                  },
                  "start": 3797,
                  "end": 3860
                },
                "init": null,
                "definite": false,
                "start": 3797,
                "end": 3860
              }
            ],
            "declare": false,
            "start": 3793,
            "end": 3861
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
                  "name": "use_glo_M1_public_v2_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "use_glo_M1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3907,
                        "end": 3924
                      },
                      "typeArguments": null,
                      "start": 3900,
                      "end": 3924
                    },
                    "start": 3898,
                    "end": 3924
                  },
                  "start": 3870,
                  "end": 3924
                },
                "init": null,
                "definite": false,
                "start": 3870,
                "end": 3924
              }
            ],
            "declare": false,
            "start": 3866,
            "end": 3925
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
                  "name": "use_glo_M1_public_v3_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "use_glo_M1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3970,
                              "end": 3987
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3988,
                              "end": 3990
                            },
                            "start": 3970,
                            "end": 3990
                          },
                          "typeArguments": null,
                          "start": 3970,
                          "end": 3990
                        },
                        "start": 3967,
                        "end": 3990
                      },
                      "start": 3964,
                      "end": 3990
                    },
                    "start": 3962,
                    "end": 3990
                  },
                  "start": 3934,
                  "end": 3990
                },
                "init": null,
                "definite": false,
                "start": 3934,
                "end": 3990
              }
            ],
            "declare": false,
            "start": 3930,
            "end": 3991
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "use_glo_M2_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 4004,
              "end": 4021
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "glo_M2_public",
                "raw": "\"glo_M2_public\"",
                "start": 4032,
                "end": 4047
              },
              "start": 4024,
              "end": 4048
            },
            "importKind": "value",
            "start": 3997,
            "end": 4049
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "use_glo_M2_public_v1_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSConstructSignatureDeclaration",
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "use_glo_M2_public",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4104,
                                    "end": 4121
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4122,
                                    "end": 4124
                                  },
                                  "start": 4104,
                                  "end": 4124
                                },
                                "typeArguments": null,
                                "start": 4104,
                                "end": 4124
                              },
                              "start": 4102,
                              "end": 4124
                            },
                            "start": 4096,
                            "end": 4125
                          }
                        ],
                        "start": 4094,
                        "end": 4127
                      },
                      "start": 4092,
                      "end": 4127
                    },
                    "start": 4065,
                    "end": 4127
                  },
                  "init": null,
                  "definite": false,
                  "start": 4065,
                  "end": 4127
                }
              ],
              "declare": false,
              "start": 4061,
              "end": 4128
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4054,
            "end": 4128
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "use_glo_M2_public_v2_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "use_glo_M2_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4180,
                          "end": 4197
                        },
                        "typeArguments": null,
                        "start": 4173,
                        "end": 4197
                      },
                      "start": 4171,
                      "end": 4197
                    },
                    "start": 4144,
                    "end": 4197
                  },
                  "init": null,
                  "definite": false,
                  "start": 4144,
                  "end": 4197
                }
              ],
              "declare": false,
              "start": 4140,
              "end": 4198
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4133,
            "end": 4198
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "use_glo_M2_public_v3_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "use_glo_M2_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4249,
                                "end": 4266
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4267,
                                "end": 4269
                              },
                              "start": 4249,
                              "end": 4269
                            },
                            "typeArguments": null,
                            "start": 4249,
                            "end": 4269
                          },
                          "start": 4246,
                          "end": 4269
                        },
                        "start": 4243,
                        "end": 4269
                      },
                      "start": 4241,
                      "end": 4269
                    },
                    "start": 4214,
                    "end": 4269
                  },
                  "init": null,
                  "definite": false,
                  "start": 4214,
                  "end": 4269
                }
              ],
              "declare": false,
              "start": 4210,
              "end": 4270
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4203,
            "end": 4270
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
                  "name": "use_glo_M2_public_v1_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "use_glo_M2_public",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4319,
                                  "end": 4336
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4337,
                                  "end": 4339
                                },
                                "start": 4319,
                                "end": 4339
                              },
                              "typeArguments": null,
                              "start": 4319,
                              "end": 4339
                            },
                            "start": 4317,
                            "end": 4339
                          },
                          "start": 4311,
                          "end": 4340
                        }
                      ],
                      "start": 4309,
                      "end": 4342
                    },
                    "start": 4307,
                    "end": 4342
                  },
                  "start": 4279,
                  "end": 4342
                },
                "init": null,
                "definite": false,
                "start": 4279,
                "end": 4342
              }
            ],
            "declare": false,
            "start": 4275,
            "end": 4343
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
                  "name": "use_glo_M2_public_v2_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "use_glo_M2_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4389,
                        "end": 4406
                      },
                      "typeArguments": null,
                      "start": 4382,
                      "end": 4406
                    },
                    "start": 4380,
                    "end": 4406
                  },
                  "start": 4352,
                  "end": 4406
                },
                "init": null,
                "definite": false,
                "start": 4352,
                "end": 4406
              }
            ],
            "declare": false,
            "start": 4348,
            "end": 4407
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
                  "name": "use_glo_M2_public_v3_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "use_glo_M2_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4452,
                              "end": 4469
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4470,
                              "end": 4472
                            },
                            "start": 4452,
                            "end": 4472
                          },
                          "typeArguments": null,
                          "start": 4452,
                          "end": 4472
                        },
                        "start": 4449,
                        "end": 4472
                      },
                      "start": 4446,
                      "end": 4472
                    },
                    "start": 4444,
                    "end": 4472
                  },
                  "start": 4416,
                  "end": 4472
                },
                "init": null,
                "definite": false,
                "start": 4416,
                "end": 4472
              }
            ],
            "declare": false,
            "start": 4412,
            "end": 4473
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4489,
              "end": 4491
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSImportEqualsDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nonerrorImport",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4566,
                    "end": 4580
                  },
                  "moduleReference": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "glo_M1_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4583,
                    "end": 4596
                  },
                  "importKind": "value",
                  "start": 4559,
                  "end": 4597
                },
                {
                  "type": "TSModuleDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4617,
                    "end": 4619
                  },
                  "body": {
                    "type": "TSModuleBlock",
                    "body": [
                      {
                        "type": "TSImportEqualsDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m5_nonerrorImport",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4705,
                          "end": 4722
                        },
                        "moduleReference": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "glo_M1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4725,
                          "end": 4738
                        },
                        "importKind": "value",
                        "start": 4698,
                        "end": 4739
                      }
                    ],
                    "start": 4620,
                    "end": 4749
                  },
                  "kind": "namespace",
                  "declare": false,
                  "global": false,
                  "start": 4607,
                  "end": 4749
                }
              ],
              "start": 4492,
              "end": 4755
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 4479,
            "end": 4755
          }
        ],
        "start": 3521,
        "end": 4757
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 3486,
      "end": 4757
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "anotherParseError",
        "raw": "\"anotherParseError\"",
        "start": 4774,
        "end": 4793
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4810,
              "end": 4812
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "start": 4813,
              "end": 4865
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 4800,
            "end": 4865
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4881,
              "end": 4883
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "start": 4884,
              "end": 4929
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 4871,
            "end": 4929
          }
        ],
        "start": 4794,
        "end": 4961
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 4759,
      "end": 4961
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4973,
        "end": 4975
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m4",
              "optional": false,
              "typeAnnotation": null,
              "start": 5040,
              "end": 5042
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
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
                        "typeAnnotation": null,
                        "start": 5057,
                        "end": 5058
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 5061,
                        "end": 5063
                      },
                      "definite": false,
                      "start": 5057,
                      "end": 5063
                    }
                  ],
                  "declare": false,
                  "start": 5053,
                  "end": 5064
                }
              ],
              "start": 5043,
              "end": 5122
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 5030,
            "end": 5122
          }
        ],
        "start": 4976,
        "end": 5125
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 4963,
      "end": 5125
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 5125
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
    "type": "Identifier",
    "value": "namespace",
    "start": 26,
    "end": 35,
    "range": [
      26,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_M1_public",
    "start": 36,
    "end": 48,
    "range": [
      36,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 59,
    "end": 65,
    "range": [
      59,
      65
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 66,
    "end": 71,
    "range": [
      66,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 72,
    "end": 74,
    "range": [
      72,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 95,
    "end": 101,
    "range": [
      95,
      101
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 102,
    "end": 110,
    "range": [
      102,
      110
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 111,
    "end": 113,
    "range": [
      111,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 130,
    "end": 136,
    "range": [
      130,
      136
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 137,
    "end": 140,
    "range": [
      137,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 141,
    "end": 143,
    "range": [
      141,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 163,
    "end": 169,
    "range": [
      163,
      169
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 170,
    "end": 173,
    "range": [
      170,
      173
    ]
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 174,
    "end": 176,
    "range": [
      174,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 179,
    "end": 181,
    "range": [
      179,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 191,
    "end": 197,
    "range": [
      191,
      197
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 198,
    "end": 201,
    "range": [
      198,
      201
    ]
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 202,
    "end": 204,
    "range": [
      202,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 206,
    "end": 208,
    "range": [
      206,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 221,
    "end": 230,
    "range": [
      221,
      230
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_M2_private",
    "start": 231,
    "end": 244,
    "range": [
      231,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 255,
    "end": 261,
    "range": [
      255,
      261
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 262,
    "end": 267,
    "range": [
      262,
      267
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 268,
    "end": 270,
    "range": [
      268,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 291,
    "end": 297,
    "range": [
      291,
      297
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 298,
    "end": 306,
    "range": [
      298,
      306
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 307,
    "end": 309,
    "range": [
      307,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 326,
    "end": 332,
    "range": [
      326,
      332
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 333,
    "end": 336,
    "range": [
      333,
      336
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 337,
    "end": 339,
    "range": [
      337,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 359,
    "end": 365,
    "range": [
      359,
      365
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 366,
    "end": 369,
    "range": [
      366,
      369
    ]
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 370,
    "end": 372,
    "range": [
      370,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 375,
    "end": 377,
    "range": [
      375,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 387,
    "end": 393,
    "range": [
      387,
      393
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 394,
    "end": 397,
    "range": [
      394,
      397
    ]
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 398,
    "end": 400,
    "range": [
      398,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 402,
    "end": 404,
    "range": [
      402,
      404
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 805,
    "end": 811,
    "range": [
      805,
      811
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 812,
    "end": 826,
    "range": [
      812,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 827,
    "end": 828,
    "range": [
      827,
      828
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_M1_public",
    "start": 829,
    "end": 841,
    "range": [
      829,
      841
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 841,
    "end": 842,
    "range": [
      841,
      842
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 847,
    "end": 853,
    "range": [
      847,
      853
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 854,
    "end": 857,
    "range": [
      854,
      857
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v1_public",
    "start": 858,
    "end": 882,
    "range": [
      858,
      882
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 883,
    "end": 884,
    "range": [
      883,
      884
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 885,
    "end": 899,
    "range": [
      885,
      899
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 899,
    "end": 900,
    "range": [
      899,
      900
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 900,
    "end": 902,
    "range": [
      900,
      902
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 902,
    "end": 903,
    "range": [
      902,
      903
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 908,
    "end": 914,
    "range": [
      908,
      914
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 915,
    "end": 918,
    "range": [
      915,
      918
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v2_public",
    "start": 919,
    "end": 943,
    "range": [
      919,
      943
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 946,
    "end": 949,
    "range": [
      946,
      949
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 950,
    "end": 964,
    "range": [
      950,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 964,
    "end": 965,
    "range": [
      964,
      965
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 965,
    "end": 967,
    "range": [
      965,
      967
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 967,
    "end": 968,
    "range": [
      967,
      968
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 968,
    "end": 969,
    "range": [
      968,
      969
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 975,
    "end": 981,
    "range": [
      975,
      981
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 982,
    "end": 985,
    "range": [
      982,
      985
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v3_public",
    "start": 986,
    "end": 1010,
    "range": [
      986,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1011,
    "end": 1012,
    "range": [
      1011,
      1012
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 1013,
    "end": 1027,
    "range": [
      1013,
      1027
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1027,
    "end": 1028,
    "range": [
      1027,
      1028
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1028,
    "end": 1030,
    "range": [
      1028,
      1030
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1030,
    "end": 1031,
    "range": [
      1030,
      1031
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1036,
    "end": 1042,
    "range": [
      1036,
      1042
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1043,
    "end": 1046,
    "range": [
      1043,
      1046
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v4_public",
    "start": 1047,
    "end": 1071,
    "range": [
      1047,
      1071
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1072,
    "end": 1073,
    "range": [
      1072,
      1073
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 1074,
    "end": 1088,
    "range": [
      1074,
      1088
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1089,
    "end": 1091,
    "range": [
      1089,
      1091
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1091,
    "end": 1092,
    "range": [
      1091,
      1092
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1092,
    "end": 1093,
    "range": [
      1092,
      1093
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1093,
    "end": 1094,
    "range": [
      1093,
      1094
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1099,
    "end": 1102,
    "range": [
      1099,
      1102
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v1_private",
    "start": 1103,
    "end": 1128,
    "range": [
      1103,
      1128
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1129,
    "end": 1130,
    "range": [
      1129,
      1130
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 1131,
    "end": 1145,
    "range": [
      1131,
      1145
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1145,
    "end": 1146,
    "range": [
      1145,
      1146
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1146,
    "end": 1148,
    "range": [
      1146,
      1148
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1148,
    "end": 1149,
    "range": [
      1148,
      1149
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1154,
    "end": 1157,
    "range": [
      1154,
      1157
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v2_private",
    "start": 1158,
    "end": 1183,
    "range": [
      1158,
      1183
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1184,
    "end": 1185,
    "range": [
      1184,
      1185
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1186,
    "end": 1189,
    "range": [
      1186,
      1189
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 1190,
    "end": 1204,
    "range": [
      1190,
      1204
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1204,
    "end": 1205,
    "range": [
      1204,
      1205
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1205,
    "end": 1207,
    "range": [
      1205,
      1207
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1207,
    "end": 1208,
    "range": [
      1207,
      1208
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1208,
    "end": 1209,
    "range": [
      1208,
      1209
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1209,
    "end": 1210,
    "range": [
      1209,
      1210
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1215,
    "end": 1218,
    "range": [
      1215,
      1218
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v3_private",
    "start": 1219,
    "end": 1244,
    "range": [
      1219,
      1244
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1245,
    "end": 1246,
    "range": [
      1245,
      1246
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 1247,
    "end": 1261,
    "range": [
      1247,
      1261
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1261,
    "end": 1262,
    "range": [
      1261,
      1262
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1262,
    "end": 1264,
    "range": [
      1262,
      1264
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1264,
    "end": 1265,
    "range": [
      1264,
      1265
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1270,
    "end": 1273,
    "range": [
      1270,
      1273
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v4_private",
    "start": 1274,
    "end": 1299,
    "range": [
      1274,
      1299
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1300,
    "end": 1301,
    "range": [
      1300,
      1301
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 1302,
    "end": 1316,
    "range": [
      1302,
      1316
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1316,
    "end": 1317,
    "range": [
      1316,
      1317
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1317,
    "end": 1319,
    "range": [
      1317,
      1319
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1319,
    "end": 1320,
    "range": [
      1319,
      1320
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1320,
    "end": 1321,
    "range": [
      1320,
      1321
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1321,
    "end": 1322,
    "range": [
      1321,
      1322
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1329,
    "end": 1335,
    "range": [
      1329,
      1335
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 1336,
    "end": 1350,
    "range": [
      1336,
      1350
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1351,
    "end": 1352,
    "range": [
      1351,
      1352
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_M2_private",
    "start": 1353,
    "end": 1366,
    "range": [
      1353,
      1366
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1366,
    "end": 1367,
    "range": [
      1366,
      1367
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1372,
    "end": 1378,
    "range": [
      1372,
      1378
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1379,
    "end": 1382,
    "range": [
      1379,
      1382
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v1_public",
    "start": 1383,
    "end": 1407,
    "range": [
      1383,
      1407
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1408,
    "end": 1409,
    "range": [
      1408,
      1409
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 1410,
    "end": 1424,
    "range": [
      1410,
      1424
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1424,
    "end": 1425,
    "range": [
      1424,
      1425
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1425,
    "end": 1427,
    "range": [
      1425,
      1427
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1427,
    "end": 1428,
    "range": [
      1427,
      1428
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1433,
    "end": 1439,
    "range": [
      1433,
      1439
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1440,
    "end": 1443,
    "range": [
      1440,
      1443
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v2_public",
    "start": 1444,
    "end": 1468,
    "range": [
      1444,
      1468
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1469,
    "end": 1470,
    "range": [
      1469,
      1470
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1471,
    "end": 1474,
    "range": [
      1471,
      1474
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 1475,
    "end": 1489,
    "range": [
      1475,
      1489
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1489,
    "end": 1490,
    "range": [
      1489,
      1490
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1490,
    "end": 1492,
    "range": [
      1490,
      1492
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1492,
    "end": 1493,
    "range": [
      1492,
      1493
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1493,
    "end": 1494,
    "range": [
      1493,
      1494
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1494,
    "end": 1495,
    "range": [
      1494,
      1495
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1500,
    "end": 1506,
    "range": [
      1500,
      1506
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1507,
    "end": 1510,
    "range": [
      1507,
      1510
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v3_public",
    "start": 1511,
    "end": 1535,
    "range": [
      1511,
      1535
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1536,
    "end": 1537,
    "range": [
      1536,
      1537
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 1538,
    "end": 1552,
    "range": [
      1538,
      1552
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1552,
    "end": 1553,
    "range": [
      1552,
      1553
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1553,
    "end": 1555,
    "range": [
      1553,
      1555
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1555,
    "end": 1556,
    "range": [
      1555,
      1556
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1561,
    "end": 1567,
    "range": [
      1561,
      1567
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1568,
    "end": 1571,
    "range": [
      1568,
      1571
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v4_public",
    "start": 1572,
    "end": 1596,
    "range": [
      1572,
      1596
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1597,
    "end": 1598,
    "range": [
      1597,
      1598
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 1599,
    "end": 1613,
    "range": [
      1599,
      1613
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1613,
    "end": 1614,
    "range": [
      1613,
      1614
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1614,
    "end": 1616,
    "range": [
      1614,
      1616
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1616,
    "end": 1617,
    "range": [
      1616,
      1617
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1617,
    "end": 1618,
    "range": [
      1617,
      1618
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1618,
    "end": 1619,
    "range": [
      1618,
      1619
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1624,
    "end": 1627,
    "range": [
      1624,
      1627
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v1_private",
    "start": 1628,
    "end": 1653,
    "range": [
      1628,
      1653
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1654,
    "end": 1655,
    "range": [
      1654,
      1655
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 1656,
    "end": 1670,
    "range": [
      1656,
      1670
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1670,
    "end": 1671,
    "range": [
      1670,
      1671
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1671,
    "end": 1673,
    "range": [
      1671,
      1673
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1673,
    "end": 1674,
    "range": [
      1673,
      1674
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1679,
    "end": 1682,
    "range": [
      1679,
      1682
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v2_private",
    "start": 1683,
    "end": 1708,
    "range": [
      1683,
      1708
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1709,
    "end": 1710,
    "range": [
      1709,
      1710
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1711,
    "end": 1714,
    "range": [
      1711,
      1714
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 1715,
    "end": 1729,
    "range": [
      1715,
      1729
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1729,
    "end": 1730,
    "range": [
      1729,
      1730
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1730,
    "end": 1732,
    "range": [
      1730,
      1732
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1732,
    "end": 1733,
    "range": [
      1732,
      1733
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1733,
    "end": 1734,
    "range": [
      1733,
      1734
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1734,
    "end": 1735,
    "range": [
      1734,
      1735
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1740,
    "end": 1743,
    "range": [
      1740,
      1743
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v3_private",
    "start": 1744,
    "end": 1769,
    "range": [
      1744,
      1769
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1770,
    "end": 1771,
    "range": [
      1770,
      1771
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 1772,
    "end": 1786,
    "range": [
      1772,
      1786
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1786,
    "end": 1787,
    "range": [
      1786,
      1787
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1787,
    "end": 1789,
    "range": [
      1787,
      1789
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1789,
    "end": 1790,
    "range": [
      1789,
      1790
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1795,
    "end": 1798,
    "range": [
      1795,
      1798
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v4_private",
    "start": 1799,
    "end": 1824,
    "range": [
      1799,
      1824
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1825,
    "end": 1826,
    "range": [
      1825,
      1826
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 1827,
    "end": 1841,
    "range": [
      1827,
      1841
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1841,
    "end": 1842,
    "range": [
      1841,
      1842
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1842,
    "end": 1844,
    "range": [
      1842,
      1844
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1844,
    "end": 1845,
    "range": [
      1844,
      1845
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1845,
    "end": 1846,
    "range": [
      1845,
      1846
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1846,
    "end": 1847,
    "range": [
      1846,
      1847
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2958,
    "end": 2964,
    "range": [
      2958,
      2964
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2965,
    "end": 2971,
    "range": [
      2965,
      2971
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im1_public",
    "start": 2972,
    "end": 2985,
    "range": [
      2972,
      2985
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2986,
    "end": 2987,
    "range": [
      2986,
      2987
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_M1_public",
    "start": 2988,
    "end": 3000,
    "range": [
      2988,
      3000
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3000,
    "end": 3001,
    "range": [
      3000,
      3001
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3006,
    "end": 3012,
    "range": [
      3006,
      3012
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 3013,
    "end": 3019,
    "range": [
      3013,
      3019
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_im2_public",
    "start": 3020,
    "end": 3033,
    "range": [
      3020,
      3033
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3034,
    "end": 3035,
    "range": [
      3034,
      3035
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_M2_private",
    "start": 3036,
    "end": 3049,
    "range": [
      3036,
      3049
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3049,
    "end": 3050,
    "range": [
      3049,
      3050
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3174,
    "end": 3175,
    "range": [
      3174,
      3175
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 3177,
    "end": 3186,
    "range": [
      3177,
      3186
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_M1_public",
    "start": 3187,
    "end": 3200,
    "range": [
      3187,
      3200
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3201,
    "end": 3202,
    "range": [
      3201,
      3202
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3207,
    "end": 3213,
    "range": [
      3207,
      3213
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3214,
    "end": 3219,
    "range": [
      3214,
      3219
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3220,
    "end": 3222,
    "range": [
      3220,
      3222
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3223,
    "end": 3224,
    "range": [
      3223,
      3224
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3229,
    "end": 3230,
    "range": [
      3229,
      3230
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3235,
    "end": 3241,
    "range": [
      3235,
      3241
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3242,
    "end": 3250,
    "range": [
      3242,
      3250
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 3251,
    "end": 3253,
    "range": [
      3251,
      3253
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3253,
    "end": 3254,
    "range": [
      3253,
      3254
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3254,
    "end": 3255,
    "range": [
      3254,
      3255
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3256,
    "end": 3257,
    "range": [
      3256,
      3257
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3266,
    "end": 3272,
    "range": [
      3266,
      3272
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3273,
    "end": 3276,
    "range": [
      3273,
      3276
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3277,
    "end": 3279,
    "range": [
      3277,
      3279
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3279,
    "end": 3280,
    "range": [
      3279,
      3280
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3285,
    "end": 3286,
    "range": [
      3285,
      3286
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3291,
    "end": 3297,
    "range": [
      3291,
      3297
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3298,
    "end": 3301,
    "range": [
      3298,
      3301
    ]
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 3302,
    "end": 3304,
    "range": [
      3302,
      3304
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3305,
    "end": 3306,
    "range": [
      3305,
      3306
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3307,
    "end": 3309,
    "range": [
      3307,
      3309
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3309,
    "end": 3310,
    "range": [
      3309,
      3310
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3315,
    "end": 3321,
    "range": [
      3315,
      3321
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3322,
    "end": 3325,
    "range": [
      3322,
      3325
    ]
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 3326,
    "end": 3328,
    "range": [
      3326,
      3328
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3328,
    "end": 3329,
    "range": [
      3328,
      3329
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3330,
    "end": 3332,
    "range": [
      3330,
      3332
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3332,
    "end": 3333,
    "range": [
      3332,
      3333
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3334,
    "end": 3335,
    "range": [
      3334,
      3335
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3337,
    "end": 3344,
    "range": [
      3337,
      3344
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 3345,
    "end": 3351,
    "range": [
      3345,
      3351
    ]
  },
  {
    "type": "String",
    "value": "\"glo_M2_public\"",
    "start": 3352,
    "end": 3367,
    "range": [
      3352,
      3367
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3368,
    "end": 3369,
    "range": [
      3368,
      3369
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3374,
    "end": 3380,
    "range": [
      3374,
      3380
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3381,
    "end": 3389,
    "range": [
      3381,
      3389
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 3390,
    "end": 3392,
    "range": [
      3390,
      3392
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3392,
    "end": 3393,
    "range": [
      3392,
      3393
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3393,
    "end": 3394,
    "range": [
      3393,
      3394
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3394,
    "end": 3395,
    "range": [
      3394,
      3395
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3400,
    "end": 3406,
    "range": [
      3400,
      3406
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3407,
    "end": 3412,
    "range": [
      3407,
      3412
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3413,
    "end": 3415,
    "range": [
      3413,
      3415
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3416,
    "end": 3417,
    "range": [
      3416,
      3417
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3422,
    "end": 3423,
    "range": [
      3422,
      3423
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3428,
    "end": 3434,
    "range": [
      3428,
      3434
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3435,
    "end": 3438,
    "range": [
      3435,
      3438
    ]
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 3439,
    "end": 3441,
    "range": [
      3439,
      3441
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3441,
    "end": 3442,
    "range": [
      3441,
      3442
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3443,
    "end": 3444,
    "range": [
      3443,
      3444
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3445,
    "end": 3448,
    "range": [
      3445,
      3448
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3449,
    "end": 3450,
    "range": [
      3449,
      3450
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3450,
    "end": 3451,
    "range": [
      3450,
      3451
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3451,
    "end": 3452,
    "range": [
      3451,
      3452
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3453,
    "end": 3455,
    "range": [
      3453,
      3455
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3455,
    "end": 3456,
    "range": [
      3455,
      3456
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3457,
    "end": 3458,
    "range": [
      3457,
      3458
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3458,
    "end": 3459,
    "range": [
      3458,
      3459
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3464,
    "end": 3470,
    "range": [
      3464,
      3470
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3471,
    "end": 3474,
    "range": [
      3471,
      3474
    ]
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 3475,
    "end": 3477,
    "range": [
      3475,
      3477
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3477,
    "end": 3478,
    "range": [
      3477,
      3478
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3479,
    "end": 3481,
    "range": [
      3479,
      3481
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3481,
    "end": 3482,
    "range": [
      3481,
      3482
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3483,
    "end": 3484,
    "range": [
      3483,
      3484
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3486,
    "end": 3493,
    "range": [
      3486,
      3493
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 3494,
    "end": 3500,
    "range": [
      3494,
      3500
    ]
  },
  {
    "type": "String",
    "value": "\"use_glo_M1_public\"",
    "start": 3501,
    "end": 3520,
    "range": [
      3501,
      3520
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3521,
    "end": 3522,
    "range": [
      3521,
      3522
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 3527,
    "end": 3533,
    "range": [
      3527,
      3533
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public",
    "start": 3534,
    "end": 3551,
    "range": [
      3534,
      3551
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3552,
    "end": 3553,
    "range": [
      3552,
      3553
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_M1_public",
    "start": 3554,
    "end": 3567,
    "range": [
      3554,
      3567
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3567,
    "end": 3568,
    "range": [
      3567,
      3568
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3573,
    "end": 3579,
    "range": [
      3573,
      3579
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3580,
    "end": 3583,
    "range": [
      3580,
      3583
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public_v1_public",
    "start": 3584,
    "end": 3611,
    "range": [
      3584,
      3611
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3611,
    "end": 3612,
    "range": [
      3611,
      3612
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3613,
    "end": 3614,
    "range": [
      3613,
      3614
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3615,
    "end": 3618,
    "range": [
      3615,
      3618
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3619,
    "end": 3620,
    "range": [
      3619,
      3620
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3620,
    "end": 3621,
    "range": [
      3620,
      3621
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3621,
    "end": 3622,
    "range": [
      3621,
      3622
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public",
    "start": 3623,
    "end": 3640,
    "range": [
      3623,
      3640
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3640,
    "end": 3641,
    "range": [
      3640,
      3641
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3641,
    "end": 3643,
    "range": [
      3641,
      3643
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3643,
    "end": 3644,
    "range": [
      3643,
      3644
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3645,
    "end": 3646,
    "range": [
      3645,
      3646
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3646,
    "end": 3647,
    "range": [
      3646,
      3647
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3652,
    "end": 3658,
    "range": [
      3652,
      3658
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3659,
    "end": 3662,
    "range": [
      3659,
      3662
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public_v2_public",
    "start": 3663,
    "end": 3690,
    "range": [
      3663,
      3690
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3690,
    "end": 3691,
    "range": [
      3690,
      3691
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3692,
    "end": 3698,
    "range": [
      3692,
      3698
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public",
    "start": 3699,
    "end": 3716,
    "range": [
      3699,
      3716
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3716,
    "end": 3717,
    "range": [
      3716,
      3717
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3722,
    "end": 3728,
    "range": [
      3722,
      3728
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3729,
    "end": 3732,
    "range": [
      3729,
      3732
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public_v3_public",
    "start": 3733,
    "end": 3760,
    "range": [
      3733,
      3760
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3760,
    "end": 3761,
    "range": [
      3760,
      3761
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3762,
    "end": 3763,
    "range": [
      3762,
      3763
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3763,
    "end": 3764,
    "range": [
      3763,
      3764
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3764,
    "end": 3766,
    "range": [
      3764,
      3766
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public",
    "start": 3767,
    "end": 3784,
    "range": [
      3767,
      3784
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3784,
    "end": 3785,
    "range": [
      3784,
      3785
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3785,
    "end": 3787,
    "range": [
      3785,
      3787
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3787,
    "end": 3788,
    "range": [
      3787,
      3788
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3793,
    "end": 3796,
    "range": [
      3793,
      3796
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public_v1_private",
    "start": 3797,
    "end": 3825,
    "range": [
      3797,
      3825
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3825,
    "end": 3826,
    "range": [
      3825,
      3826
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3827,
    "end": 3828,
    "range": [
      3827,
      3828
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3829,
    "end": 3832,
    "range": [
      3829,
      3832
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3833,
    "end": 3834,
    "range": [
      3833,
      3834
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3834,
    "end": 3835,
    "range": [
      3834,
      3835
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3835,
    "end": 3836,
    "range": [
      3835,
      3836
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public",
    "start": 3837,
    "end": 3854,
    "range": [
      3837,
      3854
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3854,
    "end": 3855,
    "range": [
      3854,
      3855
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3855,
    "end": 3857,
    "range": [
      3855,
      3857
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3857,
    "end": 3858,
    "range": [
      3857,
      3858
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3859,
    "end": 3860,
    "range": [
      3859,
      3860
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3860,
    "end": 3861,
    "range": [
      3860,
      3861
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3866,
    "end": 3869,
    "range": [
      3866,
      3869
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public_v2_private",
    "start": 3870,
    "end": 3898,
    "range": [
      3870,
      3898
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3898,
    "end": 3899,
    "range": [
      3898,
      3899
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3900,
    "end": 3906,
    "range": [
      3900,
      3906
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public",
    "start": 3907,
    "end": 3924,
    "range": [
      3907,
      3924
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3924,
    "end": 3925,
    "range": [
      3924,
      3925
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3930,
    "end": 3933,
    "range": [
      3930,
      3933
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public_v3_private",
    "start": 3934,
    "end": 3962,
    "range": [
      3934,
      3962
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3962,
    "end": 3963,
    "range": [
      3962,
      3963
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3964,
    "end": 3965,
    "range": [
      3964,
      3965
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3965,
    "end": 3966,
    "range": [
      3965,
      3966
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3967,
    "end": 3969,
    "range": [
      3967,
      3969
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public",
    "start": 3970,
    "end": 3987,
    "range": [
      3970,
      3987
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3987,
    "end": 3988,
    "range": [
      3987,
      3988
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3988,
    "end": 3990,
    "range": [
      3988,
      3990
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3990,
    "end": 3991,
    "range": [
      3990,
      3991
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 3997,
    "end": 4003,
    "range": [
      3997,
      4003
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public",
    "start": 4004,
    "end": 4021,
    "range": [
      4004,
      4021
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4022,
    "end": 4023,
    "range": [
      4022,
      4023
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 4024,
    "end": 4031,
    "range": [
      4024,
      4031
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4031,
    "end": 4032,
    "range": [
      4031,
      4032
    ]
  },
  {
    "type": "String",
    "value": "\"glo_M2_public\"",
    "start": 4032,
    "end": 4047,
    "range": [
      4032,
      4047
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4047,
    "end": 4048,
    "range": [
      4047,
      4048
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4048,
    "end": 4049,
    "range": [
      4048,
      4049
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4054,
    "end": 4060,
    "range": [
      4054,
      4060
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4061,
    "end": 4064,
    "range": [
      4061,
      4064
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public_v1_public",
    "start": 4065,
    "end": 4092,
    "range": [
      4065,
      4092
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4092,
    "end": 4093,
    "range": [
      4092,
      4093
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4094,
    "end": 4095,
    "range": [
      4094,
      4095
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4096,
    "end": 4099,
    "range": [
      4096,
      4099
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4100,
    "end": 4101,
    "range": [
      4100,
      4101
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4101,
    "end": 4102,
    "range": [
      4101,
      4102
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4102,
    "end": 4103,
    "range": [
      4102,
      4103
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public",
    "start": 4104,
    "end": 4121,
    "range": [
      4104,
      4121
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4121,
    "end": 4122,
    "range": [
      4121,
      4122
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4122,
    "end": 4124,
    "range": [
      4122,
      4124
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4124,
    "end": 4125,
    "range": [
      4124,
      4125
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4126,
    "end": 4127,
    "range": [
      4126,
      4127
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4127,
    "end": 4128,
    "range": [
      4127,
      4128
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4133,
    "end": 4139,
    "range": [
      4133,
      4139
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4140,
    "end": 4143,
    "range": [
      4140,
      4143
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public_v2_public",
    "start": 4144,
    "end": 4171,
    "range": [
      4144,
      4171
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4171,
    "end": 4172,
    "range": [
      4171,
      4172
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4173,
    "end": 4179,
    "range": [
      4173,
      4179
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public",
    "start": 4180,
    "end": 4197,
    "range": [
      4180,
      4197
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4197,
    "end": 4198,
    "range": [
      4197,
      4198
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4203,
    "end": 4209,
    "range": [
      4203,
      4209
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4210,
    "end": 4213,
    "range": [
      4210,
      4213
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public_v3_public",
    "start": 4214,
    "end": 4241,
    "range": [
      4214,
      4241
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4241,
    "end": 4242,
    "range": [
      4241,
      4242
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4243,
    "end": 4244,
    "range": [
      4243,
      4244
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4244,
    "end": 4245,
    "range": [
      4244,
      4245
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4246,
    "end": 4248,
    "range": [
      4246,
      4248
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public",
    "start": 4249,
    "end": 4266,
    "range": [
      4249,
      4266
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4266,
    "end": 4267,
    "range": [
      4266,
      4267
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4267,
    "end": 4269,
    "range": [
      4267,
      4269
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4269,
    "end": 4270,
    "range": [
      4269,
      4270
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4275,
    "end": 4278,
    "range": [
      4275,
      4278
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public_v1_private",
    "start": 4279,
    "end": 4307,
    "range": [
      4279,
      4307
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4307,
    "end": 4308,
    "range": [
      4307,
      4308
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4309,
    "end": 4310,
    "range": [
      4309,
      4310
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4311,
    "end": 4314,
    "range": [
      4311,
      4314
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4315,
    "end": 4316,
    "range": [
      4315,
      4316
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4316,
    "end": 4317,
    "range": [
      4316,
      4317
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4317,
    "end": 4318,
    "range": [
      4317,
      4318
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public",
    "start": 4319,
    "end": 4336,
    "range": [
      4319,
      4336
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4336,
    "end": 4337,
    "range": [
      4336,
      4337
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4337,
    "end": 4339,
    "range": [
      4337,
      4339
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4339,
    "end": 4340,
    "range": [
      4339,
      4340
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4341,
    "end": 4342,
    "range": [
      4341,
      4342
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4342,
    "end": 4343,
    "range": [
      4342,
      4343
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4348,
    "end": 4351,
    "range": [
      4348,
      4351
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public_v2_private",
    "start": 4352,
    "end": 4380,
    "range": [
      4352,
      4380
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4380,
    "end": 4381,
    "range": [
      4380,
      4381
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4382,
    "end": 4388,
    "range": [
      4382,
      4388
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public",
    "start": 4389,
    "end": 4406,
    "range": [
      4389,
      4406
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4406,
    "end": 4407,
    "range": [
      4406,
      4407
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4412,
    "end": 4415,
    "range": [
      4412,
      4415
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public_v3_private",
    "start": 4416,
    "end": 4444,
    "range": [
      4416,
      4444
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4444,
    "end": 4445,
    "range": [
      4444,
      4445
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4446,
    "end": 4447,
    "range": [
      4446,
      4447
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4447,
    "end": 4448,
    "range": [
      4447,
      4448
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4449,
    "end": 4451,
    "range": [
      4449,
      4451
    ]
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public",
    "start": 4452,
    "end": 4469,
    "range": [
      4452,
      4469
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4469,
    "end": 4470,
    "range": [
      4469,
      4470
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4470,
    "end": 4472,
    "range": [
      4470,
      4472
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4472,
    "end": 4473,
    "range": [
      4472,
      4473
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 4479,
    "end": 4488,
    "range": [
      4479,
      4488
    ]
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 4489,
    "end": 4491,
    "range": [
      4489,
      4491
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4492,
    "end": 4493,
    "range": [
      4492,
      4493
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 4559,
    "end": 4565,
    "range": [
      4559,
      4565
    ]
  },
  {
    "type": "Identifier",
    "value": "nonerrorImport",
    "start": 4566,
    "end": 4580,
    "range": [
      4566,
      4580
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4581,
    "end": 4582,
    "range": [
      4581,
      4582
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_M1_public",
    "start": 4583,
    "end": 4596,
    "range": [
      4583,
      4596
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4596,
    "end": 4597,
    "range": [
      4596,
      4597
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 4607,
    "end": 4616,
    "range": [
      4607,
      4616
    ]
  },
  {
    "type": "Identifier",
    "value": "m5",
    "start": 4617,
    "end": 4619,
    "range": [
      4617,
      4619
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4620,
    "end": 4621,
    "range": [
      4620,
      4621
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 4698,
    "end": 4704,
    "range": [
      4698,
      4704
    ]
  },
  {
    "type": "Identifier",
    "value": "m5_nonerrorImport",
    "start": 4705,
    "end": 4722,
    "range": [
      4705,
      4722
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4723,
    "end": 4724,
    "range": [
      4723,
      4724
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_M1_public",
    "start": 4725,
    "end": 4738,
    "range": [
      4725,
      4738
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4738,
    "end": 4739,
    "range": [
      4738,
      4739
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4748,
    "end": 4749,
    "range": [
      4748,
      4749
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4754,
    "end": 4755,
    "range": [
      4754,
      4755
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4756,
    "end": 4757,
    "range": [
      4756,
      4757
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4759,
    "end": 4766,
    "range": [
      4759,
      4766
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 4767,
    "end": 4773,
    "range": [
      4767,
      4773
    ]
  },
  {
    "type": "String",
    "value": "\"anotherParseError\"",
    "start": 4774,
    "end": 4793,
    "range": [
      4774,
      4793
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4794,
    "end": 4795,
    "range": [
      4794,
      4795
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 4800,
    "end": 4809,
    "range": [
      4800,
      4809
    ]
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 4810,
    "end": 4812,
    "range": [
      4810,
      4812
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4813,
    "end": 4814,
    "range": [
      4813,
      4814
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4864,
    "end": 4865,
    "range": [
      4864,
      4865
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 4871,
    "end": 4880,
    "range": [
      4871,
      4880
    ]
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 4881,
    "end": 4883,
    "range": [
      4881,
      4883
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4884,
    "end": 4885,
    "range": [
      4884,
      4885
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4928,
    "end": 4929,
    "range": [
      4928,
      4929
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4960,
    "end": 4961,
    "range": [
      4960,
      4961
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 4963,
    "end": 4972,
    "range": [
      4963,
      4972
    ]
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 4973,
    "end": 4975,
    "range": [
      4973,
      4975
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4976,
    "end": 4977,
    "range": [
      4976,
      4977
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 5030,
    "end": 5039,
    "range": [
      5030,
      5039
    ]
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 5040,
    "end": 5042,
    "range": [
      5040,
      5042
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5043,
    "end": 5044,
    "range": [
      5043,
      5044
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5053,
    "end": 5056,
    "range": [
      5053,
      5056
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 5057,
    "end": 5058,
    "range": [
      5057,
      5058
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5059,
    "end": 5060,
    "range": [
      5059,
      5060
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 5061,
    "end": 5063,
    "range": [
      5061,
      5063
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5063,
    "end": 5064,
    "range": [
      5063,
      5064
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5121,
    "end": 5122,
    "range": [
      5121,
      5122
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5124,
    "end": 5125,
    "range": [
      5124,
      5125
    ]
  }
]
```
