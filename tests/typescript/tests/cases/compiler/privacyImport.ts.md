__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 12735,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 3173,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 3173,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 16,
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 17,
          "end": 3173,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 23,
              "end": 216,
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 30,
                "end": 216,
                "id": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 49,
                  "decorators": [],
                  "name": "m1_M1_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "body": {
                  "type": "TSModuleBlock",
                  "start": 50,
                  "end": 216,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 60,
                      "end": 87,
                      "declaration": {
                        "type": "ClassDeclaration",
                        "start": 67,
                        "end": 87,
                        "decorators": [],
                        "id": {
                          "type": "Identifier",
                          "start": 73,
                          "end": 75,
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "start": 76,
                          "end": 87,
                          "body": []
                        },
                        "abstract": false,
                        "declare": false
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": []
                    },
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 96,
                      "end": 155,
                      "declaration": {
                        "type": "FunctionDeclaration",
                        "start": 103,
                        "end": 155,
                        "id": {
                          "type": "Identifier",
                          "start": 112,
                          "end": 114,
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 117,
                          "end": 155,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 131,
                              "end": 145,
                              "argument": {
                                "type": "NewExpression",
                                "start": 138,
                                "end": 144,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 142,
                                  "end": 144,
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null,
                                "arguments": []
                              }
                            }
                          ]
                        },
                        "expression": false
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": []
                    },
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 164,
                      "end": 183,
                      "declaration": {
                        "type": "VariableDeclaration",
                        "start": 171,
                        "end": 183,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 175,
                            "end": 182,
                            "id": {
                              "type": "Identifier",
                              "start": 175,
                              "end": 177,
                              "decorators": [],
                              "name": "v1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "Identifier",
                              "start": 180,
                              "end": 182,
                              "decorators": [],
                              "name": "c1",
                              "optional": false,
                              "typeAnnotation": null
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
                    },
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 192,
                      "end": 210,
                      "declaration": {
                        "type": "VariableDeclaration",
                        "start": 199,
                        "end": 210,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 203,
                            "end": 209,
                            "id": {
                              "type": "Identifier",
                              "start": 203,
                              "end": 209,
                              "decorators": [],
                              "name": "v2",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 205,
                                "end": 209,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 207,
                                  "end": 209,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 207,
                                    "end": 209,
                                    "decorators": [],
                                    "name": "c1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            },
                            "init": null,
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
                "kind": "module",
                "declare": false,
                "global": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "TSModuleDeclaration",
              "start": 222,
              "end": 409,
              "id": {
                "type": "Identifier",
                "start": 229,
                "end": 242,
                "decorators": [],
                "name": "m1_M2_private",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 243,
                "end": 409,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 253,
                    "end": 280,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 260,
                      "end": 280,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 266,
                        "end": 268,
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "start": 269,
                        "end": 280,
                        "body": []
                      },
                      "abstract": false,
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 289,
                    "end": 348,
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "start": 296,
                      "end": 348,
                      "id": {
                        "type": "Identifier",
                        "start": 305,
                        "end": 307,
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 310,
                        "end": 348,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 324,
                            "end": 338,
                            "argument": {
                              "type": "NewExpression",
                              "start": 331,
                              "end": 337,
                              "callee": {
                                "type": "Identifier",
                                "start": 335,
                                "end": 337,
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": []
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 357,
                    "end": 376,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 364,
                      "end": 376,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 368,
                          "end": 375,
                          "id": {
                            "type": "Identifier",
                            "start": 368,
                            "end": 370,
                            "decorators": [],
                            "name": "v1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "Identifier",
                            "start": 373,
                            "end": 375,
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null
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
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 385,
                    "end": 403,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 392,
                      "end": 403,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 396,
                          "end": 402,
                          "id": {
                            "type": "Identifier",
                            "start": 396,
                            "end": 402,
                            "decorators": [],
                            "name": "v2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 398,
                              "end": 402,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 400,
                                "end": 402,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 400,
                                  "end": 402,
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "init": null,
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
              "kind": "module",
              "declare": false,
              "global": false
            },
            {
              "type": "TSImportEqualsDeclaration",
              "start": 803,
              "end": 840,
              "id": {
                "type": "Identifier",
                "start": 810,
                "end": 824,
                "decorators": [],
                "name": "m1_im1_private",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "Identifier",
                "start": 827,
                "end": 839,
                "decorators": [],
                "name": "m1_M1_public",
                "optional": false,
                "typeAnnotation": null
              },
              "importKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 845,
              "end": 901,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 852,
                "end": 901,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 856,
                    "end": 900,
                    "id": {
                      "type": "Identifier",
                      "start": 856,
                      "end": 880,
                      "decorators": [],
                      "name": "m1_im1_private_v1_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "MemberExpression",
                      "start": 883,
                      "end": 900,
                      "object": {
                        "type": "Identifier",
                        "start": 883,
                        "end": 897,
                        "decorators": [],
                        "name": "m1_im1_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 898,
                        "end": 900,
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 906,
              "end": 968,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 913,
                "end": 968,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 917,
                    "end": 967,
                    "id": {
                      "type": "Identifier",
                      "start": 917,
                      "end": 941,
                      "decorators": [],
                      "name": "m1_im1_private_v2_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "NewExpression",
                      "start": 944,
                      "end": 967,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 948,
                        "end": 965,
                        "object": {
                          "type": "Identifier",
                          "start": 948,
                          "end": 962,
                          "decorators": [],
                          "name": "m1_im1_private",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 963,
                          "end": 965,
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": []
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
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 973,
              "end": 1029,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 980,
                "end": 1029,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 984,
                    "end": 1028,
                    "id": {
                      "type": "Identifier",
                      "start": 984,
                      "end": 1008,
                      "decorators": [],
                      "name": "m1_im1_private_v3_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "MemberExpression",
                      "start": 1011,
                      "end": 1028,
                      "object": {
                        "type": "Identifier",
                        "start": 1011,
                        "end": 1025,
                        "decorators": [],
                        "name": "m1_im1_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1026,
                        "end": 1028,
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1034,
              "end": 1092,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 1041,
                "end": 1092,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1045,
                    "end": 1091,
                    "id": {
                      "type": "Identifier",
                      "start": 1045,
                      "end": 1069,
                      "decorators": [],
                      "name": "m1_im1_private_v4_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "CallExpression",
                      "start": 1072,
                      "end": 1091,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1072,
                        "end": 1089,
                        "object": {
                          "type": "Identifier",
                          "start": 1072,
                          "end": 1086,
                          "decorators": [],
                          "name": "m1_im1_private",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1087,
                          "end": 1089,
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
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
            },
            {
              "type": "VariableDeclaration",
              "start": 1097,
              "end": 1147,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1101,
                  "end": 1146,
                  "id": {
                    "type": "Identifier",
                    "start": 1101,
                    "end": 1126,
                    "decorators": [],
                    "name": "m1_im1_private_v1_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 1129,
                    "end": 1146,
                    "object": {
                      "type": "Identifier",
                      "start": 1129,
                      "end": 1143,
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1144,
                      "end": 1146,
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 1152,
              "end": 1208,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1156,
                  "end": 1207,
                  "id": {
                    "type": "Identifier",
                    "start": 1156,
                    "end": 1181,
                    "decorators": [],
                    "name": "m1_im1_private_v2_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 1184,
                    "end": 1207,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1188,
                      "end": 1205,
                      "object": {
                        "type": "Identifier",
                        "start": 1188,
                        "end": 1202,
                        "decorators": [],
                        "name": "m1_im1_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1203,
                        "end": 1205,
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 1213,
              "end": 1263,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1217,
                  "end": 1262,
                  "id": {
                    "type": "Identifier",
                    "start": 1217,
                    "end": 1242,
                    "decorators": [],
                    "name": "m1_im1_private_v3_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 1245,
                    "end": 1262,
                    "object": {
                      "type": "Identifier",
                      "start": 1245,
                      "end": 1259,
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1260,
                      "end": 1262,
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 1268,
              "end": 1320,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1272,
                  "end": 1319,
                  "id": {
                    "type": "Identifier",
                    "start": 1272,
                    "end": 1297,
                    "decorators": [],
                    "name": "m1_im1_private_v4_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 1300,
                    "end": 1319,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1300,
                      "end": 1317,
                      "object": {
                        "type": "Identifier",
                        "start": 1300,
                        "end": 1314,
                        "decorators": [],
                        "name": "m1_im1_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1315,
                        "end": 1317,
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "TSImportEqualsDeclaration",
              "start": 1327,
              "end": 1365,
              "id": {
                "type": "Identifier",
                "start": 1334,
                "end": 1348,
                "decorators": [],
                "name": "m1_im2_private",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "Identifier",
                "start": 1351,
                "end": 1364,
                "decorators": [],
                "name": "m1_M2_private",
                "optional": false,
                "typeAnnotation": null
              },
              "importKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1370,
              "end": 1426,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 1377,
                "end": 1426,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1381,
                    "end": 1425,
                    "id": {
                      "type": "Identifier",
                      "start": 1381,
                      "end": 1405,
                      "decorators": [],
                      "name": "m1_im2_private_v1_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "MemberExpression",
                      "start": 1408,
                      "end": 1425,
                      "object": {
                        "type": "Identifier",
                        "start": 1408,
                        "end": 1422,
                        "decorators": [],
                        "name": "m1_im2_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1423,
                        "end": 1425,
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1431,
              "end": 1493,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 1438,
                "end": 1493,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1442,
                    "end": 1492,
                    "id": {
                      "type": "Identifier",
                      "start": 1442,
                      "end": 1466,
                      "decorators": [],
                      "name": "m1_im2_private_v2_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "NewExpression",
                      "start": 1469,
                      "end": 1492,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1473,
                        "end": 1490,
                        "object": {
                          "type": "Identifier",
                          "start": 1473,
                          "end": 1487,
                          "decorators": [],
                          "name": "m1_im2_private",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1488,
                          "end": 1490,
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": []
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
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1498,
              "end": 1554,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 1505,
                "end": 1554,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1509,
                    "end": 1553,
                    "id": {
                      "type": "Identifier",
                      "start": 1509,
                      "end": 1533,
                      "decorators": [],
                      "name": "m1_im2_private_v3_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "MemberExpression",
                      "start": 1536,
                      "end": 1553,
                      "object": {
                        "type": "Identifier",
                        "start": 1536,
                        "end": 1550,
                        "decorators": [],
                        "name": "m1_im2_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1551,
                        "end": 1553,
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 1559,
              "end": 1617,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 1566,
                "end": 1617,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1570,
                    "end": 1616,
                    "id": {
                      "type": "Identifier",
                      "start": 1570,
                      "end": 1594,
                      "decorators": [],
                      "name": "m1_im2_private_v4_public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "CallExpression",
                      "start": 1597,
                      "end": 1616,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1597,
                        "end": 1614,
                        "object": {
                          "type": "Identifier",
                          "start": 1597,
                          "end": 1611,
                          "decorators": [],
                          "name": "m1_im2_private",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1612,
                          "end": 1614,
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
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
            },
            {
              "type": "VariableDeclaration",
              "start": 1622,
              "end": 1672,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1626,
                  "end": 1671,
                  "id": {
                    "type": "Identifier",
                    "start": 1626,
                    "end": 1651,
                    "decorators": [],
                    "name": "m1_im2_private_v1_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 1654,
                    "end": 1671,
                    "object": {
                      "type": "Identifier",
                      "start": 1654,
                      "end": 1668,
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1669,
                      "end": 1671,
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 1677,
              "end": 1733,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1681,
                  "end": 1732,
                  "id": {
                    "type": "Identifier",
                    "start": 1681,
                    "end": 1706,
                    "decorators": [],
                    "name": "m1_im2_private_v2_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 1709,
                    "end": 1732,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1713,
                      "end": 1730,
                      "object": {
                        "type": "Identifier",
                        "start": 1713,
                        "end": 1727,
                        "decorators": [],
                        "name": "m1_im2_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1728,
                        "end": 1730,
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 1738,
              "end": 1788,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1742,
                  "end": 1787,
                  "id": {
                    "type": "Identifier",
                    "start": 1742,
                    "end": 1767,
                    "decorators": [],
                    "name": "m1_im2_private_v3_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 1770,
                    "end": 1787,
                    "object": {
                      "type": "Identifier",
                      "start": 1770,
                      "end": 1784,
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1785,
                      "end": 1787,
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 1793,
              "end": 1845,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1797,
                  "end": 1844,
                  "id": {
                    "type": "Identifier",
                    "start": 1797,
                    "end": 1822,
                    "decorators": [],
                    "name": "m1_im2_private_v4_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 1825,
                    "end": 1844,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1825,
                      "end": 1842,
                      "object": {
                        "type": "Identifier",
                        "start": 1825,
                        "end": 1839,
                        "decorators": [],
                        "name": "m1_im2_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1840,
                        "end": 1842,
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 2956,
              "end": 2999,
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "start": 2963,
                "end": 2999,
                "id": {
                  "type": "Identifier",
                  "start": 2970,
                  "end": 2983,
                  "decorators": [],
                  "name": "m1_im1_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "moduleReference": {
                  "type": "Identifier",
                  "start": 2986,
                  "end": 2998,
                  "decorators": [],
                  "name": "m1_M1_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "importKind": "value"
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 3004,
              "end": 3048,
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "start": 3011,
                "end": 3048,
                "id": {
                  "type": "Identifier",
                  "start": 3018,
                  "end": 3031,
                  "decorators": [],
                  "name": "m1_im2_public",
                  "optional": false,
                  "typeAnnotation": null
                },
                "moduleReference": {
                  "type": "Identifier",
                  "start": 3034,
                  "end": 3047,
                  "decorators": [],
                  "name": "m1_M2_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "importKind": "value"
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 3175,
      "end": 6377,
      "id": {
        "type": "Identifier",
        "start": 3182,
        "end": 3184,
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 3185,
        "end": 6377,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 3191,
            "end": 3384,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 3198,
              "end": 3384,
              "id": {
                "type": "Identifier",
                "start": 3205,
                "end": 3217,
                "decorators": [],
                "name": "m2_M1_public",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 3218,
                "end": 3384,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 3228,
                    "end": 3255,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 3235,
                      "end": 3255,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 3241,
                        "end": 3243,
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "start": 3244,
                        "end": 3255,
                        "body": []
                      },
                      "abstract": false,
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 3264,
                    "end": 3323,
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "start": 3271,
                      "end": 3323,
                      "id": {
                        "type": "Identifier",
                        "start": 3280,
                        "end": 3282,
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 3285,
                        "end": 3323,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 3299,
                            "end": 3313,
                            "argument": {
                              "type": "NewExpression",
                              "start": 3306,
                              "end": 3312,
                              "callee": {
                                "type": "Identifier",
                                "start": 3310,
                                "end": 3312,
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": []
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 3332,
                    "end": 3351,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 3339,
                      "end": 3351,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 3343,
                          "end": 3350,
                          "id": {
                            "type": "Identifier",
                            "start": 3343,
                            "end": 3345,
                            "decorators": [],
                            "name": "v1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "Identifier",
                            "start": 3348,
                            "end": 3350,
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null
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
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 3360,
                    "end": 3378,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 3367,
                      "end": 3378,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 3371,
                          "end": 3377,
                          "id": {
                            "type": "Identifier",
                            "start": 3371,
                            "end": 3377,
                            "decorators": [],
                            "name": "v2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3373,
                              "end": 3377,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 3375,
                                "end": 3377,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3375,
                                  "end": 3377,
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "init": null,
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
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "TSModuleDeclaration",
            "start": 3390,
            "end": 3577,
            "id": {
              "type": "Identifier",
              "start": 3397,
              "end": 3410,
              "decorators": [],
              "name": "m2_M2_private",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 3411,
              "end": 3577,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 3421,
                  "end": 3448,
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 3428,
                    "end": 3448,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 3434,
                      "end": 3436,
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "start": 3437,
                      "end": 3448,
                      "body": []
                    },
                    "abstract": false,
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": []
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 3457,
                  "end": 3516,
                  "declaration": {
                    "type": "FunctionDeclaration",
                    "start": 3464,
                    "end": 3516,
                    "id": {
                      "type": "Identifier",
                      "start": 3473,
                      "end": 3475,
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 3478,
                      "end": 3516,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 3492,
                          "end": 3506,
                          "argument": {
                            "type": "NewExpression",
                            "start": 3499,
                            "end": 3505,
                            "callee": {
                              "type": "Identifier",
                              "start": 3503,
                              "end": 3505,
                              "decorators": [],
                              "name": "c1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": []
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": []
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 3525,
                  "end": 3544,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 3532,
                    "end": 3544,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3536,
                        "end": 3543,
                        "id": {
                          "type": "Identifier",
                          "start": 3536,
                          "end": 3538,
                          "decorators": [],
                          "name": "v1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 3541,
                          "end": 3543,
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null
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
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 3553,
                  "end": 3571,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 3560,
                    "end": 3571,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3564,
                        "end": 3570,
                        "id": {
                          "type": "Identifier",
                          "start": 3564,
                          "end": 3570,
                          "decorators": [],
                          "name": "v2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3566,
                            "end": 3570,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3568,
                              "end": 3570,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3568,
                                "end": 3570,
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
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
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 3971,
            "end": 4008,
            "id": {
              "type": "Identifier",
              "start": 3978,
              "end": 3992,
              "decorators": [],
              "name": "m1_im1_private",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 3995,
              "end": 4007,
              "decorators": [],
              "name": "m2_M1_public",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4013,
            "end": 4069,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 4020,
              "end": 4069,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4024,
                  "end": 4068,
                  "id": {
                    "type": "Identifier",
                    "start": 4024,
                    "end": 4048,
                    "decorators": [],
                    "name": "m1_im1_private_v1_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 4051,
                    "end": 4068,
                    "object": {
                      "type": "Identifier",
                      "start": 4051,
                      "end": 4065,
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4066,
                      "end": 4068,
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4074,
            "end": 4136,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 4081,
              "end": 4136,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4085,
                  "end": 4135,
                  "id": {
                    "type": "Identifier",
                    "start": 4085,
                    "end": 4109,
                    "decorators": [],
                    "name": "m1_im1_private_v2_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 4112,
                    "end": 4135,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 4116,
                      "end": 4133,
                      "object": {
                        "type": "Identifier",
                        "start": 4116,
                        "end": 4130,
                        "decorators": [],
                        "name": "m1_im1_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 4131,
                        "end": 4133,
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": []
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4141,
            "end": 4197,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 4148,
              "end": 4197,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4152,
                  "end": 4196,
                  "id": {
                    "type": "Identifier",
                    "start": 4152,
                    "end": 4176,
                    "decorators": [],
                    "name": "m1_im1_private_v3_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 4179,
                    "end": 4196,
                    "object": {
                      "type": "Identifier",
                      "start": 4179,
                      "end": 4193,
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4194,
                      "end": 4196,
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4202,
            "end": 4260,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 4209,
              "end": 4260,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4213,
                  "end": 4259,
                  "id": {
                    "type": "Identifier",
                    "start": 4213,
                    "end": 4237,
                    "decorators": [],
                    "name": "m1_im1_private_v4_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 4240,
                    "end": 4259,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 4240,
                      "end": 4257,
                      "object": {
                        "type": "Identifier",
                        "start": 4240,
                        "end": 4254,
                        "decorators": [],
                        "name": "m1_im1_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 4255,
                        "end": 4257,
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
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
          },
          {
            "type": "VariableDeclaration",
            "start": 4265,
            "end": 4315,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4269,
                "end": 4314,
                "id": {
                  "type": "Identifier",
                  "start": 4269,
                  "end": 4294,
                  "decorators": [],
                  "name": "m1_im1_private_v1_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 4297,
                  "end": 4314,
                  "object": {
                    "type": "Identifier",
                    "start": 4297,
                    "end": 4311,
                    "decorators": [],
                    "name": "m1_im1_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 4312,
                    "end": 4314,
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 4320,
            "end": 4376,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4324,
                "end": 4375,
                "id": {
                  "type": "Identifier",
                  "start": 4324,
                  "end": 4349,
                  "decorators": [],
                  "name": "m1_im1_private_v2_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 4352,
                  "end": 4375,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 4356,
                    "end": 4373,
                    "object": {
                      "type": "Identifier",
                      "start": 4356,
                      "end": 4370,
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4371,
                      "end": 4373,
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 4381,
            "end": 4431,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4385,
                "end": 4430,
                "id": {
                  "type": "Identifier",
                  "start": 4385,
                  "end": 4410,
                  "decorators": [],
                  "name": "m1_im1_private_v3_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 4413,
                  "end": 4430,
                  "object": {
                    "type": "Identifier",
                    "start": 4413,
                    "end": 4427,
                    "decorators": [],
                    "name": "m1_im1_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 4428,
                    "end": 4430,
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 4436,
            "end": 4488,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4440,
                "end": 4487,
                "id": {
                  "type": "Identifier",
                  "start": 4440,
                  "end": 4465,
                  "decorators": [],
                  "name": "m1_im1_private_v4_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 4468,
                  "end": 4487,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 4468,
                    "end": 4485,
                    "object": {
                      "type": "Identifier",
                      "start": 4468,
                      "end": 4482,
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4483,
                      "end": 4485,
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 4495,
            "end": 4533,
            "id": {
              "type": "Identifier",
              "start": 4502,
              "end": 4516,
              "decorators": [],
              "name": "m1_im2_private",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 4519,
              "end": 4532,
              "decorators": [],
              "name": "m2_M2_private",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4538,
            "end": 4594,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 4545,
              "end": 4594,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4549,
                  "end": 4593,
                  "id": {
                    "type": "Identifier",
                    "start": 4549,
                    "end": 4573,
                    "decorators": [],
                    "name": "m1_im2_private_v1_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 4576,
                    "end": 4593,
                    "object": {
                      "type": "Identifier",
                      "start": 4576,
                      "end": 4590,
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4591,
                      "end": 4593,
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4599,
            "end": 4661,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 4606,
              "end": 4661,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4610,
                  "end": 4660,
                  "id": {
                    "type": "Identifier",
                    "start": 4610,
                    "end": 4634,
                    "decorators": [],
                    "name": "m1_im2_private_v2_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 4637,
                    "end": 4660,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 4641,
                      "end": 4658,
                      "object": {
                        "type": "Identifier",
                        "start": 4641,
                        "end": 4655,
                        "decorators": [],
                        "name": "m1_im2_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 4656,
                        "end": 4658,
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": []
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4666,
            "end": 4722,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 4673,
              "end": 4722,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4677,
                  "end": 4721,
                  "id": {
                    "type": "Identifier",
                    "start": 4677,
                    "end": 4701,
                    "decorators": [],
                    "name": "m1_im2_private_v3_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 4704,
                    "end": 4721,
                    "object": {
                      "type": "Identifier",
                      "start": 4704,
                      "end": 4718,
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4719,
                      "end": 4721,
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4727,
            "end": 4785,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 4734,
              "end": 4785,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4738,
                  "end": 4784,
                  "id": {
                    "type": "Identifier",
                    "start": 4738,
                    "end": 4762,
                    "decorators": [],
                    "name": "m1_im2_private_v4_public",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 4765,
                    "end": 4784,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 4765,
                      "end": 4782,
                      "object": {
                        "type": "Identifier",
                        "start": 4765,
                        "end": 4779,
                        "decorators": [],
                        "name": "m1_im2_private",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 4780,
                        "end": 4782,
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
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
          },
          {
            "type": "VariableDeclaration",
            "start": 4790,
            "end": 4840,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4794,
                "end": 4839,
                "id": {
                  "type": "Identifier",
                  "start": 4794,
                  "end": 4819,
                  "decorators": [],
                  "name": "m1_im2_private_v1_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 4822,
                  "end": 4839,
                  "object": {
                    "type": "Identifier",
                    "start": 4822,
                    "end": 4836,
                    "decorators": [],
                    "name": "m1_im2_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 4837,
                    "end": 4839,
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 4845,
            "end": 4901,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4849,
                "end": 4900,
                "id": {
                  "type": "Identifier",
                  "start": 4849,
                  "end": 4874,
                  "decorators": [],
                  "name": "m1_im2_private_v2_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 4877,
                  "end": 4900,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 4881,
                    "end": 4898,
                    "object": {
                      "type": "Identifier",
                      "start": 4881,
                      "end": 4895,
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4896,
                      "end": 4898,
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 4906,
            "end": 4956,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4910,
                "end": 4955,
                "id": {
                  "type": "Identifier",
                  "start": 4910,
                  "end": 4935,
                  "decorators": [],
                  "name": "m1_im2_private_v3_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 4938,
                  "end": 4955,
                  "object": {
                    "type": "Identifier",
                    "start": 4938,
                    "end": 4952,
                    "decorators": [],
                    "name": "m1_im2_private",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 4953,
                    "end": 4955,
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 4961,
            "end": 5013,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4965,
                "end": 5012,
                "id": {
                  "type": "Identifier",
                  "start": 4965,
                  "end": 4990,
                  "decorators": [],
                  "name": "m1_im2_private_v4_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 4993,
                  "end": 5012,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 4993,
                    "end": 5010,
                    "object": {
                      "type": "Identifier",
                      "start": 4993,
                      "end": 5007,
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 5008,
                      "end": 5010,
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 6160,
            "end": 6203,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 6167,
              "end": 6203,
              "id": {
                "type": "Identifier",
                "start": 6174,
                "end": 6187,
                "decorators": [],
                "name": "m1_im1_public",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "Identifier",
                "start": 6190,
                "end": 6202,
                "decorators": [],
                "name": "m2_M1_public",
                "optional": false,
                "typeAnnotation": null
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 6208,
            "end": 6252,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 6215,
              "end": 6252,
              "id": {
                "type": "Identifier",
                "start": 6222,
                "end": 6235,
                "decorators": [],
                "name": "m1_im2_public",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "Identifier",
                "start": 6238,
                "end": 6251,
                "decorators": [],
                "name": "m2_M2_private",
                "optional": false,
                "typeAnnotation": null
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 6379,
      "end": 6541,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 6386,
        "end": 6541,
        "id": {
          "type": "Identifier",
          "start": 6393,
          "end": 6406,
          "decorators": [],
          "name": "glo_M1_public",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 6407,
          "end": 6541,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 6413,
              "end": 6436,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 6420,
                "end": 6436,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 6426,
                  "end": 6428,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 6429,
                  "end": 6436,
                  "body": []
                },
                "abstract": false,
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 6441,
              "end": 6492,
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 6448,
                "end": 6492,
                "id": {
                  "type": "Identifier",
                  "start": 6457,
                  "end": 6459,
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 6462,
                  "end": 6492,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 6472,
                      "end": 6486,
                      "argument": {
                        "type": "NewExpression",
                        "start": 6479,
                        "end": 6485,
                        "callee": {
                          "type": "Identifier",
                          "start": 6483,
                          "end": 6485,
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": []
                      }
                    }
                  ]
                },
                "expression": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 6497,
              "end": 6516,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 6504,
                "end": 6516,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 6508,
                    "end": 6515,
                    "id": {
                      "type": "Identifier",
                      "start": 6508,
                      "end": 6510,
                      "decorators": [],
                      "name": "v1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "Identifier",
                      "start": 6513,
                      "end": 6515,
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null
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
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 6521,
              "end": 6539,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 6528,
                "end": 6539,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 6532,
                    "end": 6538,
                    "id": {
                      "type": "Identifier",
                      "start": 6532,
                      "end": 6538,
                      "decorators": [],
                      "name": "v2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 6534,
                        "end": 6538,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 6536,
                          "end": 6538,
                          "typeName": {
                            "type": "Identifier",
                            "start": 6536,
                            "end": 6538,
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "init": null,
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
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 6713,
      "end": 6876,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 6720,
        "end": 6876,
        "id": {
          "type": "Identifier",
          "start": 6727,
          "end": 6741,
          "decorators": [],
          "name": "glo_M3_private",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 6742,
          "end": 6876,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 6748,
              "end": 6771,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 6755,
                "end": 6771,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 6761,
                  "end": 6763,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 6764,
                  "end": 6771,
                  "body": []
                },
                "abstract": false,
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 6776,
              "end": 6827,
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 6783,
                "end": 6827,
                "id": {
                  "type": "Identifier",
                  "start": 6792,
                  "end": 6794,
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 6797,
                  "end": 6827,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 6807,
                      "end": 6821,
                      "argument": {
                        "type": "NewExpression",
                        "start": 6814,
                        "end": 6820,
                        "callee": {
                          "type": "Identifier",
                          "start": 6818,
                          "end": 6820,
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": []
                      }
                    }
                  ]
                },
                "expression": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 6832,
              "end": 6851,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 6839,
                "end": 6851,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 6843,
                    "end": 6850,
                    "id": {
                      "type": "Identifier",
                      "start": 6843,
                      "end": 6845,
                      "decorators": [],
                      "name": "v1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "Identifier",
                      "start": 6848,
                      "end": 6850,
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null
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
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 6856,
              "end": 6874,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 6863,
                "end": 6874,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 6867,
                    "end": 6873,
                    "id": {
                      "type": "Identifier",
                      "start": 6867,
                      "end": 6873,
                      "decorators": [],
                      "name": "v2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 6869,
                        "end": 6873,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 6871,
                          "end": 6873,
                          "typeName": {
                            "type": "Identifier",
                            "start": 6871,
                            "end": 6873,
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "init": null,
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
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 7050,
      "end": 7089,
      "id": {
        "type": "Identifier",
        "start": 7057,
        "end": 7072,
        "decorators": [],
        "name": "glo_im1_private",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "Identifier",
        "start": 7075,
        "end": 7088,
        "decorators": [],
        "name": "glo_M1_public",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 7090,
      "end": 7148,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7097,
        "end": 7148,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 7101,
            "end": 7147,
            "id": {
              "type": "Identifier",
              "start": 7101,
              "end": 7126,
              "decorators": [],
              "name": "glo_im1_private_v1_public",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 7129,
              "end": 7147,
              "object": {
                "type": "Identifier",
                "start": 7129,
                "end": 7144,
                "decorators": [],
                "name": "glo_im1_private",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 7145,
                "end": 7147,
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 7149,
      "end": 7213,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7156,
        "end": 7213,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 7160,
            "end": 7212,
            "id": {
              "type": "Identifier",
              "start": 7160,
              "end": 7185,
              "decorators": [],
              "name": "glo_im1_private_v2_public",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "NewExpression",
              "start": 7188,
              "end": 7212,
              "callee": {
                "type": "MemberExpression",
                "start": 7192,
                "end": 7210,
                "object": {
                  "type": "Identifier",
                  "start": 7192,
                  "end": 7207,
                  "decorators": [],
                  "name": "glo_im1_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 7208,
                  "end": 7210,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": []
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 7214,
      "end": 7272,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7221,
        "end": 7272,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 7225,
            "end": 7271,
            "id": {
              "type": "Identifier",
              "start": 7225,
              "end": 7250,
              "decorators": [],
              "name": "glo_im1_private_v3_public",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 7253,
              "end": 7271,
              "object": {
                "type": "Identifier",
                "start": 7253,
                "end": 7268,
                "decorators": [],
                "name": "glo_im1_private",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 7269,
                "end": 7271,
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 7273,
      "end": 7333,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7280,
        "end": 7333,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 7284,
            "end": 7332,
            "id": {
              "type": "Identifier",
              "start": 7284,
              "end": 7309,
              "decorators": [],
              "name": "glo_im1_private_v4_public",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 7312,
              "end": 7332,
              "callee": {
                "type": "MemberExpression",
                "start": 7312,
                "end": 7330,
                "object": {
                  "type": "Identifier",
                  "start": 7312,
                  "end": 7327,
                  "decorators": [],
                  "name": "glo_im1_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 7328,
                  "end": 7330,
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
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
    },
    {
      "type": "VariableDeclaration",
      "start": 7334,
      "end": 7386,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7338,
          "end": 7385,
          "id": {
            "type": "Identifier",
            "start": 7338,
            "end": 7364,
            "decorators": [],
            "name": "glo_im1_private_v1_private",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 7367,
            "end": 7385,
            "object": {
              "type": "Identifier",
              "start": 7367,
              "end": 7382,
              "decorators": [],
              "name": "glo_im1_private",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 7383,
              "end": 7385,
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 7387,
      "end": 7445,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7391,
          "end": 7444,
          "id": {
            "type": "Identifier",
            "start": 7391,
            "end": 7417,
            "decorators": [],
            "name": "glo_im1_private_v2_private",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 7420,
            "end": 7444,
            "callee": {
              "type": "MemberExpression",
              "start": 7424,
              "end": 7442,
              "object": {
                "type": "Identifier",
                "start": 7424,
                "end": 7439,
                "decorators": [],
                "name": "glo_im1_private",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 7440,
                "end": 7442,
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 7446,
      "end": 7498,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7450,
          "end": 7497,
          "id": {
            "type": "Identifier",
            "start": 7450,
            "end": 7476,
            "decorators": [],
            "name": "glo_im1_private_v3_private",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 7479,
            "end": 7497,
            "object": {
              "type": "Identifier",
              "start": 7479,
              "end": 7494,
              "decorators": [],
              "name": "glo_im1_private",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 7495,
              "end": 7497,
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 7499,
      "end": 7553,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7503,
          "end": 7552,
          "id": {
            "type": "Identifier",
            "start": 7503,
            "end": 7529,
            "decorators": [],
            "name": "glo_im1_private_v4_private",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 7532,
            "end": 7552,
            "callee": {
              "type": "MemberExpression",
              "start": 7532,
              "end": 7550,
              "object": {
                "type": "Identifier",
                "start": 7532,
                "end": 7547,
                "decorators": [],
                "name": "glo_im1_private",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 7548,
                "end": 7550,
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 8090,
      "end": 8130,
      "id": {
        "type": "Identifier",
        "start": 8097,
        "end": 8112,
        "decorators": [],
        "name": "glo_im3_private",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "Identifier",
        "start": 8115,
        "end": 8129,
        "decorators": [],
        "name": "glo_M3_private",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 8131,
      "end": 8189,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 8138,
        "end": 8189,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 8142,
            "end": 8188,
            "id": {
              "type": "Identifier",
              "start": 8142,
              "end": 8167,
              "decorators": [],
              "name": "glo_im3_private_v1_public",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 8170,
              "end": 8188,
              "object": {
                "type": "Identifier",
                "start": 8170,
                "end": 8185,
                "decorators": [],
                "name": "glo_im3_private",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 8186,
                "end": 8188,
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 8190,
      "end": 8254,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 8197,
        "end": 8254,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 8201,
            "end": 8253,
            "id": {
              "type": "Identifier",
              "start": 8201,
              "end": 8226,
              "decorators": [],
              "name": "glo_im3_private_v2_public",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "NewExpression",
              "start": 8229,
              "end": 8253,
              "callee": {
                "type": "MemberExpression",
                "start": 8233,
                "end": 8251,
                "object": {
                  "type": "Identifier",
                  "start": 8233,
                  "end": 8248,
                  "decorators": [],
                  "name": "glo_im3_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 8249,
                  "end": 8251,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": []
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 8255,
      "end": 8313,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 8262,
        "end": 8313,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 8266,
            "end": 8312,
            "id": {
              "type": "Identifier",
              "start": 8266,
              "end": 8291,
              "decorators": [],
              "name": "glo_im3_private_v3_public",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 8294,
              "end": 8312,
              "object": {
                "type": "Identifier",
                "start": 8294,
                "end": 8309,
                "decorators": [],
                "name": "glo_im3_private",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 8310,
                "end": 8312,
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 8314,
      "end": 8374,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 8321,
        "end": 8374,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 8325,
            "end": 8373,
            "id": {
              "type": "Identifier",
              "start": 8325,
              "end": 8350,
              "decorators": [],
              "name": "glo_im3_private_v4_public",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 8353,
              "end": 8373,
              "callee": {
                "type": "MemberExpression",
                "start": 8353,
                "end": 8371,
                "object": {
                  "type": "Identifier",
                  "start": 8353,
                  "end": 8368,
                  "decorators": [],
                  "name": "glo_im3_private",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 8369,
                  "end": 8371,
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
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
    },
    {
      "type": "VariableDeclaration",
      "start": 8375,
      "end": 8427,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8379,
          "end": 8426,
          "id": {
            "type": "Identifier",
            "start": 8379,
            "end": 8405,
            "decorators": [],
            "name": "glo_im3_private_v1_private",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 8408,
            "end": 8426,
            "object": {
              "type": "Identifier",
              "start": 8408,
              "end": 8423,
              "decorators": [],
              "name": "glo_im3_private",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 8424,
              "end": 8426,
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 8428,
      "end": 8486,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8432,
          "end": 8485,
          "id": {
            "type": "Identifier",
            "start": 8432,
            "end": 8458,
            "decorators": [],
            "name": "glo_im3_private_v2_private",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 8461,
            "end": 8485,
            "callee": {
              "type": "MemberExpression",
              "start": 8465,
              "end": 8483,
              "object": {
                "type": "Identifier",
                "start": 8465,
                "end": 8480,
                "decorators": [],
                "name": "glo_im3_private",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 8481,
                "end": 8483,
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 8487,
      "end": 8539,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8491,
          "end": 8538,
          "id": {
            "type": "Identifier",
            "start": 8491,
            "end": 8517,
            "decorators": [],
            "name": "glo_im3_private_v3_private",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 8520,
            "end": 8538,
            "object": {
              "type": "Identifier",
              "start": 8520,
              "end": 8535,
              "decorators": [],
              "name": "glo_im3_private",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 8536,
              "end": 8538,
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 8540,
      "end": 8594,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8544,
          "end": 8593,
          "id": {
            "type": "Identifier",
            "start": 8544,
            "end": 8570,
            "decorators": [],
            "name": "glo_im3_private_v4_private",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 8573,
            "end": 8593,
            "callee": {
              "type": "MemberExpression",
              "start": 8573,
              "end": 8591,
              "object": {
                "type": "Identifier",
                "start": 8573,
                "end": 8588,
                "decorators": [],
                "name": "glo_im3_private",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 8589,
                "end": 8591,
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 9163,
      "end": 9208,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 9170,
        "end": 9208,
        "id": {
          "type": "Identifier",
          "start": 9177,
          "end": 9191,
          "decorators": [],
          "name": "glo_im1_public",
          "optional": false,
          "typeAnnotation": null
        },
        "moduleReference": {
          "type": "Identifier",
          "start": 9194,
          "end": 9207,
          "decorators": [],
          "name": "glo_M1_public",
          "optional": false,
          "typeAnnotation": null
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 9209,
      "end": 9255,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 9216,
        "end": 9255,
        "id": {
          "type": "Identifier",
          "start": 9223,
          "end": 9237,
          "decorators": [],
          "name": "glo_im2_public",
          "optional": false,
          "typeAnnotation": null
        },
        "moduleReference": {
          "type": "Identifier",
          "start": 9240,
          "end": 9254,
          "decorators": [],
          "name": "glo_M3_private",
          "optional": false,
          "typeAnnotation": null
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 12414,
      "end": 12570,
      "id": {
        "type": "Identifier",
        "start": 12421,
        "end": 12423,
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 12424,
        "end": 12570,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 12478,
            "end": 12567,
            "id": {
              "type": "Identifier",
              "start": 12485,
              "end": 12487,
              "decorators": [],
              "name": "m4",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 12488,
              "end": 12567,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 12498,
                  "end": 12509,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 12502,
                      "end": 12508,
                      "id": {
                        "type": "Identifier",
                        "start": 12502,
                        "end": 12503,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 12506,
                        "end": 12508,
                        "value": 10,
                        "raw": "10"
                      },
                      "definite": false
                    }
                  ],
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 12572,
      "end": 12735,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 12579,
        "end": 12735,
        "id": {
          "type": "Identifier",
          "start": 12586,
          "end": 12588,
          "decorators": [],
          "name": "m3",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 12589,
          "end": 12735,
          "body": [
            {
              "type": "TSModuleDeclaration",
              "start": 12643,
              "end": 12732,
              "id": {
                "type": "Identifier",
                "start": 12650,
                "end": 12652,
                "decorators": [],
                "name": "m4",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 12653,
                "end": 12732,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 12663,
                    "end": 12674,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 12667,
                        "end": 12673,
                        "id": {
                          "type": "Identifier",
                          "start": 12667,
                          "end": 12668,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 12671,
                          "end": 12673,
                          "value": 10,
                          "raw": "10"
                        },
                        "definite": false
                      }
                    ],
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
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
