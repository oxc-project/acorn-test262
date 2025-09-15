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
