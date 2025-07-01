__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "EmptyStatement",
      "start": 32,
      "end": 33
    },
    {
      "type": "DebuggerStatement",
      "start": 68,
      "end": 77
    },
    {
      "type": "BlockStatement",
      "body": [],
      "start": 112,
      "end": 115
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 150,
          "end": 151
        },
        "operator": "+",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 154,
          "end": 155
        },
        "start": 150,
        "end": 155
      },
      "directive": null,
      "start": 150,
      "end": 156
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 195,
        "end": 200
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 202,
        "end": 205
      },
      "alternate": null,
      "start": 191,
      "end": 205
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 243,
        "end": 246
      },
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 254,
        "end": 259
      },
      "start": 240,
      "end": 261
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 303,
        "end": 308
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 310,
        "end": 313
      },
      "start": 296,
      "end": 313
    },
    {
      "type": "ForStatement",
      "init": null,
      "test": null,
      "update": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 356,
        "end": 361
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 363,
        "end": 366
      },
      "start": 348,
      "end": 366
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 410,
              "end": 411
            },
            "init": null,
            "definite": false,
            "start": 410,
            "end": 411
          }
        ],
        "declare": false,
        "start": 406,
        "end": 411
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 415,
        "end": 417
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 419,
        "end": 422
      },
      "start": 401,
      "end": 422
    },
    {
      "type": "BreakStatement",
      "label": null,
      "start": 457,
      "end": 463
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null,
              "start": 507,
              "end": 508
            },
            "init": null,
            "definite": false,
            "start": 507,
            "end": 508
          }
        ],
        "declare": false,
        "start": 503,
        "end": 508
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 512,
        "end": 514
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 516,
        "end": 519
      },
      "start": 498,
      "end": 519
    },
    {
      "type": "ContinueStatement",
      "label": null,
      "start": 554,
      "end": 563
    },
    {
      "type": "WithStatement",
      "object": {
        "type": "Identifier",
        "decorators": [],
        "name": "name",
        "optional": false,
        "typeAnnotation": null,
        "start": 604,
        "end": 608
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 610,
        "end": 613
      },
      "start": 598,
      "end": 613
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Identifier",
        "decorators": [],
        "name": "name",
        "optional": false,
        "typeAnnotation": null,
        "start": 656,
        "end": 660
      },
      "cases": [],
      "start": 648,
      "end": 665
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "fork",
        "optional": false,
        "typeAnnotation": null,
        "start": 701,
        "end": 705
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 714,
          "end": 719
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 721,
          "end": 724
        },
        "start": 707,
        "end": 724
      },
      "start": 701,
      "end": 724
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Error",
          "optional": false,
          "typeAnnotation": null,
          "start": 770,
          "end": 775
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "Unreachable",
            "raw": "'Unreachable'",
            "start": 776,
            "end": 789
          }
        ],
        "start": 766,
        "end": 790
      },
      "start": 760,
      "end": 790
    },
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [],
        "start": 830,
        "end": 833
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 841,
          "end": 842
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 844,
          "end": 847
        },
        "start": 834,
        "end": 847
      },
      "finalizer": null,
      "start": 826,
      "end": 847
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "proof",
        "optional": false,
        "typeAnnotation": null,
        "start": 1138,
        "end": 1143
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1145,
          "end": 1146
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1147,
          "end": 1148
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 1149,
          "end": 1150
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 1151,
          "end": 1152
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 1153,
          "end": 1154
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 1155,
          "end": 1156
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 1157,
          "end": 1158
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "h",
          "optional": false,
          "typeAnnotation": null,
          "start": 1159,
          "end": 1160
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1161,
          "end": 1162
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "j",
          "optional": false,
          "typeAnnotation": null,
          "start": 1163,
          "end": 1164
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 1165,
          "end": 1166
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": null,
          "start": 1167,
          "end": 1168
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": null,
          "start": 1169,
          "end": 1170
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 1171,
          "end": 1172
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null,
          "start": 1173,
          "end": 1174
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null,
          "start": 1175,
          "end": 1176
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "q",
          "optional": false,
          "typeAnnotation": null,
          "start": 1177,
          "end": 1178
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1186,
                  "end": 1193
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1194,
                  "end": 1197
                },
                "optional": false,
                "computed": false,
                "start": 1186,
                "end": 1197
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1198,
                    "end": 1199
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1200,
                    "end": 1201
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1198,
                  "end": 1201
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1203,
                    "end": 1204
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1205,
                    "end": 1206
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1203,
                  "end": 1206
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1208,
                    "end": 1209
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1210,
                    "end": 1211
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1208,
                  "end": 1211
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1213,
                    "end": 1214
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1215,
                    "end": 1216
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1213,
                  "end": 1216
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1218,
                    "end": 1219
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1220,
                    "end": 1221
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1218,
                  "end": 1221
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1223,
                    "end": 1224
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1225,
                    "end": 1226
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1223,
                  "end": 1226
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1228,
                    "end": 1229
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1230,
                    "end": 1231
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1228,
                  "end": 1231
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "h",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1233,
                    "end": 1234
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "h",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1235,
                    "end": 1236
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1233,
                  "end": 1236
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1238,
                    "end": 1239
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1240,
                    "end": 1241
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1238,
                  "end": 1241
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "j",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1243,
                    "end": 1244
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "j",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1245,
                    "end": 1246
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1243,
                  "end": 1246
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1248,
                    "end": 1249
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1250,
                    "end": 1251
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1248,
                  "end": 1251
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1253,
                    "end": 1254
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1255,
                    "end": 1256
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1253,
                  "end": 1256
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1258,
                    "end": 1259
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1260,
                    "end": 1261
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1258,
                  "end": 1261
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1263,
                    "end": 1264
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1265,
                    "end": 1266
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1263,
                  "end": 1266
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1268,
                    "end": 1269
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1270,
                    "end": 1271
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1268,
                  "end": 1271
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1273,
                    "end": 1274
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1275,
                    "end": 1276
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1273,
                  "end": 1276
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "q",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1278,
                    "end": 1279
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "q",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1280,
                    "end": 1281
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1278,
                  "end": 1281
                }
              ],
              "optional": false,
              "start": 1186,
              "end": 1282
            },
            "directive": null,
            "start": 1186,
            "end": 1282
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "alpha",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1316,
                  "end": 1321
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alpha",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1326,
                        "end": 1331
                      },
                      "value": {
                        "type": "Literal",
                        "value": "aleph",
                        "raw": "\"aleph\"",
                        "start": 1333,
                        "end": 1340
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1326,
                      "end": 1340
                    }
                  ],
                  "start": 1324,
                  "end": 1342
                },
                "definite": false,
                "start": 1316,
                "end": 1342
              }
            ],
            "declare": false,
            "start": 1312,
            "end": 1342
          },
          {
            "type": "ReturnStatement",
            "argument": null,
            "start": 1393,
            "end": 1399
          }
        ],
        "start": 1180,
        "end": 1401
      },
      "expression": false,
      "start": 1129,
      "end": 1401
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 32,
  "end": 1402
}
```
