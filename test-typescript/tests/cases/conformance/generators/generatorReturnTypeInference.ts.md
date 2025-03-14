__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2756,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 57,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 56,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 56,
            "decorators": [],
            "name": "iterableIterator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 56,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 32,
                "end": 56,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 48,
                  "end": 56,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 49,
                      "end": 55
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 48,
                  "decorators": [],
                  "name": "IterableIterator",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 58,
      "end": 118,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 72,
          "end": 117,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 117,
            "decorators": [],
            "name": "generator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 81,
              "end": 117,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 83,
                "end": 117,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 92,
                  "end": 117,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 93,
                      "end": 99
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 101,
                      "end": 107
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 109,
                      "end": 116
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 92,
                  "decorators": [],
                  "name": "Generator",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 146,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 133,
          "end": 145,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 145,
            "decorators": [],
            "name": "never",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 138,
              "end": 145,
              "typeAnnotation": {
                "type": "TSNeverKeyword",
                "start": 140,
                "end": 145
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 148,
      "end": 203,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 165,
        "end": 203,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 158,
        "end": 162,
        "decorators": [],
        "name": "g000",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 241,
      "end": 311,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 258,
        "end": 311,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 303,
            "end": 309,
            "expression": {
              "type": "YieldExpression",
              "start": 303,
              "end": 308,
              "argument": null,
              "delegate": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 251,
        "end": 255,
        "decorators": [],
        "name": "g001",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 313,
      "end": 382,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 330,
        "end": 382,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 372,
            "end": 380,
            "expression": {
              "type": "YieldExpression",
              "start": 372,
              "end": 379,
              "argument": {
                "type": "Literal",
                "start": 378,
                "end": 379,
                "raw": "1",
                "value": 1
              },
              "delegate": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 323,
        "end": 327,
        "decorators": [],
        "name": "g002",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 384,
      "end": 456,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 401,
        "end": 456,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 444,
            "end": 454,
            "expression": {
              "type": "YieldExpression",
              "start": 444,
              "end": 453,
              "argument": {
                "type": "ArrayExpression",
                "start": 451,
                "end": 453,
                "elements": []
              },
              "delegate": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 394,
        "end": 398,
        "decorators": [],
        "name": "g003",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 458,
      "end": 545,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 475,
        "end": 545,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 519,
            "end": 543,
            "expression": {
              "type": "YieldExpression",
              "start": 519,
              "end": 542,
              "argument": {
                "type": "Identifier",
                "start": 526,
                "end": 542,
                "decorators": [],
                "name": "iterableIterator",
                "optional": false
              },
              "delegate": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 468,
        "end": 472,
        "decorators": [],
        "name": "g004",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 547,
      "end": 635,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 564,
        "end": 635,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 606,
            "end": 633,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 612,
                "end": 632,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 612,
                  "end": 613,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 616,
                  "end": 632,
                  "argument": {
                    "type": "Identifier",
                    "start": 623,
                    "end": 632,
                    "decorators": [],
                    "name": "generator",
                    "optional": false
                  },
                  "delegate": true
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 557,
        "end": 561,
        "decorators": [],
        "name": "g005",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 637,
      "end": 718,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 654,
        "end": 718,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 695,
            "end": 703,
            "expression": {
              "type": "YieldExpression",
              "start": 695,
              "end": 702,
              "argument": {
                "type": "Literal",
                "start": 701,
                "end": 702,
                "raw": "1",
                "value": 1
              },
              "delegate": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 708,
            "end": 716,
            "expression": {
              "type": "YieldExpression",
              "start": 708,
              "end": 715,
              "argument": {
                "type": "Literal",
                "start": 714,
                "end": 715,
                "raw": "2",
                "value": 2
              },
              "delegate": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 647,
        "end": 651,
        "decorators": [],
        "name": "g006",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 720,
      "end": 792,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 737,
        "end": 792,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 778,
            "end": 790,
            "expression": {
              "type": "YieldExpression",
              "start": 778,
              "end": 789,
              "argument": {
                "type": "Identifier",
                "start": 784,
                "end": 789,
                "decorators": [],
                "name": "never",
                "optional": false
              },
              "delegate": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 730,
        "end": 734,
        "decorators": [],
        "name": "g007",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 831,
      "end": 902,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 848,
        "end": 902,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 891,
            "end": 900,
            "argument": {
              "type": "Literal",
              "start": 898,
              "end": 899,
              "raw": "1",
              "value": 1
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 841,
        "end": 845,
        "decorators": [],
        "name": "g102",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 904,
      "end": 1007,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 921,
        "end": 1007,
        "body": [
          {
            "type": "IfStatement",
            "start": 963,
            "end": 991,
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "start": 982,
              "end": 991,
              "argument": {
                "type": "Literal",
                "start": 989,
                "end": 990,
                "raw": "1",
                "value": 1
              }
            },
            "test": {
              "type": "CallExpression",
              "start": 967,
              "end": 980,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 967,
                "end": 978,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 967,
                  "end": 971,
                  "decorators": [],
                  "name": "Math",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 972,
                  "end": 978,
                  "decorators": [],
                  "name": "random",
                  "optional": false
                }
              },
              "optional": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 996,
            "end": 1005,
            "argument": {
              "type": "Literal",
              "start": 1003,
              "end": 1004,
              "raw": "2",
              "value": 2
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 914,
        "end": 918,
        "decorators": [],
        "name": "g103",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1009,
      "end": 1083,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1026,
        "end": 1083,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1068,
            "end": 1081,
            "argument": {
              "type": "Identifier",
              "start": 1075,
              "end": 1080,
              "decorators": [],
              "name": "never",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 1019,
        "end": 1023,
        "decorators": [],
        "name": "g104",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1120,
      "end": 1204,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1137,
        "end": 1204,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1178,
            "end": 1202,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1182,
                "end": 1201,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1182,
                  "end": 1191,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1183,
                    "end": 1191,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1185,
                      "end": 1191
                    }
                  }
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 1194,
                  "end": 1201,
                  "argument": {
                    "type": "Literal",
                    "start": 1200,
                    "end": 1201,
                    "raw": "1",
                    "value": 1
                  },
                  "delegate": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 1130,
        "end": 1134,
        "decorators": [],
        "name": "g201",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1206,
      "end": 1317,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1223,
        "end": 1317,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1262,
            "end": 1286,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1266,
                "end": 1285,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1266,
                  "end": 1275,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1267,
                    "end": 1275,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1269,
                      "end": 1275
                    }
                  }
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 1278,
                  "end": 1285,
                  "argument": {
                    "type": "Literal",
                    "start": 1284,
                    "end": 1285,
                    "raw": "1",
                    "value": 1
                  },
                  "delegate": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 1291,
            "end": 1315,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1295,
                "end": 1314,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1295,
                  "end": 1304,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1296,
                    "end": 1304,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1298,
                      "end": 1304
                    }
                  }
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 1307,
                  "end": 1314,
                  "argument": {
                    "type": "Literal",
                    "start": 1313,
                    "end": 1314,
                    "raw": "2",
                    "value": 2
                  },
                  "delegate": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 1216,
        "end": 1220,
        "decorators": [],
        "name": "g202",
        "optional": false
      },
      "params": []
    },
    {
      "type": "TSDeclareFunction",
      "start": 1319,
      "end": 1356,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1336,
        "end": 1338,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1339,
          "end": 1348,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1340,
            "end": 1348,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1342,
              "end": 1348
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1349,
        "end": 1355,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1351,
          "end": 1355
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1357,
      "end": 1394,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1374,
        "end": 1376,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1377,
          "end": 1386,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1378,
            "end": 1386,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1380,
              "end": 1386
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1387,
        "end": 1393,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1389,
          "end": 1393
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1396,
      "end": 1475,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1413,
        "end": 1475,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1451,
            "end": 1473,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1457,
                "end": 1472,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1457,
                  "end": 1458,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1461,
                  "end": 1472,
                  "arguments": [
                    {
                      "type": "YieldExpression",
                      "start": 1464,
                      "end": 1471,
                      "argument": {
                        "type": "Literal",
                        "start": 1470,
                        "end": 1471,
                        "raw": "1",
                        "value": 1
                      },
                      "delegate": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1461,
                    "end": 1463,
                    "decorators": [],
                    "name": "f1",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 1406,
        "end": 1410,
        "decorators": [],
        "name": "g203",
        "optional": false
      },
      "params": []
    },
    {
      "type": "TSDeclareFunction",
      "start": 1477,
      "end": 1509,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1494,
        "end": 1496,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1500,
          "end": 1504,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1501,
            "end": 1504,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1503,
              "end": 1504,
              "typeName": {
                "type": "Identifier",
                "start": 1503,
                "end": 1504,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1505,
        "end": 1508,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1507,
          "end": 1508,
          "typeName": {
            "type": "Identifier",
            "start": 1507,
            "end": 1508,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1496,
        "end": 1499,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1497,
            "end": 1498,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1497,
              "end": 1498,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1511,
      "end": 1587,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1528,
        "end": 1587,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1563,
            "end": 1585,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1569,
                "end": 1584,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1569,
                  "end": 1570,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1573,
                  "end": 1584,
                  "arguments": [
                    {
                      "type": "YieldExpression",
                      "start": 1576,
                      "end": 1583,
                      "argument": {
                        "type": "Literal",
                        "start": 1582,
                        "end": 1583,
                        "raw": "1",
                        "value": 1
                      },
                      "delegate": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1573,
                    "end": 1575,
                    "decorators": [],
                    "name": "f2",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 1521,
        "end": 1525,
        "decorators": [],
        "name": "g204",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1625,
      "end": 1707,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1642,
        "end": 1707,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1687,
            "end": 1693,
            "expression": {
              "type": "YieldExpression",
              "start": 1687,
              "end": 1692,
              "argument": null,
              "delegate": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 1698,
            "end": 1705,
            "argument": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 1635,
        "end": 1639,
        "decorators": [],
        "name": "g301",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1709,
      "end": 1790,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1726,
        "end": 1790,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1768,
            "end": 1776,
            "expression": {
              "type": "YieldExpression",
              "start": 1768,
              "end": 1775,
              "argument": {
                "type": "Literal",
                "start": 1774,
                "end": 1775,
                "raw": "1",
                "value": 1
              },
              "delegate": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 1781,
            "end": 1788,
            "argument": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 1719,
        "end": 1723,
        "decorators": [],
        "name": "g302",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1792,
      "end": 1880,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1809,
        "end": 1880,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1856,
            "end": 1862,
            "expression": {
              "type": "YieldExpression",
              "start": 1856,
              "end": 1861,
              "argument": null,
              "delegate": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 1867,
            "end": 1878,
            "argument": {
              "type": "Literal",
              "start": 1874,
              "end": 1877,
              "raw": "\"a\"",
              "value": "a"
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 1802,
        "end": 1806,
        "decorators": [],
        "name": "g303",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1882,
      "end": 1969,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1899,
        "end": 1969,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1943,
            "end": 1951,
            "expression": {
              "type": "YieldExpression",
              "start": 1943,
              "end": 1950,
              "argument": {
                "type": "Literal",
                "start": 1949,
                "end": 1950,
                "raw": "1",
                "value": 1
              },
              "delegate": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 1956,
            "end": 1967,
            "argument": {
              "type": "Literal",
              "start": 1963,
              "end": 1966,
              "raw": "\"a\"",
              "value": "a"
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 1892,
        "end": 1896,
        "decorators": [],
        "name": "g304",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1971,
      "end": 2127,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1988,
        "end": 2127,
        "body": [
          {
            "type": "IfStatement",
            "start": 2034,
            "end": 2061,
            "alternate": null,
            "consequent": {
              "type": "ExpressionStatement",
              "start": 2053,
              "end": 2061,
              "expression": {
                "type": "YieldExpression",
                "start": 2053,
                "end": 2060,
                "argument": {
                  "type": "Literal",
                  "start": 2059,
                  "end": 2060,
                  "raw": "1",
                  "value": 1
                },
                "delegate": false
              }
            },
            "test": {
              "type": "CallExpression",
              "start": 2038,
              "end": 2051,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 2038,
                "end": 2049,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2038,
                  "end": 2042,
                  "decorators": [],
                  "name": "Math",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2043,
                  "end": 2049,
                  "decorators": [],
                  "name": "random",
                  "optional": false
                }
              },
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2066,
            "end": 2074,
            "expression": {
              "type": "YieldExpression",
              "start": 2066,
              "end": 2073,
              "argument": {
                "type": "Literal",
                "start": 2072,
                "end": 2073,
                "raw": "2",
                "value": 2
              },
              "delegate": false
            }
          },
          {
            "type": "IfStatement",
            "start": 2079,
            "end": 2109,
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "start": 2098,
              "end": 2109,
              "argument": {
                "type": "Literal",
                "start": 2105,
                "end": 2108,
                "raw": "\"a\"",
                "value": "a"
              }
            },
            "test": {
              "type": "CallExpression",
              "start": 2083,
              "end": 2096,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 2083,
                "end": 2094,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2083,
                  "end": 2087,
                  "decorators": [],
                  "name": "Math",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2088,
                  "end": 2094,
                  "decorators": [],
                  "name": "random",
                  "optional": false
                }
              },
              "optional": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 2114,
            "end": 2125,
            "argument": {
              "type": "Literal",
              "start": 2121,
              "end": 2124,
              "raw": "\"b\"",
              "value": "b"
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 1981,
        "end": 1985,
        "decorators": [],
        "name": "g305",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 2129,
      "end": 2231,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2146,
        "end": 2231,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2188,
            "end": 2212,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2194,
                "end": 2211,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2194,
                  "end": 2201,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2195,
                    "end": 2201,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 2197,
                      "end": 2201,
                      "literal": {
                        "type": "Literal",
                        "start": 2197,
                        "end": 2201,
                        "raw": "\"hi\"",
                        "value": "hi"
                      }
                    }
                  }
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 2204,
                  "end": 2211,
                  "argument": {
                    "type": "Literal",
                    "start": 2210,
                    "end": 2211,
                    "raw": "1",
                    "value": 1
                  },
                  "delegate": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ReturnStatement",
            "start": 2217,
            "end": 2229,
            "argument": {
              "type": "Literal",
              "start": 2224,
              "end": 2228,
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 2139,
        "end": 2143,
        "decorators": [],
        "name": "g306",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 2233,
      "end": 2323,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2253,
        "end": 2323,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2286,
            "end": 2307,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2292,
                "end": 2306,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2292,
                  "end": 2296,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2293,
                    "end": 2296,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2295,
                      "end": 2296,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2295,
                        "end": 2296,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 2299,
                  "end": 2306,
                  "argument": {
                    "type": "Literal",
                    "start": 2305,
                    "end": 2306,
                    "raw": "0",
                    "value": 0
                  },
                  "delegate": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ReturnStatement",
            "start": 2312,
            "end": 2321,
            "argument": {
              "type": "Identifier",
              "start": 2319,
              "end": 2320,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 2243,
        "end": 2247,
        "decorators": [],
        "name": "g307",
        "optional": false
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2247,
        "end": 2250,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2248,
            "end": 2249,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2248,
              "end": 2249,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2325,
      "end": 2414,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2349,
        "end": 2414,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2377,
            "end": 2398,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2383,
                "end": 2397,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2383,
                  "end": 2387,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2384,
                    "end": 2387,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2386,
                      "end": 2387,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2386,
                        "end": 2387,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 2390,
                  "end": 2397,
                  "argument": {
                    "type": "Identifier",
                    "start": 2396,
                    "end": 2397,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "delegate": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ReturnStatement",
            "start": 2403,
            "end": 2412,
            "argument": {
              "type": "Identifier",
              "start": 2410,
              "end": 2411,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 2335,
        "end": 2339,
        "decorators": [],
        "name": "g308",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2343,
          "end": 2347,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2344,
            "end": 2347,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2346,
              "end": 2347,
              "typeName": {
                "type": "Identifier",
                "start": 2346,
                "end": 2347,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2339,
        "end": 2342,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2340,
            "end": 2341,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2340,
              "end": 2341,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2416,
      "end": 2517,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2452,
        "end": 2517,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2480,
            "end": 2501,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2486,
                "end": 2500,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2486,
                  "end": 2490,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2487,
                    "end": 2490,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2489,
                      "end": 2490,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2489,
                        "end": 2490,
                        "decorators": [],
                        "name": "V",
                        "optional": false
                      }
                    }
                  }
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 2493,
                  "end": 2500,
                  "argument": {
                    "type": "Identifier",
                    "start": 2499,
                    "end": 2500,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "delegate": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ReturnStatement",
            "start": 2506,
            "end": 2515,
            "argument": {
              "type": "Identifier",
              "start": 2513,
              "end": 2514,
              "decorators": [],
              "name": "y",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 2426,
        "end": 2430,
        "decorators": [],
        "name": "g309",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2440,
          "end": 2444,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2441,
            "end": 2444,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2443,
              "end": 2444,
              "typeName": {
                "type": "Identifier",
                "start": 2443,
                "end": 2444,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2446,
          "end": 2450,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2447,
            "end": 2450,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2449,
              "end": 2450,
              "typeName": {
                "type": "Identifier",
                "start": 2449,
                "end": 2450,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2430,
        "end": 2439,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2431,
            "end": 2432,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2431,
              "end": 2432,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2434,
            "end": 2435,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2434,
              "end": 2435,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2437,
            "end": 2438,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2437,
              "end": 2438,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2519,
      "end": 2638,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2536,
        "end": 2638,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2607,
            "end": 2636,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2613,
                "end": 2635,
                "definite": false,
                "id": {
                  "type": "ArrayPattern",
                  "start": 2613,
                  "end": 2627,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "start": 2614,
                      "end": 2619,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 2614,
                        "end": 2615,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "start": 2618,
                        "end": 2619,
                        "raw": "1",
                        "value": 1
                      }
                    },
                    {
                      "type": "AssignmentPattern",
                      "start": 2621,
                      "end": 2626,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 2621,
                        "end": 2622,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "start": 2625,
                        "end": 2626,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  ],
                  "optional": false
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 2630,
                  "end": 2635,
                  "argument": null,
                  "delegate": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 2529,
        "end": 2533,
        "decorators": [],
        "name": "g310",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 2640,
      "end": 2755,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2657,
        "end": 2755,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2698,
            "end": 2753,
            "expression": {
              "type": "YieldExpression",
              "start": 2698,
              "end": 2752,
              "argument": {
                "type": "CallExpression",
                "start": 2705,
                "end": 2752,
                "arguments": [],
                "callee": {
                  "type": "FunctionExpression",
                  "start": 2706,
                  "end": 2749,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 2718,
                    "end": 2749,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 2722,
                        "end": 2746,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 2728,
                            "end": 2745,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 2728,
                              "end": 2737,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 2729,
                                "end": 2737,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 2731,
                                  "end": 2737
                                }
                              }
                            },
                            "init": {
                              "type": "YieldExpression",
                              "start": 2740,
                              "end": 2745,
                              "argument": null,
                              "delegate": false
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const"
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": []
                },
                "optional": false
              },
              "delegate": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 2650,
        "end": 2654,
        "decorators": [],
        "name": "g311",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
