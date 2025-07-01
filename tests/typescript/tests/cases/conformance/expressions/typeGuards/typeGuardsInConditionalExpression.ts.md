__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 493,
        "end": 496
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
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
              ],
              "start": 500,
              "end": 515
            },
            "start": 498,
            "end": 515
          },
          "start": 497,
          "end": 515
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 537,
                    "end": 538
                  },
                  "prefix": true,
                  "start": 530,
                  "end": 538
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 543,
                  "end": 551
                },
                "start": 530,
                "end": 551
              },
              "consequent": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 562,
                  "end": 563
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 564,
                  "end": 570
                },
                "optional": false,
                "computed": false,
                "start": 562,
                "end": 570
              },
              "alternate": {
                "type": "UpdateExpression",
                "operator": "++",
                "prefix": false,
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 591,
                  "end": 592
                },
                "start": 591,
                "end": 594
              },
              "start": 530,
              "end": 594
            },
            "start": 523,
            "end": 595
          }
        ],
        "start": 517,
        "end": 607
      },
      "expression": false,
      "start": 484,
      "end": 607
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 617,
        "end": 621
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
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
              ],
              "start": 625,
              "end": 640
            },
            "start": 623,
            "end": 640
          },
          "start": 622,
          "end": 640
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 662,
                    "end": 663
                  },
                  "prefix": true,
                  "start": 655,
                  "end": 663
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 668,
                  "end": 676
                },
                "start": 655,
                "end": 676
              },
              "consequent": {
                "type": "LogicalExpression",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 689,
                    "end": 690
                  },
                  "right": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 693,
                    "end": 700
                  },
                  "start": 689,
                  "end": 700
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 705,
                  "end": 706
                },
                "start": 688,
                "end": 706
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 728,
                "end": 729
              },
              "start": 655,
              "end": 729
            },
            "start": 648,
            "end": 730
          }
        ],
        "start": 642,
        "end": 742
      },
      "expression": false,
      "start": 608,
      "end": 742
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 752,
        "end": 756
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
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
              ],
              "start": 760,
              "end": 775
            },
            "start": 758,
            "end": 775
          },
          "start": 757,
          "end": 775
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 797,
                    "end": 798
                  },
                  "prefix": true,
                  "start": 790,
                  "end": 798
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 803,
                  "end": 811
                },
                "start": 790,
                "end": 811
              },
              "consequent": {
                "type": "LogicalExpression",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 824,
                    "end": 825
                  },
                  "right": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 828,
                    "end": 830
                  },
                  "start": 824,
                  "end": 830
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 835,
                  "end": 836
                },
                "start": 823,
                "end": 836
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 858,
                "end": 859
              },
              "start": 790,
              "end": 859
            },
            "start": 783,
            "end": 860
          }
        ],
        "start": 777,
        "end": 872
      },
      "expression": false,
      "start": 743,
      "end": 872
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 882,
        "end": 886
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
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
              ],
              "start": 890,
              "end": 905
            },
            "start": 888,
            "end": 905
          },
          "start": 887,
          "end": 905
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 927,
                    "end": 928
                  },
                  "prefix": true,
                  "start": 920,
                  "end": 928
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 933,
                  "end": 941
                },
                "start": 920,
                "end": 941
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 952,
                "end": 953
              },
              "alternate": {
                "type": "LogicalExpression",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 976,
                    "end": 977
                  },
                  "right": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 980,
                    "end": 982
                  },
                  "start": 976,
                  "end": 982
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 987,
                  "end": 988
                },
                "start": 975,
                "end": 988
              },
              "start": 920,
              "end": 989
            },
            "start": 913,
            "end": 990
          }
        ],
        "start": 907,
        "end": 1002
      },
      "expression": false,
      "start": 873,
      "end": 1002
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1012,
        "end": 1016
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
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
              ],
              "start": 1020,
              "end": 1035
            },
            "start": 1018,
            "end": 1035
          },
          "start": 1017,
          "end": 1035
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1057,
                    "end": 1058
                  },
                  "prefix": true,
                  "start": 1050,
                  "end": 1058
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 1063,
                  "end": 1071
                },
                "start": 1050,
                "end": 1071
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1082,
                "end": 1083
              },
              "alternate": {
                "type": "LogicalExpression",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1106,
                    "end": 1107
                  },
                  "right": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 1110,
                    "end": 1117
                  },
                  "start": 1106,
                  "end": 1117
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1122,
                  "end": 1123
                },
                "start": 1105,
                "end": 1123
              },
              "start": 1050,
              "end": 1124
            },
            "start": 1043,
            "end": 1125
          }
        ],
        "start": 1037,
        "end": 1137
      },
      "expression": false,
      "start": 1003,
      "end": 1137
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1147,
        "end": 1151
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
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
              ],
              "start": 1155,
              "end": 1170
            },
            "start": 1153,
            "end": 1170
          },
          "start": 1152,
          "end": 1170
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1223,
                    "end": 1224
                  },
                  "prefix": true,
                  "start": 1216,
                  "end": 1224
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 1229,
                  "end": 1237
                },
                "start": 1216,
                "end": 1237
              },
              "consequent": {
                "type": "LogicalExpression",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1250,
                    "end": 1251
                  },
                  "right": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 1254,
                    "end": 1256
                  },
                  "start": 1250,
                  "end": 1256
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1261,
                  "end": 1262
                },
                "start": 1249,
                "end": 1262
              },
              "alternate": {
                "type": "LogicalExpression",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1286,
                    "end": 1287
                  },
                  "right": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 1290,
                    "end": 1297
                  },
                  "start": 1286,
                  "end": 1297
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1302,
                  "end": 1303
                },
                "start": 1285,
                "end": 1303
              },
              "start": 1216,
              "end": 1304
            },
            "start": 1209,
            "end": 1305
          }
        ],
        "start": 1172,
        "end": 1317
      },
      "expression": false,
      "start": 1138,
      "end": 1317
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1327,
        "end": 1331
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
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
              ],
              "start": 1335,
              "end": 1360
            },
            "start": 1333,
            "end": 1360
          },
          "start": 1332,
          "end": 1360
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1382,
                    "end": 1383
                  },
                  "prefix": true,
                  "start": 1375,
                  "end": 1383
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 1388,
                  "end": 1396
                },
                "start": 1375,
                "end": 1396
              },
              "consequent": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1407,
                  "end": 1408
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 1413,
                  "end": 1420
                },
                "start": 1407,
                "end": 1420
              },
              "alternate": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1449,
                      "end": 1450
                    },
                    "prefix": true,
                    "start": 1442,
                    "end": 1450
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "boolean",
                    "raw": "\"boolean\"",
                    "start": 1455,
                    "end": 1464
                  },
                  "start": 1442,
                  "end": 1464
                },
                "consequent": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1475,
                  "end": 1476
                },
                "alternate": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1498,
                    "end": 1499
                  },
                  "operator": "==",
                  "right": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 1503,
                    "end": 1505
                  },
                  "start": 1498,
                  "end": 1505
                },
                "start": 1442,
                "end": 1505
              },
              "start": 1375,
              "end": 1505
            },
            "start": 1368,
            "end": 1506
          }
        ],
        "start": 1362,
        "end": 1519
      },
      "expression": false,
      "start": 1318,
      "end": 1519
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1529,
        "end": 1533
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
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
              ],
              "start": 1537,
              "end": 1562
            },
            "start": 1535,
            "end": 1562
          },
          "start": 1534,
          "end": 1562
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
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
                      ],
                      "start": 1577,
                      "end": 1593
                    },
                    "start": 1575,
                    "end": 1593
                  },
                  "start": 1574,
                  "end": 1593
                },
                "init": null,
                "definite": false,
                "start": 1574,
                "end": 1593
              }
            ],
            "declare": false,
            "start": 1570,
            "end": 1594
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1613,
                    "end": 1614
                  },
                  "prefix": true,
                  "start": 1606,
                  "end": 1614
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 1619,
                  "end": 1627
                },
                "start": 1606,
                "end": 1627
              },
              "consequent": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1638,
                  "end": 1639
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 1644,
                  "end": 1651
                },
                "start": 1638,
                "end": 1651
              },
              "alternate": {
                "type": "LogicalExpression",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1664,
                    "end": 1665
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1668,
                    "end": 1669
                  },
                  "start": 1664,
                  "end": 1669
                },
                "operator": "&&",
                "right": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1711,
                        "end": 1712
                      },
                      "prefix": true,
                      "start": 1704,
                      "end": 1712
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "boolean",
                      "raw": "\"boolean\"",
                      "start": 1717,
                      "end": 1726
                    },
                    "start": 1704,
                    "end": 1726
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1737,
                    "end": 1738
                  },
                  "alternate": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1760,
                      "end": 1761
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 1765,
                      "end": 1767
                    },
                    "start": 1760,
                    "end": 1767
                  },
                  "start": 1704,
                  "end": 1767
                },
                "start": 1663,
                "end": 1768
              },
              "start": 1606,
              "end": 1769
            },
            "start": 1599,
            "end": 1770
          }
        ],
        "start": 1564,
        "end": 1783
      },
      "expression": false,
      "start": 1520,
      "end": 1783
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1793,
        "end": 1797
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
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
              ],
              "start": 1801,
              "end": 1816
            },
            "start": 1799,
            "end": 1816
          },
          "start": 1798,
          "end": 1816
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1828,
                  "end": 1829
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 1832,
                  "end": 1834
                },
                "definite": false,
                "start": 1828,
                "end": 1834
              }
            ],
            "declare": false,
            "start": 1824,
            "end": 1835
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1949,
                    "end": 1950
                  },
                  "prefix": true,
                  "start": 1942,
                  "end": 1950
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 1955,
                  "end": 1963
                },
                "start": 1942,
                "end": 1963
              },
              "consequent": {
                "type": "LogicalExpression",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1976,
                    "end": 1977
                  },
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1980,
                      "end": 1981
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1982,
                      "end": 1988
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1980,
                    "end": 1988
                  },
                  "start": 1976,
                  "end": 1988
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1993,
                    "end": 1994
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 1999,
                    "end": 2006
                  },
                  "start": 1993,
                  "end": 2006
                },
                "start": 1975,
                "end": 2006
              },
              "alternate": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2029,
                  "end": 2030
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 2035,
                  "end": 2037
                },
                "start": 2029,
                "end": 2037
              },
              "start": 1942,
              "end": 2037
            },
            "start": 1935,
            "end": 2038
          }
        ],
        "start": 1818,
        "end": 2051
      },
      "expression": false,
      "start": 1784,
      "end": 2051
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2061,
        "end": 2066
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
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
              ],
              "start": 2070,
              "end": 2095
            },
            "start": 2068,
            "end": 2095
          },
          "start": 2067,
          "end": 2095
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
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
                      ],
                      "start": 2135,
                      "end": 2151
                    },
                    "start": 2133,
                    "end": 2151
                  },
                  "start": 2132,
                  "end": 2151
                },
                "init": null,
                "definite": false,
                "start": 2132,
                "end": 2151
              }
            ],
            "declare": false,
            "start": 2128,
            "end": 2152
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2171,
                    "end": 2172
                  },
                  "prefix": true,
                  "start": 2164,
                  "end": 2172
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 2177,
                  "end": 2185
                },
                "start": 2164,
                "end": 2185
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2196,
                "end": 2197
              },
              "alternate": {
                "type": "LogicalExpression",
                "left": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2220,
                      "end": 2221
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2224,
                      "end": 2225
                    },
                    "start": 2220,
                    "end": 2225
                  },
                  "operator": "&&",
                  "right": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2270,
                        "end": 2271
                      },
                      "prefix": true,
                      "start": 2263,
                      "end": 2271
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "number",
                      "raw": "\"number\"",
                      "start": 2276,
                      "end": 2284
                    },
                    "start": 2263,
                    "end": 2284
                  },
                  "start": 2219,
                  "end": 2284
                },
                "operator": "&&",
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2296,
                      "end": 2297
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2298,
                      "end": 2306
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2296,
                    "end": 2306
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 2296,
                  "end": 2308
                },
                "start": 2219,
                "end": 2308
              },
              "start": 2164,
              "end": 2309
            },
            "start": 2157,
            "end": 2310
          }
        ],
        "start": 2097,
        "end": 2327
      },
      "expression": false,
      "start": 2052,
      "end": 2327
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2337,
        "end": 2342
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
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
              ],
              "start": 2346,
              "end": 2371
            },
            "start": 2344,
            "end": 2371
          },
          "start": 2343,
          "end": 2371
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
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
                      ],
                      "start": 2411,
                      "end": 2436
                    },
                    "start": 2409,
                    "end": 2436
                  },
                  "start": 2408,
                  "end": 2436
                },
                "init": null,
                "definite": false,
                "start": 2408,
                "end": 2436
              }
            ],
            "declare": false,
            "start": 2404,
            "end": 2437
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2456,
                    "end": 2457
                  },
                  "prefix": true,
                  "start": 2449,
                  "end": 2457
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 2462,
                  "end": 2470
                },
                "start": 2449,
                "end": 2470
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2481,
                "end": 2482
              },
              "alternate": {
                "type": "LogicalExpression",
                "left": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2505,
                        "end": 2506
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2509,
                        "end": 2510
                      },
                      "start": 2505,
                      "end": 2510
                    },
                    "operator": "&&",
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "UnaryExpression",
                        "operator": "typeof",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2555,
                          "end": 2556
                        },
                        "prefix": true,
                        "start": 2548,
                        "end": 2556
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": "number",
                        "raw": "\"number\"",
                        "start": 2561,
                        "end": 2569
                      },
                      "start": 2548,
                      "end": 2569
                    },
                    "start": 2504,
                    "end": 2569
                  },
                  "operator": "&&",
                  "right": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2582,
                      "end": 2583
                    },
                    "right": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 2586,
                      "end": 2588
                    },
                    "start": 2582,
                    "end": 2588
                  },
                  "start": 2504,
                  "end": 2589
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2620,
                  "end": 2621
                },
                "start": 2504,
                "end": 2621
              },
              "start": 2449,
              "end": 2622
            },
            "start": 2442,
            "end": 2623
          }
        ],
        "start": 2373,
        "end": 2640
      },
      "expression": false,
      "start": 2328,
      "end": 2640
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2650,
        "end": 2655
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
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
              ],
              "start": 2659,
              "end": 2684
            },
            "start": 2657,
            "end": 2684
          },
          "start": 2656,
          "end": 2684
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
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
                      ],
                      "start": 2724,
                      "end": 2749
                    },
                    "start": 2722,
                    "end": 2749
                  },
                  "start": 2721,
                  "end": 2749
                },
                "init": null,
                "definite": false,
                "start": 2721,
                "end": 2749
              }
            ],
            "declare": false,
            "start": 2717,
            "end": 2750
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2769,
                    "end": 2770
                  },
                  "prefix": true,
                  "start": 2762,
                  "end": 2770
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 2775,
                  "end": 2783
                },
                "start": 2762,
                "end": 2783
              },
              "consequent": {
                "type": "LogicalExpression",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2796,
                    "end": 2797
                  },
                  "right": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 2800,
                    "end": 2802
                  },
                  "start": 2796,
                  "end": 2802
                },
                "operator": "&&",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2807,
                        "end": 2808
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2809,
                        "end": 2817
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2807,
                      "end": 2817
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 2807,
                    "end": 2819
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2820,
                    "end": 2826
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2807,
                  "end": 2826
                },
                "start": 2795,
                "end": 2826
              },
              "alternate": {
                "type": "LogicalExpression",
                "left": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2850,
                      "end": 2851
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2854,
                      "end": 2855
                    },
                    "start": 2850,
                    "end": 2855
                  },
                  "operator": "&&",
                  "right": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2900,
                        "end": 2901
                      },
                      "prefix": true,
                      "start": 2893,
                      "end": 2901
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "number",
                      "raw": "\"number\"",
                      "start": 2906,
                      "end": 2914
                    },
                    "start": 2893,
                    "end": 2914
                  },
                  "start": 2849,
                  "end": 2914
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2926,
                  "end": 2927
                },
                "start": 2849,
                "end": 2927
              },
              "start": 2762,
              "end": 2928
            },
            "start": 2755,
            "end": 2929
          }
        ],
        "start": 2686,
        "end": 2946
      },
      "expression": false,
      "start": 2641,
      "end": 2946
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 484,
  "end": 2946
}
```
