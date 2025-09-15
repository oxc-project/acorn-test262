__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 19
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
                  "start": 43,
                  "end": 55
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
                          "start": 79,
                          "end": 81
                        },
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "body": [],
                          "start": 82,
                          "end": 93
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 73,
                        "end": 93
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 66,
                      "end": 93
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
                          "start": 118,
                          "end": 120
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
                                  "start": 148,
                                  "end": 150
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 144,
                                "end": 150
                              },
                              "start": 137,
                              "end": 151
                            }
                          ],
                          "start": 123,
                          "end": 161
                        },
                        "expression": false,
                        "start": 109,
                        "end": 161
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 102,
                      "end": 161
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
                              "start": 181,
                              "end": 183
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 186,
                              "end": 188
                            },
                            "definite": false,
                            "start": 181,
                            "end": 188
                          }
                        ],
                        "declare": false,
                        "start": 177,
                        "end": 189
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 170,
                      "end": 189
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
                                    "start": 213,
                                    "end": 215
                                  },
                                  "typeArguments": null,
                                  "start": 213,
                                  "end": 215
                                },
                                "start": 211,
                                "end": 215
                              },
                              "start": 209,
                              "end": 215
                            },
                            "init": null,
                            "definite": false,
                            "start": 209,
                            "end": 215
                          }
                        ],
                        "declare": false,
                        "start": 205,
                        "end": 216
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 198,
                      "end": 216
                    }
                  ],
                  "start": 56,
                  "end": 222
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 33,
                "end": 222
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 26,
              "end": 222
            },
            {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_M2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 238,
                "end": 251
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
                        "start": 275,
                        "end": 277
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 278,
                        "end": 289
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 269,
                      "end": 289
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 262,
                    "end": 289
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
                        "start": 314,
                        "end": 316
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
                                "start": 344,
                                "end": 346
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 340,
                              "end": 346
                            },
                            "start": 333,
                            "end": 347
                          }
                        ],
                        "start": 319,
                        "end": 357
                      },
                      "expression": false,
                      "start": 305,
                      "end": 357
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 298,
                    "end": 357
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
                            "start": 377,
                            "end": 379
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 382,
                            "end": 384
                          },
                          "definite": false,
                          "start": 377,
                          "end": 384
                        }
                      ],
                      "declare": false,
                      "start": 373,
                      "end": 385
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 366,
                    "end": 385
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
                                  "start": 409,
                                  "end": 411
                                },
                                "typeArguments": null,
                                "start": 409,
                                "end": 411
                              },
                              "start": 407,
                              "end": 411
                            },
                            "start": 405,
                            "end": 411
                          },
                          "init": null,
                          "definite": false,
                          "start": 405,
                          "end": 411
                        }
                      ],
                      "declare": false,
                      "start": 401,
                      "end": 412
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 394,
                    "end": 412
                  }
                ],
                "start": 252,
                "end": 418
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 228,
              "end": 418
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_im1_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 819,
                "end": 833
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_M1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 836,
                "end": 848
              },
              "importKind": "value",
              "start": 812,
              "end": 849
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
                      "start": 865,
                      "end": 889
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im1_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 892,
                        "end": 906
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 907,
                        "end": 909
                      },
                      "optional": false,
                      "computed": false,
                      "start": 892,
                      "end": 909
                    },
                    "definite": false,
                    "start": 865,
                    "end": 909
                  }
                ],
                "declare": false,
                "start": 861,
                "end": 910
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 854,
              "end": 910
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
                      "start": 926,
                      "end": 950
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
                          "start": 957,
                          "end": 971
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 972,
                          "end": 974
                        },
                        "optional": false,
                        "computed": false,
                        "start": 957,
                        "end": 974
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 953,
                      "end": 976
                    },
                    "definite": false,
                    "start": 926,
                    "end": 976
                  }
                ],
                "declare": false,
                "start": 922,
                "end": 977
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 915,
              "end": 977
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
                      "start": 993,
                      "end": 1017
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im1_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1020,
                        "end": 1034
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1035,
                        "end": 1037
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1020,
                      "end": 1037
                    },
                    "definite": false,
                    "start": 993,
                    "end": 1037
                  }
                ],
                "declare": false,
                "start": 989,
                "end": 1038
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 982,
              "end": 1038
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
                      "start": 1054,
                      "end": 1078
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
                          "start": 1081,
                          "end": 1095
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1096,
                          "end": 1098
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1081,
                        "end": 1098
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1081,
                      "end": 1100
                    },
                    "definite": false,
                    "start": 1054,
                    "end": 1100
                  }
                ],
                "declare": false,
                "start": 1050,
                "end": 1101
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1043,
              "end": 1101
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
                    "start": 1110,
                    "end": 1135
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1138,
                      "end": 1152
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1153,
                      "end": 1155
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1138,
                    "end": 1155
                  },
                  "definite": false,
                  "start": 1110,
                  "end": 1155
                }
              ],
              "declare": false,
              "start": 1106,
              "end": 1156
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
                    "start": 1165,
                    "end": 1190
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
                        "start": 1197,
                        "end": 1211
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1212,
                        "end": 1214
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1197,
                      "end": 1214
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1193,
                    "end": 1216
                  },
                  "definite": false,
                  "start": 1165,
                  "end": 1216
                }
              ],
              "declare": false,
              "start": 1161,
              "end": 1217
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
                    "start": 1226,
                    "end": 1251
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1254,
                      "end": 1268
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1269,
                      "end": 1271
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1254,
                    "end": 1271
                  },
                  "definite": false,
                  "start": 1226,
                  "end": 1271
                }
              ],
              "declare": false,
              "start": 1222,
              "end": 1272
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
                    "start": 1281,
                    "end": 1306
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
                        "start": 1309,
                        "end": 1323
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1324,
                        "end": 1326
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1309,
                      "end": 1326
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1309,
                    "end": 1328
                  },
                  "definite": false,
                  "start": 1281,
                  "end": 1328
                }
              ],
              "declare": false,
              "start": 1277,
              "end": 1329
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_im2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1343,
                "end": 1357
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_M2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1360,
                "end": 1373
              },
              "importKind": "value",
              "start": 1336,
              "end": 1374
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
                      "start": 1390,
                      "end": 1414
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1417,
                        "end": 1431
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1432,
                        "end": 1434
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1417,
                      "end": 1434
                    },
                    "definite": false,
                    "start": 1390,
                    "end": 1434
                  }
                ],
                "declare": false,
                "start": 1386,
                "end": 1435
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1379,
              "end": 1435
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
                      "start": 1451,
                      "end": 1475
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
                          "start": 1482,
                          "end": 1496
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1497,
                          "end": 1499
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1482,
                        "end": 1499
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1478,
                      "end": 1501
                    },
                    "definite": false,
                    "start": 1451,
                    "end": 1501
                  }
                ],
                "declare": false,
                "start": 1447,
                "end": 1502
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1440,
              "end": 1502
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
                      "start": 1518,
                      "end": 1542
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1545,
                        "end": 1559
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1560,
                        "end": 1562
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1545,
                      "end": 1562
                    },
                    "definite": false,
                    "start": 1518,
                    "end": 1562
                  }
                ],
                "declare": false,
                "start": 1514,
                "end": 1563
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1507,
              "end": 1563
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
                      "start": 1579,
                      "end": 1603
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
                          "start": 1606,
                          "end": 1620
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1621,
                          "end": 1623
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1606,
                        "end": 1623
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1606,
                      "end": 1625
                    },
                    "definite": false,
                    "start": 1579,
                    "end": 1625
                  }
                ],
                "declare": false,
                "start": 1575,
                "end": 1626
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1568,
              "end": 1626
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
                    "start": 1635,
                    "end": 1660
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1663,
                      "end": 1677
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1678,
                      "end": 1680
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1663,
                    "end": 1680
                  },
                  "definite": false,
                  "start": 1635,
                  "end": 1680
                }
              ],
              "declare": false,
              "start": 1631,
              "end": 1681
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
                    "start": 1690,
                    "end": 1715
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
                        "start": 1722,
                        "end": 1736
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1737,
                        "end": 1739
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1722,
                      "end": 1739
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1718,
                    "end": 1741
                  },
                  "definite": false,
                  "start": 1690,
                  "end": 1741
                }
              ],
              "declare": false,
              "start": 1686,
              "end": 1742
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
                    "start": 1751,
                    "end": 1776
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1779,
                      "end": 1793
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1794,
                      "end": 1796
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1779,
                    "end": 1796
                  },
                  "definite": false,
                  "start": 1751,
                  "end": 1796
                }
              ],
              "declare": false,
              "start": 1747,
              "end": 1797
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
                    "start": 1806,
                    "end": 1831
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
                        "start": 1834,
                        "end": 1848
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1849,
                        "end": 1851
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1834,
                      "end": 1851
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1834,
                    "end": 1853
                  },
                  "definite": false,
                  "start": 1806,
                  "end": 1853
                }
              ],
              "declare": false,
              "start": 1802,
              "end": 1854
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
                  "start": 2979,
                  "end": 2992
                },
                "moduleReference": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_M1_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2995,
                  "end": 3007
                },
                "importKind": "value",
                "start": 2972,
                "end": 3008
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2965,
              "end": 3008
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
                  "start": 3027,
                  "end": 3040
                },
                "moduleReference": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_M2_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3043,
                  "end": 3056
                },
                "importKind": "value",
                "start": 3020,
                "end": 3057
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3013,
              "end": 3057
            }
          ],
          "start": 20,
          "end": 3182
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 3182
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 3182
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3194,
        "end": 3196
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
                "name": "m2_M1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 3220,
                "end": 3232
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
                        "start": 3256,
                        "end": 3258
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 3259,
                        "end": 3270
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 3250,
                      "end": 3270
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 3243,
                    "end": 3270
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
                        "start": 3295,
                        "end": 3297
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
                                "start": 3325,
                                "end": 3327
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 3321,
                              "end": 3327
                            },
                            "start": 3314,
                            "end": 3328
                          }
                        ],
                        "start": 3300,
                        "end": 3338
                      },
                      "expression": false,
                      "start": 3286,
                      "end": 3338
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 3279,
                    "end": 3338
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
                            "start": 3358,
                            "end": 3360
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3363,
                            "end": 3365
                          },
                          "definite": false,
                          "start": 3358,
                          "end": 3365
                        }
                      ],
                      "declare": false,
                      "start": 3354,
                      "end": 3366
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 3347,
                    "end": 3366
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
                                  "start": 3390,
                                  "end": 3392
                                },
                                "typeArguments": null,
                                "start": 3390,
                                "end": 3392
                              },
                              "start": 3388,
                              "end": 3392
                            },
                            "start": 3386,
                            "end": 3392
                          },
                          "init": null,
                          "definite": false,
                          "start": 3386,
                          "end": 3392
                        }
                      ],
                      "declare": false,
                      "start": 3382,
                      "end": 3393
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 3375,
                    "end": 3393
                  }
                ],
                "start": 3233,
                "end": 3399
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 3210,
              "end": 3399
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3203,
            "end": 3399
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_M2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3415,
              "end": 3428
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
                      "start": 3452,
                      "end": 3454
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 3455,
                      "end": 3466
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 3446,
                    "end": 3466
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3439,
                  "end": 3466
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
                      "start": 3491,
                      "end": 3493
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
                              "start": 3521,
                              "end": 3523
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 3517,
                            "end": 3523
                          },
                          "start": 3510,
                          "end": 3524
                        }
                      ],
                      "start": 3496,
                      "end": 3534
                    },
                    "expression": false,
                    "start": 3482,
                    "end": 3534
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3475,
                  "end": 3534
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
                          "start": 3554,
                          "end": 3556
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3559,
                          "end": 3561
                        },
                        "definite": false,
                        "start": 3554,
                        "end": 3561
                      }
                    ],
                    "declare": false,
                    "start": 3550,
                    "end": 3562
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3543,
                  "end": 3562
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
                                "start": 3586,
                                "end": 3588
                              },
                              "typeArguments": null,
                              "start": 3586,
                              "end": 3588
                            },
                            "start": 3584,
                            "end": 3588
                          },
                          "start": 3582,
                          "end": 3588
                        },
                        "init": null,
                        "definite": false,
                        "start": 3582,
                        "end": 3588
                      }
                    ],
                    "declare": false,
                    "start": 3578,
                    "end": 3589
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3571,
                  "end": 3589
                }
              ],
              "start": 3429,
              "end": 3595
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 3405,
            "end": 3595
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_im1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3996,
              "end": 4010
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_M1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 4013,
              "end": 4025
            },
            "importKind": "value",
            "start": 3989,
            "end": 4026
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
                    "start": 4042,
                    "end": 4066
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4069,
                      "end": 4083
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4084,
                      "end": 4086
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4069,
                    "end": 4086
                  },
                  "definite": false,
                  "start": 4042,
                  "end": 4086
                }
              ],
              "declare": false,
              "start": 4038,
              "end": 4087
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4031,
            "end": 4087
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
                    "start": 4103,
                    "end": 4127
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
                        "start": 4134,
                        "end": 4148
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4149,
                        "end": 4151
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4134,
                      "end": 4151
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 4130,
                    "end": 4153
                  },
                  "definite": false,
                  "start": 4103,
                  "end": 4153
                }
              ],
              "declare": false,
              "start": 4099,
              "end": 4154
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4092,
            "end": 4154
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
                    "start": 4170,
                    "end": 4194
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4197,
                      "end": 4211
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4212,
                      "end": 4214
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4197,
                    "end": 4214
                  },
                  "definite": false,
                  "start": 4170,
                  "end": 4214
                }
              ],
              "declare": false,
              "start": 4166,
              "end": 4215
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4159,
            "end": 4215
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
                    "start": 4231,
                    "end": 4255
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
                        "start": 4258,
                        "end": 4272
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4273,
                        "end": 4275
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4258,
                      "end": 4275
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 4258,
                    "end": 4277
                  },
                  "definite": false,
                  "start": 4231,
                  "end": 4277
                }
              ],
              "declare": false,
              "start": 4227,
              "end": 4278
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4220,
            "end": 4278
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
                  "start": 4287,
                  "end": 4312
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im1_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4315,
                    "end": 4329
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4330,
                    "end": 4332
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4315,
                  "end": 4332
                },
                "definite": false,
                "start": 4287,
                "end": 4332
              }
            ],
            "declare": false,
            "start": 4283,
            "end": 4333
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
                  "start": 4342,
                  "end": 4367
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
                      "start": 4374,
                      "end": 4388
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4389,
                      "end": 4391
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4374,
                    "end": 4391
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 4370,
                  "end": 4393
                },
                "definite": false,
                "start": 4342,
                "end": 4393
              }
            ],
            "declare": false,
            "start": 4338,
            "end": 4394
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
                  "start": 4403,
                  "end": 4428
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im1_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4431,
                    "end": 4445
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4446,
                    "end": 4448
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4431,
                  "end": 4448
                },
                "definite": false,
                "start": 4403,
                "end": 4448
              }
            ],
            "declare": false,
            "start": 4399,
            "end": 4449
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
                  "start": 4458,
                  "end": 4483
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
                      "start": 4486,
                      "end": 4500
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4501,
                      "end": 4503
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4486,
                    "end": 4503
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 4486,
                  "end": 4505
                },
                "definite": false,
                "start": 4458,
                "end": 4505
              }
            ],
            "declare": false,
            "start": 4454,
            "end": 4506
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_im2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4520,
              "end": 4534
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_M2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4537,
              "end": 4550
            },
            "importKind": "value",
            "start": 4513,
            "end": 4551
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
                    "start": 4567,
                    "end": 4591
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4594,
                      "end": 4608
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4609,
                      "end": 4611
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4594,
                    "end": 4611
                  },
                  "definite": false,
                  "start": 4567,
                  "end": 4611
                }
              ],
              "declare": false,
              "start": 4563,
              "end": 4612
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4556,
            "end": 4612
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
                    "start": 4628,
                    "end": 4652
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
                        "start": 4659,
                        "end": 4673
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4674,
                        "end": 4676
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4659,
                      "end": 4676
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 4655,
                    "end": 4678
                  },
                  "definite": false,
                  "start": 4628,
                  "end": 4678
                }
              ],
              "declare": false,
              "start": 4624,
              "end": 4679
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4617,
            "end": 4679
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
                    "start": 4695,
                    "end": 4719
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4722,
                      "end": 4736
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4737,
                      "end": 4739
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4722,
                    "end": 4739
                  },
                  "definite": false,
                  "start": 4695,
                  "end": 4739
                }
              ],
              "declare": false,
              "start": 4691,
              "end": 4740
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4684,
            "end": 4740
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
                    "start": 4756,
                    "end": 4780
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
                        "start": 4783,
                        "end": 4797
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4798,
                        "end": 4800
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4783,
                      "end": 4800
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 4783,
                    "end": 4802
                  },
                  "definite": false,
                  "start": 4756,
                  "end": 4802
                }
              ],
              "declare": false,
              "start": 4752,
              "end": 4803
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4745,
            "end": 4803
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
                  "start": 4812,
                  "end": 4837
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4840,
                    "end": 4854
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4855,
                    "end": 4857
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4840,
                  "end": 4857
                },
                "definite": false,
                "start": 4812,
                "end": 4857
              }
            ],
            "declare": false,
            "start": 4808,
            "end": 4858
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
                  "start": 4867,
                  "end": 4892
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
                      "start": 4899,
                      "end": 4913
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4914,
                      "end": 4916
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4899,
                    "end": 4916
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 4895,
                  "end": 4918
                },
                "definite": false,
                "start": 4867,
                "end": 4918
              }
            ],
            "declare": false,
            "start": 4863,
            "end": 4919
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
                  "start": 4928,
                  "end": 4953
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4956,
                    "end": 4970
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4971,
                    "end": 4973
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4956,
                  "end": 4973
                },
                "definite": false,
                "start": 4928,
                "end": 4973
              }
            ],
            "declare": false,
            "start": 4924,
            "end": 4974
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
                  "start": 4983,
                  "end": 5008
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
                      "start": 5011,
                      "end": 5025
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5026,
                      "end": 5028
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5011,
                    "end": 5028
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 5011,
                  "end": 5030
                },
                "definite": false,
                "start": 4983,
                "end": 5030
              }
            ],
            "declare": false,
            "start": 4979,
            "end": 5031
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
                "start": 6192,
                "end": 6205
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_M1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 6208,
                "end": 6220
              },
              "importKind": "value",
              "start": 6185,
              "end": 6221
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6178,
            "end": 6221
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
                "start": 6240,
                "end": 6253
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_M2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 6256,
                "end": 6269
              },
              "importKind": "value",
              "start": 6233,
              "end": 6270
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6226,
            "end": 6270
          }
        ],
        "start": 3197,
        "end": 6395
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 3184,
      "end": 6395
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_M1_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 6414,
          "end": 6427
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
                  "start": 6447,
                  "end": 6449
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 6450,
                  "end": 6457
                },
                "abstract": false,
                "declare": false,
                "start": 6441,
                "end": 6457
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6434,
              "end": 6457
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
                  "start": 6478,
                  "end": 6480
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
                          "start": 6504,
                          "end": 6506
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 6500,
                        "end": 6506
                      },
                      "start": 6493,
                      "end": 6507
                    }
                  ],
                  "start": 6483,
                  "end": 6513
                },
                "expression": false,
                "start": 6469,
                "end": 6513
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6462,
              "end": 6513
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
                      "start": 6529,
                      "end": 6531
                    },
                    "init": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6534,
                      "end": 6536
                    },
                    "definite": false,
                    "start": 6529,
                    "end": 6536
                  }
                ],
                "declare": false,
                "start": 6525,
                "end": 6537
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6518,
              "end": 6537
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
                            "start": 6557,
                            "end": 6559
                          },
                          "typeArguments": null,
                          "start": 6557,
                          "end": 6559
                        },
                        "start": 6555,
                        "end": 6559
                      },
                      "start": 6553,
                      "end": 6559
                    },
                    "init": null,
                    "definite": false,
                    "start": 6553,
                    "end": 6559
                  }
                ],
                "declare": false,
                "start": 6549,
                "end": 6560
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6542,
              "end": 6560
            }
          ],
          "start": 6428,
          "end": 6562
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 6404,
        "end": 6562
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 6397,
      "end": 6562
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_M3_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 6751,
          "end": 6765
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
                  "start": 6785,
                  "end": 6787
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 6788,
                  "end": 6795
                },
                "abstract": false,
                "declare": false,
                "start": 6779,
                "end": 6795
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6772,
              "end": 6795
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
                  "start": 6816,
                  "end": 6818
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
                          "start": 6842,
                          "end": 6844
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 6838,
                        "end": 6844
                      },
                      "start": 6831,
                      "end": 6845
                    }
                  ],
                  "start": 6821,
                  "end": 6851
                },
                "expression": false,
                "start": 6807,
                "end": 6851
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6800,
              "end": 6851
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
                      "start": 6867,
                      "end": 6869
                    },
                    "init": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6872,
                      "end": 6874
                    },
                    "definite": false,
                    "start": 6867,
                    "end": 6874
                  }
                ],
                "declare": false,
                "start": 6863,
                "end": 6875
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6856,
              "end": 6875
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
                            "start": 6895,
                            "end": 6897
                          },
                          "typeArguments": null,
                          "start": 6895,
                          "end": 6897
                        },
                        "start": 6893,
                        "end": 6897
                      },
                      "start": 6891,
                      "end": 6897
                    },
                    "init": null,
                    "definite": false,
                    "start": 6891,
                    "end": 6897
                  }
                ],
                "declare": false,
                "start": 6887,
                "end": 6898
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6880,
              "end": 6898
            }
          ],
          "start": 6766,
          "end": 6900
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 6741,
        "end": 6900
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 6734,
      "end": 6900
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_im1_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 7081,
        "end": 7096
      },
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_M1_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 7099,
        "end": 7112
      },
      "importKind": "value",
      "start": 7074,
      "end": 7113
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
              "name": "glo_im1_private_v1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 7125,
              "end": 7150
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im1_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 7153,
                "end": 7168
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 7169,
                "end": 7171
              },
              "optional": false,
              "computed": false,
              "start": 7153,
              "end": 7171
            },
            "definite": false,
            "start": 7125,
            "end": 7171
          }
        ],
        "declare": false,
        "start": 7121,
        "end": 7172
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7114,
      "end": 7172
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
              "name": "glo_im1_private_v2_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 7184,
              "end": 7209
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_im1_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7216,
                  "end": 7231
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7232,
                  "end": 7234
                },
                "optional": false,
                "computed": false,
                "start": 7216,
                "end": 7234
              },
              "typeArguments": null,
              "arguments": [],
              "start": 7212,
              "end": 7236
            },
            "definite": false,
            "start": 7184,
            "end": 7236
          }
        ],
        "declare": false,
        "start": 7180,
        "end": 7237
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7173,
      "end": 7237
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
              "name": "glo_im1_private_v3_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 7249,
              "end": 7274
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im1_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 7277,
                "end": 7292
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 7293,
                "end": 7295
              },
              "optional": false,
              "computed": false,
              "start": 7277,
              "end": 7295
            },
            "definite": false,
            "start": 7249,
            "end": 7295
          }
        ],
        "declare": false,
        "start": 7245,
        "end": 7296
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7238,
      "end": 7296
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
              "name": "glo_im1_private_v4_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 7308,
              "end": 7333
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_im1_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7336,
                  "end": 7351
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7352,
                  "end": 7354
                },
                "optional": false,
                "computed": false,
                "start": 7336,
                "end": 7354
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 7336,
              "end": 7356
            },
            "definite": false,
            "start": 7308,
            "end": 7356
          }
        ],
        "declare": false,
        "start": 7304,
        "end": 7357
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7297,
      "end": 7357
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
            "name": "glo_im1_private_v1_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 7362,
            "end": 7388
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_im1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 7391,
              "end": 7406
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 7407,
              "end": 7409
            },
            "optional": false,
            "computed": false,
            "start": 7391,
            "end": 7409
          },
          "definite": false,
          "start": 7362,
          "end": 7409
        }
      ],
      "declare": false,
      "start": 7358,
      "end": 7410
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
            "name": "glo_im1_private_v2_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 7415,
            "end": 7441
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im1_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 7448,
                "end": 7463
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 7464,
                "end": 7466
              },
              "optional": false,
              "computed": false,
              "start": 7448,
              "end": 7466
            },
            "typeArguments": null,
            "arguments": [],
            "start": 7444,
            "end": 7468
          },
          "definite": false,
          "start": 7415,
          "end": 7468
        }
      ],
      "declare": false,
      "start": 7411,
      "end": 7469
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
            "name": "glo_im1_private_v3_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 7474,
            "end": 7500
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_im1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 7503,
              "end": 7518
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 7519,
              "end": 7521
            },
            "optional": false,
            "computed": false,
            "start": 7503,
            "end": 7521
          },
          "definite": false,
          "start": 7474,
          "end": 7521
        }
      ],
      "declare": false,
      "start": 7470,
      "end": 7522
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
            "name": "glo_im1_private_v4_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 7527,
            "end": 7553
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im1_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 7556,
                "end": 7571
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 7572,
                "end": 7574
              },
              "optional": false,
              "computed": false,
              "start": 7556,
              "end": 7574
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 7556,
            "end": 7576
          },
          "definite": false,
          "start": 7527,
          "end": 7576
        }
      ],
      "declare": false,
      "start": 7523,
      "end": 7577
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_im3_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 8121,
        "end": 8136
      },
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_M3_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 8139,
        "end": 8153
      },
      "importKind": "value",
      "start": 8114,
      "end": 8154
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
              "name": "glo_im3_private_v1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 8166,
              "end": 8191
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im3_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 8194,
                "end": 8209
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 8210,
                "end": 8212
              },
              "optional": false,
              "computed": false,
              "start": 8194,
              "end": 8212
            },
            "definite": false,
            "start": 8166,
            "end": 8212
          }
        ],
        "declare": false,
        "start": 8162,
        "end": 8213
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8155,
      "end": 8213
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
              "name": "glo_im3_private_v2_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 8225,
              "end": 8250
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_im3_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8257,
                  "end": 8272
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8273,
                  "end": 8275
                },
                "optional": false,
                "computed": false,
                "start": 8257,
                "end": 8275
              },
              "typeArguments": null,
              "arguments": [],
              "start": 8253,
              "end": 8277
            },
            "definite": false,
            "start": 8225,
            "end": 8277
          }
        ],
        "declare": false,
        "start": 8221,
        "end": 8278
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8214,
      "end": 8278
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
              "name": "glo_im3_private_v3_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 8290,
              "end": 8315
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im3_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 8318,
                "end": 8333
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 8334,
                "end": 8336
              },
              "optional": false,
              "computed": false,
              "start": 8318,
              "end": 8336
            },
            "definite": false,
            "start": 8290,
            "end": 8336
          }
        ],
        "declare": false,
        "start": 8286,
        "end": 8337
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8279,
      "end": 8337
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
              "name": "glo_im3_private_v4_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 8349,
              "end": 8374
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_im3_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8377,
                  "end": 8392
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8393,
                  "end": 8395
                },
                "optional": false,
                "computed": false,
                "start": 8377,
                "end": 8395
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 8377,
              "end": 8397
            },
            "definite": false,
            "start": 8349,
            "end": 8397
          }
        ],
        "declare": false,
        "start": 8345,
        "end": 8398
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8338,
      "end": 8398
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
            "name": "glo_im3_private_v1_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 8403,
            "end": 8429
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_im3_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 8432,
              "end": 8447
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 8448,
              "end": 8450
            },
            "optional": false,
            "computed": false,
            "start": 8432,
            "end": 8450
          },
          "definite": false,
          "start": 8403,
          "end": 8450
        }
      ],
      "declare": false,
      "start": 8399,
      "end": 8451
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
            "name": "glo_im3_private_v2_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 8456,
            "end": 8482
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im3_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 8489,
                "end": 8504
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 8505,
                "end": 8507
              },
              "optional": false,
              "computed": false,
              "start": 8489,
              "end": 8507
            },
            "typeArguments": null,
            "arguments": [],
            "start": 8485,
            "end": 8509
          },
          "definite": false,
          "start": 8456,
          "end": 8509
        }
      ],
      "declare": false,
      "start": 8452,
      "end": 8510
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
            "name": "glo_im3_private_v3_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 8515,
            "end": 8541
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_im3_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 8544,
              "end": 8559
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 8560,
              "end": 8562
            },
            "optional": false,
            "computed": false,
            "start": 8544,
            "end": 8562
          },
          "definite": false,
          "start": 8515,
          "end": 8562
        }
      ],
      "declare": false,
      "start": 8511,
      "end": 8563
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
            "name": "glo_im3_private_v4_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 8568,
            "end": 8594
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im3_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 8597,
                "end": 8612
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 8613,
                "end": 8615
              },
              "optional": false,
              "computed": false,
              "start": 8597,
              "end": 8615
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 8597,
            "end": 8617
          },
          "definite": false,
          "start": 8568,
          "end": 8617
        }
      ],
      "declare": false,
      "start": 8564,
      "end": 8618
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_im1_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 9201,
          "end": 9215
        },
        "moduleReference": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_M1_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 9218,
          "end": 9231
        },
        "importKind": "value",
        "start": 9194,
        "end": 9232
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 9187,
      "end": 9232
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_im2_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 9247,
          "end": 9261
        },
        "moduleReference": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_M3_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 9264,
          "end": 9278
        },
        "importKind": "value",
        "start": 9240,
        "end": 9279
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 9233,
      "end": 9279
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 12472,
        "end": 12474
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
              "start": 12539,
              "end": 12541
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
                        "start": 12556,
                        "end": 12557
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 12560,
                        "end": 12562
                      },
                      "definite": false,
                      "start": 12556,
                      "end": 12562
                    }
                  ],
                  "declare": false,
                  "start": 12552,
                  "end": 12563
                }
              ],
              "start": 12542,
              "end": 12621
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 12529,
            "end": 12621
          }
        ],
        "start": 12475,
        "end": 12624
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 12462,
      "end": 12624
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m3",
          "optional": false,
          "typeAnnotation": null,
          "start": 12643,
          "end": 12645
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
                "start": 12710,
                "end": 12712
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
                          "start": 12727,
                          "end": 12728
                        },
                        "init": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 12731,
                          "end": 12733
                        },
                        "definite": false,
                        "start": 12727,
                        "end": 12733
                      }
                    ],
                    "declare": false,
                    "start": 12723,
                    "end": 12734
                  }
                ],
                "start": 12713,
                "end": 12792
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 12700,
              "end": 12792
            }
          ],
          "start": 12646,
          "end": 12795
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 12633,
        "end": 12795
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 12626,
      "end": 12795
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 12795
}
```
