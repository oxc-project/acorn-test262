__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "process",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 320,
                "end": 323
              },
              "start": 318,
              "end": 323
            },
            "start": 311,
            "end": 323
          },
          "init": null,
          "definite": false,
          "start": 311,
          "end": 323
        }
      ],
      "declare": true,
      "start": 299,
      "end": 324
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
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 346,
                "end": 349
              },
              "start": 344,
              "end": 349
            },
            "start": 337,
            "end": 349
          },
          "init": null,
          "definite": false,
          "start": 337,
          "end": 349
        }
      ],
      "declare": true,
      "start": 325,
      "end": 350
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
            "name": "readFileSync",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 377,
                "end": 380
              },
              "start": 375,
              "end": 380
            },
            "start": 363,
            "end": 380
          },
          "init": null,
          "definite": false,
          "start": 363,
          "end": 380
        }
      ],
      "declare": true,
      "start": 351,
      "end": 381
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ts",
            "optional": false,
            "typeAnnotation": null,
            "start": 395,
            "end": 397
          },
          "start": 390,
          "end": 397
        }
      ],
      "source": {
        "type": "Literal",
        "value": "typescript",
        "raw": "\"typescript\"",
        "start": 403,
        "end": 415
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 383,
      "end": 416
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "delint",
          "optional": false,
          "typeAnnotation": null,
          "start": 434,
          "end": 440
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "sourceFile",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ts",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 453,
                    "end": 455
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SourceFile",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 456,
                    "end": 466
                  },
                  "start": 453,
                  "end": 466
                },
                "typeArguments": null,
                "start": 453,
                "end": 466
              },
              "start": 451,
              "end": 466
            },
            "start": 441,
            "end": 466
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "delintNode",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 474,
                  "end": 484
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sourceFile",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 485,
                    "end": 495
                  }
                ],
                "optional": false,
                "start": 474,
                "end": 496
              },
              "directive": null,
              "start": 474,
              "end": 497
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "delintNode",
                "optional": false,
                "typeAnnotation": null,
                "start": 512,
                "end": 522
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "node",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ts",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 529,
                          "end": 531
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Node",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 532,
                          "end": 536
                        },
                        "start": 529,
                        "end": 536
                      },
                      "typeArguments": null,
                      "start": 529,
                      "end": 536
                    },
                    "start": 527,
                    "end": 536
                  },
                  "start": 523,
                  "end": 536
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "SwitchStatement",
                    "discriminant": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 556,
                        "end": 560
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 561,
                        "end": 565
                      },
                      "optional": false,
                      "computed": false,
                      "start": 556,
                      "end": 565
                    },
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 586,
                              "end": 588
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "SyntaxKind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 589,
                              "end": 599
                            },
                            "optional": false,
                            "computed": false,
                            "start": 586,
                            "end": 599
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ForStatement",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 600,
                            "end": 612
                          },
                          "optional": false,
                          "computed": false,
                          "start": 586,
                          "end": 612
                        },
                        "consequent": [],
                        "start": 581,
                        "end": 613
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 631,
                              "end": 633
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "SyntaxKind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 634,
                              "end": 644
                            },
                            "optional": false,
                            "computed": false,
                            "start": 631,
                            "end": 644
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ForInStatement",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 645,
                            "end": 659
                          },
                          "optional": false,
                          "computed": false,
                          "start": 631,
                          "end": 659
                        },
                        "consequent": [],
                        "start": 626,
                        "end": 660
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 678,
                              "end": 680
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "SyntaxKind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 681,
                              "end": 691
                            },
                            "optional": false,
                            "computed": false,
                            "start": 678,
                            "end": 691
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "WhileStatement",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 692,
                            "end": 706
                          },
                          "optional": false,
                          "computed": false,
                          "start": 678,
                          "end": 706
                        },
                        "consequent": [],
                        "start": 673,
                        "end": 707
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 725,
                              "end": 727
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "SyntaxKind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 728,
                              "end": 738
                            },
                            "optional": false,
                            "computed": false,
                            "start": 725,
                            "end": 738
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "DoStatement",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 739,
                            "end": 750
                          },
                          "optional": false,
                          "computed": false,
                          "start": 725,
                          "end": 750
                        },
                        "consequent": [
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "TSTypeAssertion",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "TSQualifiedName",
                                        "left": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "ts",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 774,
                                          "end": 776
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "IterationStatement",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 777,
                                          "end": 795
                                        },
                                        "start": 774,
                                        "end": 795
                                      },
                                      "typeArguments": null,
                                      "start": 774,
                                      "end": 795
                                    },
                                    "expression": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "node",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 796,
                                      "end": 800
                                    },
                                    "start": 773,
                                    "end": 800
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "statement",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 802,
                                    "end": 811
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 772,
                                  "end": 811
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "kind",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 812,
                                  "end": 816
                                },
                                "optional": false,
                                "computed": false,
                                "start": 772,
                                "end": 816
                              },
                              "operator": "!==",
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ts",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 821,
                                    "end": 823
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "SyntaxKind",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 824,
                                    "end": 834
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 821,
                                  "end": 834
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Block",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 835,
                                  "end": 840
                                },
                                "optional": false,
                                "computed": false,
                                "start": 821,
                                "end": 840
                              },
                              "start": 772,
                              "end": 840
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
                                      "name": "report",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 864,
                                      "end": 870
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "node",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 871,
                                        "end": 875
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "A looping statement's contents should be wrapped in a block body.",
                                        "raw": "\"A looping statement's contents should be wrapped in a block body.\"",
                                        "start": 877,
                                        "end": 944
                                      }
                                    ],
                                    "optional": false,
                                    "start": 864,
                                    "end": 945
                                  },
                                  "directive": null,
                                  "start": 864,
                                  "end": 946
                                }
                              ],
                              "start": 842,
                              "end": 964
                            },
                            "alternate": null,
                            "start": 768,
                            "end": 964
                          },
                          {
                            "type": "BreakStatement",
                            "label": null,
                            "start": 981,
                            "end": 987
                          }
                        ],
                        "start": 720,
                        "end": 987
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1006,
                              "end": 1008
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "SyntaxKind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1009,
                              "end": 1019
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1006,
                            "end": 1019
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IfStatement",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1020,
                            "end": 1031
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1006,
                          "end": 1031
                        },
                        "consequent": [
                          {
                            "type": "VariableDeclaration",
                            "kind": "let",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ifStatement",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1053,
                                  "end": 1064
                                },
                                "init": {
                                  "type": "TSTypeAssertion",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ts",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1069,
                                        "end": 1071
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "IfStatement",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1072,
                                        "end": 1083
                                      },
                                      "start": 1069,
                                      "end": 1083
                                    },
                                    "typeArguments": null,
                                    "start": 1069,
                                    "end": 1083
                                  },
                                  "expression": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "node",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1084,
                                    "end": 1088
                                  },
                                  "start": 1068,
                                  "end": 1088
                                },
                                "definite": false,
                                "start": 1053,
                                "end": 1089
                              }
                            ],
                            "declare": false,
                            "start": 1049,
                            "end": 1090
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ifStatement",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1111,
                                    "end": 1122
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "thenStatement",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1123,
                                    "end": 1136
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1111,
                                  "end": 1136
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "kind",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1137,
                                  "end": 1141
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1111,
                                "end": 1141
                              },
                              "operator": "!==",
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ts",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1146,
                                    "end": 1148
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "SyntaxKind",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1149,
                                    "end": 1159
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1146,
                                  "end": 1159
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Block",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1160,
                                  "end": 1165
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1146,
                                "end": 1165
                              },
                              "start": 1111,
                              "end": 1165
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
                                      "name": "report",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1189,
                                      "end": 1195
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "ifStatement",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1196,
                                          "end": 1207
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "thenStatement",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1208,
                                          "end": 1221
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1196,
                                        "end": 1221
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "An if statement's contents should be wrapped in a block body.",
                                        "raw": "\"An if statement's contents should be wrapped in a block body.\"",
                                        "start": 1223,
                                        "end": 1286
                                      }
                                    ],
                                    "optional": false,
                                    "start": 1189,
                                    "end": 1287
                                  },
                                  "directive": null,
                                  "start": 1189,
                                  "end": 1288
                                }
                              ],
                              "start": 1167,
                              "end": 1306
                            },
                            "alternate": null,
                            "start": 1107,
                            "end": 1306
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "LogicalExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ifStatement",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1327,
                                    "end": 1338
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "elseStatement",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1339,
                                    "end": 1352
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1327,
                                  "end": 1352
                                },
                                "operator": "&&",
                                "right": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ifStatement",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1376,
                                        "end": 1387
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "elseStatement",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1388,
                                        "end": 1401
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1376,
                                      "end": 1401
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "kind",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1402,
                                      "end": 1406
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1376,
                                    "end": 1406
                                  },
                                  "operator": "!==",
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ts",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1411,
                                        "end": 1413
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "SyntaxKind",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1414,
                                        "end": 1424
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1411,
                                      "end": 1424
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Block",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1425,
                                      "end": 1430
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1411,
                                    "end": 1430
                                  },
                                  "start": 1376,
                                  "end": 1430
                                },
                                "start": 1327,
                                "end": 1430
                              },
                              "operator": "&&",
                              "right": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "ifStatement",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1454,
                                      "end": 1465
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "elseStatement",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1466,
                                      "end": 1479
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1454,
                                    "end": 1479
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "kind",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1480,
                                    "end": 1484
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1454,
                                  "end": 1484
                                },
                                "operator": "!==",
                                "right": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "ts",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1489,
                                      "end": 1491
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "SyntaxKind",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1492,
                                      "end": 1502
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1489,
                                    "end": 1502
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "IfStatement",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1503,
                                    "end": 1514
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1489,
                                  "end": 1514
                                },
                                "start": 1454,
                                "end": 1514
                              },
                              "start": 1327,
                              "end": 1514
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
                                      "name": "report",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1538,
                                      "end": 1544
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "ifStatement",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1545,
                                          "end": 1556
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "elseStatement",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1557,
                                          "end": 1570
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1545,
                                        "end": 1570
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "An else statement's contents should be wrapped in a block body.",
                                        "raw": "\"An else statement's contents should be wrapped in a block body.\"",
                                        "start": 1572,
                                        "end": 1637
                                      }
                                    ],
                                    "optional": false,
                                    "start": 1538,
                                    "end": 1638
                                  },
                                  "directive": null,
                                  "start": 1538,
                                  "end": 1639
                                }
                              ],
                              "start": 1516,
                              "end": 1657
                            },
                            "alternate": null,
                            "start": 1323,
                            "end": 1657
                          },
                          {
                            "type": "BreakStatement",
                            "label": null,
                            "start": 1674,
                            "end": 1680
                          }
                        ],
                        "start": 1001,
                        "end": 1680
                      },
                      {
                        "type": "SwitchCase",
                        "test": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1699,
                              "end": 1701
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "SyntaxKind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1702,
                              "end": 1712
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1699,
                            "end": 1712
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BinaryExpression",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1713,
                            "end": 1729
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1699,
                          "end": 1729
                        },
                        "consequent": [
                          {
                            "type": "VariableDeclaration",
                            "kind": "let",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "op",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1751,
                                  "end": 1753
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "TSTypeAssertion",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "TSQualifiedName",
                                          "left": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "ts",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1758,
                                            "end": 1760
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "BinaryExpression",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1761,
                                            "end": 1777
                                          },
                                          "start": 1758,
                                          "end": 1777
                                        },
                                        "typeArguments": null,
                                        "start": 1758,
                                        "end": 1777
                                      },
                                      "expression": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "node",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1778,
                                        "end": 1782
                                      },
                                      "start": 1757,
                                      "end": 1782
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "operatorToken",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1784,
                                      "end": 1797
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1756,
                                    "end": 1797
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "kind",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1798,
                                    "end": 1802
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1756,
                                  "end": 1802
                                },
                                "definite": false,
                                "start": 1751,
                                "end": 1802
                              }
                            ],
                            "declare": false,
                            "start": 1747,
                            "end": 1803
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "op",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1824,
                                  "end": 1826
                                },
                                "operator": "===",
                                "right": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "ts",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1831,
                                      "end": 1833
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "SyntaxKind",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1834,
                                      "end": 1844
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1831,
                                    "end": 1844
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "EqualsEqualsToken",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1845,
                                    "end": 1862
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1831,
                                  "end": 1862
                                },
                                "start": 1824,
                                "end": 1862
                              },
                              "operator": "||",
                              "right": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "op",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1866,
                                  "end": 1868
                                },
                                "operator": "==",
                                "right": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "ts",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1872,
                                      "end": 1874
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "SyntaxKind",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1875,
                                      "end": 1885
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1872,
                                    "end": 1885
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ExclamationEqualsToken",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1886,
                                    "end": 1908
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1872,
                                  "end": 1908
                                },
                                "start": 1866,
                                "end": 1908
                              },
                              "start": 1824,
                              "end": 1908
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
                                      "name": "report",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1932,
                                      "end": 1938
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "node",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1939,
                                        "end": 1943
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "Use '===' and '!=='.",
                                        "raw": "\"Use '===' and '!=='.\"",
                                        "start": 1945,
                                        "end": 1967
                                      }
                                    ],
                                    "optional": false,
                                    "start": 1932,
                                    "end": 1968
                                  },
                                  "directive": null,
                                  "start": 1932,
                                  "end": 1968
                                }
                              ],
                              "start": 1910,
                              "end": 1986
                            },
                            "alternate": null,
                            "start": 1820,
                            "end": 1986
                          },
                          {
                            "type": "BreakStatement",
                            "label": null,
                            "start": 2003,
                            "end": 2009
                          }
                        ],
                        "start": 1694,
                        "end": 2009
                      }
                    ],
                    "start": 548,
                    "end": 2019
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
                          "name": "ts",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2029,
                          "end": 2031
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "forEachChild",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2032,
                          "end": 2044
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2029,
                        "end": 2044
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "node",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2045,
                          "end": 2049
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "delintNode",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2051,
                          "end": 2061
                        }
                      ],
                      "optional": false,
                      "start": 2029,
                      "end": 2062
                    },
                    "directive": null,
                    "start": 2029,
                    "end": 2063
                  }
                ],
                "start": 538,
                "end": 2069
              },
              "expression": false,
              "start": 503,
              "end": 2069
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "report",
                "optional": false,
                "typeAnnotation": null,
                "start": 2084,
                "end": 2090
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "node",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ts",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2097,
                          "end": 2099
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Node",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2100,
                          "end": 2104
                        },
                        "start": 2097,
                        "end": 2104
                      },
                      "typeArguments": null,
                      "start": 2097,
                      "end": 2104
                    },
                    "start": 2095,
                    "end": 2104
                  },
                  "start": 2091,
                  "end": 2104
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2115,
                      "end": 2121
                    },
                    "start": 2113,
                    "end": 2121
                  },
                  "start": 2106,
                  "end": 2121
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "ObjectPattern",
                          "decorators": [],
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "line",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2139,
                                "end": 2143
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "line",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2139,
                                "end": 2143
                              },
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "optional": false,
                              "start": 2139,
                              "end": 2143
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "character",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2145,
                                "end": 2154
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "character",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2145,
                                "end": 2154
                              },
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "optional": false,
                              "start": 2145,
                              "end": 2154
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2137,
                          "end": 2156
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "sourceFile",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2159,
                              "end": 2169
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getLineAndCharacterOfPosition",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2170,
                              "end": 2199
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2159,
                            "end": 2199
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "node",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2200,
                                  "end": 2204
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getStart",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2205,
                                  "end": 2213
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2200,
                                "end": 2213
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 2200,
                              "end": 2215
                            }
                          ],
                          "optional": false,
                          "start": 2159,
                          "end": 2216
                        },
                        "definite": false,
                        "start": 2137,
                        "end": 2216
                      }
                    ],
                    "declare": false,
                    "start": 2133,
                    "end": 2217
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
                          "start": 2226,
                          "end": 2233
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2234,
                          "end": 2237
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2226,
                        "end": 2237
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "TemplateLiteral",
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": false,
                              "start": 2238,
                              "end": 2241
                            },
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": " (",
                                "cooked": " ("
                              },
                              "tail": false,
                              "start": 2260,
                              "end": 2265
                            },
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": ",",
                                "cooked": ","
                              },
                              "tail": false,
                              "start": 2273,
                              "end": 2277
                            },
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "): ",
                                "cooked": "): "
                              },
                              "tail": false,
                              "start": 2290,
                              "end": 2296
                            },
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": true,
                              "start": 2303,
                              "end": 2305
                            }
                          ],
                          "expressions": [
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "sourceFile",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2241,
                                "end": 2251
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "fileName",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2252,
                                "end": 2260
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2241,
                              "end": 2260
                            },
                            {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "line",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2265,
                                "end": 2269
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 2272,
                                "end": 2273
                              },
                              "start": 2265,
                              "end": 2273
                            },
                            {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "character",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2277,
                                "end": 2286
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 2289,
                                "end": 2290
                              },
                              "start": 2277,
                              "end": 2290
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "message",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2296,
                              "end": 2303
                            }
                          ],
                          "start": 2238,
                          "end": 2305
                        }
                      ],
                      "optional": false,
                      "start": 2226,
                      "end": 2306
                    },
                    "directive": null,
                    "start": 2226,
                    "end": 2307
                  }
                ],
                "start": 2123,
                "end": 2313
              },
              "expression": false,
              "start": 2075,
              "end": 2313
            }
          ],
          "start": 468,
          "end": 2315
        },
        "expression": false,
        "start": 425,
        "end": 2315
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 418,
      "end": 2315
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
            "name": "fileNames",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 2334,
                  "end": 2340
                },
                "start": 2334,
                "end": 2342
              },
              "start": 2332,
              "end": 2342
            },
            "start": 2323,
            "end": 2342
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "process",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2345,
                  "end": 2352
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "argv",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2353,
                  "end": 2357
                },
                "optional": false,
                "computed": false,
                "start": 2345,
                "end": 2357
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "slice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2358,
                "end": 2363
              },
              "optional": false,
              "computed": false,
              "start": 2345,
              "end": 2363
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2364,
                "end": 2365
              }
            ],
            "optional": false,
            "start": 2345,
            "end": 2366
          },
          "definite": false,
          "start": 2323,
          "end": 2366
        }
      ],
      "declare": false,
      "start": 2317,
      "end": 2367
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
            "name": "fileNames",
            "optional": false,
            "typeAnnotation": null,
            "start": 2368,
            "end": 2377
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "typeAnnotation": null,
            "start": 2378,
            "end": 2385
          },
          "optional": false,
          "computed": false,
          "start": 2368,
          "end": 2385
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fileName",
                "optional": false,
                "typeAnnotation": null,
                "start": 2386,
                "end": 2394
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "sourceFile",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2428,
                        "end": 2438
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ts",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2441,
                            "end": 2443
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "createSourceFile",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2444,
                            "end": 2460
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2441,
                          "end": 2460
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fileName",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2461,
                            "end": 2469
                          },
                          {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "readFileSync",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2471,
                                  "end": 2483
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "fileName",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2484,
                                    "end": 2492
                                  }
                                ],
                                "optional": false,
                                "start": 2471,
                                "end": 2493
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2494,
                                "end": 2502
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2471,
                              "end": 2502
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 2471,
                            "end": 2504
                          },
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ts",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2506,
                                "end": 2508
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ScriptTarget",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2509,
                                "end": 2521
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2506,
                              "end": 2521
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ES2015",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2522,
                              "end": 2528
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2506,
                            "end": 2528
                          },
                          {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 2550,
                            "end": 2554
                          }
                        ],
                        "optional": false,
                        "start": 2441,
                        "end": 2555
                      },
                      "definite": false,
                      "start": 2428,
                      "end": 2555
                    }
                  ],
                  "declare": false,
                  "start": 2424,
                  "end": 2556
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "delint",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2579,
                      "end": 2585
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "sourceFile",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2586,
                        "end": 2596
                      }
                    ],
                    "optional": false,
                    "start": 2579,
                    "end": 2597
                  },
                  "directive": null,
                  "start": 2579,
                  "end": 2598
                }
              ],
              "start": 2398,
              "end": 2600
            },
            "id": null,
            "generator": false,
            "start": 2386,
            "end": 2600
          }
        ],
        "optional": false,
        "start": 2368,
        "end": 2601
      },
      "directive": null,
      "start": 2368,
      "end": 2602
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 299,
  "end": 2602
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 299,
    "end": 306,
    "range": [
      299,
      306
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 307,
    "end": 310,
    "range": [
      307,
      310
    ]
  },
  {
    "type": "Identifier",
    "value": "process",
    "start": 311,
    "end": 318,
    "range": [
      311,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 320,
    "end": 323,
    "range": [
      320,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 325,
    "end": 332,
    "range": [
      325,
      332
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 333,
    "end": 336,
    "range": [
      333,
      336
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 337,
    "end": 344,
    "range": [
      337,
      344
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 346,
    "end": 349,
    "range": [
      346,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 351,
    "end": 358,
    "range": [
      351,
      358
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 359,
    "end": 362,
    "range": [
      359,
      362
    ]
  },
  {
    "type": "Identifier",
    "value": "readFileSync",
    "start": 363,
    "end": 375,
    "range": [
      363,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 377,
    "end": 380,
    "range": [
      377,
      380
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 380,
    "end": 381,
    "range": [
      380,
      381
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 383,
    "end": 389,
    "range": [
      383,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 392,
    "end": 394,
    "range": [
      392,
      394
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 395,
    "end": 397,
    "range": [
      395,
      397
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 398,
    "end": 402,
    "range": [
      398,
      402
    ]
  },
  {
    "type": "String",
    "value": "\"typescript\"",
    "start": 403,
    "end": 415,
    "range": [
      403,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 418,
    "end": 424,
    "range": [
      418,
      424
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 425,
    "end": 433,
    "range": [
      425,
      433
    ]
  },
  {
    "type": "Identifier",
    "value": "delint",
    "start": 434,
    "end": 440,
    "range": [
      434,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Identifier",
    "value": "sourceFile",
    "start": 441,
    "end": 451,
    "range": [
      441,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 453,
    "end": 455,
    "range": [
      453,
      455
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Identifier",
    "value": "SourceFile",
    "start": 456,
    "end": 466,
    "range": [
      456,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Identifier",
    "value": "delintNode",
    "start": 474,
    "end": 484,
    "range": [
      474,
      484
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Identifier",
    "value": "sourceFile",
    "start": 485,
    "end": 495,
    "range": [
      485,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 503,
    "end": 511,
    "range": [
      503,
      511
    ]
  },
  {
    "type": "Identifier",
    "value": "delintNode",
    "start": 512,
    "end": 522,
    "range": [
      512,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 523,
    "end": 527,
    "range": [
      523,
      527
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 529,
    "end": 531,
    "range": [
      529,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 532,
    "end": 536,
    "range": [
      532,
      536
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 548,
    "end": 554,
    "range": [
      548,
      554
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 556,
    "end": 560,
    "range": [
      556,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 561,
    "end": 565,
    "range": [
      561,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 581,
    "end": 585,
    "range": [
      581,
      585
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 586,
    "end": 588,
    "range": [
      586,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 588,
    "end": 589,
    "range": [
      588,
      589
    ]
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 589,
    "end": 599,
    "range": [
      589,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  },
  {
    "type": "Identifier",
    "value": "ForStatement",
    "start": 600,
    "end": 612,
    "range": [
      600,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 626,
    "end": 630,
    "range": [
      626,
      630
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 631,
    "end": 633,
    "range": [
      631,
      633
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 633,
    "end": 634,
    "range": [
      633,
      634
    ]
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 634,
    "end": 644,
    "range": [
      634,
      644
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 644,
    "end": 645,
    "range": [
      644,
      645
    ]
  },
  {
    "type": "Identifier",
    "value": "ForInStatement",
    "start": 645,
    "end": 659,
    "range": [
      645,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 673,
    "end": 677,
    "range": [
      673,
      677
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 678,
    "end": 680,
    "range": [
      678,
      680
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 681,
    "end": 691,
    "range": [
      681,
      691
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 691,
    "end": 692,
    "range": [
      691,
      692
    ]
  },
  {
    "type": "Identifier",
    "value": "WhileStatement",
    "start": 692,
    "end": 706,
    "range": [
      692,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 720,
    "end": 724,
    "range": [
      720,
      724
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 725,
    "end": 727,
    "range": [
      725,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 728,
    "end": 738,
    "range": [
      728,
      738
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 738,
    "end": 739,
    "range": [
      738,
      739
    ]
  },
  {
    "type": "Identifier",
    "value": "DoStatement",
    "start": 739,
    "end": 750,
    "range": [
      739,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 768,
    "end": 770,
    "range": [
      768,
      770
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 771,
    "end": 772,
    "range": [
      771,
      772
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 772,
    "end": 773,
    "range": [
      772,
      773
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 773,
    "end": 774,
    "range": [
      773,
      774
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 774,
    "end": 776,
    "range": [
      774,
      776
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 776,
    "end": 777,
    "range": [
      776,
      777
    ]
  },
  {
    "type": "Identifier",
    "value": "IterationStatement",
    "start": 777,
    "end": 795,
    "range": [
      777,
      795
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 796,
    "end": 800,
    "range": [
      796,
      800
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 800,
    "end": 801,
    "range": [
      800,
      801
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 801,
    "end": 802,
    "range": [
      801,
      802
    ]
  },
  {
    "type": "Identifier",
    "value": "statement",
    "start": 802,
    "end": 811,
    "range": [
      802,
      811
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 811,
    "end": 812,
    "range": [
      811,
      812
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 812,
    "end": 816,
    "range": [
      812,
      816
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 817,
    "end": 820,
    "range": [
      817,
      820
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 821,
    "end": 823,
    "range": [
      821,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 824,
    "end": 834,
    "range": [
      824,
      834
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 834,
    "end": 835,
    "range": [
      834,
      835
    ]
  },
  {
    "type": "Identifier",
    "value": "Block",
    "start": 835,
    "end": 840,
    "range": [
      835,
      840
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 840,
    "end": 841,
    "range": [
      840,
      841
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 842,
    "end": 843,
    "range": [
      842,
      843
    ]
  },
  {
    "type": "Identifier",
    "value": "report",
    "start": 864,
    "end": 870,
    "range": [
      864,
      870
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 870,
    "end": 871,
    "range": [
      870,
      871
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 871,
    "end": 875,
    "range": [
      871,
      875
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 875,
    "end": 876,
    "range": [
      875,
      876
    ]
  },
  {
    "type": "String",
    "value": "\"A looping statement's contents should be wrapped in a block body.\"",
    "start": 877,
    "end": 944,
    "range": [
      877,
      944
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 945,
    "end": 946,
    "range": [
      945,
      946
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 963,
    "end": 964,
    "range": [
      963,
      964
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 981,
    "end": 986,
    "range": [
      981,
      986
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 986,
    "end": 987,
    "range": [
      986,
      987
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1001,
    "end": 1005,
    "range": [
      1001,
      1005
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1006,
    "end": 1008,
    "range": [
      1006,
      1008
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1008,
    "end": 1009,
    "range": [
      1008,
      1009
    ]
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 1009,
    "end": 1019,
    "range": [
      1009,
      1019
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1019,
    "end": 1020,
    "range": [
      1019,
      1020
    ]
  },
  {
    "type": "Identifier",
    "value": "IfStatement",
    "start": 1020,
    "end": 1031,
    "range": [
      1020,
      1031
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1031,
    "end": 1032,
    "range": [
      1031,
      1032
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1049,
    "end": 1052,
    "range": [
      1049,
      1052
    ]
  },
  {
    "type": "Identifier",
    "value": "ifStatement",
    "start": 1053,
    "end": 1064,
    "range": [
      1053,
      1064
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1065,
    "end": 1066,
    "range": [
      1065,
      1066
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1067,
    "end": 1068,
    "range": [
      1067,
      1068
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1068,
    "end": 1069,
    "range": [
      1068,
      1069
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1069,
    "end": 1071,
    "range": [
      1069,
      1071
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1071,
    "end": 1072,
    "range": [
      1071,
      1072
    ]
  },
  {
    "type": "Identifier",
    "value": "IfStatement",
    "start": 1072,
    "end": 1083,
    "range": [
      1072,
      1083
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1083,
    "end": 1084,
    "range": [
      1083,
      1084
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 1084,
    "end": 1088,
    "range": [
      1084,
      1088
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1089,
    "end": 1090,
    "range": [
      1089,
      1090
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1107,
    "end": 1109,
    "range": [
      1107,
      1109
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1110,
    "end": 1111,
    "range": [
      1110,
      1111
    ]
  },
  {
    "type": "Identifier",
    "value": "ifStatement",
    "start": 1111,
    "end": 1122,
    "range": [
      1111,
      1122
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1122,
    "end": 1123,
    "range": [
      1122,
      1123
    ]
  },
  {
    "type": "Identifier",
    "value": "thenStatement",
    "start": 1123,
    "end": 1136,
    "range": [
      1123,
      1136
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1136,
    "end": 1137,
    "range": [
      1136,
      1137
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1137,
    "end": 1141,
    "range": [
      1137,
      1141
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1142,
    "end": 1145,
    "range": [
      1142,
      1145
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1146,
    "end": 1148,
    "range": [
      1146,
      1148
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1148,
    "end": 1149,
    "range": [
      1148,
      1149
    ]
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 1149,
    "end": 1159,
    "range": [
      1149,
      1159
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1159,
    "end": 1160,
    "range": [
      1159,
      1160
    ]
  },
  {
    "type": "Identifier",
    "value": "Block",
    "start": 1160,
    "end": 1165,
    "range": [
      1160,
      1165
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1165,
    "end": 1166,
    "range": [
      1165,
      1166
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1167,
    "end": 1168,
    "range": [
      1167,
      1168
    ]
  },
  {
    "type": "Identifier",
    "value": "report",
    "start": 1189,
    "end": 1195,
    "range": [
      1189,
      1195
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1195,
    "end": 1196,
    "range": [
      1195,
      1196
    ]
  },
  {
    "type": "Identifier",
    "value": "ifStatement",
    "start": 1196,
    "end": 1207,
    "range": [
      1196,
      1207
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1207,
    "end": 1208,
    "range": [
      1207,
      1208
    ]
  },
  {
    "type": "Identifier",
    "value": "thenStatement",
    "start": 1208,
    "end": 1221,
    "range": [
      1208,
      1221
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1221,
    "end": 1222,
    "range": [
      1221,
      1222
    ]
  },
  {
    "type": "String",
    "value": "\"An if statement's contents should be wrapped in a block body.\"",
    "start": 1223,
    "end": 1286,
    "range": [
      1223,
      1286
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1286,
    "end": 1287,
    "range": [
      1286,
      1287
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1287,
    "end": 1288,
    "range": [
      1287,
      1288
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1305,
    "end": 1306,
    "range": [
      1305,
      1306
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1323,
    "end": 1325,
    "range": [
      1323,
      1325
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1326,
    "end": 1327,
    "range": [
      1326,
      1327
    ]
  },
  {
    "type": "Identifier",
    "value": "ifStatement",
    "start": 1327,
    "end": 1338,
    "range": [
      1327,
      1338
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1338,
    "end": 1339,
    "range": [
      1338,
      1339
    ]
  },
  {
    "type": "Identifier",
    "value": "elseStatement",
    "start": 1339,
    "end": 1352,
    "range": [
      1339,
      1352
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1353,
    "end": 1355,
    "range": [
      1353,
      1355
    ]
  },
  {
    "type": "Identifier",
    "value": "ifStatement",
    "start": 1376,
    "end": 1387,
    "range": [
      1376,
      1387
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1387,
    "end": 1388,
    "range": [
      1387,
      1388
    ]
  },
  {
    "type": "Identifier",
    "value": "elseStatement",
    "start": 1388,
    "end": 1401,
    "range": [
      1388,
      1401
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1401,
    "end": 1402,
    "range": [
      1401,
      1402
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1402,
    "end": 1406,
    "range": [
      1402,
      1406
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1407,
    "end": 1410,
    "range": [
      1407,
      1410
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1411,
    "end": 1413,
    "range": [
      1411,
      1413
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1413,
    "end": 1414,
    "range": [
      1413,
      1414
    ]
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 1414,
    "end": 1424,
    "range": [
      1414,
      1424
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1424,
    "end": 1425,
    "range": [
      1424,
      1425
    ]
  },
  {
    "type": "Identifier",
    "value": "Block",
    "start": 1425,
    "end": 1430,
    "range": [
      1425,
      1430
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1431,
    "end": 1433,
    "range": [
      1431,
      1433
    ]
  },
  {
    "type": "Identifier",
    "value": "ifStatement",
    "start": 1454,
    "end": 1465,
    "range": [
      1454,
      1465
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1465,
    "end": 1466,
    "range": [
      1465,
      1466
    ]
  },
  {
    "type": "Identifier",
    "value": "elseStatement",
    "start": 1466,
    "end": 1479,
    "range": [
      1466,
      1479
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1479,
    "end": 1480,
    "range": [
      1479,
      1480
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1480,
    "end": 1484,
    "range": [
      1480,
      1484
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1485,
    "end": 1488,
    "range": [
      1485,
      1488
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1489,
    "end": 1491,
    "range": [
      1489,
      1491
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1491,
    "end": 1492,
    "range": [
      1491,
      1492
    ]
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 1492,
    "end": 1502,
    "range": [
      1492,
      1502
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1502,
    "end": 1503,
    "range": [
      1502,
      1503
    ]
  },
  {
    "type": "Identifier",
    "value": "IfStatement",
    "start": 1503,
    "end": 1514,
    "range": [
      1503,
      1514
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1514,
    "end": 1515,
    "range": [
      1514,
      1515
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1516,
    "end": 1517,
    "range": [
      1516,
      1517
    ]
  },
  {
    "type": "Identifier",
    "value": "report",
    "start": 1538,
    "end": 1544,
    "range": [
      1538,
      1544
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1544,
    "end": 1545,
    "range": [
      1544,
      1545
    ]
  },
  {
    "type": "Identifier",
    "value": "ifStatement",
    "start": 1545,
    "end": 1556,
    "range": [
      1545,
      1556
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1556,
    "end": 1557,
    "range": [
      1556,
      1557
    ]
  },
  {
    "type": "Identifier",
    "value": "elseStatement",
    "start": 1557,
    "end": 1570,
    "range": [
      1557,
      1570
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1570,
    "end": 1571,
    "range": [
      1570,
      1571
    ]
  },
  {
    "type": "String",
    "value": "\"An else statement's contents should be wrapped in a block body.\"",
    "start": 1572,
    "end": 1637,
    "range": [
      1572,
      1637
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1637,
    "end": 1638,
    "range": [
      1637,
      1638
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1638,
    "end": 1639,
    "range": [
      1638,
      1639
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1656,
    "end": 1657,
    "range": [
      1656,
      1657
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1674,
    "end": 1679,
    "range": [
      1674,
      1679
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1679,
    "end": 1680,
    "range": [
      1679,
      1680
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1694,
    "end": 1698,
    "range": [
      1694,
      1698
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1699,
    "end": 1701,
    "range": [
      1699,
      1701
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1701,
    "end": 1702,
    "range": [
      1701,
      1702
    ]
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 1702,
    "end": 1712,
    "range": [
      1702,
      1712
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1712,
    "end": 1713,
    "range": [
      1712,
      1713
    ]
  },
  {
    "type": "Identifier",
    "value": "BinaryExpression",
    "start": 1713,
    "end": 1729,
    "range": [
      1713,
      1729
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1729,
    "end": 1730,
    "range": [
      1729,
      1730
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1747,
    "end": 1750,
    "range": [
      1747,
      1750
    ]
  },
  {
    "type": "Identifier",
    "value": "op",
    "start": 1751,
    "end": 1753,
    "range": [
      1751,
      1753
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1754,
    "end": 1755,
    "range": [
      1754,
      1755
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1756,
    "end": 1757,
    "range": [
      1756,
      1757
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1757,
    "end": 1758,
    "range": [
      1757,
      1758
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1758,
    "end": 1760,
    "range": [
      1758,
      1760
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1760,
    "end": 1761,
    "range": [
      1760,
      1761
    ]
  },
  {
    "type": "Identifier",
    "value": "BinaryExpression",
    "start": 1761,
    "end": 1777,
    "range": [
      1761,
      1777
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1777,
    "end": 1778,
    "range": [
      1777,
      1778
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 1778,
    "end": 1782,
    "range": [
      1778,
      1782
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1782,
    "end": 1783,
    "range": [
      1782,
      1783
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1783,
    "end": 1784,
    "range": [
      1783,
      1784
    ]
  },
  {
    "type": "Identifier",
    "value": "operatorToken",
    "start": 1784,
    "end": 1797,
    "range": [
      1784,
      1797
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1797,
    "end": 1798,
    "range": [
      1797,
      1798
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1798,
    "end": 1802,
    "range": [
      1798,
      1802
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1802,
    "end": 1803,
    "range": [
      1802,
      1803
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1820,
    "end": 1822,
    "range": [
      1820,
      1822
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1823,
    "end": 1824,
    "range": [
      1823,
      1824
    ]
  },
  {
    "type": "Identifier",
    "value": "op",
    "start": 1824,
    "end": 1826,
    "range": [
      1824,
      1826
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1827,
    "end": 1830,
    "range": [
      1827,
      1830
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1831,
    "end": 1833,
    "range": [
      1831,
      1833
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1833,
    "end": 1834,
    "range": [
      1833,
      1834
    ]
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 1834,
    "end": 1844,
    "range": [
      1834,
      1844
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1844,
    "end": 1845,
    "range": [
      1844,
      1845
    ]
  },
  {
    "type": "Identifier",
    "value": "EqualsEqualsToken",
    "start": 1845,
    "end": 1862,
    "range": [
      1845,
      1862
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1863,
    "end": 1865,
    "range": [
      1863,
      1865
    ]
  },
  {
    "type": "Identifier",
    "value": "op",
    "start": 1866,
    "end": 1868,
    "range": [
      1866,
      1868
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1869,
    "end": 1871,
    "range": [
      1869,
      1871
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1872,
    "end": 1874,
    "range": [
      1872,
      1874
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1874,
    "end": 1875,
    "range": [
      1874,
      1875
    ]
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 1875,
    "end": 1885,
    "range": [
      1875,
      1885
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1885,
    "end": 1886,
    "range": [
      1885,
      1886
    ]
  },
  {
    "type": "Identifier",
    "value": "ExclamationEqualsToken",
    "start": 1886,
    "end": 1908,
    "range": [
      1886,
      1908
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1908,
    "end": 1909,
    "range": [
      1908,
      1909
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1910,
    "end": 1911,
    "range": [
      1910,
      1911
    ]
  },
  {
    "type": "Identifier",
    "value": "report",
    "start": 1932,
    "end": 1938,
    "range": [
      1932,
      1938
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1938,
    "end": 1939,
    "range": [
      1938,
      1939
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 1939,
    "end": 1943,
    "range": [
      1939,
      1943
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1943,
    "end": 1944,
    "range": [
      1943,
      1944
    ]
  },
  {
    "type": "String",
    "value": "\"Use '===' and '!=='.\"",
    "start": 1945,
    "end": 1967,
    "range": [
      1945,
      1967
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1967,
    "end": 1968,
    "range": [
      1967,
      1968
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1985,
    "end": 1986,
    "range": [
      1985,
      1986
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 2003,
    "end": 2008,
    "range": [
      2003,
      2008
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2008,
    "end": 2009,
    "range": [
      2008,
      2009
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2018,
    "end": 2019,
    "range": [
      2018,
      2019
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 2029,
    "end": 2031,
    "range": [
      2029,
      2031
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2031,
    "end": 2032,
    "range": [
      2031,
      2032
    ]
  },
  {
    "type": "Identifier",
    "value": "forEachChild",
    "start": 2032,
    "end": 2044,
    "range": [
      2032,
      2044
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2044,
    "end": 2045,
    "range": [
      2044,
      2045
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 2045,
    "end": 2049,
    "range": [
      2045,
      2049
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2049,
    "end": 2050,
    "range": [
      2049,
      2050
    ]
  },
  {
    "type": "Identifier",
    "value": "delintNode",
    "start": 2051,
    "end": 2061,
    "range": [
      2051,
      2061
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2061,
    "end": 2062,
    "range": [
      2061,
      2062
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2062,
    "end": 2063,
    "range": [
      2062,
      2063
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2068,
    "end": 2069,
    "range": [
      2068,
      2069
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2075,
    "end": 2083,
    "range": [
      2075,
      2083
    ]
  },
  {
    "type": "Identifier",
    "value": "report",
    "start": 2084,
    "end": 2090,
    "range": [
      2084,
      2090
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2090,
    "end": 2091,
    "range": [
      2090,
      2091
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 2091,
    "end": 2095,
    "range": [
      2091,
      2095
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2095,
    "end": 2096,
    "range": [
      2095,
      2096
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 2097,
    "end": 2099,
    "range": [
      2097,
      2099
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2099,
    "end": 2100,
    "range": [
      2099,
      2100
    ]
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 2100,
    "end": 2104,
    "range": [
      2100,
      2104
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2104,
    "end": 2105,
    "range": [
      2104,
      2105
    ]
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 2106,
    "end": 2113,
    "range": [
      2106,
      2113
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2113,
    "end": 2114,
    "range": [
      2113,
      2114
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2115,
    "end": 2121,
    "range": [
      2115,
      2121
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2121,
    "end": 2122,
    "range": [
      2121,
      2122
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2123,
    "end": 2124,
    "range": [
      2123,
      2124
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2133,
    "end": 2136,
    "range": [
      2133,
      2136
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2137,
    "end": 2138,
    "range": [
      2137,
      2138
    ]
  },
  {
    "type": "Identifier",
    "value": "line",
    "start": 2139,
    "end": 2143,
    "range": [
      2139,
      2143
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2143,
    "end": 2144,
    "range": [
      2143,
      2144
    ]
  },
  {
    "type": "Identifier",
    "value": "character",
    "start": 2145,
    "end": 2154,
    "range": [
      2145,
      2154
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2155,
    "end": 2156,
    "range": [
      2155,
      2156
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2157,
    "end": 2158,
    "range": [
      2157,
      2158
    ]
  },
  {
    "type": "Identifier",
    "value": "sourceFile",
    "start": 2159,
    "end": 2169,
    "range": [
      2159,
      2169
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2169,
    "end": 2170,
    "range": [
      2169,
      2170
    ]
  },
  {
    "type": "Identifier",
    "value": "getLineAndCharacterOfPosition",
    "start": 2170,
    "end": 2199,
    "range": [
      2170,
      2199
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2199,
    "end": 2200,
    "range": [
      2199,
      2200
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 2200,
    "end": 2204,
    "range": [
      2200,
      2204
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2204,
    "end": 2205,
    "range": [
      2204,
      2205
    ]
  },
  {
    "type": "Identifier",
    "value": "getStart",
    "start": 2205,
    "end": 2213,
    "range": [
      2205,
      2213
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2213,
    "end": 2214,
    "range": [
      2213,
      2214
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2214,
    "end": 2215,
    "range": [
      2214,
      2215
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2215,
    "end": 2216,
    "range": [
      2215,
      2216
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2216,
    "end": 2217,
    "range": [
      2216,
      2217
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2226,
    "end": 2233,
    "range": [
      2226,
      2233
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2233,
    "end": 2234,
    "range": [
      2233,
      2234
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2234,
    "end": 2237,
    "range": [
      2234,
      2237
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2237,
    "end": 2238,
    "range": [
      2237,
      2238
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2238,
    "end": 2241,
    "range": [
      2238,
      2241
    ]
  },
  {
    "type": "Identifier",
    "value": "sourceFile",
    "start": 2241,
    "end": 2251,
    "range": [
      2241,
      2251
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2251,
    "end": 2252,
    "range": [
      2251,
      2252
    ]
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 2252,
    "end": 2260,
    "range": [
      2252,
      2260
    ]
  },
  {
    "type": "Template",
    "value": "} (${",
    "start": 2260,
    "end": 2265,
    "range": [
      2260,
      2265
    ]
  },
  {
    "type": "Identifier",
    "value": "line",
    "start": 2265,
    "end": 2269,
    "range": [
      2265,
      2269
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2270,
    "end": 2271,
    "range": [
      2270,
      2271
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2272,
    "end": 2273,
    "range": [
      2272,
      2273
    ]
  },
  {
    "type": "Template",
    "value": "},${",
    "start": 2273,
    "end": 2277,
    "range": [
      2273,
      2277
    ]
  },
  {
    "type": "Identifier",
    "value": "character",
    "start": 2277,
    "end": 2286,
    "range": [
      2277,
      2286
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2287,
    "end": 2288,
    "range": [
      2287,
      2288
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2289,
    "end": 2290,
    "range": [
      2289,
      2290
    ]
  },
  {
    "type": "Template",
    "value": "}): ${",
    "start": 2290,
    "end": 2296,
    "range": [
      2290,
      2296
    ]
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 2296,
    "end": 2303,
    "range": [
      2296,
      2303
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2303,
    "end": 2305,
    "range": [
      2303,
      2305
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2305,
    "end": 2306,
    "range": [
      2305,
      2306
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2306,
    "end": 2307,
    "range": [
      2306,
      2307
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2312,
    "end": 2313,
    "range": [
      2312,
      2313
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2314,
    "end": 2315,
    "range": [
      2314,
      2315
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2317,
    "end": 2322,
    "range": [
      2317,
      2322
    ]
  },
  {
    "type": "Identifier",
    "value": "fileNames",
    "start": 2323,
    "end": 2332,
    "range": [
      2323,
      2332
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2332,
    "end": 2333,
    "range": [
      2332,
      2333
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2334,
    "end": 2340,
    "range": [
      2334,
      2340
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2340,
    "end": 2341,
    "range": [
      2340,
      2341
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2341,
    "end": 2342,
    "range": [
      2341,
      2342
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2343,
    "end": 2344,
    "range": [
      2343,
      2344
    ]
  },
  {
    "type": "Identifier",
    "value": "process",
    "start": 2345,
    "end": 2352,
    "range": [
      2345,
      2352
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2352,
    "end": 2353,
    "range": [
      2352,
      2353
    ]
  },
  {
    "type": "Identifier",
    "value": "argv",
    "start": 2353,
    "end": 2357,
    "range": [
      2353,
      2357
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2357,
    "end": 2358,
    "range": [
      2357,
      2358
    ]
  },
  {
    "type": "Identifier",
    "value": "slice",
    "start": 2358,
    "end": 2363,
    "range": [
      2358,
      2363
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2363,
    "end": 2364,
    "range": [
      2363,
      2364
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2364,
    "end": 2365,
    "range": [
      2364,
      2365
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2365,
    "end": 2366,
    "range": [
      2365,
      2366
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2366,
    "end": 2367,
    "range": [
      2366,
      2367
    ]
  },
  {
    "type": "Identifier",
    "value": "fileNames",
    "start": 2368,
    "end": 2377,
    "range": [
      2368,
      2377
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2377,
    "end": 2378,
    "range": [
      2377,
      2378
    ]
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 2378,
    "end": 2385,
    "range": [
      2378,
      2385
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2385,
    "end": 2386,
    "range": [
      2385,
      2386
    ]
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 2386,
    "end": 2394,
    "range": [
      2386,
      2394
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2395,
    "end": 2397,
    "range": [
      2395,
      2397
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2398,
    "end": 2399,
    "range": [
      2398,
      2399
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2424,
    "end": 2427,
    "range": [
      2424,
      2427
    ]
  },
  {
    "type": "Identifier",
    "value": "sourceFile",
    "start": 2428,
    "end": 2438,
    "range": [
      2428,
      2438
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2439,
    "end": 2440,
    "range": [
      2439,
      2440
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 2441,
    "end": 2443,
    "range": [
      2441,
      2443
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2443,
    "end": 2444,
    "range": [
      2443,
      2444
    ]
  },
  {
    "type": "Identifier",
    "value": "createSourceFile",
    "start": 2444,
    "end": 2460,
    "range": [
      2444,
      2460
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2460,
    "end": 2461,
    "range": [
      2460,
      2461
    ]
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 2461,
    "end": 2469,
    "range": [
      2461,
      2469
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2469,
    "end": 2470,
    "range": [
      2469,
      2470
    ]
  },
  {
    "type": "Identifier",
    "value": "readFileSync",
    "start": 2471,
    "end": 2483,
    "range": [
      2471,
      2483
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2483,
    "end": 2484,
    "range": [
      2483,
      2484
    ]
  },
  {
    "type": "Identifier",
    "value": "fileName",
    "start": 2484,
    "end": 2492,
    "range": [
      2484,
      2492
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2492,
    "end": 2493,
    "range": [
      2492,
      2493
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2493,
    "end": 2494,
    "range": [
      2493,
      2494
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 2494,
    "end": 2502,
    "range": [
      2494,
      2502
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2502,
    "end": 2503,
    "range": [
      2502,
      2503
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2503,
    "end": 2504,
    "range": [
      2503,
      2504
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2504,
    "end": 2505,
    "range": [
      2504,
      2505
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 2506,
    "end": 2508,
    "range": [
      2506,
      2508
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2508,
    "end": 2509,
    "range": [
      2508,
      2509
    ]
  },
  {
    "type": "Identifier",
    "value": "ScriptTarget",
    "start": 2509,
    "end": 2521,
    "range": [
      2509,
      2521
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2521,
    "end": 2522,
    "range": [
      2521,
      2522
    ]
  },
  {
    "type": "Identifier",
    "value": "ES2015",
    "start": 2522,
    "end": 2528,
    "range": [
      2522,
      2528
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2528,
    "end": 2529,
    "range": [
      2528,
      2529
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2550,
    "end": 2554,
    "range": [
      2550,
      2554
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2554,
    "end": 2555,
    "range": [
      2554,
      2555
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2555,
    "end": 2556,
    "range": [
      2555,
      2556
    ]
  },
  {
    "type": "Identifier",
    "value": "delint",
    "start": 2579,
    "end": 2585,
    "range": [
      2579,
      2585
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2585,
    "end": 2586,
    "range": [
      2585,
      2586
    ]
  },
  {
    "type": "Identifier",
    "value": "sourceFile",
    "start": 2586,
    "end": 2596,
    "range": [
      2586,
      2596
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2596,
    "end": 2597,
    "range": [
      2596,
      2597
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2597,
    "end": 2598,
    "range": [
      2597,
      2598
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2599,
    "end": 2600,
    "range": [
      2599,
      2600
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2600,
    "end": 2601,
    "range": [
      2600,
      2601
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2601,
    "end": 2602,
    "range": [
      2601,
      2602
    ]
  }
]
```
