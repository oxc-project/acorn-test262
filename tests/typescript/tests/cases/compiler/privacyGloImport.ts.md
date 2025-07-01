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
        "start": 7,
        "end": 9
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
                "start": 30,
                "end": 42
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
                        "start": 66,
                        "end": 68
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 69,
                        "end": 80
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 60,
                      "end": 80
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 53,
                    "end": 80
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
                        "start": 105,
                        "end": 107
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
                                "start": 135,
                                "end": 137
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 131,
                              "end": 137
                            },
                            "start": 124,
                            "end": 138
                          }
                        ],
                        "start": 110,
                        "end": 148
                      },
                      "expression": false,
                      "start": 96,
                      "end": 148
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 89,
                    "end": 148
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
                            "start": 168,
                            "end": 170
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 173,
                            "end": 175
                          },
                          "definite": false,
                          "start": 168,
                          "end": 175
                        }
                      ],
                      "declare": false,
                      "start": 164,
                      "end": 176
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 157,
                    "end": 176
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
                                  "start": 200,
                                  "end": 202
                                },
                                "typeArguments": null,
                                "start": 200,
                                "end": 202
                              },
                              "start": 198,
                              "end": 202
                            },
                            "start": 196,
                            "end": 202
                          },
                          "init": null,
                          "definite": false,
                          "start": 196,
                          "end": 202
                        }
                      ],
                      "declare": false,
                      "start": 192,
                      "end": 203
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 185,
                    "end": 203
                  }
                ],
                "start": 43,
                "end": 209
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 23,
              "end": 209
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 16,
            "end": 209
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_M2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 235
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
                      "start": 259,
                      "end": 261
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 262,
                      "end": 273
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 253,
                    "end": 273
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 246,
                  "end": 273
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
                      "start": 298,
                      "end": 300
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
                              "start": 328,
                              "end": 330
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 324,
                            "end": 330
                          },
                          "start": 317,
                          "end": 331
                        }
                      ],
                      "start": 303,
                      "end": 341
                    },
                    "expression": false,
                    "start": 289,
                    "end": 341
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 282,
                  "end": 341
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
                          "start": 361,
                          "end": 363
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 366,
                          "end": 368
                        },
                        "definite": false,
                        "start": 361,
                        "end": 368
                      }
                    ],
                    "declare": false,
                    "start": 357,
                    "end": 369
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 350,
                  "end": 369
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
                                "start": 393,
                                "end": 395
                              },
                              "typeArguments": null,
                              "start": 393,
                              "end": 395
                            },
                            "start": 391,
                            "end": 395
                          },
                          "start": 389,
                          "end": 395
                        },
                        "init": null,
                        "definite": false,
                        "start": 389,
                        "end": 395
                      }
                    ],
                    "declare": false,
                    "start": 385,
                    "end": 396
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 378,
                  "end": 396
                }
              ],
              "start": 236,
              "end": 402
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 215,
            "end": 402
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_im1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 803,
              "end": 817
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_M1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 820,
              "end": 832
            },
            "importKind": "value",
            "start": 796,
            "end": 833
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
                    "start": 849,
                    "end": 873
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 876,
                      "end": 890
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 891,
                      "end": 893
                    },
                    "optional": false,
                    "computed": false,
                    "start": 876,
                    "end": 893
                  },
                  "definite": false,
                  "start": 849,
                  "end": 893
                }
              ],
              "declare": false,
              "start": 845,
              "end": 894
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 838,
            "end": 894
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
                    "start": 910,
                    "end": 934
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
                        "start": 941,
                        "end": 955
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 956,
                        "end": 958
                      },
                      "optional": false,
                      "computed": false,
                      "start": 941,
                      "end": 958
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 937,
                    "end": 960
                  },
                  "definite": false,
                  "start": 910,
                  "end": 960
                }
              ],
              "declare": false,
              "start": 906,
              "end": 961
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 899,
            "end": 961
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
                    "start": 977,
                    "end": 1001
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1004,
                      "end": 1018
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1019,
                      "end": 1021
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1004,
                    "end": 1021
                  },
                  "definite": false,
                  "start": 977,
                  "end": 1021
                }
              ],
              "declare": false,
              "start": 973,
              "end": 1022
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 966,
            "end": 1022
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
                    "start": 1038,
                    "end": 1062
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
                        "start": 1065,
                        "end": 1079
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1080,
                        "end": 1082
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1065,
                      "end": 1082
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1065,
                    "end": 1084
                  },
                  "definite": false,
                  "start": 1038,
                  "end": 1084
                }
              ],
              "declare": false,
              "start": 1034,
              "end": 1085
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1027,
            "end": 1085
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
                  "start": 1094,
                  "end": 1119
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im1_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1122,
                    "end": 1136
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1137,
                    "end": 1139
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1122,
                  "end": 1139
                },
                "definite": false,
                "start": 1094,
                "end": 1139
              }
            ],
            "declare": false,
            "start": 1090,
            "end": 1140
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
                  "start": 1149,
                  "end": 1174
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
                      "start": 1181,
                      "end": 1195
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1196,
                      "end": 1198
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1181,
                    "end": 1198
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 1177,
                  "end": 1200
                },
                "definite": false,
                "start": 1149,
                "end": 1200
              }
            ],
            "declare": false,
            "start": 1145,
            "end": 1201
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
                  "start": 1210,
                  "end": 1235
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im1_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1238,
                    "end": 1252
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1253,
                    "end": 1255
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1238,
                  "end": 1255
                },
                "definite": false,
                "start": 1210,
                "end": 1255
              }
            ],
            "declare": false,
            "start": 1206,
            "end": 1256
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
                  "start": 1265,
                  "end": 1290
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
                      "start": 1293,
                      "end": 1307
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1308,
                      "end": 1310
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1293,
                    "end": 1310
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1293,
                  "end": 1312
                },
                "definite": false,
                "start": 1265,
                "end": 1312
              }
            ],
            "declare": false,
            "start": 1261,
            "end": 1313
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_im2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1327,
              "end": 1341
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_M2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1344,
              "end": 1357
            },
            "importKind": "value",
            "start": 1320,
            "end": 1358
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
                    "start": 1374,
                    "end": 1398
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1401,
                      "end": 1415
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1416,
                      "end": 1418
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1401,
                    "end": 1418
                  },
                  "definite": false,
                  "start": 1374,
                  "end": 1418
                }
              ],
              "declare": false,
              "start": 1370,
              "end": 1419
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1363,
            "end": 1419
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
                    "start": 1435,
                    "end": 1459
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
                        "start": 1466,
                        "end": 1480
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1481,
                        "end": 1483
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1466,
                      "end": 1483
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1462,
                    "end": 1485
                  },
                  "definite": false,
                  "start": 1435,
                  "end": 1485
                }
              ],
              "declare": false,
              "start": 1431,
              "end": 1486
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1424,
            "end": 1486
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
                    "start": 1502,
                    "end": 1526
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1529,
                      "end": 1543
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1544,
                      "end": 1546
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1529,
                    "end": 1546
                  },
                  "definite": false,
                  "start": 1502,
                  "end": 1546
                }
              ],
              "declare": false,
              "start": 1498,
              "end": 1547
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1491,
            "end": 1547
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
                    "start": 1563,
                    "end": 1587
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
                        "start": 1590,
                        "end": 1604
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1605,
                        "end": 1607
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1590,
                      "end": 1607
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1590,
                    "end": 1609
                  },
                  "definite": false,
                  "start": 1563,
                  "end": 1609
                }
              ],
              "declare": false,
              "start": 1559,
              "end": 1610
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1552,
            "end": 1610
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
                  "start": 1619,
                  "end": 1644
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1647,
                    "end": 1661
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1662,
                    "end": 1664
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1647,
                  "end": 1664
                },
                "definite": false,
                "start": 1619,
                "end": 1664
              }
            ],
            "declare": false,
            "start": 1615,
            "end": 1665
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
                  "start": 1674,
                  "end": 1699
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
                      "start": 1706,
                      "end": 1720
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1721,
                      "end": 1723
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1706,
                    "end": 1723
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 1702,
                  "end": 1725
                },
                "definite": false,
                "start": 1674,
                "end": 1725
              }
            ],
            "declare": false,
            "start": 1670,
            "end": 1726
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
                  "start": 1735,
                  "end": 1760
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1763,
                    "end": 1777
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1778,
                    "end": 1780
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1763,
                  "end": 1780
                },
                "definite": false,
                "start": 1735,
                "end": 1780
              }
            ],
            "declare": false,
            "start": 1731,
            "end": 1781
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
                  "start": 1790,
                  "end": 1815
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
                      "start": 1818,
                      "end": 1832
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1833,
                      "end": 1835
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1818,
                    "end": 1835
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1818,
                  "end": 1837
                },
                "definite": false,
                "start": 1790,
                "end": 1837
              }
            ],
            "declare": false,
            "start": 1786,
            "end": 1838
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
                "start": 2963,
                "end": 2976
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_M1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2979,
                "end": 2991
              },
              "importKind": "value",
              "start": 2956,
              "end": 2992
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2949,
            "end": 2992
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
                "start": 3011,
                "end": 3024
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_M2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3027,
                "end": 3040
              },
              "importKind": "value",
              "start": 3004,
              "end": 3041
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2997,
            "end": 3041
          }
        ],
        "start": 10,
        "end": 3166
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 3166
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_M1_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 3175,
        "end": 3188
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
                "start": 3208,
                "end": 3210
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 3211,
                "end": 3218
              },
              "abstract": false,
              "declare": false,
              "start": 3202,
              "end": 3218
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3195,
            "end": 3218
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
                "start": 3239,
                "end": 3241
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
                        "start": 3265,
                        "end": 3267
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3261,
                      "end": 3267
                    },
                    "start": 3254,
                    "end": 3268
                  }
                ],
                "start": 3244,
                "end": 3274
              },
              "expression": false,
              "start": 3230,
              "end": 3274
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3223,
            "end": 3274
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
                    "start": 3290,
                    "end": 3292
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3295,
                    "end": 3297
                  },
                  "definite": false,
                  "start": 3290,
                  "end": 3297
                }
              ],
              "declare": false,
              "start": 3286,
              "end": 3298
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3279,
            "end": 3298
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
                          "start": 3318,
                          "end": 3320
                        },
                        "typeArguments": null,
                        "start": 3318,
                        "end": 3320
                      },
                      "start": 3316,
                      "end": 3320
                    },
                    "start": 3314,
                    "end": 3320
                  },
                  "init": null,
                  "definite": false,
                  "start": 3314,
                  "end": 3320
                }
              ],
              "declare": false,
              "start": 3310,
              "end": 3321
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3303,
            "end": 3321
          }
        ],
        "start": 3189,
        "end": 3323
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 3168,
      "end": 3323
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "glo_M2_public",
        "raw": "\"glo_M2_public\"",
        "start": 3340,
        "end": 3355
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
                "start": 3378,
                "end": 3380
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 3369,
              "end": 3383
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3362,
            "end": 3383
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
                "start": 3401,
                "end": 3403
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 3404,
                "end": 3411
              },
              "abstract": false,
              "declare": false,
              "start": 3395,
              "end": 3411
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3388,
            "end": 3411
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
                                  "start": 3441,
                                  "end": 3443
                                },
                                "typeArguments": null,
                                "start": 3441,
                                "end": 3443
                              },
                              "start": 3439,
                              "end": 3443
                            },
                            "start": 3433,
                            "end": 3444
                          }
                        ],
                        "start": 3431,
                        "end": 3446
                      },
                      "start": 3429,
                      "end": 3446
                    },
                    "start": 3427,
                    "end": 3446
                  },
                  "init": null,
                  "definite": false,
                  "start": 3427,
                  "end": 3446
                }
              ],
              "declare": false,
              "start": 3423,
              "end": 3447
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3416,
            "end": 3447
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
                          "start": 3467,
                          "end": 3469
                        },
                        "typeArguments": null,
                        "start": 3467,
                        "end": 3469
                      },
                      "start": 3465,
                      "end": 3469
                    },
                    "start": 3463,
                    "end": 3469
                  },
                  "init": null,
                  "definite": false,
                  "start": 3463,
                  "end": 3469
                }
              ],
              "declare": false,
              "start": 3459,
              "end": 3470
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3452,
            "end": 3470
          }
        ],
        "start": 3356,
        "end": 3472
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 3325,
      "end": 3472
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "use_glo_M1_public",
        "raw": "\"use_glo_M1_public\"",
        "start": 3489,
        "end": 3508
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
              "start": 3522,
              "end": 3539
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_M1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 3542,
              "end": 3555
            },
            "importKind": "value",
            "start": 3515,
            "end": 3556
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
                                    "start": 3611,
                                    "end": 3628
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3629,
                                    "end": 3631
                                  },
                                  "start": 3611,
                                  "end": 3631
                                },
                                "typeArguments": null,
                                "start": 3611,
                                "end": 3631
                              },
                              "start": 3609,
                              "end": 3631
                            },
                            "start": 3603,
                            "end": 3632
                          }
                        ],
                        "start": 3601,
                        "end": 3634
                      },
                      "start": 3599,
                      "end": 3634
                    },
                    "start": 3572,
                    "end": 3634
                  },
                  "init": null,
                  "definite": false,
                  "start": 3572,
                  "end": 3634
                }
              ],
              "declare": false,
              "start": 3568,
              "end": 3635
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3561,
            "end": 3635
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
                          "start": 3687,
                          "end": 3704
                        },
                        "typeArguments": null,
                        "start": 3680,
                        "end": 3704
                      },
                      "start": 3678,
                      "end": 3704
                    },
                    "start": 3651,
                    "end": 3704
                  },
                  "init": null,
                  "definite": false,
                  "start": 3651,
                  "end": 3704
                }
              ],
              "declare": false,
              "start": 3647,
              "end": 3705
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3640,
            "end": 3705
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
                                "start": 3755,
                                "end": 3772
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3773,
                                "end": 3775
                              },
                              "start": 3755,
                              "end": 3775
                            },
                            "typeArguments": null,
                            "start": 3755,
                            "end": 3775
                          },
                          "start": 3752,
                          "end": 3775
                        },
                        "start": 3750,
                        "end": 3775
                      },
                      "start": 3748,
                      "end": 3775
                    },
                    "start": 3721,
                    "end": 3775
                  },
                  "init": null,
                  "definite": false,
                  "start": 3721,
                  "end": 3775
                }
              ],
              "declare": false,
              "start": 3717,
              "end": 3776
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3710,
            "end": 3776
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
                                  "start": 3825,
                                  "end": 3842
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3843,
                                  "end": 3845
                                },
                                "start": 3825,
                                "end": 3845
                              },
                              "typeArguments": null,
                              "start": 3825,
                              "end": 3845
                            },
                            "start": 3823,
                            "end": 3845
                          },
                          "start": 3817,
                          "end": 3846
                        }
                      ],
                      "start": 3815,
                      "end": 3848
                    },
                    "start": 3813,
                    "end": 3848
                  },
                  "start": 3785,
                  "end": 3848
                },
                "init": null,
                "definite": false,
                "start": 3785,
                "end": 3848
              }
            ],
            "declare": false,
            "start": 3781,
            "end": 3849
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
                        "start": 3895,
                        "end": 3912
                      },
                      "typeArguments": null,
                      "start": 3888,
                      "end": 3912
                    },
                    "start": 3886,
                    "end": 3912
                  },
                  "start": 3858,
                  "end": 3912
                },
                "init": null,
                "definite": false,
                "start": 3858,
                "end": 3912
              }
            ],
            "declare": false,
            "start": 3854,
            "end": 3913
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
                              "start": 3958,
                              "end": 3975
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3976,
                              "end": 3978
                            },
                            "start": 3958,
                            "end": 3978
                          },
                          "typeArguments": null,
                          "start": 3958,
                          "end": 3978
                        },
                        "start": 3955,
                        "end": 3978
                      },
                      "start": 3952,
                      "end": 3978
                    },
                    "start": 3950,
                    "end": 3978
                  },
                  "start": 3922,
                  "end": 3978
                },
                "init": null,
                "definite": false,
                "start": 3922,
                "end": 3978
              }
            ],
            "declare": false,
            "start": 3918,
            "end": 3979
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "use_glo_M2_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 3992,
              "end": 4009
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "glo_M2_public",
                "raw": "\"glo_M2_public\"",
                "start": 4020,
                "end": 4035
              },
              "start": 4012,
              "end": 4036
            },
            "importKind": "value",
            "start": 3985,
            "end": 4037
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
                                    "start": 4092,
                                    "end": 4109
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4110,
                                    "end": 4112
                                  },
                                  "start": 4092,
                                  "end": 4112
                                },
                                "typeArguments": null,
                                "start": 4092,
                                "end": 4112
                              },
                              "start": 4090,
                              "end": 4112
                            },
                            "start": 4084,
                            "end": 4113
                          }
                        ],
                        "start": 4082,
                        "end": 4115
                      },
                      "start": 4080,
                      "end": 4115
                    },
                    "start": 4053,
                    "end": 4115
                  },
                  "init": null,
                  "definite": false,
                  "start": 4053,
                  "end": 4115
                }
              ],
              "declare": false,
              "start": 4049,
              "end": 4116
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4042,
            "end": 4116
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
                          "start": 4168,
                          "end": 4185
                        },
                        "typeArguments": null,
                        "start": 4161,
                        "end": 4185
                      },
                      "start": 4159,
                      "end": 4185
                    },
                    "start": 4132,
                    "end": 4185
                  },
                  "init": null,
                  "definite": false,
                  "start": 4132,
                  "end": 4185
                }
              ],
              "declare": false,
              "start": 4128,
              "end": 4186
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4121,
            "end": 4186
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
                                "start": 4237,
                                "end": 4254
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4255,
                                "end": 4257
                              },
                              "start": 4237,
                              "end": 4257
                            },
                            "typeArguments": null,
                            "start": 4237,
                            "end": 4257
                          },
                          "start": 4234,
                          "end": 4257
                        },
                        "start": 4231,
                        "end": 4257
                      },
                      "start": 4229,
                      "end": 4257
                    },
                    "start": 4202,
                    "end": 4257
                  },
                  "init": null,
                  "definite": false,
                  "start": 4202,
                  "end": 4257
                }
              ],
              "declare": false,
              "start": 4198,
              "end": 4258
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4191,
            "end": 4258
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
                                  "start": 4307,
                                  "end": 4324
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4325,
                                  "end": 4327
                                },
                                "start": 4307,
                                "end": 4327
                              },
                              "typeArguments": null,
                              "start": 4307,
                              "end": 4327
                            },
                            "start": 4305,
                            "end": 4327
                          },
                          "start": 4299,
                          "end": 4328
                        }
                      ],
                      "start": 4297,
                      "end": 4330
                    },
                    "start": 4295,
                    "end": 4330
                  },
                  "start": 4267,
                  "end": 4330
                },
                "init": null,
                "definite": false,
                "start": 4267,
                "end": 4330
              }
            ],
            "declare": false,
            "start": 4263,
            "end": 4331
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
                        "start": 4377,
                        "end": 4394
                      },
                      "typeArguments": null,
                      "start": 4370,
                      "end": 4394
                    },
                    "start": 4368,
                    "end": 4394
                  },
                  "start": 4340,
                  "end": 4394
                },
                "init": null,
                "definite": false,
                "start": 4340,
                "end": 4394
              }
            ],
            "declare": false,
            "start": 4336,
            "end": 4395
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
                              "start": 4440,
                              "end": 4457
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4458,
                              "end": 4460
                            },
                            "start": 4440,
                            "end": 4460
                          },
                          "typeArguments": null,
                          "start": 4440,
                          "end": 4460
                        },
                        "start": 4437,
                        "end": 4460
                      },
                      "start": 4434,
                      "end": 4460
                    },
                    "start": 4432,
                    "end": 4460
                  },
                  "start": 4404,
                  "end": 4460
                },
                "init": null,
                "definite": false,
                "start": 4404,
                "end": 4460
              }
            ],
            "declare": false,
            "start": 4400,
            "end": 4461
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4474,
              "end": 4476
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
                    "start": 4551,
                    "end": 4565
                  },
                  "moduleReference": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "glo_M1_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4568,
                    "end": 4581
                  },
                  "importKind": "value",
                  "start": 4544,
                  "end": 4582
                },
                {
                  "type": "TSModuleDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4599,
                    "end": 4601
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
                          "start": 4687,
                          "end": 4704
                        },
                        "moduleReference": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "glo_M1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4707,
                          "end": 4720
                        },
                        "importKind": "value",
                        "start": 4680,
                        "end": 4721
                      }
                    ],
                    "start": 4602,
                    "end": 4731
                  },
                  "kind": "module",
                  "declare": false,
                  "global": false,
                  "start": 4592,
                  "end": 4731
                }
              ],
              "start": 4477,
              "end": 4737
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 4467,
            "end": 4737
          }
        ],
        "start": 3509,
        "end": 4739
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 3474,
      "end": 4739
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "anotherParseError",
        "raw": "\"anotherParseError\"",
        "start": 4756,
        "end": 4775
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
              "start": 4789,
              "end": 4791
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "start": 4792,
              "end": 4844
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 4782,
            "end": 4844
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4857,
              "end": 4859
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "start": 4860,
              "end": 4905
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 4850,
            "end": 4905
          }
        ],
        "start": 4776,
        "end": 4937
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 4741,
      "end": 4937
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4946,
        "end": 4948
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
              "start": 5010,
              "end": 5012
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
                        "start": 5027,
                        "end": 5028
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 5031,
                        "end": 5033
                      },
                      "definite": false,
                      "start": 5027,
                      "end": 5033
                    }
                  ],
                  "declare": false,
                  "start": 5023,
                  "end": 5034
                }
              ],
              "start": 5013,
              "end": 5092
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 5003,
            "end": 5092
          }
        ],
        "start": 4949,
        "end": 5095
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 4939,
      "end": 5095
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 5095
}
```
