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
        "name": "TypeScript",
        "optional": false,
        "typeAnnotation": null,
        "start": 218,
        "end": 228
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
                "name": "CompilerDiagnostics",
                "optional": false,
                "typeAnnotation": null,
                "start": 249,
                "end": 268
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
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
                            "name": "debug",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 290,
                            "end": 295
                          },
                          "init": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 298,
                            "end": 303
                          },
                          "definite": false,
                          "start": 290,
                          "end": 303
                        }
                      ],
                      "declare": false,
                      "start": 286,
                      "end": 304
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 279,
                    "end": 304
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IDiagnosticWriter",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 330,
                        "end": 347
                      },
                      "typeParameters": null,
                      "extends": [],
                      "body": {
                        "type": "TSInterfaceBody",
                        "body": [
                          {
                            "type": "TSMethodSignature",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Alert",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 362,
                              "end": 367
                            },
                            "computed": false,
                            "optional": false,
                            "kind": "method",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "output",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 376,
                                    "end": 382
                                  },
                                  "start": 374,
                                  "end": 382
                                },
                                "start": 368,
                                "end": 382
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 385,
                                "end": 389
                              },
                              "start": 383,
                              "end": 389
                            },
                            "accessibility": null,
                            "readonly": false,
                            "static": false,
                            "start": 362,
                            "end": 390
                          }
                        ],
                        "start": 348,
                        "end": 400
                      },
                      "declare": false,
                      "start": 320,
                      "end": 400
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 313,
                    "end": 400
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
                            "name": "diagnosticWriter",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "IDiagnosticWriter",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 439,
                                  "end": 456
                                },
                                "typeArguments": null,
                                "start": 439,
                                "end": 456
                              },
                              "start": 437,
                              "end": 456
                            },
                            "start": 421,
                            "end": 456
                          },
                          "init": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 459,
                            "end": 463
                          },
                          "definite": false,
                          "start": 421,
                          "end": 463
                        }
                      ],
                      "declare": false,
                      "start": 417,
                      "end": 464
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 410,
                    "end": 464
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
                            "name": "analysisPass",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 499,
                                "end": 505
                              },
                              "start": 497,
                              "end": 505
                            },
                            "start": 485,
                            "end": 505
                          },
                          "init": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 508,
                            "end": 509
                          },
                          "definite": false,
                          "start": 485,
                          "end": 509
                        }
                      ],
                      "declare": false,
                      "start": 481,
                      "end": 510
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 474,
                    "end": 510
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Alert",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 536,
                        "end": 541
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "output",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 550,
                              "end": 556
                            },
                            "start": 548,
                            "end": 556
                          },
                          "start": 542,
                          "end": 556
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "diagnosticWriter",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 576,
                              "end": 592
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "diagnosticWriter",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 612,
                                        "end": 628
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Alert",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 629,
                                        "end": 634
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 612,
                                      "end": 634
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "output",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 635,
                                        "end": 641
                                      }
                                    ],
                                    "optional": false,
                                    "start": 612,
                                    "end": 642
                                  },
                                  "directive": null,
                                  "start": 612,
                                  "end": 643
                                }
                              ],
                              "start": 594,
                              "end": 657
                            },
                            "alternate": null,
                            "start": 572,
                            "end": 657
                          }
                        ],
                        "start": 558,
                        "end": 667
                      },
                      "expression": false,
                      "start": 527,
                      "end": 667
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 520,
                    "end": 667
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "debugPrint",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 693,
                        "end": 703
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 707,
                              "end": 713
                            },
                            "start": 705,
                            "end": 713
                          },
                          "start": 704,
                          "end": 713
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "debug",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 733,
                              "end": 738
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Alert",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 758,
                                      "end": 763
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "s",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 764,
                                        "end": 765
                                      }
                                    ],
                                    "optional": false,
                                    "start": 758,
                                    "end": 766
                                  },
                                  "directive": null,
                                  "start": 758,
                                  "end": 767
                                }
                              ],
                              "start": 740,
                              "end": 781
                            },
                            "alternate": null,
                            "start": 729,
                            "end": 781
                          }
                        ],
                        "start": 715,
                        "end": 791
                      },
                      "expression": false,
                      "start": 684,
                      "end": 791
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 677,
                    "end": 791
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assert",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 817,
                        "end": 823
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "condition",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 835,
                              "end": 842
                            },
                            "start": 833,
                            "end": 842
                          },
                          "start": 824,
                          "end": 842
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 847,
                              "end": 853
                            },
                            "start": 845,
                            "end": 853
                          },
                          "start": 844,
                          "end": 853
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "debug",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 873,
                              "end": 878
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "IfStatement",
                                  "test": {
                                    "type": "UnaryExpression",
                                    "operator": "!",
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "condition",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 903,
                                      "end": 912
                                    },
                                    "prefix": true,
                                    "start": 902,
                                    "end": 912
                                  },
                                  "consequent": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Alert",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 936,
                                            "end": 941
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "s",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 942,
                                              "end": 943
                                            }
                                          ],
                                          "optional": false,
                                          "start": 936,
                                          "end": 944
                                        },
                                        "directive": null,
                                        "start": 936,
                                        "end": 945
                                      }
                                    ],
                                    "start": 914,
                                    "end": 963
                                  },
                                  "alternate": null,
                                  "start": 898,
                                  "end": 963
                                }
                              ],
                              "start": 880,
                              "end": 977
                            },
                            "alternate": null,
                            "start": 869,
                            "end": 977
                          }
                        ],
                        "start": 855,
                        "end": 987
                      },
                      "expression": false,
                      "start": 808,
                      "end": 987
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 801,
                    "end": 987
                  }
                ],
                "start": 269,
                "end": 994
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 242,
              "end": 994
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 235,
            "end": 994
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ILogger",
                "optional": false,
                "typeAnnotation": null,
                "start": 1017,
                "end": 1024
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "information",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1035,
                      "end": 1046
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1050,
                        "end": 1057
                      },
                      "start": 1048,
                      "end": 1057
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1035,
                    "end": 1058
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "debug",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1067,
                      "end": 1072
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1076,
                        "end": 1083
                      },
                      "start": 1074,
                      "end": 1083
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1067,
                    "end": 1084
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "warning",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1093,
                      "end": 1100
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1104,
                        "end": 1111
                      },
                      "start": 1102,
                      "end": 1111
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1093,
                    "end": 1112
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1121,
                      "end": 1126
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1130,
                        "end": 1137
                      },
                      "start": 1128,
                      "end": 1137
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1121,
                    "end": 1138
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fatal",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1147,
                      "end": 1152
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1156,
                        "end": 1163
                      },
                      "start": 1154,
                      "end": 1163
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1147,
                    "end": 1164
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1173,
                      "end": 1176
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1180,
                            "end": 1186
                          },
                          "start": 1178,
                          "end": 1186
                        },
                        "start": 1177,
                        "end": 1186
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1189,
                        "end": 1193
                      },
                      "start": 1187,
                      "end": 1193
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1173,
                    "end": 1194
                  }
                ],
                "start": 1025,
                "end": 1200
              },
              "declare": false,
              "start": 1007,
              "end": 1200
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1000,
            "end": 1200
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "NullLogger",
                "optional": false,
                "typeAnnotation": null,
                "start": 1219,
                "end": 1229
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ILogger",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1241,
                    "end": 1248
                  },
                  "typeArguments": null,
                  "start": 1241,
                  "end": 1248
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "information",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1266,
                      "end": 1277
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 1281,
                          "end": 1288
                        },
                        "start": 1279,
                        "end": 1288
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 1298,
                              "end": 1303
                            },
                            "start": 1291,
                            "end": 1304
                          }
                        ],
                        "start": 1289,
                        "end": 1306
                      },
                      "expression": false,
                      "start": 1277,
                      "end": 1306
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1259,
                    "end": 1306
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "debug",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1322,
                      "end": 1327
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 1331,
                          "end": 1338
                        },
                        "start": 1329,
                        "end": 1338
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 1348,
                              "end": 1353
                            },
                            "start": 1341,
                            "end": 1354
                          }
                        ],
                        "start": 1339,
                        "end": 1356
                      },
                      "expression": false,
                      "start": 1327,
                      "end": 1356
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1315,
                    "end": 1356
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "warning",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1372,
                      "end": 1379
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 1383,
                          "end": 1390
                        },
                        "start": 1381,
                        "end": 1390
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 1400,
                              "end": 1405
                            },
                            "start": 1393,
                            "end": 1406
                          }
                        ],
                        "start": 1391,
                        "end": 1408
                      },
                      "expression": false,
                      "start": 1379,
                      "end": 1408
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1365,
                    "end": 1408
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1424,
                      "end": 1429
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 1433,
                          "end": 1440
                        },
                        "start": 1431,
                        "end": 1440
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 1450,
                              "end": 1455
                            },
                            "start": 1443,
                            "end": 1456
                          }
                        ],
                        "start": 1441,
                        "end": 1458
                      },
                      "expression": false,
                      "start": 1429,
                      "end": 1458
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1417,
                    "end": 1458
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fatal",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1474,
                      "end": 1479
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 1483,
                          "end": 1490
                        },
                        "start": 1481,
                        "end": 1490
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 1500,
                              "end": 1505
                            },
                            "start": 1493,
                            "end": 1506
                          }
                        ],
                        "start": 1491,
                        "end": 1508
                      },
                      "expression": false,
                      "start": 1479,
                      "end": 1508
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1467,
                    "end": 1508
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1524,
                      "end": 1527
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1531,
                              "end": 1537
                            },
                            "start": 1529,
                            "end": 1537
                          },
                          "start": 1528,
                          "end": 1537
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1540,
                          "end": 1544
                        },
                        "start": 1538,
                        "end": 1544
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1545,
                        "end": 1556
                      },
                      "expression": false,
                      "start": 1527,
                      "end": 1556
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1517,
                    "end": 1556
                  }
                ],
                "start": 1249,
                "end": 1562
              },
              "abstract": false,
              "declare": false,
              "start": 1213,
              "end": 1562
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1206,
            "end": 1562
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "LoggerAdapter",
                "optional": false,
                "typeAnnotation": null,
                "start": 1581,
                "end": 1594
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ILogger",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1606,
                    "end": 1613
                  },
                  "typeArguments": null,
                  "start": 1606,
                  "end": 1613
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_information",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1632,
                      "end": 1644
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1646,
                        "end": 1653
                      },
                      "start": 1644,
                      "end": 1653
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 1624,
                    "end": 1654
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_debug",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1671,
                      "end": 1677
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1679,
                        "end": 1686
                      },
                      "start": 1677,
                      "end": 1686
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 1663,
                    "end": 1687
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_warning",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1704,
                      "end": 1712
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1714,
                        "end": 1721
                      },
                      "start": 1712,
                      "end": 1721
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 1696,
                    "end": 1722
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1739,
                      "end": 1745
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1747,
                        "end": 1754
                      },
                      "start": 1745,
                      "end": 1754
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 1731,
                    "end": 1755
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_fatal",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1772,
                      "end": 1778
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1780,
                        "end": 1787
                      },
                      "start": 1778,
                      "end": 1787
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 1764,
                    "end": 1788
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1798,
                      "end": 1809
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "logger",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ILogger",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1826,
                                  "end": 1833
                                },
                                "typeArguments": null,
                                "start": 1826,
                                "end": 1833
                              },
                              "start": 1824,
                              "end": 1833
                            },
                            "start": 1818,
                            "end": 1833
                          },
                          "readonly": false,
                          "static": false,
                          "start": 1811,
                          "end": 1833
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1850,
                                  "end": 1854
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_information",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1855,
                                  "end": 1867
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1850,
                                "end": 1867
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 1870,
                                      "end": 1874
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "logger",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1875,
                                      "end": 1881
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1870,
                                    "end": 1881
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "information",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1882,
                                    "end": 1893
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1870,
                                  "end": 1893
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 1870,
                                "end": 1895
                              },
                              "start": 1850,
                              "end": 1895
                            },
                            "directive": null,
                            "start": 1850,
                            "end": 1896
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1909,
                                  "end": 1913
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_debug",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1914,
                                  "end": 1920
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1909,
                                "end": 1920
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 1923,
                                      "end": 1927
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "logger",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1928,
                                      "end": 1934
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1923,
                                    "end": 1934
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "debug",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1935,
                                    "end": 1940
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1923,
                                  "end": 1940
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 1923,
                                "end": 1942
                              },
                              "start": 1909,
                              "end": 1942
                            },
                            "directive": null,
                            "start": 1909,
                            "end": 1943
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1956,
                                  "end": 1960
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_warning",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1961,
                                  "end": 1969
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1956,
                                "end": 1969
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 1972,
                                      "end": 1976
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "logger",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1977,
                                      "end": 1983
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1972,
                                    "end": 1983
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "warning",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1984,
                                    "end": 1991
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1972,
                                  "end": 1991
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 1972,
                                "end": 1993
                              },
                              "start": 1956,
                              "end": 1993
                            },
                            "directive": null,
                            "start": 1956,
                            "end": 1994
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2007,
                                  "end": 2011
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_error",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2012,
                                  "end": 2018
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2007,
                                "end": 2018
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 2021,
                                      "end": 2025
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "logger",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2026,
                                      "end": 2032
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2021,
                                    "end": 2032
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "error",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2033,
                                    "end": 2038
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2021,
                                  "end": 2038
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 2021,
                                "end": 2040
                              },
                              "start": 2007,
                              "end": 2040
                            },
                            "directive": null,
                            "start": 2007,
                            "end": 2041
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2054,
                                  "end": 2058
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_fatal",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2059,
                                  "end": 2065
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2054,
                                "end": 2065
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 2068,
                                      "end": 2072
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "logger",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2073,
                                      "end": 2079
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2068,
                                    "end": 2079
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "fatal",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2080,
                                    "end": 2085
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2068,
                                  "end": 2085
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 2068,
                                "end": 2087
                              },
                              "start": 2054,
                              "end": 2087
                            },
                            "directive": null,
                            "start": 2054,
                            "end": 2088
                          }
                        ],
                        "start": 1835,
                        "end": 2098
                      },
                      "expression": false,
                      "start": 1810,
                      "end": 2098
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1798,
                    "end": 2098
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "information",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2116,
                      "end": 2127
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 2131,
                          "end": 2138
                        },
                        "start": 2129,
                        "end": 2138
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 2148,
                                "end": 2152
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_information",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2153,
                                "end": 2165
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2148,
                              "end": 2165
                            },
                            "start": 2141,
                            "end": 2166
                          }
                        ],
                        "start": 2139,
                        "end": 2168
                      },
                      "expression": false,
                      "start": 2127,
                      "end": 2168
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2109,
                    "end": 2168
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "debug",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2184,
                      "end": 2189
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 2193,
                          "end": 2200
                        },
                        "start": 2191,
                        "end": 2200
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 2210,
                                "end": 2214
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_debug",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2215,
                                "end": 2221
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2210,
                              "end": 2221
                            },
                            "start": 2203,
                            "end": 2222
                          }
                        ],
                        "start": 2201,
                        "end": 2224
                      },
                      "expression": false,
                      "start": 2189,
                      "end": 2224
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2177,
                    "end": 2224
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "warning",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2240,
                      "end": 2247
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 2251,
                          "end": 2258
                        },
                        "start": 2249,
                        "end": 2258
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 2268,
                                "end": 2272
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_warning",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2273,
                                "end": 2281
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2268,
                              "end": 2281
                            },
                            "start": 2261,
                            "end": 2282
                          }
                        ],
                        "start": 2259,
                        "end": 2284
                      },
                      "expression": false,
                      "start": 2247,
                      "end": 2284
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2233,
                    "end": 2284
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2300,
                      "end": 2305
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 2309,
                          "end": 2316
                        },
                        "start": 2307,
                        "end": 2316
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 2326,
                                "end": 2330
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_error",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2331,
                                "end": 2337
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2326,
                              "end": 2337
                            },
                            "start": 2319,
                            "end": 2338
                          }
                        ],
                        "start": 2317,
                        "end": 2340
                      },
                      "expression": false,
                      "start": 2305,
                      "end": 2340
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2293,
                    "end": 2340
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fatal",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2356,
                      "end": 2361
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 2365,
                          "end": 2372
                        },
                        "start": 2363,
                        "end": 2372
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 2382,
                                "end": 2386
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_fatal",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2387,
                                "end": 2393
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2382,
                              "end": 2393
                            },
                            "start": 2375,
                            "end": 2394
                          }
                        ],
                        "start": 2373,
                        "end": 2396
                      },
                      "expression": false,
                      "start": 2361,
                      "end": 2396
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2349,
                    "end": 2396
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2412,
                      "end": 2415
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2419,
                              "end": 2425
                            },
                            "start": 2417,
                            "end": 2425
                          },
                          "start": 2416,
                          "end": 2425
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 2428,
                          "end": 2432
                        },
                        "start": 2426,
                        "end": 2432
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 2447,
                                    "end": 2451
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "logger",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2452,
                                    "end": 2458
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2447,
                                  "end": 2458
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "log",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2459,
                                  "end": 2462
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2447,
                                "end": 2462
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "s",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2463,
                                  "end": 2464
                                }
                              ],
                              "optional": false,
                              "start": 2447,
                              "end": 2465
                            },
                            "directive": null,
                            "start": 2447,
                            "end": 2466
                          }
                        ],
                        "start": 2433,
                        "end": 2476
                      },
                      "expression": false,
                      "start": 2415,
                      "end": 2476
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2405,
                    "end": 2476
                  }
                ],
                "start": 1614,
                "end": 2482
              },
              "abstract": false,
              "declare": false,
              "start": 1575,
              "end": 2482
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1568,
            "end": 2482
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "BufferedLogger",
                "optional": false,
                "typeAnnotation": null,
                "start": 2501,
                "end": 2515
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ILogger",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2527,
                    "end": 2534
                  },
                  "typeArguments": null,
                  "start": 2527,
                  "end": 2534
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "logContents",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2552,
                      "end": 2563
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 2566,
                      "end": 2568
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 2545,
                    "end": 2569
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "information",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2586,
                      "end": 2597
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 2601,
                          "end": 2608
                        },
                        "start": 2599,
                        "end": 2608
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 2618,
                              "end": 2623
                            },
                            "start": 2611,
                            "end": 2624
                          }
                        ],
                        "start": 2609,
                        "end": 2626
                      },
                      "expression": false,
                      "start": 2597,
                      "end": 2626
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2579,
                    "end": 2626
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "debug",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2642,
                      "end": 2647
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 2651,
                          "end": 2658
                        },
                        "start": 2649,
                        "end": 2658
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 2668,
                              "end": 2673
                            },
                            "start": 2661,
                            "end": 2674
                          }
                        ],
                        "start": 2659,
                        "end": 2676
                      },
                      "expression": false,
                      "start": 2647,
                      "end": 2676
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2635,
                    "end": 2676
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "warning",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2692,
                      "end": 2699
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 2703,
                          "end": 2710
                        },
                        "start": 2701,
                        "end": 2710
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 2720,
                              "end": 2725
                            },
                            "start": 2713,
                            "end": 2726
                          }
                        ],
                        "start": 2711,
                        "end": 2728
                      },
                      "expression": false,
                      "start": 2699,
                      "end": 2728
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2685,
                    "end": 2728
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2744,
                      "end": 2749
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 2753,
                          "end": 2760
                        },
                        "start": 2751,
                        "end": 2760
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 2770,
                              "end": 2775
                            },
                            "start": 2763,
                            "end": 2776
                          }
                        ],
                        "start": 2761,
                        "end": 2778
                      },
                      "expression": false,
                      "start": 2749,
                      "end": 2778
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2737,
                    "end": 2778
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fatal",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2794,
                      "end": 2799
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 2803,
                          "end": 2810
                        },
                        "start": 2801,
                        "end": 2810
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 2820,
                              "end": 2825
                            },
                            "start": 2813,
                            "end": 2826
                          }
                        ],
                        "start": 2811,
                        "end": 2828
                      },
                      "expression": false,
                      "start": 2799,
                      "end": 2828
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2787,
                    "end": 2828
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2844,
                      "end": 2847
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2851,
                              "end": 2857
                            },
                            "start": 2849,
                            "end": 2857
                          },
                          "start": 2848,
                          "end": 2857
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 2860,
                          "end": 2864
                        },
                        "start": 2858,
                        "end": 2864
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 2879,
                                    "end": 2883
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "logContents",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2884,
                                    "end": 2895
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2879,
                                  "end": 2895
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "push",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2896,
                                  "end": 2900
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2879,
                                "end": 2900
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "s",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2901,
                                  "end": 2902
                                }
                              ],
                              "optional": false,
                              "start": 2879,
                              "end": 2903
                            },
                            "directive": null,
                            "start": 2879,
                            "end": 2904
                          }
                        ],
                        "start": 2865,
                        "end": 2914
                      },
                      "expression": false,
                      "start": 2847,
                      "end": 2914
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2837,
                    "end": 2914
                  }
                ],
                "start": 2535,
                "end": 2920
              },
              "abstract": false,
              "declare": false,
              "start": 2495,
              "end": 2920
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2488,
            "end": 2920
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "timeFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 2942,
                "end": 2954
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "logger",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ILogger",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2963,
                        "end": 2970
                      },
                      "typeArguments": null,
                      "start": 2963,
                      "end": 2970
                    },
                    "start": 2961,
                    "end": 2970
                  },
                  "start": 2955,
                  "end": 2970
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "funcDescription",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2989,
                      "end": 2995
                    },
                    "start": 2987,
                    "end": 2995
                  },
                  "start": 2972,
                  "end": 2995
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "func",
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
                          "type": "TSAnyKeyword",
                          "start": 3008,
                          "end": 3011
                        },
                        "start": 3006,
                        "end": 3011
                      },
                      "start": 3003,
                      "end": 3011
                    },
                    "start": 3001,
                    "end": 3011
                  },
                  "start": 2997,
                  "end": 3011
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 3014,
                  "end": 3017
                },
                "start": 3012,
                "end": 3017
              },
              "body": {
                "type": "BlockStatement",
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
                          "name": "start",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3032,
                          "end": 3037
                        },
                        "init": {
                          "type": "UnaryExpression",
                          "operator": "+",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3045,
                              "end": 3049
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 3041,
                            "end": 3051
                          },
                          "prefix": true,
                          "start": 3040,
                          "end": 3051
                        },
                        "definite": false,
                        "start": 3032,
                        "end": 3051
                      }
                    ],
                    "declare": false,
                    "start": 3028,
                    "end": 3052
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
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3065,
                          "end": 3071
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "func",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3074,
                            "end": 3078
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 3074,
                          "end": 3080
                        },
                        "definite": false,
                        "start": 3065,
                        "end": 3080
                      }
                    ],
                    "declare": false,
                    "start": 3061,
                    "end": 3081
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
                          "name": "end",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3094,
                          "end": 3097
                        },
                        "init": {
                          "type": "UnaryExpression",
                          "operator": "+",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3105,
                              "end": 3109
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 3101,
                            "end": 3111
                          },
                          "prefix": true,
                          "start": 3100,
                          "end": 3111
                        },
                        "definite": false,
                        "start": 3094,
                        "end": 3111
                      }
                    ],
                    "declare": false,
                    "start": 3090,
                    "end": 3112
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
                          "name": "logger",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3121,
                          "end": 3127
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3128,
                          "end": 3131
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3121,
                        "end": 3131
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "funcDescription",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3132,
                                "end": 3147
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "value": " completed in ",
                                "raw": "\" completed in \"",
                                "start": 3150,
                                "end": 3166
                              },
                              "start": 3132,
                              "end": 3166
                            },
                            "operator": "+",
                            "right": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "end",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3170,
                                "end": 3173
                              },
                              "operator": "-",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "start",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3176,
                                "end": 3181
                              },
                              "start": 3170,
                              "end": 3181
                            },
                            "start": 3132,
                            "end": 3182
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "value": " msec",
                            "raw": "\" msec\"",
                            "start": 3185,
                            "end": 3192
                          },
                          "start": 3132,
                          "end": 3192
                        }
                      ],
                      "optional": false,
                      "start": 3121,
                      "end": 3193
                    },
                    "directive": null,
                    "start": 3121,
                    "end": 3194
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3210,
                      "end": 3216
                    },
                    "start": 3203,
                    "end": 3217
                  }
                ],
                "start": 3018,
                "end": 3223
              },
              "expression": false,
              "start": 2933,
              "end": 3223
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2926,
            "end": 3223
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "stringToLiteral",
                "optional": false,
                "typeAnnotation": null,
                "start": 3245,
                "end": 3260
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3268,
                      "end": 3274
                    },
                    "start": 3266,
                    "end": 3274
                  },
                  "start": 3261,
                  "end": 3274
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3284,
                      "end": 3290
                    },
                    "start": 3282,
                    "end": 3290
                  },
                  "start": 3276,
                  "end": 3290
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 3293,
                  "end": 3299
                },
                "start": 3291,
                "end": 3299
              },
              "body": {
                "type": "BlockStatement",
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
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3314,
                          "end": 3320
                        },
                        "init": {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 3323,
                          "end": 3325
                        },
                        "definite": false,
                        "start": 3314,
                        "end": 3325
                      }
                    ],
                    "declare": false,
                    "start": 3310,
                    "end": 3326
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
                          "name": "addChar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3340,
                          "end": 3347
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "index",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 3358,
                                  "end": 3364
                                },
                                "start": 3356,
                                "end": 3364
                              },
                              "start": 3351,
                              "end": 3364
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
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
                                      "name": "ch",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3387,
                                      "end": 3389
                                    },
                                    "init": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "value",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3392,
                                          "end": 3397
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "charCodeAt",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3398,
                                          "end": 3408
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 3392,
                                        "end": 3408
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "index",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3409,
                                          "end": 3414
                                        }
                                      ],
                                      "optional": false,
                                      "start": 3392,
                                      "end": 3415
                                    },
                                    "definite": false,
                                    "start": 3387,
                                    "end": 3415
                                  }
                                ],
                                "declare": false,
                                "start": 3383,
                                "end": 3416
                              },
                              {
                                "type": "SwitchStatement",
                                "discriminant": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ch",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3437,
                                  "end": 3439
                                },
                                "cases": [
                                  {
                                    "type": "SwitchCase",
                                    "test": {
                                      "type": "Literal",
                                      "value": 9,
                                      "raw": "0x09",
                                      "start": 3464,
                                      "end": 3468
                                    },
                                    "consequent": [
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "+=",
                                          "left": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3497,
                                            "end": 3503
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": "\\t",
                                            "raw": "\"\\\\t\"",
                                            "start": 3507,
                                            "end": 3512
                                          },
                                          "start": 3497,
                                          "end": 3512
                                        },
                                        "directive": null,
                                        "start": 3497,
                                        "end": 3513
                                      },
                                      {
                                        "type": "BreakStatement",
                                        "label": null,
                                        "start": 3534,
                                        "end": 3540
                                      }
                                    ],
                                    "start": 3459,
                                    "end": 3540
                                  },
                                  {
                                    "type": "SwitchCase",
                                    "test": {
                                      "type": "Literal",
                                      "value": 10,
                                      "raw": "0x0a",
                                      "start": 3562,
                                      "end": 3566
                                    },
                                    "consequent": [
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "+=",
                                          "left": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3601,
                                            "end": 3607
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": "\\n",
                                            "raw": "\"\\\\n\"",
                                            "start": 3611,
                                            "end": 3616
                                          },
                                          "start": 3601,
                                          "end": 3616
                                        },
                                        "directive": null,
                                        "start": 3601,
                                        "end": 3617
                                      },
                                      {
                                        "type": "BreakStatement",
                                        "label": null,
                                        "start": 3638,
                                        "end": 3644
                                      }
                                    ],
                                    "start": 3557,
                                    "end": 3644
                                  },
                                  {
                                    "type": "SwitchCase",
                                    "test": {
                                      "type": "Literal",
                                      "value": 11,
                                      "raw": "0x0b",
                                      "start": 3666,
                                      "end": 3670
                                    },
                                    "consequent": [
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "+=",
                                          "left": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3708,
                                            "end": 3714
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": "\\v",
                                            "raw": "\"\\\\v\"",
                                            "start": 3718,
                                            "end": 3723
                                          },
                                          "start": 3708,
                                          "end": 3723
                                        },
                                        "directive": null,
                                        "start": 3708,
                                        "end": 3724
                                      },
                                      {
                                        "type": "BreakStatement",
                                        "label": null,
                                        "start": 3745,
                                        "end": 3751
                                      }
                                    ],
                                    "start": 3661,
                                    "end": 3751
                                  },
                                  {
                                    "type": "SwitchCase",
                                    "test": {
                                      "type": "Literal",
                                      "value": 12,
                                      "raw": "0x0c",
                                      "start": 3773,
                                      "end": 3777
                                    },
                                    "consequent": [
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "+=",
                                          "left": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3812,
                                            "end": 3818
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": "\\f",
                                            "raw": "\"\\\\f\"",
                                            "start": 3822,
                                            "end": 3827
                                          },
                                          "start": 3812,
                                          "end": 3827
                                        },
                                        "directive": null,
                                        "start": 3812,
                                        "end": 3828
                                      },
                                      {
                                        "type": "BreakStatement",
                                        "label": null,
                                        "start": 3849,
                                        "end": 3855
                                      }
                                    ],
                                    "start": 3768,
                                    "end": 3855
                                  },
                                  {
                                    "type": "SwitchCase",
                                    "test": {
                                      "type": "Literal",
                                      "value": 13,
                                      "raw": "0x0d",
                                      "start": 3877,
                                      "end": 3881
                                    },
                                    "consequent": [
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "+=",
                                          "left": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3922,
                                            "end": 3928
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": "\\r",
                                            "raw": "\"\\\\r\"",
                                            "start": 3932,
                                            "end": 3937
                                          },
                                          "start": 3922,
                                          "end": 3937
                                        },
                                        "directive": null,
                                        "start": 3922,
                                        "end": 3938
                                      },
                                      {
                                        "type": "BreakStatement",
                                        "label": null,
                                        "start": 3959,
                                        "end": 3965
                                      }
                                    ],
                                    "start": 3872,
                                    "end": 3965
                                  },
                                  {
                                    "type": "SwitchCase",
                                    "test": {
                                      "type": "Literal",
                                      "value": 34,
                                      "raw": "0x22",
                                      "start": 3987,
                                      "end": 3991
                                    },
                                    "consequent": [
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "+=",
                                          "left": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 4030,
                                            "end": 4036
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": "\\\"",
                                            "raw": "\"\\\\\\\"\"",
                                            "start": 4040,
                                            "end": 4046
                                          },
                                          "start": 4030,
                                          "end": 4046
                                        },
                                        "directive": null,
                                        "start": 4030,
                                        "end": 4047
                                      },
                                      {
                                        "type": "BreakStatement",
                                        "label": null,
                                        "start": 4068,
                                        "end": 4074
                                      }
                                    ],
                                    "start": 3982,
                                    "end": 4074
                                  },
                                  {
                                    "type": "SwitchCase",
                                    "test": {
                                      "type": "Literal",
                                      "value": 39,
                                      "raw": "0x27",
                                      "start": 4096,
                                      "end": 4100
                                    },
                                    "consequent": [
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "+=",
                                          "left": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 4138,
                                            "end": 4144
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": "\\'",
                                            "raw": "\"\\\\\\'\"",
                                            "start": 4148,
                                            "end": 4154
                                          },
                                          "start": 4138,
                                          "end": 4154
                                        },
                                        "directive": null,
                                        "start": 4138,
                                        "end": 4155
                                      },
                                      {
                                        "type": "BreakStatement",
                                        "label": null,
                                        "start": 4176,
                                        "end": 4182
                                      }
                                    ],
                                    "start": 4091,
                                    "end": 4182
                                  },
                                  {
                                    "type": "SwitchCase",
                                    "test": {
                                      "type": "Literal",
                                      "value": 92,
                                      "raw": "0x5c",
                                      "start": 4204,
                                      "end": 4208
                                    },
                                    "consequent": [
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "+=",
                                          "left": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 4243,
                                            "end": 4249
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": "\\",
                                            "raw": "\"\\\\\"",
                                            "start": 4253,
                                            "end": 4257
                                          },
                                          "start": 4243,
                                          "end": 4257
                                        },
                                        "directive": null,
                                        "start": 4243,
                                        "end": 4258
                                      },
                                      {
                                        "type": "BreakStatement",
                                        "label": null,
                                        "start": 4279,
                                        "end": 4285
                                      }
                                    ],
                                    "start": 4199,
                                    "end": 4285
                                  },
                                  {
                                    "type": "SwitchCase",
                                    "test": null,
                                    "consequent": [
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "+=",
                                          "left": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 4331,
                                            "end": 4337
                                          },
                                          "right": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "value",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 4341,
                                                "end": 4346
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "charAt",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 4347,
                                                "end": 4353
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 4341,
                                              "end": 4353
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "index",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 4354,
                                                "end": 4359
                                              }
                                            ],
                                            "optional": false,
                                            "start": 4341,
                                            "end": 4360
                                          },
                                          "start": 4331,
                                          "end": 4360
                                        },
                                        "directive": null,
                                        "start": 4331,
                                        "end": 4361
                                      }
                                    ],
                                    "start": 4302,
                                    "end": 4361
                                  }
                                ],
                                "start": 3429,
                                "end": 4375
                              }
                            ],
                            "start": 3369,
                            "end": 4385
                          },
                          "id": null,
                          "generator": false,
                          "start": 3350,
                          "end": 4385
                        },
                        "definite": false,
                        "start": 3340,
                        "end": 4385
                      }
                    ],
                    "declare": false,
                    "start": 3336,
                    "end": 4385
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
                          "name": "tooLong",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4399,
                          "end": 4406
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4410,
                              "end": 4415
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4416,
                              "end": 4422
                            },
                            "optional": false,
                            "computed": false,
                            "start": 4410,
                            "end": 4422
                          },
                          "operator": ">",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4425,
                            "end": 4431
                          },
                          "start": 4410,
                          "end": 4431
                        },
                        "definite": false,
                        "start": 4399,
                        "end": 4432
                      }
                    ],
                    "declare": false,
                    "start": 4395,
                    "end": 4433
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "tooLong",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4446,
                      "end": 4453
                    },
                    "consequent": {
                      "type": "BlockStatement",
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
                                "name": "mid",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4473,
                                "end": 4476
                              },
                              "init": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4479,
                                  "end": 4485
                                },
                                "operator": ">>",
                                "right": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 4489,
                                  "end": 4490
                                },
                                "start": 4479,
                                "end": 4490
                              },
                              "definite": false,
                              "start": 4473,
                              "end": 4490
                            }
                          ],
                          "declare": false,
                          "start": 4469,
                          "end": 4491
                        },
                        {
                          "type": "ForStatement",
                          "init": {
                            "type": "VariableDeclaration",
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4513,
                                  "end": 4514
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 4517,
                                  "end": 4518
                                },
                                "definite": false,
                                "start": 4513,
                                "end": 4518
                              }
                            ],
                            "declare": false,
                            "start": 4509,
                            "end": 4518
                          },
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4520,
                              "end": 4521
                            },
                            "operator": "<",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "mid",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4524,
                              "end": 4527
                            },
                            "start": 4520,
                            "end": 4527
                          },
                          "update": {
                            "type": "UpdateExpression",
                            "operator": "++",
                            "prefix": false,
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4529,
                              "end": 4530
                            },
                            "start": 4529,
                            "end": 4532
                          },
                          "body": {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "addChar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4534,
                                "end": 4541
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4542,
                                  "end": 4543
                                }
                              ],
                              "optional": false,
                              "start": 4534,
                              "end": 4544
                            },
                            "directive": null,
                            "start": 4534,
                            "end": 4545
                          },
                          "start": 4504,
                          "end": 4545
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "+=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "result",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4558,
                              "end": 4564
                            },
                            "right": {
                              "type": "Literal",
                              "value": "(...)",
                              "raw": "\"(...)\"",
                              "start": 4568,
                              "end": 4575
                            },
                            "start": 4558,
                            "end": 4575
                          },
                          "directive": null,
                          "start": 4558,
                          "end": 4576
                        },
                        {
                          "type": "ForStatement",
                          "init": {
                            "type": "VariableDeclaration",
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4598,
                                  "end": 4599
                                },
                                "init": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "value",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4602,
                                      "end": 4607
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4608,
                                      "end": 4614
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 4602,
                                    "end": 4614
                                  },
                                  "operator": "-",
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "mid",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4617,
                                    "end": 4620
                                  },
                                  "start": 4602,
                                  "end": 4620
                                },
                                "definite": false,
                                "start": 4598,
                                "end": 4620
                              }
                            ],
                            "declare": false,
                            "start": 4594,
                            "end": 4620
                          },
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4622,
                              "end": 4623
                            },
                            "operator": "<",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4626,
                                "end": 4631
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4632,
                                "end": 4638
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4626,
                              "end": 4638
                            },
                            "start": 4622,
                            "end": 4638
                          },
                          "update": {
                            "type": "UpdateExpression",
                            "operator": "++",
                            "prefix": false,
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4640,
                              "end": 4641
                            },
                            "start": 4640,
                            "end": 4643
                          },
                          "body": {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "addChar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4645,
                                "end": 4652
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4653,
                                  "end": 4654
                                }
                              ],
                              "optional": false,
                              "start": 4645,
                              "end": 4655
                            },
                            "directive": null,
                            "start": 4645,
                            "end": 4656
                          },
                          "start": 4589,
                          "end": 4656
                        }
                      ],
                      "start": 4455,
                      "end": 4666
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4694,
                              "end": 4700
                            },
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4703,
                                "end": 4708
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4709,
                                "end": 4715
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4703,
                              "end": 4715
                            },
                            "start": 4694,
                            "end": 4715
                          },
                          "directive": null,
                          "start": 4694,
                          "end": 4716
                        },
                        {
                          "type": "ForStatement",
                          "init": {
                            "type": "VariableDeclaration",
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4738,
                                  "end": 4739
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 4742,
                                  "end": 4743
                                },
                                "definite": false,
                                "start": 4738,
                                "end": 4743
                              }
                            ],
                            "declare": false,
                            "start": 4734,
                            "end": 4743
                          },
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4745,
                              "end": 4746
                            },
                            "operator": "<",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4749,
                              "end": 4755
                            },
                            "start": 4745,
                            "end": 4755
                          },
                          "update": {
                            "type": "UpdateExpression",
                            "operator": "++",
                            "prefix": false,
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4757,
                              "end": 4758
                            },
                            "start": 4757,
                            "end": 4760
                          },
                          "body": {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "addChar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4762,
                                "end": 4769
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4770,
                                  "end": 4771
                                }
                              ],
                              "optional": false,
                              "start": 4762,
                              "end": 4772
                            },
                            "directive": null,
                            "start": 4762,
                            "end": 4773
                          },
                          "start": 4729,
                          "end": 4773
                        }
                      ],
                      "start": 4680,
                      "end": 4783
                    },
                    "start": 4442,
                    "end": 4783
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4799,
                      "end": 4805
                    },
                    "start": 4792,
                    "end": 4806
                  }
                ],
                "start": 3300,
                "end": 4812
              },
              "expression": false,
              "start": 3236,
              "end": 4812
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3229,
            "end": 4812
          }
        ],
        "start": 229,
        "end": 4814
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 211,
      "end": 4814
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 211,
  "end": 4814
}
```
