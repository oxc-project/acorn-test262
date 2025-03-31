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
      "id": {
        "type": "Identifier",
        "start": 493,
        "end": 496,
        "name": "foo",
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
          "start": 497,
          "end": 515,
          "name": "x",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "test": {
                "type": "BinaryExpression",
                "start": 530,
                "end": 551,
                "left": {
                  "type": "UnaryExpression",
                  "start": 530,
                  "end": 538,
                  "operator": "typeof",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 537,
                    "end": 538,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 543,
                  "end": 551,
                  "value": "string",
                  "raw": "\"string\""
                }
              },
              "consequent": {
                "type": "MemberExpression",
                "start": 562,
                "end": 570,
                "object": {
                  "type": "Identifier",
                  "start": 562,
                  "end": 563,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 564,
                  "end": 570,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "alternate": {
                "type": "UpdateExpression",
                "start": 591,
                "end": 594,
                "operator": "++",
                "prefix": false,
                "argument": {
                  "type": "Identifier",
                  "start": 591,
                  "end": 592,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
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
      "start": 608,
      "end": 742,
      "id": {
        "type": "Identifier",
        "start": 617,
        "end": 621,
        "name": "foo2",
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
          "start": 622,
          "end": 640,
          "name": "x",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "test": {
                "type": "BinaryExpression",
                "start": 655,
                "end": 676,
                "left": {
                  "type": "UnaryExpression",
                  "start": 655,
                  "end": 663,
                  "operator": "typeof",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 662,
                    "end": 663,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 668,
                  "end": 676,
                  "value": "string",
                  "raw": "\"string\""
                }
              },
              "consequent": {
                "type": "LogicalExpression",
                "start": 688,
                "end": 706,
                "left": {
                  "type": "AssignmentExpression",
                  "start": 689,
                  "end": 700,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 689,
                    "end": 690,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 693,
                    "end": 700,
                    "value": "hello",
                    "raw": "\"hello\""
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "start": 705,
                  "end": 706,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "alternate": {
                "type": "Identifier",
                "start": 728,
                "end": 729,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
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
      "start": 743,
      "end": 872,
      "id": {
        "type": "Identifier",
        "start": 752,
        "end": 756,
        "name": "foo3",
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
          "start": 757,
          "end": 775,
          "name": "x",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "test": {
                "type": "BinaryExpression",
                "start": 790,
                "end": 811,
                "left": {
                  "type": "UnaryExpression",
                  "start": 790,
                  "end": 798,
                  "operator": "typeof",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 797,
                    "end": 798,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 803,
                  "end": 811,
                  "value": "string",
                  "raw": "\"string\""
                }
              },
              "consequent": {
                "type": "LogicalExpression",
                "start": 823,
                "end": 836,
                "left": {
                  "type": "AssignmentExpression",
                  "start": 824,
                  "end": 830,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 824,
                    "end": 825,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 828,
                    "end": 830,
                    "value": 10,
                    "raw": "10"
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "start": 835,
                  "end": 836,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "alternate": {
                "type": "Identifier",
                "start": 858,
                "end": 859,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
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
      "start": 873,
      "end": 1002,
      "id": {
        "type": "Identifier",
        "start": 882,
        "end": 886,
        "name": "foo4",
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
          "start": 887,
          "end": 905,
          "name": "x",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "test": {
                "type": "BinaryExpression",
                "start": 920,
                "end": 941,
                "left": {
                  "type": "UnaryExpression",
                  "start": 920,
                  "end": 928,
                  "operator": "typeof",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 927,
                    "end": 928,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 933,
                  "end": 941,
                  "value": "string",
                  "raw": "\"string\""
                }
              },
              "consequent": {
                "type": "Identifier",
                "start": 952,
                "end": 953,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "alternate": {
                "type": "LogicalExpression",
                "start": 975,
                "end": 988,
                "left": {
                  "type": "AssignmentExpression",
                  "start": 976,
                  "end": 982,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 976,
                    "end": 977,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 980,
                    "end": 982,
                    "value": 10,
                    "raw": "10"
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "start": 987,
                  "end": 988,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
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
      "start": 1003,
      "end": 1137,
      "id": {
        "type": "Identifier",
        "start": 1012,
        "end": 1016,
        "name": "foo5",
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
          "start": 1017,
          "end": 1035,
          "name": "x",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "test": {
                "type": "BinaryExpression",
                "start": 1050,
                "end": 1071,
                "left": {
                  "type": "UnaryExpression",
                  "start": 1050,
                  "end": 1058,
                  "operator": "typeof",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 1057,
                    "end": 1058,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 1063,
                  "end": 1071,
                  "value": "string",
                  "raw": "\"string\""
                }
              },
              "consequent": {
                "type": "Identifier",
                "start": 1082,
                "end": 1083,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "alternate": {
                "type": "LogicalExpression",
                "start": 1105,
                "end": 1123,
                "left": {
                  "type": "AssignmentExpression",
                  "start": 1106,
                  "end": 1117,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 1106,
                    "end": 1107,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1110,
                    "end": 1117,
                    "value": "hello",
                    "raw": "\"hello\""
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "start": 1122,
                  "end": 1123,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
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
      "start": 1138,
      "end": 1317,
      "id": {
        "type": "Identifier",
        "start": 1147,
        "end": 1151,
        "name": "foo6",
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
          "start": 1152,
          "end": 1170,
          "name": "x",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "test": {
                "type": "BinaryExpression",
                "start": 1216,
                "end": 1237,
                "left": {
                  "type": "UnaryExpression",
                  "start": 1216,
                  "end": 1224,
                  "operator": "typeof",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 1223,
                    "end": 1224,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 1229,
                  "end": 1237,
                  "value": "string",
                  "raw": "\"string\""
                }
              },
              "consequent": {
                "type": "LogicalExpression",
                "start": 1249,
                "end": 1262,
                "left": {
                  "type": "AssignmentExpression",
                  "start": 1250,
                  "end": 1256,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 1250,
                    "end": 1251,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1254,
                    "end": 1256,
                    "value": 10,
                    "raw": "10"
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "start": 1261,
                  "end": 1262,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "alternate": {
                "type": "LogicalExpression",
                "start": 1285,
                "end": 1303,
                "left": {
                  "type": "AssignmentExpression",
                  "start": 1286,
                  "end": 1297,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 1286,
                    "end": 1287,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1290,
                    "end": 1297,
                    "value": "hello",
                    "raw": "\"hello\""
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "start": 1302,
                  "end": 1303,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
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
      "start": 1318,
      "end": 1519,
      "id": {
        "type": "Identifier",
        "start": 1327,
        "end": 1331,
        "name": "foo7",
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
          "start": 1332,
          "end": 1360,
          "name": "x",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "test": {
                "type": "BinaryExpression",
                "start": 1375,
                "end": 1396,
                "left": {
                  "type": "UnaryExpression",
                  "start": 1375,
                  "end": 1383,
                  "operator": "typeof",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 1382,
                    "end": 1383,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 1388,
                  "end": 1396,
                  "value": "string",
                  "raw": "\"string\""
                }
              },
              "consequent": {
                "type": "BinaryExpression",
                "start": 1407,
                "end": 1420,
                "left": {
                  "type": "Identifier",
                  "start": 1407,
                  "end": 1408,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 1413,
                  "end": 1420,
                  "value": "hello",
                  "raw": "\"hello\""
                }
              },
              "alternate": {
                "type": "ConditionalExpression",
                "start": 1442,
                "end": 1505,
                "test": {
                  "type": "BinaryExpression",
                  "start": 1442,
                  "end": 1464,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 1442,
                    "end": 1450,
                    "operator": "typeof",
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "start": 1449,
                      "end": 1450,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 1455,
                    "end": 1464,
                    "value": "boolean",
                    "raw": "\"boolean\""
                  }
                },
                "consequent": {
                  "type": "Identifier",
                  "start": 1475,
                  "end": 1476,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "alternate": {
                  "type": "BinaryExpression",
                  "start": 1498,
                  "end": 1505,
                  "left": {
                    "type": "Identifier",
                    "start": 1498,
                    "end": 1499,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "==",
                  "right": {
                    "type": "Literal",
                    "start": 1503,
                    "end": 1505,
                    "value": 10,
                    "raw": "10"
                  }
                }
              }
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
      "start": 1520,
      "end": 1783,
      "id": {
        "type": "Identifier",
        "start": 1529,
        "end": 1533,
        "name": "foo8",
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
          "start": 1534,
          "end": 1562,
          "name": "x",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 1574,
                  "end": 1593,
                  "name": "b",
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 1599,
            "end": 1770,
            "argument": {
              "type": "ConditionalExpression",
              "start": 1606,
              "end": 1769,
              "test": {
                "type": "BinaryExpression",
                "start": 1606,
                "end": 1627,
                "left": {
                  "type": "UnaryExpression",
                  "start": 1606,
                  "end": 1614,
                  "operator": "typeof",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 1613,
                    "end": 1614,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 1619,
                  "end": 1627,
                  "value": "string",
                  "raw": "\"string\""
                }
              },
              "consequent": {
                "type": "BinaryExpression",
                "start": 1638,
                "end": 1651,
                "left": {
                  "type": "Identifier",
                  "start": 1638,
                  "end": 1639,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 1644,
                  "end": 1651,
                  "value": "hello",
                  "raw": "\"hello\""
                }
              },
              "alternate": {
                "type": "LogicalExpression",
                "start": 1663,
                "end": 1768,
                "left": {
                  "type": "AssignmentExpression",
                  "start": 1664,
                  "end": 1669,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 1664,
                    "end": 1665,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1668,
                    "end": 1669,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "ConditionalExpression",
                  "start": 1704,
                  "end": 1767,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1704,
                    "end": 1726,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 1704,
                      "end": 1712,
                      "operator": "typeof",
                      "prefix": true,
                      "argument": {
                        "type": "Identifier",
                        "start": 1711,
                        "end": 1712,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 1717,
                      "end": 1726,
                      "value": "boolean",
                      "raw": "\"boolean\""
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1737,
                    "end": 1738,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "BinaryExpression",
                    "start": 1760,
                    "end": 1767,
                    "left": {
                      "type": "Identifier",
                      "start": 1760,
                      "end": 1761,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "start": 1765,
                      "end": 1767,
                      "value": 10,
                      "raw": "10"
                    }
                  }
                }
              }
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
      "start": 1784,
      "end": 2051,
      "id": {
        "type": "Identifier",
        "start": 1793,
        "end": 1797,
        "name": "foo9",
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
          "start": 1798,
          "end": 1816,
          "name": "x",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 1828,
                  "end": 1829,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1832,
                  "end": 1834,
                  "value": 10,
                  "raw": "10"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 1935,
            "end": 2038,
            "argument": {
              "type": "ConditionalExpression",
              "start": 1942,
              "end": 2037,
              "test": {
                "type": "BinaryExpression",
                "start": 1942,
                "end": 1963,
                "left": {
                  "type": "UnaryExpression",
                  "start": 1942,
                  "end": 1950,
                  "operator": "typeof",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 1949,
                    "end": 1950,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 1955,
                  "end": 1963,
                  "value": "string",
                  "raw": "\"string\""
                }
              },
              "consequent": {
                "type": "LogicalExpression",
                "start": 1975,
                "end": 2006,
                "left": {
                  "type": "AssignmentExpression",
                  "start": 1976,
                  "end": 1988,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 1976,
                    "end": 1977,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "MemberExpression",
                    "start": 1980,
                    "end": 1988,
                    "object": {
                      "type": "Identifier",
                      "start": 1980,
                      "end": 1981,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1982,
                      "end": 1988,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "start": 1993,
                  "end": 2006,
                  "left": {
                    "type": "Identifier",
                    "start": 1993,
                    "end": 1994,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 1999,
                    "end": 2006,
                    "value": "hello",
                    "raw": "\"hello\""
                  }
                }
              },
              "alternate": {
                "type": "BinaryExpression",
                "start": 2029,
                "end": 2037,
                "left": {
                  "type": "Identifier",
                  "start": 2029,
                  "end": 2030,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 2035,
                  "end": 2037,
                  "value": 10,
                  "raw": "10"
                }
              }
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
      "start": 2052,
      "end": 2327,
      "id": {
        "type": "Identifier",
        "start": 2061,
        "end": 2066,
        "name": "foo10",
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
          "start": 2067,
          "end": 2095,
          "name": "x",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 2132,
                  "end": 2151,
                  "name": "b",
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 2157,
            "end": 2310,
            "argument": {
              "type": "ConditionalExpression",
              "start": 2164,
              "end": 2309,
              "test": {
                "type": "BinaryExpression",
                "start": 2164,
                "end": 2185,
                "left": {
                  "type": "UnaryExpression",
                  "start": 2164,
                  "end": 2172,
                  "operator": "typeof",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 2171,
                    "end": 2172,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 2177,
                  "end": 2185,
                  "value": "string",
                  "raw": "\"string\""
                }
              },
              "consequent": {
                "type": "Identifier",
                "start": 2196,
                "end": 2197,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "alternate": {
                "type": "LogicalExpression",
                "start": 2219,
                "end": 2308,
                "left": {
                  "type": "LogicalExpression",
                  "start": 2219,
                  "end": 2284,
                  "left": {
                    "type": "AssignmentExpression",
                    "start": 2220,
                    "end": 2225,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2220,
                      "end": 2221,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2224,
                      "end": 2225,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "BinaryExpression",
                    "start": 2263,
                    "end": 2284,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 2263,
                      "end": 2271,
                      "operator": "typeof",
                      "prefix": true,
                      "argument": {
                        "type": "Identifier",
                        "start": 2270,
                        "end": 2271,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 2276,
                      "end": 2284,
                      "value": "number",
                      "raw": "\"number\""
                    }
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "CallExpression",
                  "start": 2296,
                  "end": 2308,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2296,
                    "end": 2306,
                    "object": {
                      "type": "Identifier",
                      "start": 2296,
                      "end": 2297,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2298,
                      "end": 2306,
                      "name": "toString",
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
                }
              }
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
      "start": 2328,
      "end": 2640,
      "id": {
        "type": "Identifier",
        "start": 2337,
        "end": 2342,
        "name": "foo11",
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
          "start": 2343,
          "end": 2371,
          "name": "x",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 2408,
                  "end": 2436,
                  "name": "b",
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 2442,
            "end": 2623,
            "argument": {
              "type": "ConditionalExpression",
              "start": 2449,
              "end": 2622,
              "test": {
                "type": "BinaryExpression",
                "start": 2449,
                "end": 2470,
                "left": {
                  "type": "UnaryExpression",
                  "start": 2449,
                  "end": 2457,
                  "operator": "typeof",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 2456,
                    "end": 2457,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 2462,
                  "end": 2470,
                  "value": "string",
                  "raw": "\"string\""
                }
              },
              "consequent": {
                "type": "Identifier",
                "start": 2481,
                "end": 2482,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "alternate": {
                "type": "LogicalExpression",
                "start": 2504,
                "end": 2621,
                "left": {
                  "type": "LogicalExpression",
                  "start": 2504,
                  "end": 2589,
                  "left": {
                    "type": "LogicalExpression",
                    "start": 2504,
                    "end": 2569,
                    "left": {
                      "type": "AssignmentExpression",
                      "start": 2505,
                      "end": 2510,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 2505,
                        "end": 2506,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 2509,
                        "end": 2510,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "operator": "&&",
                    "right": {
                      "type": "BinaryExpression",
                      "start": 2548,
                      "end": 2569,
                      "left": {
                        "type": "UnaryExpression",
                        "start": 2548,
                        "end": 2556,
                        "operator": "typeof",
                        "prefix": true,
                        "argument": {
                          "type": "Identifier",
                          "start": 2555,
                          "end": 2556,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "start": 2561,
                        "end": 2569,
                        "value": "number",
                        "raw": "\"number\""
                      }
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "AssignmentExpression",
                    "start": 2582,
                    "end": 2588,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2582,
                      "end": 2583,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 2586,
                      "end": 2588,
                      "value": 10,
                      "raw": "10"
                    }
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "start": 2620,
                  "end": 2621,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
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
      "start": 2641,
      "end": 2946,
      "id": {
        "type": "Identifier",
        "start": 2650,
        "end": 2655,
        "name": "foo12",
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
          "start": 2656,
          "end": 2684,
          "name": "x",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 2721,
                  "end": 2749,
                  "name": "b",
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 2755,
            "end": 2929,
            "argument": {
              "type": "ConditionalExpression",
              "start": 2762,
              "end": 2928,
              "test": {
                "type": "BinaryExpression",
                "start": 2762,
                "end": 2783,
                "left": {
                  "type": "UnaryExpression",
                  "start": 2762,
                  "end": 2770,
                  "operator": "typeof",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 2769,
                    "end": 2770,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 2775,
                  "end": 2783,
                  "value": "string",
                  "raw": "\"string\""
                }
              },
              "consequent": {
                "type": "LogicalExpression",
                "start": 2795,
                "end": 2826,
                "left": {
                  "type": "AssignmentExpression",
                  "start": 2796,
                  "end": 2802,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 2796,
                    "end": 2797,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 2800,
                    "end": 2802,
                    "value": 10,
                    "raw": "10"
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "MemberExpression",
                  "start": 2807,
                  "end": 2826,
                  "object": {
                    "type": "CallExpression",
                    "start": 2807,
                    "end": 2819,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2807,
                      "end": 2817,
                      "object": {
                        "type": "Identifier",
                        "start": 2807,
                        "end": 2808,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2809,
                        "end": 2817,
                        "name": "toString",
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
                  "property": {
                    "type": "Identifier",
                    "start": 2820,
                    "end": 2826,
                    "name": "length",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              },
              "alternate": {
                "type": "LogicalExpression",
                "start": 2849,
                "end": 2927,
                "left": {
                  "type": "LogicalExpression",
                  "start": 2849,
                  "end": 2914,
                  "left": {
                    "type": "AssignmentExpression",
                    "start": 2850,
                    "end": 2855,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2850,
                      "end": 2851,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2854,
                      "end": 2855,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "BinaryExpression",
                    "start": 2893,
                    "end": 2914,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 2893,
                      "end": 2901,
                      "operator": "typeof",
                      "prefix": true,
                      "argument": {
                        "type": "Identifier",
                        "start": 2900,
                        "end": 2901,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 2906,
                      "end": 2914,
                      "value": "number",
                      "raw": "\"number\""
                    }
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "start": 2926,
                  "end": 2927,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            }
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
