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
          "start": 14,
          "end": 16
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
                  "start": 37,
                  "end": 49
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
                          "start": 73,
                          "end": 75
                        },
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "body": [],
                          "start": 76,
                          "end": 87
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 67,
                        "end": 87
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 60,
                      "end": 87
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
                          "start": 112,
                          "end": 114
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
                                  "start": 142,
                                  "end": 144
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 138,
                                "end": 144
                              },
                              "start": 131,
                              "end": 145
                            }
                          ],
                          "start": 117,
                          "end": 155
                        },
                        "expression": false,
                        "start": 103,
                        "end": 155
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 96,
                      "end": 155
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
                              "start": 175,
                              "end": 177
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 180,
                              "end": 182
                            },
                            "definite": false,
                            "start": 175,
                            "end": 182
                          }
                        ],
                        "declare": false,
                        "start": 171,
                        "end": 183
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 164,
                      "end": 183
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
                                    "start": 207,
                                    "end": 209
                                  },
                                  "typeArguments": null,
                                  "start": 207,
                                  "end": 209
                                },
                                "start": 205,
                                "end": 209
                              },
                              "start": 203,
                              "end": 209
                            },
                            "init": null,
                            "definite": false,
                            "start": 203,
                            "end": 209
                          }
                        ],
                        "declare": false,
                        "start": 199,
                        "end": 210
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 192,
                      "end": 210
                    }
                  ],
                  "start": 50,
                  "end": 216
                },
                "kind": "module",
                "declare": false,
                "global": false,
                "start": 30,
                "end": 216
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 23,
              "end": 216
            },
            {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_M2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 229,
                "end": 242
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
                        "start": 266,
                        "end": 268
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 269,
                        "end": 280
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 260,
                      "end": 280
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 253,
                    "end": 280
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
                        "start": 305,
                        "end": 307
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
                                "start": 335,
                                "end": 337
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 331,
                              "end": 337
                            },
                            "start": 324,
                            "end": 338
                          }
                        ],
                        "start": 310,
                        "end": 348
                      },
                      "expression": false,
                      "start": 296,
                      "end": 348
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 289,
                    "end": 348
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
                            "start": 368,
                            "end": 370
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 373,
                            "end": 375
                          },
                          "definite": false,
                          "start": 368,
                          "end": 375
                        }
                      ],
                      "declare": false,
                      "start": 364,
                      "end": 376
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 357,
                    "end": 376
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
                                  "start": 400,
                                  "end": 402
                                },
                                "typeArguments": null,
                                "start": 400,
                                "end": 402
                              },
                              "start": 398,
                              "end": 402
                            },
                            "start": 396,
                            "end": 402
                          },
                          "init": null,
                          "definite": false,
                          "start": 396,
                          "end": 402
                        }
                      ],
                      "declare": false,
                      "start": 392,
                      "end": 403
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 385,
                    "end": 403
                  }
                ],
                "start": 243,
                "end": 409
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 222,
              "end": 409
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_im1_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 810,
                "end": 824
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_M1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 827,
                "end": 839
              },
              "importKind": "value",
              "start": 803,
              "end": 840
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
                      "start": 856,
                      "end": 880
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im1_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 883,
                        "end": 897
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 898,
                        "end": 900
                      },
                      "optional": false,
                      "computed": false,
                      "start": 883,
                      "end": 900
                    },
                    "definite": false,
                    "start": 856,
                    "end": 900
                  }
                ],
                "declare": false,
                "start": 852,
                "end": 901
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 845,
              "end": 901
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
                      "start": 917,
                      "end": 941
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
                          "start": 948,
                          "end": 962
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 963,
                          "end": 965
                        },
                        "optional": false,
                        "computed": false,
                        "start": 948,
                        "end": 965
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 944,
                      "end": 967
                    },
                    "definite": false,
                    "start": 917,
                    "end": 967
                  }
                ],
                "declare": false,
                "start": 913,
                "end": 968
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 906,
              "end": 968
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
                      "start": 984,
                      "end": 1008
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im1_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1011,
                        "end": 1025
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1026,
                        "end": 1028
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1011,
                      "end": 1028
                    },
                    "definite": false,
                    "start": 984,
                    "end": 1028
                  }
                ],
                "declare": false,
                "start": 980,
                "end": 1029
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 973,
              "end": 1029
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
                      "start": 1045,
                      "end": 1069
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
                          "start": 1072,
                          "end": 1086
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1087,
                          "end": 1089
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1072,
                        "end": 1089
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1072,
                      "end": 1091
                    },
                    "definite": false,
                    "start": 1045,
                    "end": 1091
                  }
                ],
                "declare": false,
                "start": 1041,
                "end": 1092
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1034,
              "end": 1092
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
                    "start": 1101,
                    "end": 1126
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1129,
                      "end": 1143
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1144,
                      "end": 1146
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1129,
                    "end": 1146
                  },
                  "definite": false,
                  "start": 1101,
                  "end": 1146
                }
              ],
              "declare": false,
              "start": 1097,
              "end": 1147
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
                    "start": 1156,
                    "end": 1181
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
                        "start": 1188,
                        "end": 1202
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1203,
                        "end": 1205
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1188,
                      "end": 1205
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1184,
                    "end": 1207
                  },
                  "definite": false,
                  "start": 1156,
                  "end": 1207
                }
              ],
              "declare": false,
              "start": 1152,
              "end": 1208
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
                    "start": 1217,
                    "end": 1242
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1245,
                      "end": 1259
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1260,
                      "end": 1262
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1245,
                    "end": 1262
                  },
                  "definite": false,
                  "start": 1217,
                  "end": 1262
                }
              ],
              "declare": false,
              "start": 1213,
              "end": 1263
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
                    "start": 1272,
                    "end": 1297
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
                        "start": 1300,
                        "end": 1314
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1315,
                        "end": 1317
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1300,
                      "end": 1317
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1300,
                    "end": 1319
                  },
                  "definite": false,
                  "start": 1272,
                  "end": 1319
                }
              ],
              "declare": false,
              "start": 1268,
              "end": 1320
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_im2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1334,
                "end": 1348
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_M2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1351,
                "end": 1364
              },
              "importKind": "value",
              "start": 1327,
              "end": 1365
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
                      "start": 1381,
                      "end": 1405
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1408,
                        "end": 1422
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1423,
                        "end": 1425
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1408,
                      "end": 1425
                    },
                    "definite": false,
                    "start": 1381,
                    "end": 1425
                  }
                ],
                "declare": false,
                "start": 1377,
                "end": 1426
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1370,
              "end": 1426
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
                      "start": 1442,
                      "end": 1466
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
                          "start": 1473,
                          "end": 1487
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1488,
                          "end": 1490
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1473,
                        "end": 1490
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1469,
                      "end": 1492
                    },
                    "definite": false,
                    "start": 1442,
                    "end": 1492
                  }
                ],
                "declare": false,
                "start": 1438,
                "end": 1493
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1431,
              "end": 1493
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
                      "start": 1509,
                      "end": 1533
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1536,
                        "end": 1550
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1551,
                        "end": 1553
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1536,
                      "end": 1553
                    },
                    "definite": false,
                    "start": 1509,
                    "end": 1553
                  }
                ],
                "declare": false,
                "start": 1505,
                "end": 1554
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1498,
              "end": 1554
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
                      "start": 1570,
                      "end": 1594
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
                          "start": 1597,
                          "end": 1611
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1612,
                          "end": 1614
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1597,
                        "end": 1614
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1597,
                      "end": 1616
                    },
                    "definite": false,
                    "start": 1570,
                    "end": 1616
                  }
                ],
                "declare": false,
                "start": 1566,
                "end": 1617
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1559,
              "end": 1617
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
                    "start": 1626,
                    "end": 1651
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1654,
                      "end": 1668
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1669,
                      "end": 1671
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1654,
                    "end": 1671
                  },
                  "definite": false,
                  "start": 1626,
                  "end": 1671
                }
              ],
              "declare": false,
              "start": 1622,
              "end": 1672
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
                    "start": 1681,
                    "end": 1706
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
                        "start": 1713,
                        "end": 1727
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1728,
                        "end": 1730
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1713,
                      "end": 1730
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1709,
                    "end": 1732
                  },
                  "definite": false,
                  "start": 1681,
                  "end": 1732
                }
              ],
              "declare": false,
              "start": 1677,
              "end": 1733
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
                    "start": 1742,
                    "end": 1767
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1770,
                      "end": 1784
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1785,
                      "end": 1787
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1770,
                    "end": 1787
                  },
                  "definite": false,
                  "start": 1742,
                  "end": 1787
                }
              ],
              "declare": false,
              "start": 1738,
              "end": 1788
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
                    "start": 1797,
                    "end": 1822
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
                        "start": 1825,
                        "end": 1839
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1840,
                        "end": 1842
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1825,
                      "end": 1842
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1825,
                    "end": 1844
                  },
                  "definite": false,
                  "start": 1797,
                  "end": 1844
                }
              ],
              "declare": false,
              "start": 1793,
              "end": 1845
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
                  "start": 2970,
                  "end": 2983
                },
                "moduleReference": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_M1_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2986,
                  "end": 2998
                },
                "importKind": "value",
                "start": 2963,
                "end": 2999
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2956,
              "end": 2999
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
                  "start": 3018,
                  "end": 3031
                },
                "moduleReference": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_M2_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3034,
                  "end": 3047
                },
                "importKind": "value",
                "start": 3011,
                "end": 3048
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3004,
              "end": 3048
            }
          ],
          "start": 17,
          "end": 3173
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 3173
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 3173
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3182,
        "end": 3184
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
                "start": 3205,
                "end": 3217
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
                        "start": 3241,
                        "end": 3243
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 3244,
                        "end": 3255
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 3235,
                      "end": 3255
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 3228,
                    "end": 3255
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
                        "start": 3280,
                        "end": 3282
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
                                "start": 3310,
                                "end": 3312
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 3306,
                              "end": 3312
                            },
                            "start": 3299,
                            "end": 3313
                          }
                        ],
                        "start": 3285,
                        "end": 3323
                      },
                      "expression": false,
                      "start": 3271,
                      "end": 3323
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 3264,
                    "end": 3323
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
                            "start": 3343,
                            "end": 3345
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3348,
                            "end": 3350
                          },
                          "definite": false,
                          "start": 3343,
                          "end": 3350
                        }
                      ],
                      "declare": false,
                      "start": 3339,
                      "end": 3351
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 3332,
                    "end": 3351
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
                                  "start": 3375,
                                  "end": 3377
                                },
                                "typeArguments": null,
                                "start": 3375,
                                "end": 3377
                              },
                              "start": 3373,
                              "end": 3377
                            },
                            "start": 3371,
                            "end": 3377
                          },
                          "init": null,
                          "definite": false,
                          "start": 3371,
                          "end": 3377
                        }
                      ],
                      "declare": false,
                      "start": 3367,
                      "end": 3378
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 3360,
                    "end": 3378
                  }
                ],
                "start": 3218,
                "end": 3384
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 3198,
              "end": 3384
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3191,
            "end": 3384
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_M2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3397,
              "end": 3410
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
                      "start": 3434,
                      "end": 3436
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 3437,
                      "end": 3448
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 3428,
                    "end": 3448
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3421,
                  "end": 3448
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
                      "start": 3473,
                      "end": 3475
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
                              "start": 3503,
                              "end": 3505
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 3499,
                            "end": 3505
                          },
                          "start": 3492,
                          "end": 3506
                        }
                      ],
                      "start": 3478,
                      "end": 3516
                    },
                    "expression": false,
                    "start": 3464,
                    "end": 3516
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3457,
                  "end": 3516
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
                          "start": 3536,
                          "end": 3538
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3541,
                          "end": 3543
                        },
                        "definite": false,
                        "start": 3536,
                        "end": 3543
                      }
                    ],
                    "declare": false,
                    "start": 3532,
                    "end": 3544
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3525,
                  "end": 3544
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
                                "start": 3568,
                                "end": 3570
                              },
                              "typeArguments": null,
                              "start": 3568,
                              "end": 3570
                            },
                            "start": 3566,
                            "end": 3570
                          },
                          "start": 3564,
                          "end": 3570
                        },
                        "init": null,
                        "definite": false,
                        "start": 3564,
                        "end": 3570
                      }
                    ],
                    "declare": false,
                    "start": 3560,
                    "end": 3571
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3553,
                  "end": 3571
                }
              ],
              "start": 3411,
              "end": 3577
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 3390,
            "end": 3577
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_im1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3978,
              "end": 3992
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_M1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 3995,
              "end": 4007
            },
            "importKind": "value",
            "start": 3971,
            "end": 4008
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
                    "start": 4024,
                    "end": 4048
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4051,
                      "end": 4065
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4066,
                      "end": 4068
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4051,
                    "end": 4068
                  },
                  "definite": false,
                  "start": 4024,
                  "end": 4068
                }
              ],
              "declare": false,
              "start": 4020,
              "end": 4069
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4013,
            "end": 4069
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
                    "start": 4085,
                    "end": 4109
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
                        "start": 4116,
                        "end": 4130
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4131,
                        "end": 4133
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4116,
                      "end": 4133
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 4112,
                    "end": 4135
                  },
                  "definite": false,
                  "start": 4085,
                  "end": 4135
                }
              ],
              "declare": false,
              "start": 4081,
              "end": 4136
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4074,
            "end": 4136
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
                    "start": 4152,
                    "end": 4176
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4179,
                      "end": 4193
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4194,
                      "end": 4196
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4179,
                    "end": 4196
                  },
                  "definite": false,
                  "start": 4152,
                  "end": 4196
                }
              ],
              "declare": false,
              "start": 4148,
              "end": 4197
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4141,
            "end": 4197
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
                    "start": 4213,
                    "end": 4237
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
                        "start": 4240,
                        "end": 4254
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4255,
                        "end": 4257
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4240,
                      "end": 4257
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 4240,
                    "end": 4259
                  },
                  "definite": false,
                  "start": 4213,
                  "end": 4259
                }
              ],
              "declare": false,
              "start": 4209,
              "end": 4260
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4202,
            "end": 4260
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
                  "start": 4269,
                  "end": 4294
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im1_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4297,
                    "end": 4311
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4312,
                    "end": 4314
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4297,
                  "end": 4314
                },
                "definite": false,
                "start": 4269,
                "end": 4314
              }
            ],
            "declare": false,
            "start": 4265,
            "end": 4315
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
                  "start": 4324,
                  "end": 4349
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
                      "start": 4356,
                      "end": 4370
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4371,
                      "end": 4373
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4356,
                    "end": 4373
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 4352,
                  "end": 4375
                },
                "definite": false,
                "start": 4324,
                "end": 4375
              }
            ],
            "declare": false,
            "start": 4320,
            "end": 4376
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
                  "start": 4385,
                  "end": 4410
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im1_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4413,
                    "end": 4427
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4428,
                    "end": 4430
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4413,
                  "end": 4430
                },
                "definite": false,
                "start": 4385,
                "end": 4430
              }
            ],
            "declare": false,
            "start": 4381,
            "end": 4431
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
                  "start": 4440,
                  "end": 4465
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
                      "start": 4468,
                      "end": 4482
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4483,
                      "end": 4485
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4468,
                    "end": 4485
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 4468,
                  "end": 4487
                },
                "definite": false,
                "start": 4440,
                "end": 4487
              }
            ],
            "declare": false,
            "start": 4436,
            "end": 4488
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_im2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4502,
              "end": 4516
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_M2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4519,
              "end": 4532
            },
            "importKind": "value",
            "start": 4495,
            "end": 4533
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
                    "start": 4549,
                    "end": 4573
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4576,
                      "end": 4590
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4591,
                      "end": 4593
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4576,
                    "end": 4593
                  },
                  "definite": false,
                  "start": 4549,
                  "end": 4593
                }
              ],
              "declare": false,
              "start": 4545,
              "end": 4594
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4538,
            "end": 4594
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
                    "start": 4610,
                    "end": 4634
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
                        "start": 4641,
                        "end": 4655
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4656,
                        "end": 4658
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4641,
                      "end": 4658
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 4637,
                    "end": 4660
                  },
                  "definite": false,
                  "start": 4610,
                  "end": 4660
                }
              ],
              "declare": false,
              "start": 4606,
              "end": 4661
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4599,
            "end": 4661
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
                    "start": 4677,
                    "end": 4701
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4704,
                      "end": 4718
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4719,
                      "end": 4721
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4704,
                    "end": 4721
                  },
                  "definite": false,
                  "start": 4677,
                  "end": 4721
                }
              ],
              "declare": false,
              "start": 4673,
              "end": 4722
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4666,
            "end": 4722
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
                    "start": 4738,
                    "end": 4762
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
                        "start": 4765,
                        "end": 4779
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4780,
                        "end": 4782
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4765,
                      "end": 4782
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 4765,
                    "end": 4784
                  },
                  "definite": false,
                  "start": 4738,
                  "end": 4784
                }
              ],
              "declare": false,
              "start": 4734,
              "end": 4785
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4727,
            "end": 4785
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
                  "start": 4794,
                  "end": 4819
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4822,
                    "end": 4836
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4837,
                    "end": 4839
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4822,
                  "end": 4839
                },
                "definite": false,
                "start": 4794,
                "end": 4839
              }
            ],
            "declare": false,
            "start": 4790,
            "end": 4840
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
                  "start": 4849,
                  "end": 4874
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
                      "start": 4881,
                      "end": 4895
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4896,
                      "end": 4898
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4881,
                    "end": 4898
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 4877,
                  "end": 4900
                },
                "definite": false,
                "start": 4849,
                "end": 4900
              }
            ],
            "declare": false,
            "start": 4845,
            "end": 4901
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
                  "start": 4910,
                  "end": 4935
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4938,
                    "end": 4952
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4953,
                    "end": 4955
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4938,
                  "end": 4955
                },
                "definite": false,
                "start": 4910,
                "end": 4955
              }
            ],
            "declare": false,
            "start": 4906,
            "end": 4956
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
                  "start": 4965,
                  "end": 4990
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
                      "start": 4993,
                      "end": 5007
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5008,
                      "end": 5010
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4993,
                    "end": 5010
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 4993,
                  "end": 5012
                },
                "definite": false,
                "start": 4965,
                "end": 5012
              }
            ],
            "declare": false,
            "start": 4961,
            "end": 5013
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
                "start": 6174,
                "end": 6187
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_M1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 6190,
                "end": 6202
              },
              "importKind": "value",
              "start": 6167,
              "end": 6203
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6160,
            "end": 6203
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
                "start": 6222,
                "end": 6235
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_M2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 6238,
                "end": 6251
              },
              "importKind": "value",
              "start": 6215,
              "end": 6252
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6208,
            "end": 6252
          }
        ],
        "start": 3185,
        "end": 6377
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 3175,
      "end": 6377
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
          "start": 6393,
          "end": 6406
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
                  "start": 6426,
                  "end": 6428
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 6429,
                  "end": 6436
                },
                "abstract": false,
                "declare": false,
                "start": 6420,
                "end": 6436
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6413,
              "end": 6436
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
                  "start": 6457,
                  "end": 6459
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
                          "start": 6483,
                          "end": 6485
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 6479,
                        "end": 6485
                      },
                      "start": 6472,
                      "end": 6486
                    }
                  ],
                  "start": 6462,
                  "end": 6492
                },
                "expression": false,
                "start": 6448,
                "end": 6492
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6441,
              "end": 6492
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
                      "start": 6508,
                      "end": 6510
                    },
                    "init": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6513,
                      "end": 6515
                    },
                    "definite": false,
                    "start": 6508,
                    "end": 6515
                  }
                ],
                "declare": false,
                "start": 6504,
                "end": 6516
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6497,
              "end": 6516
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
                            "start": 6536,
                            "end": 6538
                          },
                          "typeArguments": null,
                          "start": 6536,
                          "end": 6538
                        },
                        "start": 6534,
                        "end": 6538
                      },
                      "start": 6532,
                      "end": 6538
                    },
                    "init": null,
                    "definite": false,
                    "start": 6532,
                    "end": 6538
                  }
                ],
                "declare": false,
                "start": 6528,
                "end": 6539
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6521,
              "end": 6539
            }
          ],
          "start": 6407,
          "end": 6541
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 6386,
        "end": 6541
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 6379,
      "end": 6541
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
          "start": 6727,
          "end": 6741
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
                  "start": 6761,
                  "end": 6763
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 6764,
                  "end": 6771
                },
                "abstract": false,
                "declare": false,
                "start": 6755,
                "end": 6771
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6748,
              "end": 6771
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
                  "start": 6792,
                  "end": 6794
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
                          "start": 6818,
                          "end": 6820
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 6814,
                        "end": 6820
                      },
                      "start": 6807,
                      "end": 6821
                    }
                  ],
                  "start": 6797,
                  "end": 6827
                },
                "expression": false,
                "start": 6783,
                "end": 6827
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6776,
              "end": 6827
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
                      "start": 6843,
                      "end": 6845
                    },
                    "init": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6848,
                      "end": 6850
                    },
                    "definite": false,
                    "start": 6843,
                    "end": 6850
                  }
                ],
                "declare": false,
                "start": 6839,
                "end": 6851
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6832,
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
                            "start": 6871,
                            "end": 6873
                          },
                          "typeArguments": null,
                          "start": 6871,
                          "end": 6873
                        },
                        "start": 6869,
                        "end": 6873
                      },
                      "start": 6867,
                      "end": 6873
                    },
                    "init": null,
                    "definite": false,
                    "start": 6867,
                    "end": 6873
                  }
                ],
                "declare": false,
                "start": 6863,
                "end": 6874
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6856,
              "end": 6874
            }
          ],
          "start": 6742,
          "end": 6876
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 6720,
        "end": 6876
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 6713,
      "end": 6876
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_im1_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 7057,
        "end": 7072
      },
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_M1_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 7075,
        "end": 7088
      },
      "importKind": "value",
      "start": 7050,
      "end": 7089
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
              "start": 7101,
              "end": 7126
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im1_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 7129,
                "end": 7144
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 7145,
                "end": 7147
              },
              "optional": false,
              "computed": false,
              "start": 7129,
              "end": 7147
            },
            "definite": false,
            "start": 7101,
            "end": 7147
          }
        ],
        "declare": false,
        "start": 7097,
        "end": 7148
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7090,
      "end": 7148
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
              "start": 7160,
              "end": 7185
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
                  "start": 7192,
                  "end": 7207
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7208,
                  "end": 7210
                },
                "optional": false,
                "computed": false,
                "start": 7192,
                "end": 7210
              },
              "typeArguments": null,
              "arguments": [],
              "start": 7188,
              "end": 7212
            },
            "definite": false,
            "start": 7160,
            "end": 7212
          }
        ],
        "declare": false,
        "start": 7156,
        "end": 7213
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7149,
      "end": 7213
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
              "start": 7225,
              "end": 7250
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im1_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 7253,
                "end": 7268
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 7269,
                "end": 7271
              },
              "optional": false,
              "computed": false,
              "start": 7253,
              "end": 7271
            },
            "definite": false,
            "start": 7225,
            "end": 7271
          }
        ],
        "declare": false,
        "start": 7221,
        "end": 7272
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7214,
      "end": 7272
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
              "start": 7284,
              "end": 7309
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
                  "start": 7312,
                  "end": 7327
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7328,
                  "end": 7330
                },
                "optional": false,
                "computed": false,
                "start": 7312,
                "end": 7330
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 7312,
              "end": 7332
            },
            "definite": false,
            "start": 7284,
            "end": 7332
          }
        ],
        "declare": false,
        "start": 7280,
        "end": 7333
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7273,
      "end": 7333
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
            "start": 7338,
            "end": 7364
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_im1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 7367,
              "end": 7382
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 7383,
              "end": 7385
            },
            "optional": false,
            "computed": false,
            "start": 7367,
            "end": 7385
          },
          "definite": false,
          "start": 7338,
          "end": 7385
        }
      ],
      "declare": false,
      "start": 7334,
      "end": 7386
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
            "start": 7391,
            "end": 7417
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
                "start": 7424,
                "end": 7439
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 7440,
                "end": 7442
              },
              "optional": false,
              "computed": false,
              "start": 7424,
              "end": 7442
            },
            "typeArguments": null,
            "arguments": [],
            "start": 7420,
            "end": 7444
          },
          "definite": false,
          "start": 7391,
          "end": 7444
        }
      ],
      "declare": false,
      "start": 7387,
      "end": 7445
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
            "start": 7450,
            "end": 7476
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_im1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 7479,
              "end": 7494
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 7495,
              "end": 7497
            },
            "optional": false,
            "computed": false,
            "start": 7479,
            "end": 7497
          },
          "definite": false,
          "start": 7450,
          "end": 7497
        }
      ],
      "declare": false,
      "start": 7446,
      "end": 7498
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
            "start": 7503,
            "end": 7529
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
                "start": 7532,
                "end": 7547
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 7548,
                "end": 7550
              },
              "optional": false,
              "computed": false,
              "start": 7532,
              "end": 7550
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 7532,
            "end": 7552
          },
          "definite": false,
          "start": 7503,
          "end": 7552
        }
      ],
      "declare": false,
      "start": 7499,
      "end": 7553
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_im3_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 8097,
        "end": 8112
      },
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_M3_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 8115,
        "end": 8129
      },
      "importKind": "value",
      "start": 8090,
      "end": 8130
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
              "start": 8142,
              "end": 8167
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im3_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 8170,
                "end": 8185
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 8186,
                "end": 8188
              },
              "optional": false,
              "computed": false,
              "start": 8170,
              "end": 8188
            },
            "definite": false,
            "start": 8142,
            "end": 8188
          }
        ],
        "declare": false,
        "start": 8138,
        "end": 8189
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8131,
      "end": 8189
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
              "start": 8201,
              "end": 8226
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
                  "start": 8233,
                  "end": 8248
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8249,
                  "end": 8251
                },
                "optional": false,
                "computed": false,
                "start": 8233,
                "end": 8251
              },
              "typeArguments": null,
              "arguments": [],
              "start": 8229,
              "end": 8253
            },
            "definite": false,
            "start": 8201,
            "end": 8253
          }
        ],
        "declare": false,
        "start": 8197,
        "end": 8254
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8190,
      "end": 8254
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
              "start": 8266,
              "end": 8291
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im3_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 8294,
                "end": 8309
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 8310,
                "end": 8312
              },
              "optional": false,
              "computed": false,
              "start": 8294,
              "end": 8312
            },
            "definite": false,
            "start": 8266,
            "end": 8312
          }
        ],
        "declare": false,
        "start": 8262,
        "end": 8313
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8255,
      "end": 8313
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
              "start": 8325,
              "end": 8350
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
                  "start": 8353,
                  "end": 8368
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8369,
                  "end": 8371
                },
                "optional": false,
                "computed": false,
                "start": 8353,
                "end": 8371
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 8353,
              "end": 8373
            },
            "definite": false,
            "start": 8325,
            "end": 8373
          }
        ],
        "declare": false,
        "start": 8321,
        "end": 8374
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8314,
      "end": 8374
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
            "start": 8379,
            "end": 8405
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_im3_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 8408,
              "end": 8423
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 8424,
              "end": 8426
            },
            "optional": false,
            "computed": false,
            "start": 8408,
            "end": 8426
          },
          "definite": false,
          "start": 8379,
          "end": 8426
        }
      ],
      "declare": false,
      "start": 8375,
      "end": 8427
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
            "start": 8432,
            "end": 8458
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
                "start": 8465,
                "end": 8480
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 8481,
                "end": 8483
              },
              "optional": false,
              "computed": false,
              "start": 8465,
              "end": 8483
            },
            "typeArguments": null,
            "arguments": [],
            "start": 8461,
            "end": 8485
          },
          "definite": false,
          "start": 8432,
          "end": 8485
        }
      ],
      "declare": false,
      "start": 8428,
      "end": 8486
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
            "start": 8491,
            "end": 8517
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_im3_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 8520,
              "end": 8535
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 8536,
              "end": 8538
            },
            "optional": false,
            "computed": false,
            "start": 8520,
            "end": 8538
          },
          "definite": false,
          "start": 8491,
          "end": 8538
        }
      ],
      "declare": false,
      "start": 8487,
      "end": 8539
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
            "start": 8544,
            "end": 8570
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
                "start": 8573,
                "end": 8588
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 8589,
                "end": 8591
              },
              "optional": false,
              "computed": false,
              "start": 8573,
              "end": 8591
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 8573,
            "end": 8593
          },
          "definite": false,
          "start": 8544,
          "end": 8593
        }
      ],
      "declare": false,
      "start": 8540,
      "end": 8594
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
          "start": 9177,
          "end": 9191
        },
        "moduleReference": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_M1_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 9194,
          "end": 9207
        },
        "importKind": "value",
        "start": 9170,
        "end": 9208
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 9163,
      "end": 9208
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
          "start": 9223,
          "end": 9237
        },
        "moduleReference": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_M3_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 9240,
          "end": 9254
        },
        "importKind": "value",
        "start": 9216,
        "end": 9255
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 9209,
      "end": 9255
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 12421,
        "end": 12423
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
              "start": 12485,
              "end": 12487
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
                        "start": 12502,
                        "end": 12503
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 12506,
                        "end": 12508
                      },
                      "definite": false,
                      "start": 12502,
                      "end": 12508
                    }
                  ],
                  "declare": false,
                  "start": 12498,
                  "end": 12509
                }
              ],
              "start": 12488,
              "end": 12567
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 12478,
            "end": 12567
          }
        ],
        "start": 12424,
        "end": 12570
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 12414,
      "end": 12570
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
          "start": 12586,
          "end": 12588
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
                "start": 12650,
                "end": 12652
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
                          "start": 12667,
                          "end": 12668
                        },
                        "init": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 12671,
                          "end": 12673
                        },
                        "definite": false,
                        "start": 12667,
                        "end": 12673
                      }
                    ],
                    "declare": false,
                    "start": 12663,
                    "end": 12674
                  }
                ],
                "start": 12653,
                "end": 12732
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 12643,
              "end": 12732
            }
          ],
          "start": 12589,
          "end": 12735
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 12579,
        "end": 12735
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 12572,
      "end": 12735
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 12735
}
```
