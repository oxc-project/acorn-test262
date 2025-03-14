exportImportCanSubstituteConstEnumForValue.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 1339,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 516,
      "body": {
        "type": "TSModuleBlock",
        "start": 37,
        "end": 516,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 44,
            "end": 181,
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 51,
              "end": 181,
              "body": {
                "type": "TSEnumBody",
                "start": 75,
                "end": 181,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 85,
                    "end": 90,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 85,
                      "end": 90,
                      "decorators": [],
                      "name": "Abort",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 100,
                    "end": 106,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 100,
                      "end": 106,
                      "decorators": [],
                      "name": "Cancel",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 116,
                    "end": 122,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 116,
                      "end": 122,
                      "decorators": [],
                      "name": "Ignore",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 132,
                    "end": 134,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 132,
                      "end": 134,
                      "decorators": [],
                      "name": "No",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 144,
                    "end": 146,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 144,
                      "end": 146,
                      "decorators": [],
                      "name": "Ok",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 156,
                    "end": 161,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 156,
                      "end": 161,
                      "decorators": [],
                      "name": "Retry",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 171,
                    "end": 174,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 171,
                      "end": 174,
                      "decorators": [],
                      "name": "Yes",
                      "optional": false
                    }
                  }
                ]
              },
              "const": true,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 62,
                "end": 74,
                "decorators": [],
                "name": "DialogResult",
                "optional": false
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 187,
            "end": 300,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 194,
              "end": 300,
              "body": {
                "type": "TSInterfaceBody",
                "start": 225,
                "end": 300,
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 235,
                    "end": 294,
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
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 255,
                                    "end": 265,
                                    "decorators": [],
                                    "name": "ViewModels",
                                    "optional": false
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 266,
                                  "end": 273,
                                  "decorators": [],
                                  "name": "Dialogs",
                                  "optional": false
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 274,
                                "end": 286,
                                "decorators": [],
                                "name": "DialogResult",
                                "optional": false
                              }
                            }
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
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 204,
                "end": 224,
                "decorators": [],
                "name": "DialogResultCallback",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 306,
            "end": 352,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 313,
              "end": 352,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 345,
                "end": 352,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 322,
                "end": 342,
                "decorators": [],
                "name": "someExportedFunction",
                "optional": false
              },
              "params": []
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 358,
            "end": 514,
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 365,
              "end": 514,
              "body": {
                "type": "TSEnumBody",
                "start": 394,
                "end": 514,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 404,
                    "end": 420,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 404,
                      "end": 420,
                      "decorators": [],
                      "name": "AbortRetryIgnore",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 430,
                    "end": 432,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 430,
                      "end": 432,
                      "decorators": [],
                      "name": "OK",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 442,
                    "end": 450,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 442,
                      "end": 450,
                      "decorators": [],
                      "name": "OKCancel",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 460,
                    "end": 471,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 460,
                      "end": 471,
                      "decorators": [],
                      "name": "RetryCancel",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 481,
                    "end": 486,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 481,
                      "end": 486,
                      "decorators": [],
                      "name": "YesNo",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 496,
                    "end": 507,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 496,
                      "end": 507,
                      "decorators": [],
                      "name": "YesNoCancel",
                      "optional": false
                    }
                  }
                ]
              },
              "const": true,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 376,
                "end": 393,
                "decorators": [],
                "name": "MessageBoxButtons",
                "optional": false
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
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
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 18,
            "end": 28,
            "decorators": [],
            "name": "ViewModels",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 29,
          "end": 36,
          "decorators": [],
          "name": "Dialogs",
          "optional": false
        }
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 519,
      "end": 1338,
      "body": {
        "type": "TSModuleBlock",
        "start": 548,
        "end": 1338,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 654,
            "end": 706,
            "attributes": [],
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
                "optional": false
              },
              "importKind": "value",
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
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 693,
                  "end": 705,
                  "decorators": [],
                  "name": "DialogResult",
                  "optional": false
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
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
              "optional": false
            },
            "importKind": "value",
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
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 839,
                "end": 856,
                "decorators": [],
                "name": "MessageBoxButtons",
                "optional": false
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 975,
            "end": 1029,
            "attributes": [],
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
                "optional": false
              },
              "importKind": "value",
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
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 1008,
                  "end": 1028,
                  "decorators": [],
                  "name": "DialogResultCallback",
                  "optional": false
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1035,
            "end": 1336,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1042,
              "end": 1336,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 1072,
                "end": 1336,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 1082,
                    "end": 1330,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1082,
                      "end": 1093,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1093,
                      "end": 1330,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1096,
                        "end": 1330,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 1166,
                            "end": 1203,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 1172,
                                "end": 1202,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 1172,
                                  "end": 1178,
                                  "decorators": [],
                                  "name": "value1",
                                  "optional": false
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "start": 1181,
                                  "end": 1202,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 1181,
                                    "end": 1195,
                                    "decorators": [],
                                    "name": "ReExportedEnum",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1196,
                                    "end": 1202,
                                    "decorators": [],
                                    "name": "Cancel",
                                    "optional": false
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "const"
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 1216,
                            "end": 1236,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1216,
                              "end": 1235,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 1228,
                                  "end": 1234,
                                  "decorators": [],
                                  "name": "value1",
                                  "optional": false
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1216,
                                "end": 1227,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1216,
                                  "end": 1223,
                                  "decorators": [],
                                  "name": "console",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1224,
                                  "end": 1227,
                                  "decorators": [],
                                  "name": "log",
                                  "optional": false
                                }
                              },
                              "optional": false
                            }
                          },
                          {
                            "type": "VariableDeclaration",
                            "start": 1249,
                            "end": 1287,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 1255,
                                "end": 1286,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 1255,
                                  "end": 1261,
                                  "decorators": [],
                                  "name": "value2",
                                  "optional": false
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "start": 1264,
                                  "end": 1286,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 1264,
                                    "end": 1277,
                                    "decorators": [],
                                    "name": "DialogButtons",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1278,
                                    "end": 1286,
                                    "decorators": [],
                                    "name": "OKCancel",
                                    "optional": false
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "const"
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 1300,
                            "end": 1320,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1300,
                              "end": 1319,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 1312,
                                  "end": 1318,
                                  "decorators": [],
                                  "name": "value2",
                                  "optional": false
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1300,
                                "end": 1311,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1300,
                                  "end": 1307,
                                  "decorators": [],
                                  "name": "console",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1308,
                                  "end": 1311,
                                  "decorators": [],
                                  "name": "log",
                                  "optional": false
                                }
                              },
                              "optional": false
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 1048,
                "end": 1071,
                "decorators": [],
                "name": "SomeUsagesOfTheseConsts",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
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
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 537,
          "end": 547,
          "decorators": [],
          "name": "ViewModels",
          "optional": false
        }
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
