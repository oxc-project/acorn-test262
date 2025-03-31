__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 218,
        "end": 228,
        "name": "TypeScript",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 229,
        "end": 8817,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 236,
            "end": 328,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 243,
              "end": 328,
              "id": {
                "type": "Identifier",
                "start": 252,
                "end": 259,
                "name": "hasFlag",
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
                  "start": 260,
                  "end": 271,
                  "name": "val",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 263,
                    "end": 271,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 265,
                      "end": 271
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 273,
                  "end": 285,
                  "name": "flag",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 277,
                    "end": 285,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 279,
                      "end": 285
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "left": {
                        "type": "BinaryExpression",
                        "start": 305,
                        "end": 315,
                        "left": {
                          "type": "Identifier",
                          "start": 305,
                          "end": 308,
                          "name": "val",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "&",
                        "right": {
                          "type": "Identifier",
                          "start": 311,
                          "end": 315,
                          "name": "flag",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "operator": "!=",
                      "right": {
                        "type": "Literal",
                        "start": 320,
                        "end": 321,
                        "value": 0,
                        "raw": "0"
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 334,
            "end": 2151,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 341,
              "end": 2151,
              "id": {
                "type": "Identifier",
                "start": 346,
                "end": 362,
                "name": "ErrorRecoverySet",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 373,
                  "end": 381,
                  "id": {
                    "type": "Identifier",
                    "start": 373,
                    "end": 377,
                    "name": "None",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 380,
                    "end": 381,
                    "value": 0,
                    "raw": "0"
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 391,
                  "end": 400,
                  "id": {
                    "type": "Identifier",
                    "start": 391,
                    "end": 396,
                    "name": "Comma",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 399,
                    "end": 400,
                    "value": 1,
                    "raw": "1"
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 419,
                  "end": 434,
                  "id": {
                    "type": "Identifier",
                    "start": 419,
                    "end": 425,
                    "name": "SColon",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 428,
                    "end": 434,
                    "left": {
                      "type": "Literal",
                      "start": 428,
                      "end": 429,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 433,
                      "end": 434,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 454,
                  "end": 466,
                  "id": {
                    "type": "Identifier",
                    "start": 454,
                    "end": 457,
                    "name": "Asg",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 460,
                    "end": 466,
                    "left": {
                      "type": "Literal",
                      "start": 460,
                      "end": 461,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 465,
                      "end": 466,
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 483,
                  "end": 497,
                  "id": {
                    "type": "Identifier",
                    "start": 483,
                    "end": 488,
                    "name": "BinOp",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 491,
                    "end": 497,
                    "left": {
                      "type": "Literal",
                      "start": 491,
                      "end": 492,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 496,
                      "end": 497,
                      "value": 3,
                      "raw": "3"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 732,
                  "end": 747,
                  "id": {
                    "type": "Identifier",
                    "start": 732,
                    "end": 738,
                    "name": "RBrack",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 741,
                    "end": 747,
                    "left": {
                      "type": "Literal",
                      "start": 741,
                      "end": 742,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 746,
                      "end": 747,
                      "value": 4,
                      "raw": "4"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 767,
                  "end": 782,
                  "id": {
                    "type": "Identifier",
                    "start": 767,
                    "end": 773,
                    "name": "RCurly",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 776,
                    "end": 782,
                    "left": {
                      "type": "Literal",
                      "start": 776,
                      "end": 777,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 781,
                      "end": 782,
                      "value": 5,
                      "raw": "5"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 802,
                  "end": 817,
                  "id": {
                    "type": "Identifier",
                    "start": 802,
                    "end": 808,
                    "name": "RParen",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 811,
                    "end": 817,
                    "left": {
                      "type": "Literal",
                      "start": 811,
                      "end": 812,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 816,
                      "end": 817,
                      "value": 6,
                      "raw": "6"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 837,
                  "end": 849,
                  "id": {
                    "type": "Identifier",
                    "start": 837,
                    "end": 840,
                    "name": "Dot",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 843,
                    "end": 849,
                    "left": {
                      "type": "Literal",
                      "start": 843,
                      "end": 844,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 848,
                      "end": 849,
                      "value": 7,
                      "raw": "7"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 866,
                  "end": 880,
                  "id": {
                    "type": "Identifier",
                    "start": 866,
                    "end": 871,
                    "name": "Colon",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 874,
                    "end": 880,
                    "left": {
                      "type": "Literal",
                      "start": 874,
                      "end": 875,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 879,
                      "end": 880,
                      "value": 8,
                      "raw": "8"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 899,
                  "end": 916,
                  "id": {
                    "type": "Identifier",
                    "start": 899,
                    "end": 907,
                    "name": "PrimType",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 910,
                    "end": 916,
                    "left": {
                      "type": "Literal",
                      "start": 910,
                      "end": 911,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 915,
                      "end": 916,
                      "value": 9,
                      "raw": "9"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 953,
                  "end": 968,
                  "id": {
                    "type": "Identifier",
                    "start": 953,
                    "end": 958,
                    "name": "AddOp",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 961,
                    "end": 968,
                    "left": {
                      "type": "Literal",
                      "start": 961,
                      "end": 962,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 966,
                      "end": 968,
                      "value": 10,
                      "raw": "10"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 990,
                  "end": 1006,
                  "id": {
                    "type": "Identifier",
                    "start": 990,
                    "end": 996,
                    "name": "LCurly",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 999,
                    "end": 1006,
                    "left": {
                      "type": "Literal",
                      "start": 999,
                      "end": 1000,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 1004,
                      "end": 1006,
                      "value": 11,
                      "raw": "11"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 1026,
                  "end": 1041,
                  "id": {
                    "type": "Identifier",
                    "start": 1026,
                    "end": 1031,
                    "name": "PreOp",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 1034,
                    "end": 1041,
                    "left": {
                      "type": "Literal",
                      "start": 1034,
                      "end": 1035,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 1039,
                      "end": 1041,
                      "value": 12,
                      "raw": "12"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 1076,
                  "end": 1092,
                  "id": {
                    "type": "Identifier",
                    "start": 1076,
                    "end": 1082,
                    "name": "RegExp",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 1085,
                    "end": 1092,
                    "left": {
                      "type": "Literal",
                      "start": 1085,
                      "end": 1086,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 1090,
                      "end": 1092,
                      "value": 13,
                      "raw": "13"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 1112,
                  "end": 1128,
                  "id": {
                    "type": "Identifier",
                    "start": 1112,
                    "end": 1118,
                    "name": "LParen",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 1121,
                    "end": 1128,
                    "left": {
                      "type": "Literal",
                      "start": 1121,
                      "end": 1122,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 1126,
                      "end": 1128,
                      "value": 14,
                      "raw": "14"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 1148,
                  "end": 1164,
                  "id": {
                    "type": "Identifier",
                    "start": 1148,
                    "end": 1154,
                    "name": "LBrack",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 1157,
                    "end": 1164,
                    "left": {
                      "type": "Literal",
                      "start": 1157,
                      "end": 1158,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 1162,
                      "end": 1164,
                      "value": 15,
                      "raw": "15"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 1184,
                  "end": 1199,
                  "id": {
                    "type": "Identifier",
                    "start": 1184,
                    "end": 1189,
                    "name": "Scope",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 1192,
                    "end": 1199,
                    "left": {
                      "type": "Literal",
                      "start": 1192,
                      "end": 1193,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 1197,
                      "end": 1199,
                      "value": 16,
                      "raw": "16"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 1218,
                  "end": 1230,
                  "id": {
                    "type": "Identifier",
                    "start": 1218,
                    "end": 1220,
                    "name": "In",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 1223,
                    "end": 1230,
                    "left": {
                      "type": "Literal",
                      "start": 1223,
                      "end": 1224,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 1228,
                      "end": 1230,
                      "value": 17,
                      "raw": "17"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 1246,
                  "end": 1261,
                  "id": {
                    "type": "Identifier",
                    "start": 1246,
                    "end": 1251,
                    "name": "SCase",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 1254,
                    "end": 1261,
                    "left": {
                      "type": "Literal",
                      "start": 1254,
                      "end": 1255,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 1259,
                      "end": 1261,
                      "value": 18,
                      "raw": "18"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 1288,
                  "end": 1302,
                  "id": {
                    "type": "Identifier",
                    "start": 1288,
                    "end": 1292,
                    "name": "Else",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 1295,
                    "end": 1302,
                    "left": {
                      "type": "Literal",
                      "start": 1295,
                      "end": 1296,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 1300,
                      "end": 1302,
                      "value": 19,
                      "raw": "19"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 1320,
                  "end": 1335,
                  "id": {
                    "type": "Identifier",
                    "start": 1320,
                    "end": 1325,
                    "name": "Catch",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 1328,
                    "end": 1335,
                    "left": {
                      "type": "Literal",
                      "start": 1328,
                      "end": 1329,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 1333,
                      "end": 1335,
                      "value": 20,
                      "raw": "20"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 1363,
                  "end": 1376,
                  "id": {
                    "type": "Identifier",
                    "start": 1363,
                    "end": 1366,
                    "name": "Var",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 1369,
                    "end": 1376,
                    "left": {
                      "type": "Literal",
                      "start": 1369,
                      "end": 1370,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 1374,
                      "end": 1376,
                      "value": 21,
                      "raw": "21"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 1390,
                  "end": 1404,
                  "id": {
                    "type": "Identifier",
                    "start": 1390,
                    "end": 1394,
                    "name": "Stmt",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 1397,
                    "end": 1404,
                    "left": {
                      "type": "Literal",
                      "start": 1397,
                      "end": 1398,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 1402,
                      "end": 1404,
                      "value": 22,
                      "raw": "22"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 1480,
                  "end": 1495,
                  "id": {
                    "type": "Identifier",
                    "start": 1480,
                    "end": 1485,
                    "name": "While",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 1488,
                    "end": 1495,
                    "left": {
                      "type": "Literal",
                      "start": 1488,
                      "end": 1489,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 1493,
                      "end": 1495,
                      "value": 23,
                      "raw": "23"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 1514,
                  "end": 1526,
                  "id": {
                    "type": "Identifier",
                    "start": 1514,
                    "end": 1516,
                    "name": "ID",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 1519,
                    "end": 1526,
                    "left": {
                      "type": "Literal",
                      "start": 1519,
                      "end": 1520,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 1524,
                      "end": 1526,
                      "value": 24,
                      "raw": "24"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 1542,
                  "end": 1558,
                  "id": {
                    "type": "Identifier",
                    "start": 1542,
                    "end": 1548,
                    "name": "Prefix",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 1551,
                    "end": 1558,
                    "left": {
                      "type": "Literal",
                      "start": 1551,
                      "end": 1552,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 1556,
                      "end": 1558,
                      "value": 25,
                      "raw": "25"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 1599,
                  "end": 1616,
                  "id": {
                    "type": "Identifier",
                    "start": 1599,
                    "end": 1606,
                    "name": "Literal",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 1609,
                    "end": 1616,
                    "left": {
                      "type": "Literal",
                      "start": 1609,
                      "end": 1610,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 1614,
                      "end": 1616,
                      "value": 26,
                      "raw": "26"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 1652,
                  "end": 1666,
                  "id": {
                    "type": "Identifier",
                    "start": 1652,
                    "end": 1656,
                    "name": "RLit",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 1659,
                    "end": 1666,
                    "left": {
                      "type": "Literal",
                      "start": 1659,
                      "end": 1660,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 1664,
                      "end": 1666,
                      "value": 27,
                      "raw": "27"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 1703,
                  "end": 1717,
                  "id": {
                    "type": "Identifier",
                    "start": 1703,
                    "end": 1707,
                    "name": "Func",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 1710,
                    "end": 1717,
                    "left": {
                      "type": "Literal",
                      "start": 1710,
                      "end": 1711,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 1715,
                      "end": 1717,
                      "value": 28,
                      "raw": "28"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 1739,
                  "end": 1752,
                  "id": {
                    "type": "Identifier",
                    "start": 1739,
                    "end": 1742,
                    "name": "EOF",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 1745,
                    "end": 1752,
                    "left": {
                      "type": "Literal",
                      "start": 1745,
                      "end": 1746,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 1750,
                      "end": 1752,
                      "value": 29,
                      "raw": "29"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 1818,
                  "end": 1839,
                  "id": {
                    "type": "Identifier",
                    "start": 1818,
                    "end": 1829,
                    "name": "TypeScriptS",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 1832,
                    "end": 1839,
                    "left": {
                      "type": "Literal",
                      "start": 1832,
                      "end": 1833,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 1837,
                      "end": 1839,
                      "value": 30,
                      "raw": "30"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 1920,
                  "end": 2028,
                  "id": {
                    "type": "Identifier",
                    "start": 1920,
                    "end": 1929,
                    "name": "ExprStart",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 1932,
                    "end": 2028,
                    "left": {
                      "type": "BinaryExpression",
                      "start": 1932,
                      "end": 2018,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1932,
                        "end": 2011,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 1932,
                          "end": 2004,
                          "left": {
                            "type": "BinaryExpression",
                            "start": 1932,
                            "end": 1995,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 1932,
                              "end": 1990,
                              "left": {
                                "type": "BinaryExpression",
                                "start": 1932,
                                "end": 1981,
                                "left": {
                                  "type": "BinaryExpression",
                                  "start": 1932,
                                  "end": 1972,
                                  "left": {
                                    "type": "BinaryExpression",
                                    "start": 1932,
                                    "end": 1963,
                                    "left": {
                                      "type": "BinaryExpression",
                                      "start": 1932,
                                      "end": 1955,
                                      "left": {
                                        "type": "BinaryExpression",
                                        "start": 1932,
                                        "end": 1946,
                                        "left": {
                                          "type": "Identifier",
                                          "start": 1932,
                                          "end": 1938,
                                          "name": "SColon",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "operator": "|",
                                        "right": {
                                          "type": "Identifier",
                                          "start": 1941,
                                          "end": 1946,
                                          "name": "AddOp",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        }
                                      },
                                      "operator": "|",
                                      "right": {
                                        "type": "Identifier",
                                        "start": 1949,
                                        "end": 1955,
                                        "name": "LCurly",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    },
                                    "operator": "|",
                                    "right": {
                                      "type": "Identifier",
                                      "start": 1958,
                                      "end": 1963,
                                      "name": "PreOp",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  },
                                  "operator": "|",
                                  "right": {
                                    "type": "Identifier",
                                    "start": 1966,
                                    "end": 1972,
                                    "name": "RegExp",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                },
                                "operator": "|",
                                "right": {
                                  "type": "Identifier",
                                  "start": 1975,
                                  "end": 1981,
                                  "name": "LParen",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "operator": "|",
                              "right": {
                                "type": "Identifier",
                                "start": 1984,
                                "end": 1990,
                                "name": "LBrack",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "operator": "|",
                            "right": {
                              "type": "Identifier",
                              "start": 1993,
                              "end": 1995,
                              "name": "ID",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "operator": "|",
                          "right": {
                            "type": "Identifier",
                            "start": 1998,
                            "end": 2004,
                            "name": "Prefix",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "operator": "|",
                        "right": {
                          "type": "Identifier",
                          "start": 2007,
                          "end": 2011,
                          "name": "RLit",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "operator": "|",
                      "right": {
                        "type": "Identifier",
                        "start": 2014,
                        "end": 2018,
                        "name": "Func",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "operator": "|",
                    "right": {
                      "type": "Identifier",
                      "start": 2021,
                      "end": 2028,
                      "name": "Literal",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 2038,
                  "end": 2103,
                  "id": {
                    "type": "Identifier",
                    "start": 2038,
                    "end": 2047,
                    "name": "StmtStart",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 2050,
                    "end": 2103,
                    "left": {
                      "type": "BinaryExpression",
                      "start": 2050,
                      "end": 2089,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 2050,
                        "end": 2081,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 2050,
                          "end": 2074,
                          "left": {
                            "type": "BinaryExpression",
                            "start": 2050,
                            "end": 2068,
                            "left": {
                              "type": "Identifier",
                              "start": 2050,
                              "end": 2059,
                              "name": "ExprStart",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "|",
                            "right": {
                              "type": "Identifier",
                              "start": 2062,
                              "end": 2068,
                              "name": "SColon",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "operator": "|",
                          "right": {
                            "type": "Identifier",
                            "start": 2071,
                            "end": 2074,
                            "name": "Var",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "operator": "|",
                        "right": {
                          "type": "Identifier",
                          "start": 2077,
                          "end": 2081,
                          "name": "Stmt",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "operator": "|",
                      "right": {
                        "type": "Identifier",
                        "start": 2084,
                        "end": 2089,
                        "name": "While",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "operator": "|",
                    "right": {
                      "type": "Identifier",
                      "start": 2092,
                      "end": 2103,
                      "name": "TypeScriptS",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 2113,
                  "end": 2144,
                  "id": {
                    "type": "Identifier",
                    "start": 2113,
                    "end": 2120,
                    "name": "Postfix",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 2123,
                    "end": 2144,
                    "left": {
                      "type": "BinaryExpression",
                      "start": 2123,
                      "end": 2135,
                      "left": {
                        "type": "Identifier",
                        "start": 2123,
                        "end": 2126,
                        "name": "Dot",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "|",
                      "right": {
                        "type": "Identifier",
                        "start": 2129,
                        "end": 2135,
                        "name": "LParen",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "operator": "|",
                    "right": {
                      "type": "Identifier",
                      "start": 2138,
                      "end": 2144,
                      "name": "LBrack",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "computed": false
                }
              ],
              "const": false,
              "declare": false,
              "body": {
                "type": "TSEnumBody",
                "start": 363,
                "end": 2151,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 373,
                    "end": 381,
                    "id": {
                      "type": "Identifier",
                      "start": 373,
                      "end": 377,
                      "name": "None",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 380,
                      "end": 381,
                      "value": 0,
                      "raw": "0"
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 391,
                    "end": 400,
                    "id": {
                      "type": "Identifier",
                      "start": 391,
                      "end": 396,
                      "name": "Comma",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 399,
                      "end": 400,
                      "value": 1,
                      "raw": "1"
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 419,
                    "end": 434,
                    "id": {
                      "type": "Identifier",
                      "start": 419,
                      "end": 425,
                      "name": "SColon",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 428,
                      "end": 434,
                      "left": {
                        "type": "Literal",
                        "start": 428,
                        "end": 429,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 433,
                        "end": 434,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 454,
                    "end": 466,
                    "id": {
                      "type": "Identifier",
                      "start": 454,
                      "end": 457,
                      "name": "Asg",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 460,
                      "end": 466,
                      "left": {
                        "type": "Literal",
                        "start": 460,
                        "end": 461,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 465,
                        "end": 466,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 483,
                    "end": 497,
                    "id": {
                      "type": "Identifier",
                      "start": 483,
                      "end": 488,
                      "name": "BinOp",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 491,
                      "end": 497,
                      "left": {
                        "type": "Literal",
                        "start": 491,
                        "end": 492,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 496,
                        "end": 497,
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 732,
                    "end": 747,
                    "id": {
                      "type": "Identifier",
                      "start": 732,
                      "end": 738,
                      "name": "RBrack",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 741,
                      "end": 747,
                      "left": {
                        "type": "Literal",
                        "start": 741,
                        "end": 742,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 746,
                        "end": 747,
                        "value": 4,
                        "raw": "4"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 767,
                    "end": 782,
                    "id": {
                      "type": "Identifier",
                      "start": 767,
                      "end": 773,
                      "name": "RCurly",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 776,
                      "end": 782,
                      "left": {
                        "type": "Literal",
                        "start": 776,
                        "end": 777,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 781,
                        "end": 782,
                        "value": 5,
                        "raw": "5"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 802,
                    "end": 817,
                    "id": {
                      "type": "Identifier",
                      "start": 802,
                      "end": 808,
                      "name": "RParen",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 811,
                      "end": 817,
                      "left": {
                        "type": "Literal",
                        "start": 811,
                        "end": 812,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 816,
                        "end": 817,
                        "value": 6,
                        "raw": "6"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 837,
                    "end": 849,
                    "id": {
                      "type": "Identifier",
                      "start": 837,
                      "end": 840,
                      "name": "Dot",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 843,
                      "end": 849,
                      "left": {
                        "type": "Literal",
                        "start": 843,
                        "end": 844,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 848,
                        "end": 849,
                        "value": 7,
                        "raw": "7"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 866,
                    "end": 880,
                    "id": {
                      "type": "Identifier",
                      "start": 866,
                      "end": 871,
                      "name": "Colon",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 874,
                      "end": 880,
                      "left": {
                        "type": "Literal",
                        "start": 874,
                        "end": 875,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 879,
                        "end": 880,
                        "value": 8,
                        "raw": "8"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 899,
                    "end": 916,
                    "id": {
                      "type": "Identifier",
                      "start": 899,
                      "end": 907,
                      "name": "PrimType",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 910,
                      "end": 916,
                      "left": {
                        "type": "Literal",
                        "start": 910,
                        "end": 911,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 915,
                        "end": 916,
                        "value": 9,
                        "raw": "9"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 953,
                    "end": 968,
                    "id": {
                      "type": "Identifier",
                      "start": 953,
                      "end": 958,
                      "name": "AddOp",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 961,
                      "end": 968,
                      "left": {
                        "type": "Literal",
                        "start": 961,
                        "end": 962,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 966,
                        "end": 968,
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 990,
                    "end": 1006,
                    "id": {
                      "type": "Identifier",
                      "start": 990,
                      "end": 996,
                      "name": "LCurly",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 999,
                      "end": 1006,
                      "left": {
                        "type": "Literal",
                        "start": 999,
                        "end": 1000,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 1004,
                        "end": 1006,
                        "value": 11,
                        "raw": "11"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1026,
                    "end": 1041,
                    "id": {
                      "type": "Identifier",
                      "start": 1026,
                      "end": 1031,
                      "name": "PreOp",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1034,
                      "end": 1041,
                      "left": {
                        "type": "Literal",
                        "start": 1034,
                        "end": 1035,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 1039,
                        "end": 1041,
                        "value": 12,
                        "raw": "12"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1076,
                    "end": 1092,
                    "id": {
                      "type": "Identifier",
                      "start": 1076,
                      "end": 1082,
                      "name": "RegExp",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1085,
                      "end": 1092,
                      "left": {
                        "type": "Literal",
                        "start": 1085,
                        "end": 1086,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 1090,
                        "end": 1092,
                        "value": 13,
                        "raw": "13"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1112,
                    "end": 1128,
                    "id": {
                      "type": "Identifier",
                      "start": 1112,
                      "end": 1118,
                      "name": "LParen",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1121,
                      "end": 1128,
                      "left": {
                        "type": "Literal",
                        "start": 1121,
                        "end": 1122,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 1126,
                        "end": 1128,
                        "value": 14,
                        "raw": "14"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1148,
                    "end": 1164,
                    "id": {
                      "type": "Identifier",
                      "start": 1148,
                      "end": 1154,
                      "name": "LBrack",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1157,
                      "end": 1164,
                      "left": {
                        "type": "Literal",
                        "start": 1157,
                        "end": 1158,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 1162,
                        "end": 1164,
                        "value": 15,
                        "raw": "15"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1184,
                    "end": 1199,
                    "id": {
                      "type": "Identifier",
                      "start": 1184,
                      "end": 1189,
                      "name": "Scope",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1192,
                      "end": 1199,
                      "left": {
                        "type": "Literal",
                        "start": 1192,
                        "end": 1193,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 1197,
                        "end": 1199,
                        "value": 16,
                        "raw": "16"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1218,
                    "end": 1230,
                    "id": {
                      "type": "Identifier",
                      "start": 1218,
                      "end": 1220,
                      "name": "In",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1223,
                      "end": 1230,
                      "left": {
                        "type": "Literal",
                        "start": 1223,
                        "end": 1224,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 1228,
                        "end": 1230,
                        "value": 17,
                        "raw": "17"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1246,
                    "end": 1261,
                    "id": {
                      "type": "Identifier",
                      "start": 1246,
                      "end": 1251,
                      "name": "SCase",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1254,
                      "end": 1261,
                      "left": {
                        "type": "Literal",
                        "start": 1254,
                        "end": 1255,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 1259,
                        "end": 1261,
                        "value": 18,
                        "raw": "18"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1288,
                    "end": 1302,
                    "id": {
                      "type": "Identifier",
                      "start": 1288,
                      "end": 1292,
                      "name": "Else",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1295,
                      "end": 1302,
                      "left": {
                        "type": "Literal",
                        "start": 1295,
                        "end": 1296,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 1300,
                        "end": 1302,
                        "value": 19,
                        "raw": "19"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1320,
                    "end": 1335,
                    "id": {
                      "type": "Identifier",
                      "start": 1320,
                      "end": 1325,
                      "name": "Catch",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1328,
                      "end": 1335,
                      "left": {
                        "type": "Literal",
                        "start": 1328,
                        "end": 1329,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 1333,
                        "end": 1335,
                        "value": 20,
                        "raw": "20"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1363,
                    "end": 1376,
                    "id": {
                      "type": "Identifier",
                      "start": 1363,
                      "end": 1366,
                      "name": "Var",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1369,
                      "end": 1376,
                      "left": {
                        "type": "Literal",
                        "start": 1369,
                        "end": 1370,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 1374,
                        "end": 1376,
                        "value": 21,
                        "raw": "21"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1390,
                    "end": 1404,
                    "id": {
                      "type": "Identifier",
                      "start": 1390,
                      "end": 1394,
                      "name": "Stmt",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1397,
                      "end": 1404,
                      "left": {
                        "type": "Literal",
                        "start": 1397,
                        "end": 1398,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 1402,
                        "end": 1404,
                        "value": 22,
                        "raw": "22"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1480,
                    "end": 1495,
                    "id": {
                      "type": "Identifier",
                      "start": 1480,
                      "end": 1485,
                      "name": "While",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1488,
                      "end": 1495,
                      "left": {
                        "type": "Literal",
                        "start": 1488,
                        "end": 1489,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 1493,
                        "end": 1495,
                        "value": 23,
                        "raw": "23"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1514,
                    "end": 1526,
                    "id": {
                      "type": "Identifier",
                      "start": 1514,
                      "end": 1516,
                      "name": "ID",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1519,
                      "end": 1526,
                      "left": {
                        "type": "Literal",
                        "start": 1519,
                        "end": 1520,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 1524,
                        "end": 1526,
                        "value": 24,
                        "raw": "24"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1542,
                    "end": 1558,
                    "id": {
                      "type": "Identifier",
                      "start": 1542,
                      "end": 1548,
                      "name": "Prefix",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1551,
                      "end": 1558,
                      "left": {
                        "type": "Literal",
                        "start": 1551,
                        "end": 1552,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 1556,
                        "end": 1558,
                        "value": 25,
                        "raw": "25"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1599,
                    "end": 1616,
                    "id": {
                      "type": "Identifier",
                      "start": 1599,
                      "end": 1606,
                      "name": "Literal",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1609,
                      "end": 1616,
                      "left": {
                        "type": "Literal",
                        "start": 1609,
                        "end": 1610,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 1614,
                        "end": 1616,
                        "value": 26,
                        "raw": "26"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1652,
                    "end": 1666,
                    "id": {
                      "type": "Identifier",
                      "start": 1652,
                      "end": 1656,
                      "name": "RLit",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1659,
                      "end": 1666,
                      "left": {
                        "type": "Literal",
                        "start": 1659,
                        "end": 1660,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 1664,
                        "end": 1666,
                        "value": 27,
                        "raw": "27"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1703,
                    "end": 1717,
                    "id": {
                      "type": "Identifier",
                      "start": 1703,
                      "end": 1707,
                      "name": "Func",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1710,
                      "end": 1717,
                      "left": {
                        "type": "Literal",
                        "start": 1710,
                        "end": 1711,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 1715,
                        "end": 1717,
                        "value": 28,
                        "raw": "28"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1739,
                    "end": 1752,
                    "id": {
                      "type": "Identifier",
                      "start": 1739,
                      "end": 1742,
                      "name": "EOF",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1745,
                      "end": 1752,
                      "left": {
                        "type": "Literal",
                        "start": 1745,
                        "end": 1746,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 1750,
                        "end": 1752,
                        "value": 29,
                        "raw": "29"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1818,
                    "end": 1839,
                    "id": {
                      "type": "Identifier",
                      "start": 1818,
                      "end": 1829,
                      "name": "TypeScriptS",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1832,
                      "end": 1839,
                      "left": {
                        "type": "Literal",
                        "start": 1832,
                        "end": 1833,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 1837,
                        "end": 1839,
                        "value": 30,
                        "raw": "30"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1920,
                    "end": 2028,
                    "id": {
                      "type": "Identifier",
                      "start": 1920,
                      "end": 1929,
                      "name": "ExprStart",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 1932,
                      "end": 2028,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1932,
                        "end": 2018,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 1932,
                          "end": 2011,
                          "left": {
                            "type": "BinaryExpression",
                            "start": 1932,
                            "end": 2004,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 1932,
                              "end": 1995,
                              "left": {
                                "type": "BinaryExpression",
                                "start": 1932,
                                "end": 1990,
                                "left": {
                                  "type": "BinaryExpression",
                                  "start": 1932,
                                  "end": 1981,
                                  "left": {
                                    "type": "BinaryExpression",
                                    "start": 1932,
                                    "end": 1972,
                                    "left": {
                                      "type": "BinaryExpression",
                                      "start": 1932,
                                      "end": 1963,
                                      "left": {
                                        "type": "BinaryExpression",
                                        "start": 1932,
                                        "end": 1955,
                                        "left": {
                                          "type": "BinaryExpression",
                                          "start": 1932,
                                          "end": 1946,
                                          "left": {
                                            "type": "Identifier",
                                            "start": 1932,
                                            "end": 1938,
                                            "name": "SColon",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "operator": "|",
                                          "right": {
                                            "type": "Identifier",
                                            "start": 1941,
                                            "end": 1946,
                                            "name": "AddOp",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          }
                                        },
                                        "operator": "|",
                                        "right": {
                                          "type": "Identifier",
                                          "start": 1949,
                                          "end": 1955,
                                          "name": "LCurly",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        }
                                      },
                                      "operator": "|",
                                      "right": {
                                        "type": "Identifier",
                                        "start": 1958,
                                        "end": 1963,
                                        "name": "PreOp",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    },
                                    "operator": "|",
                                    "right": {
                                      "type": "Identifier",
                                      "start": 1966,
                                      "end": 1972,
                                      "name": "RegExp",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  },
                                  "operator": "|",
                                  "right": {
                                    "type": "Identifier",
                                    "start": 1975,
                                    "end": 1981,
                                    "name": "LParen",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                },
                                "operator": "|",
                                "right": {
                                  "type": "Identifier",
                                  "start": 1984,
                                  "end": 1990,
                                  "name": "LBrack",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "operator": "|",
                              "right": {
                                "type": "Identifier",
                                "start": 1993,
                                "end": 1995,
                                "name": "ID",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "operator": "|",
                            "right": {
                              "type": "Identifier",
                              "start": 1998,
                              "end": 2004,
                              "name": "Prefix",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "operator": "|",
                          "right": {
                            "type": "Identifier",
                            "start": 2007,
                            "end": 2011,
                            "name": "RLit",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "operator": "|",
                        "right": {
                          "type": "Identifier",
                          "start": 2014,
                          "end": 2018,
                          "name": "Func",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "operator": "|",
                      "right": {
                        "type": "Identifier",
                        "start": 2021,
                        "end": 2028,
                        "name": "Literal",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2038,
                    "end": 2103,
                    "id": {
                      "type": "Identifier",
                      "start": 2038,
                      "end": 2047,
                      "name": "StmtStart",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 2050,
                      "end": 2103,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 2050,
                        "end": 2089,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 2050,
                          "end": 2081,
                          "left": {
                            "type": "BinaryExpression",
                            "start": 2050,
                            "end": 2074,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 2050,
                              "end": 2068,
                              "left": {
                                "type": "Identifier",
                                "start": 2050,
                                "end": 2059,
                                "name": "ExprStart",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "|",
                              "right": {
                                "type": "Identifier",
                                "start": 2062,
                                "end": 2068,
                                "name": "SColon",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "operator": "|",
                            "right": {
                              "type": "Identifier",
                              "start": 2071,
                              "end": 2074,
                              "name": "Var",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "operator": "|",
                          "right": {
                            "type": "Identifier",
                            "start": 2077,
                            "end": 2081,
                            "name": "Stmt",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "operator": "|",
                        "right": {
                          "type": "Identifier",
                          "start": 2084,
                          "end": 2089,
                          "name": "While",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "operator": "|",
                      "right": {
                        "type": "Identifier",
                        "start": 2092,
                        "end": 2103,
                        "name": "TypeScriptS",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2113,
                    "end": 2144,
                    "id": {
                      "type": "Identifier",
                      "start": 2113,
                      "end": 2120,
                      "name": "Postfix",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 2123,
                      "end": 2144,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 2123,
                        "end": 2135,
                        "left": {
                          "type": "Identifier",
                          "start": 2123,
                          "end": 2126,
                          "name": "Dot",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "|",
                        "right": {
                          "type": "Identifier",
                          "start": 2129,
                          "end": 2135,
                          "name": "LParen",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "operator": "|",
                      "right": {
                        "type": "Identifier",
                        "start": 2138,
                        "end": 2144,
                        "name": "LBrack",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "computed": false
                  }
                ]
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 2157,
            "end": 2538,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 2164,
              "end": 2538,
              "id": {
                "type": "Identifier",
                "start": 2169,
                "end": 2184,
                "name": "AllowedElements",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 2195,
                  "end": 2203,
                  "id": {
                    "type": "Identifier",
                    "start": 2195,
                    "end": 2199,
                    "name": "None",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 2202,
                    "end": 2203,
                    "value": 0,
                    "raw": "0"
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 2213,
                  "end": 2240,
                  "id": {
                    "type": "Identifier",
                    "start": 2213,
                    "end": 2231,
                    "name": "ModuleDeclarations",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 2234,
                    "end": 2240,
                    "left": {
                      "type": "Literal",
                      "start": 2234,
                      "end": 2235,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 2239,
                      "end": 2240,
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 2250,
                  "end": 2276,
                  "id": {
                    "type": "Identifier",
                    "start": 2250,
                    "end": 2267,
                    "name": "ClassDeclarations",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 2270,
                    "end": 2276,
                    "left": {
                      "type": "Literal",
                      "start": 2270,
                      "end": 2271,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 2275,
                      "end": 2276,
                      "value": 3,
                      "raw": "3"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 2286,
                  "end": 2316,
                  "id": {
                    "type": "Identifier",
                    "start": 2286,
                    "end": 2307,
                    "name": "InterfaceDeclarations",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 2310,
                    "end": 2316,
                    "left": {
                      "type": "Literal",
                      "start": 2310,
                      "end": 2311,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 2315,
                      "end": 2316,
                      "value": 4,
                      "raw": "4"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 2326,
                  "end": 2355,
                  "id": {
                    "type": "Identifier",
                    "start": 2326,
                    "end": 2345,
                    "name": "AmbientDeclarations",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 2348,
                    "end": 2355,
                    "left": {
                      "type": "Literal",
                      "start": 2348,
                      "end": 2349,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 2353,
                      "end": 2355,
                      "value": 10,
                      "raw": "10"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 2365,
                  "end": 2385,
                  "id": {
                    "type": "Identifier",
                    "start": 2365,
                    "end": 2375,
                    "name": "Properties",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 2378,
                    "end": 2385,
                    "left": {
                      "type": "Literal",
                      "start": 2378,
                      "end": 2379,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 2383,
                      "end": 2385,
                      "value": 11,
                      "raw": "11"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 2396,
                  "end": 2489,
                  "id": {
                    "type": "Identifier",
                    "start": 2396,
                    "end": 2402,
                    "name": "Global",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 2405,
                    "end": 2489,
                    "left": {
                      "type": "BinaryExpression",
                      "start": 2405,
                      "end": 2467,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 2405,
                        "end": 2443,
                        "left": {
                          "type": "Identifier",
                          "start": 2405,
                          "end": 2423,
                          "name": "ModuleDeclarations",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "|",
                        "right": {
                          "type": "Identifier",
                          "start": 2426,
                          "end": 2443,
                          "name": "ClassDeclarations",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "operator": "|",
                      "right": {
                        "type": "Identifier",
                        "start": 2446,
                        "end": 2467,
                        "name": "InterfaceDeclarations",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "operator": "|",
                    "right": {
                      "type": "Identifier",
                      "start": 2470,
                      "end": 2489,
                      "name": "AmbientDeclarations",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 2499,
                  "end": 2531,
                  "id": {
                    "type": "Identifier",
                    "start": 2499,
                    "end": 2509,
                    "name": "QuickParse",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 2512,
                    "end": 2531,
                    "left": {
                      "type": "Identifier",
                      "start": 2512,
                      "end": 2518,
                      "name": "Global",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "|",
                    "right": {
                      "type": "Identifier",
                      "start": 2521,
                      "end": 2531,
                      "name": "Properties",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "computed": false
                }
              ],
              "const": false,
              "declare": false,
              "body": {
                "type": "TSEnumBody",
                "start": 2185,
                "end": 2538,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 2195,
                    "end": 2203,
                    "id": {
                      "type": "Identifier",
                      "start": 2195,
                      "end": 2199,
                      "name": "None",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 2202,
                      "end": 2203,
                      "value": 0,
                      "raw": "0"
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2213,
                    "end": 2240,
                    "id": {
                      "type": "Identifier",
                      "start": 2213,
                      "end": 2231,
                      "name": "ModuleDeclarations",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 2234,
                      "end": 2240,
                      "left": {
                        "type": "Literal",
                        "start": 2234,
                        "end": 2235,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 2239,
                        "end": 2240,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2250,
                    "end": 2276,
                    "id": {
                      "type": "Identifier",
                      "start": 2250,
                      "end": 2267,
                      "name": "ClassDeclarations",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 2270,
                      "end": 2276,
                      "left": {
                        "type": "Literal",
                        "start": 2270,
                        "end": 2271,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 2275,
                        "end": 2276,
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2286,
                    "end": 2316,
                    "id": {
                      "type": "Identifier",
                      "start": 2286,
                      "end": 2307,
                      "name": "InterfaceDeclarations",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 2310,
                      "end": 2316,
                      "left": {
                        "type": "Literal",
                        "start": 2310,
                        "end": 2311,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 2315,
                        "end": 2316,
                        "value": 4,
                        "raw": "4"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2326,
                    "end": 2355,
                    "id": {
                      "type": "Identifier",
                      "start": 2326,
                      "end": 2345,
                      "name": "AmbientDeclarations",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 2348,
                      "end": 2355,
                      "left": {
                        "type": "Literal",
                        "start": 2348,
                        "end": 2349,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 2353,
                        "end": 2355,
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2365,
                    "end": 2385,
                    "id": {
                      "type": "Identifier",
                      "start": 2365,
                      "end": 2375,
                      "name": "Properties",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 2378,
                      "end": 2385,
                      "left": {
                        "type": "Literal",
                        "start": 2378,
                        "end": 2379,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 2383,
                        "end": 2385,
                        "value": 11,
                        "raw": "11"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2396,
                    "end": 2489,
                    "id": {
                      "type": "Identifier",
                      "start": 2396,
                      "end": 2402,
                      "name": "Global",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 2405,
                      "end": 2489,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 2405,
                        "end": 2467,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 2405,
                          "end": 2443,
                          "left": {
                            "type": "Identifier",
                            "start": 2405,
                            "end": 2423,
                            "name": "ModuleDeclarations",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "operator": "|",
                          "right": {
                            "type": "Identifier",
                            "start": 2426,
                            "end": 2443,
                            "name": "ClassDeclarations",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "operator": "|",
                        "right": {
                          "type": "Identifier",
                          "start": 2446,
                          "end": 2467,
                          "name": "InterfaceDeclarations",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "operator": "|",
                      "right": {
                        "type": "Identifier",
                        "start": 2470,
                        "end": 2489,
                        "name": "AmbientDeclarations",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2499,
                    "end": 2531,
                    "id": {
                      "type": "Identifier",
                      "start": 2499,
                      "end": 2509,
                      "name": "QuickParse",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 2512,
                      "end": 2531,
                      "left": {
                        "type": "Identifier",
                        "start": 2512,
                        "end": 2518,
                        "name": "Global",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "|",
                      "right": {
                        "type": "Identifier",
                        "start": 2521,
                        "end": 2531,
                        "name": "Properties",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "computed": false
                  }
                ]
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 2544,
            "end": 2792,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 2551,
              "end": 2792,
              "id": {
                "type": "Identifier",
                "start": 2556,
                "end": 2565,
                "name": "Modifiers",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 2576,
                  "end": 2584,
                  "id": {
                    "type": "Identifier",
                    "start": 2576,
                    "end": 2580,
                    "name": "None",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 2583,
                    "end": 2584,
                    "value": 0,
                    "raw": "0"
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 2594,
                  "end": 2605,
                  "id": {
                    "type": "Identifier",
                    "start": 2594,
                    "end": 2601,
                    "name": "Private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 2604,
                    "end": 2605,
                    "value": 1,
                    "raw": "1"
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 2615,
                  "end": 2630,
                  "id": {
                    "type": "Identifier",
                    "start": 2615,
                    "end": 2621,
                    "name": "Public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 2624,
                    "end": 2630,
                    "left": {
                      "type": "Literal",
                      "start": 2624,
                      "end": 2625,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 2629,
                      "end": 2630,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 2640,
                  "end": 2657,
                  "id": {
                    "type": "Identifier",
                    "start": 2640,
                    "end": 2648,
                    "name": "Readonly",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 2651,
                    "end": 2657,
                    "left": {
                      "type": "Literal",
                      "start": 2651,
                      "end": 2652,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 2656,
                      "end": 2657,
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 2667,
                  "end": 2683,
                  "id": {
                    "type": "Identifier",
                    "start": 2667,
                    "end": 2674,
                    "name": "Ambient",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 2677,
                    "end": 2683,
                    "left": {
                      "type": "Literal",
                      "start": 2677,
                      "end": 2678,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 2682,
                      "end": 2683,
                      "value": 3,
                      "raw": "3"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 2693,
                  "end": 2710,
                  "id": {
                    "type": "Identifier",
                    "start": 2693,
                    "end": 2701,
                    "name": "Exported",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 2704,
                    "end": 2710,
                    "left": {
                      "type": "Literal",
                      "start": 2704,
                      "end": 2705,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 2709,
                      "end": 2710,
                      "value": 4,
                      "raw": "4"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 2720,
                  "end": 2735,
                  "id": {
                    "type": "Identifier",
                    "start": 2720,
                    "end": 2726,
                    "name": "Getter",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 2729,
                    "end": 2735,
                    "left": {
                      "type": "Literal",
                      "start": 2729,
                      "end": 2730,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 2734,
                      "end": 2735,
                      "value": 5,
                      "raw": "5"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 2745,
                  "end": 2760,
                  "id": {
                    "type": "Identifier",
                    "start": 2745,
                    "end": 2751,
                    "name": "Setter",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 2754,
                    "end": 2760,
                    "left": {
                      "type": "Literal",
                      "start": 2754,
                      "end": 2755,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 2759,
                      "end": 2760,
                      "value": 6,
                      "raw": "6"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 2770,
                  "end": 2785,
                  "id": {
                    "type": "Identifier",
                    "start": 2770,
                    "end": 2776,
                    "name": "Static",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 2779,
                    "end": 2785,
                    "left": {
                      "type": "Literal",
                      "start": 2779,
                      "end": 2780,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 2784,
                      "end": 2785,
                      "value": 7,
                      "raw": "7"
                    }
                  },
                  "computed": false
                }
              ],
              "const": false,
              "declare": false,
              "body": {
                "type": "TSEnumBody",
                "start": 2566,
                "end": 2792,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 2576,
                    "end": 2584,
                    "id": {
                      "type": "Identifier",
                      "start": 2576,
                      "end": 2580,
                      "name": "None",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 2583,
                      "end": 2584,
                      "value": 0,
                      "raw": "0"
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2594,
                    "end": 2605,
                    "id": {
                      "type": "Identifier",
                      "start": 2594,
                      "end": 2601,
                      "name": "Private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 2604,
                      "end": 2605,
                      "value": 1,
                      "raw": "1"
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2615,
                    "end": 2630,
                    "id": {
                      "type": "Identifier",
                      "start": 2615,
                      "end": 2621,
                      "name": "Public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 2624,
                      "end": 2630,
                      "left": {
                        "type": "Literal",
                        "start": 2624,
                        "end": 2625,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 2629,
                        "end": 2630,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2640,
                    "end": 2657,
                    "id": {
                      "type": "Identifier",
                      "start": 2640,
                      "end": 2648,
                      "name": "Readonly",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 2651,
                      "end": 2657,
                      "left": {
                        "type": "Literal",
                        "start": 2651,
                        "end": 2652,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 2656,
                        "end": 2657,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2667,
                    "end": 2683,
                    "id": {
                      "type": "Identifier",
                      "start": 2667,
                      "end": 2674,
                      "name": "Ambient",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 2677,
                      "end": 2683,
                      "left": {
                        "type": "Literal",
                        "start": 2677,
                        "end": 2678,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 2682,
                        "end": 2683,
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2693,
                    "end": 2710,
                    "id": {
                      "type": "Identifier",
                      "start": 2693,
                      "end": 2701,
                      "name": "Exported",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 2704,
                      "end": 2710,
                      "left": {
                        "type": "Literal",
                        "start": 2704,
                        "end": 2705,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 2709,
                        "end": 2710,
                        "value": 4,
                        "raw": "4"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2720,
                    "end": 2735,
                    "id": {
                      "type": "Identifier",
                      "start": 2720,
                      "end": 2726,
                      "name": "Getter",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 2729,
                      "end": 2735,
                      "left": {
                        "type": "Literal",
                        "start": 2729,
                        "end": 2730,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 2734,
                        "end": 2735,
                        "value": 5,
                        "raw": "5"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2745,
                    "end": 2760,
                    "id": {
                      "type": "Identifier",
                      "start": 2745,
                      "end": 2751,
                      "name": "Setter",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 2754,
                      "end": 2760,
                      "left": {
                        "type": "Literal",
                        "start": 2754,
                        "end": 2755,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 2759,
                        "end": 2760,
                        "value": 6,
                        "raw": "6"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2770,
                    "end": 2785,
                    "id": {
                      "type": "Identifier",
                      "start": 2770,
                      "end": 2776,
                      "name": "Static",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 2779,
                      "end": 2785,
                      "left": {
                        "type": "Literal",
                        "start": 2779,
                        "end": 2780,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 2784,
                        "end": 2785,
                        "value": 7,
                        "raw": "7"
                      }
                    },
                    "computed": false
                  }
                ]
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 2798,
            "end": 3927,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 2805,
              "end": 3927,
              "id": {
                "type": "Identifier",
                "start": 2810,
                "end": 2818,
                "name": "ASTFlags",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 2829,
                  "end": 2837,
                  "id": {
                    "type": "Identifier",
                    "start": 2829,
                    "end": 2833,
                    "name": "None",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 2836,
                    "end": 2837,
                    "value": 0,
                    "raw": "0"
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 2847,
                  "end": 2868,
                  "id": {
                    "type": "Identifier",
                    "start": 2847,
                    "end": 2864,
                    "name": "ExplicitSemicolon",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 2867,
                    "end": 2868,
                    "value": 1,
                    "raw": "1"
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 2926,
                  "end": 2953,
                  "id": {
                    "type": "Identifier",
                    "start": 2926,
                    "end": 2944,
                    "name": "AutomaticSemicolon",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 2947,
                    "end": 2953,
                    "left": {
                      "type": "Literal",
                      "start": 2947,
                      "end": 2948,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 2952,
                      "end": 2953,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 3012,
                  "end": 3030,
                  "id": {
                    "type": "Identifier",
                    "start": 3012,
                    "end": 3021,
                    "name": "Writeable",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 3024,
                    "end": 3030,
                    "left": {
                      "type": "Literal",
                      "start": 3024,
                      "end": 3025,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 3029,
                      "end": 3030,
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 3077,
                  "end": 3091,
                  "id": {
                    "type": "Identifier",
                    "start": 3077,
                    "end": 3082,
                    "name": "Error",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 3085,
                    "end": 3091,
                    "left": {
                      "type": "Literal",
                      "start": 3085,
                      "end": 3086,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 3090,
                      "end": 3091,
                      "value": 3,
                      "raw": "3"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 3122,
                  "end": 3144,
                  "id": {
                    "type": "Identifier",
                    "start": 3122,
                    "end": 3135,
                    "name": "DotLHSPartial",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 3138,
                    "end": 3144,
                    "left": {
                      "type": "Literal",
                      "start": 3138,
                      "end": 3139,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 3143,
                      "end": 3144,
                      "value": 4,
                      "raw": "4"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 3209,
                  "end": 3224,
                  "id": {
                    "type": "Identifier",
                    "start": 3209,
                    "end": 3215,
                    "name": "DotLHS",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 3218,
                    "end": 3224,
                    "left": {
                      "type": "Literal",
                      "start": 3218,
                      "end": 3219,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 3223,
                      "end": 3224,
                      "value": 5,
                      "raw": "5"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 3267,
                  "end": 3287,
                  "id": {
                    "type": "Identifier",
                    "start": 3267,
                    "end": 3278,
                    "name": "IsStatement",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 3281,
                    "end": 3287,
                    "left": {
                      "type": "Literal",
                      "start": 3281,
                      "end": 3282,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 3286,
                      "end": 3287,
                      "value": 6,
                      "raw": "6"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 3320,
                  "end": 3339,
                  "id": {
                    "type": "Identifier",
                    "start": 3320,
                    "end": 3330,
                    "name": "StrictMode",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 3333,
                    "end": 3339,
                    "left": {
                      "type": "Literal",
                      "start": 3333,
                      "end": 3334,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 3338,
                      "end": 3339,
                      "value": 7,
                      "raw": "7"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 3391,
                  "end": 3425,
                  "id": {
                    "type": "Identifier",
                    "start": 3391,
                    "end": 3416,
                    "name": "PossibleOptionalParameter",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 3419,
                    "end": 3425,
                    "left": {
                      "type": "Literal",
                      "start": 3419,
                      "end": 3420,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 3424,
                      "end": 3425,
                      "value": 8,
                      "raw": "8"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 3435,
                  "end": 3468,
                  "id": {
                    "type": "Identifier",
                    "start": 3435,
                    "end": 3459,
                    "name": "ClassBaseConstructorCall",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 3462,
                    "end": 3468,
                    "left": {
                      "type": "Literal",
                      "start": 3462,
                      "end": 3463,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 3467,
                      "end": 3468,
                      "value": 9,
                      "raw": "9"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 3478,
                  "end": 3500,
                  "id": {
                    "type": "Identifier",
                    "start": 3478,
                    "end": 3490,
                    "name": "OptionalName",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 3493,
                    "end": 3500,
                    "left": {
                      "type": "Literal",
                      "start": 3493,
                      "end": 3494,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 3498,
                      "end": 3500,
                      "value": 10,
                      "raw": "10"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 3895,
                  "end": 3919,
                  "id": {
                    "type": "Identifier",
                    "start": 3895,
                    "end": 3909,
                    "name": "SkipNextRParen",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 3912,
                    "end": 3919,
                    "left": {
                      "type": "Literal",
                      "start": 3912,
                      "end": 3913,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 3917,
                      "end": 3919,
                      "value": 11,
                      "raw": "11"
                    }
                  },
                  "computed": false
                }
              ],
              "const": false,
              "declare": false,
              "body": {
                "type": "TSEnumBody",
                "start": 2819,
                "end": 3927,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 2829,
                    "end": 2837,
                    "id": {
                      "type": "Identifier",
                      "start": 2829,
                      "end": 2833,
                      "name": "None",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 2836,
                      "end": 2837,
                      "value": 0,
                      "raw": "0"
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2847,
                    "end": 2868,
                    "id": {
                      "type": "Identifier",
                      "start": 2847,
                      "end": 2864,
                      "name": "ExplicitSemicolon",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 2867,
                      "end": 2868,
                      "value": 1,
                      "raw": "1"
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 2926,
                    "end": 2953,
                    "id": {
                      "type": "Identifier",
                      "start": 2926,
                      "end": 2944,
                      "name": "AutomaticSemicolon",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 2947,
                      "end": 2953,
                      "left": {
                        "type": "Literal",
                        "start": 2947,
                        "end": 2948,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 2952,
                        "end": 2953,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 3012,
                    "end": 3030,
                    "id": {
                      "type": "Identifier",
                      "start": 3012,
                      "end": 3021,
                      "name": "Writeable",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 3024,
                      "end": 3030,
                      "left": {
                        "type": "Literal",
                        "start": 3024,
                        "end": 3025,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 3029,
                        "end": 3030,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 3077,
                    "end": 3091,
                    "id": {
                      "type": "Identifier",
                      "start": 3077,
                      "end": 3082,
                      "name": "Error",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 3085,
                      "end": 3091,
                      "left": {
                        "type": "Literal",
                        "start": 3085,
                        "end": 3086,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 3090,
                        "end": 3091,
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 3122,
                    "end": 3144,
                    "id": {
                      "type": "Identifier",
                      "start": 3122,
                      "end": 3135,
                      "name": "DotLHSPartial",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 3138,
                      "end": 3144,
                      "left": {
                        "type": "Literal",
                        "start": 3138,
                        "end": 3139,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 3143,
                        "end": 3144,
                        "value": 4,
                        "raw": "4"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 3209,
                    "end": 3224,
                    "id": {
                      "type": "Identifier",
                      "start": 3209,
                      "end": 3215,
                      "name": "DotLHS",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 3218,
                      "end": 3224,
                      "left": {
                        "type": "Literal",
                        "start": 3218,
                        "end": 3219,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 3223,
                        "end": 3224,
                        "value": 5,
                        "raw": "5"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 3267,
                    "end": 3287,
                    "id": {
                      "type": "Identifier",
                      "start": 3267,
                      "end": 3278,
                      "name": "IsStatement",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 3281,
                      "end": 3287,
                      "left": {
                        "type": "Literal",
                        "start": 3281,
                        "end": 3282,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 3286,
                        "end": 3287,
                        "value": 6,
                        "raw": "6"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 3320,
                    "end": 3339,
                    "id": {
                      "type": "Identifier",
                      "start": 3320,
                      "end": 3330,
                      "name": "StrictMode",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 3333,
                      "end": 3339,
                      "left": {
                        "type": "Literal",
                        "start": 3333,
                        "end": 3334,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 3338,
                        "end": 3339,
                        "value": 7,
                        "raw": "7"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 3391,
                    "end": 3425,
                    "id": {
                      "type": "Identifier",
                      "start": 3391,
                      "end": 3416,
                      "name": "PossibleOptionalParameter",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 3419,
                      "end": 3425,
                      "left": {
                        "type": "Literal",
                        "start": 3419,
                        "end": 3420,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 3424,
                        "end": 3425,
                        "value": 8,
                        "raw": "8"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 3435,
                    "end": 3468,
                    "id": {
                      "type": "Identifier",
                      "start": 3435,
                      "end": 3459,
                      "name": "ClassBaseConstructorCall",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 3462,
                      "end": 3468,
                      "left": {
                        "type": "Literal",
                        "start": 3462,
                        "end": 3463,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 3467,
                        "end": 3468,
                        "value": 9,
                        "raw": "9"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 3478,
                    "end": 3500,
                    "id": {
                      "type": "Identifier",
                      "start": 3478,
                      "end": 3490,
                      "name": "OptionalName",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 3493,
                      "end": 3500,
                      "left": {
                        "type": "Literal",
                        "start": 3493,
                        "end": 3494,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 3498,
                        "end": 3500,
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 3895,
                    "end": 3919,
                    "id": {
                      "type": "Identifier",
                      "start": 3895,
                      "end": 3909,
                      "name": "SkipNextRParen",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 3912,
                      "end": 3919,
                      "left": {
                        "type": "Literal",
                        "start": 3912,
                        "end": 3913,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 3917,
                        "end": 3919,
                        "value": 11,
                        "raw": "11"
                      }
                    },
                    "computed": false
                  }
                ]
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 3933,
            "end": 4194,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 3940,
              "end": 4194,
              "id": {
                "type": "Identifier",
                "start": 3945,
                "end": 3954,
                "name": "DeclFlags",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 3965,
                  "end": 3973,
                  "id": {
                    "type": "Identifier",
                    "start": 3965,
                    "end": 3969,
                    "name": "None",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 3972,
                    "end": 3973,
                    "value": 0,
                    "raw": "0"
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 3983,
                  "end": 3995,
                  "id": {
                    "type": "Identifier",
                    "start": 3983,
                    "end": 3991,
                    "name": "Exported",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 3994,
                    "end": 3995,
                    "value": 1,
                    "raw": "1"
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 4005,
                  "end": 4021,
                  "id": {
                    "type": "Identifier",
                    "start": 4005,
                    "end": 4012,
                    "name": "Private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 4015,
                    "end": 4021,
                    "left": {
                      "type": "Literal",
                      "start": 4015,
                      "end": 4016,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 4020,
                      "end": 4021,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 4031,
                  "end": 4046,
                  "id": {
                    "type": "Identifier",
                    "start": 4031,
                    "end": 4037,
                    "name": "Public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 4040,
                    "end": 4046,
                    "left": {
                      "type": "Literal",
                      "start": 4040,
                      "end": 4041,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 4045,
                      "end": 4046,
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 4056,
                  "end": 4072,
                  "id": {
                    "type": "Identifier",
                    "start": 4056,
                    "end": 4063,
                    "name": "Ambient",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 4066,
                    "end": 4072,
                    "left": {
                      "type": "Literal",
                      "start": 4066,
                      "end": 4067,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 4071,
                      "end": 4072,
                      "value": 3,
                      "raw": "3"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 4082,
                  "end": 4097,
                  "id": {
                    "type": "Identifier",
                    "start": 4082,
                    "end": 4088,
                    "name": "Static",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 4091,
                    "end": 4097,
                    "left": {
                      "type": "Literal",
                      "start": 4091,
                      "end": 4092,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 4096,
                      "end": 4097,
                      "value": 4,
                      "raw": "4"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 4107,
                  "end": 4127,
                  "id": {
                    "type": "Identifier",
                    "start": 4107,
                    "end": 4118,
                    "name": "LocalStatic",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 4121,
                    "end": 4127,
                    "left": {
                      "type": "Literal",
                      "start": 4121,
                      "end": 4122,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 4126,
                      "end": 4127,
                      "value": 5,
                      "raw": "5"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 4137,
                  "end": 4157,
                  "id": {
                    "type": "Identifier",
                    "start": 4137,
                    "end": 4148,
                    "name": "GetAccessor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 4151,
                    "end": 4157,
                    "left": {
                      "type": "Literal",
                      "start": 4151,
                      "end": 4152,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 4156,
                      "end": 4157,
                      "value": 6,
                      "raw": "6"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 4167,
                  "end": 4187,
                  "id": {
                    "type": "Identifier",
                    "start": 4167,
                    "end": 4178,
                    "name": "SetAccessor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 4181,
                    "end": 4187,
                    "left": {
                      "type": "Literal",
                      "start": 4181,
                      "end": 4182,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 4186,
                      "end": 4187,
                      "value": 7,
                      "raw": "7"
                    }
                  },
                  "computed": false
                }
              ],
              "const": false,
              "declare": false,
              "body": {
                "type": "TSEnumBody",
                "start": 3955,
                "end": 4194,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 3965,
                    "end": 3973,
                    "id": {
                      "type": "Identifier",
                      "start": 3965,
                      "end": 3969,
                      "name": "None",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 3972,
                      "end": 3973,
                      "value": 0,
                      "raw": "0"
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 3983,
                    "end": 3995,
                    "id": {
                      "type": "Identifier",
                      "start": 3983,
                      "end": 3991,
                      "name": "Exported",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 3994,
                      "end": 3995,
                      "value": 1,
                      "raw": "1"
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4005,
                    "end": 4021,
                    "id": {
                      "type": "Identifier",
                      "start": 4005,
                      "end": 4012,
                      "name": "Private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4015,
                      "end": 4021,
                      "left": {
                        "type": "Literal",
                        "start": 4015,
                        "end": 4016,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 4020,
                        "end": 4021,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4031,
                    "end": 4046,
                    "id": {
                      "type": "Identifier",
                      "start": 4031,
                      "end": 4037,
                      "name": "Public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4040,
                      "end": 4046,
                      "left": {
                        "type": "Literal",
                        "start": 4040,
                        "end": 4041,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 4045,
                        "end": 4046,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4056,
                    "end": 4072,
                    "id": {
                      "type": "Identifier",
                      "start": 4056,
                      "end": 4063,
                      "name": "Ambient",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4066,
                      "end": 4072,
                      "left": {
                        "type": "Literal",
                        "start": 4066,
                        "end": 4067,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 4071,
                        "end": 4072,
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4082,
                    "end": 4097,
                    "id": {
                      "type": "Identifier",
                      "start": 4082,
                      "end": 4088,
                      "name": "Static",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4091,
                      "end": 4097,
                      "left": {
                        "type": "Literal",
                        "start": 4091,
                        "end": 4092,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 4096,
                        "end": 4097,
                        "value": 4,
                        "raw": "4"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4107,
                    "end": 4127,
                    "id": {
                      "type": "Identifier",
                      "start": 4107,
                      "end": 4118,
                      "name": "LocalStatic",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4121,
                      "end": 4127,
                      "left": {
                        "type": "Literal",
                        "start": 4121,
                        "end": 4122,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 4126,
                        "end": 4127,
                        "value": 5,
                        "raw": "5"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4137,
                    "end": 4157,
                    "id": {
                      "type": "Identifier",
                      "start": 4137,
                      "end": 4148,
                      "name": "GetAccessor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4151,
                      "end": 4157,
                      "left": {
                        "type": "Literal",
                        "start": 4151,
                        "end": 4152,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 4156,
                        "end": 4157,
                        "value": 6,
                        "raw": "6"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4167,
                    "end": 4187,
                    "id": {
                      "type": "Identifier",
                      "start": 4167,
                      "end": 4178,
                      "name": "SetAccessor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4181,
                      "end": 4187,
                      "left": {
                        "type": "Literal",
                        "start": 4181,
                        "end": 4182,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 4186,
                        "end": 4187,
                        "value": 7,
                        "raw": "7"
                      }
                    },
                    "computed": false
                  }
                ]
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4200,
            "end": 4622,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 4207,
              "end": 4622,
              "id": {
                "type": "Identifier",
                "start": 4212,
                "end": 4223,
                "name": "ModuleFlags",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 4234,
                  "end": 4242,
                  "id": {
                    "type": "Identifier",
                    "start": 4234,
                    "end": 4238,
                    "name": "None",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 4241,
                    "end": 4242,
                    "value": 0,
                    "raw": "0"
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 4252,
                  "end": 4264,
                  "id": {
                    "type": "Identifier",
                    "start": 4252,
                    "end": 4260,
                    "name": "Exported",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 4263,
                    "end": 4264,
                    "value": 1,
                    "raw": "1"
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 4274,
                  "end": 4290,
                  "id": {
                    "type": "Identifier",
                    "start": 4274,
                    "end": 4281,
                    "name": "Private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 4284,
                    "end": 4290,
                    "left": {
                      "type": "Literal",
                      "start": 4284,
                      "end": 4285,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 4289,
                      "end": 4290,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 4300,
                  "end": 4315,
                  "id": {
                    "type": "Identifier",
                    "start": 4300,
                    "end": 4306,
                    "name": "Public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 4309,
                    "end": 4315,
                    "left": {
                      "type": "Literal",
                      "start": 4309,
                      "end": 4310,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 4314,
                      "end": 4315,
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 4325,
                  "end": 4341,
                  "id": {
                    "type": "Identifier",
                    "start": 4325,
                    "end": 4332,
                    "name": "Ambient",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 4335,
                    "end": 4341,
                    "left": {
                      "type": "Literal",
                      "start": 4335,
                      "end": 4336,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 4340,
                      "end": 4341,
                      "value": 3,
                      "raw": "3"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 4351,
                  "end": 4366,
                  "id": {
                    "type": "Identifier",
                    "start": 4351,
                    "end": 4357,
                    "name": "Static",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 4360,
                    "end": 4366,
                    "left": {
                      "type": "Literal",
                      "start": 4360,
                      "end": 4361,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 4365,
                      "end": 4366,
                      "value": 4,
                      "raw": "4"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 4376,
                  "end": 4396,
                  "id": {
                    "type": "Identifier",
                    "start": 4376,
                    "end": 4387,
                    "name": "LocalStatic",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 4390,
                    "end": 4396,
                    "left": {
                      "type": "Literal",
                      "start": 4390,
                      "end": 4391,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 4395,
                      "end": 4396,
                      "value": 5,
                      "raw": "5"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 4406,
                  "end": 4426,
                  "id": {
                    "type": "Identifier",
                    "start": 4406,
                    "end": 4417,
                    "name": "GetAccessor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 4420,
                    "end": 4426,
                    "left": {
                      "type": "Literal",
                      "start": 4420,
                      "end": 4421,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 4425,
                      "end": 4426,
                      "value": 6,
                      "raw": "6"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 4436,
                  "end": 4456,
                  "id": {
                    "type": "Identifier",
                    "start": 4436,
                    "end": 4447,
                    "name": "SetAccessor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 4450,
                    "end": 4456,
                    "left": {
                      "type": "Literal",
                      "start": 4450,
                      "end": 4451,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 4455,
                      "end": 4456,
                      "value": 7,
                      "raw": "7"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 4466,
                  "end": 4481,
                  "id": {
                    "type": "Identifier",
                    "start": 4466,
                    "end": 4472,
                    "name": "IsEnum",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 4475,
                    "end": 4481,
                    "left": {
                      "type": "Literal",
                      "start": 4475,
                      "end": 4476,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 4480,
                      "end": 4481,
                      "value": 8,
                      "raw": "8"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 4491,
                  "end": 4520,
                  "id": {
                    "type": "Identifier",
                    "start": 4491,
                    "end": 4511,
                    "name": "ShouldEmitModuleDecl",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 4514,
                    "end": 4520,
                    "left": {
                      "type": "Literal",
                      "start": 4514,
                      "end": 4515,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 4519,
                      "end": 4520,
                      "value": 9,
                      "raw": "9"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 4530,
                  "end": 4551,
                  "id": {
                    "type": "Identifier",
                    "start": 4530,
                    "end": 4541,
                    "name": "IsWholeFile",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 4544,
                    "end": 4551,
                    "left": {
                      "type": "Literal",
                      "start": 4544,
                      "end": 4545,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 4549,
                      "end": 4551,
                      "value": 10,
                      "raw": "10"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 4561,
                  "end": 4580,
                  "id": {
                    "type": "Identifier",
                    "start": 4561,
                    "end": 4570,
                    "name": "IsDynamic",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 4573,
                    "end": 4580,
                    "left": {
                      "type": "Literal",
                      "start": 4573,
                      "end": 4574,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 4578,
                      "end": 4580,
                      "value": 11,
                      "raw": "11"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 4590,
                  "end": 4615,
                  "id": {
                    "type": "Identifier",
                    "start": 4590,
                    "end": 4605,
                    "name": "MustCaptureThis",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 4608,
                    "end": 4615,
                    "left": {
                      "type": "Literal",
                      "start": 4608,
                      "end": 4609,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 4613,
                      "end": 4615,
                      "value": 12,
                      "raw": "12"
                    }
                  },
                  "computed": false
                }
              ],
              "const": false,
              "declare": false,
              "body": {
                "type": "TSEnumBody",
                "start": 4224,
                "end": 4622,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 4234,
                    "end": 4242,
                    "id": {
                      "type": "Identifier",
                      "start": 4234,
                      "end": 4238,
                      "name": "None",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 4241,
                      "end": 4242,
                      "value": 0,
                      "raw": "0"
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4252,
                    "end": 4264,
                    "id": {
                      "type": "Identifier",
                      "start": 4252,
                      "end": 4260,
                      "name": "Exported",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 4263,
                      "end": 4264,
                      "value": 1,
                      "raw": "1"
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4274,
                    "end": 4290,
                    "id": {
                      "type": "Identifier",
                      "start": 4274,
                      "end": 4281,
                      "name": "Private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4284,
                      "end": 4290,
                      "left": {
                        "type": "Literal",
                        "start": 4284,
                        "end": 4285,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 4289,
                        "end": 4290,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4300,
                    "end": 4315,
                    "id": {
                      "type": "Identifier",
                      "start": 4300,
                      "end": 4306,
                      "name": "Public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4309,
                      "end": 4315,
                      "left": {
                        "type": "Literal",
                        "start": 4309,
                        "end": 4310,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 4314,
                        "end": 4315,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4325,
                    "end": 4341,
                    "id": {
                      "type": "Identifier",
                      "start": 4325,
                      "end": 4332,
                      "name": "Ambient",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4335,
                      "end": 4341,
                      "left": {
                        "type": "Literal",
                        "start": 4335,
                        "end": 4336,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 4340,
                        "end": 4341,
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4351,
                    "end": 4366,
                    "id": {
                      "type": "Identifier",
                      "start": 4351,
                      "end": 4357,
                      "name": "Static",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4360,
                      "end": 4366,
                      "left": {
                        "type": "Literal",
                        "start": 4360,
                        "end": 4361,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 4365,
                        "end": 4366,
                        "value": 4,
                        "raw": "4"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4376,
                    "end": 4396,
                    "id": {
                      "type": "Identifier",
                      "start": 4376,
                      "end": 4387,
                      "name": "LocalStatic",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4390,
                      "end": 4396,
                      "left": {
                        "type": "Literal",
                        "start": 4390,
                        "end": 4391,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 4395,
                        "end": 4396,
                        "value": 5,
                        "raw": "5"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4406,
                    "end": 4426,
                    "id": {
                      "type": "Identifier",
                      "start": 4406,
                      "end": 4417,
                      "name": "GetAccessor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4420,
                      "end": 4426,
                      "left": {
                        "type": "Literal",
                        "start": 4420,
                        "end": 4421,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 4425,
                        "end": 4426,
                        "value": 6,
                        "raw": "6"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4436,
                    "end": 4456,
                    "id": {
                      "type": "Identifier",
                      "start": 4436,
                      "end": 4447,
                      "name": "SetAccessor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4450,
                      "end": 4456,
                      "left": {
                        "type": "Literal",
                        "start": 4450,
                        "end": 4451,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 4455,
                        "end": 4456,
                        "value": 7,
                        "raw": "7"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4466,
                    "end": 4481,
                    "id": {
                      "type": "Identifier",
                      "start": 4466,
                      "end": 4472,
                      "name": "IsEnum",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4475,
                      "end": 4481,
                      "left": {
                        "type": "Literal",
                        "start": 4475,
                        "end": 4476,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 4480,
                        "end": 4481,
                        "value": 8,
                        "raw": "8"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4491,
                    "end": 4520,
                    "id": {
                      "type": "Identifier",
                      "start": 4491,
                      "end": 4511,
                      "name": "ShouldEmitModuleDecl",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4514,
                      "end": 4520,
                      "left": {
                        "type": "Literal",
                        "start": 4514,
                        "end": 4515,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 4519,
                        "end": 4520,
                        "value": 9,
                        "raw": "9"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4530,
                    "end": 4551,
                    "id": {
                      "type": "Identifier",
                      "start": 4530,
                      "end": 4541,
                      "name": "IsWholeFile",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4544,
                      "end": 4551,
                      "left": {
                        "type": "Literal",
                        "start": 4544,
                        "end": 4545,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 4549,
                        "end": 4551,
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4561,
                    "end": 4580,
                    "id": {
                      "type": "Identifier",
                      "start": 4561,
                      "end": 4570,
                      "name": "IsDynamic",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4573,
                      "end": 4580,
                      "left": {
                        "type": "Literal",
                        "start": 4573,
                        "end": 4574,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 4578,
                        "end": 4580,
                        "value": 11,
                        "raw": "11"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4590,
                    "end": 4615,
                    "id": {
                      "type": "Identifier",
                      "start": 4590,
                      "end": 4605,
                      "name": "MustCaptureThis",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4608,
                      "end": 4615,
                      "left": {
                        "type": "Literal",
                        "start": 4608,
                        "end": 4609,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 4613,
                        "end": 4615,
                        "value": 12,
                        "raw": "12"
                      }
                    },
                    "computed": false
                  }
                ]
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4628,
            "end": 5277,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 4635,
              "end": 5277,
              "id": {
                "type": "Identifier",
                "start": 4640,
                "end": 4651,
                "name": "SymbolFlags",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 4662,
                  "end": 4670,
                  "id": {
                    "type": "Identifier",
                    "start": 4662,
                    "end": 4666,
                    "name": "None",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 4669,
                    "end": 4670,
                    "value": 0,
                    "raw": "0"
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 4680,
                  "end": 4692,
                  "id": {
                    "type": "Identifier",
                    "start": 4680,
                    "end": 4688,
                    "name": "Exported",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 4691,
                    "end": 4692,
                    "value": 1,
                    "raw": "1"
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 4702,
                  "end": 4718,
                  "id": {
                    "type": "Identifier",
                    "start": 4702,
                    "end": 4709,
                    "name": "Private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 4712,
                    "end": 4718,
                    "left": {
                      "type": "Literal",
                      "start": 4712,
                      "end": 4713,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 4717,
                      "end": 4718,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 4728,
                  "end": 4743,
                  "id": {
                    "type": "Identifier",
                    "start": 4728,
                    "end": 4734,
                    "name": "Public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 4737,
                    "end": 4743,
                    "left": {
                      "type": "Literal",
                      "start": 4737,
                      "end": 4738,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 4742,
                      "end": 4743,
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 4753,
                  "end": 4769,
                  "id": {
                    "type": "Identifier",
                    "start": 4753,
                    "end": 4760,
                    "name": "Ambient",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 4763,
                    "end": 4769,
                    "left": {
                      "type": "Literal",
                      "start": 4763,
                      "end": 4764,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 4768,
                      "end": 4769,
                      "value": 3,
                      "raw": "3"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 4779,
                  "end": 4794,
                  "id": {
                    "type": "Identifier",
                    "start": 4779,
                    "end": 4785,
                    "name": "Static",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 4788,
                    "end": 4794,
                    "left": {
                      "type": "Literal",
                      "start": 4788,
                      "end": 4789,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 4793,
                      "end": 4794,
                      "value": 4,
                      "raw": "4"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 4804,
                  "end": 4824,
                  "id": {
                    "type": "Identifier",
                    "start": 4804,
                    "end": 4815,
                    "name": "LocalStatic",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 4818,
                    "end": 4824,
                    "left": {
                      "type": "Literal",
                      "start": 4818,
                      "end": 4819,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 4823,
                      "end": 4824,
                      "value": 5,
                      "raw": "5"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 4834,
                  "end": 4854,
                  "id": {
                    "type": "Identifier",
                    "start": 4834,
                    "end": 4845,
                    "name": "GetAccessor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 4848,
                    "end": 4854,
                    "left": {
                      "type": "Literal",
                      "start": 4848,
                      "end": 4849,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 4853,
                      "end": 4854,
                      "value": 6,
                      "raw": "6"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 4864,
                  "end": 4884,
                  "id": {
                    "type": "Identifier",
                    "start": 4864,
                    "end": 4875,
                    "name": "SetAccessor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 4878,
                    "end": 4884,
                    "left": {
                      "type": "Literal",
                      "start": 4878,
                      "end": 4879,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 4883,
                      "end": 4884,
                      "value": 7,
                      "raw": "7"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 4894,
                  "end": 4911,
                  "id": {
                    "type": "Identifier",
                    "start": 4894,
                    "end": 4902,
                    "name": "Property",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 4905,
                    "end": 4911,
                    "left": {
                      "type": "Literal",
                      "start": 4905,
                      "end": 4906,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 4910,
                      "end": 4911,
                      "value": 8,
                      "raw": "8"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 4921,
                  "end": 4938,
                  "id": {
                    "type": "Identifier",
                    "start": 4921,
                    "end": 4929,
                    "name": "Readonly",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 4932,
                    "end": 4938,
                    "left": {
                      "type": "Literal",
                      "start": 4932,
                      "end": 4933,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 4937,
                      "end": 4938,
                      "value": 9,
                      "raw": "9"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 4948,
                  "end": 4970,
                  "id": {
                    "type": "Identifier",
                    "start": 4948,
                    "end": 4960,
                    "name": "ModuleMember",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 4963,
                    "end": 4970,
                    "left": {
                      "type": "Literal",
                      "start": 4963,
                      "end": 4964,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 4968,
                      "end": 4970,
                      "value": 10,
                      "raw": "10"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 4980,
                  "end": 5005,
                  "id": {
                    "type": "Identifier",
                    "start": 4980,
                    "end": 4995,
                    "name": "InterfaceMember",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 4998,
                    "end": 5005,
                    "left": {
                      "type": "Literal",
                      "start": 4998,
                      "end": 4999,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 5003,
                      "end": 5005,
                      "value": 11,
                      "raw": "11"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 5015,
                  "end": 5036,
                  "id": {
                    "type": "Identifier",
                    "start": 5015,
                    "end": 5026,
                    "name": "ClassMember",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 5029,
                    "end": 5036,
                    "left": {
                      "type": "Literal",
                      "start": 5029,
                      "end": 5030,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 5034,
                      "end": 5036,
                      "value": 12,
                      "raw": "12"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 5046,
                  "end": 5063,
                  "id": {
                    "type": "Identifier",
                    "start": 5046,
                    "end": 5053,
                    "name": "BuiltIn",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 5056,
                    "end": 5063,
                    "left": {
                      "type": "Literal",
                      "start": 5056,
                      "end": 5057,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 5061,
                      "end": 5063,
                      "value": 13,
                      "raw": "13"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 5073,
                  "end": 5111,
                  "id": {
                    "type": "Identifier",
                    "start": 5073,
                    "end": 5101,
                    "name": "TypeSetDuringScopeAssignment",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 5104,
                    "end": 5111,
                    "left": {
                      "type": "Literal",
                      "start": 5104,
                      "end": 5105,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 5109,
                      "end": 5111,
                      "value": 14,
                      "raw": "14"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 5121,
                  "end": 5139,
                  "id": {
                    "type": "Identifier",
                    "start": 5121,
                    "end": 5129,
                    "name": "Constant",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 5132,
                    "end": 5139,
                    "left": {
                      "type": "Literal",
                      "start": 5132,
                      "end": 5133,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 5137,
                      "end": 5139,
                      "value": 15,
                      "raw": "15"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 5149,
                  "end": 5167,
                  "id": {
                    "type": "Identifier",
                    "start": 5149,
                    "end": 5157,
                    "name": "Optional",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 5160,
                    "end": 5167,
                    "left": {
                      "type": "Literal",
                      "start": 5160,
                      "end": 5161,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 5165,
                      "end": 5167,
                      "value": 16,
                      "raw": "16"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 5177,
                  "end": 5208,
                  "id": {
                    "type": "Identifier",
                    "start": 5177,
                    "end": 5198,
                    "name": "RecursivelyReferenced",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 5201,
                    "end": 5208,
                    "left": {
                      "type": "Literal",
                      "start": 5201,
                      "end": 5202,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 5206,
                      "end": 5208,
                      "value": 17,
                      "raw": "17"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 5218,
                  "end": 5233,
                  "id": {
                    "type": "Identifier",
                    "start": 5218,
                    "end": 5223,
                    "name": "Bound",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 5226,
                    "end": 5233,
                    "left": {
                      "type": "Literal",
                      "start": 5226,
                      "end": 5227,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 5231,
                      "end": 5233,
                      "value": 18,
                      "raw": "18"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 5243,
                  "end": 5270,
                  "id": {
                    "type": "Identifier",
                    "start": 5243,
                    "end": 5260,
                    "name": "CompilerGenerated",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 5263,
                    "end": 5270,
                    "left": {
                      "type": "Literal",
                      "start": 5263,
                      "end": 5264,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 5268,
                      "end": 5270,
                      "value": 19,
                      "raw": "19"
                    }
                  },
                  "computed": false
                }
              ],
              "const": false,
              "declare": false,
              "body": {
                "type": "TSEnumBody",
                "start": 4652,
                "end": 5277,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 4662,
                    "end": 4670,
                    "id": {
                      "type": "Identifier",
                      "start": 4662,
                      "end": 4666,
                      "name": "None",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 4669,
                      "end": 4670,
                      "value": 0,
                      "raw": "0"
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4680,
                    "end": 4692,
                    "id": {
                      "type": "Identifier",
                      "start": 4680,
                      "end": 4688,
                      "name": "Exported",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 4691,
                      "end": 4692,
                      "value": 1,
                      "raw": "1"
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4702,
                    "end": 4718,
                    "id": {
                      "type": "Identifier",
                      "start": 4702,
                      "end": 4709,
                      "name": "Private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4712,
                      "end": 4718,
                      "left": {
                        "type": "Literal",
                        "start": 4712,
                        "end": 4713,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 4717,
                        "end": 4718,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4728,
                    "end": 4743,
                    "id": {
                      "type": "Identifier",
                      "start": 4728,
                      "end": 4734,
                      "name": "Public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4737,
                      "end": 4743,
                      "left": {
                        "type": "Literal",
                        "start": 4737,
                        "end": 4738,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 4742,
                        "end": 4743,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4753,
                    "end": 4769,
                    "id": {
                      "type": "Identifier",
                      "start": 4753,
                      "end": 4760,
                      "name": "Ambient",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4763,
                      "end": 4769,
                      "left": {
                        "type": "Literal",
                        "start": 4763,
                        "end": 4764,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 4768,
                        "end": 4769,
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4779,
                    "end": 4794,
                    "id": {
                      "type": "Identifier",
                      "start": 4779,
                      "end": 4785,
                      "name": "Static",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4788,
                      "end": 4794,
                      "left": {
                        "type": "Literal",
                        "start": 4788,
                        "end": 4789,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 4793,
                        "end": 4794,
                        "value": 4,
                        "raw": "4"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4804,
                    "end": 4824,
                    "id": {
                      "type": "Identifier",
                      "start": 4804,
                      "end": 4815,
                      "name": "LocalStatic",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4818,
                      "end": 4824,
                      "left": {
                        "type": "Literal",
                        "start": 4818,
                        "end": 4819,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 4823,
                        "end": 4824,
                        "value": 5,
                        "raw": "5"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4834,
                    "end": 4854,
                    "id": {
                      "type": "Identifier",
                      "start": 4834,
                      "end": 4845,
                      "name": "GetAccessor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4848,
                      "end": 4854,
                      "left": {
                        "type": "Literal",
                        "start": 4848,
                        "end": 4849,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 4853,
                        "end": 4854,
                        "value": 6,
                        "raw": "6"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4864,
                    "end": 4884,
                    "id": {
                      "type": "Identifier",
                      "start": 4864,
                      "end": 4875,
                      "name": "SetAccessor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4878,
                      "end": 4884,
                      "left": {
                        "type": "Literal",
                        "start": 4878,
                        "end": 4879,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 4883,
                        "end": 4884,
                        "value": 7,
                        "raw": "7"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4894,
                    "end": 4911,
                    "id": {
                      "type": "Identifier",
                      "start": 4894,
                      "end": 4902,
                      "name": "Property",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4905,
                      "end": 4911,
                      "left": {
                        "type": "Literal",
                        "start": 4905,
                        "end": 4906,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 4910,
                        "end": 4911,
                        "value": 8,
                        "raw": "8"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4921,
                    "end": 4938,
                    "id": {
                      "type": "Identifier",
                      "start": 4921,
                      "end": 4929,
                      "name": "Readonly",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4932,
                      "end": 4938,
                      "left": {
                        "type": "Literal",
                        "start": 4932,
                        "end": 4933,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 4937,
                        "end": 4938,
                        "value": 9,
                        "raw": "9"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4948,
                    "end": 4970,
                    "id": {
                      "type": "Identifier",
                      "start": 4948,
                      "end": 4960,
                      "name": "ModuleMember",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4963,
                      "end": 4970,
                      "left": {
                        "type": "Literal",
                        "start": 4963,
                        "end": 4964,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 4968,
                        "end": 4970,
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 4980,
                    "end": 5005,
                    "id": {
                      "type": "Identifier",
                      "start": 4980,
                      "end": 4995,
                      "name": "InterfaceMember",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 4998,
                      "end": 5005,
                      "left": {
                        "type": "Literal",
                        "start": 4998,
                        "end": 4999,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 5003,
                        "end": 5005,
                        "value": 11,
                        "raw": "11"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5015,
                    "end": 5036,
                    "id": {
                      "type": "Identifier",
                      "start": 5015,
                      "end": 5026,
                      "name": "ClassMember",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5029,
                      "end": 5036,
                      "left": {
                        "type": "Literal",
                        "start": 5029,
                        "end": 5030,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 5034,
                        "end": 5036,
                        "value": 12,
                        "raw": "12"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5046,
                    "end": 5063,
                    "id": {
                      "type": "Identifier",
                      "start": 5046,
                      "end": 5053,
                      "name": "BuiltIn",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5056,
                      "end": 5063,
                      "left": {
                        "type": "Literal",
                        "start": 5056,
                        "end": 5057,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 5061,
                        "end": 5063,
                        "value": 13,
                        "raw": "13"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5073,
                    "end": 5111,
                    "id": {
                      "type": "Identifier",
                      "start": 5073,
                      "end": 5101,
                      "name": "TypeSetDuringScopeAssignment",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5104,
                      "end": 5111,
                      "left": {
                        "type": "Literal",
                        "start": 5104,
                        "end": 5105,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 5109,
                        "end": 5111,
                        "value": 14,
                        "raw": "14"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5121,
                    "end": 5139,
                    "id": {
                      "type": "Identifier",
                      "start": 5121,
                      "end": 5129,
                      "name": "Constant",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5132,
                      "end": 5139,
                      "left": {
                        "type": "Literal",
                        "start": 5132,
                        "end": 5133,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 5137,
                        "end": 5139,
                        "value": 15,
                        "raw": "15"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5149,
                    "end": 5167,
                    "id": {
                      "type": "Identifier",
                      "start": 5149,
                      "end": 5157,
                      "name": "Optional",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5160,
                      "end": 5167,
                      "left": {
                        "type": "Literal",
                        "start": 5160,
                        "end": 5161,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 5165,
                        "end": 5167,
                        "value": 16,
                        "raw": "16"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5177,
                    "end": 5208,
                    "id": {
                      "type": "Identifier",
                      "start": 5177,
                      "end": 5198,
                      "name": "RecursivelyReferenced",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5201,
                      "end": 5208,
                      "left": {
                        "type": "Literal",
                        "start": 5201,
                        "end": 5202,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 5206,
                        "end": 5208,
                        "value": 17,
                        "raw": "17"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5218,
                    "end": 5233,
                    "id": {
                      "type": "Identifier",
                      "start": 5218,
                      "end": 5223,
                      "name": "Bound",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5226,
                      "end": 5233,
                      "left": {
                        "type": "Literal",
                        "start": 5226,
                        "end": 5227,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 5231,
                        "end": 5233,
                        "value": 18,
                        "raw": "18"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5243,
                    "end": 5270,
                    "id": {
                      "type": "Identifier",
                      "start": 5243,
                      "end": 5260,
                      "name": "CompilerGenerated",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5263,
                      "end": 5270,
                      "left": {
                        "type": "Literal",
                        "start": 5263,
                        "end": 5264,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 5268,
                        "end": 5270,
                        "value": 19,
                        "raw": "19"
                      }
                    },
                    "computed": false
                  }
                ]
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 5283,
            "end": 5885,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 5290,
              "end": 5885,
              "id": {
                "type": "Identifier",
                "start": 5295,
                "end": 5303,
                "name": "VarFlags",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 5314,
                  "end": 5322,
                  "id": {
                    "type": "Identifier",
                    "start": 5314,
                    "end": 5318,
                    "name": "None",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 5321,
                    "end": 5322,
                    "value": 0,
                    "raw": "0"
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 5332,
                  "end": 5344,
                  "id": {
                    "type": "Identifier",
                    "start": 5332,
                    "end": 5340,
                    "name": "Exported",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 5343,
                    "end": 5344,
                    "value": 1,
                    "raw": "1"
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 5354,
                  "end": 5370,
                  "id": {
                    "type": "Identifier",
                    "start": 5354,
                    "end": 5361,
                    "name": "Private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 5364,
                    "end": 5370,
                    "left": {
                      "type": "Literal",
                      "start": 5364,
                      "end": 5365,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 5369,
                      "end": 5370,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 5380,
                  "end": 5395,
                  "id": {
                    "type": "Identifier",
                    "start": 5380,
                    "end": 5386,
                    "name": "Public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 5389,
                    "end": 5395,
                    "left": {
                      "type": "Literal",
                      "start": 5389,
                      "end": 5390,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 5394,
                      "end": 5395,
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 5405,
                  "end": 5421,
                  "id": {
                    "type": "Identifier",
                    "start": 5405,
                    "end": 5412,
                    "name": "Ambient",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 5415,
                    "end": 5421,
                    "left": {
                      "type": "Literal",
                      "start": 5415,
                      "end": 5416,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 5420,
                      "end": 5421,
                      "value": 3,
                      "raw": "3"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 5431,
                  "end": 5446,
                  "id": {
                    "type": "Identifier",
                    "start": 5431,
                    "end": 5437,
                    "name": "Static",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 5440,
                    "end": 5446,
                    "left": {
                      "type": "Literal",
                      "start": 5440,
                      "end": 5441,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 5445,
                      "end": 5446,
                      "value": 4,
                      "raw": "4"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 5456,
                  "end": 5476,
                  "id": {
                    "type": "Identifier",
                    "start": 5456,
                    "end": 5467,
                    "name": "LocalStatic",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 5470,
                    "end": 5476,
                    "left": {
                      "type": "Literal",
                      "start": 5470,
                      "end": 5471,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 5475,
                      "end": 5476,
                      "value": 5,
                      "raw": "5"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 5486,
                  "end": 5506,
                  "id": {
                    "type": "Identifier",
                    "start": 5486,
                    "end": 5497,
                    "name": "GetAccessor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 5500,
                    "end": 5506,
                    "left": {
                      "type": "Literal",
                      "start": 5500,
                      "end": 5501,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 5505,
                      "end": 5506,
                      "value": 6,
                      "raw": "6"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 5516,
                  "end": 5536,
                  "id": {
                    "type": "Identifier",
                    "start": 5516,
                    "end": 5527,
                    "name": "SetAccessor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 5530,
                    "end": 5536,
                    "left": {
                      "type": "Literal",
                      "start": 5530,
                      "end": 5531,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 5535,
                      "end": 5536,
                      "value": 7,
                      "raw": "7"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 5546,
                  "end": 5563,
                  "id": {
                    "type": "Identifier",
                    "start": 5546,
                    "end": 5554,
                    "name": "AutoInit",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 5557,
                    "end": 5563,
                    "left": {
                      "type": "Literal",
                      "start": 5557,
                      "end": 5558,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 5562,
                      "end": 5563,
                      "value": 8,
                      "raw": "8"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 5573,
                  "end": 5590,
                  "id": {
                    "type": "Identifier",
                    "start": 5573,
                    "end": 5581,
                    "name": "Property",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 5584,
                    "end": 5590,
                    "left": {
                      "type": "Literal",
                      "start": 5584,
                      "end": 5585,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 5589,
                      "end": 5590,
                      "value": 9,
                      "raw": "9"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 5600,
                  "end": 5618,
                  "id": {
                    "type": "Identifier",
                    "start": 5600,
                    "end": 5608,
                    "name": "Readonly",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 5611,
                    "end": 5618,
                    "left": {
                      "type": "Literal",
                      "start": 5611,
                      "end": 5612,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 5616,
                      "end": 5618,
                      "value": 10,
                      "raw": "10"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 5628,
                  "end": 5643,
                  "id": {
                    "type": "Identifier",
                    "start": 5628,
                    "end": 5633,
                    "name": "Class",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 5636,
                    "end": 5643,
                    "left": {
                      "type": "Literal",
                      "start": 5636,
                      "end": 5637,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 5641,
                      "end": 5643,
                      "value": 11,
                      "raw": "11"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 5653,
                  "end": 5676,
                  "id": {
                    "type": "Identifier",
                    "start": 5653,
                    "end": 5666,
                    "name": "ClassProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 5669,
                    "end": 5676,
                    "left": {
                      "type": "Literal",
                      "start": 5669,
                      "end": 5670,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 5674,
                      "end": 5676,
                      "value": 12,
                      "raw": "12"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 5686,
                  "end": 5713,
                  "id": {
                    "type": "Identifier",
                    "start": 5686,
                    "end": 5703,
                    "name": "ClassBodyProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 5706,
                    "end": 5713,
                    "left": {
                      "type": "Literal",
                      "start": 5706,
                      "end": 5707,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 5711,
                      "end": 5713,
                      "value": 13,
                      "raw": "13"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 5723,
                  "end": 5757,
                  "id": {
                    "type": "Identifier",
                    "start": 5723,
                    "end": 5747,
                    "name": "ClassConstructorProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 5750,
                    "end": 5757,
                    "left": {
                      "type": "Literal",
                      "start": 5750,
                      "end": 5751,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 5755,
                      "end": 5757,
                      "value": 14,
                      "raw": "14"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 5767,
                  "end": 5815,
                  "id": {
                    "type": "Identifier",
                    "start": 5767,
                    "end": 5805,
                    "name": "ClassSuperMustBeFirstCallInConstructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 5808,
                    "end": 5815,
                    "left": {
                      "type": "Literal",
                      "start": 5808,
                      "end": 5809,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 5813,
                      "end": 5815,
                      "value": 15,
                      "raw": "15"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 5825,
                  "end": 5843,
                  "id": {
                    "type": "Identifier",
                    "start": 5825,
                    "end": 5833,
                    "name": "Constant",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 5836,
                    "end": 5843,
                    "left": {
                      "type": "Literal",
                      "start": 5836,
                      "end": 5837,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 5841,
                      "end": 5843,
                      "value": 16,
                      "raw": "16"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 5853,
                  "end": 5878,
                  "id": {
                    "type": "Identifier",
                    "start": 5853,
                    "end": 5868,
                    "name": "MustCaptureThis",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 5871,
                    "end": 5878,
                    "left": {
                      "type": "Literal",
                      "start": 5871,
                      "end": 5872,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 5876,
                      "end": 5878,
                      "value": 17,
                      "raw": "17"
                    }
                  },
                  "computed": false
                }
              ],
              "const": false,
              "declare": false,
              "body": {
                "type": "TSEnumBody",
                "start": 5304,
                "end": 5885,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 5314,
                    "end": 5322,
                    "id": {
                      "type": "Identifier",
                      "start": 5314,
                      "end": 5318,
                      "name": "None",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 5321,
                      "end": 5322,
                      "value": 0,
                      "raw": "0"
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5332,
                    "end": 5344,
                    "id": {
                      "type": "Identifier",
                      "start": 5332,
                      "end": 5340,
                      "name": "Exported",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 5343,
                      "end": 5344,
                      "value": 1,
                      "raw": "1"
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5354,
                    "end": 5370,
                    "id": {
                      "type": "Identifier",
                      "start": 5354,
                      "end": 5361,
                      "name": "Private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5364,
                      "end": 5370,
                      "left": {
                        "type": "Literal",
                        "start": 5364,
                        "end": 5365,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 5369,
                        "end": 5370,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5380,
                    "end": 5395,
                    "id": {
                      "type": "Identifier",
                      "start": 5380,
                      "end": 5386,
                      "name": "Public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5389,
                      "end": 5395,
                      "left": {
                        "type": "Literal",
                        "start": 5389,
                        "end": 5390,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 5394,
                        "end": 5395,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5405,
                    "end": 5421,
                    "id": {
                      "type": "Identifier",
                      "start": 5405,
                      "end": 5412,
                      "name": "Ambient",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5415,
                      "end": 5421,
                      "left": {
                        "type": "Literal",
                        "start": 5415,
                        "end": 5416,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 5420,
                        "end": 5421,
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5431,
                    "end": 5446,
                    "id": {
                      "type": "Identifier",
                      "start": 5431,
                      "end": 5437,
                      "name": "Static",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5440,
                      "end": 5446,
                      "left": {
                        "type": "Literal",
                        "start": 5440,
                        "end": 5441,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 5445,
                        "end": 5446,
                        "value": 4,
                        "raw": "4"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5456,
                    "end": 5476,
                    "id": {
                      "type": "Identifier",
                      "start": 5456,
                      "end": 5467,
                      "name": "LocalStatic",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5470,
                      "end": 5476,
                      "left": {
                        "type": "Literal",
                        "start": 5470,
                        "end": 5471,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 5475,
                        "end": 5476,
                        "value": 5,
                        "raw": "5"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5486,
                    "end": 5506,
                    "id": {
                      "type": "Identifier",
                      "start": 5486,
                      "end": 5497,
                      "name": "GetAccessor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5500,
                      "end": 5506,
                      "left": {
                        "type": "Literal",
                        "start": 5500,
                        "end": 5501,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 5505,
                        "end": 5506,
                        "value": 6,
                        "raw": "6"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5516,
                    "end": 5536,
                    "id": {
                      "type": "Identifier",
                      "start": 5516,
                      "end": 5527,
                      "name": "SetAccessor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5530,
                      "end": 5536,
                      "left": {
                        "type": "Literal",
                        "start": 5530,
                        "end": 5531,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 5535,
                        "end": 5536,
                        "value": 7,
                        "raw": "7"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5546,
                    "end": 5563,
                    "id": {
                      "type": "Identifier",
                      "start": 5546,
                      "end": 5554,
                      "name": "AutoInit",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5557,
                      "end": 5563,
                      "left": {
                        "type": "Literal",
                        "start": 5557,
                        "end": 5558,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 5562,
                        "end": 5563,
                        "value": 8,
                        "raw": "8"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5573,
                    "end": 5590,
                    "id": {
                      "type": "Identifier",
                      "start": 5573,
                      "end": 5581,
                      "name": "Property",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5584,
                      "end": 5590,
                      "left": {
                        "type": "Literal",
                        "start": 5584,
                        "end": 5585,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 5589,
                        "end": 5590,
                        "value": 9,
                        "raw": "9"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5600,
                    "end": 5618,
                    "id": {
                      "type": "Identifier",
                      "start": 5600,
                      "end": 5608,
                      "name": "Readonly",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5611,
                      "end": 5618,
                      "left": {
                        "type": "Literal",
                        "start": 5611,
                        "end": 5612,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 5616,
                        "end": 5618,
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5628,
                    "end": 5643,
                    "id": {
                      "type": "Identifier",
                      "start": 5628,
                      "end": 5633,
                      "name": "Class",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5636,
                      "end": 5643,
                      "left": {
                        "type": "Literal",
                        "start": 5636,
                        "end": 5637,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 5641,
                        "end": 5643,
                        "value": 11,
                        "raw": "11"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5653,
                    "end": 5676,
                    "id": {
                      "type": "Identifier",
                      "start": 5653,
                      "end": 5666,
                      "name": "ClassProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5669,
                      "end": 5676,
                      "left": {
                        "type": "Literal",
                        "start": 5669,
                        "end": 5670,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 5674,
                        "end": 5676,
                        "value": 12,
                        "raw": "12"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5686,
                    "end": 5713,
                    "id": {
                      "type": "Identifier",
                      "start": 5686,
                      "end": 5703,
                      "name": "ClassBodyProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5706,
                      "end": 5713,
                      "left": {
                        "type": "Literal",
                        "start": 5706,
                        "end": 5707,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 5711,
                        "end": 5713,
                        "value": 13,
                        "raw": "13"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5723,
                    "end": 5757,
                    "id": {
                      "type": "Identifier",
                      "start": 5723,
                      "end": 5747,
                      "name": "ClassConstructorProperty",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5750,
                      "end": 5757,
                      "left": {
                        "type": "Literal",
                        "start": 5750,
                        "end": 5751,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 5755,
                        "end": 5757,
                        "value": 14,
                        "raw": "14"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5767,
                    "end": 5815,
                    "id": {
                      "type": "Identifier",
                      "start": 5767,
                      "end": 5805,
                      "name": "ClassSuperMustBeFirstCallInConstructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5808,
                      "end": 5815,
                      "left": {
                        "type": "Literal",
                        "start": 5808,
                        "end": 5809,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 5813,
                        "end": 5815,
                        "value": 15,
                        "raw": "15"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5825,
                    "end": 5843,
                    "id": {
                      "type": "Identifier",
                      "start": 5825,
                      "end": 5833,
                      "name": "Constant",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5836,
                      "end": 5843,
                      "left": {
                        "type": "Literal",
                        "start": 5836,
                        "end": 5837,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 5841,
                        "end": 5843,
                        "value": 16,
                        "raw": "16"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5853,
                    "end": 5878,
                    "id": {
                      "type": "Identifier",
                      "start": 5853,
                      "end": 5868,
                      "name": "MustCaptureThis",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5871,
                      "end": 5878,
                      "left": {
                        "type": "Literal",
                        "start": 5871,
                        "end": 5872,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 5876,
                        "end": 5878,
                        "value": 17,
                        "raw": "17"
                      }
                    },
                    "computed": false
                  }
                ]
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 5891,
            "end": 6563,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 5898,
              "end": 6563,
              "id": {
                "type": "Identifier",
                "start": 5903,
                "end": 5911,
                "name": "FncFlags",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 5922,
                  "end": 5930,
                  "id": {
                    "type": "Identifier",
                    "start": 5922,
                    "end": 5926,
                    "name": "None",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 5929,
                    "end": 5930,
                    "value": 0,
                    "raw": "0"
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 5940,
                  "end": 5952,
                  "id": {
                    "type": "Identifier",
                    "start": 5940,
                    "end": 5948,
                    "name": "Exported",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 5951,
                    "end": 5952,
                    "value": 1,
                    "raw": "1"
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 5962,
                  "end": 5978,
                  "id": {
                    "type": "Identifier",
                    "start": 5962,
                    "end": 5969,
                    "name": "Private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 5972,
                    "end": 5978,
                    "left": {
                      "type": "Literal",
                      "start": 5972,
                      "end": 5973,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 5977,
                      "end": 5978,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 5988,
                  "end": 6003,
                  "id": {
                    "type": "Identifier",
                    "start": 5988,
                    "end": 5994,
                    "name": "Public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 5997,
                    "end": 6003,
                    "left": {
                      "type": "Literal",
                      "start": 5997,
                      "end": 5998,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 6002,
                      "end": 6003,
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 6013,
                  "end": 6029,
                  "id": {
                    "type": "Identifier",
                    "start": 6013,
                    "end": 6020,
                    "name": "Ambient",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 6023,
                    "end": 6029,
                    "left": {
                      "type": "Literal",
                      "start": 6023,
                      "end": 6024,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 6028,
                      "end": 6029,
                      "value": 3,
                      "raw": "3"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 6039,
                  "end": 6054,
                  "id": {
                    "type": "Identifier",
                    "start": 6039,
                    "end": 6045,
                    "name": "Static",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 6048,
                    "end": 6054,
                    "left": {
                      "type": "Literal",
                      "start": 6048,
                      "end": 6049,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 6053,
                      "end": 6054,
                      "value": 4,
                      "raw": "4"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 6064,
                  "end": 6084,
                  "id": {
                    "type": "Identifier",
                    "start": 6064,
                    "end": 6075,
                    "name": "LocalStatic",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 6078,
                    "end": 6084,
                    "left": {
                      "type": "Literal",
                      "start": 6078,
                      "end": 6079,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 6083,
                      "end": 6084,
                      "value": 5,
                      "raw": "5"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 6094,
                  "end": 6114,
                  "id": {
                    "type": "Identifier",
                    "start": 6094,
                    "end": 6105,
                    "name": "GetAccessor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 6108,
                    "end": 6114,
                    "left": {
                      "type": "Literal",
                      "start": 6108,
                      "end": 6109,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 6113,
                      "end": 6114,
                      "value": 6,
                      "raw": "6"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 6124,
                  "end": 6144,
                  "id": {
                    "type": "Identifier",
                    "start": 6124,
                    "end": 6135,
                    "name": "SetAccessor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 6138,
                    "end": 6144,
                    "left": {
                      "type": "Literal",
                      "start": 6138,
                      "end": 6139,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 6143,
                      "end": 6144,
                      "value": 7,
                      "raw": "7"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 6154,
                  "end": 6173,
                  "id": {
                    "type": "Identifier",
                    "start": 6154,
                    "end": 6164,
                    "name": "Definition",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 6167,
                    "end": 6173,
                    "left": {
                      "type": "Literal",
                      "start": 6167,
                      "end": 6168,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 6172,
                      "end": 6173,
                      "value": 8,
                      "raw": "8"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 6183,
                  "end": 6201,
                  "id": {
                    "type": "Identifier",
                    "start": 6183,
                    "end": 6192,
                    "name": "Signature",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 6195,
                    "end": 6201,
                    "left": {
                      "type": "Literal",
                      "start": 6195,
                      "end": 6196,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 6200,
                      "end": 6201,
                      "value": 9,
                      "raw": "9"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 6211,
                  "end": 6227,
                  "id": {
                    "type": "Identifier",
                    "start": 6211,
                    "end": 6217,
                    "name": "Method",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 6220,
                    "end": 6227,
                    "left": {
                      "type": "Literal",
                      "start": 6220,
                      "end": 6221,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 6225,
                      "end": 6227,
                      "value": 10,
                      "raw": "10"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 6237,
                  "end": 6266,
                  "id": {
                    "type": "Identifier",
                    "start": 6237,
                    "end": 6256,
                    "name": "HasReturnExpression",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 6259,
                    "end": 6266,
                    "left": {
                      "type": "Literal",
                      "start": 6259,
                      "end": 6260,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 6264,
                      "end": 6266,
                      "value": 11,
                      "raw": "11"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 6276,
                  "end": 6296,
                  "id": {
                    "type": "Identifier",
                    "start": 6276,
                    "end": 6286,
                    "name": "CallMember",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 6289,
                    "end": 6296,
                    "left": {
                      "type": "Literal",
                      "start": 6289,
                      "end": 6290,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 6294,
                      "end": 6296,
                      "value": 12,
                      "raw": "12"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 6306,
                  "end": 6331,
                  "id": {
                    "type": "Identifier",
                    "start": 6306,
                    "end": 6321,
                    "name": "ConstructMember",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 6324,
                    "end": 6331,
                    "left": {
                      "type": "Literal",
                      "start": 6324,
                      "end": 6325,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 6329,
                      "end": 6331,
                      "value": 13,
                      "raw": "13"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 6341,
                  "end": 6367,
                  "id": {
                    "type": "Identifier",
                    "start": 6341,
                    "end": 6357,
                    "name": "HasSelfReference",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 6360,
                    "end": 6367,
                    "left": {
                      "type": "Literal",
                      "start": 6360,
                      "end": 6361,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 6365,
                      "end": 6367,
                      "value": 14,
                      "raw": "14"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 6377,
                  "end": 6405,
                  "id": {
                    "type": "Identifier",
                    "start": 6377,
                    "end": 6395,
                    "name": "IsFatArrowFunction",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 6398,
                    "end": 6405,
                    "left": {
                      "type": "Literal",
                      "start": 6398,
                      "end": 6399,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 6403,
                      "end": 6405,
                      "value": 15,
                      "raw": "15"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 6415,
                  "end": 6438,
                  "id": {
                    "type": "Identifier",
                    "start": 6415,
                    "end": 6428,
                    "name": "IndexerMember",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 6431,
                    "end": 6438,
                    "left": {
                      "type": "Literal",
                      "start": 6431,
                      "end": 6432,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 6436,
                      "end": 6438,
                      "value": 16,
                      "raw": "16"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 6448,
                  "end": 6478,
                  "id": {
                    "type": "Identifier",
                    "start": 6448,
                    "end": 6468,
                    "name": "IsFunctionExpression",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 6471,
                    "end": 6478,
                    "left": {
                      "type": "Literal",
                      "start": 6471,
                      "end": 6472,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 6476,
                      "end": 6478,
                      "value": 17,
                      "raw": "17"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 6488,
                  "end": 6509,
                  "id": {
                    "type": "Identifier",
                    "start": 6488,
                    "end": 6499,
                    "name": "ClassMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 6502,
                    "end": 6509,
                    "left": {
                      "type": "Literal",
                      "start": 6502,
                      "end": 6503,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 6507,
                      "end": 6509,
                      "value": 18,
                      "raw": "18"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 6519,
                  "end": 6556,
                  "id": {
                    "type": "Identifier",
                    "start": 6519,
                    "end": 6546,
                    "name": "ClassPropertyMethodExported",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 6549,
                    "end": 6556,
                    "left": {
                      "type": "Literal",
                      "start": 6549,
                      "end": 6550,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 6554,
                      "end": 6556,
                      "value": 19,
                      "raw": "19"
                    }
                  },
                  "computed": false
                }
              ],
              "const": false,
              "declare": false,
              "body": {
                "type": "TSEnumBody",
                "start": 5912,
                "end": 6563,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 5922,
                    "end": 5930,
                    "id": {
                      "type": "Identifier",
                      "start": 5922,
                      "end": 5926,
                      "name": "None",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 5929,
                      "end": 5930,
                      "value": 0,
                      "raw": "0"
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5940,
                    "end": 5952,
                    "id": {
                      "type": "Identifier",
                      "start": 5940,
                      "end": 5948,
                      "name": "Exported",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 5951,
                      "end": 5952,
                      "value": 1,
                      "raw": "1"
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5962,
                    "end": 5978,
                    "id": {
                      "type": "Identifier",
                      "start": 5962,
                      "end": 5969,
                      "name": "Private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5972,
                      "end": 5978,
                      "left": {
                        "type": "Literal",
                        "start": 5972,
                        "end": 5973,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 5977,
                        "end": 5978,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 5988,
                    "end": 6003,
                    "id": {
                      "type": "Identifier",
                      "start": 5988,
                      "end": 5994,
                      "name": "Public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 5997,
                      "end": 6003,
                      "left": {
                        "type": "Literal",
                        "start": 5997,
                        "end": 5998,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 6002,
                        "end": 6003,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6013,
                    "end": 6029,
                    "id": {
                      "type": "Identifier",
                      "start": 6013,
                      "end": 6020,
                      "name": "Ambient",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6023,
                      "end": 6029,
                      "left": {
                        "type": "Literal",
                        "start": 6023,
                        "end": 6024,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 6028,
                        "end": 6029,
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6039,
                    "end": 6054,
                    "id": {
                      "type": "Identifier",
                      "start": 6039,
                      "end": 6045,
                      "name": "Static",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6048,
                      "end": 6054,
                      "left": {
                        "type": "Literal",
                        "start": 6048,
                        "end": 6049,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 6053,
                        "end": 6054,
                        "value": 4,
                        "raw": "4"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6064,
                    "end": 6084,
                    "id": {
                      "type": "Identifier",
                      "start": 6064,
                      "end": 6075,
                      "name": "LocalStatic",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6078,
                      "end": 6084,
                      "left": {
                        "type": "Literal",
                        "start": 6078,
                        "end": 6079,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 6083,
                        "end": 6084,
                        "value": 5,
                        "raw": "5"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6094,
                    "end": 6114,
                    "id": {
                      "type": "Identifier",
                      "start": 6094,
                      "end": 6105,
                      "name": "GetAccessor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6108,
                      "end": 6114,
                      "left": {
                        "type": "Literal",
                        "start": 6108,
                        "end": 6109,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 6113,
                        "end": 6114,
                        "value": 6,
                        "raw": "6"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6124,
                    "end": 6144,
                    "id": {
                      "type": "Identifier",
                      "start": 6124,
                      "end": 6135,
                      "name": "SetAccessor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6138,
                      "end": 6144,
                      "left": {
                        "type": "Literal",
                        "start": 6138,
                        "end": 6139,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 6143,
                        "end": 6144,
                        "value": 7,
                        "raw": "7"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6154,
                    "end": 6173,
                    "id": {
                      "type": "Identifier",
                      "start": 6154,
                      "end": 6164,
                      "name": "Definition",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6167,
                      "end": 6173,
                      "left": {
                        "type": "Literal",
                        "start": 6167,
                        "end": 6168,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 6172,
                        "end": 6173,
                        "value": 8,
                        "raw": "8"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6183,
                    "end": 6201,
                    "id": {
                      "type": "Identifier",
                      "start": 6183,
                      "end": 6192,
                      "name": "Signature",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6195,
                      "end": 6201,
                      "left": {
                        "type": "Literal",
                        "start": 6195,
                        "end": 6196,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 6200,
                        "end": 6201,
                        "value": 9,
                        "raw": "9"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6211,
                    "end": 6227,
                    "id": {
                      "type": "Identifier",
                      "start": 6211,
                      "end": 6217,
                      "name": "Method",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6220,
                      "end": 6227,
                      "left": {
                        "type": "Literal",
                        "start": 6220,
                        "end": 6221,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 6225,
                        "end": 6227,
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6237,
                    "end": 6266,
                    "id": {
                      "type": "Identifier",
                      "start": 6237,
                      "end": 6256,
                      "name": "HasReturnExpression",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6259,
                      "end": 6266,
                      "left": {
                        "type": "Literal",
                        "start": 6259,
                        "end": 6260,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 6264,
                        "end": 6266,
                        "value": 11,
                        "raw": "11"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6276,
                    "end": 6296,
                    "id": {
                      "type": "Identifier",
                      "start": 6276,
                      "end": 6286,
                      "name": "CallMember",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6289,
                      "end": 6296,
                      "left": {
                        "type": "Literal",
                        "start": 6289,
                        "end": 6290,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 6294,
                        "end": 6296,
                        "value": 12,
                        "raw": "12"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6306,
                    "end": 6331,
                    "id": {
                      "type": "Identifier",
                      "start": 6306,
                      "end": 6321,
                      "name": "ConstructMember",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6324,
                      "end": 6331,
                      "left": {
                        "type": "Literal",
                        "start": 6324,
                        "end": 6325,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 6329,
                        "end": 6331,
                        "value": 13,
                        "raw": "13"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6341,
                    "end": 6367,
                    "id": {
                      "type": "Identifier",
                      "start": 6341,
                      "end": 6357,
                      "name": "HasSelfReference",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6360,
                      "end": 6367,
                      "left": {
                        "type": "Literal",
                        "start": 6360,
                        "end": 6361,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 6365,
                        "end": 6367,
                        "value": 14,
                        "raw": "14"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6377,
                    "end": 6405,
                    "id": {
                      "type": "Identifier",
                      "start": 6377,
                      "end": 6395,
                      "name": "IsFatArrowFunction",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6398,
                      "end": 6405,
                      "left": {
                        "type": "Literal",
                        "start": 6398,
                        "end": 6399,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 6403,
                        "end": 6405,
                        "value": 15,
                        "raw": "15"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6415,
                    "end": 6438,
                    "id": {
                      "type": "Identifier",
                      "start": 6415,
                      "end": 6428,
                      "name": "IndexerMember",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6431,
                      "end": 6438,
                      "left": {
                        "type": "Literal",
                        "start": 6431,
                        "end": 6432,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 6436,
                        "end": 6438,
                        "value": 16,
                        "raw": "16"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6448,
                    "end": 6478,
                    "id": {
                      "type": "Identifier",
                      "start": 6448,
                      "end": 6468,
                      "name": "IsFunctionExpression",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6471,
                      "end": 6478,
                      "left": {
                        "type": "Literal",
                        "start": 6471,
                        "end": 6472,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 6476,
                        "end": 6478,
                        "value": 17,
                        "raw": "17"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6488,
                    "end": 6509,
                    "id": {
                      "type": "Identifier",
                      "start": 6488,
                      "end": 6499,
                      "name": "ClassMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6502,
                      "end": 6509,
                      "left": {
                        "type": "Literal",
                        "start": 6502,
                        "end": 6503,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 6507,
                        "end": 6509,
                        "value": 18,
                        "raw": "18"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6519,
                    "end": 6556,
                    "id": {
                      "type": "Identifier",
                      "start": 6519,
                      "end": 6546,
                      "name": "ClassPropertyMethodExported",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6549,
                      "end": 6556,
                      "left": {
                        "type": "Literal",
                        "start": 6549,
                        "end": 6550,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 6554,
                        "end": 6556,
                        "value": 19,
                        "raw": "19"
                      }
                    },
                    "computed": false
                  }
                ]
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 6569,
            "end": 6712,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 6576,
              "end": 6712,
              "id": {
                "type": "Identifier",
                "start": 6581,
                "end": 6595,
                "name": "SignatureFlags",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 6606,
                  "end": 6614,
                  "id": {
                    "type": "Identifier",
                    "start": 6606,
                    "end": 6610,
                    "name": "None",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 6613,
                    "end": 6614,
                    "value": 0,
                    "raw": "0"
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 6624,
                  "end": 6637,
                  "id": {
                    "type": "Identifier",
                    "start": 6624,
                    "end": 6633,
                    "name": "IsIndexer",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 6636,
                    "end": 6637,
                    "value": 1,
                    "raw": "1"
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 6647,
                  "end": 6671,
                  "id": {
                    "type": "Identifier",
                    "start": 6647,
                    "end": 6662,
                    "name": "IsStringIndexer",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 6665,
                    "end": 6671,
                    "left": {
                      "type": "Literal",
                      "start": 6665,
                      "end": 6666,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 6670,
                      "end": 6671,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 6681,
                  "end": 6705,
                  "id": {
                    "type": "Identifier",
                    "start": 6681,
                    "end": 6696,
                    "name": "IsNumberIndexer",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 6699,
                    "end": 6705,
                    "left": {
                      "type": "Literal",
                      "start": 6699,
                      "end": 6700,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 6704,
                      "end": 6705,
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "computed": false
                }
              ],
              "const": false,
              "declare": false,
              "body": {
                "type": "TSEnumBody",
                "start": 6596,
                "end": 6712,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 6606,
                    "end": 6614,
                    "id": {
                      "type": "Identifier",
                      "start": 6606,
                      "end": 6610,
                      "name": "None",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 6613,
                      "end": 6614,
                      "value": 0,
                      "raw": "0"
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6624,
                    "end": 6637,
                    "id": {
                      "type": "Identifier",
                      "start": 6624,
                      "end": 6633,
                      "name": "IsIndexer",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 6636,
                      "end": 6637,
                      "value": 1,
                      "raw": "1"
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6647,
                    "end": 6671,
                    "id": {
                      "type": "Identifier",
                      "start": 6647,
                      "end": 6662,
                      "name": "IsStringIndexer",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6665,
                      "end": 6671,
                      "left": {
                        "type": "Literal",
                        "start": 6665,
                        "end": 6666,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 6670,
                        "end": 6671,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 6681,
                    "end": 6705,
                    "id": {
                      "type": "Identifier",
                      "start": 6681,
                      "end": 6696,
                      "name": "IsNumberIndexer",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 6699,
                      "end": 6705,
                      "left": {
                        "type": "Literal",
                        "start": 6699,
                        "end": 6700,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 6704,
                        "end": 6705,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "computed": false
                  }
                ]
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 6718,
            "end": 6778,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 6725,
              "end": 6778,
              "id": {
                "type": "Identifier",
                "start": 6734,
                "end": 6745,
                "name": "ToDeclFlags",
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
                  "start": 6746,
                  "end": 6764,
                  "name": "fncFlags",
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
                        "name": "FncFlags",
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
              "declare": false,
              "typeParameters": null,
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
                    "name": "DeclFlags",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 6783,
            "end": 6843,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 6790,
              "end": 6843,
              "id": {
                "type": "Identifier",
                "start": 6799,
                "end": 6810,
                "name": "ToDeclFlags",
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
                  "start": 6811,
                  "end": 6829,
                  "name": "varFlags",
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
                        "name": "VarFlags",
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
              "declare": false,
              "typeParameters": null,
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
                    "name": "DeclFlags",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 6848,
            "end": 6910,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 6855,
              "end": 6910,
              "id": {
                "type": "Identifier",
                "start": 6864,
                "end": 6875,
                "name": "ToDeclFlags",
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
                  "start": 6876,
                  "end": 6897,
                  "name": "symFlags",
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
                        "name": "SymbolFlags",
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
              "declare": false,
              "typeParameters": null,
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
                    "name": "DeclFlags",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 6915,
            "end": 6980,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 6922,
              "end": 6980,
              "id": {
                "type": "Identifier",
                "start": 6931,
                "end": 6942,
                "name": "ToDeclFlags",
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
                  "start": 6943,
                  "end": 6967,
                  "name": "moduleFlags",
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
                        "name": "ModuleFlags",
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
              "declare": false,
              "typeParameters": null,
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
                    "name": "DeclFlags",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 6985,
            "end": 7113,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 6992,
              "end": 7113,
              "id": {
                "type": "Identifier",
                "start": 7001,
                "end": 7012,
                "name": "ToDeclFlags",
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
                  "start": 7013,
                  "end": 7047,
                  "name": "fncOrVarOrSymbolOrModuleFlags",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 7042,
                    "end": 7047,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 7044,
                      "end": 7047
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "name": "fncOrVarOrSymbolOrModuleFlags",
                        "typeAnnotation": null,
                        "decorators": [],
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
                          "name": "DeclFlags",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 7119,
            "end": 7412,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 7126,
              "end": 7412,
              "id": {
                "type": "Identifier",
                "start": 7131,
                "end": 7140,
                "name": "TypeFlags",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 7151,
                  "end": 7159,
                  "id": {
                    "type": "Identifier",
                    "start": 7151,
                    "end": 7155,
                    "name": "None",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 7158,
                    "end": 7159,
                    "value": 0,
                    "raw": "0"
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 7169,
                  "end": 7190,
                  "id": {
                    "type": "Identifier",
                    "start": 7169,
                    "end": 7186,
                    "name": "HasImplementation",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 7189,
                    "end": 7190,
                    "value": 1,
                    "raw": "1"
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 7200,
                  "end": 7225,
                  "id": {
                    "type": "Identifier",
                    "start": 7200,
                    "end": 7216,
                    "name": "HasSelfReference",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 7219,
                    "end": 7225,
                    "left": {
                      "type": "Literal",
                      "start": 7219,
                      "end": 7220,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 7224,
                      "end": 7225,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 7235,
                  "end": 7255,
                  "id": {
                    "type": "Identifier",
                    "start": 7235,
                    "end": 7246,
                    "name": "MergeResult",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 7249,
                    "end": 7255,
                    "left": {
                      "type": "Literal",
                      "start": 7249,
                      "end": 7250,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 7254,
                      "end": 7255,
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 7265,
                  "end": 7280,
                  "id": {
                    "type": "Identifier",
                    "start": 7265,
                    "end": 7271,
                    "name": "IsEnum",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 7274,
                    "end": 7280,
                    "left": {
                      "type": "Literal",
                      "start": 7274,
                      "end": 7275,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 7279,
                      "end": 7280,
                      "value": 3,
                      "raw": "3"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 7290,
                  "end": 7311,
                  "id": {
                    "type": "Identifier",
                    "start": 7290,
                    "end": 7302,
                    "name": "BuildingName",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 7305,
                    "end": 7311,
                    "left": {
                      "type": "Literal",
                      "start": 7305,
                      "end": 7306,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 7310,
                      "end": 7311,
                      "value": 4,
                      "raw": "4"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 7321,
                  "end": 7341,
                  "id": {
                    "type": "Identifier",
                    "start": 7321,
                    "end": 7332,
                    "name": "HasBaseType",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 7335,
                    "end": 7341,
                    "left": {
                      "type": "Literal",
                      "start": 7335,
                      "end": 7336,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 7340,
                      "end": 7341,
                      "value": 5,
                      "raw": "5"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 7351,
                  "end": 7379,
                  "id": {
                    "type": "Identifier",
                    "start": 7351,
                    "end": 7370,
                    "name": "HasBaseTypeOfObject",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 7373,
                    "end": 7379,
                    "left": {
                      "type": "Literal",
                      "start": 7373,
                      "end": 7374,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 7378,
                      "end": 7379,
                      "value": 6,
                      "raw": "6"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 7389,
                  "end": 7405,
                  "id": {
                    "type": "Identifier",
                    "start": 7389,
                    "end": 7396,
                    "name": "IsClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 7399,
                    "end": 7405,
                    "left": {
                      "type": "Literal",
                      "start": 7399,
                      "end": 7400,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 7404,
                      "end": 7405,
                      "value": 7,
                      "raw": "7"
                    }
                  },
                  "computed": false
                }
              ],
              "const": false,
              "declare": false,
              "body": {
                "type": "TSEnumBody",
                "start": 7141,
                "end": 7412,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 7151,
                    "end": 7159,
                    "id": {
                      "type": "Identifier",
                      "start": 7151,
                      "end": 7155,
                      "name": "None",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 7158,
                      "end": 7159,
                      "value": 0,
                      "raw": "0"
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 7169,
                    "end": 7190,
                    "id": {
                      "type": "Identifier",
                      "start": 7169,
                      "end": 7186,
                      "name": "HasImplementation",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 7189,
                      "end": 7190,
                      "value": 1,
                      "raw": "1"
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 7200,
                    "end": 7225,
                    "id": {
                      "type": "Identifier",
                      "start": 7200,
                      "end": 7216,
                      "name": "HasSelfReference",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 7219,
                      "end": 7225,
                      "left": {
                        "type": "Literal",
                        "start": 7219,
                        "end": 7220,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 7224,
                        "end": 7225,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 7235,
                    "end": 7255,
                    "id": {
                      "type": "Identifier",
                      "start": 7235,
                      "end": 7246,
                      "name": "MergeResult",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 7249,
                      "end": 7255,
                      "left": {
                        "type": "Literal",
                        "start": 7249,
                        "end": 7250,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 7254,
                        "end": 7255,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 7265,
                    "end": 7280,
                    "id": {
                      "type": "Identifier",
                      "start": 7265,
                      "end": 7271,
                      "name": "IsEnum",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 7274,
                      "end": 7280,
                      "left": {
                        "type": "Literal",
                        "start": 7274,
                        "end": 7275,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 7279,
                        "end": 7280,
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 7290,
                    "end": 7311,
                    "id": {
                      "type": "Identifier",
                      "start": 7290,
                      "end": 7302,
                      "name": "BuildingName",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 7305,
                      "end": 7311,
                      "left": {
                        "type": "Literal",
                        "start": 7305,
                        "end": 7306,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 7310,
                        "end": 7311,
                        "value": 4,
                        "raw": "4"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 7321,
                    "end": 7341,
                    "id": {
                      "type": "Identifier",
                      "start": 7321,
                      "end": 7332,
                      "name": "HasBaseType",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 7335,
                      "end": 7341,
                      "left": {
                        "type": "Literal",
                        "start": 7335,
                        "end": 7336,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 7340,
                        "end": 7341,
                        "value": 5,
                        "raw": "5"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 7351,
                    "end": 7379,
                    "id": {
                      "type": "Identifier",
                      "start": 7351,
                      "end": 7370,
                      "name": "HasBaseTypeOfObject",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 7373,
                      "end": 7379,
                      "left": {
                        "type": "Literal",
                        "start": 7373,
                        "end": 7374,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 7378,
                        "end": 7379,
                        "value": 6,
                        "raw": "6"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 7389,
                    "end": 7405,
                    "id": {
                      "type": "Identifier",
                      "start": 7389,
                      "end": 7396,
                      "name": "IsClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 7399,
                      "end": 7405,
                      "left": {
                        "type": "Literal",
                        "start": 7399,
                        "end": 7400,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 7404,
                        "end": 7405,
                        "value": 7,
                        "raw": "7"
                      }
                    },
                    "computed": false
                  }
                ]
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 7418,
            "end": 7807,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 7425,
              "end": 7807,
              "id": {
                "type": "Identifier",
                "start": 7430,
                "end": 7451,
                "name": "TypeRelationshipFlags",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 7462,
                  "end": 7486,
                  "id": {
                    "type": "Identifier",
                    "start": 7462,
                    "end": 7482,
                    "name": "SuccessfulComparison",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 7485,
                    "end": 7486,
                    "value": 0,
                    "raw": "0"
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 7496,
                  "end": 7535,
                  "id": {
                    "type": "Identifier",
                    "start": 7496,
                    "end": 7531,
                    "name": "SourceIsNullTargetIsVoidOrUndefined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 7534,
                    "end": 7535,
                    "value": 1,
                    "raw": "1"
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 7545,
                  "end": 7579,
                  "id": {
                    "type": "Identifier",
                    "start": 7545,
                    "end": 7570,
                    "name": "RequiredPropertyIsMissing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 7573,
                    "end": 7579,
                    "left": {
                      "type": "Literal",
                      "start": 7573,
                      "end": 7574,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 7578,
                      "end": 7579,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 7589,
                  "end": 7620,
                  "id": {
                    "type": "Identifier",
                    "start": 7589,
                    "end": 7611,
                    "name": "IncompatibleSignatures",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 7614,
                    "end": 7620,
                    "left": {
                      "type": "Literal",
                      "start": 7614,
                      "end": 7615,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 7619,
                      "end": 7620,
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 7630,
                  "end": 7669,
                  "id": {
                    "type": "Identifier",
                    "start": 7630,
                    "end": 7665,
                    "name": "SourceSignatureHasTooManyParameters",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 7668,
                    "end": 7669,
                    "value": 3,
                    "raw": "3"
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 7679,
                  "end": 7711,
                  "id": {
                    "type": "Identifier",
                    "start": 7679,
                    "end": 7702,
                    "name": "IncompatibleReturnTypes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 7705,
                    "end": 7711,
                    "left": {
                      "type": "Literal",
                      "start": 7705,
                      "end": 7706,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 7710,
                      "end": 7711,
                      "value": 4,
                      "raw": "4"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 7721,
                  "end": 7755,
                  "id": {
                    "type": "Identifier",
                    "start": 7721,
                    "end": 7746,
                    "name": "IncompatiblePropertyTypes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 7749,
                    "end": 7755,
                    "left": {
                      "type": "Literal",
                      "start": 7749,
                      "end": 7750,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 7754,
                      "end": 7755,
                      "value": 5,
                      "raw": "5"
                    }
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 7765,
                  "end": 7800,
                  "id": {
                    "type": "Identifier",
                    "start": 7765,
                    "end": 7791,
                    "name": "IncompatibleParameterTypes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 7794,
                    "end": 7800,
                    "left": {
                      "type": "Literal",
                      "start": 7794,
                      "end": 7795,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 7799,
                      "end": 7800,
                      "value": 6,
                      "raw": "6"
                    }
                  },
                  "computed": false
                }
              ],
              "const": false,
              "declare": false,
              "body": {
                "type": "TSEnumBody",
                "start": 7452,
                "end": 7807,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 7462,
                    "end": 7486,
                    "id": {
                      "type": "Identifier",
                      "start": 7462,
                      "end": 7482,
                      "name": "SuccessfulComparison",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 7485,
                      "end": 7486,
                      "value": 0,
                      "raw": "0"
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 7496,
                    "end": 7535,
                    "id": {
                      "type": "Identifier",
                      "start": 7496,
                      "end": 7531,
                      "name": "SourceIsNullTargetIsVoidOrUndefined",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 7534,
                      "end": 7535,
                      "value": 1,
                      "raw": "1"
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 7545,
                    "end": 7579,
                    "id": {
                      "type": "Identifier",
                      "start": 7545,
                      "end": 7570,
                      "name": "RequiredPropertyIsMissing",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 7573,
                      "end": 7579,
                      "left": {
                        "type": "Literal",
                        "start": 7573,
                        "end": 7574,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 7578,
                        "end": 7579,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 7589,
                    "end": 7620,
                    "id": {
                      "type": "Identifier",
                      "start": 7589,
                      "end": 7611,
                      "name": "IncompatibleSignatures",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 7614,
                      "end": 7620,
                      "left": {
                        "type": "Literal",
                        "start": 7614,
                        "end": 7615,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 7619,
                        "end": 7620,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 7630,
                    "end": 7669,
                    "id": {
                      "type": "Identifier",
                      "start": 7630,
                      "end": 7665,
                      "name": "SourceSignatureHasTooManyParameters",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 7668,
                      "end": 7669,
                      "value": 3,
                      "raw": "3"
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 7679,
                    "end": 7711,
                    "id": {
                      "type": "Identifier",
                      "start": 7679,
                      "end": 7702,
                      "name": "IncompatibleReturnTypes",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 7705,
                      "end": 7711,
                      "left": {
                        "type": "Literal",
                        "start": 7705,
                        "end": 7706,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 7710,
                        "end": 7711,
                        "value": 4,
                        "raw": "4"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 7721,
                    "end": 7755,
                    "id": {
                      "type": "Identifier",
                      "start": 7721,
                      "end": 7746,
                      "name": "IncompatiblePropertyTypes",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 7749,
                      "end": 7755,
                      "left": {
                        "type": "Literal",
                        "start": 7749,
                        "end": 7750,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 7754,
                        "end": 7755,
                        "value": 5,
                        "raw": "5"
                      }
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 7765,
                    "end": 7800,
                    "id": {
                      "type": "Identifier",
                      "start": 7765,
                      "end": 7791,
                      "name": "IncompatibleParameterTypes",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 7794,
                      "end": 7800,
                      "left": {
                        "type": "Literal",
                        "start": 7794,
                        "end": 7795,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 7799,
                        "end": 7800,
                        "value": 6,
                        "raw": "6"
                      }
                    },
                    "computed": false
                  }
                ]
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 7813,
            "end": 7880,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 7820,
              "end": 7880,
              "id": {
                "type": "Identifier",
                "start": 7825,
                "end": 7838,
                "name": "CodeGenTarget",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 7849,
                  "end": 7856,
                  "id": {
                    "type": "Identifier",
                    "start": 7849,
                    "end": 7852,
                    "name": "ES3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 7855,
                    "end": 7856,
                    "value": 0,
                    "raw": "0"
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 7866,
                  "end": 7873,
                  "id": {
                    "type": "Identifier",
                    "start": 7866,
                    "end": 7869,
                    "name": "ES5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 7872,
                    "end": 7873,
                    "value": 1,
                    "raw": "1"
                  },
                  "computed": false
                }
              ],
              "const": false,
              "declare": false,
              "body": {
                "type": "TSEnumBody",
                "start": 7839,
                "end": 7880,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 7849,
                    "end": 7856,
                    "id": {
                      "type": "Identifier",
                      "start": 7849,
                      "end": 7852,
                      "name": "ES3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 7855,
                      "end": 7856,
                      "value": 0,
                      "raw": "0"
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 7866,
                    "end": 7873,
                    "id": {
                      "type": "Identifier",
                      "start": 7866,
                      "end": 7869,
                      "name": "ES5",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 7872,
                      "end": 7873,
                      "value": 1,
                      "raw": "1"
                    },
                    "computed": false
                  }
                ]
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 7886,
            "end": 7996,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 7893,
              "end": 7996,
              "id": {
                "type": "Identifier",
                "start": 7898,
                "end": 7913,
                "name": "ModuleGenTarget",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 7924,
                  "end": 7939,
                  "id": {
                    "type": "Identifier",
                    "start": 7924,
                    "end": 7935,
                    "name": "Synchronous",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 7938,
                    "end": 7939,
                    "value": 0,
                    "raw": "0"
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 7949,
                  "end": 7965,
                  "id": {
                    "type": "Identifier",
                    "start": 7949,
                    "end": 7961,
                    "name": "Asynchronous",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 7964,
                    "end": 7965,
                    "value": 1,
                    "raw": "1"
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 7975,
                  "end": 7989,
                  "id": {
                    "type": "Identifier",
                    "start": 7975,
                    "end": 7980,
                    "name": "Local",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "start": 7983,
                    "end": 7989,
                    "left": {
                      "type": "Literal",
                      "start": 7983,
                      "end": 7984,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "start": 7988,
                      "end": 7989,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "computed": false
                }
              ],
              "const": false,
              "declare": false,
              "body": {
                "type": "TSEnumBody",
                "start": 7914,
                "end": 7996,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 7924,
                    "end": 7939,
                    "id": {
                      "type": "Identifier",
                      "start": 7924,
                      "end": 7935,
                      "name": "Synchronous",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 7938,
                      "end": 7939,
                      "value": 0,
                      "raw": "0"
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 7949,
                    "end": 7965,
                    "id": {
                      "type": "Identifier",
                      "start": 7949,
                      "end": 7961,
                      "name": "Asynchronous",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 7964,
                      "end": 7965,
                      "value": 1,
                      "raw": "1"
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 7975,
                    "end": 7989,
                    "id": {
                      "type": "Identifier",
                      "start": 7975,
                      "end": 7980,
                      "name": "Local",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "start": 7983,
                      "end": 7989,
                      "left": {
                        "type": "Literal",
                        "start": 7983,
                        "end": 7984,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "start": 7988,
                        "end": 7989,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "computed": false
                  }
                ]
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 8094,
            "end": 8154,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 8101,
              "end": 8154,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 8105,
                  "end": 8153,
                  "id": {
                    "type": "Identifier",
                    "start": 8105,
                    "end": 8133,
                    "name": "codeGenTarget",
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
                          "name": "CodeGenTarget",
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
                    "type": "MemberExpression",
                    "start": 8136,
                    "end": 8153,
                    "object": {
                      "type": "Identifier",
                      "start": 8136,
                      "end": 8149,
                      "name": "CodeGenTarget",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 8150,
                      "end": 8153,
                      "name": "ES3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 8160,
            "end": 8234,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 8167,
              "end": 8234,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 8171,
                  "end": 8233,
                  "id": {
                    "type": "Identifier",
                    "start": 8171,
                    "end": 8203,
                    "name": "moduleGenTarget",
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
                          "name": "ModuleGenTarget",
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
                    "type": "MemberExpression",
                    "start": 8206,
                    "end": 8233,
                    "object": {
                      "type": "Identifier",
                      "start": 8206,
                      "end": 8221,
                      "name": "ModuleGenTarget",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 8222,
                      "end": 8233,
                      "name": "Synchronous",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 8240,
            "end": 8280,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 8247,
              "end": 8280,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 8251,
                  "end": 8279,
                  "id": {
                    "type": "Identifier",
                    "start": 8251,
                    "end": 8272,
                    "name": "optimizeModuleCodeGen",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 8275,
                    "end": 8279,
                    "value": true,
                    "raw": "true"
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 8286,
            "end": 8814,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 8293,
              "end": 8814,
              "id": {
                "type": "Identifier",
                "start": 8302,
                "end": 8315,
                "name": "flagsToString",
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
                  "start": 8316,
                  "end": 8317,
                  "name": "e",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 8319,
                  "end": 8332,
                  "name": "flags",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 8324,
                    "end": 8332,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 8326,
                      "end": 8332
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "id": {
                          "type": "Identifier",
                          "start": 8356,
                          "end": 8363,
                          "name": "builder",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 8366,
                          "end": 8368,
                          "value": "",
                          "raw": "\"\""
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ForStatement",
                    "start": 8378,
                    "end": 8784,
                    "init": {
                      "type": "VariableDeclaration",
                      "start": 8383,
                      "end": 8392,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 8387,
                          "end": 8392,
                          "id": {
                            "type": "Identifier",
                            "start": 8387,
                            "end": 8388,
                            "name": "i",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 8391,
                            "end": 8392,
                            "value": 1,
                            "raw": "1"
                          },
                          "definite": false
                        }
                      ],
                      "kind": "var",
                      "declare": false
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 8394,
                      "end": 8407,
                      "left": {
                        "type": "Identifier",
                        "start": 8394,
                        "end": 8395,
                        "name": "i",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "<",
                      "right": {
                        "type": "BinaryExpression",
                        "start": 8399,
                        "end": 8406,
                        "left": {
                          "type": "Literal",
                          "start": 8399,
                          "end": 8400,
                          "value": 1,
                          "raw": "1"
                        },
                        "operator": "<<",
                        "right": {
                          "type": "Literal",
                          "start": 8404,
                          "end": 8406,
                          "value": 31,
                          "raw": "31"
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
                        "name": "i",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 8414,
                        "end": 8420,
                        "left": {
                          "type": "Identifier",
                          "start": 8414,
                          "end": 8415,
                          "name": "i",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "<<",
                        "right": {
                          "type": "Literal",
                          "start": 8419,
                          "end": 8420,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 8422,
                      "end": 8784,
                      "body": [
                        {
                          "type": "IfStatement",
                          "start": 8436,
                          "end": 8774,
                          "test": {
                            "type": "BinaryExpression",
                            "start": 8440,
                            "end": 8456,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 8441,
                              "end": 8450,
                              "left": {
                                "type": "Identifier",
                                "start": 8441,
                                "end": 8446,
                                "name": "flags",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "&",
                              "right": {
                                "type": "Identifier",
                                "start": 8449,
                                "end": 8450,
                                "name": "i",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "operator": "!=",
                            "right": {
                              "type": "Literal",
                              "start": 8455,
                              "end": 8456,
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "start": 8458,
                            "end": 8774,
                            "body": [
                              {
                                "type": "ForInStatement",
                                "start": 8476,
                                "end": 8760,
                                "left": {
                                  "type": "VariableDeclaration",
                                  "start": 8481,
                                  "end": 8486,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 8485,
                                      "end": 8486,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 8485,
                                        "end": 8486,
                                        "name": "k",
                                        "typeAnnotation": null,
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
                                "right": {
                                  "type": "Identifier",
                                  "start": 8490,
                                  "end": 8491,
                                  "name": "e",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 8493,
                                  "end": 8760,
                                  "body": [
                                    {
                                      "type": "IfStatement",
                                      "start": 8515,
                                      "end": 8742,
                                      "test": {
                                        "type": "BinaryExpression",
                                        "start": 8519,
                                        "end": 8528,
                                        "left": {
                                          "type": "MemberExpression",
                                          "start": 8519,
                                          "end": 8523,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 8519,
                                            "end": 8520,
                                            "name": "e",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 8521,
                                            "end": 8522,
                                            "name": "k",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "computed": true,
                                          "optional": false
                                        },
                                        "operator": "==",
                                        "right": {
                                          "type": "Identifier",
                                          "start": 8527,
                                          "end": 8528,
                                          "name": "i",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        }
                                      },
                                      "consequent": {
                                        "type": "BlockStatement",
                                        "start": 8530,
                                        "end": 8742,
                                        "body": [
                                          {
                                            "type": "IfStatement",
                                            "start": 8556,
                                            "end": 8651,
                                            "test": {
                                              "type": "BinaryExpression",
                                              "start": 8560,
                                              "end": 8578,
                                              "left": {
                                                "type": "MemberExpression",
                                                "start": 8560,
                                                "end": 8574,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 8560,
                                                  "end": 8567,
                                                  "name": "builder",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 8568,
                                                  "end": 8574,
                                                  "name": "length",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "computed": false,
                                                "optional": false
                                              },
                                              "operator": ">",
                                              "right": {
                                                "type": "Literal",
                                                "start": 8577,
                                                "end": 8578,
                                                "value": 0,
                                                "raw": "0"
                                              }
                                            },
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
                                                      "name": "builder",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
                                                    "right": {
                                                      "type": "Literal",
                                                      "start": 8621,
                                                      "end": 8624,
                                                      "value": "|",
                                                      "raw": "\"|\""
                                                    }
                                                  },
                                                  "directive": null
                                                }
                                              ]
                                            },
                                            "alternate": null
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
                                                "name": "builder",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "start": 8687,
                                                "end": 8688,
                                                "name": "k",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              }
                                            },
                                            "directive": null
                                          },
                                          {
                                            "type": "BreakStatement",
                                            "start": 8714,
                                            "end": 8720,
                                            "label": null
                                          }
                                        ]
                                      },
                                      "alternate": null
                                    }
                                  ]
                                }
                              }
                            ]
                          },
                          "alternate": null
                        }
                      ]
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
                      "name": "builder",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
