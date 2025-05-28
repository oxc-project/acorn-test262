__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 211,
  "end": 4814,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 211,
      "end": 4814,
      "id": {
        "type": "Identifier",
        "start": 218,
        "end": 228,
        "decorators": [],
        "name": "TypeScript",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 229,
        "end": 4814,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 235,
            "end": 994,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 242,
              "end": 994,
              "id": {
                "type": "Identifier",
                "start": 249,
                "end": 268,
                "decorators": [],
                "name": "CompilerDiagnostics",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 269,
                "end": 994,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 279,
                    "end": 304,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 286,
                      "end": 304,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 290,
                          "end": 303,
                          "id": {
                            "type": "Identifier",
                            "start": 290,
                            "end": 295,
                            "decorators": [],
                            "name": "debug",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "Literal",
                            "start": 298,
                            "end": 303,
                            "value": false,
                            "raw": "false"
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
                    "start": 313,
                    "end": 400,
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 320,
                      "end": 400,
                      "id": {
                        "type": "Identifier",
                        "start": 330,
                        "end": 347,
                        "decorators": [],
                        "name": "IDiagnosticWriter",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "extends": [],
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 348,
                        "end": 400,
                        "body": [
                          {
                            "type": "TSMethodSignature",
                            "start": 362,
                            "end": 390,
                            "key": {
                              "type": "Identifier",
                              "start": 362,
                              "end": 367,
                              "decorators": [],
                              "name": "Alert",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "computed": false,
                            "optional": false,
                            "kind": "method",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 368,
                                "end": 382,
                                "decorators": [],
                                "name": "output",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 374,
                                  "end": 382,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 376,
                                    "end": 382
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 383,
                              "end": 389,
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 385,
                                "end": 389
                              }
                            },
                            "accessibility": null,
                            "readonly": false,
                            "static": false
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
                    "start": 410,
                    "end": 464,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 417,
                      "end": 464,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 421,
                          "end": 463,
                          "id": {
                            "type": "Identifier",
                            "start": 421,
                            "end": 456,
                            "decorators": [],
                            "name": "diagnosticWriter",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 437,
                              "end": 456,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 439,
                                "end": 456,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 439,
                                  "end": 456,
                                  "decorators": [],
                                  "name": "IDiagnosticWriter",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "init": {
                            "type": "Literal",
                            "start": 459,
                            "end": 463,
                            "value": null,
                            "raw": "null"
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
                    "start": 474,
                    "end": 510,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 481,
                      "end": 510,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 485,
                          "end": 509,
                          "id": {
                            "type": "Identifier",
                            "start": 485,
                            "end": 505,
                            "decorators": [],
                            "name": "analysisPass",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 497,
                              "end": 505,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 499,
                                "end": 505
                              }
                            }
                          },
                          "init": {
                            "type": "Literal",
                            "start": 508,
                            "end": 509,
                            "value": 0,
                            "raw": "0"
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
                    "start": 520,
                    "end": 667,
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "start": 527,
                      "end": 667,
                      "id": {
                        "type": "Identifier",
                        "start": 536,
                        "end": 541,
                        "decorators": [],
                        "name": "Alert",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 542,
                          "end": 556,
                          "decorators": [],
                          "name": "output",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 548,
                            "end": 556,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 550,
                              "end": 556
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 558,
                        "end": 667,
                        "body": [
                          {
                            "type": "IfStatement",
                            "start": 572,
                            "end": 657,
                            "test": {
                              "type": "Identifier",
                              "start": 576,
                              "end": 592,
                              "decorators": [],
                              "name": "diagnosticWriter",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 594,
                              "end": 657,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 612,
                                  "end": 643,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 612,
                                    "end": 642,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 612,
                                      "end": 634,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 612,
                                        "end": 628,
                                        "decorators": [],
                                        "name": "diagnosticWriter",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 629,
                                        "end": 634,
                                        "decorators": [],
                                        "name": "Alert",
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
                                        "start": 635,
                                        "end": 641,
                                        "decorators": [],
                                        "name": "output",
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
                            "alternate": null
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
                    "start": 677,
                    "end": 791,
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "start": 684,
                      "end": 791,
                      "id": {
                        "type": "Identifier",
                        "start": 693,
                        "end": 703,
                        "decorators": [],
                        "name": "debugPrint",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 704,
                          "end": 713,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 705,
                            "end": 713,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 707,
                              "end": 713
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 715,
                        "end": 791,
                        "body": [
                          {
                            "type": "IfStatement",
                            "start": 729,
                            "end": 781,
                            "test": {
                              "type": "Identifier",
                              "start": 733,
                              "end": 738,
                              "decorators": [],
                              "name": "debug",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 740,
                              "end": 781,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 758,
                                  "end": 767,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 758,
                                    "end": 766,
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 758,
                                      "end": 763,
                                      "decorators": [],
                                      "name": "Alert",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 764,
                                        "end": 765,
                                        "decorators": [],
                                        "name": "s",
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
                            "alternate": null
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
                    "start": 801,
                    "end": 987,
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "start": 808,
                      "end": 987,
                      "id": {
                        "type": "Identifier",
                        "start": 817,
                        "end": 823,
                        "decorators": [],
                        "name": "assert",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 824,
                          "end": 842,
                          "decorators": [],
                          "name": "condition",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 833,
                            "end": 842,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 835,
                              "end": 842
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 844,
                          "end": 853,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 845,
                            "end": 853,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 847,
                              "end": 853
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 855,
                        "end": 987,
                        "body": [
                          {
                            "type": "IfStatement",
                            "start": 869,
                            "end": 977,
                            "test": {
                              "type": "Identifier",
                              "start": 873,
                              "end": 878,
                              "decorators": [],
                              "name": "debug",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 880,
                              "end": 977,
                              "body": [
                                {
                                  "type": "IfStatement",
                                  "start": 898,
                                  "end": 963,
                                  "test": {
                                    "type": "UnaryExpression",
                                    "start": 902,
                                    "end": 912,
                                    "operator": "!",
                                    "argument": {
                                      "type": "Identifier",
                                      "start": 903,
                                      "end": 912,
                                      "decorators": [],
                                      "name": "condition",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "prefix": true
                                  },
                                  "consequent": {
                                    "type": "BlockStatement",
                                    "start": 914,
                                    "end": 963,
                                    "body": [
                                      {
                                        "type": "ExpressionStatement",
                                        "start": 936,
                                        "end": 945,
                                        "expression": {
                                          "type": "CallExpression",
                                          "start": 936,
                                          "end": 944,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 936,
                                            "end": 941,
                                            "decorators": [],
                                            "name": "Alert",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "start": 942,
                                              "end": 943,
                                              "decorators": [],
                                              "name": "s",
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
                                  "alternate": null
                                }
                              ]
                            },
                            "alternate": null
                          }
                        ]
                      },
                      "expression": false
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
            "start": 1000,
            "end": 1200,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 1007,
              "end": 1200,
              "id": {
                "type": "Identifier",
                "start": 1017,
                "end": 1024,
                "decorators": [],
                "name": "ILogger",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 1025,
                "end": 1200,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 1035,
                    "end": 1058,
                    "key": {
                      "type": "Identifier",
                      "start": 1035,
                      "end": 1046,
                      "decorators": [],
                      "name": "information",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1048,
                      "end": 1057,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1050,
                        "end": 1057
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 1067,
                    "end": 1084,
                    "key": {
                      "type": "Identifier",
                      "start": 1067,
                      "end": 1072,
                      "decorators": [],
                      "name": "debug",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1074,
                      "end": 1083,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1076,
                        "end": 1083
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 1093,
                    "end": 1112,
                    "key": {
                      "type": "Identifier",
                      "start": 1093,
                      "end": 1100,
                      "decorators": [],
                      "name": "warning",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1102,
                      "end": 1111,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1104,
                        "end": 1111
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 1121,
                    "end": 1138,
                    "key": {
                      "type": "Identifier",
                      "start": 1121,
                      "end": 1126,
                      "decorators": [],
                      "name": "error",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1128,
                      "end": 1137,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1130,
                        "end": 1137
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 1147,
                    "end": 1164,
                    "key": {
                      "type": "Identifier",
                      "start": 1147,
                      "end": 1152,
                      "decorators": [],
                      "name": "fatal",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1154,
                      "end": 1163,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1156,
                        "end": 1163
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 1173,
                    "end": 1194,
                    "key": {
                      "type": "Identifier",
                      "start": 1173,
                      "end": 1176,
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1177,
                        "end": 1186,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1178,
                          "end": 1186,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1180,
                            "end": 1186
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1187,
                      "end": 1193,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1189,
                        "end": 1193
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
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
            "start": 1206,
            "end": 1562,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1213,
              "end": 1562,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 1219,
                "end": 1229,
                "decorators": [],
                "name": "NullLogger",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 1241,
                  "end": 1248,
                  "expression": {
                    "type": "Identifier",
                    "start": 1241,
                    "end": 1248,
                    "decorators": [],
                    "name": "ILogger",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "body": {
                "type": "ClassBody",
                "start": 1249,
                "end": 1562,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 1259,
                    "end": 1306,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1266,
                      "end": 1277,
                      "decorators": [],
                      "name": "information",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1277,
                      "end": 1306,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1279,
                        "end": 1288,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 1281,
                          "end": 1288
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 1289,
                        "end": 1306,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1291,
                            "end": 1304,
                            "argument": {
                              "type": "Literal",
                              "start": 1298,
                              "end": 1303,
                              "value": false,
                              "raw": "false"
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1315,
                    "end": 1356,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1322,
                      "end": 1327,
                      "decorators": [],
                      "name": "debug",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1327,
                      "end": 1356,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1329,
                        "end": 1338,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 1331,
                          "end": 1338
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 1339,
                        "end": 1356,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1341,
                            "end": 1354,
                            "argument": {
                              "type": "Literal",
                              "start": 1348,
                              "end": 1353,
                              "value": false,
                              "raw": "false"
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1365,
                    "end": 1408,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1372,
                      "end": 1379,
                      "decorators": [],
                      "name": "warning",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1379,
                      "end": 1408,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1381,
                        "end": 1390,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 1383,
                          "end": 1390
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 1391,
                        "end": 1408,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1393,
                            "end": 1406,
                            "argument": {
                              "type": "Literal",
                              "start": 1400,
                              "end": 1405,
                              "value": false,
                              "raw": "false"
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1417,
                    "end": 1458,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1424,
                      "end": 1429,
                      "decorators": [],
                      "name": "error",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1429,
                      "end": 1458,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1431,
                        "end": 1440,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 1433,
                          "end": 1440
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 1441,
                        "end": 1458,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1443,
                            "end": 1456,
                            "argument": {
                              "type": "Literal",
                              "start": 1450,
                              "end": 1455,
                              "value": false,
                              "raw": "false"
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1467,
                    "end": 1508,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1474,
                      "end": 1479,
                      "decorators": [],
                      "name": "fatal",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1479,
                      "end": 1508,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1481,
                        "end": 1490,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 1483,
                          "end": 1490
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 1491,
                        "end": 1508,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1493,
                            "end": 1506,
                            "argument": {
                              "type": "Literal",
                              "start": 1500,
                              "end": 1505,
                              "value": false,
                              "raw": "false"
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1517,
                    "end": 1556,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1524,
                      "end": 1527,
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1527,
                      "end": 1556,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1528,
                          "end": 1537,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1529,
                            "end": 1537,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1531,
                              "end": 1537
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1538,
                        "end": 1544,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1540,
                          "end": 1544
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 1545,
                        "end": 1556,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1568,
            "end": 2482,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1575,
              "end": 2482,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 1581,
                "end": 1594,
                "decorators": [],
                "name": "LoggerAdapter",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 1606,
                  "end": 1613,
                  "expression": {
                    "type": "Identifier",
                    "start": 1606,
                    "end": 1613,
                    "decorators": [],
                    "name": "ILogger",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "body": {
                "type": "ClassBody",
                "start": 1614,
                "end": 2482,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 1624,
                    "end": 1654,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1632,
                      "end": 1644,
                      "decorators": [],
                      "name": "_information",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1644,
                      "end": 1653,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1646,
                        "end": 1653
                      }
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 1663,
                    "end": 1687,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1671,
                      "end": 1677,
                      "decorators": [],
                      "name": "_debug",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1677,
                      "end": 1686,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1679,
                        "end": 1686
                      }
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 1696,
                    "end": 1722,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1704,
                      "end": 1712,
                      "decorators": [],
                      "name": "_warning",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1712,
                      "end": 1721,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1714,
                        "end": 1721
                      }
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 1731,
                    "end": 1755,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1739,
                      "end": 1745,
                      "decorators": [],
                      "name": "_error",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1745,
                      "end": 1754,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1747,
                        "end": 1754
                      }
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 1764,
                    "end": 1788,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1772,
                      "end": 1778,
                      "decorators": [],
                      "name": "_fatal",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1778,
                      "end": 1787,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1780,
                        "end": 1787
                      }
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1798,
                    "end": 2098,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1798,
                      "end": 1809,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1810,
                      "end": 2098,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 1811,
                          "end": 1833,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 1818,
                            "end": 1833,
                            "decorators": [],
                            "name": "logger",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1824,
                              "end": 1833,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1826,
                                "end": 1833,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1826,
                                  "end": 1833,
                                  "decorators": [],
                                  "name": "ILogger",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1835,
                        "end": 2098,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 1850,
                            "end": 1896,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 1850,
                              "end": 1895,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 1850,
                                "end": 1867,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1850,
                                  "end": 1854
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1855,
                                  "end": 1867,
                                  "decorators": [],
                                  "name": "_information",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "right": {
                                "type": "CallExpression",
                                "start": 1870,
                                "end": 1895,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 1870,
                                  "end": 1893,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 1870,
                                    "end": 1881,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 1870,
                                      "end": 1874
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1875,
                                      "end": 1881,
                                      "decorators": [],
                                      "name": "logger",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1882,
                                    "end": 1893,
                                    "decorators": [],
                                    "name": "information",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false
                              }
                            },
                            "directive": null
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 1909,
                            "end": 1943,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 1909,
                              "end": 1942,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 1909,
                                "end": 1920,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1909,
                                  "end": 1913
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1914,
                                  "end": 1920,
                                  "decorators": [],
                                  "name": "_debug",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "right": {
                                "type": "CallExpression",
                                "start": 1923,
                                "end": 1942,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 1923,
                                  "end": 1940,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 1923,
                                    "end": 1934,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 1923,
                                      "end": 1927
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1928,
                                      "end": 1934,
                                      "decorators": [],
                                      "name": "logger",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1935,
                                    "end": 1940,
                                    "decorators": [],
                                    "name": "debug",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false
                              }
                            },
                            "directive": null
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 1956,
                            "end": 1994,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 1956,
                              "end": 1993,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 1956,
                                "end": 1969,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1956,
                                  "end": 1960
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1961,
                                  "end": 1969,
                                  "decorators": [],
                                  "name": "_warning",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "right": {
                                "type": "CallExpression",
                                "start": 1972,
                                "end": 1993,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 1972,
                                  "end": 1991,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 1972,
                                    "end": 1983,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 1972,
                                      "end": 1976
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1977,
                                      "end": 1983,
                                      "decorators": [],
                                      "name": "logger",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1984,
                                    "end": 1991,
                                    "decorators": [],
                                    "name": "warning",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false
                              }
                            },
                            "directive": null
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 2007,
                            "end": 2041,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 2007,
                              "end": 2040,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 2007,
                                "end": 2018,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2007,
                                  "end": 2011
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2012,
                                  "end": 2018,
                                  "decorators": [],
                                  "name": "_error",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "right": {
                                "type": "CallExpression",
                                "start": 2021,
                                "end": 2040,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 2021,
                                  "end": 2038,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 2021,
                                    "end": 2032,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 2021,
                                      "end": 2025
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 2026,
                                      "end": 2032,
                                      "decorators": [],
                                      "name": "logger",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 2033,
                                    "end": 2038,
                                    "decorators": [],
                                    "name": "error",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false
                              }
                            },
                            "directive": null
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 2054,
                            "end": 2088,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 2054,
                              "end": 2087,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 2054,
                                "end": 2065,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2054,
                                  "end": 2058
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2059,
                                  "end": 2065,
                                  "decorators": [],
                                  "name": "_fatal",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "right": {
                                "type": "CallExpression",
                                "start": 2068,
                                "end": 2087,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 2068,
                                  "end": 2085,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 2068,
                                    "end": 2079,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 2068,
                                      "end": 2072
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 2073,
                                      "end": 2079,
                                      "decorators": [],
                                      "name": "logger",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 2080,
                                    "end": 2085,
                                    "decorators": [],
                                    "name": "fatal",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false
                              }
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
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 2109,
                    "end": 2168,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 2116,
                      "end": 2127,
                      "decorators": [],
                      "name": "information",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 2127,
                      "end": 2168,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2129,
                        "end": 2138,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 2131,
                          "end": 2138
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 2139,
                        "end": 2168,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 2141,
                            "end": 2166,
                            "argument": {
                              "type": "MemberExpression",
                              "start": 2148,
                              "end": 2165,
                              "object": {
                                "type": "ThisExpression",
                                "start": 2148,
                                "end": 2152
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 2153,
                                "end": 2165,
                                "decorators": [],
                                "name": "_information",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 2177,
                    "end": 2224,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 2184,
                      "end": 2189,
                      "decorators": [],
                      "name": "debug",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 2189,
                      "end": 2224,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2191,
                        "end": 2200,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 2193,
                          "end": 2200
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 2201,
                        "end": 2224,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 2203,
                            "end": 2222,
                            "argument": {
                              "type": "MemberExpression",
                              "start": 2210,
                              "end": 2221,
                              "object": {
                                "type": "ThisExpression",
                                "start": 2210,
                                "end": 2214
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 2215,
                                "end": 2221,
                                "decorators": [],
                                "name": "_debug",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 2233,
                    "end": 2284,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 2240,
                      "end": 2247,
                      "decorators": [],
                      "name": "warning",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 2247,
                      "end": 2284,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2249,
                        "end": 2258,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 2251,
                          "end": 2258
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 2259,
                        "end": 2284,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 2261,
                            "end": 2282,
                            "argument": {
                              "type": "MemberExpression",
                              "start": 2268,
                              "end": 2281,
                              "object": {
                                "type": "ThisExpression",
                                "start": 2268,
                                "end": 2272
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 2273,
                                "end": 2281,
                                "decorators": [],
                                "name": "_warning",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 2293,
                    "end": 2340,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 2300,
                      "end": 2305,
                      "decorators": [],
                      "name": "error",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 2305,
                      "end": 2340,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2307,
                        "end": 2316,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 2309,
                          "end": 2316
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 2317,
                        "end": 2340,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 2319,
                            "end": 2338,
                            "argument": {
                              "type": "MemberExpression",
                              "start": 2326,
                              "end": 2337,
                              "object": {
                                "type": "ThisExpression",
                                "start": 2326,
                                "end": 2330
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 2331,
                                "end": 2337,
                                "decorators": [],
                                "name": "_error",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 2349,
                    "end": 2396,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 2356,
                      "end": 2361,
                      "decorators": [],
                      "name": "fatal",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 2361,
                      "end": 2396,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2363,
                        "end": 2372,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 2365,
                          "end": 2372
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 2373,
                        "end": 2396,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 2375,
                            "end": 2394,
                            "argument": {
                              "type": "MemberExpression",
                              "start": 2382,
                              "end": 2393,
                              "object": {
                                "type": "ThisExpression",
                                "start": 2382,
                                "end": 2386
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 2387,
                                "end": 2393,
                                "decorators": [],
                                "name": "_fatal",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 2405,
                    "end": 2476,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 2412,
                      "end": 2415,
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 2415,
                      "end": 2476,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2416,
                          "end": 2425,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2417,
                            "end": 2425,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2419,
                              "end": 2425
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2426,
                        "end": 2432,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 2428,
                          "end": 2432
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 2433,
                        "end": 2476,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 2447,
                            "end": 2466,
                            "expression": {
                              "type": "CallExpression",
                              "start": 2447,
                              "end": 2465,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 2447,
                                "end": 2462,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 2447,
                                  "end": 2458,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 2447,
                                    "end": 2451
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 2452,
                                    "end": 2458,
                                    "decorators": [],
                                    "name": "logger",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2459,
                                  "end": 2462,
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
                                  "start": 2463,
                                  "end": 2464,
                                  "decorators": [],
                                  "name": "s",
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
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 2488,
            "end": 2920,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 2495,
              "end": 2920,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 2501,
                "end": 2515,
                "decorators": [],
                "name": "BufferedLogger",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 2527,
                  "end": 2534,
                  "expression": {
                    "type": "Identifier",
                    "start": 2527,
                    "end": 2534,
                    "decorators": [],
                    "name": "ILogger",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "body": {
                "type": "ClassBody",
                "start": 2535,
                "end": 2920,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 2545,
                    "end": 2569,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 2552,
                      "end": 2563,
                      "decorators": [],
                      "name": "logContents",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "ArrayExpression",
                      "start": 2566,
                      "end": 2568,
                      "elements": []
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 2579,
                    "end": 2626,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 2586,
                      "end": 2597,
                      "decorators": [],
                      "name": "information",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 2597,
                      "end": 2626,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2599,
                        "end": 2608,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 2601,
                          "end": 2608
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 2609,
                        "end": 2626,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 2611,
                            "end": 2624,
                            "argument": {
                              "type": "Literal",
                              "start": 2618,
                              "end": 2623,
                              "value": false,
                              "raw": "false"
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 2635,
                    "end": 2676,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 2642,
                      "end": 2647,
                      "decorators": [],
                      "name": "debug",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 2647,
                      "end": 2676,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2649,
                        "end": 2658,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 2651,
                          "end": 2658
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 2659,
                        "end": 2676,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 2661,
                            "end": 2674,
                            "argument": {
                              "type": "Literal",
                              "start": 2668,
                              "end": 2673,
                              "value": false,
                              "raw": "false"
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 2685,
                    "end": 2728,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 2692,
                      "end": 2699,
                      "decorators": [],
                      "name": "warning",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 2699,
                      "end": 2728,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2701,
                        "end": 2710,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 2703,
                          "end": 2710
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 2711,
                        "end": 2728,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 2713,
                            "end": 2726,
                            "argument": {
                              "type": "Literal",
                              "start": 2720,
                              "end": 2725,
                              "value": false,
                              "raw": "false"
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 2737,
                    "end": 2778,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 2744,
                      "end": 2749,
                      "decorators": [],
                      "name": "error",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 2749,
                      "end": 2778,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2751,
                        "end": 2760,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 2753,
                          "end": 2760
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 2761,
                        "end": 2778,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 2763,
                            "end": 2776,
                            "argument": {
                              "type": "Literal",
                              "start": 2770,
                              "end": 2775,
                              "value": false,
                              "raw": "false"
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 2787,
                    "end": 2828,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 2794,
                      "end": 2799,
                      "decorators": [],
                      "name": "fatal",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 2799,
                      "end": 2828,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2801,
                        "end": 2810,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 2803,
                          "end": 2810
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 2811,
                        "end": 2828,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 2813,
                            "end": 2826,
                            "argument": {
                              "type": "Literal",
                              "start": 2820,
                              "end": 2825,
                              "value": false,
                              "raw": "false"
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 2837,
                    "end": 2914,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 2844,
                      "end": 2847,
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 2847,
                      "end": 2914,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2848,
                          "end": 2857,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2849,
                            "end": 2857,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2851,
                              "end": 2857
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2858,
                        "end": 2864,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 2860,
                          "end": 2864
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 2865,
                        "end": 2914,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 2879,
                            "end": 2904,
                            "expression": {
                              "type": "CallExpression",
                              "start": 2879,
                              "end": 2903,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 2879,
                                "end": 2900,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 2879,
                                  "end": 2895,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 2879,
                                    "end": 2883
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 2884,
                                    "end": 2895,
                                    "decorators": [],
                                    "name": "logContents",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2896,
                                  "end": 2900,
                                  "decorators": [],
                                  "name": "push",
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
                                  "start": 2901,
                                  "end": 2902,
                                  "decorators": [],
                                  "name": "s",
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
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 2926,
            "end": 3223,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 2933,
              "end": 3223,
              "id": {
                "type": "Identifier",
                "start": 2942,
                "end": 2954,
                "decorators": [],
                "name": "timeFunction",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2955,
                  "end": 2970,
                  "decorators": [],
                  "name": "logger",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2961,
                    "end": 2970,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2963,
                      "end": 2970,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2963,
                        "end": 2970,
                        "decorators": [],
                        "name": "ILogger",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 2972,
                  "end": 2995,
                  "decorators": [],
                  "name": "funcDescription",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2987,
                    "end": 2995,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2989,
                      "end": 2995
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 2997,
                  "end": 3011,
                  "decorators": [],
                  "name": "func",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3001,
                    "end": 3011,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 3003,
                      "end": 3011,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 3006,
                        "end": 3011,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 3008,
                          "end": 3011
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3012,
                "end": 3017,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 3014,
                  "end": 3017
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 3018,
                "end": 3223,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 3028,
                    "end": 3052,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3032,
                        "end": 3051,
                        "id": {
                          "type": "Identifier",
                          "start": 3032,
                          "end": 3037,
                          "decorators": [],
                          "name": "start",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "UnaryExpression",
                          "start": 3040,
                          "end": 3051,
                          "operator": "+",
                          "argument": {
                            "type": "NewExpression",
                            "start": 3041,
                            "end": 3051,
                            "callee": {
                              "type": "Identifier",
                              "start": 3045,
                              "end": 3049,
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": []
                          },
                          "prefix": true
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 3061,
                    "end": 3081,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3065,
                        "end": 3080,
                        "id": {
                          "type": "Identifier",
                          "start": 3065,
                          "end": 3071,
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 3074,
                          "end": 3080,
                          "callee": {
                            "type": "Identifier",
                            "start": 3074,
                            "end": 3078,
                            "decorators": [],
                            "name": "func",
                            "optional": false,
                            "typeAnnotation": null
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
                    "type": "VariableDeclaration",
                    "start": 3090,
                    "end": 3112,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3094,
                        "end": 3111,
                        "id": {
                          "type": "Identifier",
                          "start": 3094,
                          "end": 3097,
                          "decorators": [],
                          "name": "end",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "UnaryExpression",
                          "start": 3100,
                          "end": 3111,
                          "operator": "+",
                          "argument": {
                            "type": "NewExpression",
                            "start": 3101,
                            "end": 3111,
                            "callee": {
                              "type": "Identifier",
                              "start": 3105,
                              "end": 3109,
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": []
                          },
                          "prefix": true
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3121,
                    "end": 3194,
                    "expression": {
                      "type": "CallExpression",
                      "start": 3121,
                      "end": 3193,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 3121,
                        "end": 3131,
                        "object": {
                          "type": "Identifier",
                          "start": 3121,
                          "end": 3127,
                          "decorators": [],
                          "name": "logger",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3128,
                          "end": 3131,
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
                          "type": "BinaryExpression",
                          "start": 3132,
                          "end": 3192,
                          "left": {
                            "type": "BinaryExpression",
                            "start": 3132,
                            "end": 3182,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 3132,
                              "end": 3166,
                              "left": {
                                "type": "Identifier",
                                "start": 3132,
                                "end": 3147,
                                "decorators": [],
                                "name": "funcDescription",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "start": 3150,
                                "end": 3166,
                                "value": " completed in ",
                                "raw": "\" completed in \""
                              }
                            },
                            "operator": "+",
                            "right": {
                              "type": "BinaryExpression",
                              "start": 3170,
                              "end": 3181,
                              "left": {
                                "type": "Identifier",
                                "start": 3170,
                                "end": 3173,
                                "decorators": [],
                                "name": "end",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "operator": "-",
                              "right": {
                                "type": "Identifier",
                                "start": 3176,
                                "end": 3181,
                                "decorators": [],
                                "name": "start",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "start": 3185,
                            "end": 3192,
                            "value": " msec",
                            "raw": "\" msec\""
                          }
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 3203,
                    "end": 3217,
                    "argument": {
                      "type": "Identifier",
                      "start": 3210,
                      "end": 3216,
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null
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
            "start": 3229,
            "end": 4812,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 3236,
              "end": 4812,
              "id": {
                "type": "Identifier",
                "start": 3245,
                "end": 3260,
                "decorators": [],
                "name": "stringToLiteral",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3261,
                  "end": 3274,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3266,
                    "end": 3274,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3268,
                      "end": 3274
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 3276,
                  "end": 3290,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3282,
                    "end": 3290,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3284,
                      "end": 3290
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3291,
                "end": 3299,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 3293,
                  "end": 3299
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 3300,
                "end": 4812,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 3310,
                    "end": 3326,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3314,
                        "end": 3325,
                        "id": {
                          "type": "Identifier",
                          "start": 3314,
                          "end": 3320,
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 3323,
                          "end": 3325,
                          "value": "",
                          "raw": "\"\""
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 3336,
                    "end": 4385,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3340,
                        "end": 4385,
                        "id": {
                          "type": "Identifier",
                          "start": 3340,
                          "end": 3347,
                          "decorators": [],
                          "name": "addChar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 3350,
                          "end": 4385,
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 3351,
                              "end": 3364,
                              "decorators": [],
                              "name": "index",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3356,
                                "end": 3364,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 3358,
                                  "end": 3364
                                }
                              }
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 3369,
                            "end": 4385,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 3383,
                                "end": 3416,
                                "kind": "var",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 3387,
                                    "end": 3415,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 3387,
                                      "end": 3389,
                                      "decorators": [],
                                      "name": "ch",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "init": {
                                      "type": "CallExpression",
                                      "start": 3392,
                                      "end": 3415,
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 3392,
                                        "end": 3408,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 3392,
                                          "end": 3397,
                                          "decorators": [],
                                          "name": "value",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 3398,
                                          "end": 3408,
                                          "decorators": [],
                                          "name": "charCodeAt",
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
                                          "start": 3409,
                                          "end": 3414,
                                          "decorators": [],
                                          "name": "index",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      ],
                                      "optional": false
                                    },
                                    "definite": false
                                  }
                                ],
                                "declare": false
                              },
                              {
                                "type": "SwitchStatement",
                                "start": 3429,
                                "end": 4375,
                                "discriminant": {
                                  "type": "Identifier",
                                  "start": 3437,
                                  "end": 3439,
                                  "decorators": [],
                                  "name": "ch",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "cases": [
                                  {
                                    "type": "SwitchCase",
                                    "start": 3459,
                                    "end": 3540,
                                    "test": {
                                      "type": "Literal",
                                      "start": 3464,
                                      "end": 3468,
                                      "value": 9,
                                      "raw": "0x09"
                                    },
                                    "consequent": [
                                      {
                                        "type": "ExpressionStatement",
                                        "start": 3497,
                                        "end": 3513,
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "start": 3497,
                                          "end": 3512,
                                          "operator": "+=",
                                          "left": {
                                            "type": "Identifier",
                                            "start": 3497,
                                            "end": 3503,
                                            "decorators": [],
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "start": 3507,
                                            "end": 3512,
                                            "value": "\\t",
                                            "raw": "\"\\\\t\""
                                          }
                                        },
                                        "directive": null
                                      },
                                      {
                                        "type": "BreakStatement",
                                        "start": 3534,
                                        "end": 3540,
                                        "label": null
                                      }
                                    ]
                                  },
                                  {
                                    "type": "SwitchCase",
                                    "start": 3557,
                                    "end": 3644,
                                    "test": {
                                      "type": "Literal",
                                      "start": 3562,
                                      "end": 3566,
                                      "value": 10,
                                      "raw": "0x0a"
                                    },
                                    "consequent": [
                                      {
                                        "type": "ExpressionStatement",
                                        "start": 3601,
                                        "end": 3617,
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "start": 3601,
                                          "end": 3616,
                                          "operator": "+=",
                                          "left": {
                                            "type": "Identifier",
                                            "start": 3601,
                                            "end": 3607,
                                            "decorators": [],
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "start": 3611,
                                            "end": 3616,
                                            "value": "\\n",
                                            "raw": "\"\\\\n\""
                                          }
                                        },
                                        "directive": null
                                      },
                                      {
                                        "type": "BreakStatement",
                                        "start": 3638,
                                        "end": 3644,
                                        "label": null
                                      }
                                    ]
                                  },
                                  {
                                    "type": "SwitchCase",
                                    "start": 3661,
                                    "end": 3751,
                                    "test": {
                                      "type": "Literal",
                                      "start": 3666,
                                      "end": 3670,
                                      "value": 11,
                                      "raw": "0x0b"
                                    },
                                    "consequent": [
                                      {
                                        "type": "ExpressionStatement",
                                        "start": 3708,
                                        "end": 3724,
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "start": 3708,
                                          "end": 3723,
                                          "operator": "+=",
                                          "left": {
                                            "type": "Identifier",
                                            "start": 3708,
                                            "end": 3714,
                                            "decorators": [],
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "start": 3718,
                                            "end": 3723,
                                            "value": "\\v",
                                            "raw": "\"\\\\v\""
                                          }
                                        },
                                        "directive": null
                                      },
                                      {
                                        "type": "BreakStatement",
                                        "start": 3745,
                                        "end": 3751,
                                        "label": null
                                      }
                                    ]
                                  },
                                  {
                                    "type": "SwitchCase",
                                    "start": 3768,
                                    "end": 3855,
                                    "test": {
                                      "type": "Literal",
                                      "start": 3773,
                                      "end": 3777,
                                      "value": 12,
                                      "raw": "0x0c"
                                    },
                                    "consequent": [
                                      {
                                        "type": "ExpressionStatement",
                                        "start": 3812,
                                        "end": 3828,
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "start": 3812,
                                          "end": 3827,
                                          "operator": "+=",
                                          "left": {
                                            "type": "Identifier",
                                            "start": 3812,
                                            "end": 3818,
                                            "decorators": [],
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "start": 3822,
                                            "end": 3827,
                                            "value": "\\f",
                                            "raw": "\"\\\\f\""
                                          }
                                        },
                                        "directive": null
                                      },
                                      {
                                        "type": "BreakStatement",
                                        "start": 3849,
                                        "end": 3855,
                                        "label": null
                                      }
                                    ]
                                  },
                                  {
                                    "type": "SwitchCase",
                                    "start": 3872,
                                    "end": 3965,
                                    "test": {
                                      "type": "Literal",
                                      "start": 3877,
                                      "end": 3881,
                                      "value": 13,
                                      "raw": "0x0d"
                                    },
                                    "consequent": [
                                      {
                                        "type": "ExpressionStatement",
                                        "start": 3922,
                                        "end": 3938,
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "start": 3922,
                                          "end": 3937,
                                          "operator": "+=",
                                          "left": {
                                            "type": "Identifier",
                                            "start": 3922,
                                            "end": 3928,
                                            "decorators": [],
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "start": 3932,
                                            "end": 3937,
                                            "value": "\\r",
                                            "raw": "\"\\\\r\""
                                          }
                                        },
                                        "directive": null
                                      },
                                      {
                                        "type": "BreakStatement",
                                        "start": 3959,
                                        "end": 3965,
                                        "label": null
                                      }
                                    ]
                                  },
                                  {
                                    "type": "SwitchCase",
                                    "start": 3982,
                                    "end": 4074,
                                    "test": {
                                      "type": "Literal",
                                      "start": 3987,
                                      "end": 3991,
                                      "value": 34,
                                      "raw": "0x22"
                                    },
                                    "consequent": [
                                      {
                                        "type": "ExpressionStatement",
                                        "start": 4030,
                                        "end": 4047,
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "start": 4030,
                                          "end": 4046,
                                          "operator": "+=",
                                          "left": {
                                            "type": "Identifier",
                                            "start": 4030,
                                            "end": 4036,
                                            "decorators": [],
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "start": 4040,
                                            "end": 4046,
                                            "value": "\\\"",
                                            "raw": "\"\\\\\\\"\""
                                          }
                                        },
                                        "directive": null
                                      },
                                      {
                                        "type": "BreakStatement",
                                        "start": 4068,
                                        "end": 4074,
                                        "label": null
                                      }
                                    ]
                                  },
                                  {
                                    "type": "SwitchCase",
                                    "start": 4091,
                                    "end": 4182,
                                    "test": {
                                      "type": "Literal",
                                      "start": 4096,
                                      "end": 4100,
                                      "value": 39,
                                      "raw": "0x27"
                                    },
                                    "consequent": [
                                      {
                                        "type": "ExpressionStatement",
                                        "start": 4138,
                                        "end": 4155,
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "start": 4138,
                                          "end": 4154,
                                          "operator": "+=",
                                          "left": {
                                            "type": "Identifier",
                                            "start": 4138,
                                            "end": 4144,
                                            "decorators": [],
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "start": 4148,
                                            "end": 4154,
                                            "value": "\\'",
                                            "raw": "\"\\\\\\'\""
                                          }
                                        },
                                        "directive": null
                                      },
                                      {
                                        "type": "BreakStatement",
                                        "start": 4176,
                                        "end": 4182,
                                        "label": null
                                      }
                                    ]
                                  },
                                  {
                                    "type": "SwitchCase",
                                    "start": 4199,
                                    "end": 4285,
                                    "test": {
                                      "type": "Literal",
                                      "start": 4204,
                                      "end": 4208,
                                      "value": 92,
                                      "raw": "0x5c"
                                    },
                                    "consequent": [
                                      {
                                        "type": "ExpressionStatement",
                                        "start": 4243,
                                        "end": 4258,
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "start": 4243,
                                          "end": 4257,
                                          "operator": "+=",
                                          "left": {
                                            "type": "Identifier",
                                            "start": 4243,
                                            "end": 4249,
                                            "decorators": [],
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "start": 4253,
                                            "end": 4257,
                                            "value": "\\",
                                            "raw": "\"\\\\\""
                                          }
                                        },
                                        "directive": null
                                      },
                                      {
                                        "type": "BreakStatement",
                                        "start": 4279,
                                        "end": 4285,
                                        "label": null
                                      }
                                    ]
                                  },
                                  {
                                    "type": "SwitchCase",
                                    "start": 4302,
                                    "end": 4361,
                                    "test": null,
                                    "consequent": [
                                      {
                                        "type": "ExpressionStatement",
                                        "start": 4331,
                                        "end": 4361,
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "start": 4331,
                                          "end": 4360,
                                          "operator": "+=",
                                          "left": {
                                            "type": "Identifier",
                                            "start": 4331,
                                            "end": 4337,
                                            "decorators": [],
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "right": {
                                            "type": "CallExpression",
                                            "start": 4341,
                                            "end": 4360,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 4341,
                                              "end": 4353,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 4341,
                                                "end": 4346,
                                                "decorators": [],
                                                "name": "value",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 4347,
                                                "end": 4353,
                                                "decorators": [],
                                                "name": "charAt",
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
                                                "start": 4354,
                                                "end": 4359,
                                                "decorators": [],
                                                "name": "index",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            ],
                                            "optional": false
                                          }
                                        },
                                        "directive": null
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          "id": null,
                          "generator": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 4395,
                    "end": 4433,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 4399,
                        "end": 4432,
                        "id": {
                          "type": "Identifier",
                          "start": 4399,
                          "end": 4406,
                          "decorators": [],
                          "name": "tooLong",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "start": 4410,
                          "end": 4431,
                          "left": {
                            "type": "MemberExpression",
                            "start": 4410,
                            "end": 4422,
                            "object": {
                              "type": "Identifier",
                              "start": 4410,
                              "end": 4415,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 4416,
                              "end": 4422,
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "operator": ">",
                          "right": {
                            "type": "Identifier",
                            "start": 4425,
                            "end": 4431,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "IfStatement",
                    "start": 4442,
                    "end": 4783,
                    "test": {
                      "type": "Identifier",
                      "start": 4446,
                      "end": 4453,
                      "decorators": [],
                      "name": "tooLong",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 4455,
                      "end": 4666,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 4469,
                          "end": 4491,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 4473,
                              "end": 4490,
                              "id": {
                                "type": "Identifier",
                                "start": 4473,
                                "end": 4476,
                                "decorators": [],
                                "name": "mid",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "BinaryExpression",
                                "start": 4479,
                                "end": 4490,
                                "left": {
                                  "type": "Identifier",
                                  "start": 4479,
                                  "end": 4485,
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "operator": ">>",
                                "right": {
                                  "type": "Literal",
                                  "start": 4489,
                                  "end": 4490,
                                  "value": 1,
                                  "raw": "1"
                                }
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "ForStatement",
                          "start": 4504,
                          "end": 4545,
                          "init": {
                            "type": "VariableDeclaration",
                            "start": 4509,
                            "end": 4518,
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 4513,
                                "end": 4518,
                                "id": {
                                  "type": "Identifier",
                                  "start": 4513,
                                  "end": 4514,
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "Literal",
                                  "start": 4517,
                                  "end": 4518,
                                  "value": 0,
                                  "raw": "0"
                                },
                                "definite": false
                              }
                            ],
                            "declare": false
                          },
                          "test": {
                            "type": "BinaryExpression",
                            "start": 4520,
                            "end": 4527,
                            "left": {
                              "type": "Identifier",
                              "start": 4520,
                              "end": 4521,
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "<",
                            "right": {
                              "type": "Identifier",
                              "start": 4524,
                              "end": 4527,
                              "decorators": [],
                              "name": "mid",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "update": {
                            "type": "UpdateExpression",
                            "start": 4529,
                            "end": 4532,
                            "operator": "++",
                            "prefix": false,
                            "argument": {
                              "type": "Identifier",
                              "start": 4529,
                              "end": 4530,
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "body": {
                            "type": "ExpressionStatement",
                            "start": 4534,
                            "end": 4545,
                            "expression": {
                              "type": "CallExpression",
                              "start": 4534,
                              "end": 4544,
                              "callee": {
                                "type": "Identifier",
                                "start": 4534,
                                "end": 4541,
                                "decorators": [],
                                "name": "addChar",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 4542,
                                  "end": 4543,
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "optional": false
                            },
                            "directive": null
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 4558,
                          "end": 4576,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 4558,
                            "end": 4575,
                            "operator": "+=",
                            "left": {
                              "type": "Identifier",
                              "start": 4558,
                              "end": 4564,
                              "decorators": [],
                              "name": "result",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 4568,
                              "end": 4575,
                              "value": "(...)",
                              "raw": "\"(...)\""
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ForStatement",
                          "start": 4589,
                          "end": 4656,
                          "init": {
                            "type": "VariableDeclaration",
                            "start": 4594,
                            "end": 4620,
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 4598,
                                "end": 4620,
                                "id": {
                                  "type": "Identifier",
                                  "start": 4598,
                                  "end": 4599,
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "BinaryExpression",
                                  "start": 4602,
                                  "end": 4620,
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 4602,
                                    "end": 4614,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 4602,
                                      "end": 4607,
                                      "decorators": [],
                                      "name": "value",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 4608,
                                      "end": 4614,
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "operator": "-",
                                  "right": {
                                    "type": "Identifier",
                                    "start": 4617,
                                    "end": 4620,
                                    "decorators": [],
                                    "name": "mid",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "definite": false
                              }
                            ],
                            "declare": false
                          },
                          "test": {
                            "type": "BinaryExpression",
                            "start": 4622,
                            "end": 4638,
                            "left": {
                              "type": "Identifier",
                              "start": 4622,
                              "end": 4623,
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "<",
                            "right": {
                              "type": "MemberExpression",
                              "start": 4626,
                              "end": 4638,
                              "object": {
                                "type": "Identifier",
                                "start": 4626,
                                "end": 4631,
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 4632,
                                "end": 4638,
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          },
                          "update": {
                            "type": "UpdateExpression",
                            "start": 4640,
                            "end": 4643,
                            "operator": "++",
                            "prefix": false,
                            "argument": {
                              "type": "Identifier",
                              "start": 4640,
                              "end": 4641,
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "body": {
                            "type": "ExpressionStatement",
                            "start": 4645,
                            "end": 4656,
                            "expression": {
                              "type": "CallExpression",
                              "start": 4645,
                              "end": 4655,
                              "callee": {
                                "type": "Identifier",
                                "start": 4645,
                                "end": 4652,
                                "decorators": [],
                                "name": "addChar",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 4653,
                                  "end": 4654,
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "optional": false
                            },
                            "directive": null
                          }
                        }
                      ]
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 4680,
                      "end": 4783,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 4694,
                          "end": 4716,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 4694,
                            "end": 4715,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 4694,
                              "end": 4700,
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "MemberExpression",
                              "start": 4703,
                              "end": 4715,
                              "object": {
                                "type": "Identifier",
                                "start": 4703,
                                "end": 4708,
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 4709,
                                "end": 4715,
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ForStatement",
                          "start": 4729,
                          "end": 4773,
                          "init": {
                            "type": "VariableDeclaration",
                            "start": 4734,
                            "end": 4743,
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 4738,
                                "end": 4743,
                                "id": {
                                  "type": "Identifier",
                                  "start": 4738,
                                  "end": 4739,
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "Literal",
                                  "start": 4742,
                                  "end": 4743,
                                  "value": 0,
                                  "raw": "0"
                                },
                                "definite": false
                              }
                            ],
                            "declare": false
                          },
                          "test": {
                            "type": "BinaryExpression",
                            "start": 4745,
                            "end": 4755,
                            "left": {
                              "type": "Identifier",
                              "start": 4745,
                              "end": 4746,
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "<",
                            "right": {
                              "type": "Identifier",
                              "start": 4749,
                              "end": 4755,
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "update": {
                            "type": "UpdateExpression",
                            "start": 4757,
                            "end": 4760,
                            "operator": "++",
                            "prefix": false,
                            "argument": {
                              "type": "Identifier",
                              "start": 4757,
                              "end": 4758,
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "body": {
                            "type": "ExpressionStatement",
                            "start": 4762,
                            "end": 4773,
                            "expression": {
                              "type": "CallExpression",
                              "start": 4762,
                              "end": 4772,
                              "callee": {
                                "type": "Identifier",
                                "start": 4762,
                                "end": 4769,
                                "decorators": [],
                                "name": "addChar",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 4770,
                                  "end": 4771,
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "optional": false
                            },
                            "directive": null
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 4792,
                    "end": 4806,
                    "argument": {
                      "type": "Identifier",
                      "start": 4799,
                      "end": 4805,
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null
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
