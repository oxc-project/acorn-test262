__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 299,
  "end": 2602,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 299,
      "end": 324,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 311,
          "end": 323,
          "id": {
            "type": "Identifier",
            "start": 311,
            "end": 323,
            "decorators": [],
            "name": "process",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 318,
              "end": 323,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 320,
                "end": 323
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 325,
      "end": 350,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 337,
          "end": 349,
          "id": {
            "type": "Identifier",
            "start": 337,
            "end": 349,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 344,
              "end": 349,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 346,
                "end": 349
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 351,
      "end": 381,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 363,
          "end": 380,
          "id": {
            "type": "Identifier",
            "start": 363,
            "end": 380,
            "decorators": [],
            "name": "readFileSync",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 375,
              "end": 380,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 377,
                "end": 380
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ImportDeclaration",
      "start": 383,
      "end": 416,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 390,
          "end": 397,
          "local": {
            "type": "Identifier",
            "start": 395,
            "end": 397,
            "decorators": [],
            "name": "ts",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 403,
        "end": 415,
        "value": "typescript",
        "raw": "\"typescript\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 418,
      "end": 2315,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 425,
        "end": 2315,
        "id": {
          "type": "Identifier",
          "start": 434,
          "end": 440,
          "decorators": [],
          "name": "delint",
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
            "start": 441,
            "end": 466,
            "decorators": [],
            "name": "sourceFile",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 451,
              "end": 466,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 453,
                "end": 466,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 453,
                  "end": 466,
                  "left": {
                    "type": "Identifier",
                    "start": 453,
                    "end": 455,
                    "decorators": [],
                    "name": "ts",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 456,
                    "end": 466,
                    "decorators": [],
                    "name": "SourceFile",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 468,
          "end": 2315,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 474,
              "end": 497,
              "expression": {
                "type": "CallExpression",
                "start": 474,
                "end": 496,
                "callee": {
                  "type": "Identifier",
                  "start": 474,
                  "end": 484,
                  "decorators": [],
                  "name": "delintNode",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 485,
                    "end": 495,
                    "decorators": [],
                    "name": "sourceFile",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "directive": null
            },
            {
              "type": "FunctionDeclaration",
              "start": 503,
              "end": 2069,
              "id": {
                "type": "Identifier",
                "start": 512,
                "end": 522,
                "decorators": [],
                "name": "delintNode",
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
                  "start": 523,
                  "end": 536,
                  "decorators": [],
                  "name": "node",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 527,
                    "end": 536,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 529,
                      "end": 536,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 529,
                        "end": 536,
                        "left": {
                          "type": "Identifier",
                          "start": 529,
                          "end": 531,
                          "decorators": [],
                          "name": "ts",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 532,
                          "end": 536,
                          "decorators": [],
                          "name": "Node",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 538,
                "end": 2069,
                "body": [
                  {
                    "type": "SwitchStatement",
                    "start": 548,
                    "end": 2019,
                    "discriminant": {
                      "type": "MemberExpression",
                      "start": 556,
                      "end": 565,
                      "object": {
                        "type": "Identifier",
                        "start": 556,
                        "end": 560,
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 561,
                        "end": 565,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "start": 581,
                        "end": 613,
                        "test": {
                          "type": "MemberExpression",
                          "start": 586,
                          "end": 612,
                          "object": {
                            "type": "MemberExpression",
                            "start": 586,
                            "end": 599,
                            "object": {
                              "type": "Identifier",
                              "start": 586,
                              "end": 588,
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 589,
                              "end": 599,
                              "decorators": [],
                              "name": "SyntaxKind",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 600,
                            "end": 612,
                            "decorators": [],
                            "name": "ForStatement",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "consequent": []
                      },
                      {
                        "type": "SwitchCase",
                        "start": 626,
                        "end": 660,
                        "test": {
                          "type": "MemberExpression",
                          "start": 631,
                          "end": 659,
                          "object": {
                            "type": "MemberExpression",
                            "start": 631,
                            "end": 644,
                            "object": {
                              "type": "Identifier",
                              "start": 631,
                              "end": 633,
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 634,
                              "end": 644,
                              "decorators": [],
                              "name": "SyntaxKind",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 645,
                            "end": 659,
                            "decorators": [],
                            "name": "ForInStatement",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "consequent": []
                      },
                      {
                        "type": "SwitchCase",
                        "start": 673,
                        "end": 707,
                        "test": {
                          "type": "MemberExpression",
                          "start": 678,
                          "end": 706,
                          "object": {
                            "type": "MemberExpression",
                            "start": 678,
                            "end": 691,
                            "object": {
                              "type": "Identifier",
                              "start": 678,
                              "end": 680,
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 681,
                              "end": 691,
                              "decorators": [],
                              "name": "SyntaxKind",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 692,
                            "end": 706,
                            "decorators": [],
                            "name": "WhileStatement",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "consequent": []
                      },
                      {
                        "type": "SwitchCase",
                        "start": 720,
                        "end": 987,
                        "test": {
                          "type": "MemberExpression",
                          "start": 725,
                          "end": 750,
                          "object": {
                            "type": "MemberExpression",
                            "start": 725,
                            "end": 738,
                            "object": {
                              "type": "Identifier",
                              "start": 725,
                              "end": 727,
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 728,
                              "end": 738,
                              "decorators": [],
                              "name": "SyntaxKind",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 739,
                            "end": 750,
                            "decorators": [],
                            "name": "DoStatement",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "consequent": [
                          {
                            "type": "IfStatement",
                            "start": 768,
                            "end": 964,
                            "test": {
                              "type": "BinaryExpression",
                              "start": 772,
                              "end": 840,
                              "left": {
                                "type": "MemberExpression",
                                "start": 772,
                                "end": 816,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 772,
                                  "end": 811,
                                  "object": {
                                    "type": "TSTypeAssertion",
                                    "start": 773,
                                    "end": 800,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 774,
                                      "end": 795,
                                      "typeName": {
                                        "type": "TSQualifiedName",
                                        "start": 774,
                                        "end": 795,
                                        "left": {
                                          "type": "Identifier",
                                          "start": 774,
                                          "end": 776,
                                          "decorators": [],
                                          "name": "ts",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "start": 777,
                                          "end": 795,
                                          "decorators": [],
                                          "name": "IterationStatement",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      "typeArguments": null
                                    },
                                    "expression": {
                                      "type": "Identifier",
                                      "start": 796,
                                      "end": 800,
                                      "decorators": [],
                                      "name": "node",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 802,
                                    "end": 811,
                                    "decorators": [],
                                    "name": "statement",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 812,
                                  "end": 816,
                                  "decorators": [],
                                  "name": "kind",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "operator": "!==",
                              "right": {
                                "type": "MemberExpression",
                                "start": 821,
                                "end": 840,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 821,
                                  "end": 834,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 821,
                                    "end": 823,
                                    "decorators": [],
                                    "name": "ts",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 824,
                                    "end": 834,
                                    "decorators": [],
                                    "name": "SyntaxKind",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 835,
                                  "end": 840,
                                  "decorators": [],
                                  "name": "Block",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 842,
                              "end": 964,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 864,
                                  "end": 946,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 864,
                                    "end": 945,
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 864,
                                      "end": 870,
                                      "decorators": [],
                                      "name": "report",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 871,
                                        "end": 875,
                                        "decorators": [],
                                        "name": "node",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 877,
                                        "end": 944,
                                        "value": "A looping statement's contents should be wrapped in a block body.",
                                        "raw": "\"A looping statement's contents should be wrapped in a block body.\""
                                      }
                                    ],
                                    "optional": false
                                  },
                                  "directive": null
                                }
                              ]
                            },
                            "alternate": null
                          },
                          {
                            "type": "BreakStatement",
                            "start": 981,
                            "end": 987,
                            "label": null
                          }
                        ]
                      },
                      {
                        "type": "SwitchCase",
                        "start": 1001,
                        "end": 1680,
                        "test": {
                          "type": "MemberExpression",
                          "start": 1006,
                          "end": 1031,
                          "object": {
                            "type": "MemberExpression",
                            "start": 1006,
                            "end": 1019,
                            "object": {
                              "type": "Identifier",
                              "start": 1006,
                              "end": 1008,
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1009,
                              "end": 1019,
                              "decorators": [],
                              "name": "SyntaxKind",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1020,
                            "end": 1031,
                            "decorators": [],
                            "name": "IfStatement",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "consequent": [
                          {
                            "type": "VariableDeclaration",
                            "start": 1049,
                            "end": 1090,
                            "kind": "let",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 1053,
                                "end": 1089,
                                "id": {
                                  "type": "Identifier",
                                  "start": 1053,
                                  "end": 1064,
                                  "decorators": [],
                                  "name": "ifStatement",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "TSTypeAssertion",
                                  "start": 1068,
                                  "end": 1088,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1069,
                                    "end": 1083,
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "start": 1069,
                                      "end": 1083,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 1069,
                                        "end": 1071,
                                        "decorators": [],
                                        "name": "ts",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 1072,
                                        "end": 1083,
                                        "decorators": [],
                                        "name": "IfStatement",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "typeArguments": null
                                  },
                                  "expression": {
                                    "type": "Identifier",
                                    "start": 1084,
                                    "end": 1088,
                                    "decorators": [],
                                    "name": "node",
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
                            "start": 1107,
                            "end": 1306,
                            "test": {
                              "type": "BinaryExpression",
                              "start": 1111,
                              "end": 1165,
                              "left": {
                                "type": "MemberExpression",
                                "start": 1111,
                                "end": 1141,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 1111,
                                  "end": 1136,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 1111,
                                    "end": 1122,
                                    "decorators": [],
                                    "name": "ifStatement",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1123,
                                    "end": 1136,
                                    "decorators": [],
                                    "name": "thenStatement",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1137,
                                  "end": 1141,
                                  "decorators": [],
                                  "name": "kind",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "operator": "!==",
                              "right": {
                                "type": "MemberExpression",
                                "start": 1146,
                                "end": 1165,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 1146,
                                  "end": 1159,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 1146,
                                    "end": 1148,
                                    "decorators": [],
                                    "name": "ts",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1149,
                                    "end": 1159,
                                    "decorators": [],
                                    "name": "SyntaxKind",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1160,
                                  "end": 1165,
                                  "decorators": [],
                                  "name": "Block",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 1167,
                              "end": 1306,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 1189,
                                  "end": 1288,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 1189,
                                    "end": 1287,
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 1189,
                                      "end": 1195,
                                      "decorators": [],
                                      "name": "report",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "start": 1196,
                                        "end": 1221,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 1196,
                                          "end": 1207,
                                          "decorators": [],
                                          "name": "ifStatement",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 1208,
                                          "end": 1221,
                                          "decorators": [],
                                          "name": "thenStatement",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 1223,
                                        "end": 1286,
                                        "value": "An if statement's contents should be wrapped in a block body.",
                                        "raw": "\"An if statement's contents should be wrapped in a block body.\""
                                      }
                                    ],
                                    "optional": false
                                  },
                                  "directive": null
                                }
                              ]
                            },
                            "alternate": null
                          },
                          {
                            "type": "IfStatement",
                            "start": 1323,
                            "end": 1657,
                            "test": {
                              "type": "LogicalExpression",
                              "start": 1327,
                              "end": 1514,
                              "left": {
                                "type": "LogicalExpression",
                                "start": 1327,
                                "end": 1430,
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 1327,
                                  "end": 1352,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 1327,
                                    "end": 1338,
                                    "decorators": [],
                                    "name": "ifStatement",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1339,
                                    "end": 1352,
                                    "decorators": [],
                                    "name": "elseStatement",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "operator": "&&",
                                "right": {
                                  "type": "BinaryExpression",
                                  "start": 1376,
                                  "end": 1430,
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 1376,
                                    "end": 1406,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 1376,
                                      "end": 1401,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 1376,
                                        "end": 1387,
                                        "decorators": [],
                                        "name": "ifStatement",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 1388,
                                        "end": 1401,
                                        "decorators": [],
                                        "name": "elseStatement",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1402,
                                      "end": 1406,
                                      "decorators": [],
                                      "name": "kind",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "operator": "!==",
                                  "right": {
                                    "type": "MemberExpression",
                                    "start": 1411,
                                    "end": 1430,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 1411,
                                      "end": 1424,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 1411,
                                        "end": 1413,
                                        "decorators": [],
                                        "name": "ts",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 1414,
                                        "end": 1424,
                                        "decorators": [],
                                        "name": "SyntaxKind",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1425,
                                      "end": 1430,
                                      "decorators": [],
                                      "name": "Block",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  }
                                }
                              },
                              "operator": "&&",
                              "right": {
                                "type": "BinaryExpression",
                                "start": 1454,
                                "end": 1514,
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 1454,
                                  "end": 1484,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 1454,
                                    "end": 1479,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 1454,
                                      "end": 1465,
                                      "decorators": [],
                                      "name": "ifStatement",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1466,
                                      "end": 1479,
                                      "decorators": [],
                                      "name": "elseStatement",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1480,
                                    "end": 1484,
                                    "decorators": [],
                                    "name": "kind",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "operator": "!==",
                                "right": {
                                  "type": "MemberExpression",
                                  "start": 1489,
                                  "end": 1514,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 1489,
                                    "end": 1502,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 1489,
                                      "end": 1491,
                                      "decorators": [],
                                      "name": "ts",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1492,
                                      "end": 1502,
                                      "decorators": [],
                                      "name": "SyntaxKind",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1503,
                                    "end": 1514,
                                    "decorators": [],
                                    "name": "IfStatement",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                }
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 1516,
                              "end": 1657,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 1538,
                                  "end": 1639,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 1538,
                                    "end": 1638,
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 1538,
                                      "end": 1544,
                                      "decorators": [],
                                      "name": "report",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "start": 1545,
                                        "end": 1570,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 1545,
                                          "end": 1556,
                                          "decorators": [],
                                          "name": "ifStatement",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 1557,
                                          "end": 1570,
                                          "decorators": [],
                                          "name": "elseStatement",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 1572,
                                        "end": 1637,
                                        "value": "An else statement's contents should be wrapped in a block body.",
                                        "raw": "\"An else statement's contents should be wrapped in a block body.\""
                                      }
                                    ],
                                    "optional": false
                                  },
                                  "directive": null
                                }
                              ]
                            },
                            "alternate": null
                          },
                          {
                            "type": "BreakStatement",
                            "start": 1674,
                            "end": 1680,
                            "label": null
                          }
                        ]
                      },
                      {
                        "type": "SwitchCase",
                        "start": 1694,
                        "end": 2009,
                        "test": {
                          "type": "MemberExpression",
                          "start": 1699,
                          "end": 1729,
                          "object": {
                            "type": "MemberExpression",
                            "start": 1699,
                            "end": 1712,
                            "object": {
                              "type": "Identifier",
                              "start": 1699,
                              "end": 1701,
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1702,
                              "end": 1712,
                              "decorators": [],
                              "name": "SyntaxKind",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1713,
                            "end": 1729,
                            "decorators": [],
                            "name": "BinaryExpression",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "consequent": [
                          {
                            "type": "VariableDeclaration",
                            "start": 1747,
                            "end": 1803,
                            "kind": "let",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 1751,
                                "end": 1802,
                                "id": {
                                  "type": "Identifier",
                                  "start": 1751,
                                  "end": 1753,
                                  "decorators": [],
                                  "name": "op",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "start": 1756,
                                  "end": 1802,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 1756,
                                    "end": 1797,
                                    "object": {
                                      "type": "TSTypeAssertion",
                                      "start": 1757,
                                      "end": 1782,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 1758,
                                        "end": 1777,
                                        "typeName": {
                                          "type": "TSQualifiedName",
                                          "start": 1758,
                                          "end": 1777,
                                          "left": {
                                            "type": "Identifier",
                                            "start": 1758,
                                            "end": 1760,
                                            "decorators": [],
                                            "name": "ts",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "start": 1761,
                                            "end": 1777,
                                            "decorators": [],
                                            "name": "BinaryExpression",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        },
                                        "typeArguments": null
                                      },
                                      "expression": {
                                        "type": "Identifier",
                                        "start": 1778,
                                        "end": 1782,
                                        "decorators": [],
                                        "name": "node",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1784,
                                      "end": 1797,
                                      "decorators": [],
                                      "name": "operatorToken",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1798,
                                    "end": 1802,
                                    "decorators": [],
                                    "name": "kind",
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
                            "type": "IfStatement",
                            "start": 1820,
                            "end": 1986,
                            "test": {
                              "type": "LogicalExpression",
                              "start": 1824,
                              "end": 1908,
                              "left": {
                                "type": "BinaryExpression",
                                "start": 1824,
                                "end": 1862,
                                "left": {
                                  "type": "Identifier",
                                  "start": 1824,
                                  "end": 1826,
                                  "decorators": [],
                                  "name": "op",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "operator": "===",
                                "right": {
                                  "type": "MemberExpression",
                                  "start": 1831,
                                  "end": 1862,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 1831,
                                    "end": 1844,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 1831,
                                      "end": 1833,
                                      "decorators": [],
                                      "name": "ts",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1834,
                                      "end": 1844,
                                      "decorators": [],
                                      "name": "SyntaxKind",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1845,
                                    "end": 1862,
                                    "decorators": [],
                                    "name": "EqualsEqualsToken",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                }
                              },
                              "operator": "||",
                              "right": {
                                "type": "BinaryExpression",
                                "start": 1866,
                                "end": 1908,
                                "left": {
                                  "type": "Identifier",
                                  "start": 1866,
                                  "end": 1868,
                                  "decorators": [],
                                  "name": "op",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "operator": "==",
                                "right": {
                                  "type": "MemberExpression",
                                  "start": 1872,
                                  "end": 1908,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 1872,
                                    "end": 1885,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 1872,
                                      "end": 1874,
                                      "decorators": [],
                                      "name": "ts",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1875,
                                      "end": 1885,
                                      "decorators": [],
                                      "name": "SyntaxKind",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1886,
                                    "end": 1908,
                                    "decorators": [],
                                    "name": "ExclamationEqualsToken",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                }
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 1910,
                              "end": 1986,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 1932,
                                  "end": 1968,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 1932,
                                    "end": 1968,
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 1932,
                                      "end": 1938,
                                      "decorators": [],
                                      "name": "report",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 1939,
                                        "end": 1943,
                                        "decorators": [],
                                        "name": "node",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 1945,
                                        "end": 1967,
                                        "value": "Use '===' and '!=='.",
                                        "raw": "\"Use '===' and '!=='.\""
                                      }
                                    ],
                                    "optional": false
                                  },
                                  "directive": null
                                }
                              ]
                            },
                            "alternate": null
                          },
                          {
                            "type": "BreakStatement",
                            "start": 2003,
                            "end": 2009,
                            "label": null
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2029,
                    "end": 2063,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2029,
                      "end": 2062,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2029,
                        "end": 2044,
                        "object": {
                          "type": "Identifier",
                          "start": 2029,
                          "end": 2031,
                          "decorators": [],
                          "name": "ts",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2032,
                          "end": 2044,
                          "decorators": [],
                          "name": "forEachChild",
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
                          "start": 2045,
                          "end": 2049,
                          "decorators": [],
                          "name": "node",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 2051,
                          "end": 2061,
                          "decorators": [],
                          "name": "delintNode",
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
            {
              "type": "FunctionDeclaration",
              "start": 2075,
              "end": 2313,
              "id": {
                "type": "Identifier",
                "start": 2084,
                "end": 2090,
                "decorators": [],
                "name": "report",
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
                  "start": 2091,
                  "end": 2104,
                  "decorators": [],
                  "name": "node",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2095,
                    "end": 2104,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2097,
                      "end": 2104,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 2097,
                        "end": 2104,
                        "left": {
                          "type": "Identifier",
                          "start": 2097,
                          "end": 2099,
                          "decorators": [],
                          "name": "ts",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 2100,
                          "end": 2104,
                          "decorators": [],
                          "name": "Node",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 2106,
                  "end": 2121,
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2113,
                    "end": 2121,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2115,
                      "end": 2121
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2123,
                "end": 2313,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 2133,
                    "end": 2217,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2137,
                        "end": 2216,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 2137,
                          "end": 2156,
                          "decorators": [],
                          "properties": [
                            {
                              "type": "Property",
                              "start": 2139,
                              "end": 2143,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 2139,
                                "end": 2143,
                                "decorators": [],
                                "name": "line",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 2139,
                                "end": 2143,
                                "decorators": [],
                                "name": "line",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 2145,
                              "end": 2154,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 2145,
                                "end": 2154,
                                "decorators": [],
                                "name": "character",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 2145,
                                "end": 2154,
                                "decorators": [],
                                "name": "character",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 2159,
                          "end": 2216,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 2159,
                            "end": 2199,
                            "object": {
                              "type": "Identifier",
                              "start": 2159,
                              "end": 2169,
                              "decorators": [],
                              "name": "sourceFile",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 2170,
                              "end": 2199,
                              "decorators": [],
                              "name": "getLineAndCharacterOfPosition",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "start": 2200,
                              "end": 2215,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 2200,
                                "end": 2213,
                                "object": {
                                  "type": "Identifier",
                                  "start": 2200,
                                  "end": 2204,
                                  "decorators": [],
                                  "name": "node",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2205,
                                  "end": 2213,
                                  "decorators": [],
                                  "name": "getStart",
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
                          ],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2226,
                    "end": 2307,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2226,
                      "end": 2306,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2226,
                        "end": 2237,
                        "object": {
                          "type": "Identifier",
                          "start": 2226,
                          "end": 2233,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2234,
                          "end": 2237,
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
                          "type": "TemplateLiteral",
                          "start": 2238,
                          "end": 2305,
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "start": 2238,
                              "end": 2241,
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": false
                            },
                            {
                              "type": "TemplateElement",
                              "start": 2260,
                              "end": 2265,
                              "value": {
                                "raw": " (",
                                "cooked": " ("
                              },
                              "tail": false
                            },
                            {
                              "type": "TemplateElement",
                              "start": 2273,
                              "end": 2277,
                              "value": {
                                "raw": ",",
                                "cooked": ","
                              },
                              "tail": false
                            },
                            {
                              "type": "TemplateElement",
                              "start": 2290,
                              "end": 2296,
                              "value": {
                                "raw": "): ",
                                "cooked": "): "
                              },
                              "tail": false
                            },
                            {
                              "type": "TemplateElement",
                              "start": 2303,
                              "end": 2305,
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": true
                            }
                          ],
                          "expressions": [
                            {
                              "type": "MemberExpression",
                              "start": 2241,
                              "end": 2260,
                              "object": {
                                "type": "Identifier",
                                "start": 2241,
                                "end": 2251,
                                "decorators": [],
                                "name": "sourceFile",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 2252,
                                "end": 2260,
                                "decorators": [],
                                "name": "fileName",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            {
                              "type": "BinaryExpression",
                              "start": 2265,
                              "end": 2273,
                              "left": {
                                "type": "Identifier",
                                "start": 2265,
                                "end": 2269,
                                "decorators": [],
                                "name": "line",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "start": 2272,
                                "end": 2273,
                                "value": 1,
                                "raw": "1"
                              }
                            },
                            {
                              "type": "BinaryExpression",
                              "start": 2277,
                              "end": 2290,
                              "left": {
                                "type": "Identifier",
                                "start": 2277,
                                "end": 2286,
                                "decorators": [],
                                "name": "character",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "start": 2289,
                                "end": 2290,
                                "value": 1,
                                "raw": "1"
                              }
                            },
                            {
                              "type": "Identifier",
                              "start": 2296,
                              "end": 2303,
                              "decorators": [],
                              "name": "message",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ]
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
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
      "type": "VariableDeclaration",
      "start": 2317,
      "end": 2367,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2323,
          "end": 2366,
          "id": {
            "type": "Identifier",
            "start": 2323,
            "end": 2342,
            "decorators": [],
            "name": "fileNames",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2332,
              "end": 2342,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 2334,
                "end": 2342,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 2334,
                  "end": 2340
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 2345,
            "end": 2366,
            "callee": {
              "type": "MemberExpression",
              "start": 2345,
              "end": 2363,
              "object": {
                "type": "MemberExpression",
                "start": 2345,
                "end": 2357,
                "object": {
                  "type": "Identifier",
                  "start": 2345,
                  "end": 2352,
                  "decorators": [],
                  "name": "process",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2353,
                  "end": 2357,
                  "decorators": [],
                  "name": "argv",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 2358,
                "end": 2363,
                "decorators": [],
                "name": "slice",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 2364,
                "end": 2365,
                "value": 2,
                "raw": "2"
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
      "type": "ExpressionStatement",
      "start": 2368,
      "end": 2602,
      "expression": {
        "type": "CallExpression",
        "start": 2368,
        "end": 2601,
        "callee": {
          "type": "MemberExpression",
          "start": 2368,
          "end": 2385,
          "object": {
            "type": "Identifier",
            "start": 2368,
            "end": 2377,
            "decorators": [],
            "name": "fileNames",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 2378,
            "end": 2385,
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 2386,
            "end": 2600,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 2386,
                "end": 2394,
                "decorators": [],
                "name": "fileName",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 2398,
              "end": 2600,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 2424,
                  "end": 2556,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2428,
                      "end": 2555,
                      "id": {
                        "type": "Identifier",
                        "start": 2428,
                        "end": 2438,
                        "decorators": [],
                        "name": "sourceFile",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 2441,
                        "end": 2555,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 2441,
                          "end": 2460,
                          "object": {
                            "type": "Identifier",
                            "start": 2441,
                            "end": 2443,
                            "decorators": [],
                            "name": "ts",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2444,
                            "end": 2460,
                            "decorators": [],
                            "name": "createSourceFile",
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
                            "start": 2461,
                            "end": 2469,
                            "decorators": [],
                            "name": "fileName",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          {
                            "type": "CallExpression",
                            "start": 2471,
                            "end": 2504,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 2471,
                              "end": 2502,
                              "object": {
                                "type": "CallExpression",
                                "start": 2471,
                                "end": 2493,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 2471,
                                  "end": 2483,
                                  "decorators": [],
                                  "name": "readFileSync",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 2484,
                                    "end": 2492,
                                    "decorators": [],
                                    "name": "fileName",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 2494,
                                "end": 2502,
                                "decorators": [],
                                "name": "toString",
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
                          {
                            "type": "MemberExpression",
                            "start": 2506,
                            "end": 2528,
                            "object": {
                              "type": "MemberExpression",
                              "start": 2506,
                              "end": 2521,
                              "object": {
                                "type": "Identifier",
                                "start": 2506,
                                "end": 2508,
                                "decorators": [],
                                "name": "ts",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 2509,
                                "end": 2521,
                                "decorators": [],
                                "name": "ScriptTarget",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 2522,
                              "end": 2528,
                              "decorators": [],
                              "name": "ES2015",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          {
                            "type": "Literal",
                            "start": 2550,
                            "end": 2554,
                            "value": true,
                            "raw": "true"
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
                  "type": "ExpressionStatement",
                  "start": 2579,
                  "end": 2598,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2579,
                    "end": 2597,
                    "callee": {
                      "type": "Identifier",
                      "start": 2579,
                      "end": 2585,
                      "decorators": [],
                      "name": "delint",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 2586,
                        "end": 2596,
                        "decorators": [],
                        "name": "sourceFile",
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
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
