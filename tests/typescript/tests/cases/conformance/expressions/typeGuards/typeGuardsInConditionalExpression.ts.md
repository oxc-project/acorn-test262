__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 484,
    "end": 492,
    "range": [
      484,
      492
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 493,
    "end": 496,
    "range": [
      493,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 500,
    "end": 506,
    "range": [
      500,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 509,
    "end": 515,
    "range": [
      509,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 523,
    "end": 529,
    "range": [
      523,
      529
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 530,
    "end": 536,
    "range": [
      530,
      536
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 537,
    "end": 538,
    "range": [
      537,
      538
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 539,
    "end": 542,
    "range": [
      539,
      542
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 543,
    "end": 551,
    "range": [
      543,
      551
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 564,
    "end": 570,
    "range": [
      564,
      570
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 592,
    "end": 594,
    "range": [
      592,
      594
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 608,
    "end": 616,
    "range": [
      608,
      616
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 617,
    "end": 621,
    "range": [
      617,
      621
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 625,
    "end": 631,
    "range": [
      625,
      631
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 634,
    "end": 640,
    "range": [
      634,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 648,
    "end": 654,
    "range": [
      648,
      654
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 655,
    "end": 661,
    "range": [
      655,
      661
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 664,
    "end": 667,
    "range": [
      664,
      667
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 668,
    "end": 676,
    "range": [
      668,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 685,
    "end": 686,
    "range": [
      685,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 691,
    "end": 692,
    "range": [
      691,
      692
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 693,
    "end": 700,
    "range": [
      693,
      700
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 702,
    "end": 704,
    "range": [
      702,
      704
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 726,
    "end": 727,
    "range": [
      726,
      727
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 741,
    "end": 742,
    "range": [
      741,
      742
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 743,
    "end": 751,
    "range": [
      743,
      751
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 752,
    "end": 756,
    "range": [
      752,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 757,
    "end": 758,
    "range": [
      757,
      758
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 760,
    "end": 766,
    "range": [
      760,
      766
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 767,
    "end": 768,
    "range": [
      767,
      768
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 769,
    "end": 775,
    "range": [
      769,
      775
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 775,
    "end": 776,
    "range": [
      775,
      776
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 777,
    "end": 778,
    "range": [
      777,
      778
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 783,
    "end": 789,
    "range": [
      783,
      789
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 790,
    "end": 796,
    "range": [
      790,
      796
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 797,
    "end": 798,
    "range": [
      797,
      798
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 799,
    "end": 802,
    "range": [
      799,
      802
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 803,
    "end": 811,
    "range": [
      803,
      811
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 820,
    "end": 821,
    "range": [
      820,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 828,
    "end": 830,
    "range": [
      828,
      830
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 832,
    "end": 834,
    "range": [
      832,
      834
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 835,
    "end": 836,
    "range": [
      835,
      836
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 836,
    "end": 837,
    "range": [
      836,
      837
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 856,
    "end": 857,
    "range": [
      856,
      857
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 858,
    "end": 859,
    "range": [
      858,
      859
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 859,
    "end": 860,
    "range": [
      859,
      860
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 871,
    "end": 872,
    "range": [
      871,
      872
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 873,
    "end": 881,
    "range": [
      873,
      881
    ]
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 882,
    "end": 886,
    "range": [
      882,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 887,
    "end": 888,
    "range": [
      887,
      888
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 888,
    "end": 889,
    "range": [
      888,
      889
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 890,
    "end": 896,
    "range": [
      890,
      896
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 897,
    "end": 898,
    "range": [
      897,
      898
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 899,
    "end": 905,
    "range": [
      899,
      905
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 913,
    "end": 919,
    "range": [
      913,
      919
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 920,
    "end": 926,
    "range": [
      920,
      926
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 927,
    "end": 928,
    "range": [
      927,
      928
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 929,
    "end": 932,
    "range": [
      929,
      932
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 933,
    "end": 941,
    "range": [
      933,
      941
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 950,
    "end": 951,
    "range": [
      950,
      951
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 972,
    "end": 973,
    "range": [
      972,
      973
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 974,
    "end": 975,
    "range": [
      974,
      975
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 975,
    "end": 976,
    "range": [
      975,
      976
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 976,
    "end": 977,
    "range": [
      976,
      977
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 978,
    "end": 979,
    "range": [
      978,
      979
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 980,
    "end": 982,
    "range": [
      980,
      982
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 982,
    "end": 983,
    "range": [
      982,
      983
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 984,
    "end": 986,
    "range": [
      984,
      986
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 987,
    "end": 988,
    "range": [
      987,
      988
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 988,
    "end": 989,
    "range": [
      988,
      989
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 989,
    "end": 990,
    "range": [
      989,
      990
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1001,
    "end": 1002,
    "range": [
      1001,
      1002
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1003,
    "end": 1011,
    "range": [
      1003,
      1011
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1012,
    "end": 1016,
    "range": [
      1012,
      1016
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1016,
    "end": 1017,
    "range": [
      1016,
      1017
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1017,
    "end": 1018,
    "range": [
      1017,
      1018
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1018,
    "end": 1019,
    "range": [
      1018,
      1019
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1020,
    "end": 1026,
    "range": [
      1020,
      1026
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1027,
    "end": 1028,
    "range": [
      1027,
      1028
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1029,
    "end": 1035,
    "range": [
      1029,
      1035
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1035,
    "end": 1036,
    "range": [
      1035,
      1036
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1037,
    "end": 1038,
    "range": [
      1037,
      1038
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1043,
    "end": 1049,
    "range": [
      1043,
      1049
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1050,
    "end": 1056,
    "range": [
      1050,
      1056
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1057,
    "end": 1058,
    "range": [
      1057,
      1058
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1059,
    "end": 1062,
    "range": [
      1059,
      1062
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1063,
    "end": 1071,
    "range": [
      1063,
      1071
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1080,
    "end": 1081,
    "range": [
      1080,
      1081
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1082,
    "end": 1083,
    "range": [
      1082,
      1083
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1102,
    "end": 1103,
    "range": [
      1102,
      1103
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1104,
    "end": 1105,
    "range": [
      1104,
      1105
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1105,
    "end": 1106,
    "range": [
      1105,
      1106
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1106,
    "end": 1107,
    "range": [
      1106,
      1107
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1108,
    "end": 1109,
    "range": [
      1108,
      1109
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1110,
    "end": 1117,
    "range": [
      1110,
      1117
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1117,
    "end": 1118,
    "range": [
      1117,
      1118
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1119,
    "end": 1121,
    "range": [
      1119,
      1121
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1122,
    "end": 1123,
    "range": [
      1122,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1123,
    "end": 1124,
    "range": [
      1123,
      1124
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1124,
    "end": 1125,
    "range": [
      1124,
      1125
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1136,
    "end": 1137,
    "range": [
      1136,
      1137
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1138,
    "end": 1146,
    "range": [
      1138,
      1146
    ]
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1147,
    "end": 1151,
    "range": [
      1147,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1151,
    "end": 1152,
    "range": [
      1151,
      1152
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1152,
    "end": 1153,
    "range": [
      1152,
      1153
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1153,
    "end": 1154,
    "range": [
      1153,
      1154
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1155,
    "end": 1161,
    "range": [
      1155,
      1161
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1162,
    "end": 1163,
    "range": [
      1162,
      1163
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1164,
    "end": 1170,
    "range": [
      1164,
      1170
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1170,
    "end": 1171,
    "range": [
      1170,
      1171
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1172,
    "end": 1173,
    "range": [
      1172,
      1173
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1209,
    "end": 1215,
    "range": [
      1209,
      1215
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1216,
    "end": 1222,
    "range": [
      1216,
      1222
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1223,
    "end": 1224,
    "range": [
      1223,
      1224
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1225,
    "end": 1228,
    "range": [
      1225,
      1228
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1229,
    "end": 1237,
    "range": [
      1229,
      1237
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1246,
    "end": 1247,
    "range": [
      1246,
      1247
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1248,
    "end": 1249,
    "range": [
      1248,
      1249
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1249,
    "end": 1250,
    "range": [
      1249,
      1250
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1250,
    "end": 1251,
    "range": [
      1250,
      1251
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1252,
    "end": 1253,
    "range": [
      1252,
      1253
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1254,
    "end": 1256,
    "range": [
      1254,
      1256
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1256,
    "end": 1257,
    "range": [
      1256,
      1257
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1258,
    "end": 1260,
    "range": [
      1258,
      1260
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1261,
    "end": 1262,
    "range": [
      1261,
      1262
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1262,
    "end": 1263,
    "range": [
      1262,
      1263
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1282,
    "end": 1283,
    "range": [
      1282,
      1283
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1284,
    "end": 1285,
    "range": [
      1284,
      1285
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1285,
    "end": 1286,
    "range": [
      1285,
      1286
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1286,
    "end": 1287,
    "range": [
      1286,
      1287
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1288,
    "end": 1289,
    "range": [
      1288,
      1289
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1290,
    "end": 1297,
    "range": [
      1290,
      1297
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1297,
    "end": 1298,
    "range": [
      1297,
      1298
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1299,
    "end": 1301,
    "range": [
      1299,
      1301
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1302,
    "end": 1303,
    "range": [
      1302,
      1303
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1303,
    "end": 1304,
    "range": [
      1303,
      1304
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1304,
    "end": 1305,
    "range": [
      1304,
      1305
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1316,
    "end": 1317,
    "range": [
      1316,
      1317
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1318,
    "end": 1326,
    "range": [
      1318,
      1326
    ]
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1327,
    "end": 1331,
    "range": [
      1327,
      1331
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1331,
    "end": 1332,
    "range": [
      1331,
      1332
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1332,
    "end": 1333,
    "range": [
      1332,
      1333
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1333,
    "end": 1334,
    "range": [
      1333,
      1334
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1335,
    "end": 1341,
    "range": [
      1335,
      1341
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1342,
    "end": 1343,
    "range": [
      1342,
      1343
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1344,
    "end": 1350,
    "range": [
      1344,
      1350
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1351,
    "end": 1352,
    "range": [
      1351,
      1352
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1353,
    "end": 1360,
    "range": [
      1353,
      1360
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1360,
    "end": 1361,
    "range": [
      1360,
      1361
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1362,
    "end": 1363,
    "range": [
      1362,
      1363
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1368,
    "end": 1374,
    "range": [
      1368,
      1374
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1375,
    "end": 1381,
    "range": [
      1375,
      1381
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1382,
    "end": 1383,
    "range": [
      1382,
      1383
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1384,
    "end": 1387,
    "range": [
      1384,
      1387
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1388,
    "end": 1396,
    "range": [
      1388,
      1396
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1405,
    "end": 1406,
    "range": [
      1405,
      1406
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1407,
    "end": 1408,
    "range": [
      1407,
      1408
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1409,
    "end": 1412,
    "range": [
      1409,
      1412
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1413,
    "end": 1420,
    "range": [
      1413,
      1420
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1440,
    "end": 1441,
    "range": [
      1440,
      1441
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1442,
    "end": 1448,
    "range": [
      1442,
      1448
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1449,
    "end": 1450,
    "range": [
      1449,
      1450
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1451,
    "end": 1454,
    "range": [
      1451,
      1454
    ]
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 1455,
    "end": 1464,
    "range": [
      1455,
      1464
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1473,
    "end": 1474,
    "range": [
      1473,
      1474
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1475,
    "end": 1476,
    "range": [
      1475,
      1476
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1496,
    "end": 1497,
    "range": [
      1496,
      1497
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1498,
    "end": 1499,
    "range": [
      1498,
      1499
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1500,
    "end": 1502,
    "range": [
      1500,
      1502
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1503,
    "end": 1505,
    "range": [
      1503,
      1505
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1505,
    "end": 1506,
    "range": [
      1505,
      1506
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1518,
    "end": 1519,
    "range": [
      1518,
      1519
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1520,
    "end": 1528,
    "range": [
      1520,
      1528
    ]
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1529,
    "end": 1533,
    "range": [
      1529,
      1533
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1533,
    "end": 1534,
    "range": [
      1533,
      1534
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1534,
    "end": 1535,
    "range": [
      1534,
      1535
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1535,
    "end": 1536,
    "range": [
      1535,
      1536
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1537,
    "end": 1543,
    "range": [
      1537,
      1543
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1544,
    "end": 1545,
    "range": [
      1544,
      1545
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1546,
    "end": 1552,
    "range": [
      1546,
      1552
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1553,
    "end": 1554,
    "range": [
      1553,
      1554
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1555,
    "end": 1562,
    "range": [
      1555,
      1562
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1562,
    "end": 1563,
    "range": [
      1562,
      1563
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1564,
    "end": 1565,
    "range": [
      1564,
      1565
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1570,
    "end": 1573,
    "range": [
      1570,
      1573
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1574,
    "end": 1575,
    "range": [
      1574,
      1575
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1575,
    "end": 1576,
    "range": [
      1575,
      1576
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1577,
    "end": 1583,
    "range": [
      1577,
      1583
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1584,
    "end": 1585,
    "range": [
      1584,
      1585
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1586,
    "end": 1593,
    "range": [
      1586,
      1593
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1593,
    "end": 1594,
    "range": [
      1593,
      1594
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1599,
    "end": 1605,
    "range": [
      1599,
      1605
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1606,
    "end": 1612,
    "range": [
      1606,
      1612
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1613,
    "end": 1614,
    "range": [
      1613,
      1614
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1615,
    "end": 1618,
    "range": [
      1615,
      1618
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1619,
    "end": 1627,
    "range": [
      1619,
      1627
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1636,
    "end": 1637,
    "range": [
      1636,
      1637
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1638,
    "end": 1639,
    "range": [
      1638,
      1639
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1640,
    "end": 1643,
    "range": [
      1640,
      1643
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1644,
    "end": 1651,
    "range": [
      1644,
      1651
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1660,
    "end": 1661,
    "range": [
      1660,
      1661
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1662,
    "end": 1663,
    "range": [
      1662,
      1663
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1663,
    "end": 1664,
    "range": [
      1663,
      1664
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1664,
    "end": 1665,
    "range": [
      1664,
      1665
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1666,
    "end": 1667,
    "range": [
      1666,
      1667
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1668,
    "end": 1669,
    "range": [
      1668,
      1669
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1669,
    "end": 1670,
    "range": [
      1669,
      1670
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1671,
    "end": 1673,
    "range": [
      1671,
      1673
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1703,
    "end": 1704,
    "range": [
      1703,
      1704
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1704,
    "end": 1710,
    "range": [
      1704,
      1710
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1711,
    "end": 1712,
    "range": [
      1711,
      1712
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1713,
    "end": 1716,
    "range": [
      1713,
      1716
    ]
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 1717,
    "end": 1726,
    "range": [
      1717,
      1726
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1735,
    "end": 1736,
    "range": [
      1735,
      1736
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1737,
    "end": 1738,
    "range": [
      1737,
      1738
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1758,
    "end": 1759,
    "range": [
      1758,
      1759
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1760,
    "end": 1761,
    "range": [
      1760,
      1761
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1762,
    "end": 1764,
    "range": [
      1762,
      1764
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1765,
    "end": 1767,
    "range": [
      1765,
      1767
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1767,
    "end": 1768,
    "range": [
      1767,
      1768
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1768,
    "end": 1769,
    "range": [
      1768,
      1769
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1769,
    "end": 1770,
    "range": [
      1769,
      1770
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1782,
    "end": 1783,
    "range": [
      1782,
      1783
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1784,
    "end": 1792,
    "range": [
      1784,
      1792
    ]
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1793,
    "end": 1797,
    "range": [
      1793,
      1797
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1797,
    "end": 1798,
    "range": [
      1797,
      1798
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1798,
    "end": 1799,
    "range": [
      1798,
      1799
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1799,
    "end": 1800,
    "range": [
      1799,
      1800
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1801,
    "end": 1807,
    "range": [
      1801,
      1807
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1808,
    "end": 1809,
    "range": [
      1808,
      1809
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1810,
    "end": 1816,
    "range": [
      1810,
      1816
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1816,
    "end": 1817,
    "range": [
      1816,
      1817
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1818,
    "end": 1819,
    "range": [
      1818,
      1819
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1824,
    "end": 1827,
    "range": [
      1824,
      1827
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1828,
    "end": 1829,
    "range": [
      1828,
      1829
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1830,
    "end": 1831,
    "range": [
      1830,
      1831
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1832,
    "end": 1834,
    "range": [
      1832,
      1834
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1834,
    "end": 1835,
    "range": [
      1834,
      1835
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1935,
    "end": 1941,
    "range": [
      1935,
      1941
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1942,
    "end": 1948,
    "range": [
      1942,
      1948
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1949,
    "end": 1950,
    "range": [
      1949,
      1950
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1951,
    "end": 1954,
    "range": [
      1951,
      1954
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1955,
    "end": 1963,
    "range": [
      1955,
      1963
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1972,
    "end": 1973,
    "range": [
      1972,
      1973
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1974,
    "end": 1975,
    "range": [
      1974,
      1975
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1975,
    "end": 1976,
    "range": [
      1975,
      1976
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1976,
    "end": 1977,
    "range": [
      1976,
      1977
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1978,
    "end": 1979,
    "range": [
      1978,
      1979
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1980,
    "end": 1981,
    "range": [
      1980,
      1981
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1981,
    "end": 1982,
    "range": [
      1981,
      1982
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1982,
    "end": 1988,
    "range": [
      1982,
      1988
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1988,
    "end": 1989,
    "range": [
      1988,
      1989
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1990,
    "end": 1992,
    "range": [
      1990,
      1992
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1993,
    "end": 1994,
    "range": [
      1993,
      1994
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1995,
    "end": 1998,
    "range": [
      1995,
      1998
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1999,
    "end": 2006,
    "range": [
      1999,
      2006
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2006,
    "end": 2007,
    "range": [
      2006,
      2007
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2027,
    "end": 2028,
    "range": [
      2027,
      2028
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2029,
    "end": 2030,
    "range": [
      2029,
      2030
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2031,
    "end": 2034,
    "range": [
      2031,
      2034
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2035,
    "end": 2037,
    "range": [
      2035,
      2037
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2037,
    "end": 2038,
    "range": [
      2037,
      2038
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2050,
    "end": 2051,
    "range": [
      2050,
      2051
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2052,
    "end": 2060,
    "range": [
      2052,
      2060
    ]
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 2061,
    "end": 2066,
    "range": [
      2061,
      2066
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2066,
    "end": 2067,
    "range": [
      2066,
      2067
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2067,
    "end": 2068,
    "range": [
      2067,
      2068
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2068,
    "end": 2069,
    "range": [
      2068,
      2069
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2070,
    "end": 2076,
    "range": [
      2070,
      2076
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2077,
    "end": 2078,
    "range": [
      2077,
      2078
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2079,
    "end": 2085,
    "range": [
      2079,
      2085
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2086,
    "end": 2087,
    "range": [
      2086,
      2087
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2088,
    "end": 2095,
    "range": [
      2088,
      2095
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2095,
    "end": 2096,
    "range": [
      2095,
      2096
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2097,
    "end": 2098,
    "range": [
      2097,
      2098
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2128,
    "end": 2131,
    "range": [
      2128,
      2131
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2132,
    "end": 2133,
    "range": [
      2132,
      2133
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2133,
    "end": 2134,
    "range": [
      2133,
      2134
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2135,
    "end": 2142,
    "range": [
      2135,
      2142
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2143,
    "end": 2144,
    "range": [
      2143,
      2144
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2145,
    "end": 2151,
    "range": [
      2145,
      2151
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2151,
    "end": 2152,
    "range": [
      2151,
      2152
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2157,
    "end": 2163,
    "range": [
      2157,
      2163
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2164,
    "end": 2170,
    "range": [
      2164,
      2170
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2171,
    "end": 2172,
    "range": [
      2171,
      2172
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2173,
    "end": 2176,
    "range": [
      2173,
      2176
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2177,
    "end": 2185,
    "range": [
      2177,
      2185
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2194,
    "end": 2195,
    "range": [
      2194,
      2195
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2196,
    "end": 2197,
    "range": [
      2196,
      2197
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2216,
    "end": 2217,
    "range": [
      2216,
      2217
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2218,
    "end": 2219,
    "range": [
      2218,
      2219
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2219,
    "end": 2220,
    "range": [
      2219,
      2220
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2220,
    "end": 2221,
    "range": [
      2220,
      2221
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2222,
    "end": 2223,
    "range": [
      2222,
      2223
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2224,
    "end": 2225,
    "range": [
      2224,
      2225
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2225,
    "end": 2226,
    "range": [
      2225,
      2226
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2260,
    "end": 2262,
    "range": [
      2260,
      2262
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2263,
    "end": 2269,
    "range": [
      2263,
      2269
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2270,
    "end": 2271,
    "range": [
      2270,
      2271
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2272,
    "end": 2275,
    "range": [
      2272,
      2275
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 2276,
    "end": 2284,
    "range": [
      2276,
      2284
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2293,
    "end": 2295,
    "range": [
      2293,
      2295
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2296,
    "end": 2297,
    "range": [
      2296,
      2297
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2297,
    "end": 2298,
    "range": [
      2297,
      2298
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 2298,
    "end": 2306,
    "range": [
      2298,
      2306
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2306,
    "end": 2307,
    "range": [
      2306,
      2307
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2307,
    "end": 2308,
    "range": [
      2307,
      2308
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2308,
    "end": 2309,
    "range": [
      2308,
      2309
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2309,
    "end": 2310,
    "range": [
      2309,
      2310
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2326,
    "end": 2327,
    "range": [
      2326,
      2327
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2328,
    "end": 2336,
    "range": [
      2328,
      2336
    ]
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 2337,
    "end": 2342,
    "range": [
      2337,
      2342
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2342,
    "end": 2343,
    "range": [
      2342,
      2343
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2343,
    "end": 2344,
    "range": [
      2343,
      2344
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2344,
    "end": 2345,
    "range": [
      2344,
      2345
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2346,
    "end": 2352,
    "range": [
      2346,
      2352
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2353,
    "end": 2354,
    "range": [
      2353,
      2354
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2355,
    "end": 2361,
    "range": [
      2355,
      2361
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2362,
    "end": 2363,
    "range": [
      2362,
      2363
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2364,
    "end": 2371,
    "range": [
      2364,
      2371
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2371,
    "end": 2372,
    "range": [
      2371,
      2372
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2373,
    "end": 2374,
    "range": [
      2373,
      2374
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2404,
    "end": 2407,
    "range": [
      2404,
      2407
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2408,
    "end": 2409,
    "range": [
      2408,
      2409
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2409,
    "end": 2410,
    "range": [
      2409,
      2410
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2411,
    "end": 2417,
    "range": [
      2411,
      2417
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2418,
    "end": 2419,
    "range": [
      2418,
      2419
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2420,
    "end": 2427,
    "range": [
      2420,
      2427
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2428,
    "end": 2429,
    "range": [
      2428,
      2429
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2430,
    "end": 2436,
    "range": [
      2430,
      2436
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2436,
    "end": 2437,
    "range": [
      2436,
      2437
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2442,
    "end": 2448,
    "range": [
      2442,
      2448
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2449,
    "end": 2455,
    "range": [
      2449,
      2455
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2456,
    "end": 2457,
    "range": [
      2456,
      2457
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2458,
    "end": 2461,
    "range": [
      2458,
      2461
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2462,
    "end": 2470,
    "range": [
      2462,
      2470
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2479,
    "end": 2480,
    "range": [
      2479,
      2480
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2481,
    "end": 2482,
    "range": [
      2481,
      2482
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2501,
    "end": 2502,
    "range": [
      2501,
      2502
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2503,
    "end": 2504,
    "range": [
      2503,
      2504
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2504,
    "end": 2505,
    "range": [
      2504,
      2505
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2505,
    "end": 2506,
    "range": [
      2505,
      2506
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2507,
    "end": 2508,
    "range": [
      2507,
      2508
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2509,
    "end": 2510,
    "range": [
      2509,
      2510
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2510,
    "end": 2511,
    "range": [
      2510,
      2511
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2545,
    "end": 2547,
    "range": [
      2545,
      2547
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2548,
    "end": 2554,
    "range": [
      2548,
      2554
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2555,
    "end": 2556,
    "range": [
      2555,
      2556
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2557,
    "end": 2560,
    "range": [
      2557,
      2560
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 2561,
    "end": 2569,
    "range": [
      2561,
      2569
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2578,
    "end": 2580,
    "range": [
      2578,
      2580
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2581,
    "end": 2582,
    "range": [
      2581,
      2582
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2582,
    "end": 2583,
    "range": [
      2582,
      2583
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2584,
    "end": 2585,
    "range": [
      2584,
      2585
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2586,
    "end": 2588,
    "range": [
      2586,
      2588
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2588,
    "end": 2589,
    "range": [
      2588,
      2589
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2617,
    "end": 2619,
    "range": [
      2617,
      2619
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2620,
    "end": 2621,
    "range": [
      2620,
      2621
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2621,
    "end": 2622,
    "range": [
      2621,
      2622
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2622,
    "end": 2623,
    "range": [
      2622,
      2623
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2639,
    "end": 2640,
    "range": [
      2639,
      2640
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2641,
    "end": 2649,
    "range": [
      2641,
      2649
    ]
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 2650,
    "end": 2655,
    "range": [
      2650,
      2655
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2655,
    "end": 2656,
    "range": [
      2655,
      2656
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2656,
    "end": 2657,
    "range": [
      2656,
      2657
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2657,
    "end": 2658,
    "range": [
      2657,
      2658
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2659,
    "end": 2665,
    "range": [
      2659,
      2665
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2666,
    "end": 2667,
    "range": [
      2666,
      2667
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2668,
    "end": 2674,
    "range": [
      2668,
      2674
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2675,
    "end": 2676,
    "range": [
      2675,
      2676
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2677,
    "end": 2684,
    "range": [
      2677,
      2684
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2684,
    "end": 2685,
    "range": [
      2684,
      2685
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2686,
    "end": 2687,
    "range": [
      2686,
      2687
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2717,
    "end": 2720,
    "range": [
      2717,
      2720
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2721,
    "end": 2722,
    "range": [
      2721,
      2722
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2722,
    "end": 2723,
    "range": [
      2722,
      2723
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2724,
    "end": 2730,
    "range": [
      2724,
      2730
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2731,
    "end": 2732,
    "range": [
      2731,
      2732
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2733,
    "end": 2740,
    "range": [
      2733,
      2740
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2741,
    "end": 2742,
    "range": [
      2741,
      2742
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2743,
    "end": 2749,
    "range": [
      2743,
      2749
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2749,
    "end": 2750,
    "range": [
      2749,
      2750
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2755,
    "end": 2761,
    "range": [
      2755,
      2761
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2762,
    "end": 2768,
    "range": [
      2762,
      2768
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2769,
    "end": 2770,
    "range": [
      2769,
      2770
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2771,
    "end": 2774,
    "range": [
      2771,
      2774
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2775,
    "end": 2783,
    "range": [
      2775,
      2783
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2792,
    "end": 2793,
    "range": [
      2792,
      2793
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2794,
    "end": 2795,
    "range": [
      2794,
      2795
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2795,
    "end": 2796,
    "range": [
      2795,
      2796
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2796,
    "end": 2797,
    "range": [
      2796,
      2797
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2798,
    "end": 2799,
    "range": [
      2798,
      2799
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2800,
    "end": 2802,
    "range": [
      2800,
      2802
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2802,
    "end": 2803,
    "range": [
      2802,
      2803
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2804,
    "end": 2806,
    "range": [
      2804,
      2806
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2807,
    "end": 2808,
    "range": [
      2807,
      2808
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2808,
    "end": 2809,
    "range": [
      2808,
      2809
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 2809,
    "end": 2817,
    "range": [
      2809,
      2817
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2817,
    "end": 2818,
    "range": [
      2817,
      2818
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2818,
    "end": 2819,
    "range": [
      2818,
      2819
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2819,
    "end": 2820,
    "range": [
      2819,
      2820
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2820,
    "end": 2826,
    "range": [
      2820,
      2826
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2826,
    "end": 2827,
    "range": [
      2826,
      2827
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2846,
    "end": 2847,
    "range": [
      2846,
      2847
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2848,
    "end": 2849,
    "range": [
      2848,
      2849
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2849,
    "end": 2850,
    "range": [
      2849,
      2850
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2850,
    "end": 2851,
    "range": [
      2850,
      2851
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2852,
    "end": 2853,
    "range": [
      2852,
      2853
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2854,
    "end": 2855,
    "range": [
      2854,
      2855
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2855,
    "end": 2856,
    "range": [
      2855,
      2856
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2890,
    "end": 2892,
    "range": [
      2890,
      2892
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2893,
    "end": 2899,
    "range": [
      2893,
      2899
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2900,
    "end": 2901,
    "range": [
      2900,
      2901
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2902,
    "end": 2905,
    "range": [
      2902,
      2905
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 2906,
    "end": 2914,
    "range": [
      2906,
      2914
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2923,
    "end": 2925,
    "range": [
      2923,
      2925
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2926,
    "end": 2927,
    "range": [
      2926,
      2927
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2927,
    "end": 2928,
    "range": [
      2927,
      2928
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2928,
    "end": 2929,
    "range": [
      2928,
      2929
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2945,
    "end": 2946,
    "range": [
      2945,
      2946
    ]
  }
]
```
