APISample_linter.ts
```json
{
  "type": "Program",
  "start": 299,
  "end": 2603,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 299,
      "end": 324,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 311,
          "end": 323,
          "definite": false,
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
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 325,
      "end": 350,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 337,
          "end": 349,
          "definite": false,
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
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 351,
      "end": 381,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 363,
          "end": 380,
          "definite": false,
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
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ImportDeclaration",
      "start": 383,
      "end": 416,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 403,
        "end": 415,
        "raw": "\"typescript\"",
        "value": "typescript"
      },
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
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 418,
      "end": 2315,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 425,
        "end": 2315,
        "async": false,
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
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 485,
                    "end": 495,
                    "decorators": [],
                    "name": "sourceFile",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 474,
                  "end": 484,
                  "decorators": [],
                  "name": "delintNode",
                  "optional": false
                },
                "optional": false
              }
            },
            {
              "type": "FunctionDeclaration",
              "start": 503,
              "end": 2069,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 538,
                "end": 2069,
                "body": [
                  {
                    "type": "SwitchStatement",
                    "start": 548,
                    "end": 2019,
                    "cases": [
                      {
                        "type": "SwitchCase",
                        "start": 581,
                        "end": 613,
                        "consequent": [],
                        "test": {
                          "type": "MemberExpression",
                          "start": 586,
                          "end": 612,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 586,
                            "end": 599,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 586,
                              "end": 588,
                              "decorators": [],
                              "name": "ts",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 589,
                              "end": 599,
                              "decorators": [],
                              "name": "SyntaxKind",
                              "optional": false
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 600,
                            "end": 612,
                            "decorators": [],
                            "name": "ForStatement",
                            "optional": false
                          }
                        }
                      },
                      {
                        "type": "SwitchCase",
                        "start": 626,
                        "end": 660,
                        "consequent": [],
                        "test": {
                          "type": "MemberExpression",
                          "start": 631,
                          "end": 659,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 631,
                            "end": 644,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 631,
                              "end": 633,
                              "decorators": [],
                              "name": "ts",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 634,
                              "end": 644,
                              "decorators": [],
                              "name": "SyntaxKind",
                              "optional": false
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 645,
                            "end": 659,
                            "decorators": [],
                            "name": "ForInStatement",
                            "optional": false
                          }
                        }
                      },
                      {
                        "type": "SwitchCase",
                        "start": 673,
                        "end": 707,
                        "consequent": [],
                        "test": {
                          "type": "MemberExpression",
                          "start": 678,
                          "end": 706,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 678,
                            "end": 691,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 678,
                              "end": 680,
                              "decorators": [],
                              "name": "ts",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 681,
                              "end": 691,
                              "decorators": [],
                              "name": "SyntaxKind",
                              "optional": false
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 692,
                            "end": 706,
                            "decorators": [],
                            "name": "WhileStatement",
                            "optional": false
                          }
                        }
                      },
                      {
                        "type": "SwitchCase",
                        "start": 720,
                        "end": 987,
                        "consequent": [
                          {
                            "type": "IfStatement",
                            "start": 768,
                            "end": 964,
                            "alternate": null,
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
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 871,
                                        "end": 875,
                                        "decorators": [],
                                        "name": "node",
                                        "optional": false
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 877,
                                        "end": 944,
                                        "raw": "\"A looping statement's contents should be wrapped in a block body.\"",
                                        "value": "A looping statement's contents should be wrapped in a block body."
                                      }
                                    ],
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 864,
                                      "end": 870,
                                      "decorators": [],
                                      "name": "report",
                                      "optional": false
                                    },
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "test": {
                              "type": "BinaryExpression",
                              "start": 772,
                              "end": 840,
                              "operator": "!==",
                              "left": {
                                "type": "MemberExpression",
                                "start": 772,
                                "end": 816,
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 772,
                                  "end": 811,
                                  "computed": false,
                                  "object": {
                                    "type": "TSTypeAssertion",
                                    "start": 773,
                                    "end": 800,
                                    "expression": {
                                      "type": "Identifier",
                                      "start": 796,
                                      "end": 800,
                                      "decorators": [],
                                      "name": "node",
                                      "optional": false
                                    },
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
                                          "optional": false
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "start": 777,
                                          "end": 795,
                                          "decorators": [],
                                          "name": "IterationStatement",
                                          "optional": false
                                        }
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 802,
                                    "end": 811,
                                    "decorators": [],
                                    "name": "statement",
                                    "optional": false
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 812,
                                  "end": 816,
                                  "decorators": [],
                                  "name": "kind",
                                  "optional": false
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "start": 821,
                                "end": 840,
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 821,
                                  "end": 834,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 821,
                                    "end": 823,
                                    "decorators": [],
                                    "name": "ts",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 824,
                                    "end": 834,
                                    "decorators": [],
                                    "name": "SyntaxKind",
                                    "optional": false
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 835,
                                  "end": 840,
                                  "decorators": [],
                                  "name": "Block",
                                  "optional": false
                                }
                              }
                            }
                          },
                          {
                            "type": "BreakStatement",
                            "start": 981,
                            "end": 987,
                            "label": null
                          }
                        ],
                        "test": {
                          "type": "MemberExpression",
                          "start": 725,
                          "end": 750,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 725,
                            "end": 738,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 725,
                              "end": 727,
                              "decorators": [],
                              "name": "ts",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 728,
                              "end": 738,
                              "decorators": [],
                              "name": "SyntaxKind",
                              "optional": false
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 739,
                            "end": 750,
                            "decorators": [],
                            "name": "DoStatement",
                            "optional": false
                          }
                        }
                      },
                      {
                        "type": "SwitchCase",
                        "start": 1001,
                        "end": 1680,
                        "consequent": [
                          {
                            "type": "VariableDeclaration",
                            "start": 1049,
                            "end": 1090,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 1053,
                                "end": 1089,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 1053,
                                  "end": 1064,
                                  "decorators": [],
                                  "name": "ifStatement",
                                  "optional": false
                                },
                                "init": {
                                  "type": "TSTypeAssertion",
                                  "start": 1068,
                                  "end": 1088,
                                  "expression": {
                                    "type": "Identifier",
                                    "start": 1084,
                                    "end": 1088,
                                    "decorators": [],
                                    "name": "node",
                                    "optional": false
                                  },
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
                                        "optional": false
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 1072,
                                        "end": 1083,
                                        "decorators": [],
                                        "name": "IfStatement",
                                        "optional": false
                                      }
                                    }
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "let"
                          },
                          {
                            "type": "IfStatement",
                            "start": 1107,
                            "end": 1306,
                            "alternate": null,
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
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "start": 1196,
                                        "end": 1221,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 1196,
                                          "end": 1207,
                                          "decorators": [],
                                          "name": "ifStatement",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 1208,
                                          "end": 1221,
                                          "decorators": [],
                                          "name": "thenStatement",
                                          "optional": false
                                        }
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 1223,
                                        "end": 1286,
                                        "raw": "\"An if statement's contents should be wrapped in a block body.\"",
                                        "value": "An if statement's contents should be wrapped in a block body."
                                      }
                                    ],
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 1189,
                                      "end": 1195,
                                      "decorators": [],
                                      "name": "report",
                                      "optional": false
                                    },
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "test": {
                              "type": "BinaryExpression",
                              "start": 1111,
                              "end": 1165,
                              "operator": "!==",
                              "left": {
                                "type": "MemberExpression",
                                "start": 1111,
                                "end": 1141,
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 1111,
                                  "end": 1136,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 1111,
                                    "end": 1122,
                                    "decorators": [],
                                    "name": "ifStatement",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1123,
                                    "end": 1136,
                                    "decorators": [],
                                    "name": "thenStatement",
                                    "optional": false
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1137,
                                  "end": 1141,
                                  "decorators": [],
                                  "name": "kind",
                                  "optional": false
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "start": 1146,
                                "end": 1165,
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 1146,
                                  "end": 1159,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 1146,
                                    "end": 1148,
                                    "decorators": [],
                                    "name": "ts",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1149,
                                    "end": 1159,
                                    "decorators": [],
                                    "name": "SyntaxKind",
                                    "optional": false
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1160,
                                  "end": 1165,
                                  "decorators": [],
                                  "name": "Block",
                                  "optional": false
                                }
                              }
                            }
                          },
                          {
                            "type": "IfStatement",
                            "start": 1323,
                            "end": 1657,
                            "alternate": null,
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
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "start": 1545,
                                        "end": 1570,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 1545,
                                          "end": 1556,
                                          "decorators": [],
                                          "name": "ifStatement",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 1557,
                                          "end": 1570,
                                          "decorators": [],
                                          "name": "elseStatement",
                                          "optional": false
                                        }
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 1572,
                                        "end": 1637,
                                        "raw": "\"An else statement's contents should be wrapped in a block body.\"",
                                        "value": "An else statement's contents should be wrapped in a block body."
                                      }
                                    ],
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 1538,
                                      "end": 1544,
                                      "decorators": [],
                                      "name": "report",
                                      "optional": false
                                    },
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "test": {
                              "type": "LogicalExpression",
                              "start": 1327,
                              "end": 1514,
                              "operator": "&&",
                              "left": {
                                "type": "LogicalExpression",
                                "start": 1327,
                                "end": 1430,
                                "operator": "&&",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 1327,
                                  "end": 1352,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 1327,
                                    "end": 1338,
                                    "decorators": [],
                                    "name": "ifStatement",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1339,
                                    "end": 1352,
                                    "decorators": [],
                                    "name": "elseStatement",
                                    "optional": false
                                  }
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "start": 1376,
                                  "end": 1430,
                                  "operator": "!==",
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 1376,
                                    "end": 1406,
                                    "computed": false,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 1376,
                                      "end": 1401,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 1376,
                                        "end": 1387,
                                        "decorators": [],
                                        "name": "ifStatement",
                                        "optional": false
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 1388,
                                        "end": 1401,
                                        "decorators": [],
                                        "name": "elseStatement",
                                        "optional": false
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1402,
                                      "end": 1406,
                                      "decorators": [],
                                      "name": "kind",
                                      "optional": false
                                    }
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "start": 1411,
                                    "end": 1430,
                                    "computed": false,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 1411,
                                      "end": 1424,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 1411,
                                        "end": 1413,
                                        "decorators": [],
                                        "name": "ts",
                                        "optional": false
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 1414,
                                        "end": 1424,
                                        "decorators": [],
                                        "name": "SyntaxKind",
                                        "optional": false
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1425,
                                      "end": 1430,
                                      "decorators": [],
                                      "name": "Block",
                                      "optional": false
                                    }
                                  }
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "start": 1454,
                                "end": 1514,
                                "operator": "!==",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 1454,
                                  "end": 1484,
                                  "computed": false,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 1454,
                                    "end": 1479,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 1454,
                                      "end": 1465,
                                      "decorators": [],
                                      "name": "ifStatement",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1466,
                                      "end": 1479,
                                      "decorators": [],
                                      "name": "elseStatement",
                                      "optional": false
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1480,
                                    "end": 1484,
                                    "decorators": [],
                                    "name": "kind",
                                    "optional": false
                                  }
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "start": 1489,
                                  "end": 1514,
                                  "computed": false,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 1489,
                                    "end": 1502,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 1489,
                                      "end": 1491,
                                      "decorators": [],
                                      "name": "ts",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1492,
                                      "end": 1502,
                                      "decorators": [],
                                      "name": "SyntaxKind",
                                      "optional": false
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1503,
                                    "end": 1514,
                                    "decorators": [],
                                    "name": "IfStatement",
                                    "optional": false
                                  }
                                }
                              }
                            }
                          },
                          {
                            "type": "BreakStatement",
                            "start": 1674,
                            "end": 1680,
                            "label": null
                          }
                        ],
                        "test": {
                          "type": "MemberExpression",
                          "start": 1006,
                          "end": 1031,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 1006,
                            "end": 1019,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 1006,
                              "end": 1008,
                              "decorators": [],
                              "name": "ts",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1009,
                              "end": 1019,
                              "decorators": [],
                              "name": "SyntaxKind",
                              "optional": false
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1020,
                            "end": 1031,
                            "decorators": [],
                            "name": "IfStatement",
                            "optional": false
                          }
                        }
                      },
                      {
                        "type": "SwitchCase",
                        "start": 1694,
                        "end": 2009,
                        "consequent": [
                          {
                            "type": "VariableDeclaration",
                            "start": 1747,
                            "end": 1803,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 1751,
                                "end": 1802,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 1751,
                                  "end": 1753,
                                  "decorators": [],
                                  "name": "op",
                                  "optional": false
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "start": 1756,
                                  "end": 1802,
                                  "computed": false,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 1756,
                                    "end": 1797,
                                    "computed": false,
                                    "object": {
                                      "type": "TSTypeAssertion",
                                      "start": 1757,
                                      "end": 1782,
                                      "expression": {
                                        "type": "Identifier",
                                        "start": 1778,
                                        "end": 1782,
                                        "decorators": [],
                                        "name": "node",
                                        "optional": false
                                      },
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
                                            "optional": false
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "start": 1761,
                                            "end": 1777,
                                            "decorators": [],
                                            "name": "BinaryExpression",
                                            "optional": false
                                          }
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1784,
                                      "end": 1797,
                                      "decorators": [],
                                      "name": "operatorToken",
                                      "optional": false
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1798,
                                    "end": 1802,
                                    "decorators": [],
                                    "name": "kind",
                                    "optional": false
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "let"
                          },
                          {
                            "type": "IfStatement",
                            "start": 1820,
                            "end": 1986,
                            "alternate": null,
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
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 1939,
                                        "end": 1943,
                                        "decorators": [],
                                        "name": "node",
                                        "optional": false
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 1945,
                                        "end": 1967,
                                        "raw": "\"Use '===' and '!=='.\"",
                                        "value": "Use '===' and '!=='."
                                      }
                                    ],
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 1932,
                                      "end": 1938,
                                      "decorators": [],
                                      "name": "report",
                                      "optional": false
                                    },
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "test": {
                              "type": "LogicalExpression",
                              "start": 1824,
                              "end": 1908,
                              "operator": "||",
                              "left": {
                                "type": "BinaryExpression",
                                "start": 1824,
                                "end": 1862,
                                "operator": "===",
                                "left": {
                                  "type": "Identifier",
                                  "start": 1824,
                                  "end": 1826,
                                  "decorators": [],
                                  "name": "op",
                                  "optional": false
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "start": 1831,
                                  "end": 1862,
                                  "computed": false,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 1831,
                                    "end": 1844,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 1831,
                                      "end": 1833,
                                      "decorators": [],
                                      "name": "ts",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1834,
                                      "end": 1844,
                                      "decorators": [],
                                      "name": "SyntaxKind",
                                      "optional": false
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1845,
                                    "end": 1862,
                                    "decorators": [],
                                    "name": "EqualsEqualsToken",
                                    "optional": false
                                  }
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "start": 1866,
                                "end": 1908,
                                "operator": "==",
                                "left": {
                                  "type": "Identifier",
                                  "start": 1866,
                                  "end": 1868,
                                  "decorators": [],
                                  "name": "op",
                                  "optional": false
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "start": 1872,
                                  "end": 1908,
                                  "computed": false,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 1872,
                                    "end": 1885,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 1872,
                                      "end": 1874,
                                      "decorators": [],
                                      "name": "ts",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1875,
                                      "end": 1885,
                                      "decorators": [],
                                      "name": "SyntaxKind",
                                      "optional": false
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1886,
                                    "end": 1908,
                                    "decorators": [],
                                    "name": "ExclamationEqualsToken",
                                    "optional": false
                                  }
                                }
                              }
                            }
                          },
                          {
                            "type": "BreakStatement",
                            "start": 2003,
                            "end": 2009,
                            "label": null
                          }
                        ],
                        "test": {
                          "type": "MemberExpression",
                          "start": 1699,
                          "end": 1729,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 1699,
                            "end": 1712,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 1699,
                              "end": 1701,
                              "decorators": [],
                              "name": "ts",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1702,
                              "end": 1712,
                              "decorators": [],
                              "name": "SyntaxKind",
                              "optional": false
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1713,
                            "end": 1729,
                            "decorators": [],
                            "name": "BinaryExpression",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "discriminant": {
                      "type": "MemberExpression",
                      "start": 556,
                      "end": 565,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 556,
                        "end": 560,
                        "decorators": [],
                        "name": "node",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 561,
                        "end": 565,
                        "decorators": [],
                        "name": "kind",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2029,
                    "end": 2063,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2029,
                      "end": 2062,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 2045,
                          "end": 2049,
                          "decorators": [],
                          "name": "node",
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 2051,
                          "end": 2061,
                          "decorators": [],
                          "name": "delintNode",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2029,
                        "end": 2044,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 2029,
                          "end": 2031,
                          "decorators": [],
                          "name": "ts",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 2032,
                          "end": 2044,
                          "decorators": [],
                          "name": "forEachChild",
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
              "id": {
                "type": "Identifier",
                "start": 512,
                "end": 522,
                "decorators": [],
                "name": "delintNode",
                "optional": false
              },
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
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 532,
                          "end": 536,
                          "decorators": [],
                          "name": "Node",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              ]
            },
            {
              "type": "FunctionDeclaration",
              "start": 2075,
              "end": 2313,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2123,
                "end": 2313,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 2133,
                    "end": 2217,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2137,
                        "end": 2216,
                        "definite": false,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 2137,
                          "end": 2156,
                          "decorators": [],
                          "optional": false,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 2139,
                              "end": 2143,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 2139,
                                "end": 2143,
                                "decorators": [],
                                "name": "line",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": true,
                              "value": {
                                "type": "Identifier",
                                "start": 2139,
                                "end": 2143,
                                "decorators": [],
                                "name": "line",
                                "optional": false
                              }
                            },
                            {
                              "type": "Property",
                              "start": 2145,
                              "end": 2154,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 2145,
                                "end": 2154,
                                "decorators": [],
                                "name": "character",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": true,
                              "value": {
                                "type": "Identifier",
                                "start": 2145,
                                "end": 2154,
                                "decorators": [],
                                "name": "character",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 2159,
                          "end": 2216,
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "start": 2200,
                              "end": 2215,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 2200,
                                "end": 2213,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 2200,
                                  "end": 2204,
                                  "decorators": [],
                                  "name": "node",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 2205,
                                  "end": 2213,
                                  "decorators": [],
                                  "name": "getStart",
                                  "optional": false
                                }
                              },
                              "optional": false
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 2159,
                            "end": 2199,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 2159,
                              "end": 2169,
                              "decorators": [],
                              "name": "sourceFile",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 2170,
                              "end": 2199,
                              "decorators": [],
                              "name": "getLineAndCharacterOfPosition",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2226,
                    "end": 2307,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2226,
                      "end": 2306,
                      "arguments": [
                        {
                          "type": "TemplateLiteral",
                          "start": 2238,
                          "end": 2305,
                          "expressions": [
                            {
                              "type": "MemberExpression",
                              "start": 2241,
                              "end": 2260,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 2241,
                                "end": 2251,
                                "decorators": [],
                                "name": "sourceFile",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 2252,
                                "end": 2260,
                                "decorators": [],
                                "name": "fileName",
                                "optional": false
                              }
                            },
                            {
                              "type": "BinaryExpression",
                              "start": 2265,
                              "end": 2273,
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "start": 2265,
                                "end": 2269,
                                "decorators": [],
                                "name": "line",
                                "optional": false
                              },
                              "right": {
                                "type": "Literal",
                                "start": 2272,
                                "end": 2273,
                                "raw": "1",
                                "value": 1
                              }
                            },
                            {
                              "type": "BinaryExpression",
                              "start": 2277,
                              "end": 2290,
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "start": 2277,
                                "end": 2286,
                                "decorators": [],
                                "name": "character",
                                "optional": false
                              },
                              "right": {
                                "type": "Literal",
                                "start": 2289,
                                "end": 2290,
                                "raw": "1",
                                "value": 1
                              }
                            },
                            {
                              "type": "Identifier",
                              "start": 2296,
                              "end": 2303,
                              "decorators": [],
                              "name": "message",
                              "optional": false
                            }
                          ],
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "start": 2238,
                              "end": 2241,
                              "tail": false,
                              "value": {
                                "cooked": "",
                                "raw": ""
                              }
                            },
                            {
                              "type": "TemplateElement",
                              "start": 2260,
                              "end": 2265,
                              "tail": false,
                              "value": {
                                "cooked": " (",
                                "raw": " ("
                              }
                            },
                            {
                              "type": "TemplateElement",
                              "start": 2273,
                              "end": 2277,
                              "tail": false,
                              "value": {
                                "cooked": ",",
                                "raw": ","
                              }
                            },
                            {
                              "type": "TemplateElement",
                              "start": 2290,
                              "end": 2296,
                              "tail": false,
                              "value": {
                                "cooked": "): ",
                                "raw": "): "
                              }
                            },
                            {
                              "type": "TemplateElement",
                              "start": 2303,
                              "end": 2305,
                              "tail": true,
                              "value": {
                                "cooked": "",
                                "raw": ""
                              }
                            }
                          ]
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2226,
                        "end": 2237,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 2226,
                          "end": 2233,
                          "decorators": [],
                          "name": "console",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 2234,
                          "end": 2237,
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
              "id": {
                "type": "Identifier",
                "start": 2084,
                "end": 2090,
                "decorators": [],
                "name": "report",
                "optional": false
              },
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
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 2100,
                          "end": 2104,
                          "decorators": [],
                          "name": "Node",
                          "optional": false
                        }
                      }
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
              ]
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 434,
          "end": 440,
          "decorators": [],
          "name": "delint",
          "optional": false
        },
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
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 456,
                    "end": 466,
                    "decorators": [],
                    "name": "SourceFile",
                    "optional": false
                  }
                }
              }
            }
          }
        ]
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 2317,
      "end": 2367,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2323,
          "end": 2366,
          "definite": false,
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
            "arguments": [
              {
                "type": "Literal",
                "start": 2364,
                "end": 2365,
                "raw": "2",
                "value": 2
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 2345,
              "end": 2363,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 2345,
                "end": 2357,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2345,
                  "end": 2352,
                  "decorators": [],
                  "name": "process",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2353,
                  "end": 2357,
                  "decorators": [],
                  "name": "argv",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2358,
                "end": 2363,
                "decorators": [],
                "name": "slice",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 2368,
      "end": 2602,
      "expression": {
        "type": "CallExpression",
        "start": 2368,
        "end": 2601,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 2386,
            "end": 2600,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 2398,
              "end": 2600,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 2424,
                  "end": 2556,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2428,
                      "end": 2555,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 2428,
                        "end": 2438,
                        "decorators": [],
                        "name": "sourceFile",
                        "optional": false
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 2441,
                        "end": 2555,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 2461,
                            "end": 2469,
                            "decorators": [],
                            "name": "fileName",
                            "optional": false
                          },
                          {
                            "type": "CallExpression",
                            "start": 2471,
                            "end": 2504,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 2471,
                              "end": 2502,
                              "computed": false,
                              "object": {
                                "type": "CallExpression",
                                "start": 2471,
                                "end": 2493,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 2484,
                                    "end": 2492,
                                    "decorators": [],
                                    "name": "fileName",
                                    "optional": false
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 2471,
                                  "end": 2483,
                                  "decorators": [],
                                  "name": "readFileSync",
                                  "optional": false
                                },
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 2494,
                                "end": 2502,
                                "decorators": [],
                                "name": "toString",
                                "optional": false
                              }
                            },
                            "optional": false
                          },
                          {
                            "type": "MemberExpression",
                            "start": 2506,
                            "end": 2528,
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "start": 2506,
                              "end": 2521,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 2506,
                                "end": 2508,
                                "decorators": [],
                                "name": "ts",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 2509,
                                "end": 2521,
                                "decorators": [],
                                "name": "ScriptTarget",
                                "optional": false
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 2522,
                              "end": 2528,
                              "decorators": [],
                              "name": "ES2015",
                              "optional": false
                            }
                          },
                          {
                            "type": "Literal",
                            "start": 2550,
                            "end": 2554,
                            "raw": "true",
                            "value": true
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 2441,
                          "end": 2460,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 2441,
                            "end": 2443,
                            "decorators": [],
                            "name": "ts",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 2444,
                            "end": 2460,
                            "decorators": [],
                            "name": "createSourceFile",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2579,
                  "end": 2598,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2579,
                    "end": 2597,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 2586,
                        "end": 2596,
                        "decorators": [],
                        "name": "sourceFile",
                        "optional": false
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 2579,
                      "end": 2585,
                      "decorators": [],
                      "name": "delint",
                      "optional": false
                    },
                    "optional": false
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 2386,
                "end": 2394,
                "decorators": [],
                "name": "fileName",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 2368,
          "end": 2385,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 2368,
            "end": 2377,
            "decorators": [],
            "name": "fileNames",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 2378,
            "end": 2385,
            "decorators": [],
            "name": "forEach",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
