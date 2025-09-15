__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "MsPortalFx",
            "optional": false,
            "typeAnnotation": null,
            "start": 10,
            "end": 20
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "ViewModels",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 31
          },
          "start": 10,
          "end": 31
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Dialogs",
          "optional": false,
          "typeAnnotation": null,
          "start": 32,
          "end": 39
        },
        "start": 10,
        "end": 39
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "DialogResult",
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 77
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Abort",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 88,
                      "end": 93
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 88,
                    "end": 93
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Cancel",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 103,
                      "end": 109
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 103,
                    "end": 109
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Ignore",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 119,
                      "end": 125
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 119,
                    "end": 125
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "No",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 135,
                      "end": 137
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 135,
                    "end": 137
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Ok",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 147,
                      "end": 149
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 147,
                    "end": 149
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Retry",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 159,
                      "end": 164
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 159,
                    "end": 164
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Yes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 174,
                      "end": 177
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 174,
                    "end": 177
                  }
                ],
                "start": 78,
                "end": 184
              },
              "const": true,
              "declare": false,
              "start": 54,
              "end": 184
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 47,
            "end": 184
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "DialogResultCallback",
                "optional": false,
                "typeAnnotation": null,
                "start": 207,
                "end": 227
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "MsPortalFx",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 247,
                                    "end": 257
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ViewModels",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 258,
                                    "end": 268
                                  },
                                  "start": 247,
                                  "end": 268
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Dialogs",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 269,
                                  "end": 276
                                },
                                "start": 247,
                                "end": 276
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "DialogResult",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 277,
                                "end": 289
                              },
                              "start": 247,
                              "end": 289
                            },
                            "typeArguments": null,
                            "start": 247,
                            "end": 289
                          },
                          "start": 245,
                          "end": 289
                        },
                        "start": 239,
                        "end": 289
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 292,
                        "end": 296
                      },
                      "start": 290,
                      "end": 296
                    },
                    "start": 238,
                    "end": 297
                  }
                ],
                "start": 228,
                "end": 303
              },
              "declare": false,
              "start": 197,
              "end": 303
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 190,
            "end": 303
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "someExportedFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 325,
                "end": 345
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 348,
                "end": 355
              },
              "expression": false,
              "start": 316,
              "end": 355
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 309,
            "end": 355
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "MessageBoxButtons",
                "optional": false,
                "typeAnnotation": null,
                "start": 379,
                "end": 396
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AbortRetryIgnore",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 407,
                      "end": 423
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 407,
                    "end": 423
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "OK",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 433,
                      "end": 435
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 433,
                    "end": 435
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "OKCancel",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 445,
                      "end": 453
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 445,
                    "end": 453
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RetryCancel",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 463,
                      "end": 474
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 463,
                    "end": 474
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "YesNo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 484,
                      "end": 489
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 484,
                    "end": 489
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "YesNoCancel",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 499,
                      "end": 510
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 499,
                    "end": 510
                  }
                ],
                "start": 397,
                "end": 517
              },
              "const": true,
              "declare": false,
              "start": 368,
              "end": 517
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 361,
            "end": 517
          }
        ],
        "start": 40,
        "end": 519
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 519
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "MsPortalFx",
          "optional": false,
          "typeAnnotation": null,
          "start": 532,
          "end": 542
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "ViewModels",
          "optional": false,
          "typeAnnotation": null,
          "start": 543,
          "end": 553
        },
        "start": 532,
        "end": 553
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReExportedEnum",
                "optional": false,
                "typeAnnotation": null,
                "start": 674,
                "end": 688
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Dialogs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 691,
                  "end": 698
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DialogResult",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 699,
                  "end": 711
                },
                "start": 691,
                "end": 711
              },
              "importKind": "value",
              "start": 667,
              "end": 712
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 660,
            "end": 712
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "DialogButtons",
              "optional": false,
              "typeAnnotation": null,
              "start": 821,
              "end": 834
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Dialogs",
                "optional": false,
                "typeAnnotation": null,
                "start": 837,
                "end": 844
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "MessageBoxButtons",
                "optional": false,
                "typeAnnotation": null,
                "start": 845,
                "end": 862
              },
              "start": 837,
              "end": 862
            },
            "importKind": "value",
            "start": 814,
            "end": 863
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Callback",
                "optional": false,
                "typeAnnotation": null,
                "start": 995,
                "end": 1003
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Dialogs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1006,
                  "end": 1013
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DialogResultCallback",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1014,
                  "end": 1034
                },
                "start": 1006,
                "end": 1034
              },
              "importKind": "value",
              "start": 988,
              "end": 1035
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 981,
            "end": 1035
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "SomeUsagesOfTheseConsts",
                "optional": false,
                "typeAnnotation": null,
                "start": 1054,
                "end": 1077
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
                      "start": 1088,
                      "end": 1099
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
                                  "name": "value1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1178,
                                  "end": 1184
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ReExportedEnum",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1187,
                                    "end": 1201
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Cancel",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1202,
                                    "end": 1208
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1187,
                                  "end": 1208
                                },
                                "definite": false,
                                "start": 1178,
                                "end": 1208
                              }
                            ],
                            "declare": false,
                            "start": 1172,
                            "end": 1209
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "console",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1222,
                                  "end": 1229
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "log",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1230,
                                  "end": 1233
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1222,
                                "end": 1233
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1234,
                                  "end": 1240
                                }
                              ],
                              "optional": false,
                              "start": 1222,
                              "end": 1241
                            },
                            "directive": null,
                            "start": 1222,
                            "end": 1242
                          },
                          {
                            "type": "VariableDeclaration",
                            "kind": "const",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1261,
                                  "end": 1267
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "DialogButtons",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1270,
                                    "end": 1283
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "OKCancel",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1284,
                                    "end": 1292
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1270,
                                  "end": 1292
                                },
                                "definite": false,
                                "start": 1261,
                                "end": 1292
                              }
                            ],
                            "declare": false,
                            "start": 1255,
                            "end": 1293
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "console",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1306,
                                  "end": 1313
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "log",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1314,
                                  "end": 1317
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1306,
                                "end": 1317
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1318,
                                  "end": 1324
                                }
                              ],
                              "optional": false,
                              "start": 1306,
                              "end": 1325
                            },
                            "directive": null,
                            "start": 1306,
                            "end": 1326
                          }
                        ],
                        "start": 1102,
                        "end": 1336
                      },
                      "expression": false,
                      "start": 1099,
                      "end": 1336
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1088,
                    "end": 1336
                  }
                ],
                "start": 1078,
                "end": 1342
              },
              "abstract": false,
              "declare": false,
              "start": 1048,
              "end": 1342
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1041,
            "end": 1342
          }
        ],
        "start": 554,
        "end": 1344
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 522,
      "end": 1344
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1344
}
```
