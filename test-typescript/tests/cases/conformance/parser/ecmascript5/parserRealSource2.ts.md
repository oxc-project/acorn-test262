parserRealSource2.ts
```json
{
  "type": "Program",
  "start": 211,
  "end": 8817,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 211,
      "end": 8817,
      "body": {
        "type": "TSModuleBlock",
        "start": 229,
        "end": 8817,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 236,
            "end": 328,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 243,
              "end": 328,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 287,
                "end": 328,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 297,
                    "end": 322,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 304,
                      "end": 321,
                      "operator": "!=",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 305,
                        "end": 315,
                        "operator": "&",
                        "left": {
                          "type": "Identifier",
                          "start": 305,
                          "end": 308,
                          "decorators": [],
                          "name": "val",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 311,
                          "end": 315,
                          "decorators": [],
                          "name": "flag",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 320,
                        "end": 321,
                        "raw": "0",
                        "value": 0
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
                "start": 252,
                "end": 259,
                "decorators": [],
                "name": "hasFlag",
                "optional": false
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 260,
                  "end": 271,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 263,
                    "end": 271,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 265,
                      "end": 271
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 273,
                  "end": 285,
                  "decorators": [],
                  "name": "flag",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 277,
                    "end": 285,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 279,
                      "end": 285
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
            "type": "ExportNamedDeclaration",
            "start": 334,
            "end": 2151,
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 341,
              "end": 2151,
              "body": {
                "type": "TSEnumBody",
                "start": 363,
                "end": 2151,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 373,
                    "end": 381,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 373,
                      "end": 377,
                      "decorators": [],
                      "name": "None",
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 380,
                      "end": 381,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 391,
                    "end": 400,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 391,
                      "end": 396,
                      "decorators": [],
                      "name": "Comma",
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 399,
                      "end": 400,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 419,
                    "end": 434,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 419,
                      "end": 425,
                      "decorators": [],
                      "name": "SColon",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 428,
                      "end": 434,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 428,
                        "end": 429,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 433,
                        "end": 434,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 454,
                    "end": 466,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 454,
                      "end": 457,
                      "decorators": [],
                      "name": "Asg",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 460,
                      "end": 466,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 460,
                        "end": 461,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 465,
                        "end": 466,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 483,
                    "end": 497,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 483,
                      "end": 488,
                      "decorators": [],
                      "name": "BinOp",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 491,
                      "end": 497,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 491,
                        "end": 492,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 496,
                        "end": 497,
                        "raw": "3",
                        "value": 3
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 732,
                    "end": 747,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 732,
                      "end": 738,
                      "decorators": [],
                      "name": "RBrack",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 741,
                      "end": 747,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 741,
                        "end": 742,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 746,
                        "end": 747,
                        "raw": "4",
                        "value": 4
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 767,
                    "end": 782,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 767,
                      "end": 773,
                      "decorators": [],
                      "name": "RCurly",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 776,
                      "end": 782,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 776,
                        "end": 777,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 781,
                        "end": 782,
                        "raw": "5",
                        "value": 5
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 802,
                    "end": 817,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 802,
                      "end": 808,
                      "decorators": [],
                      "name": "RParen",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 811,
                      "end": 817,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 811,
                        "end": 812,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 816,
                        "end": 817,
                        "raw": "6",
                        "value": 6
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 837,
                    "end": 849,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 837,
                      "end": 840,
                      "decorators": [],
                      "name": "Dot",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 843,
                      "end": 849,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 843,
                        "end": 844,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 848,
                        "end": 849,
                        "raw": "7",
                        "value": 7
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 866,
                    "end": 880,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 866,
                      "end": 871,
                      "decorators": [],
                      "name": "Colon",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 874,
                      "end": 880,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 874,
                        "end": 875,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 879,
                        "end": 880,
                        "raw": "8",
                        "value": 8
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 899,
                    "end": 916,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 899,
                      "end": 907,
                      "decorators": [],
                      "name": "PrimType",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 910,
                      "end": 916,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 910,
                        "end": 911,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 915,
                        "end": 916,
                        "raw": "9",
                        "value": 9
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 953,
                    "end": 968,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 953,
                      "end": 958,
                      "decorators": [],
                      "name": "AddOp",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 961,
                      "end": 968,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 961,
                        "end": 962,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 966,
                        "end": 968,
                        "raw": "10",
                        "value": 10
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 990,
                    "end": 1006,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 990,
                      "end": 996,
                      "decorators": [],
                      "name": "LCurly",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 999,
                      "end": 1006,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 999,
                        "end": 1000,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1004,
                        "end": 1006,
                        "raw": "11",
                        "value": 11
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1026,
                    "end": 1041,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1026,
                      "end": 1031,
                      "decorators": [],
                      "name": "PreOp",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1034,
                      "end": 1041,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 1034,
                        "end": 1035,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1039,
                        "end": 1041,
                        "raw": "12",
                        "value": 12
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1076,
                    "end": 1092,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1076,
                      "end": 1082,
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1085,
                      "end": 1092,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 1085,
                        "end": 1086,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1090,
                        "end": 1092,
                        "raw": "13",
                        "value": 13
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1112,
                    "end": 1128,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1112,
                      "end": 1118,
                      "decorators": [],
                      "name": "LParen",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1121,
                      "end": 1128,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 1121,
                        "end": 1122,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1126,
                        "end": 1128,
                        "raw": "14",
                        "value": 14
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1148,
                    "end": 1164,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1148,
                      "end": 1154,
                      "decorators": [],
                      "name": "LBrack",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1157,
                      "end": 1164,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 1157,
                        "end": 1158,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1162,
                        "end": 1164,
                        "raw": "15",
                        "value": 15
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1184,
                    "end": 1199,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1184,
                      "end": 1189,
                      "decorators": [],
                      "name": "Scope",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1192,
                      "end": 1199,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 1192,
                        "end": 1193,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1197,
                        "end": 1199,
                        "raw": "16",
                        "value": 16
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1218,
                    "end": 1230,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1218,
                      "end": 1220,
                      "decorators": [],
                      "name": "In",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1223,
                      "end": 1230,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 1223,
                        "end": 1224,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1228,
                        "end": 1230,
                        "raw": "17",
                        "value": 17
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1246,
                    "end": 1261,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1246,
                      "end": 1251,
                      "decorators": [],
                      "name": "SCase",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1254,
                      "end": 1261,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 1254,
                        "end": 1255,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1259,
                        "end": 1261,
                        "raw": "18",
                        "value": 18
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1288,
                    "end": 1302,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1288,
                      "end": 1292,
                      "decorators": [],
                      "name": "Else",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1295,
                      "end": 1302,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 1295,
                        "end": 1296,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1300,
                        "end": 1302,
                        "raw": "19",
                        "value": 19
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1320,
                    "end": 1335,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1320,
                      "end": 1325,
                      "decorators": [],
                      "name": "Catch",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1328,
                      "end": 1335,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 1328,
                        "end": 1329,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1333,
                        "end": 1335,
                        "raw": "20",
                        "value": 20
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1363,
                    "end": 1376,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1363,
                      "end": 1366,
                      "decorators": [],
                      "name": "Var",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1369,
                      "end": 1376,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 1369,
                        "end": 1370,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1374,
                        "end": 1376,
                        "raw": "21",
                        "value": 21
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1390,
                    "end": 1404,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1390,
                      "end": 1394,
                      "decorators": [],
                      "name": "Stmt",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1397,
                      "end": 1404,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 1397,
                        "end": 1398,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1402,
                        "end": 1404,
                        "raw": "22",
                        "value": 22
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1480,
                    "end": 1495,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1480,
                      "end": 1485,
                      "decorators": [],
                      "name": "While",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1488,
                      "end": 1495,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 1488,
                        "end": 1489,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1493,
                        "end": 1495,
                        "raw": "23",
                        "value": 23
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1514,
                    "end": 1526,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1514,
                      "end": 1516,
                      "decorators": [],
                      "name": "ID",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1519,
                      "end": 1526,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 1519,
                        "end": 1520,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1524,
                        "end": 1526,
                        "raw": "24",
                        "value": 24
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1542,
                    "end": 1558,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1542,
                      "end": 1548,
                      "decorators": [],
                      "name": "Prefix",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1551,
                      "end": 1558,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 1551,
                        "end": 1552,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1556,
                        "end": 1558,
                        "raw": "25",
                        "value": 25
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1599,
                    "end": 1616,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1599,
                      "end": 1606,
                      "decorators": [],
                      "name": "Literal",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1609,
                      "end": 1616,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 1609,
                        "end": 1610,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1614,
                        "end": 1616,
                        "raw": "26",
                        "value": 26
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1652,
                    "end": 1666,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1652,
                      "end": 1656,
                      "decorators": [],
                      "name": "RLit",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1659,
                      "end": 1666,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 1659,
                        "end": 1660,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1664,
                        "end": 1666,
                        "raw": "27",
                        "value": 27
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1703,
                    "end": 1717,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1703,
                      "end": 1707,
                      "decorators": [],
                      "name": "Func",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1710,
                      "end": 1717,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 1710,
                        "end": 1711,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1715,
                        "end": 1717,
                        "raw": "28",
                        "value": 28
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1739,
                    "end": 1752,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1739,
                      "end": 1742,
                      "decorators": [],
                      "name": "EOF",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1745,
                      "end": 1752,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 1745,
                        "end": 1746,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1750,
                        "end": 1752,
                        "raw": "29",
                        "value": 29
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1818,
                    "end": 1839,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1818,
                      "end": 1829,
                      "decorators": [],
                      "name": "TypeScriptS",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1832,
                      "end": 1839,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 1832,
                        "end": 1833,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1837,
                        "end": 1839,
                        "raw": "30",
                        "value": 30
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1920,
                    "end": 2028,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1920,
                      "end": 1929,
                      "decorators": [],
                      "name": "ExprStart",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1932,
                      "end": 2028,
                      "operator": "|",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1932,
                        "end": 2018,
                        "operator": "|",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 1932,
                          "end": 2011,
                          "operator": "|",
                          "left": {
                            "type": "BinaryExpression",
                            "start": 1932,
                            "end": 2004,
                            "operator": "|",
                            "left": {
                              "type": "BinaryExpression",
                              "start": 1932,
                              "end": 1995,
                              "operator": "|",
                              "left": {
                                "type": "BinaryExpression",
                                "start": 1932,
                                "end": 1990,
                                "operator": "|",
                                "left": {
                                  "type": "BinaryExpression",
                                  "start": 1932,
                                  "end": 1981,
                                  "operator": "|",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "start": 1932,
                                    "end": 1972,
                                    "operator": "|",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "start": 1932,
                                      "end": 1963,
                                      "operator": "|",
                                      "left": {
                                        "type": "BinaryExpression",
                                        "start": 1932,
                                        "end": 1955,
                                        "operator": "|",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "start": 1932,
                                          "end": 1946,
                                          "operator": "|",
                                          "left": {
                                            "type": "Identifier",
                                            "start": 1932,
                                            "end": 1938,
                                            "decorators": [],
                                            "name": "SColon",
                                            "optional": false
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "start": 1941,
                                            "end": 1946,
                                            "decorators": [],
                                            "name": "AddOp",
                                            "optional": false
                                          }
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "start": 1949,
                                          "end": 1955,
                                          "decorators": [],
                                          "name": "LCurly",
                                          "optional": false
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 1958,
                                        "end": 1963,
                                        "decorators": [],
                                        "name": "PreOp",
                                        "optional": false
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 1966,
                                      "end": 1972,
                                      "decorators": [],
                                      "name": "RegExp",
                                      "optional": false
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 1975,
                                    "end": 1981,
                                    "decorators": [],
                                    "name": "LParen",
                                    "optional": false
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 1984,
                                  "end": 1990,
                                  "decorators": [],
                                  "name": "LBrack",
                                  "optional": false
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 1993,
                                "end": 1995,
                                "decorators": [],
                                "name": "ID",
                                "optional": false
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 1998,
                              "end": 2004,
                              "decorators": [],
                              "name": "Prefix",
                              "optional": false
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 2007,
                            "end": 2011,
                            "decorators": [],
                            "name": "RLit",
                            "optional": false
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 2014,
                          "end": 2018,
                          "decorators": [],
                          "name": "Func",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 2021,
                        "end": 2028,
                        "decorators": [],
                        "name": "Literal",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2038,
                    "end": 2103,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 2038,
                      "end": 2047,
                      "decorators": [],
                      "name": "StmtStart",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 2050,
                      "end": 2103,
                      "operator": "|",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 2050,
                        "end": 2089,
                        "operator": "|",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 2050,
                          "end": 2081,
                          "operator": "|",
                          "left": {
                            "type": "BinaryExpression",
                            "start": 2050,
                            "end": 2074,
                            "operator": "|",
                            "left": {
                              "type": "BinaryExpression",
                              "start": 2050,
                              "end": 2068,
                              "operator": "|",
                              "left": {
                                "type": "Identifier",
                                "start": 2050,
                                "end": 2059,
                                "decorators": [],
                                "name": "ExprStart",
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 2062,
                                "end": 2068,
                                "decorators": [],
                                "name": "SColon",
                                "optional": false
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 2071,
                              "end": 2074,
                              "decorators": [],
                              "name": "Var",
                              "optional": false
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 2077,
                            "end": 2081,
                            "decorators": [],
                            "name": "Stmt",
                            "optional": false
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 2084,
                          "end": 2089,
                          "decorators": [],
                          "name": "While",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 2092,
                        "end": 2103,
                        "decorators": [],
                        "name": "TypeScriptS",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2113,
                    "end": 2144,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 2113,
                      "end": 2120,
                      "decorators": [],
                      "name": "Postfix",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 2123,
                      "end": 2144,
                      "operator": "|",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 2123,
                        "end": 2135,
                        "operator": "|",
                        "left": {
                          "type": "Identifier",
                          "start": 2123,
                          "end": 2126,
                          "decorators": [],
                          "name": "Dot",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 2129,
                          "end": 2135,
                          "decorators": [],
                          "name": "LParen",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 2138,
                        "end": 2144,
                        "decorators": [],
                        "name": "LBrack",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "const": false,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 346,
                "end": 362,
                "decorators": [],
                "name": "ErrorRecoverySet",
                "optional": false
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 2157,
            "end": 2538,
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 2164,
              "end": 2538,
              "body": {
                "type": "TSEnumBody",
                "start": 2185,
                "end": 2538,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 2195,
                    "end": 2203,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 2195,
                      "end": 2199,
                      "decorators": [],
                      "name": "None",
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 2202,
                      "end": 2203,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2213,
                    "end": 2240,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 2213,
                      "end": 2231,
                      "decorators": [],
                      "name": "ModuleDeclarations",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 2234,
                      "end": 2240,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 2234,
                        "end": 2235,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2239,
                        "end": 2240,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2250,
                    "end": 2276,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 2250,
                      "end": 2267,
                      "decorators": [],
                      "name": "ClassDeclarations",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 2270,
                      "end": 2276,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 2270,
                        "end": 2271,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2275,
                        "end": 2276,
                        "raw": "3",
                        "value": 3
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2286,
                    "end": 2316,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 2286,
                      "end": 2307,
                      "decorators": [],
                      "name": "InterfaceDeclarations",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 2310,
                      "end": 2316,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 2310,
                        "end": 2311,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2315,
                        "end": 2316,
                        "raw": "4",
                        "value": 4
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2326,
                    "end": 2355,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 2326,
                      "end": 2345,
                      "decorators": [],
                      "name": "AmbientDeclarations",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 2348,
                      "end": 2355,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 2348,
                        "end": 2349,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2353,
                        "end": 2355,
                        "raw": "10",
                        "value": 10
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2365,
                    "end": 2385,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 2365,
                      "end": 2375,
                      "decorators": [],
                      "name": "Properties",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 2378,
                      "end": 2385,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 2378,
                        "end": 2379,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2383,
                        "end": 2385,
                        "raw": "11",
                        "value": 11
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2396,
                    "end": 2489,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 2396,
                      "end": 2402,
                      "decorators": [],
                      "name": "Global",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 2405,
                      "end": 2489,
                      "operator": "|",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 2405,
                        "end": 2467,
                        "operator": "|",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 2405,
                          "end": 2443,
                          "operator": "|",
                          "left": {
                            "type": "Identifier",
                            "start": 2405,
                            "end": 2423,
                            "decorators": [],
                            "name": "ModuleDeclarations",
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 2426,
                            "end": 2443,
                            "decorators": [],
                            "name": "ClassDeclarations",
                            "optional": false
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 2446,
                          "end": 2467,
                          "decorators": [],
                          "name": "InterfaceDeclarations",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 2470,
                        "end": 2489,
                        "decorators": [],
                        "name": "AmbientDeclarations",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2499,
                    "end": 2531,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 2499,
                      "end": 2509,
                      "decorators": [],
                      "name": "QuickParse",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 2512,
                      "end": 2531,
                      "operator": "|",
                      "left": {
                        "type": "Identifier",
                        "start": 2512,
                        "end": 2518,
                        "decorators": [],
                        "name": "Global",
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 2521,
                        "end": 2531,
                        "decorators": [],
                        "name": "Properties",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "const": false,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 2169,
                "end": 2184,
                "decorators": [],
                "name": "AllowedElements",
                "optional": false
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 2544,
            "end": 2792,
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 2551,
              "end": 2792,
              "body": {
                "type": "TSEnumBody",
                "start": 2566,
                "end": 2792,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 2576,
                    "end": 2584,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 2576,
                      "end": 2580,
                      "decorators": [],
                      "name": "None",
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 2583,
                      "end": 2584,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2594,
                    "end": 2605,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 2594,
                      "end": 2601,
                      "decorators": [],
                      "name": "Private",
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 2604,
                      "end": 2605,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2615,
                    "end": 2630,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 2615,
                      "end": 2621,
                      "decorators": [],
                      "name": "Public",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 2624,
                      "end": 2630,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 2624,
                        "end": 2625,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2629,
                        "end": 2630,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2640,
                    "end": 2657,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 2640,
                      "end": 2648,
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 2651,
                      "end": 2657,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 2651,
                        "end": 2652,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2656,
                        "end": 2657,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2667,
                    "end": 2683,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 2667,
                      "end": 2674,
                      "decorators": [],
                      "name": "Ambient",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 2677,
                      "end": 2683,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 2677,
                        "end": 2678,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2682,
                        "end": 2683,
                        "raw": "3",
                        "value": 3
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2693,
                    "end": 2710,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 2693,
                      "end": 2701,
                      "decorators": [],
                      "name": "Exported",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 2704,
                      "end": 2710,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 2704,
                        "end": 2705,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2709,
                        "end": 2710,
                        "raw": "4",
                        "value": 4
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2720,
                    "end": 2735,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 2720,
                      "end": 2726,
                      "decorators": [],
                      "name": "Getter",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 2729,
                      "end": 2735,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 2729,
                        "end": 2730,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2734,
                        "end": 2735,
                        "raw": "5",
                        "value": 5
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2745,
                    "end": 2760,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 2745,
                      "end": 2751,
                      "decorators": [],
                      "name": "Setter",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 2754,
                      "end": 2760,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 2754,
                        "end": 2755,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2759,
                        "end": 2760,
                        "raw": "6",
                        "value": 6
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2770,
                    "end": 2785,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 2770,
                      "end": 2776,
                      "decorators": [],
                      "name": "Static",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 2779,
                      "end": 2785,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 2779,
                        "end": 2780,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2784,
                        "end": 2785,
                        "raw": "7",
                        "value": 7
                      }
                    }
                  }
                ]
              },
              "const": false,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 2556,
                "end": 2565,
                "decorators": [],
                "name": "Modifiers",
                "optional": false
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 2798,
            "end": 3927,
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 2805,
              "end": 3927,
              "body": {
                "type": "TSEnumBody",
                "start": 2819,
                "end": 3927,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 2829,
                    "end": 2837,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 2829,
                      "end": 2833,
                      "decorators": [],
                      "name": "None",
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 2836,
                      "end": 2837,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2847,
                    "end": 2868,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 2847,
                      "end": 2864,
                      "decorators": [],
                      "name": "ExplicitSemicolon",
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 2867,
                      "end": 2868,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2926,
                    "end": 2953,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 2926,
                      "end": 2944,
                      "decorators": [],
                      "name": "AutomaticSemicolon",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 2947,
                      "end": 2953,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 2947,
                        "end": 2948,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2952,
                        "end": 2953,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 3012,
                    "end": 3030,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 3012,
                      "end": 3021,
                      "decorators": [],
                      "name": "Writeable",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 3024,
                      "end": 3030,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 3024,
                        "end": 3025,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 3029,
                        "end": 3030,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 3077,
                    "end": 3091,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 3077,
                      "end": 3082,
                      "decorators": [],
                      "name": "Error",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 3085,
                      "end": 3091,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 3085,
                        "end": 3086,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 3090,
                        "end": 3091,
                        "raw": "3",
                        "value": 3
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 3122,
                    "end": 3144,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 3122,
                      "end": 3135,
                      "decorators": [],
                      "name": "DotLHSPartial",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 3138,
                      "end": 3144,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 3138,
                        "end": 3139,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 3143,
                        "end": 3144,
                        "raw": "4",
                        "value": 4
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 3209,
                    "end": 3224,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 3209,
                      "end": 3215,
                      "decorators": [],
                      "name": "DotLHS",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 3218,
                      "end": 3224,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 3218,
                        "end": 3219,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 3223,
                        "end": 3224,
                        "raw": "5",
                        "value": 5
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 3267,
                    "end": 3287,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 3267,
                      "end": 3278,
                      "decorators": [],
                      "name": "IsStatement",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 3281,
                      "end": 3287,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 3281,
                        "end": 3282,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 3286,
                        "end": 3287,
                        "raw": "6",
                        "value": 6
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 3320,
                    "end": 3339,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 3320,
                      "end": 3330,
                      "decorators": [],
                      "name": "StrictMode",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 3333,
                      "end": 3339,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 3333,
                        "end": 3334,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 3338,
                        "end": 3339,
                        "raw": "7",
                        "value": 7
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 3391,
                    "end": 3425,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 3391,
                      "end": 3416,
                      "decorators": [],
                      "name": "PossibleOptionalParameter",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 3419,
                      "end": 3425,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 3419,
                        "end": 3420,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 3424,
                        "end": 3425,
                        "raw": "8",
                        "value": 8
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 3435,
                    "end": 3468,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 3435,
                      "end": 3459,
                      "decorators": [],
                      "name": "ClassBaseConstructorCall",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 3462,
                      "end": 3468,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 3462,
                        "end": 3463,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 3467,
                        "end": 3468,
                        "raw": "9",
                        "value": 9
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 3478,
                    "end": 3500,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 3478,
                      "end": 3490,
                      "decorators": [],
                      "name": "OptionalName",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 3493,
                      "end": 3500,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 3493,
                        "end": 3494,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 3498,
                        "end": 3500,
                        "raw": "10",
                        "value": 10
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 3895,
                    "end": 3919,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 3895,
                      "end": 3909,
                      "decorators": [],
                      "name": "SkipNextRParen",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 3912,
                      "end": 3919,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 3912,
                        "end": 3913,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 3917,
                        "end": 3919,
                        "raw": "11",
                        "value": 11
                      }
                    }
                  }
                ]
              },
              "const": false,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 2810,
                "end": 2818,
                "decorators": [],
                "name": "ASTFlags",
                "optional": false
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 3933,
            "end": 4194,
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 3940,
              "end": 4194,
              "body": {
                "type": "TSEnumBody",
                "start": 3955,
                "end": 4194,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 3965,
                    "end": 3973,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 3965,
                      "end": 3969,
                      "decorators": [],
                      "name": "None",
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 3972,
                      "end": 3973,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 3983,
                    "end": 3995,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 3983,
                      "end": 3991,
                      "decorators": [],
                      "name": "Exported",
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 3994,
                      "end": 3995,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4005,
                    "end": 4021,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 4005,
                      "end": 4012,
                      "decorators": [],
                      "name": "Private",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4015,
                      "end": 4021,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 4015,
                        "end": 4016,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4020,
                        "end": 4021,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4031,
                    "end": 4046,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 4031,
                      "end": 4037,
                      "decorators": [],
                      "name": "Public",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4040,
                      "end": 4046,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 4040,
                        "end": 4041,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4045,
                        "end": 4046,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4056,
                    "end": 4072,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 4056,
                      "end": 4063,
                      "decorators": [],
                      "name": "Ambient",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4066,
                      "end": 4072,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 4066,
                        "end": 4067,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4071,
                        "end": 4072,
                        "raw": "3",
                        "value": 3
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4082,
                    "end": 4097,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 4082,
                      "end": 4088,
                      "decorators": [],
                      "name": "Static",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4091,
                      "end": 4097,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 4091,
                        "end": 4092,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4096,
                        "end": 4097,
                        "raw": "4",
                        "value": 4
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4107,
                    "end": 4127,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 4107,
                      "end": 4118,
                      "decorators": [],
                      "name": "LocalStatic",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4121,
                      "end": 4127,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 4121,
                        "end": 4122,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4126,
                        "end": 4127,
                        "raw": "5",
                        "value": 5
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4137,
                    "end": 4157,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 4137,
                      "end": 4148,
                      "decorators": [],
                      "name": "GetAccessor",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4151,
                      "end": 4157,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 4151,
                        "end": 4152,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4156,
                        "end": 4157,
                        "raw": "6",
                        "value": 6
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4167,
                    "end": 4187,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 4167,
                      "end": 4178,
                      "decorators": [],
                      "name": "SetAccessor",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4181,
                      "end": 4187,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 4181,
                        "end": 4182,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4186,
                        "end": 4187,
                        "raw": "7",
                        "value": 7
                      }
                    }
                  }
                ]
              },
              "const": false,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 3945,
                "end": 3954,
                "decorators": [],
                "name": "DeclFlags",
                "optional": false
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4200,
            "end": 4622,
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 4207,
              "end": 4622,
              "body": {
                "type": "TSEnumBody",
                "start": 4224,
                "end": 4622,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 4234,
                    "end": 4242,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 4234,
                      "end": 4238,
                      "decorators": [],
                      "name": "None",
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 4241,
                      "end": 4242,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4252,
                    "end": 4264,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 4252,
                      "end": 4260,
                      "decorators": [],
                      "name": "Exported",
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 4263,
                      "end": 4264,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4274,
                    "end": 4290,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 4274,
                      "end": 4281,
                      "decorators": [],
                      "name": "Private",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4284,
                      "end": 4290,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 4284,
                        "end": 4285,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4289,
                        "end": 4290,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4300,
                    "end": 4315,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 4300,
                      "end": 4306,
                      "decorators": [],
                      "name": "Public",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4309,
                      "end": 4315,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 4309,
                        "end": 4310,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4314,
                        "end": 4315,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4325,
                    "end": 4341,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 4325,
                      "end": 4332,
                      "decorators": [],
                      "name": "Ambient",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4335,
                      "end": 4341,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 4335,
                        "end": 4336,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4340,
                        "end": 4341,
                        "raw": "3",
                        "value": 3
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4351,
                    "end": 4366,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 4351,
                      "end": 4357,
                      "decorators": [],
                      "name": "Static",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4360,
                      "end": 4366,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 4360,
                        "end": 4361,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4365,
                        "end": 4366,
                        "raw": "4",
                        "value": 4
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4376,
                    "end": 4396,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 4376,
                      "end": 4387,
                      "decorators": [],
                      "name": "LocalStatic",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4390,
                      "end": 4396,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 4390,
                        "end": 4391,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4395,
                        "end": 4396,
                        "raw": "5",
                        "value": 5
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4406,
                    "end": 4426,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 4406,
                      "end": 4417,
                      "decorators": [],
                      "name": "GetAccessor",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4420,
                      "end": 4426,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 4420,
                        "end": 4421,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4425,
                        "end": 4426,
                        "raw": "6",
                        "value": 6
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4436,
                    "end": 4456,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 4436,
                      "end": 4447,
                      "decorators": [],
                      "name": "SetAccessor",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4450,
                      "end": 4456,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 4450,
                        "end": 4451,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4455,
                        "end": 4456,
                        "raw": "7",
                        "value": 7
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4466,
                    "end": 4481,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 4466,
                      "end": 4472,
                      "decorators": [],
                      "name": "IsEnum",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4475,
                      "end": 4481,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 4475,
                        "end": 4476,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4480,
                        "end": 4481,
                        "raw": "8",
                        "value": 8
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4491,
                    "end": 4520,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 4491,
                      "end": 4511,
                      "decorators": [],
                      "name": "ShouldEmitModuleDecl",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4514,
                      "end": 4520,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 4514,
                        "end": 4515,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4519,
                        "end": 4520,
                        "raw": "9",
                        "value": 9
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4530,
                    "end": 4551,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 4530,
                      "end": 4541,
                      "decorators": [],
                      "name": "IsWholeFile",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4544,
                      "end": 4551,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 4544,
                        "end": 4545,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4549,
                        "end": 4551,
                        "raw": "10",
                        "value": 10
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4561,
                    "end": 4580,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 4561,
                      "end": 4570,
                      "decorators": [],
                      "name": "IsDynamic",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4573,
                      "end": 4580,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 4573,
                        "end": 4574,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4578,
                        "end": 4580,
                        "raw": "11",
                        "value": 11
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4590,
                    "end": 4615,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 4590,
                      "end": 4605,
                      "decorators": [],
                      "name": "MustCaptureThis",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4608,
                      "end": 4615,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 4608,
                        "end": 4609,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4613,
                        "end": 4615,
                        "raw": "12",
                        "value": 12
                      }
                    }
                  }
                ]
              },
              "const": false,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 4212,
                "end": 4223,
                "decorators": [],
                "name": "ModuleFlags",
                "optional": false
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4628,
            "end": 5277,
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 4635,
              "end": 5277,
              "body": {
                "type": "TSEnumBody",
                "start": 4652,
                "end": 5277,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 4662,
                    "end": 4670,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 4662,
                      "end": 4666,
                      "decorators": [],
                      "name": "None",
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 4669,
                      "end": 4670,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4680,
                    "end": 4692,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 4680,
                      "end": 4688,
                      "decorators": [],
                      "name": "Exported",
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 4691,
                      "end": 4692,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4702,
                    "end": 4718,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 4702,
                      "end": 4709,
                      "decorators": [],
                      "name": "Private",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4712,
                      "end": 4718,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 4712,
                        "end": 4713,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4717,
                        "end": 4718,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4728,
                    "end": 4743,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 4728,
                      "end": 4734,
                      "decorators": [],
                      "name": "Public",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4737,
                      "end": 4743,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 4737,
                        "end": 4738,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4742,
                        "end": 4743,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4753,
                    "end": 4769,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 4753,
                      "end": 4760,
                      "decorators": [],
                      "name": "Ambient",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4763,
                      "end": 4769,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 4763,
                        "end": 4764,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4768,
                        "end": 4769,
                        "raw": "3",
                        "value": 3
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4779,
                    "end": 4794,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 4779,
                      "end": 4785,
                      "decorators": [],
                      "name": "Static",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4788,
                      "end": 4794,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 4788,
                        "end": 4789,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4793,
                        "end": 4794,
                        "raw": "4",
                        "value": 4
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4804,
                    "end": 4824,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 4804,
                      "end": 4815,
                      "decorators": [],
                      "name": "LocalStatic",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4818,
                      "end": 4824,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 4818,
                        "end": 4819,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4823,
                        "end": 4824,
                        "raw": "5",
                        "value": 5
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4834,
                    "end": 4854,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 4834,
                      "end": 4845,
                      "decorators": [],
                      "name": "GetAccessor",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4848,
                      "end": 4854,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 4848,
                        "end": 4849,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4853,
                        "end": 4854,
                        "raw": "6",
                        "value": 6
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4864,
                    "end": 4884,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 4864,
                      "end": 4875,
                      "decorators": [],
                      "name": "SetAccessor",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4878,
                      "end": 4884,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 4878,
                        "end": 4879,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4883,
                        "end": 4884,
                        "raw": "7",
                        "value": 7
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4894,
                    "end": 4911,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 4894,
                      "end": 4902,
                      "decorators": [],
                      "name": "Property",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4905,
                      "end": 4911,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 4905,
                        "end": 4906,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4910,
                        "end": 4911,
                        "raw": "8",
                        "value": 8
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4921,
                    "end": 4938,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 4921,
                      "end": 4929,
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4932,
                      "end": 4938,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 4932,
                        "end": 4933,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4937,
                        "end": 4938,
                        "raw": "9",
                        "value": 9
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4948,
                    "end": 4970,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 4948,
                      "end": 4960,
                      "decorators": [],
                      "name": "ModuleMember",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4963,
                      "end": 4970,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 4963,
                        "end": 4964,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4968,
                        "end": 4970,
                        "raw": "10",
                        "value": 10
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4980,
                    "end": 5005,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 4980,
                      "end": 4995,
                      "decorators": [],
                      "name": "InterfaceMember",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4998,
                      "end": 5005,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 4998,
                        "end": 4999,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 5003,
                        "end": 5005,
                        "raw": "11",
                        "value": 11
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5015,
                    "end": 5036,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 5015,
                      "end": 5026,
                      "decorators": [],
                      "name": "ClassMember",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5029,
                      "end": 5036,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 5029,
                        "end": 5030,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 5034,
                        "end": 5036,
                        "raw": "12",
                        "value": 12
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5046,
                    "end": 5063,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 5046,
                      "end": 5053,
                      "decorators": [],
                      "name": "BuiltIn",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5056,
                      "end": 5063,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 5056,
                        "end": 5057,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 5061,
                        "end": 5063,
                        "raw": "13",
                        "value": 13
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5073,
                    "end": 5111,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 5073,
                      "end": 5101,
                      "decorators": [],
                      "name": "TypeSetDuringScopeAssignment",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5104,
                      "end": 5111,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 5104,
                        "end": 5105,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 5109,
                        "end": 5111,
                        "raw": "14",
                        "value": 14
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5121,
                    "end": 5139,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 5121,
                      "end": 5129,
                      "decorators": [],
                      "name": "Constant",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5132,
                      "end": 5139,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 5132,
                        "end": 5133,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 5137,
                        "end": 5139,
                        "raw": "15",
                        "value": 15
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5149,
                    "end": 5167,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 5149,
                      "end": 5157,
                      "decorators": [],
                      "name": "Optional",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5160,
                      "end": 5167,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 5160,
                        "end": 5161,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 5165,
                        "end": 5167,
                        "raw": "16",
                        "value": 16
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5177,
                    "end": 5208,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 5177,
                      "end": 5198,
                      "decorators": [],
                      "name": "RecursivelyReferenced",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5201,
                      "end": 5208,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 5201,
                        "end": 5202,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 5206,
                        "end": 5208,
                        "raw": "17",
                        "value": 17
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5218,
                    "end": 5233,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 5218,
                      "end": 5223,
                      "decorators": [],
                      "name": "Bound",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5226,
                      "end": 5233,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 5226,
                        "end": 5227,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 5231,
                        "end": 5233,
                        "raw": "18",
                        "value": 18
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5243,
                    "end": 5270,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 5243,
                      "end": 5260,
                      "decorators": [],
                      "name": "CompilerGenerated",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5263,
                      "end": 5270,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 5263,
                        "end": 5264,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 5268,
                        "end": 5270,
                        "raw": "19",
                        "value": 19
                      }
                    }
                  }
                ]
              },
              "const": false,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 4640,
                "end": 4651,
                "decorators": [],
                "name": "SymbolFlags",
                "optional": false
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 5283,
            "end": 5885,
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 5290,
              "end": 5885,
              "body": {
                "type": "TSEnumBody",
                "start": 5304,
                "end": 5885,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 5314,
                    "end": 5322,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 5314,
                      "end": 5318,
                      "decorators": [],
                      "name": "None",
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 5321,
                      "end": 5322,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5332,
                    "end": 5344,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 5332,
                      "end": 5340,
                      "decorators": [],
                      "name": "Exported",
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 5343,
                      "end": 5344,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5354,
                    "end": 5370,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 5354,
                      "end": 5361,
                      "decorators": [],
                      "name": "Private",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5364,
                      "end": 5370,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 5364,
                        "end": 5365,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 5369,
                        "end": 5370,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5380,
                    "end": 5395,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 5380,
                      "end": 5386,
                      "decorators": [],
                      "name": "Public",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5389,
                      "end": 5395,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 5389,
                        "end": 5390,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 5394,
                        "end": 5395,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5405,
                    "end": 5421,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 5405,
                      "end": 5412,
                      "decorators": [],
                      "name": "Ambient",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5415,
                      "end": 5421,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 5415,
                        "end": 5416,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 5420,
                        "end": 5421,
                        "raw": "3",
                        "value": 3
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5431,
                    "end": 5446,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 5431,
                      "end": 5437,
                      "decorators": [],
                      "name": "Static",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5440,
                      "end": 5446,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 5440,
                        "end": 5441,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 5445,
                        "end": 5446,
                        "raw": "4",
                        "value": 4
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5456,
                    "end": 5476,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 5456,
                      "end": 5467,
                      "decorators": [],
                      "name": "LocalStatic",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5470,
                      "end": 5476,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 5470,
                        "end": 5471,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 5475,
                        "end": 5476,
                        "raw": "5",
                        "value": 5
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5486,
                    "end": 5506,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 5486,
                      "end": 5497,
                      "decorators": [],
                      "name": "GetAccessor",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5500,
                      "end": 5506,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 5500,
                        "end": 5501,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 5505,
                        "end": 5506,
                        "raw": "6",
                        "value": 6
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5516,
                    "end": 5536,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 5516,
                      "end": 5527,
                      "decorators": [],
                      "name": "SetAccessor",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5530,
                      "end": 5536,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 5530,
                        "end": 5531,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 5535,
                        "end": 5536,
                        "raw": "7",
                        "value": 7
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5546,
                    "end": 5563,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 5546,
                      "end": 5554,
                      "decorators": [],
                      "name": "AutoInit",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5557,
                      "end": 5563,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 5557,
                        "end": 5558,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 5562,
                        "end": 5563,
                        "raw": "8",
                        "value": 8
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5573,
                    "end": 5590,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 5573,
                      "end": 5581,
                      "decorators": [],
                      "name": "Property",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5584,
                      "end": 5590,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 5584,
                        "end": 5585,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 5589,
                        "end": 5590,
                        "raw": "9",
                        "value": 9
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5600,
                    "end": 5618,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 5600,
                      "end": 5608,
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5611,
                      "end": 5618,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 5611,
                        "end": 5612,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 5616,
                        "end": 5618,
                        "raw": "10",
                        "value": 10
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5628,
                    "end": 5643,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 5628,
                      "end": 5633,
                      "decorators": [],
                      "name": "Class",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5636,
                      "end": 5643,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 5636,
                        "end": 5637,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 5641,
                        "end": 5643,
                        "raw": "11",
                        "value": 11
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5653,
                    "end": 5676,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 5653,
                      "end": 5666,
                      "decorators": [],
                      "name": "ClassProperty",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5669,
                      "end": 5676,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 5669,
                        "end": 5670,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 5674,
                        "end": 5676,
                        "raw": "12",
                        "value": 12
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5686,
                    "end": 5713,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 5686,
                      "end": 5703,
                      "decorators": [],
                      "name": "ClassBodyProperty",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5706,
                      "end": 5713,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 5706,
                        "end": 5707,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 5711,
                        "end": 5713,
                        "raw": "13",
                        "value": 13
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5723,
                    "end": 5757,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 5723,
                      "end": 5747,
                      "decorators": [],
                      "name": "ClassConstructorProperty",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5750,
                      "end": 5757,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 5750,
                        "end": 5751,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 5755,
                        "end": 5757,
                        "raw": "14",
                        "value": 14
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5767,
                    "end": 5815,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 5767,
                      "end": 5805,
                      "decorators": [],
                      "name": "ClassSuperMustBeFirstCallInConstructor",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5808,
                      "end": 5815,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 5808,
                        "end": 5809,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 5813,
                        "end": 5815,
                        "raw": "15",
                        "value": 15
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5825,
                    "end": 5843,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 5825,
                      "end": 5833,
                      "decorators": [],
                      "name": "Constant",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5836,
                      "end": 5843,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 5836,
                        "end": 5837,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 5841,
                        "end": 5843,
                        "raw": "16",
                        "value": 16
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5853,
                    "end": 5878,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 5853,
                      "end": 5868,
                      "decorators": [],
                      "name": "MustCaptureThis",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5871,
                      "end": 5878,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 5871,
                        "end": 5872,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 5876,
                        "end": 5878,
                        "raw": "17",
                        "value": 17
                      }
                    }
                  }
                ]
              },
              "const": false,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 5295,
                "end": 5303,
                "decorators": [],
                "name": "VarFlags",
                "optional": false
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 5891,
            "end": 6563,
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 5898,
              "end": 6563,
              "body": {
                "type": "TSEnumBody",
                "start": 5912,
                "end": 6563,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 5922,
                    "end": 5930,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 5922,
                      "end": 5926,
                      "decorators": [],
                      "name": "None",
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 5929,
                      "end": 5930,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5940,
                    "end": 5952,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 5940,
                      "end": 5948,
                      "decorators": [],
                      "name": "Exported",
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 5951,
                      "end": 5952,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5962,
                    "end": 5978,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 5962,
                      "end": 5969,
                      "decorators": [],
                      "name": "Private",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5972,
                      "end": 5978,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 5972,
                        "end": 5973,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 5977,
                        "end": 5978,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5988,
                    "end": 6003,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 5988,
                      "end": 5994,
                      "decorators": [],
                      "name": "Public",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5997,
                      "end": 6003,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 5997,
                        "end": 5998,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 6002,
                        "end": 6003,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6013,
                    "end": 6029,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 6013,
                      "end": 6020,
                      "decorators": [],
                      "name": "Ambient",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6023,
                      "end": 6029,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 6023,
                        "end": 6024,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 6028,
                        "end": 6029,
                        "raw": "3",
                        "value": 3
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6039,
                    "end": 6054,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 6039,
                      "end": 6045,
                      "decorators": [],
                      "name": "Static",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6048,
                      "end": 6054,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 6048,
                        "end": 6049,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 6053,
                        "end": 6054,
                        "raw": "4",
                        "value": 4
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6064,
                    "end": 6084,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 6064,
                      "end": 6075,
                      "decorators": [],
                      "name": "LocalStatic",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6078,
                      "end": 6084,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 6078,
                        "end": 6079,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 6083,
                        "end": 6084,
                        "raw": "5",
                        "value": 5
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6094,
                    "end": 6114,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 6094,
                      "end": 6105,
                      "decorators": [],
                      "name": "GetAccessor",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6108,
                      "end": 6114,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 6108,
                        "end": 6109,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 6113,
                        "end": 6114,
                        "raw": "6",
                        "value": 6
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6124,
                    "end": 6144,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 6124,
                      "end": 6135,
                      "decorators": [],
                      "name": "SetAccessor",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6138,
                      "end": 6144,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 6138,
                        "end": 6139,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 6143,
                        "end": 6144,
                        "raw": "7",
                        "value": 7
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6154,
                    "end": 6173,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 6154,
                      "end": 6164,
                      "decorators": [],
                      "name": "Definition",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6167,
                      "end": 6173,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 6167,
                        "end": 6168,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 6172,
                        "end": 6173,
                        "raw": "8",
                        "value": 8
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6183,
                    "end": 6201,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 6183,
                      "end": 6192,
                      "decorators": [],
                      "name": "Signature",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6195,
                      "end": 6201,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 6195,
                        "end": 6196,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 6200,
                        "end": 6201,
                        "raw": "9",
                        "value": 9
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6211,
                    "end": 6227,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 6211,
                      "end": 6217,
                      "decorators": [],
                      "name": "Method",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6220,
                      "end": 6227,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 6220,
                        "end": 6221,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 6225,
                        "end": 6227,
                        "raw": "10",
                        "value": 10
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6237,
                    "end": 6266,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 6237,
                      "end": 6256,
                      "decorators": [],
                      "name": "HasReturnExpression",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6259,
                      "end": 6266,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 6259,
                        "end": 6260,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 6264,
                        "end": 6266,
                        "raw": "11",
                        "value": 11
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6276,
                    "end": 6296,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 6276,
                      "end": 6286,
                      "decorators": [],
                      "name": "CallMember",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6289,
                      "end": 6296,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 6289,
                        "end": 6290,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 6294,
                        "end": 6296,
                        "raw": "12",
                        "value": 12
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6306,
                    "end": 6331,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 6306,
                      "end": 6321,
                      "decorators": [],
                      "name": "ConstructMember",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6324,
                      "end": 6331,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 6324,
                        "end": 6325,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 6329,
                        "end": 6331,
                        "raw": "13",
                        "value": 13
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6341,
                    "end": 6367,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 6341,
                      "end": 6357,
                      "decorators": [],
                      "name": "HasSelfReference",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6360,
                      "end": 6367,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 6360,
                        "end": 6361,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 6365,
                        "end": 6367,
                        "raw": "14",
                        "value": 14
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6377,
                    "end": 6405,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 6377,
                      "end": 6395,
                      "decorators": [],
                      "name": "IsFatArrowFunction",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6398,
                      "end": 6405,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 6398,
                        "end": 6399,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 6403,
                        "end": 6405,
                        "raw": "15",
                        "value": 15
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6415,
                    "end": 6438,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 6415,
                      "end": 6428,
                      "decorators": [],
                      "name": "IndexerMember",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6431,
                      "end": 6438,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 6431,
                        "end": 6432,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 6436,
                        "end": 6438,
                        "raw": "16",
                        "value": 16
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6448,
                    "end": 6478,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 6448,
                      "end": 6468,
                      "decorators": [],
                      "name": "IsFunctionExpression",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6471,
                      "end": 6478,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 6471,
                        "end": 6472,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 6476,
                        "end": 6478,
                        "raw": "17",
                        "value": 17
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6488,
                    "end": 6509,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 6488,
                      "end": 6499,
                      "decorators": [],
                      "name": "ClassMethod",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6502,
                      "end": 6509,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 6502,
                        "end": 6503,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 6507,
                        "end": 6509,
                        "raw": "18",
                        "value": 18
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6519,
                    "end": 6556,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 6519,
                      "end": 6546,
                      "decorators": [],
                      "name": "ClassPropertyMethodExported",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6549,
                      "end": 6556,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 6549,
                        "end": 6550,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 6554,
                        "end": 6556,
                        "raw": "19",
                        "value": 19
                      }
                    }
                  }
                ]
              },
              "const": false,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 5903,
                "end": 5911,
                "decorators": [],
                "name": "FncFlags",
                "optional": false
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 6569,
            "end": 6712,
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 6576,
              "end": 6712,
              "body": {
                "type": "TSEnumBody",
                "start": 6596,
                "end": 6712,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 6606,
                    "end": 6614,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 6606,
                      "end": 6610,
                      "decorators": [],
                      "name": "None",
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 6613,
                      "end": 6614,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6624,
                    "end": 6637,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 6624,
                      "end": 6633,
                      "decorators": [],
                      "name": "IsIndexer",
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 6636,
                      "end": 6637,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6647,
                    "end": 6671,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 6647,
                      "end": 6662,
                      "decorators": [],
                      "name": "IsStringIndexer",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6665,
                      "end": 6671,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 6665,
                        "end": 6666,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 6670,
                        "end": 6671,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6681,
                    "end": 6705,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 6681,
                      "end": 6696,
                      "decorators": [],
                      "name": "IsNumberIndexer",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6699,
                      "end": 6705,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 6699,
                        "end": 6700,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 6704,
                        "end": 6705,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  }
                ]
              },
              "const": false,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 6581,
                "end": 6595,
                "decorators": [],
                "name": "SignatureFlags",
                "optional": false
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 6718,
            "end": 6778,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 6725,
              "end": 6778,
              "async": false,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 6734,
                "end": 6745,
                "decorators": [],
                "name": "ToDeclFlags",
                "optional": false
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 6746,
                  "end": 6764,
                  "decorators": [],
                  "name": "fncFlags",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 6754,
                    "end": 6764,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6756,
                      "end": 6764,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6756,
                        "end": 6764,
                        "decorators": [],
                        "name": "FncFlags",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 6766,
                "end": 6777,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 6768,
                  "end": 6777,
                  "typeName": {
                    "type": "Identifier",
                    "start": 6768,
                    "end": 6777,
                    "decorators": [],
                    "name": "DeclFlags",
                    "optional": false
                  }
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 6783,
            "end": 6843,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 6790,
              "end": 6843,
              "async": false,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 6799,
                "end": 6810,
                "decorators": [],
                "name": "ToDeclFlags",
                "optional": false
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 6811,
                  "end": 6829,
                  "decorators": [],
                  "name": "varFlags",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 6819,
                    "end": 6829,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6821,
                      "end": 6829,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6821,
                        "end": 6829,
                        "decorators": [],
                        "name": "VarFlags",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 6831,
                "end": 6842,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 6833,
                  "end": 6842,
                  "typeName": {
                    "type": "Identifier",
                    "start": 6833,
                    "end": 6842,
                    "decorators": [],
                    "name": "DeclFlags",
                    "optional": false
                  }
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 6848,
            "end": 6910,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 6855,
              "end": 6910,
              "async": false,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 6864,
                "end": 6875,
                "decorators": [],
                "name": "ToDeclFlags",
                "optional": false
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 6876,
                  "end": 6897,
                  "decorators": [],
                  "name": "symFlags",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 6884,
                    "end": 6897,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6886,
                      "end": 6897,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6886,
                        "end": 6897,
                        "decorators": [],
                        "name": "SymbolFlags",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 6898,
                "end": 6909,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 6900,
                  "end": 6909,
                  "typeName": {
                    "type": "Identifier",
                    "start": 6900,
                    "end": 6909,
                    "decorators": [],
                    "name": "DeclFlags",
                    "optional": false
                  }
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 6915,
            "end": 6980,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 6922,
              "end": 6980,
              "async": false,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 6931,
                "end": 6942,
                "decorators": [],
                "name": "ToDeclFlags",
                "optional": false
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 6943,
                  "end": 6967,
                  "decorators": [],
                  "name": "moduleFlags",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 6954,
                    "end": 6967,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6956,
                      "end": 6967,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6956,
                        "end": 6967,
                        "decorators": [],
                        "name": "ModuleFlags",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 6968,
                "end": 6979,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 6970,
                  "end": 6979,
                  "typeName": {
                    "type": "Identifier",
                    "start": 6970,
                    "end": 6979,
                    "decorators": [],
                    "name": "DeclFlags",
                    "optional": false
                  }
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 6985,
            "end": 7113,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 6992,
              "end": 7113,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 7049,
                "end": 7113,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 7059,
                    "end": 7107,
                    "argument": {
                      "type": "TSTypeAssertion",
                      "start": 7066,
                      "end": 7106,
                      "expression": {
                        "type": "Identifier",
                        "start": 7077,
                        "end": 7106,
                        "decorators": [],
                        "name": "fncOrVarOrSymbolOrModuleFlags",
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 7067,
                        "end": 7076,
                        "typeName": {
                          "type": "Identifier",
                          "start": 7067,
                          "end": 7076,
                          "decorators": [],
                          "name": "DeclFlags",
                          "optional": false
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
                "start": 7001,
                "end": 7012,
                "decorators": [],
                "name": "ToDeclFlags",
                "optional": false
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 7013,
                  "end": 7047,
                  "decorators": [],
                  "name": "fncOrVarOrSymbolOrModuleFlags",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 7042,
                    "end": 7047,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 7044,
                      "end": 7047
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
            "type": "ExportNamedDeclaration",
            "start": 7119,
            "end": 7412,
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 7126,
              "end": 7412,
              "body": {
                "type": "TSEnumBody",
                "start": 7141,
                "end": 7412,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 7151,
                    "end": 7159,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 7151,
                      "end": 7155,
                      "decorators": [],
                      "name": "None",
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 7158,
                      "end": 7159,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 7169,
                    "end": 7190,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 7169,
                      "end": 7186,
                      "decorators": [],
                      "name": "HasImplementation",
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 7189,
                      "end": 7190,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 7200,
                    "end": 7225,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 7200,
                      "end": 7216,
                      "decorators": [],
                      "name": "HasSelfReference",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 7219,
                      "end": 7225,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 7219,
                        "end": 7220,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 7224,
                        "end": 7225,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 7235,
                    "end": 7255,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 7235,
                      "end": 7246,
                      "decorators": [],
                      "name": "MergeResult",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 7249,
                      "end": 7255,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 7249,
                        "end": 7250,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 7254,
                        "end": 7255,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 7265,
                    "end": 7280,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 7265,
                      "end": 7271,
                      "decorators": [],
                      "name": "IsEnum",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 7274,
                      "end": 7280,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 7274,
                        "end": 7275,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 7279,
                        "end": 7280,
                        "raw": "3",
                        "value": 3
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 7290,
                    "end": 7311,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 7290,
                      "end": 7302,
                      "decorators": [],
                      "name": "BuildingName",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 7305,
                      "end": 7311,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 7305,
                        "end": 7306,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 7310,
                        "end": 7311,
                        "raw": "4",
                        "value": 4
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 7321,
                    "end": 7341,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 7321,
                      "end": 7332,
                      "decorators": [],
                      "name": "HasBaseType",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 7335,
                      "end": 7341,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 7335,
                        "end": 7336,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 7340,
                        "end": 7341,
                        "raw": "5",
                        "value": 5
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 7351,
                    "end": 7379,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 7351,
                      "end": 7370,
                      "decorators": [],
                      "name": "HasBaseTypeOfObject",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 7373,
                      "end": 7379,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 7373,
                        "end": 7374,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 7378,
                        "end": 7379,
                        "raw": "6",
                        "value": 6
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 7389,
                    "end": 7405,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 7389,
                      "end": 7396,
                      "decorators": [],
                      "name": "IsClass",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 7399,
                      "end": 7405,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 7399,
                        "end": 7400,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 7404,
                        "end": 7405,
                        "raw": "7",
                        "value": 7
                      }
                    }
                  }
                ]
              },
              "const": false,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 7131,
                "end": 7140,
                "decorators": [],
                "name": "TypeFlags",
                "optional": false
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 7418,
            "end": 7807,
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 7425,
              "end": 7807,
              "body": {
                "type": "TSEnumBody",
                "start": 7452,
                "end": 7807,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 7462,
                    "end": 7486,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 7462,
                      "end": 7482,
                      "decorators": [],
                      "name": "SuccessfulComparison",
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 7485,
                      "end": 7486,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 7496,
                    "end": 7535,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 7496,
                      "end": 7531,
                      "decorators": [],
                      "name": "SourceIsNullTargetIsVoidOrUndefined",
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 7534,
                      "end": 7535,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 7545,
                    "end": 7579,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 7545,
                      "end": 7570,
                      "decorators": [],
                      "name": "RequiredPropertyIsMissing",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 7573,
                      "end": 7579,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 7573,
                        "end": 7574,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 7578,
                        "end": 7579,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 7589,
                    "end": 7620,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 7589,
                      "end": 7611,
                      "decorators": [],
                      "name": "IncompatibleSignatures",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 7614,
                      "end": 7620,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 7614,
                        "end": 7615,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 7619,
                        "end": 7620,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 7630,
                    "end": 7669,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 7630,
                      "end": 7665,
                      "decorators": [],
                      "name": "SourceSignatureHasTooManyParameters",
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 7668,
                      "end": 7669,
                      "raw": "3",
                      "value": 3
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 7679,
                    "end": 7711,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 7679,
                      "end": 7702,
                      "decorators": [],
                      "name": "IncompatibleReturnTypes",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 7705,
                      "end": 7711,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 7705,
                        "end": 7706,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 7710,
                        "end": 7711,
                        "raw": "4",
                        "value": 4
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 7721,
                    "end": 7755,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 7721,
                      "end": 7746,
                      "decorators": [],
                      "name": "IncompatiblePropertyTypes",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 7749,
                      "end": 7755,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 7749,
                        "end": 7750,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 7754,
                        "end": 7755,
                        "raw": "5",
                        "value": 5
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 7765,
                    "end": 7800,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 7765,
                      "end": 7791,
                      "decorators": [],
                      "name": "IncompatibleParameterTypes",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 7794,
                      "end": 7800,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 7794,
                        "end": 7795,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 7799,
                        "end": 7800,
                        "raw": "6",
                        "value": 6
                      }
                    }
                  }
                ]
              },
              "const": false,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 7430,
                "end": 7451,
                "decorators": [],
                "name": "TypeRelationshipFlags",
                "optional": false
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 7813,
            "end": 7880,
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 7820,
              "end": 7880,
              "body": {
                "type": "TSEnumBody",
                "start": 7839,
                "end": 7880,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 7849,
                    "end": 7856,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 7849,
                      "end": 7852,
                      "decorators": [],
                      "name": "ES3",
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 7855,
                      "end": 7856,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 7866,
                    "end": 7873,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 7866,
                      "end": 7869,
                      "decorators": [],
                      "name": "ES5",
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 7872,
                      "end": 7873,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "const": false,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 7825,
                "end": 7838,
                "decorators": [],
                "name": "CodeGenTarget",
                "optional": false
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 7886,
            "end": 7996,
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 7893,
              "end": 7996,
              "body": {
                "type": "TSEnumBody",
                "start": 7914,
                "end": 7996,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 7924,
                    "end": 7939,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 7924,
                      "end": 7935,
                      "decorators": [],
                      "name": "Synchronous",
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 7938,
                      "end": 7939,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 7949,
                    "end": 7965,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 7949,
                      "end": 7961,
                      "decorators": [],
                      "name": "Asynchronous",
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 7964,
                      "end": 7965,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 7975,
                    "end": 7989,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 7975,
                      "end": 7980,
                      "decorators": [],
                      "name": "Local",
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 7983,
                      "end": 7989,
                      "operator": "<<",
                      "left": {
                        "type": "Literal",
                        "start": 7983,
                        "end": 7984,
                        "raw": "1",
                        "value": 1
                      },
                      "right": {
                        "type": "Literal",
                        "start": 7988,
                        "end": 7989,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  }
                ]
              },
              "const": false,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 7898,
                "end": 7913,
                "decorators": [],
                "name": "ModuleGenTarget",
                "optional": false
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 8094,
            "end": 8154,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 8101,
              "end": 8154,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 8105,
                  "end": 8153,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 8105,
                    "end": 8133,
                    "decorators": [],
                    "name": "codeGenTarget",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 8118,
                      "end": 8133,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 8120,
                        "end": 8133,
                        "typeName": {
                          "type": "Identifier",
                          "start": 8120,
                          "end": 8133,
                          "decorators": [],
                          "name": "CodeGenTarget",
                          "optional": false
                        }
                      }
                    }
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 8136,
                    "end": 8153,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 8136,
                      "end": 8149,
                      "decorators": [],
                      "name": "CodeGenTarget",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 8150,
                      "end": 8153,
                      "decorators": [],
                      "name": "ES3",
                      "optional": false
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 8160,
            "end": 8234,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 8167,
              "end": 8234,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 8171,
                  "end": 8233,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 8171,
                    "end": 8203,
                    "decorators": [],
                    "name": "moduleGenTarget",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 8186,
                      "end": 8203,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 8188,
                        "end": 8203,
                        "typeName": {
                          "type": "Identifier",
                          "start": 8188,
                          "end": 8203,
                          "decorators": [],
                          "name": "ModuleGenTarget",
                          "optional": false
                        }
                      }
                    }
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 8206,
                    "end": 8233,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 8206,
                      "end": 8221,
                      "decorators": [],
                      "name": "ModuleGenTarget",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 8222,
                      "end": 8233,
                      "decorators": [],
                      "name": "Synchronous",
                      "optional": false
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 8240,
            "end": 8280,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 8247,
              "end": 8280,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 8251,
                  "end": 8279,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 8251,
                    "end": 8272,
                    "decorators": [],
                    "name": "optimizeModuleCodeGen",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 8275,
                    "end": 8279,
                    "raw": "true",
                    "value": true
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 8286,
            "end": 8814,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 8293,
              "end": 8814,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 8342,
                "end": 8814,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 8352,
                    "end": 8369,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 8356,
                        "end": 8368,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 8356,
                          "end": 8363,
                          "decorators": [],
                          "name": "builder",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 8366,
                          "end": 8368,
                          "raw": "\"\"",
                          "value": ""
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ForStatement",
                    "start": 8378,
                    "end": 8784,
                    "body": {
                      "type": "BlockStatement",
                      "start": 8422,
                      "end": 8784,
                      "body": [
                        {
                          "type": "IfStatement",
                          "start": 8436,
                          "end": 8774,
                          "alternate": null,
                          "consequent": {
                            "type": "BlockStatement",
                            "start": 8458,
                            "end": 8774,
                            "body": [
                              {
                                "type": "ForInStatement",
                                "start": 8476,
                                "end": 8760,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 8493,
                                  "end": 8760,
                                  "body": [
                                    {
                                      "type": "IfStatement",
                                      "start": 8515,
                                      "end": 8742,
                                      "alternate": null,
                                      "consequent": {
                                        "type": "BlockStatement",
                                        "start": 8530,
                                        "end": 8742,
                                        "body": [
                                          {
                                            "type": "IfStatement",
                                            "start": 8556,
                                            "end": 8651,
                                            "alternate": null,
                                            "consequent": {
                                              "type": "BlockStatement",
                                              "start": 8580,
                                              "end": 8651,
                                              "body": [
                                                {
                                                  "type": "ExpressionStatement",
                                                  "start": 8610,
                                                  "end": 8625,
                                                  "expression": {
                                                    "type": "AssignmentExpression",
                                                    "start": 8610,
                                                    "end": 8624,
                                                    "operator": "+=",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "start": 8610,
                                                      "end": 8617,
                                                      "decorators": [],
                                                      "name": "builder",
                                                      "optional": false
                                                    },
                                                    "right": {
                                                      "type": "Literal",
                                                      "start": 8621,
                                                      "end": 8624,
                                                      "raw": "\"|\"",
                                                      "value": "|"
                                                    }
                                                  }
                                                }
                                              ]
                                            },
                                            "test": {
                                              "type": "BinaryExpression",
                                              "start": 8560,
                                              "end": 8578,
                                              "operator": ">",
                                              "left": {
                                                "type": "MemberExpression",
                                                "start": 8560,
                                                "end": 8574,
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 8560,
                                                  "end": 8567,
                                                  "decorators": [],
                                                  "name": "builder",
                                                  "optional": false
                                                },
                                                "optional": false,
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 8568,
                                                  "end": 8574,
                                                  "decorators": [],
                                                  "name": "length",
                                                  "optional": false
                                                }
                                              },
                                              "right": {
                                                "type": "Literal",
                                                "start": 8577,
                                                "end": 8578,
                                                "raw": "0",
                                                "value": 0
                                              }
                                            }
                                          },
                                          {
                                            "type": "ExpressionStatement",
                                            "start": 8676,
                                            "end": 8689,
                                            "expression": {
                                              "type": "AssignmentExpression",
                                              "start": 8676,
                                              "end": 8688,
                                              "operator": "+=",
                                              "left": {
                                                "type": "Identifier",
                                                "start": 8676,
                                                "end": 8683,
                                                "decorators": [],
                                                "name": "builder",
                                                "optional": false
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "start": 8687,
                                                "end": 8688,
                                                "decorators": [],
                                                "name": "k",
                                                "optional": false
                                              }
                                            }
                                          },
                                          {
                                            "type": "BreakStatement",
                                            "start": 8714,
                                            "end": 8720,
                                            "label": null
                                          }
                                        ]
                                      },
                                      "test": {
                                        "type": "BinaryExpression",
                                        "start": 8519,
                                        "end": 8528,
                                        "operator": "==",
                                        "left": {
                                          "type": "MemberExpression",
                                          "start": 8519,
                                          "end": 8523,
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 8519,
                                            "end": 8520,
                                            "decorators": [],
                                            "name": "e",
                                            "optional": false
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 8521,
                                            "end": 8522,
                                            "decorators": [],
                                            "name": "k",
                                            "optional": false
                                          }
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "start": 8527,
                                          "end": 8528,
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false
                                        }
                                      }
                                    }
                                  ]
                                },
                                "left": {
                                  "type": "VariableDeclaration",
                                  "start": 8481,
                                  "end": 8486,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 8485,
                                      "end": 8486,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 8485,
                                        "end": 8486,
                                        "decorators": [],
                                        "name": "k",
                                        "optional": false
                                      },
                                      "init": null
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 8490,
                                  "end": 8491,
                                  "decorators": [],
                                  "name": "e",
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "test": {
                            "type": "BinaryExpression",
                            "start": 8440,
                            "end": 8456,
                            "operator": "!=",
                            "left": {
                              "type": "BinaryExpression",
                              "start": 8441,
                              "end": 8450,
                              "operator": "&",
                              "left": {
                                "type": "Identifier",
                                "start": 8441,
                                "end": 8446,
                                "decorators": [],
                                "name": "flags",
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 8449,
                                "end": 8450,
                                "decorators": [],
                                "name": "i",
                                "optional": false
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "start": 8455,
                              "end": 8456,
                              "raw": "0",
                              "value": 0
                            }
                          }
                        }
                      ]
                    },
                    "init": {
                      "type": "VariableDeclaration",
                      "start": 8383,
                      "end": 8392,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 8387,
                          "end": 8392,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 8387,
                            "end": 8388,
                            "decorators": [],
                            "name": "i",
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 8391,
                            "end": 8392,
                            "raw": "1",
                            "value": 1
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var"
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 8394,
                      "end": 8407,
                      "operator": "<",
                      "left": {
                        "type": "Identifier",
                        "start": 8394,
                        "end": 8395,
                        "decorators": [],
                        "name": "i",
                        "optional": false
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 8399,
                        "end": 8406,
                        "operator": "<<",
                        "left": {
                          "type": "Literal",
                          "start": 8399,
                          "end": 8400,
                          "raw": "1",
                          "value": 1
                        },
                        "right": {
                          "type": "Literal",
                          "start": 8404,
                          "end": 8406,
                          "raw": "31",
                          "value": 31
                        }
                      }
                    },
                    "update": {
                      "type": "AssignmentExpression",
                      "start": 8410,
                      "end": 8420,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 8410,
                        "end": 8411,
                        "decorators": [],
                        "name": "i",
                        "optional": false
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 8414,
                        "end": 8420,
                        "operator": "<<",
                        "left": {
                          "type": "Identifier",
                          "start": 8414,
                          "end": 8415,
                          "decorators": [],
                          "name": "i",
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 8419,
                          "end": 8420,
                          "raw": "1",
                          "value": 1
                        }
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 8793,
                    "end": 8808,
                    "argument": {
                      "type": "Identifier",
                      "start": 8800,
                      "end": 8807,
                      "decorators": [],
                      "name": "builder",
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
                "start": 8302,
                "end": 8315,
                "decorators": [],
                "name": "flagsToString",
                "optional": false
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 8316,
                  "end": 8317,
                  "decorators": [],
                  "name": "e",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 8319,
                  "end": 8332,
                  "decorators": [],
                  "name": "flags",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 8324,
                    "end": 8332,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 8326,
                      "end": 8332
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 8333,
                "end": 8341,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 8335,
                  "end": 8341
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 218,
        "end": 228,
        "decorators": [],
        "name": "TypeScript",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
