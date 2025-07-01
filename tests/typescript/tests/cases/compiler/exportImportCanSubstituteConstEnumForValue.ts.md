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
            "start": 7,
            "end": 17
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "ViewModels",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 28
          },
          "start": 7,
          "end": 28
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Dialogs",
          "optional": false,
          "typeAnnotation": null,
          "start": 29,
          "end": 36
        },
        "start": 7,
        "end": 36
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
                "start": 62,
                "end": 74
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
                      "start": 85,
                      "end": 90
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 85,
                    "end": 90
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Cancel",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 100,
                      "end": 106
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 100,
                    "end": 106
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Ignore",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 116,
                      "end": 122
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 116,
                    "end": 122
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "No",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 132,
                      "end": 134
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 132,
                    "end": 134
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Ok",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 144,
                      "end": 146
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 144,
                    "end": 146
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Retry",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 156,
                      "end": 161
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 156,
                    "end": 161
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Yes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 171,
                      "end": 174
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 171,
                    "end": 174
                  }
                ],
                "start": 75,
                "end": 181
              },
              "const": true,
              "declare": false,
              "start": 51,
              "end": 181
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 44,
            "end": 181
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
                "start": 204,
                "end": 224
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
                                    "start": 244,
                                    "end": 254
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ViewModels",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 255,
                                    "end": 265
                                  },
                                  "start": 244,
                                  "end": 265
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Dialogs",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 266,
                                  "end": 273
                                },
                                "start": 244,
                                "end": 273
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "DialogResult",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 274,
                                "end": 286
                              },
                              "start": 244,
                              "end": 286
                            },
                            "typeArguments": null,
                            "start": 244,
                            "end": 286
                          },
                          "start": 242,
                          "end": 286
                        },
                        "start": 236,
                        "end": 286
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 289,
                        "end": 293
                      },
                      "start": 287,
                      "end": 293
                    },
                    "start": 235,
                    "end": 294
                  }
                ],
                "start": 225,
                "end": 300
              },
              "declare": false,
              "start": 194,
              "end": 300
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 187,
            "end": 300
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
                "start": 322,
                "end": 342
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
                "start": 345,
                "end": 352
              },
              "expression": false,
              "start": 313,
              "end": 352
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 306,
            "end": 352
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
                "start": 376,
                "end": 393
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
                      "start": 404,
                      "end": 420
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 404,
                    "end": 420
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "OK",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 430,
                      "end": 432
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 430,
                    "end": 432
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "OKCancel",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 442,
                      "end": 450
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 442,
                    "end": 450
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RetryCancel",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 460,
                      "end": 471
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 460,
                    "end": 471
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "YesNo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 481,
                      "end": 486
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 481,
                    "end": 486
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "YesNoCancel",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 496,
                      "end": 507
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 496,
                    "end": 507
                  }
                ],
                "start": 394,
                "end": 514
              },
              "const": true,
              "declare": false,
              "start": 365,
              "end": 514
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 358,
            "end": 514
          }
        ],
        "start": 37,
        "end": 516
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 516
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
          "start": 526,
          "end": 536
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "ViewModels",
          "optional": false,
          "typeAnnotation": null,
          "start": 537,
          "end": 547
        },
        "start": 526,
        "end": 547
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
                "start": 668,
                "end": 682
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Dialogs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 685,
                  "end": 692
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DialogResult",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 693,
                  "end": 705
                },
                "start": 685,
                "end": 705
              },
              "importKind": "value",
              "start": 661,
              "end": 706
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 654,
            "end": 706
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "DialogButtons",
              "optional": false,
              "typeAnnotation": null,
              "start": 815,
              "end": 828
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Dialogs",
                "optional": false,
                "typeAnnotation": null,
                "start": 831,
                "end": 838
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "MessageBoxButtons",
                "optional": false,
                "typeAnnotation": null,
                "start": 839,
                "end": 856
              },
              "start": 831,
              "end": 856
            },
            "importKind": "value",
            "start": 808,
            "end": 857
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
                "start": 989,
                "end": 997
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Dialogs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1000,
                  "end": 1007
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DialogResultCallback",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1008,
                  "end": 1028
                },
                "start": 1000,
                "end": 1028
              },
              "importKind": "value",
              "start": 982,
              "end": 1029
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 975,
            "end": 1029
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
                "start": 1048,
                "end": 1071
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
                      "start": 1082,
                      "end": 1093
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
                                  "start": 1172,
                                  "end": 1178
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ReExportedEnum",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1181,
                                    "end": 1195
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Cancel",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1196,
                                    "end": 1202
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1181,
                                  "end": 1202
                                },
                                "definite": false,
                                "start": 1172,
                                "end": 1202
                              }
                            ],
                            "declare": false,
                            "start": 1166,
                            "end": 1203
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
                                  "start": 1216,
                                  "end": 1223
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "log",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1224,
                                  "end": 1227
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1216,
                                "end": 1227
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1228,
                                  "end": 1234
                                }
                              ],
                              "optional": false,
                              "start": 1216,
                              "end": 1235
                            },
                            "directive": null,
                            "start": 1216,
                            "end": 1236
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
                                  "start": 1255,
                                  "end": 1261
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "DialogButtons",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1264,
                                    "end": 1277
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "OKCancel",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1278,
                                    "end": 1286
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1264,
                                  "end": 1286
                                },
                                "definite": false,
                                "start": 1255,
                                "end": 1286
                              }
                            ],
                            "declare": false,
                            "start": 1249,
                            "end": 1287
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
                                  "start": 1300,
                                  "end": 1307
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "log",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1308,
                                  "end": 1311
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1300,
                                "end": 1311
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1312,
                                  "end": 1318
                                }
                              ],
                              "optional": false,
                              "start": 1300,
                              "end": 1319
                            },
                            "directive": null,
                            "start": 1300,
                            "end": 1320
                          }
                        ],
                        "start": 1096,
                        "end": 1330
                      },
                      "expression": false,
                      "start": 1093,
                      "end": 1330
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1082,
                    "end": 1330
                  }
                ],
                "start": 1072,
                "end": 1336
              },
              "abstract": false,
              "declare": false,
              "start": 1042,
              "end": 1336
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1035,
            "end": 1336
          }
        ],
        "start": 548,
        "end": 1338
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 519,
      "end": 1338
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1338
}
```
