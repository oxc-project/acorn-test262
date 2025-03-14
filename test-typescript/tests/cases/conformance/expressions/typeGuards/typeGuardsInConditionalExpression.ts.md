__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 484,
  "end": 2946,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 484,
      "end": 607,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 517,
        "end": 607,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 523,
            "end": 595,
            "argument": {
              "type": "ConditionalExpression",
              "start": 530,
              "end": 594,
              "alternate": {
                "type": "UpdateExpression",
                "start": 591,
                "end": 594,
                "argument": {
                  "type": "Identifier",
                  "start": 591,
                  "end": 592,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "operator": "++",
                "prefix": false
              },
              "consequent": {
                "type": "MemberExpression",
                "start": 562,
                "end": 570,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 562,
                  "end": 563,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 564,
                  "end": 570,
                  "decorators": [],
                  "name": "length",
                  "optional": false
                }
              },
              "test": {
                "type": "BinaryExpression",
                "start": 530,
                "end": 551,
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "start": 530,
                  "end": 538,
                  "argument": {
                    "type": "Identifier",
                    "start": 537,
                    "end": 538,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "operator": "typeof",
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "start": 543,
                  "end": 551,
                  "raw": "\"string\"",
                  "value": "string"
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 493,
        "end": 496,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 497,
          "end": 515,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 498,
            "end": 515,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 500,
              "end": 515,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 500,
                  "end": 506
                },
                {
                  "type": "TSStringKeyword",
                  "start": 509,
                  "end": 515
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 608,
      "end": 742,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 642,
        "end": 742,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 648,
            "end": 730,
            "argument": {
              "type": "ConditionalExpression",
              "start": 655,
              "end": 729,
              "alternate": {
                "type": "Identifier",
                "start": 728,
                "end": 729,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "consequent": {
                "type": "LogicalExpression",
                "start": 688,
                "end": 706,
                "operator": "&&",
                "left": {
                  "type": "AssignmentExpression",
                  "start": 689,
                  "end": 700,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 689,
                    "end": 690,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 693,
                    "end": 700,
                    "raw": "\"hello\"",
                    "value": "hello"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "start": 705,
                  "end": 706,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              },
              "test": {
                "type": "BinaryExpression",
                "start": 655,
                "end": 676,
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "start": 655,
                  "end": 663,
                  "argument": {
                    "type": "Identifier",
                    "start": 662,
                    "end": 663,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "operator": "typeof",
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "start": 668,
                  "end": 676,
                  "raw": "\"string\"",
                  "value": "string"
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 617,
        "end": 621,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 622,
          "end": 640,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 623,
            "end": 640,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 625,
              "end": 640,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 625,
                  "end": 631
                },
                {
                  "type": "TSStringKeyword",
                  "start": 634,
                  "end": 640
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 743,
      "end": 872,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 777,
        "end": 872,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 783,
            "end": 860,
            "argument": {
              "type": "ConditionalExpression",
              "start": 790,
              "end": 859,
              "alternate": {
                "type": "Identifier",
                "start": 858,
                "end": 859,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "consequent": {
                "type": "LogicalExpression",
                "start": 823,
                "end": 836,
                "operator": "&&",
                "left": {
                  "type": "AssignmentExpression",
                  "start": 824,
                  "end": 830,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 824,
                    "end": 825,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 828,
                    "end": 830,
                    "raw": "10",
                    "value": 10
                  }
                },
                "right": {
                  "type": "Identifier",
                  "start": 835,
                  "end": 836,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              },
              "test": {
                "type": "BinaryExpression",
                "start": 790,
                "end": 811,
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "start": 790,
                  "end": 798,
                  "argument": {
                    "type": "Identifier",
                    "start": 797,
                    "end": 798,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "operator": "typeof",
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "start": 803,
                  "end": 811,
                  "raw": "\"string\"",
                  "value": "string"
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 752,
        "end": 756,
        "decorators": [],
        "name": "foo3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 757,
          "end": 775,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 758,
            "end": 775,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 760,
              "end": 775,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 760,
                  "end": 766
                },
                {
                  "type": "TSStringKeyword",
                  "start": 769,
                  "end": 775
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 873,
      "end": 1002,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 907,
        "end": 1002,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 913,
            "end": 990,
            "argument": {
              "type": "ConditionalExpression",
              "start": 920,
              "end": 989,
              "alternate": {
                "type": "LogicalExpression",
                "start": 975,
                "end": 988,
                "operator": "&&",
                "left": {
                  "type": "AssignmentExpression",
                  "start": 976,
                  "end": 982,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 976,
                    "end": 977,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 980,
                    "end": 982,
                    "raw": "10",
                    "value": 10
                  }
                },
                "right": {
                  "type": "Identifier",
                  "start": 987,
                  "end": 988,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              },
              "consequent": {
                "type": "Identifier",
                "start": 952,
                "end": 953,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "test": {
                "type": "BinaryExpression",
                "start": 920,
                "end": 941,
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "start": 920,
                  "end": 928,
                  "argument": {
                    "type": "Identifier",
                    "start": 927,
                    "end": 928,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "operator": "typeof",
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "start": 933,
                  "end": 941,
                  "raw": "\"string\"",
                  "value": "string"
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 882,
        "end": 886,
        "decorators": [],
        "name": "foo4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 887,
          "end": 905,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 888,
            "end": 905,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 890,
              "end": 905,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 890,
                  "end": 896
                },
                {
                  "type": "TSStringKeyword",
                  "start": 899,
                  "end": 905
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1003,
      "end": 1137,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1037,
        "end": 1137,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1043,
            "end": 1125,
            "argument": {
              "type": "ConditionalExpression",
              "start": 1050,
              "end": 1124,
              "alternate": {
                "type": "LogicalExpression",
                "start": 1105,
                "end": 1123,
                "operator": "&&",
                "left": {
                  "type": "AssignmentExpression",
                  "start": 1106,
                  "end": 1117,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 1106,
                    "end": 1107,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1110,
                    "end": 1117,
                    "raw": "\"hello\"",
                    "value": "hello"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "start": 1122,
                  "end": 1123,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              },
              "consequent": {
                "type": "Identifier",
                "start": 1082,
                "end": 1083,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "test": {
                "type": "BinaryExpression",
                "start": 1050,
                "end": 1071,
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "start": 1050,
                  "end": 1058,
                  "argument": {
                    "type": "Identifier",
                    "start": 1057,
                    "end": 1058,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "operator": "typeof",
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "start": 1063,
                  "end": 1071,
                  "raw": "\"string\"",
                  "value": "string"
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1012,
        "end": 1016,
        "decorators": [],
        "name": "foo5",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1017,
          "end": 1035,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1018,
            "end": 1035,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1020,
              "end": 1035,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1020,
                  "end": 1026
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1029,
                  "end": 1035
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1138,
      "end": 1317,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1172,
        "end": 1317,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1209,
            "end": 1305,
            "argument": {
              "type": "ConditionalExpression",
              "start": 1216,
              "end": 1304,
              "alternate": {
                "type": "LogicalExpression",
                "start": 1285,
                "end": 1303,
                "operator": "&&",
                "left": {
                  "type": "AssignmentExpression",
                  "start": 1286,
                  "end": 1297,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 1286,
                    "end": 1287,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1290,
                    "end": 1297,
                    "raw": "\"hello\"",
                    "value": "hello"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "start": 1302,
                  "end": 1303,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              },
              "consequent": {
                "type": "LogicalExpression",
                "start": 1249,
                "end": 1262,
                "operator": "&&",
                "left": {
                  "type": "AssignmentExpression",
                  "start": 1250,
                  "end": 1256,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 1250,
                    "end": 1251,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1254,
                    "end": 1256,
                    "raw": "10",
                    "value": 10
                  }
                },
                "right": {
                  "type": "Identifier",
                  "start": 1261,
                  "end": 1262,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              },
              "test": {
                "type": "BinaryExpression",
                "start": 1216,
                "end": 1237,
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "start": 1216,
                  "end": 1224,
                  "argument": {
                    "type": "Identifier",
                    "start": 1223,
                    "end": 1224,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "operator": "typeof",
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "start": 1229,
                  "end": 1237,
                  "raw": "\"string\"",
                  "value": "string"
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1147,
        "end": 1151,
        "decorators": [],
        "name": "foo6",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1152,
          "end": 1170,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1153,
            "end": 1170,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1155,
              "end": 1170,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1155,
                  "end": 1161
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1164,
                  "end": 1170
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1318,
      "end": 1519,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1362,
        "end": 1519,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1368,
            "end": 1506,
            "argument": {
              "type": "ConditionalExpression",
              "start": 1375,
              "end": 1505,
              "alternate": {
                "type": "ConditionalExpression",
                "start": 1442,
                "end": 1505,
                "alternate": {
                  "type": "BinaryExpression",
                  "start": 1498,
                  "end": 1505,
                  "operator": "==",
                  "left": {
                    "type": "Identifier",
                    "start": 1498,
                    "end": 1499,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1503,
                    "end": 1505,
                    "raw": "10",
                    "value": 10
                  }
                },
                "consequent": {
                  "type": "Identifier",
                  "start": 1475,
                  "end": 1476,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "test": {
                  "type": "BinaryExpression",
                  "start": 1442,
                  "end": 1464,
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "start": 1442,
                    "end": 1450,
                    "argument": {
                      "type": "Identifier",
                      "start": 1449,
                      "end": 1450,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "operator": "typeof",
                    "prefix": true
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1455,
                    "end": 1464,
                    "raw": "\"boolean\"",
                    "value": "boolean"
                  }
                }
              },
              "consequent": {
                "type": "BinaryExpression",
                "start": 1407,
                "end": 1420,
                "operator": "===",
                "left": {
                  "type": "Identifier",
                  "start": 1407,
                  "end": 1408,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 1413,
                  "end": 1420,
                  "raw": "\"hello\"",
                  "value": "hello"
                }
              },
              "test": {
                "type": "BinaryExpression",
                "start": 1375,
                "end": 1396,
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "start": 1375,
                  "end": 1383,
                  "argument": {
                    "type": "Identifier",
                    "start": 1382,
                    "end": 1383,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "operator": "typeof",
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "start": 1388,
                  "end": 1396,
                  "raw": "\"string\"",
                  "value": "string"
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1327,
        "end": 1331,
        "decorators": [],
        "name": "foo7",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1332,
          "end": 1360,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1333,
            "end": 1360,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1335,
              "end": 1360,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1335,
                  "end": 1341
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1344,
                  "end": 1350
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 1353,
                  "end": 1360
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1520,
      "end": 1783,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1564,
        "end": 1783,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1570,
            "end": 1594,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1574,
                "end": 1593,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1574,
                  "end": 1593,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1575,
                    "end": 1593,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1577,
                      "end": 1593,
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1577,
                          "end": 1583
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1586,
                          "end": 1593
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ReturnStatement",
            "start": 1599,
            "end": 1770,
            "argument": {
              "type": "ConditionalExpression",
              "start": 1606,
              "end": 1769,
              "alternate": {
                "type": "LogicalExpression",
                "start": 1663,
                "end": 1768,
                "operator": "&&",
                "left": {
                  "type": "AssignmentExpression",
                  "start": 1664,
                  "end": 1669,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 1664,
                    "end": 1665,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1668,
                    "end": 1669,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                },
                "right": {
                  "type": "ConditionalExpression",
                  "start": 1704,
                  "end": 1767,
                  "alternate": {
                    "type": "BinaryExpression",
                    "start": 1760,
                    "end": 1767,
                    "operator": "==",
                    "left": {
                      "type": "Identifier",
                      "start": 1760,
                      "end": 1761,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1765,
                      "end": 1767,
                      "raw": "10",
                      "value": 10
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1737,
                    "end": 1738,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1704,
                    "end": 1726,
                    "operator": "===",
                    "left": {
                      "type": "UnaryExpression",
                      "start": 1704,
                      "end": 1712,
                      "argument": {
                        "type": "Identifier",
                        "start": 1711,
                        "end": 1712,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "operator": "typeof",
                      "prefix": true
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1717,
                      "end": 1726,
                      "raw": "\"boolean\"",
                      "value": "boolean"
                    }
                  }
                }
              },
              "consequent": {
                "type": "BinaryExpression",
                "start": 1638,
                "end": 1651,
                "operator": "===",
                "left": {
                  "type": "Identifier",
                  "start": 1638,
                  "end": 1639,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 1644,
                  "end": 1651,
                  "raw": "\"hello\"",
                  "value": "hello"
                }
              },
              "test": {
                "type": "BinaryExpression",
                "start": 1606,
                "end": 1627,
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "start": 1606,
                  "end": 1614,
                  "argument": {
                    "type": "Identifier",
                    "start": 1613,
                    "end": 1614,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "operator": "typeof",
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "start": 1619,
                  "end": 1627,
                  "raw": "\"string\"",
                  "value": "string"
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1529,
        "end": 1533,
        "decorators": [],
        "name": "foo8",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1534,
          "end": 1562,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1535,
            "end": 1562,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1537,
              "end": 1562,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1537,
                  "end": 1543
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1546,
                  "end": 1552
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 1555,
                  "end": 1562
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1784,
      "end": 2051,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1818,
        "end": 2051,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1824,
            "end": 1835,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1828,
                "end": 1834,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1828,
                  "end": 1829,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1832,
                  "end": 1834,
                  "raw": "10",
                  "value": 10
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ReturnStatement",
            "start": 1935,
            "end": 2038,
            "argument": {
              "type": "ConditionalExpression",
              "start": 1942,
              "end": 2037,
              "alternate": {
                "type": "BinaryExpression",
                "start": 2029,
                "end": 2037,
                "operator": "===",
                "left": {
                  "type": "Identifier",
                  "start": 2029,
                  "end": 2030,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 2035,
                  "end": 2037,
                  "raw": "10",
                  "value": 10
                }
              },
              "consequent": {
                "type": "LogicalExpression",
                "start": 1975,
                "end": 2006,
                "operator": "&&",
                "left": {
                  "type": "AssignmentExpression",
                  "start": 1976,
                  "end": 1988,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 1976,
                    "end": 1977,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "right": {
                    "type": "MemberExpression",
                    "start": 1980,
                    "end": 1988,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1980,
                      "end": 1981,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1982,
                      "end": 1988,
                      "decorators": [],
                      "name": "length",
                      "optional": false
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "start": 1993,
                  "end": 2006,
                  "operator": "===",
                  "left": {
                    "type": "Identifier",
                    "start": 1993,
                    "end": 1994,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1999,
                    "end": 2006,
                    "raw": "\"hello\"",
                    "value": "hello"
                  }
                }
              },
              "test": {
                "type": "BinaryExpression",
                "start": 1942,
                "end": 1963,
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "start": 1942,
                  "end": 1950,
                  "argument": {
                    "type": "Identifier",
                    "start": 1949,
                    "end": 1950,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "operator": "typeof",
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "start": 1955,
                  "end": 1963,
                  "raw": "\"string\"",
                  "value": "string"
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1793,
        "end": 1797,
        "decorators": [],
        "name": "foo9",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1798,
          "end": 1816,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1799,
            "end": 1816,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1801,
              "end": 1816,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1801,
                  "end": 1807
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1810,
                  "end": 1816
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 2052,
      "end": 2327,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2097,
        "end": 2327,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2128,
            "end": 2152,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2132,
                "end": 2151,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2132,
                  "end": 2151,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2133,
                    "end": 2151,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 2135,
                      "end": 2151,
                      "types": [
                        {
                          "type": "TSBooleanKeyword",
                          "start": 2135,
                          "end": 2142
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 2145,
                          "end": 2151
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ReturnStatement",
            "start": 2157,
            "end": 2310,
            "argument": {
              "type": "ConditionalExpression",
              "start": 2164,
              "end": 2309,
              "alternate": {
                "type": "LogicalExpression",
                "start": 2219,
                "end": 2308,
                "operator": "&&",
                "left": {
                  "type": "LogicalExpression",
                  "start": 2219,
                  "end": 2284,
                  "operator": "&&",
                  "left": {
                    "type": "AssignmentExpression",
                    "start": 2220,
                    "end": 2225,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2220,
                      "end": 2221,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2224,
                      "end": 2225,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "start": 2263,
                    "end": 2284,
                    "operator": "===",
                    "left": {
                      "type": "UnaryExpression",
                      "start": 2263,
                      "end": 2271,
                      "argument": {
                        "type": "Identifier",
                        "start": 2270,
                        "end": 2271,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "operator": "typeof",
                      "prefix": true
                    },
                    "right": {
                      "type": "Literal",
                      "start": 2276,
                      "end": 2284,
                      "raw": "\"number\"",
                      "value": "number"
                    }
                  }
                },
                "right": {
                  "type": "CallExpression",
                  "start": 2296,
                  "end": 2308,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2296,
                    "end": 2306,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2296,
                      "end": 2297,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2298,
                      "end": 2306,
                      "decorators": [],
                      "name": "toString",
                      "optional": false
                    }
                  },
                  "optional": false
                }
              },
              "consequent": {
                "type": "Identifier",
                "start": 2196,
                "end": 2197,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "test": {
                "type": "BinaryExpression",
                "start": 2164,
                "end": 2185,
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "start": 2164,
                  "end": 2172,
                  "argument": {
                    "type": "Identifier",
                    "start": 2171,
                    "end": 2172,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "operator": "typeof",
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "start": 2177,
                  "end": 2185,
                  "raw": "\"string\"",
                  "value": "string"
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2061,
        "end": 2066,
        "decorators": [],
        "name": "foo10",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2067,
          "end": 2095,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2068,
            "end": 2095,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 2070,
              "end": 2095,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 2070,
                  "end": 2076
                },
                {
                  "type": "TSStringKeyword",
                  "start": 2079,
                  "end": 2085
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 2088,
                  "end": 2095
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 2328,
      "end": 2640,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2373,
        "end": 2640,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2404,
            "end": 2437,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2408,
                "end": 2436,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2408,
                  "end": 2436,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2409,
                    "end": 2436,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 2411,
                      "end": 2436,
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2411,
                          "end": 2417
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 2420,
                          "end": 2427
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 2430,
                          "end": 2436
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ReturnStatement",
            "start": 2442,
            "end": 2623,
            "argument": {
              "type": "ConditionalExpression",
              "start": 2449,
              "end": 2622,
              "alternate": {
                "type": "LogicalExpression",
                "start": 2504,
                "end": 2621,
                "operator": "&&",
                "left": {
                  "type": "LogicalExpression",
                  "start": 2504,
                  "end": 2589,
                  "operator": "&&",
                  "left": {
                    "type": "LogicalExpression",
                    "start": 2504,
                    "end": 2569,
                    "operator": "&&",
                    "left": {
                      "type": "AssignmentExpression",
                      "start": 2505,
                      "end": 2510,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 2505,
                        "end": 2506,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 2509,
                        "end": 2510,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 2548,
                      "end": 2569,
                      "operator": "===",
                      "left": {
                        "type": "UnaryExpression",
                        "start": 2548,
                        "end": 2556,
                        "argument": {
                          "type": "Identifier",
                          "start": 2555,
                          "end": 2556,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "operator": "typeof",
                        "prefix": true
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2561,
                        "end": 2569,
                        "raw": "\"number\"",
                        "value": "number"
                      }
                    }
                  },
                  "right": {
                    "type": "AssignmentExpression",
                    "start": 2582,
                    "end": 2588,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2582,
                      "end": 2583,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 2586,
                      "end": 2588,
                      "raw": "10",
                      "value": 10
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "start": 2620,
                  "end": 2621,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              },
              "consequent": {
                "type": "Identifier",
                "start": 2481,
                "end": 2482,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "test": {
                "type": "BinaryExpression",
                "start": 2449,
                "end": 2470,
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "start": 2449,
                  "end": 2457,
                  "argument": {
                    "type": "Identifier",
                    "start": 2456,
                    "end": 2457,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "operator": "typeof",
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "start": 2462,
                  "end": 2470,
                  "raw": "\"string\"",
                  "value": "string"
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2337,
        "end": 2342,
        "decorators": [],
        "name": "foo11",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2343,
          "end": 2371,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2344,
            "end": 2371,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 2346,
              "end": 2371,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 2346,
                  "end": 2352
                },
                {
                  "type": "TSStringKeyword",
                  "start": 2355,
                  "end": 2361
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 2364,
                  "end": 2371
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 2641,
      "end": 2946,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2686,
        "end": 2946,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2717,
            "end": 2750,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2721,
                "end": 2749,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2721,
                  "end": 2749,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2722,
                    "end": 2749,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 2724,
                      "end": 2749,
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2724,
                          "end": 2730
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 2733,
                          "end": 2740
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 2743,
                          "end": 2749
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ReturnStatement",
            "start": 2755,
            "end": 2929,
            "argument": {
              "type": "ConditionalExpression",
              "start": 2762,
              "end": 2928,
              "alternate": {
                "type": "LogicalExpression",
                "start": 2849,
                "end": 2927,
                "operator": "&&",
                "left": {
                  "type": "LogicalExpression",
                  "start": 2849,
                  "end": 2914,
                  "operator": "&&",
                  "left": {
                    "type": "AssignmentExpression",
                    "start": 2850,
                    "end": 2855,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2850,
                      "end": 2851,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2854,
                      "end": 2855,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "start": 2893,
                    "end": 2914,
                    "operator": "===",
                    "left": {
                      "type": "UnaryExpression",
                      "start": 2893,
                      "end": 2901,
                      "argument": {
                        "type": "Identifier",
                        "start": 2900,
                        "end": 2901,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "operator": "typeof",
                      "prefix": true
                    },
                    "right": {
                      "type": "Literal",
                      "start": 2906,
                      "end": 2914,
                      "raw": "\"number\"",
                      "value": "number"
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "start": 2926,
                  "end": 2927,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              },
              "consequent": {
                "type": "LogicalExpression",
                "start": 2795,
                "end": 2826,
                "operator": "&&",
                "left": {
                  "type": "AssignmentExpression",
                  "start": 2796,
                  "end": 2802,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 2796,
                    "end": 2797,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 2800,
                    "end": 2802,
                    "raw": "10",
                    "value": 10
                  }
                },
                "right": {
                  "type": "MemberExpression",
                  "start": 2807,
                  "end": 2826,
                  "computed": false,
                  "object": {
                    "type": "CallExpression",
                    "start": 2807,
                    "end": 2819,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2807,
                      "end": 2817,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 2807,
                        "end": 2808,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 2809,
                        "end": 2817,
                        "decorators": [],
                        "name": "toString",
                        "optional": false
                      }
                    },
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2820,
                    "end": 2826,
                    "decorators": [],
                    "name": "length",
                    "optional": false
                  }
                }
              },
              "test": {
                "type": "BinaryExpression",
                "start": 2762,
                "end": 2783,
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "start": 2762,
                  "end": 2770,
                  "argument": {
                    "type": "Identifier",
                    "start": 2769,
                    "end": 2770,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "operator": "typeof",
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "start": 2775,
                  "end": 2783,
                  "raw": "\"string\"",
                  "value": "string"
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2650,
        "end": 2655,
        "decorators": [],
        "name": "foo12",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2656,
          "end": 2684,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2657,
            "end": 2684,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 2659,
              "end": 2684,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 2659,
                  "end": 2665
                },
                {
                  "type": "TSStringKeyword",
                  "start": 2668,
                  "end": 2674
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 2677,
                  "end": 2684
                }
              ]
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
