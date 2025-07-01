__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeScript",
        "optional": false,
        "typeAnnotation": null,
        "start": 218,
        "end": 228
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasFlag",
                "optional": false,
                "typeAnnotation": null,
                "start": 252,
                "end": 259
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 265,
                      "end": 271
                    },
                    "start": 263,
                    "end": 271
                  },
                  "start": 260,
                  "end": 271
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "flag",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 279,
                      "end": 285
                    },
                    "start": 277,
                    "end": 285
                  },
                  "start": 273,
                  "end": 285
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 305,
                          "end": 308
                        },
                        "operator": "&",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "flag",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 311,
                          "end": 315
                        },
                        "start": 305,
                        "end": 315
                      },
                      "operator": "!=",
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 320,
                        "end": 321
                      },
                      "start": 304,
                      "end": 321
                    },
                    "start": 297,
                    "end": 322
                  }
                ],
                "start": 287,
                "end": 328
              },
              "expression": false,
              "start": 243,
              "end": 328
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 236,
            "end": 328
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ErrorRecoverySet",
                "optional": false,
                "typeAnnotation": null,
                "start": 346,
                "end": 362
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "None",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 373,
                      "end": 377
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 380,
                      "end": 381
                    },
                    "computed": false,
                    "start": 373,
                    "end": 381
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Comma",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 391,
                      "end": 396
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 399,
                      "end": 400
                    },
                    "computed": false,
                    "start": 391,
                    "end": 400
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SColon",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 419,
                      "end": 425
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 428,
                        "end": 429
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 433,
                        "end": 434
                      },
                      "start": 428,
                      "end": 434
                    },
                    "computed": false,
                    "start": 419,
                    "end": 434
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Asg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 454,
                      "end": 457
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 460,
                        "end": 461
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 465,
                        "end": 466
                      },
                      "start": 460,
                      "end": 466
                    },
                    "computed": false,
                    "start": 454,
                    "end": 466
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "BinOp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 483,
                      "end": 488
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 491,
                        "end": 492
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 496,
                        "end": 497
                      },
                      "start": 491,
                      "end": 497
                    },
                    "computed": false,
                    "start": 483,
                    "end": 497
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RBrack",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 732,
                      "end": 738
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 741,
                        "end": 742
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 746,
                        "end": 747
                      },
                      "start": 741,
                      "end": 747
                    },
                    "computed": false,
                    "start": 732,
                    "end": 747
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RCurly",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 767,
                      "end": 773
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 776,
                        "end": 777
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 781,
                        "end": 782
                      },
                      "start": 776,
                      "end": 782
                    },
                    "computed": false,
                    "start": 767,
                    "end": 782
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RParen",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 802,
                      "end": 808
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 811,
                        "end": 812
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 816,
                        "end": 817
                      },
                      "start": 811,
                      "end": 817
                    },
                    "computed": false,
                    "start": 802,
                    "end": 817
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Dot",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 837,
                      "end": 840
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 843,
                        "end": 844
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7",
                        "start": 848,
                        "end": 849
                      },
                      "start": 843,
                      "end": 849
                    },
                    "computed": false,
                    "start": 837,
                    "end": 849
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Colon",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 866,
                      "end": 871
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 874,
                        "end": 875
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 8,
                        "raw": "8",
                        "start": 879,
                        "end": 880
                      },
                      "start": 874,
                      "end": 880
                    },
                    "computed": false,
                    "start": 866,
                    "end": 880
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PrimType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 899,
                      "end": 907
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 910,
                        "end": 911
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 9,
                        "raw": "9",
                        "start": 915,
                        "end": 916
                      },
                      "start": 910,
                      "end": 916
                    },
                    "computed": false,
                    "start": 899,
                    "end": 916
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AddOp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 953,
                      "end": 958
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 961,
                        "end": 962
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 966,
                        "end": 968
                      },
                      "start": 961,
                      "end": 968
                    },
                    "computed": false,
                    "start": 953,
                    "end": 968
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LCurly",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 990,
                      "end": 996
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 999,
                        "end": 1000
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 11,
                        "raw": "11",
                        "start": 1004,
                        "end": 1006
                      },
                      "start": 999,
                      "end": 1006
                    },
                    "computed": false,
                    "start": 990,
                    "end": 1006
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PreOp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1026,
                      "end": 1031
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1034,
                        "end": 1035
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12",
                        "start": 1039,
                        "end": 1041
                      },
                      "start": 1034,
                      "end": 1041
                    },
                    "computed": false,
                    "start": 1026,
                    "end": 1041
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1076,
                      "end": 1082
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1085,
                        "end": 1086
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 13,
                        "raw": "13",
                        "start": 1090,
                        "end": 1092
                      },
                      "start": 1085,
                      "end": 1092
                    },
                    "computed": false,
                    "start": 1076,
                    "end": 1092
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LParen",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1112,
                      "end": 1118
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1121,
                        "end": 1122
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 14,
                        "raw": "14",
                        "start": 1126,
                        "end": 1128
                      },
                      "start": 1121,
                      "end": 1128
                    },
                    "computed": false,
                    "start": 1112,
                    "end": 1128
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LBrack",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1148,
                      "end": 1154
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1157,
                        "end": 1158
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 15,
                        "raw": "15",
                        "start": 1162,
                        "end": 1164
                      },
                      "start": 1157,
                      "end": 1164
                    },
                    "computed": false,
                    "start": 1148,
                    "end": 1164
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Scope",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1184,
                      "end": 1189
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1192,
                        "end": 1193
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 16,
                        "raw": "16",
                        "start": 1197,
                        "end": 1199
                      },
                      "start": 1192,
                      "end": 1199
                    },
                    "computed": false,
                    "start": 1184,
                    "end": 1199
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "In",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1218,
                      "end": 1220
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1223,
                        "end": 1224
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 17,
                        "raw": "17",
                        "start": 1228,
                        "end": 1230
                      },
                      "start": 1223,
                      "end": 1230
                    },
                    "computed": false,
                    "start": 1218,
                    "end": 1230
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SCase",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1246,
                      "end": 1251
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1254,
                        "end": 1255
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 18,
                        "raw": "18",
                        "start": 1259,
                        "end": 1261
                      },
                      "start": 1254,
                      "end": 1261
                    },
                    "computed": false,
                    "start": 1246,
                    "end": 1261
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Else",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1288,
                      "end": 1292
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1295,
                        "end": 1296
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 19,
                        "raw": "19",
                        "start": 1300,
                        "end": 1302
                      },
                      "start": 1295,
                      "end": 1302
                    },
                    "computed": false,
                    "start": 1288,
                    "end": 1302
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Catch",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1320,
                      "end": 1325
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1328,
                        "end": 1329
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 20,
                        "raw": "20",
                        "start": 1333,
                        "end": 1335
                      },
                      "start": 1328,
                      "end": 1335
                    },
                    "computed": false,
                    "start": 1320,
                    "end": 1335
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Var",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1363,
                      "end": 1366
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1369,
                        "end": 1370
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 21,
                        "raw": "21",
                        "start": 1374,
                        "end": 1376
                      },
                      "start": 1369,
                      "end": 1376
                    },
                    "computed": false,
                    "start": 1363,
                    "end": 1376
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Stmt",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1390,
                      "end": 1394
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1397,
                        "end": 1398
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 22,
                        "raw": "22",
                        "start": 1402,
                        "end": 1404
                      },
                      "start": 1397,
                      "end": 1404
                    },
                    "computed": false,
                    "start": 1390,
                    "end": 1404
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "While",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1480,
                      "end": 1485
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1488,
                        "end": 1489
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 23,
                        "raw": "23",
                        "start": 1493,
                        "end": 1495
                      },
                      "start": 1488,
                      "end": 1495
                    },
                    "computed": false,
                    "start": 1480,
                    "end": 1495
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ID",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1514,
                      "end": 1516
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1519,
                        "end": 1520
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 24,
                        "raw": "24",
                        "start": 1524,
                        "end": 1526
                      },
                      "start": 1519,
                      "end": 1526
                    },
                    "computed": false,
                    "start": 1514,
                    "end": 1526
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Prefix",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1542,
                      "end": 1548
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1551,
                        "end": 1552
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 25,
                        "raw": "25",
                        "start": 1556,
                        "end": 1558
                      },
                      "start": 1551,
                      "end": 1558
                    },
                    "computed": false,
                    "start": 1542,
                    "end": 1558
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Literal",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1599,
                      "end": 1606
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1609,
                        "end": 1610
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 26,
                        "raw": "26",
                        "start": 1614,
                        "end": 1616
                      },
                      "start": 1609,
                      "end": 1616
                    },
                    "computed": false,
                    "start": 1599,
                    "end": 1616
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RLit",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1652,
                      "end": 1656
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1659,
                        "end": 1660
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 27,
                        "raw": "27",
                        "start": 1664,
                        "end": 1666
                      },
                      "start": 1659,
                      "end": 1666
                    },
                    "computed": false,
                    "start": 1652,
                    "end": 1666
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Func",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1703,
                      "end": 1707
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1710,
                        "end": 1711
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 28,
                        "raw": "28",
                        "start": 1715,
                        "end": 1717
                      },
                      "start": 1710,
                      "end": 1717
                    },
                    "computed": false,
                    "start": 1703,
                    "end": 1717
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "EOF",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1739,
                      "end": 1742
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1745,
                        "end": 1746
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 29,
                        "raw": "29",
                        "start": 1750,
                        "end": 1752
                      },
                      "start": 1745,
                      "end": 1752
                    },
                    "computed": false,
                    "start": 1739,
                    "end": 1752
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TypeScriptS",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1818,
                      "end": 1829
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1832,
                        "end": 1833
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 30,
                        "raw": "30",
                        "start": 1837,
                        "end": 1839
                      },
                      "start": 1832,
                      "end": 1839
                    },
                    "computed": false,
                    "start": 1818,
                    "end": 1839
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ExprStart",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1920,
                      "end": 1929
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "BinaryExpression",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "left": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "SColon",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1932,
                                            "end": 1938
                                          },
                                          "operator": "|",
                                          "right": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "AddOp",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1941,
                                            "end": 1946
                                          },
                                          "start": 1932,
                                          "end": 1946
                                        },
                                        "operator": "|",
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "LCurly",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1949,
                                          "end": 1955
                                        },
                                        "start": 1932,
                                        "end": 1955
                                      },
                                      "operator": "|",
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "PreOp",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1958,
                                        "end": 1963
                                      },
                                      "start": 1932,
                                      "end": 1963
                                    },
                                    "operator": "|",
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "RegExp",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1966,
                                      "end": 1972
                                    },
                                    "start": 1932,
                                    "end": 1972
                                  },
                                  "operator": "|",
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "LParen",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1975,
                                    "end": 1981
                                  },
                                  "start": 1932,
                                  "end": 1981
                                },
                                "operator": "|",
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "LBrack",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1984,
                                  "end": 1990
                                },
                                "start": 1932,
                                "end": 1990
                              },
                              "operator": "|",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ID",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1993,
                                "end": 1995
                              },
                              "start": 1932,
                              "end": 1995
                            },
                            "operator": "|",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Prefix",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1998,
                              "end": 2004
                            },
                            "start": 1932,
                            "end": 2004
                          },
                          "operator": "|",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RLit",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2007,
                            "end": 2011
                          },
                          "start": 1932,
                          "end": 2011
                        },
                        "operator": "|",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Func",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2014,
                          "end": 2018
                        },
                        "start": 1932,
                        "end": 2018
                      },
                      "operator": "|",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Literal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2021,
                        "end": 2028
                      },
                      "start": 1932,
                      "end": 2028
                    },
                    "computed": false,
                    "start": 1920,
                    "end": 2028
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "StmtStart",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2038,
                      "end": 2047
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ExprStart",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2050,
                                "end": 2059
                              },
                              "operator": "|",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SColon",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2062,
                                "end": 2068
                              },
                              "start": 2050,
                              "end": 2068
                            },
                            "operator": "|",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Var",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2071,
                              "end": 2074
                            },
                            "start": 2050,
                            "end": 2074
                          },
                          "operator": "|",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Stmt",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2077,
                            "end": 2081
                          },
                          "start": 2050,
                          "end": 2081
                        },
                        "operator": "|",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "While",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2084,
                          "end": 2089
                        },
                        "start": 2050,
                        "end": 2089
                      },
                      "operator": "|",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TypeScriptS",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2092,
                        "end": 2103
                      },
                      "start": 2050,
                      "end": 2103
                    },
                    "computed": false,
                    "start": 2038,
                    "end": 2103
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Postfix",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2113,
                      "end": 2120
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Dot",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2123,
                          "end": 2126
                        },
                        "operator": "|",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "LParen",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2129,
                          "end": 2135
                        },
                        "start": 2123,
                        "end": 2135
                      },
                      "operator": "|",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "LBrack",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2138,
                        "end": 2144
                      },
                      "start": 2123,
                      "end": 2144
                    },
                    "computed": false,
                    "start": 2113,
                    "end": 2144
                  }
                ],
                "start": 363,
                "end": 2151
              },
              "const": false,
              "declare": false,
              "start": 341,
              "end": 2151
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 334,
            "end": 2151
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "AllowedElements",
                "optional": false,
                "typeAnnotation": null,
                "start": 2169,
                "end": 2184
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "None",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2195,
                      "end": 2199
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 2202,
                      "end": 2203
                    },
                    "computed": false,
                    "start": 2195,
                    "end": 2203
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ModuleDeclarations",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2213,
                      "end": 2231
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2234,
                        "end": 2235
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 2239,
                        "end": 2240
                      },
                      "start": 2234,
                      "end": 2240
                    },
                    "computed": false,
                    "start": 2213,
                    "end": 2240
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ClassDeclarations",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2250,
                      "end": 2267
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2270,
                        "end": 2271
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 2275,
                        "end": 2276
                      },
                      "start": 2270,
                      "end": 2276
                    },
                    "computed": false,
                    "start": 2250,
                    "end": 2276
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InterfaceDeclarations",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2286,
                      "end": 2307
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2310,
                        "end": 2311
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 2315,
                        "end": 2316
                      },
                      "start": 2310,
                      "end": 2316
                    },
                    "computed": false,
                    "start": 2286,
                    "end": 2316
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AmbientDeclarations",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2326,
                      "end": 2345
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2348,
                        "end": 2349
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 2353,
                        "end": 2355
                      },
                      "start": 2348,
                      "end": 2355
                    },
                    "computed": false,
                    "start": 2326,
                    "end": 2355
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Properties",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2365,
                      "end": 2375
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2378,
                        "end": 2379
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 11,
                        "raw": "11",
                        "start": 2383,
                        "end": 2385
                      },
                      "start": 2378,
                      "end": 2385
                    },
                    "computed": false,
                    "start": 2365,
                    "end": 2385
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Global",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2396,
                      "end": 2402
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ModuleDeclarations",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2405,
                            "end": 2423
                          },
                          "operator": "|",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ClassDeclarations",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2426,
                            "end": 2443
                          },
                          "start": 2405,
                          "end": 2443
                        },
                        "operator": "|",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "InterfaceDeclarations",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2446,
                          "end": 2467
                        },
                        "start": 2405,
                        "end": 2467
                      },
                      "operator": "|",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AmbientDeclarations",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2470,
                        "end": 2489
                      },
                      "start": 2405,
                      "end": 2489
                    },
                    "computed": false,
                    "start": 2396,
                    "end": 2489
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "QuickParse",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2499,
                      "end": 2509
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Global",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2512,
                        "end": 2518
                      },
                      "operator": "|",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Properties",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2521,
                        "end": 2531
                      },
                      "start": 2512,
                      "end": 2531
                    },
                    "computed": false,
                    "start": 2499,
                    "end": 2531
                  }
                ],
                "start": 2185,
                "end": 2538
              },
              "const": false,
              "declare": false,
              "start": 2164,
              "end": 2538
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2157,
            "end": 2538
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Modifiers",
                "optional": false,
                "typeAnnotation": null,
                "start": 2556,
                "end": 2565
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "None",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2576,
                      "end": 2580
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 2583,
                      "end": 2584
                    },
                    "computed": false,
                    "start": 2576,
                    "end": 2584
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2594,
                      "end": 2601
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2604,
                      "end": 2605
                    },
                    "computed": false,
                    "start": 2594,
                    "end": 2605
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2615,
                      "end": 2621
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2624,
                        "end": 2625
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2629,
                        "end": 2630
                      },
                      "start": 2624,
                      "end": 2630
                    },
                    "computed": false,
                    "start": 2615,
                    "end": 2630
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2640,
                      "end": 2648
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2651,
                        "end": 2652
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 2656,
                        "end": 2657
                      },
                      "start": 2651,
                      "end": 2657
                    },
                    "computed": false,
                    "start": 2640,
                    "end": 2657
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Ambient",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2667,
                      "end": 2674
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2677,
                        "end": 2678
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 2682,
                        "end": 2683
                      },
                      "start": 2677,
                      "end": 2683
                    },
                    "computed": false,
                    "start": 2667,
                    "end": 2683
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Exported",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2693,
                      "end": 2701
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2704,
                        "end": 2705
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 2709,
                        "end": 2710
                      },
                      "start": 2704,
                      "end": 2710
                    },
                    "computed": false,
                    "start": 2693,
                    "end": 2710
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Getter",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2720,
                      "end": 2726
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2729,
                        "end": 2730
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 2734,
                        "end": 2735
                      },
                      "start": 2729,
                      "end": 2735
                    },
                    "computed": false,
                    "start": 2720,
                    "end": 2735
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Setter",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2745,
                      "end": 2751
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2754,
                        "end": 2755
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 2759,
                        "end": 2760
                      },
                      "start": 2754,
                      "end": 2760
                    },
                    "computed": false,
                    "start": 2745,
                    "end": 2760
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Static",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2770,
                      "end": 2776
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2779,
                        "end": 2780
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7",
                        "start": 2784,
                        "end": 2785
                      },
                      "start": 2779,
                      "end": 2785
                    },
                    "computed": false,
                    "start": 2770,
                    "end": 2785
                  }
                ],
                "start": 2566,
                "end": 2792
              },
              "const": false,
              "declare": false,
              "start": 2551,
              "end": 2792
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2544,
            "end": 2792
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ASTFlags",
                "optional": false,
                "typeAnnotation": null,
                "start": 2810,
                "end": 2818
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "None",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2829,
                      "end": 2833
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 2836,
                      "end": 2837
                    },
                    "computed": false,
                    "start": 2829,
                    "end": 2837
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ExplicitSemicolon",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2847,
                      "end": 2864
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2867,
                      "end": 2868
                    },
                    "computed": false,
                    "start": 2847,
                    "end": 2868
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AutomaticSemicolon",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2926,
                      "end": 2944
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2947,
                        "end": 2948
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2952,
                        "end": 2953
                      },
                      "start": 2947,
                      "end": 2953
                    },
                    "computed": false,
                    "start": 2926,
                    "end": 2953
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Writeable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3012,
                      "end": 3021
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3024,
                        "end": 3025
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 3029,
                        "end": 3030
                      },
                      "start": 3024,
                      "end": 3030
                    },
                    "computed": false,
                    "start": 3012,
                    "end": 3030
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3077,
                      "end": 3082
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3085,
                        "end": 3086
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 3090,
                        "end": 3091
                      },
                      "start": 3085,
                      "end": 3091
                    },
                    "computed": false,
                    "start": 3077,
                    "end": 3091
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DotLHSPartial",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3122,
                      "end": 3135
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3138,
                        "end": 3139
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 3143,
                        "end": 3144
                      },
                      "start": 3138,
                      "end": 3144
                    },
                    "computed": false,
                    "start": 3122,
                    "end": 3144
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DotLHS",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3209,
                      "end": 3215
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3218,
                        "end": 3219
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 3223,
                        "end": 3224
                      },
                      "start": 3218,
                      "end": 3224
                    },
                    "computed": false,
                    "start": 3209,
                    "end": 3224
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IsStatement",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3267,
                      "end": 3278
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3281,
                        "end": 3282
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 3286,
                        "end": 3287
                      },
                      "start": 3281,
                      "end": 3287
                    },
                    "computed": false,
                    "start": 3267,
                    "end": 3287
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "StrictMode",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3320,
                      "end": 3330
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3333,
                        "end": 3334
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7",
                        "start": 3338,
                        "end": 3339
                      },
                      "start": 3333,
                      "end": 3339
                    },
                    "computed": false,
                    "start": 3320,
                    "end": 3339
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PossibleOptionalParameter",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3391,
                      "end": 3416
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3419,
                        "end": 3420
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 8,
                        "raw": "8",
                        "start": 3424,
                        "end": 3425
                      },
                      "start": 3419,
                      "end": 3425
                    },
                    "computed": false,
                    "start": 3391,
                    "end": 3425
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ClassBaseConstructorCall",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3435,
                      "end": 3459
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3462,
                        "end": 3463
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 9,
                        "raw": "9",
                        "start": 3467,
                        "end": 3468
                      },
                      "start": 3462,
                      "end": 3468
                    },
                    "computed": false,
                    "start": 3435,
                    "end": 3468
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "OptionalName",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3478,
                      "end": 3490
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3493,
                        "end": 3494
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 3498,
                        "end": 3500
                      },
                      "start": 3493,
                      "end": 3500
                    },
                    "computed": false,
                    "start": 3478,
                    "end": 3500
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SkipNextRParen",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3895,
                      "end": 3909
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3912,
                        "end": 3913
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 11,
                        "raw": "11",
                        "start": 3917,
                        "end": 3919
                      },
                      "start": 3912,
                      "end": 3919
                    },
                    "computed": false,
                    "start": 3895,
                    "end": 3919
                  }
                ],
                "start": 2819,
                "end": 3927
              },
              "const": false,
              "declare": false,
              "start": 2805,
              "end": 3927
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2798,
            "end": 3927
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "DeclFlags",
                "optional": false,
                "typeAnnotation": null,
                "start": 3945,
                "end": 3954
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "None",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3965,
                      "end": 3969
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 3972,
                      "end": 3973
                    },
                    "computed": false,
                    "start": 3965,
                    "end": 3973
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Exported",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3983,
                      "end": 3991
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3994,
                      "end": 3995
                    },
                    "computed": false,
                    "start": 3983,
                    "end": 3995
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4005,
                      "end": 4012
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4015,
                        "end": 4016
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4020,
                        "end": 4021
                      },
                      "start": 4015,
                      "end": 4021
                    },
                    "computed": false,
                    "start": 4005,
                    "end": 4021
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4031,
                      "end": 4037
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4040,
                        "end": 4041
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 4045,
                        "end": 4046
                      },
                      "start": 4040,
                      "end": 4046
                    },
                    "computed": false,
                    "start": 4031,
                    "end": 4046
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Ambient",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4056,
                      "end": 4063
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4066,
                        "end": 4067
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 4071,
                        "end": 4072
                      },
                      "start": 4066,
                      "end": 4072
                    },
                    "computed": false,
                    "start": 4056,
                    "end": 4072
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Static",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4082,
                      "end": 4088
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4091,
                        "end": 4092
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 4096,
                        "end": 4097
                      },
                      "start": 4091,
                      "end": 4097
                    },
                    "computed": false,
                    "start": 4082,
                    "end": 4097
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LocalStatic",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4107,
                      "end": 4118
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4121,
                        "end": 4122
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 4126,
                        "end": 4127
                      },
                      "start": 4121,
                      "end": 4127
                    },
                    "computed": false,
                    "start": 4107,
                    "end": 4127
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "GetAccessor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4137,
                      "end": 4148
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4151,
                        "end": 4152
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 4156,
                        "end": 4157
                      },
                      "start": 4151,
                      "end": 4157
                    },
                    "computed": false,
                    "start": 4137,
                    "end": 4157
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SetAccessor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4167,
                      "end": 4178
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4181,
                        "end": 4182
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7",
                        "start": 4186,
                        "end": 4187
                      },
                      "start": 4181,
                      "end": 4187
                    },
                    "computed": false,
                    "start": 4167,
                    "end": 4187
                  }
                ],
                "start": 3955,
                "end": 4194
              },
              "const": false,
              "declare": false,
              "start": 3940,
              "end": 4194
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3933,
            "end": 4194
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ModuleFlags",
                "optional": false,
                "typeAnnotation": null,
                "start": 4212,
                "end": 4223
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "None",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4234,
                      "end": 4238
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 4241,
                      "end": 4242
                    },
                    "computed": false,
                    "start": 4234,
                    "end": 4242
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Exported",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4252,
                      "end": 4260
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 4263,
                      "end": 4264
                    },
                    "computed": false,
                    "start": 4252,
                    "end": 4264
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4274,
                      "end": 4281
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4284,
                        "end": 4285
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4289,
                        "end": 4290
                      },
                      "start": 4284,
                      "end": 4290
                    },
                    "computed": false,
                    "start": 4274,
                    "end": 4290
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4300,
                      "end": 4306
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4309,
                        "end": 4310
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 4314,
                        "end": 4315
                      },
                      "start": 4309,
                      "end": 4315
                    },
                    "computed": false,
                    "start": 4300,
                    "end": 4315
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Ambient",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4325,
                      "end": 4332
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4335,
                        "end": 4336
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 4340,
                        "end": 4341
                      },
                      "start": 4335,
                      "end": 4341
                    },
                    "computed": false,
                    "start": 4325,
                    "end": 4341
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Static",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4351,
                      "end": 4357
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4360,
                        "end": 4361
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 4365,
                        "end": 4366
                      },
                      "start": 4360,
                      "end": 4366
                    },
                    "computed": false,
                    "start": 4351,
                    "end": 4366
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LocalStatic",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4376,
                      "end": 4387
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4390,
                        "end": 4391
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 4395,
                        "end": 4396
                      },
                      "start": 4390,
                      "end": 4396
                    },
                    "computed": false,
                    "start": 4376,
                    "end": 4396
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "GetAccessor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4406,
                      "end": 4417
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4420,
                        "end": 4421
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 4425,
                        "end": 4426
                      },
                      "start": 4420,
                      "end": 4426
                    },
                    "computed": false,
                    "start": 4406,
                    "end": 4426
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SetAccessor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4436,
                      "end": 4447
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4450,
                        "end": 4451
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7",
                        "start": 4455,
                        "end": 4456
                      },
                      "start": 4450,
                      "end": 4456
                    },
                    "computed": false,
                    "start": 4436,
                    "end": 4456
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IsEnum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4466,
                      "end": 4472
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4475,
                        "end": 4476
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 8,
                        "raw": "8",
                        "start": 4480,
                        "end": 4481
                      },
                      "start": 4475,
                      "end": 4481
                    },
                    "computed": false,
                    "start": 4466,
                    "end": 4481
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ShouldEmitModuleDecl",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4491,
                      "end": 4511
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4514,
                        "end": 4515
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 9,
                        "raw": "9",
                        "start": 4519,
                        "end": 4520
                      },
                      "start": 4514,
                      "end": 4520
                    },
                    "computed": false,
                    "start": 4491,
                    "end": 4520
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IsWholeFile",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4530,
                      "end": 4541
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4544,
                        "end": 4545
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 4549,
                        "end": 4551
                      },
                      "start": 4544,
                      "end": 4551
                    },
                    "computed": false,
                    "start": 4530,
                    "end": 4551
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IsDynamic",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4561,
                      "end": 4570
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4573,
                        "end": 4574
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 11,
                        "raw": "11",
                        "start": 4578,
                        "end": 4580
                      },
                      "start": 4573,
                      "end": 4580
                    },
                    "computed": false,
                    "start": 4561,
                    "end": 4580
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MustCaptureThis",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4590,
                      "end": 4605
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4608,
                        "end": 4609
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12",
                        "start": 4613,
                        "end": 4615
                      },
                      "start": 4608,
                      "end": 4615
                    },
                    "computed": false,
                    "start": 4590,
                    "end": 4615
                  }
                ],
                "start": 4224,
                "end": 4622
              },
              "const": false,
              "declare": false,
              "start": 4207,
              "end": 4622
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4200,
            "end": 4622
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "SymbolFlags",
                "optional": false,
                "typeAnnotation": null,
                "start": 4640,
                "end": 4651
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "None",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4662,
                      "end": 4666
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 4669,
                      "end": 4670
                    },
                    "computed": false,
                    "start": 4662,
                    "end": 4670
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Exported",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4680,
                      "end": 4688
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 4691,
                      "end": 4692
                    },
                    "computed": false,
                    "start": 4680,
                    "end": 4692
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4702,
                      "end": 4709
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4712,
                        "end": 4713
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4717,
                        "end": 4718
                      },
                      "start": 4712,
                      "end": 4718
                    },
                    "computed": false,
                    "start": 4702,
                    "end": 4718
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4728,
                      "end": 4734
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4737,
                        "end": 4738
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 4742,
                        "end": 4743
                      },
                      "start": 4737,
                      "end": 4743
                    },
                    "computed": false,
                    "start": 4728,
                    "end": 4743
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Ambient",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4753,
                      "end": 4760
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4763,
                        "end": 4764
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 4768,
                        "end": 4769
                      },
                      "start": 4763,
                      "end": 4769
                    },
                    "computed": false,
                    "start": 4753,
                    "end": 4769
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Static",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4779,
                      "end": 4785
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4788,
                        "end": 4789
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 4793,
                        "end": 4794
                      },
                      "start": 4788,
                      "end": 4794
                    },
                    "computed": false,
                    "start": 4779,
                    "end": 4794
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LocalStatic",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4804,
                      "end": 4815
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4818,
                        "end": 4819
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 4823,
                        "end": 4824
                      },
                      "start": 4818,
                      "end": 4824
                    },
                    "computed": false,
                    "start": 4804,
                    "end": 4824
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "GetAccessor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4834,
                      "end": 4845
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4848,
                        "end": 4849
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 4853,
                        "end": 4854
                      },
                      "start": 4848,
                      "end": 4854
                    },
                    "computed": false,
                    "start": 4834,
                    "end": 4854
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SetAccessor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4864,
                      "end": 4875
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4878,
                        "end": 4879
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7",
                        "start": 4883,
                        "end": 4884
                      },
                      "start": 4878,
                      "end": 4884
                    },
                    "computed": false,
                    "start": 4864,
                    "end": 4884
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Property",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4894,
                      "end": 4902
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4905,
                        "end": 4906
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 8,
                        "raw": "8",
                        "start": 4910,
                        "end": 4911
                      },
                      "start": 4905,
                      "end": 4911
                    },
                    "computed": false,
                    "start": 4894,
                    "end": 4911
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4921,
                      "end": 4929
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4932,
                        "end": 4933
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 9,
                        "raw": "9",
                        "start": 4937,
                        "end": 4938
                      },
                      "start": 4932,
                      "end": 4938
                    },
                    "computed": false,
                    "start": 4921,
                    "end": 4938
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ModuleMember",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4948,
                      "end": 4960
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4963,
                        "end": 4964
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 4968,
                        "end": 4970
                      },
                      "start": 4963,
                      "end": 4970
                    },
                    "computed": false,
                    "start": 4948,
                    "end": 4970
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InterfaceMember",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4980,
                      "end": 4995
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4998,
                        "end": 4999
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 11,
                        "raw": "11",
                        "start": 5003,
                        "end": 5005
                      },
                      "start": 4998,
                      "end": 5005
                    },
                    "computed": false,
                    "start": 4980,
                    "end": 5005
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ClassMember",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5015,
                      "end": 5026
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5029,
                        "end": 5030
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12",
                        "start": 5034,
                        "end": 5036
                      },
                      "start": 5029,
                      "end": 5036
                    },
                    "computed": false,
                    "start": 5015,
                    "end": 5036
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "BuiltIn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5046,
                      "end": 5053
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5056,
                        "end": 5057
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 13,
                        "raw": "13",
                        "start": 5061,
                        "end": 5063
                      },
                      "start": 5056,
                      "end": 5063
                    },
                    "computed": false,
                    "start": 5046,
                    "end": 5063
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TypeSetDuringScopeAssignment",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5073,
                      "end": 5101
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5104,
                        "end": 5105
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 14,
                        "raw": "14",
                        "start": 5109,
                        "end": 5111
                      },
                      "start": 5104,
                      "end": 5111
                    },
                    "computed": false,
                    "start": 5073,
                    "end": 5111
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Constant",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5121,
                      "end": 5129
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5132,
                        "end": 5133
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 15,
                        "raw": "15",
                        "start": 5137,
                        "end": 5139
                      },
                      "start": 5132,
                      "end": 5139
                    },
                    "computed": false,
                    "start": 5121,
                    "end": 5139
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Optional",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5149,
                      "end": 5157
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5160,
                        "end": 5161
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 16,
                        "raw": "16",
                        "start": 5165,
                        "end": 5167
                      },
                      "start": 5160,
                      "end": 5167
                    },
                    "computed": false,
                    "start": 5149,
                    "end": 5167
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RecursivelyReferenced",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5177,
                      "end": 5198
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5201,
                        "end": 5202
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 17,
                        "raw": "17",
                        "start": 5206,
                        "end": 5208
                      },
                      "start": 5201,
                      "end": 5208
                    },
                    "computed": false,
                    "start": 5177,
                    "end": 5208
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Bound",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5218,
                      "end": 5223
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5226,
                        "end": 5227
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 18,
                        "raw": "18",
                        "start": 5231,
                        "end": 5233
                      },
                      "start": 5226,
                      "end": 5233
                    },
                    "computed": false,
                    "start": 5218,
                    "end": 5233
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CompilerGenerated",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5243,
                      "end": 5260
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5263,
                        "end": 5264
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 19,
                        "raw": "19",
                        "start": 5268,
                        "end": 5270
                      },
                      "start": 5263,
                      "end": 5270
                    },
                    "computed": false,
                    "start": 5243,
                    "end": 5270
                  }
                ],
                "start": 4652,
                "end": 5277
              },
              "const": false,
              "declare": false,
              "start": 4635,
              "end": 5277
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4628,
            "end": 5277
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "VarFlags",
                "optional": false,
                "typeAnnotation": null,
                "start": 5295,
                "end": 5303
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "None",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5314,
                      "end": 5318
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 5321,
                      "end": 5322
                    },
                    "computed": false,
                    "start": 5314,
                    "end": 5322
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Exported",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5332,
                      "end": 5340
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 5343,
                      "end": 5344
                    },
                    "computed": false,
                    "start": 5332,
                    "end": 5344
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5354,
                      "end": 5361
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5364,
                        "end": 5365
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5369,
                        "end": 5370
                      },
                      "start": 5364,
                      "end": 5370
                    },
                    "computed": false,
                    "start": 5354,
                    "end": 5370
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5380,
                      "end": 5386
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5389,
                        "end": 5390
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 5394,
                        "end": 5395
                      },
                      "start": 5389,
                      "end": 5395
                    },
                    "computed": false,
                    "start": 5380,
                    "end": 5395
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Ambient",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5405,
                      "end": 5412
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5415,
                        "end": 5416
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 5420,
                        "end": 5421
                      },
                      "start": 5415,
                      "end": 5421
                    },
                    "computed": false,
                    "start": 5405,
                    "end": 5421
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Static",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5431,
                      "end": 5437
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5440,
                        "end": 5441
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 5445,
                        "end": 5446
                      },
                      "start": 5440,
                      "end": 5446
                    },
                    "computed": false,
                    "start": 5431,
                    "end": 5446
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LocalStatic",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5456,
                      "end": 5467
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5470,
                        "end": 5471
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 5475,
                        "end": 5476
                      },
                      "start": 5470,
                      "end": 5476
                    },
                    "computed": false,
                    "start": 5456,
                    "end": 5476
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "GetAccessor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5486,
                      "end": 5497
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5500,
                        "end": 5501
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 5505,
                        "end": 5506
                      },
                      "start": 5500,
                      "end": 5506
                    },
                    "computed": false,
                    "start": 5486,
                    "end": 5506
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SetAccessor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5516,
                      "end": 5527
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5530,
                        "end": 5531
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7",
                        "start": 5535,
                        "end": 5536
                      },
                      "start": 5530,
                      "end": 5536
                    },
                    "computed": false,
                    "start": 5516,
                    "end": 5536
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AutoInit",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5546,
                      "end": 5554
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5557,
                        "end": 5558
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 8,
                        "raw": "8",
                        "start": 5562,
                        "end": 5563
                      },
                      "start": 5557,
                      "end": 5563
                    },
                    "computed": false,
                    "start": 5546,
                    "end": 5563
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Property",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5573,
                      "end": 5581
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5584,
                        "end": 5585
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 9,
                        "raw": "9",
                        "start": 5589,
                        "end": 5590
                      },
                      "start": 5584,
                      "end": 5590
                    },
                    "computed": false,
                    "start": 5573,
                    "end": 5590
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5600,
                      "end": 5608
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5611,
                        "end": 5612
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 5616,
                        "end": 5618
                      },
                      "start": 5611,
                      "end": 5618
                    },
                    "computed": false,
                    "start": 5600,
                    "end": 5618
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Class",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5628,
                      "end": 5633
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5636,
                        "end": 5637
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 11,
                        "raw": "11",
                        "start": 5641,
                        "end": 5643
                      },
                      "start": 5636,
                      "end": 5643
                    },
                    "computed": false,
                    "start": 5628,
                    "end": 5643
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ClassProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5653,
                      "end": 5666
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5669,
                        "end": 5670
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12",
                        "start": 5674,
                        "end": 5676
                      },
                      "start": 5669,
                      "end": 5676
                    },
                    "computed": false,
                    "start": 5653,
                    "end": 5676
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ClassBodyProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5686,
                      "end": 5703
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5706,
                        "end": 5707
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 13,
                        "raw": "13",
                        "start": 5711,
                        "end": 5713
                      },
                      "start": 5706,
                      "end": 5713
                    },
                    "computed": false,
                    "start": 5686,
                    "end": 5713
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ClassConstructorProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5723,
                      "end": 5747
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5750,
                        "end": 5751
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 14,
                        "raw": "14",
                        "start": 5755,
                        "end": 5757
                      },
                      "start": 5750,
                      "end": 5757
                    },
                    "computed": false,
                    "start": 5723,
                    "end": 5757
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ClassSuperMustBeFirstCallInConstructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5767,
                      "end": 5805
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5808,
                        "end": 5809
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 15,
                        "raw": "15",
                        "start": 5813,
                        "end": 5815
                      },
                      "start": 5808,
                      "end": 5815
                    },
                    "computed": false,
                    "start": 5767,
                    "end": 5815
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Constant",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5825,
                      "end": 5833
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5836,
                        "end": 5837
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 16,
                        "raw": "16",
                        "start": 5841,
                        "end": 5843
                      },
                      "start": 5836,
                      "end": 5843
                    },
                    "computed": false,
                    "start": 5825,
                    "end": 5843
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MustCaptureThis",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5853,
                      "end": 5868
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5871,
                        "end": 5872
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 17,
                        "raw": "17",
                        "start": 5876,
                        "end": 5878
                      },
                      "start": 5871,
                      "end": 5878
                    },
                    "computed": false,
                    "start": 5853,
                    "end": 5878
                  }
                ],
                "start": 5304,
                "end": 5885
              },
              "const": false,
              "declare": false,
              "start": 5290,
              "end": 5885
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5283,
            "end": 5885
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "FncFlags",
                "optional": false,
                "typeAnnotation": null,
                "start": 5903,
                "end": 5911
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "None",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5922,
                      "end": 5926
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 5929,
                      "end": 5930
                    },
                    "computed": false,
                    "start": 5922,
                    "end": 5930
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Exported",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5940,
                      "end": 5948
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 5951,
                      "end": 5952
                    },
                    "computed": false,
                    "start": 5940,
                    "end": 5952
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5962,
                      "end": 5969
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5972,
                        "end": 5973
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5977,
                        "end": 5978
                      },
                      "start": 5972,
                      "end": 5978
                    },
                    "computed": false,
                    "start": 5962,
                    "end": 5978
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5988,
                      "end": 5994
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5997,
                        "end": 5998
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 6002,
                        "end": 6003
                      },
                      "start": 5997,
                      "end": 6003
                    },
                    "computed": false,
                    "start": 5988,
                    "end": 6003
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Ambient",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6013,
                      "end": 6020
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6023,
                        "end": 6024
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 6028,
                        "end": 6029
                      },
                      "start": 6023,
                      "end": 6029
                    },
                    "computed": false,
                    "start": 6013,
                    "end": 6029
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Static",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6039,
                      "end": 6045
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6048,
                        "end": 6049
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 6053,
                        "end": 6054
                      },
                      "start": 6048,
                      "end": 6054
                    },
                    "computed": false,
                    "start": 6039,
                    "end": 6054
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LocalStatic",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6064,
                      "end": 6075
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6078,
                        "end": 6079
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 6083,
                        "end": 6084
                      },
                      "start": 6078,
                      "end": 6084
                    },
                    "computed": false,
                    "start": 6064,
                    "end": 6084
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "GetAccessor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6094,
                      "end": 6105
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6108,
                        "end": 6109
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 6113,
                        "end": 6114
                      },
                      "start": 6108,
                      "end": 6114
                    },
                    "computed": false,
                    "start": 6094,
                    "end": 6114
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SetAccessor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6124,
                      "end": 6135
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6138,
                        "end": 6139
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7",
                        "start": 6143,
                        "end": 6144
                      },
                      "start": 6138,
                      "end": 6144
                    },
                    "computed": false,
                    "start": 6124,
                    "end": 6144
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Definition",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6154,
                      "end": 6164
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6167,
                        "end": 6168
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 8,
                        "raw": "8",
                        "start": 6172,
                        "end": 6173
                      },
                      "start": 6167,
                      "end": 6173
                    },
                    "computed": false,
                    "start": 6154,
                    "end": 6173
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Signature",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6183,
                      "end": 6192
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6195,
                        "end": 6196
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 9,
                        "raw": "9",
                        "start": 6200,
                        "end": 6201
                      },
                      "start": 6195,
                      "end": 6201
                    },
                    "computed": false,
                    "start": 6183,
                    "end": 6201
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Method",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6211,
                      "end": 6217
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6220,
                        "end": 6221
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 6225,
                        "end": 6227
                      },
                      "start": 6220,
                      "end": 6227
                    },
                    "computed": false,
                    "start": 6211,
                    "end": 6227
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HasReturnExpression",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6237,
                      "end": 6256
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6259,
                        "end": 6260
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 11,
                        "raw": "11",
                        "start": 6264,
                        "end": 6266
                      },
                      "start": 6259,
                      "end": 6266
                    },
                    "computed": false,
                    "start": 6237,
                    "end": 6266
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CallMember",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6276,
                      "end": 6286
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6289,
                        "end": 6290
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12",
                        "start": 6294,
                        "end": 6296
                      },
                      "start": 6289,
                      "end": 6296
                    },
                    "computed": false,
                    "start": 6276,
                    "end": 6296
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ConstructMember",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6306,
                      "end": 6321
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6324,
                        "end": 6325
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 13,
                        "raw": "13",
                        "start": 6329,
                        "end": 6331
                      },
                      "start": 6324,
                      "end": 6331
                    },
                    "computed": false,
                    "start": 6306,
                    "end": 6331
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HasSelfReference",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6341,
                      "end": 6357
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6360,
                        "end": 6361
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 14,
                        "raw": "14",
                        "start": 6365,
                        "end": 6367
                      },
                      "start": 6360,
                      "end": 6367
                    },
                    "computed": false,
                    "start": 6341,
                    "end": 6367
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IsFatArrowFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6377,
                      "end": 6395
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6398,
                        "end": 6399
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 15,
                        "raw": "15",
                        "start": 6403,
                        "end": 6405
                      },
                      "start": 6398,
                      "end": 6405
                    },
                    "computed": false,
                    "start": 6377,
                    "end": 6405
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IndexerMember",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6415,
                      "end": 6428
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6431,
                        "end": 6432
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 16,
                        "raw": "16",
                        "start": 6436,
                        "end": 6438
                      },
                      "start": 6431,
                      "end": 6438
                    },
                    "computed": false,
                    "start": 6415,
                    "end": 6438
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IsFunctionExpression",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6448,
                      "end": 6468
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6471,
                        "end": 6472
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 17,
                        "raw": "17",
                        "start": 6476,
                        "end": 6478
                      },
                      "start": 6471,
                      "end": 6478
                    },
                    "computed": false,
                    "start": 6448,
                    "end": 6478
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ClassMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6488,
                      "end": 6499
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6502,
                        "end": 6503
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 18,
                        "raw": "18",
                        "start": 6507,
                        "end": 6509
                      },
                      "start": 6502,
                      "end": 6509
                    },
                    "computed": false,
                    "start": 6488,
                    "end": 6509
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ClassPropertyMethodExported",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6519,
                      "end": 6546
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6549,
                        "end": 6550
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 19,
                        "raw": "19",
                        "start": 6554,
                        "end": 6556
                      },
                      "start": 6549,
                      "end": 6556
                    },
                    "computed": false,
                    "start": 6519,
                    "end": 6556
                  }
                ],
                "start": 5912,
                "end": 6563
              },
              "const": false,
              "declare": false,
              "start": 5898,
              "end": 6563
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5891,
            "end": 6563
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "SignatureFlags",
                "optional": false,
                "typeAnnotation": null,
                "start": 6581,
                "end": 6595
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "None",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6606,
                      "end": 6610
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 6613,
                      "end": 6614
                    },
                    "computed": false,
                    "start": 6606,
                    "end": 6614
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IsIndexer",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6624,
                      "end": 6633
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 6636,
                      "end": 6637
                    },
                    "computed": false,
                    "start": 6624,
                    "end": 6637
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IsStringIndexer",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6647,
                      "end": 6662
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6665,
                        "end": 6666
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6670,
                        "end": 6671
                      },
                      "start": 6665,
                      "end": 6671
                    },
                    "computed": false,
                    "start": 6647,
                    "end": 6671
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IsNumberIndexer",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6681,
                      "end": 6696
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6699,
                        "end": 6700
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 6704,
                        "end": 6705
                      },
                      "start": 6699,
                      "end": 6705
                    },
                    "computed": false,
                    "start": 6681,
                    "end": 6705
                  }
                ],
                "start": 6596,
                "end": 6712
              },
              "const": false,
              "declare": false,
              "start": 6576,
              "end": 6712
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6569,
            "end": 6712
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ToDeclFlags",
                "optional": false,
                "typeAnnotation": null,
                "start": 6734,
                "end": 6745
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fncFlags",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FncFlags",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6756,
                        "end": 6764
                      },
                      "typeArguments": null,
                      "start": 6756,
                      "end": 6764
                    },
                    "start": 6754,
                    "end": 6764
                  },
                  "start": 6746,
                  "end": 6764
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DeclFlags",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6768,
                    "end": 6777
                  },
                  "typeArguments": null,
                  "start": 6768,
                  "end": 6777
                },
                "start": 6766,
                "end": 6777
              },
              "body": null,
              "expression": false,
              "start": 6725,
              "end": 6778
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6718,
            "end": 6778
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ToDeclFlags",
                "optional": false,
                "typeAnnotation": null,
                "start": 6799,
                "end": 6810
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "varFlags",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "VarFlags",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6821,
                        "end": 6829
                      },
                      "typeArguments": null,
                      "start": 6821,
                      "end": 6829
                    },
                    "start": 6819,
                    "end": 6829
                  },
                  "start": 6811,
                  "end": 6829
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DeclFlags",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6833,
                    "end": 6842
                  },
                  "typeArguments": null,
                  "start": 6833,
                  "end": 6842
                },
                "start": 6831,
                "end": 6842
              },
              "body": null,
              "expression": false,
              "start": 6790,
              "end": 6843
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6783,
            "end": 6843
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ToDeclFlags",
                "optional": false,
                "typeAnnotation": null,
                "start": 6864,
                "end": 6875
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "symFlags",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SymbolFlags",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6886,
                        "end": 6897
                      },
                      "typeArguments": null,
                      "start": 6886,
                      "end": 6897
                    },
                    "start": 6884,
                    "end": 6897
                  },
                  "start": 6876,
                  "end": 6897
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DeclFlags",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6900,
                    "end": 6909
                  },
                  "typeArguments": null,
                  "start": 6900,
                  "end": 6909
                },
                "start": 6898,
                "end": 6909
              },
              "body": null,
              "expression": false,
              "start": 6855,
              "end": 6910
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6848,
            "end": 6910
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ToDeclFlags",
                "optional": false,
                "typeAnnotation": null,
                "start": 6931,
                "end": 6942
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "moduleFlags",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ModuleFlags",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6956,
                        "end": 6967
                      },
                      "typeArguments": null,
                      "start": 6956,
                      "end": 6967
                    },
                    "start": 6954,
                    "end": 6967
                  },
                  "start": 6943,
                  "end": 6967
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DeclFlags",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6970,
                    "end": 6979
                  },
                  "typeArguments": null,
                  "start": 6970,
                  "end": 6979
                },
                "start": 6968,
                "end": 6979
              },
              "body": null,
              "expression": false,
              "start": 6922,
              "end": 6980
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6915,
            "end": 6980
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ToDeclFlags",
                "optional": false,
                "typeAnnotation": null,
                "start": 7001,
                "end": 7012
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fncOrVarOrSymbolOrModuleFlags",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 7044,
                      "end": 7047
                    },
                    "start": 7042,
                    "end": 7047
                  },
                  "start": 7013,
                  "end": 7047
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "DeclFlags",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7067,
                          "end": 7076
                        },
                        "typeArguments": null,
                        "start": 7067,
                        "end": 7076
                      },
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fncOrVarOrSymbolOrModuleFlags",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7077,
                        "end": 7106
                      },
                      "start": 7066,
                      "end": 7106
                    },
                    "start": 7059,
                    "end": 7107
                  }
                ],
                "start": 7049,
                "end": 7113
              },
              "expression": false,
              "start": 6992,
              "end": 7113
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6985,
            "end": 7113
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "TypeFlags",
                "optional": false,
                "typeAnnotation": null,
                "start": 7131,
                "end": 7140
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "None",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7151,
                      "end": 7155
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 7158,
                      "end": 7159
                    },
                    "computed": false,
                    "start": 7151,
                    "end": 7159
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HasImplementation",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7169,
                      "end": 7186
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 7189,
                      "end": 7190
                    },
                    "computed": false,
                    "start": 7169,
                    "end": 7190
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HasSelfReference",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7200,
                      "end": 7216
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 7219,
                        "end": 7220
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 7224,
                        "end": 7225
                      },
                      "start": 7219,
                      "end": 7225
                    },
                    "computed": false,
                    "start": 7200,
                    "end": 7225
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MergeResult",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7235,
                      "end": 7246
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 7249,
                        "end": 7250
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 7254,
                        "end": 7255
                      },
                      "start": 7249,
                      "end": 7255
                    },
                    "computed": false,
                    "start": 7235,
                    "end": 7255
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IsEnum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7265,
                      "end": 7271
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 7274,
                        "end": 7275
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 7279,
                        "end": 7280
                      },
                      "start": 7274,
                      "end": 7280
                    },
                    "computed": false,
                    "start": 7265,
                    "end": 7280
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "BuildingName",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7290,
                      "end": 7302
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 7305,
                        "end": 7306
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 7310,
                        "end": 7311
                      },
                      "start": 7305,
                      "end": 7311
                    },
                    "computed": false,
                    "start": 7290,
                    "end": 7311
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HasBaseType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7321,
                      "end": 7332
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 7335,
                        "end": 7336
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 7340,
                        "end": 7341
                      },
                      "start": 7335,
                      "end": 7341
                    },
                    "computed": false,
                    "start": 7321,
                    "end": 7341
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HasBaseTypeOfObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7351,
                      "end": 7370
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 7373,
                        "end": 7374
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 7378,
                        "end": 7379
                      },
                      "start": 7373,
                      "end": 7379
                    },
                    "computed": false,
                    "start": 7351,
                    "end": 7379
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IsClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7389,
                      "end": 7396
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 7399,
                        "end": 7400
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7",
                        "start": 7404,
                        "end": 7405
                      },
                      "start": 7399,
                      "end": 7405
                    },
                    "computed": false,
                    "start": 7389,
                    "end": 7405
                  }
                ],
                "start": 7141,
                "end": 7412
              },
              "const": false,
              "declare": false,
              "start": 7126,
              "end": 7412
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 7119,
            "end": 7412
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "TypeRelationshipFlags",
                "optional": false,
                "typeAnnotation": null,
                "start": 7430,
                "end": 7451
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SuccessfulComparison",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7462,
                      "end": 7482
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 7485,
                      "end": 7486
                    },
                    "computed": false,
                    "start": 7462,
                    "end": 7486
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SourceIsNullTargetIsVoidOrUndefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7496,
                      "end": 7531
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 7534,
                      "end": 7535
                    },
                    "computed": false,
                    "start": 7496,
                    "end": 7535
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RequiredPropertyIsMissing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7545,
                      "end": 7570
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 7573,
                        "end": 7574
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 7578,
                        "end": 7579
                      },
                      "start": 7573,
                      "end": 7579
                    },
                    "computed": false,
                    "start": 7545,
                    "end": 7579
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IncompatibleSignatures",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7589,
                      "end": 7611
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 7614,
                        "end": 7615
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 7619,
                        "end": 7620
                      },
                      "start": 7614,
                      "end": 7620
                    },
                    "computed": false,
                    "start": 7589,
                    "end": 7620
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SourceSignatureHasTooManyParameters",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7630,
                      "end": 7665
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 7668,
                      "end": 7669
                    },
                    "computed": false,
                    "start": 7630,
                    "end": 7669
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IncompatibleReturnTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7679,
                      "end": 7702
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 7705,
                        "end": 7706
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 7710,
                        "end": 7711
                      },
                      "start": 7705,
                      "end": 7711
                    },
                    "computed": false,
                    "start": 7679,
                    "end": 7711
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IncompatiblePropertyTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7721,
                      "end": 7746
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 7749,
                        "end": 7750
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 7754,
                        "end": 7755
                      },
                      "start": 7749,
                      "end": 7755
                    },
                    "computed": false,
                    "start": 7721,
                    "end": 7755
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IncompatibleParameterTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7765,
                      "end": 7791
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 7794,
                        "end": 7795
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 7799,
                        "end": 7800
                      },
                      "start": 7794,
                      "end": 7800
                    },
                    "computed": false,
                    "start": 7765,
                    "end": 7800
                  }
                ],
                "start": 7452,
                "end": 7807
              },
              "const": false,
              "declare": false,
              "start": 7425,
              "end": 7807
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 7418,
            "end": 7807
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "CodeGenTarget",
                "optional": false,
                "typeAnnotation": null,
                "start": 7825,
                "end": 7838
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ES3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7849,
                      "end": 7852
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 7855,
                      "end": 7856
                    },
                    "computed": false,
                    "start": 7849,
                    "end": 7856
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ES5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7866,
                      "end": 7869
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 7872,
                      "end": 7873
                    },
                    "computed": false,
                    "start": 7866,
                    "end": 7873
                  }
                ],
                "start": 7839,
                "end": 7880
              },
              "const": false,
              "declare": false,
              "start": 7820,
              "end": 7880
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 7813,
            "end": 7880
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ModuleGenTarget",
                "optional": false,
                "typeAnnotation": null,
                "start": 7898,
                "end": 7913
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Synchronous",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7924,
                      "end": 7935
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 7938,
                      "end": 7939
                    },
                    "computed": false,
                    "start": 7924,
                    "end": 7939
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Asynchronous",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7949,
                      "end": 7961
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 7964,
                      "end": 7965
                    },
                    "computed": false,
                    "start": 7949,
                    "end": 7965
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Local",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7975,
                      "end": 7980
                    },
                    "initializer": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 7983,
                        "end": 7984
                      },
                      "operator": "<<",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 7988,
                        "end": 7989
                      },
                      "start": 7983,
                      "end": 7989
                    },
                    "computed": false,
                    "start": 7975,
                    "end": 7989
                  }
                ],
                "start": 7914,
                "end": 7996
              },
              "const": false,
              "declare": false,
              "start": 7893,
              "end": 7996
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 7886,
            "end": 7996
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "codeGenTarget",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "CodeGenTarget",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8120,
                          "end": 8133
                        },
                        "typeArguments": null,
                        "start": 8120,
                        "end": 8133
                      },
                      "start": 8118,
                      "end": 8133
                    },
                    "start": 8105,
                    "end": 8133
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CodeGenTarget",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8136,
                      "end": 8149
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ES3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8150,
                      "end": 8153
                    },
                    "optional": false,
                    "computed": false,
                    "start": 8136,
                    "end": 8153
                  },
                  "definite": false,
                  "start": 8105,
                  "end": 8153
                }
              ],
              "declare": false,
              "start": 8101,
              "end": 8154
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 8094,
            "end": 8154
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "moduleGenTarget",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ModuleGenTarget",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8188,
                          "end": 8203
                        },
                        "typeArguments": null,
                        "start": 8188,
                        "end": 8203
                      },
                      "start": 8186,
                      "end": 8203
                    },
                    "start": 8171,
                    "end": 8203
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ModuleGenTarget",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8206,
                      "end": 8221
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Synchronous",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8222,
                      "end": 8233
                    },
                    "optional": false,
                    "computed": false,
                    "start": 8206,
                    "end": 8233
                  },
                  "definite": false,
                  "start": 8171,
                  "end": 8233
                }
              ],
              "declare": false,
              "start": 8167,
              "end": 8234
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 8160,
            "end": 8234
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "optimizeModuleCodeGen",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8251,
                    "end": 8272
                  },
                  "init": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 8275,
                    "end": 8279
                  },
                  "definite": false,
                  "start": 8251,
                  "end": 8279
                }
              ],
              "declare": false,
              "start": 8247,
              "end": 8280
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 8240,
            "end": 8280
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "flagsToString",
                "optional": false,
                "typeAnnotation": null,
                "start": 8302,
                "end": 8315
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8316,
                  "end": 8317
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "flags",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 8326,
                      "end": 8332
                    },
                    "start": 8324,
                    "end": 8332
                  },
                  "start": 8319,
                  "end": 8332
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 8335,
                  "end": 8341
                },
                "start": 8333,
                "end": 8341
              },
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
                          "name": "builder",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8356,
                          "end": 8363
                        },
                        "init": {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 8366,
                          "end": 8368
                        },
                        "definite": false,
                        "start": 8356,
                        "end": 8368
                      }
                    ],
                    "declare": false,
                    "start": 8352,
                    "end": 8369
                  },
                  {
                    "type": "ForStatement",
                    "init": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8387,
                            "end": 8388
                          },
                          "init": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 8391,
                            "end": 8392
                          },
                          "definite": false,
                          "start": 8387,
                          "end": 8392
                        }
                      ],
                      "declare": false,
                      "start": 8383,
                      "end": 8392
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8394,
                        "end": 8395
                      },
                      "operator": "<",
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 8399,
                          "end": 8400
                        },
                        "operator": "<<",
                        "right": {
                          "type": "Literal",
                          "value": 31,
                          "raw": "31",
                          "start": 8404,
                          "end": 8406
                        },
                        "start": 8399,
                        "end": 8406
                      },
                      "start": 8394,
                      "end": 8407
                    },
                    "update": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8410,
                        "end": 8411
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8414,
                          "end": 8415
                        },
                        "operator": "<<",
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 8419,
                          "end": 8420
                        },
                        "start": 8414,
                        "end": 8420
                      },
                      "start": 8410,
                      "end": 8420
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "flags",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8441,
                                "end": 8446
                              },
                              "operator": "&",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8449,
                                "end": 8450
                              },
                              "start": 8441,
                              "end": 8450
                            },
                            "operator": "!=",
                            "right": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 8455,
                              "end": 8456
                            },
                            "start": 8440,
                            "end": 8456
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ForInStatement",
                                "left": {
                                  "type": "VariableDeclaration",
                                  "kind": "var",
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "id": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "k",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 8485,
                                        "end": 8486
                                      },
                                      "init": null,
                                      "definite": false,
                                      "start": 8485,
                                      "end": 8486
                                    }
                                  ],
                                  "declare": false,
                                  "start": 8481,
                                  "end": 8486
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "e",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8490,
                                  "end": 8491
                                },
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "IfStatement",
                                      "test": {
                                        "type": "BinaryExpression",
                                        "left": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "e",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8519,
                                            "end": 8520
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "k",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 8521,
                                            "end": 8522
                                          },
                                          "optional": false,
                                          "computed": true,
                                          "start": 8519,
                                          "end": 8523
                                        },
                                        "operator": "==",
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 8527,
                                          "end": 8528
                                        },
                                        "start": 8519,
                                        "end": 8528
                                      },
                                      "consequent": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "IfStatement",
                                            "test": {
                                              "type": "BinaryExpression",
                                              "left": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "builder",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 8560,
                                                  "end": 8567
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "length",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 8568,
                                                  "end": 8574
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 8560,
                                                "end": 8574
                                              },
                                              "operator": ">",
                                              "right": {
                                                "type": "Literal",
                                                "value": 0,
                                                "raw": "0",
                                                "start": 8577,
                                                "end": 8578
                                              },
                                              "start": 8560,
                                              "end": 8578
                                            },
                                            "consequent": {
                                              "type": "BlockStatement",
                                              "body": [
                                                {
                                                  "type": "ExpressionStatement",
                                                  "expression": {
                                                    "type": "AssignmentExpression",
                                                    "operator": "+=",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "builder",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 8610,
                                                      "end": 8617
                                                    },
                                                    "right": {
                                                      "type": "Literal",
                                                      "value": "|",
                                                      "raw": "\"|\"",
                                                      "start": 8621,
                                                      "end": 8624
                                                    },
                                                    "start": 8610,
                                                    "end": 8624
                                                  },
                                                  "directive": null,
                                                  "start": 8610,
                                                  "end": 8625
                                                }
                                              ],
                                              "start": 8580,
                                              "end": 8651
                                            },
                                            "alternate": null,
                                            "start": 8556,
                                            "end": 8651
                                          },
                                          {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                              "type": "AssignmentExpression",
                                              "operator": "+=",
                                              "left": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "builder",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 8676,
                                                "end": 8683
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "k",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 8687,
                                                "end": 8688
                                              },
                                              "start": 8676,
                                              "end": 8688
                                            },
                                            "directive": null,
                                            "start": 8676,
                                            "end": 8689
                                          },
                                          {
                                            "type": "BreakStatement",
                                            "label": null,
                                            "start": 8714,
                                            "end": 8720
                                          }
                                        ],
                                        "start": 8530,
                                        "end": 8742
                                      },
                                      "alternate": null,
                                      "start": 8515,
                                      "end": 8742
                                    }
                                  ],
                                  "start": 8493,
                                  "end": 8760
                                },
                                "start": 8476,
                                "end": 8760
                              }
                            ],
                            "start": 8458,
                            "end": 8774
                          },
                          "alternate": null,
                          "start": 8436,
                          "end": 8774
                        }
                      ],
                      "start": 8422,
                      "end": 8784
                    },
                    "start": 8378,
                    "end": 8784
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "builder",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8800,
                      "end": 8807
                    },
                    "start": 8793,
                    "end": 8808
                  }
                ],
                "start": 8342,
                "end": 8814
              },
              "expression": false,
              "start": 8293,
              "end": 8814
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 8286,
            "end": 8814
          }
        ],
        "start": 229,
        "end": 8817
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 211,
      "end": 8817
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 211,
  "end": 8817
}
```
