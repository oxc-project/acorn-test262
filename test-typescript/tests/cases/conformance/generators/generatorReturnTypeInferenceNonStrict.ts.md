__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2946,
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
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 56,
            "name": "iterableIterator",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 56,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 32,
                "end": 56,
                "typeName": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 48,
                  "name": "IterableIterator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 117,
            "name": "generator",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 81,
              "end": 117,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 83,
                "end": 117,
                "typeName": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 92,
                  "name": "Generator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 145,
            "name": "never",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 138,
              "end": 145,
              "typeAnnotation": {
                "type": "TSNeverKeyword",
                "start": 140,
                "end": 145
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 148,
      "end": 203,
      "id": {
        "type": "Identifier",
        "start": 158,
        "end": 162,
        "name": "g000",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 165,
        "end": 203,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 241,
      "end": 316,
      "id": {
        "type": "Identifier",
        "start": 251,
        "end": 255,
        "name": "g001",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 258,
        "end": 316,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 308,
            "end": 314,
            "expression": {
              "type": "YieldExpression",
              "start": 308,
              "end": 313,
              "delegate": false,
              "argument": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 318,
      "end": 387,
      "id": {
        "type": "Identifier",
        "start": 328,
        "end": 332,
        "name": "g002",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 335,
        "end": 387,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 377,
            "end": 385,
            "expression": {
              "type": "YieldExpression",
              "start": 377,
              "end": 384,
              "delegate": false,
              "argument": {
                "type": "Literal",
                "start": 383,
                "end": 384,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 389,
      "end": 626,
      "id": {
        "type": "Identifier",
        "start": 399,
        "end": 403,
        "name": "g003",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 406,
        "end": 626,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 614,
            "end": 624,
            "expression": {
              "type": "YieldExpression",
              "start": 614,
              "end": 623,
              "delegate": true,
              "argument": {
                "type": "ArrayExpression",
                "start": 621,
                "end": 623,
                "elements": []
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 628,
      "end": 715,
      "id": {
        "type": "Identifier",
        "start": 638,
        "end": 642,
        "name": "g004",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 645,
        "end": 715,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 689,
            "end": 713,
            "expression": {
              "type": "YieldExpression",
              "start": 689,
              "end": 712,
              "delegate": true,
              "argument": {
                "type": "Identifier",
                "start": 696,
                "end": 712,
                "name": "iterableIterator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 717,
      "end": 805,
      "id": {
        "type": "Identifier",
        "start": 727,
        "end": 731,
        "name": "g005",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 734,
        "end": 805,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 776,
            "end": 803,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 782,
                "end": 802,
                "id": {
                  "type": "Identifier",
                  "start": 782,
                  "end": 783,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 786,
                  "end": 802,
                  "delegate": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 793,
                    "end": 802,
                    "name": "generator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 807,
      "end": 888,
      "id": {
        "type": "Identifier",
        "start": 817,
        "end": 821,
        "name": "g006",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 824,
        "end": 888,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 865,
            "end": 873,
            "expression": {
              "type": "YieldExpression",
              "start": 865,
              "end": 872,
              "delegate": false,
              "argument": {
                "type": "Literal",
                "start": 871,
                "end": 872,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 878,
            "end": 886,
            "expression": {
              "type": "YieldExpression",
              "start": 878,
              "end": 885,
              "delegate": false,
              "argument": {
                "type": "Literal",
                "start": 884,
                "end": 885,
                "value": 2,
                "raw": "2"
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 890,
      "end": 962,
      "id": {
        "type": "Identifier",
        "start": 900,
        "end": 904,
        "name": "g007",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 907,
        "end": 962,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 948,
            "end": 960,
            "expression": {
              "type": "YieldExpression",
              "start": 948,
              "end": 959,
              "delegate": false,
              "argument": {
                "type": "Identifier",
                "start": 954,
                "end": 959,
                "name": "never",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1001,
      "end": 1072,
      "id": {
        "type": "Identifier",
        "start": 1011,
        "end": 1015,
        "name": "g102",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1018,
        "end": 1072,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1061,
            "end": 1070,
            "argument": {
              "type": "Literal",
              "start": 1068,
              "end": 1069,
              "value": 1,
              "raw": "1"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1074,
      "end": 1177,
      "id": {
        "type": "Identifier",
        "start": 1084,
        "end": 1088,
        "name": "g103",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1091,
        "end": 1177,
        "body": [
          {
            "type": "IfStatement",
            "start": 1133,
            "end": 1161,
            "test": {
              "type": "CallExpression",
              "start": 1137,
              "end": 1150,
              "callee": {
                "type": "MemberExpression",
                "start": 1137,
                "end": 1148,
                "object": {
                  "type": "Identifier",
                  "start": 1137,
                  "end": 1141,
                  "name": "Math",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1142,
                  "end": 1148,
                  "name": "random",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "consequent": {
              "type": "ReturnStatement",
              "start": 1152,
              "end": 1161,
              "argument": {
                "type": "Literal",
                "start": 1159,
                "end": 1160,
                "value": 1,
                "raw": "1"
              }
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "start": 1166,
            "end": 1175,
            "argument": {
              "type": "Literal",
              "start": 1173,
              "end": 1174,
              "value": 2,
              "raw": "2"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1179,
      "end": 1253,
      "id": {
        "type": "Identifier",
        "start": 1189,
        "end": 1193,
        "name": "g104",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1196,
        "end": 1253,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1238,
            "end": 1251,
            "argument": {
              "type": "Identifier",
              "start": 1245,
              "end": 1250,
              "name": "never",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1290,
      "end": 1374,
      "id": {
        "type": "Identifier",
        "start": 1300,
        "end": 1304,
        "name": "g201",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1307,
        "end": 1374,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1348,
            "end": 1372,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1352,
                "end": 1371,
                "id": {
                  "type": "Identifier",
                  "start": 1352,
                  "end": 1361,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1353,
                    "end": 1361,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1355,
                      "end": 1361
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 1364,
                  "end": 1371,
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "start": 1370,
                    "end": 1371,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1376,
      "end": 1487,
      "id": {
        "type": "Identifier",
        "start": 1386,
        "end": 1390,
        "name": "g202",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1393,
        "end": 1487,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1432,
            "end": 1456,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1436,
                "end": 1455,
                "id": {
                  "type": "Identifier",
                  "start": 1436,
                  "end": 1445,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1437,
                    "end": 1445,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1439,
                      "end": 1445
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 1448,
                  "end": 1455,
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "start": 1454,
                    "end": 1455,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1461,
            "end": 1485,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1465,
                "end": 1484,
                "id": {
                  "type": "Identifier",
                  "start": 1465,
                  "end": 1474,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1466,
                    "end": 1474,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1468,
                      "end": 1474
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 1477,
                  "end": 1484,
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "start": 1483,
                    "end": 1484,
                    "value": 2,
                    "raw": "2"
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1489,
      "end": 1526,
      "id": {
        "type": "Identifier",
        "start": 1506,
        "end": 1508,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1509,
          "end": 1518,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1510,
            "end": 1518,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1512,
              "end": 1518
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1519,
        "end": 1525,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1521,
          "end": 1525
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1527,
      "end": 1564,
      "id": {
        "type": "Identifier",
        "start": 1544,
        "end": 1546,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1547,
          "end": 1556,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1548,
            "end": 1556,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1550,
              "end": 1556
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1557,
        "end": 1563,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1559,
          "end": 1563
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1566,
      "end": 1645,
      "id": {
        "type": "Identifier",
        "start": 1576,
        "end": 1580,
        "name": "g203",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1583,
        "end": 1645,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1621,
            "end": 1643,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1627,
                "end": 1642,
                "id": {
                  "type": "Identifier",
                  "start": 1627,
                  "end": 1628,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1631,
                  "end": 1642,
                  "callee": {
                    "type": "Identifier",
                    "start": 1631,
                    "end": 1633,
                    "name": "f1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "YieldExpression",
                      "start": 1634,
                      "end": 1641,
                      "delegate": false,
                      "argument": {
                        "type": "Literal",
                        "start": 1640,
                        "end": 1641,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1647,
      "end": 1679,
      "id": {
        "type": "Identifier",
        "start": 1664,
        "end": 1666,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1670,
          "end": 1674,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1671,
            "end": 1674,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1673,
              "end": 1674,
              "typeName": {
                "type": "Identifier",
                "start": 1673,
                "end": 1674,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1666,
        "end": 1669,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1667,
            "end": 1668,
            "name": {
              "type": "Identifier",
              "start": 1667,
              "end": 1668,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1675,
        "end": 1678,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1677,
          "end": 1678,
          "typeName": {
            "type": "Identifier",
            "start": 1677,
            "end": 1678,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1681,
      "end": 1757,
      "id": {
        "type": "Identifier",
        "start": 1691,
        "end": 1695,
        "name": "g204",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1698,
        "end": 1757,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1733,
            "end": 1755,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1739,
                "end": 1754,
                "id": {
                  "type": "Identifier",
                  "start": 1739,
                  "end": 1740,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1743,
                  "end": 1754,
                  "callee": {
                    "type": "Identifier",
                    "start": 1743,
                    "end": 1745,
                    "name": "f2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "YieldExpression",
                      "start": 1746,
                      "end": 1753,
                      "delegate": false,
                      "argument": {
                        "type": "Literal",
                        "start": 1752,
                        "end": 1753,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1795,
      "end": 1882,
      "id": {
        "type": "Identifier",
        "start": 1805,
        "end": 1809,
        "name": "g301",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1812,
        "end": 1882,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1862,
            "end": 1868,
            "expression": {
              "type": "YieldExpression",
              "start": 1862,
              "end": 1867,
              "delegate": false,
              "argument": null
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 1873,
            "end": 1880,
            "argument": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1884,
      "end": 1965,
      "id": {
        "type": "Identifier",
        "start": 1894,
        "end": 1898,
        "name": "g302",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1901,
        "end": 1965,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1943,
            "end": 1951,
            "expression": {
              "type": "YieldExpression",
              "start": 1943,
              "end": 1950,
              "delegate": false,
              "argument": {
                "type": "Literal",
                "start": 1949,
                "end": 1950,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 1956,
            "end": 1963,
            "argument": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1967,
      "end": 2060,
      "id": {
        "type": "Identifier",
        "start": 1977,
        "end": 1981,
        "name": "g303",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1984,
        "end": 2060,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2036,
            "end": 2042,
            "expression": {
              "type": "YieldExpression",
              "start": 2036,
              "end": 2041,
              "delegate": false,
              "argument": null
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 2047,
            "end": 2058,
            "argument": {
              "type": "Literal",
              "start": 2054,
              "end": 2057,
              "value": "a",
              "raw": "\"a\""
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2062,
      "end": 2149,
      "id": {
        "type": "Identifier",
        "start": 2072,
        "end": 2076,
        "name": "g304",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 2079,
        "end": 2149,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2123,
            "end": 2131,
            "expression": {
              "type": "YieldExpression",
              "start": 2123,
              "end": 2130,
              "delegate": false,
              "argument": {
                "type": "Literal",
                "start": 2129,
                "end": 2130,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 2136,
            "end": 2147,
            "argument": {
              "type": "Literal",
              "start": 2143,
              "end": 2146,
              "value": "a",
              "raw": "\"a\""
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2151,
      "end": 2307,
      "id": {
        "type": "Identifier",
        "start": 2161,
        "end": 2165,
        "name": "g305",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 2168,
        "end": 2307,
        "body": [
          {
            "type": "IfStatement",
            "start": 2214,
            "end": 2241,
            "test": {
              "type": "CallExpression",
              "start": 2218,
              "end": 2231,
              "callee": {
                "type": "MemberExpression",
                "start": 2218,
                "end": 2229,
                "object": {
                  "type": "Identifier",
                  "start": 2218,
                  "end": 2222,
                  "name": "Math",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2223,
                  "end": 2229,
                  "name": "random",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "consequent": {
              "type": "ExpressionStatement",
              "start": 2233,
              "end": 2241,
              "expression": {
                "type": "YieldExpression",
                "start": 2233,
                "end": 2240,
                "delegate": false,
                "argument": {
                  "type": "Literal",
                  "start": 2239,
                  "end": 2240,
                  "value": 1,
                  "raw": "1"
                }
              },
              "directive": null
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2246,
            "end": 2254,
            "expression": {
              "type": "YieldExpression",
              "start": 2246,
              "end": 2253,
              "delegate": false,
              "argument": {
                "type": "Literal",
                "start": 2252,
                "end": 2253,
                "value": 2,
                "raw": "2"
              }
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 2259,
            "end": 2289,
            "test": {
              "type": "CallExpression",
              "start": 2263,
              "end": 2276,
              "callee": {
                "type": "MemberExpression",
                "start": 2263,
                "end": 2274,
                "object": {
                  "type": "Identifier",
                  "start": 2263,
                  "end": 2267,
                  "name": "Math",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2268,
                  "end": 2274,
                  "name": "random",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "consequent": {
              "type": "ReturnStatement",
              "start": 2278,
              "end": 2289,
              "argument": {
                "type": "Literal",
                "start": 2285,
                "end": 2288,
                "value": "a",
                "raw": "\"a\""
              }
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "start": 2294,
            "end": 2305,
            "argument": {
              "type": "Literal",
              "start": 2301,
              "end": 2304,
              "value": "b",
              "raw": "\"b\""
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2309,
      "end": 2411,
      "id": {
        "type": "Identifier",
        "start": 2319,
        "end": 2323,
        "name": "g306",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 2326,
        "end": 2411,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2368,
            "end": 2392,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2374,
                "end": 2391,
                "id": {
                  "type": "Identifier",
                  "start": 2374,
                  "end": 2381,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2375,
                    "end": 2381,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 2377,
                      "end": 2381,
                      "literal": {
                        "type": "Literal",
                        "start": 2377,
                        "end": 2381,
                        "value": "hi",
                        "raw": "\"hi\""
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 2384,
                  "end": 2391,
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "start": 2390,
                    "end": 2391,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 2397,
            "end": 2409,
            "argument": {
              "type": "Literal",
              "start": 2404,
              "end": 2408,
              "value": true,
              "raw": "true"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2413,
      "end": 2503,
      "id": {
        "type": "Identifier",
        "start": 2423,
        "end": 2427,
        "name": "g307",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 2433,
        "end": 2503,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2466,
            "end": 2487,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2472,
                "end": 2486,
                "id": {
                  "type": "Identifier",
                  "start": 2472,
                  "end": 2476,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2473,
                    "end": 2476,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2475,
                      "end": 2476,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2475,
                        "end": 2476,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 2479,
                  "end": 2486,
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "start": 2485,
                    "end": 2486,
                    "value": 0,
                    "raw": "0"
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 2492,
            "end": 2501,
            "argument": {
              "type": "Identifier",
              "start": 2499,
              "end": 2500,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2427,
        "end": 2430,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2428,
            "end": 2429,
            "name": {
              "type": "Identifier",
              "start": 2428,
              "end": 2429,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2505,
      "end": 2594,
      "id": {
        "type": "Identifier",
        "start": 2515,
        "end": 2519,
        "name": "g308",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2523,
          "end": 2527,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2524,
            "end": 2527,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2526,
              "end": 2527,
              "typeName": {
                "type": "Identifier",
                "start": 2526,
                "end": 2527,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2529,
        "end": 2594,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2557,
            "end": 2578,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2563,
                "end": 2577,
                "id": {
                  "type": "Identifier",
                  "start": 2563,
                  "end": 2567,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2564,
                    "end": 2567,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2566,
                      "end": 2567,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2566,
                        "end": 2567,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 2570,
                  "end": 2577,
                  "delegate": false,
                  "argument": {
                    "type": "Identifier",
                    "start": 2576,
                    "end": 2577,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 2583,
            "end": 2592,
            "argument": {
              "type": "Identifier",
              "start": 2590,
              "end": 2591,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2519,
        "end": 2522,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2520,
            "end": 2521,
            "name": {
              "type": "Identifier",
              "start": 2520,
              "end": 2521,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2596,
      "end": 2697,
      "id": {
        "type": "Identifier",
        "start": 2606,
        "end": 2610,
        "name": "g309",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2620,
          "end": 2624,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2621,
            "end": 2624,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2623,
              "end": 2624,
              "typeName": {
                "type": "Identifier",
                "start": 2623,
                "end": 2624,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 2626,
          "end": 2630,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2627,
            "end": 2630,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2629,
              "end": 2630,
              "typeName": {
                "type": "Identifier",
                "start": 2629,
                "end": 2630,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2632,
        "end": 2697,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2660,
            "end": 2681,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2666,
                "end": 2680,
                "id": {
                  "type": "Identifier",
                  "start": 2666,
                  "end": 2670,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2667,
                    "end": 2670,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2669,
                      "end": 2670,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2669,
                        "end": 2670,
                        "name": "V",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 2673,
                  "end": 2680,
                  "delegate": false,
                  "argument": {
                    "type": "Identifier",
                    "start": 2679,
                    "end": 2680,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 2686,
            "end": 2695,
            "argument": {
              "type": "Identifier",
              "start": 2693,
              "end": 2694,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2610,
        "end": 2619,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2611,
            "end": 2612,
            "name": {
              "type": "Identifier",
              "start": 2611,
              "end": 2612,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2614,
            "end": 2615,
            "name": {
              "type": "Identifier",
              "start": 2614,
              "end": 2615,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2617,
            "end": 2618,
            "name": {
              "type": "Identifier",
              "start": 2617,
              "end": 2618,
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2699,
      "end": 2823,
      "id": {
        "type": "Identifier",
        "start": 2709,
        "end": 2713,
        "name": "g310",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 2716,
        "end": 2823,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2792,
            "end": 2821,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2798,
                "end": 2820,
                "id": {
                  "type": "ArrayPattern",
                  "start": 2798,
                  "end": 2812,
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "start": 2799,
                      "end": 2804,
                      "left": {
                        "type": "Identifier",
                        "start": 2799,
                        "end": 2800,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2803,
                        "end": 2804,
                        "value": 1,
                        "raw": "1"
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "AssignmentPattern",
                      "start": 2806,
                      "end": 2811,
                      "left": {
                        "type": "Identifier",
                        "start": 2806,
                        "end": 2807,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2810,
                        "end": 2811,
                        "value": 2,
                        "raw": "2"
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 2815,
                  "end": 2820,
                  "delegate": false,
                  "argument": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2825,
      "end": 2945,
      "id": {
        "type": "Identifier",
        "start": 2835,
        "end": 2839,
        "name": "g311",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 2842,
        "end": 2945,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2888,
            "end": 2943,
            "expression": {
              "type": "YieldExpression",
              "start": 2888,
              "end": 2942,
              "delegate": true,
              "argument": {
                "type": "CallExpression",
                "start": 2895,
                "end": 2942,
                "callee": {
                  "type": "FunctionExpression",
                  "start": 2896,
                  "end": 2939,
                  "id": null,
                  "expression": false,
                  "generator": true,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 2908,
                    "end": 2939,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 2912,
                        "end": 2936,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 2918,
                            "end": 2935,
                            "id": {
                              "type": "Identifier",
                              "start": 2918,
                              "end": 2927,
                              "name": "y",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 2919,
                                "end": 2927,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 2921,
                                  "end": 2927
                                }
                              },
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "YieldExpression",
                              "start": 2930,
                              "end": 2935,
                              "delegate": false,
                              "argument": null
                            },
                            "definite": false
                          }
                        ],
                        "kind": "const",
                        "declare": false
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
