__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1338,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 516,
      "id": {
        "type": "TSQualifiedName",
        "start": 7,
        "end": 36,
        "left": {
          "type": "TSQualifiedName",
          "start": 7,
          "end": 28,
          "left": {
            "type": "Identifier",
            "start": 7,
            "end": 17,
            "decorators": [],
            "name": "MsPortalFx",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 18,
            "end": 28,
            "decorators": [],
            "name": "ViewModels",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 29,
          "end": 36,
          "decorators": [],
          "name": "Dialogs",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 37,
        "end": 516,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 44,
            "end": 181,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 51,
              "end": 181,
              "id": {
                "type": "Identifier",
                "start": 62,
                "end": 74,
                "decorators": [],
                "name": "DialogResult",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSEnumBody",
                "start": 75,
                "end": 181,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 85,
                    "end": 90,
                    "id": {
                      "type": "Identifier",
                      "start": 85,
                      "end": 90,
                      "decorators": [],
                      "name": "Abort",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 100,
                    "end": 106,
                    "id": {
                      "type": "Identifier",
                      "start": 100,
                      "end": 106,
                      "decorators": [],
                      "name": "Cancel",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 116,
                    "end": 122,
                    "id": {
                      "type": "Identifier",
                      "start": 116,
                      "end": 122,
                      "decorators": [],
                      "name": "Ignore",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 132,
                    "end": 134,
                    "id": {
                      "type": "Identifier",
                      "start": 132,
                      "end": 134,
                      "decorators": [],
                      "name": "No",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 144,
                    "end": 146,
                    "id": {
                      "type": "Identifier",
                      "start": 144,
                      "end": 146,
                      "decorators": [],
                      "name": "Ok",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 156,
                    "end": 161,
                    "id": {
                      "type": "Identifier",
                      "start": 156,
                      "end": 161,
                      "decorators": [],
                      "name": "Retry",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 171,
                    "end": 174,
                    "id": {
                      "type": "Identifier",
                      "start": 171,
                      "end": 174,
                      "decorators": [],
                      "name": "Yes",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null,
                    "computed": false
                  }
                ]
              },
              "const": true,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 187,
            "end": 300,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 194,
              "end": 300,
              "id": {
                "type": "Identifier",
                "start": 204,
                "end": 224,
                "decorators": [],
                "name": "DialogResultCallback",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 225,
                "end": 300,
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 235,
                    "end": 294,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 236,
                        "end": 286,
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 242,
                          "end": 286,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 244,
                            "end": 286,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 244,
                              "end": 286,
                              "left": {
                                "type": "TSQualifiedName",
                                "start": 244,
                                "end": 273,
                                "left": {
                                  "type": "TSQualifiedName",
                                  "start": 244,
                                  "end": 265,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 244,
                                    "end": 254,
                                    "decorators": [],
                                    "name": "MsPortalFx",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 255,
                                    "end": 265,
                                    "decorators": [],
                                    "name": "ViewModels",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 266,
                                  "end": 273,
                                  "decorators": [],
                                  "name": "Dialogs",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 274,
                                "end": 286,
                                "decorators": [],
                                "name": "DialogResult",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 287,
                      "end": 293,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 289,
                        "end": 293
                      }
                    }
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 306,
            "end": 352,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 313,
              "end": 352,
              "id": {
                "type": "Identifier",
                "start": 322,
                "end": 342,
                "decorators": [],
                "name": "someExportedFunction",
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
                "start": 345,
                "end": 352,
                "body": []
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
            "start": 358,
            "end": 514,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 365,
              "end": 514,
              "id": {
                "type": "Identifier",
                "start": 376,
                "end": 393,
                "decorators": [],
                "name": "MessageBoxButtons",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSEnumBody",
                "start": 394,
                "end": 514,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 404,
                    "end": 420,
                    "id": {
                      "type": "Identifier",
                      "start": 404,
                      "end": 420,
                      "decorators": [],
                      "name": "AbortRetryIgnore",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 430,
                    "end": 432,
                    "id": {
                      "type": "Identifier",
                      "start": 430,
                      "end": 432,
                      "decorators": [],
                      "name": "OK",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 442,
                    "end": 450,
                    "id": {
                      "type": "Identifier",
                      "start": 442,
                      "end": 450,
                      "decorators": [],
                      "name": "OKCancel",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 460,
                    "end": 471,
                    "id": {
                      "type": "Identifier",
                      "start": 460,
                      "end": 471,
                      "decorators": [],
                      "name": "RetryCancel",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 481,
                    "end": 486,
                    "id": {
                      "type": "Identifier",
                      "start": 481,
                      "end": 486,
                      "decorators": [],
                      "name": "YesNo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 496,
                    "end": 507,
                    "id": {
                      "type": "Identifier",
                      "start": 496,
                      "end": 507,
                      "decorators": [],
                      "name": "YesNoCancel",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null,
                    "computed": false
                  }
                ]
              },
              "const": true,
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
      "type": "TSModuleDeclaration",
      "start": 519,
      "end": 1338,
      "id": {
        "type": "TSQualifiedName",
        "start": 526,
        "end": 547,
        "left": {
          "type": "Identifier",
          "start": 526,
          "end": 536,
          "decorators": [],
          "name": "MsPortalFx",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 537,
          "end": 547,
          "decorators": [],
          "name": "ViewModels",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 548,
        "end": 1338,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 654,
            "end": 706,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 661,
              "end": 706,
              "id": {
                "type": "Identifier",
                "start": 668,
                "end": 682,
                "decorators": [],
                "name": "ReExportedEnum",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 685,
                "end": 705,
                "left": {
                  "type": "Identifier",
                  "start": 685,
                  "end": 692,
                  "decorators": [],
                  "name": "Dialogs",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 693,
                  "end": 705,
                  "decorators": [],
                  "name": "DialogResult",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 808,
            "end": 857,
            "id": {
              "type": "Identifier",
              "start": 815,
              "end": 828,
              "decorators": [],
              "name": "DialogButtons",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 831,
              "end": 856,
              "left": {
                "type": "Identifier",
                "start": 831,
                "end": 838,
                "decorators": [],
                "name": "Dialogs",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 839,
                "end": 856,
                "decorators": [],
                "name": "MessageBoxButtons",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 975,
            "end": 1029,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 982,
              "end": 1029,
              "id": {
                "type": "Identifier",
                "start": 989,
                "end": 997,
                "decorators": [],
                "name": "Callback",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 1000,
                "end": 1028,
                "left": {
                  "type": "Identifier",
                  "start": 1000,
                  "end": 1007,
                  "decorators": [],
                  "name": "Dialogs",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 1008,
                  "end": 1028,
                  "decorators": [],
                  "name": "DialogResultCallback",
                  "optional": false,
                  "typeAnnotation": null
                }
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
            "start": 1035,
            "end": 1336,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1042,
              "end": 1336,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 1048,
                "end": 1071,
                "decorators": [],
                "name": "SomeUsagesOfTheseConsts",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 1072,
                "end": 1336,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 1082,
                    "end": 1330,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1082,
                      "end": 1093,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1093,
                      "end": 1330,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1096,
                        "end": 1330,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 1166,
                            "end": 1203,
                            "kind": "const",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 1172,
                                "end": 1202,
                                "id": {
                                  "type": "Identifier",
                                  "start": 1172,
                                  "end": 1178,
                                  "decorators": [],
                                  "name": "value1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "start": 1181,
                                  "end": 1202,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 1181,
                                    "end": 1195,
                                    "decorators": [],
                                    "name": "ReExportedEnum",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1196,
                                    "end": 1202,
                                    "decorators": [],
                                    "name": "Cancel",
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
                            "type": "ExpressionStatement",
                            "start": 1216,
                            "end": 1236,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1216,
                              "end": 1235,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1216,
                                "end": 1227,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1216,
                                  "end": 1223,
                                  "decorators": [],
                                  "name": "console",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1224,
                                  "end": 1227,
                                  "decorators": [],
                                  "name": "log",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 1228,
                                  "end": 1234,
                                  "decorators": [],
                                  "name": "value1",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "optional": false
                            },
                            "directive": null
                          },
                          {
                            "type": "VariableDeclaration",
                            "start": 1249,
                            "end": 1287,
                            "kind": "const",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 1255,
                                "end": 1286,
                                "id": {
                                  "type": "Identifier",
                                  "start": 1255,
                                  "end": 1261,
                                  "decorators": [],
                                  "name": "value2",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "start": 1264,
                                  "end": 1286,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 1264,
                                    "end": 1277,
                                    "decorators": [],
                                    "name": "DialogButtons",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1278,
                                    "end": 1286,
                                    "decorators": [],
                                    "name": "OKCancel",
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
                            "type": "ExpressionStatement",
                            "start": 1300,
                            "end": 1320,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1300,
                              "end": 1319,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1300,
                                "end": 1311,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1300,
                                  "end": 1307,
                                  "decorators": [],
                                  "name": "console",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1308,
                                  "end": 1311,
                                  "decorators": [],
                                  "name": "log",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 1312,
                                  "end": 1318,
                                  "decorators": [],
                                  "name": "value2",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "optional": false
                            },
                            "directive": null
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
