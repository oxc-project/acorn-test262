__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 32,
  "end": 1402,
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
      "start": 112,
      "end": 115,
      "body": []
    },
    {
      "type": "ExpressionStatement",
      "start": 150,
      "end": 156,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 150,
        "end": 155,
        "operator": "+",
        "left": {
          "type": "Literal",
          "start": 150,
          "end": 151,
          "raw": "1",
          "value": 1
        },
        "right": {
          "type": "Literal",
          "start": 154,
          "end": 155,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 191,
      "end": 205,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 202,
        "end": 205,
        "body": []
      },
      "test": {
        "type": "Literal",
        "start": 195,
        "end": 200,
        "raw": "false",
        "value": false
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 240,
      "end": 261,
      "body": {
        "type": "BlockStatement",
        "start": 243,
        "end": 246,
        "body": []
      },
      "test": {
        "type": "Literal",
        "start": 254,
        "end": 259,
        "raw": "false",
        "value": false
      }
    },
    {
      "type": "WhileStatement",
      "start": 296,
      "end": 313,
      "body": {
        "type": "BlockStatement",
        "start": 310,
        "end": 313,
        "body": []
      },
      "test": {
        "type": "Literal",
        "start": 303,
        "end": 308,
        "raw": "false",
        "value": false
      }
    },
    {
      "type": "ForStatement",
      "start": 348,
      "end": 366,
      "body": {
        "type": "BlockStatement",
        "start": 363,
        "end": 366,
        "body": []
      },
      "init": null,
      "test": null,
      "update": {
        "type": "Literal",
        "start": 356,
        "end": 361,
        "raw": "false",
        "value": false
      }
    },
    {
      "type": "ForInStatement",
      "start": 401,
      "end": 422,
      "body": {
        "type": "BlockStatement",
        "start": 419,
        "end": 422,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 406,
        "end": 411,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 410,
            "end": 411,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 410,
              "end": 411,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 415,
        "end": 417,
        "elements": []
      }
    },
    {
      "type": "BreakStatement",
      "start": 457,
      "end": 463,
      "label": null
    },
    {
      "type": "ForOfStatement",
      "start": 498,
      "end": 519,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 516,
        "end": 519,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 503,
        "end": 508,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 507,
            "end": 508,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 507,
              "end": 508,
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 512,
        "end": 514,
        "elements": []
      }
    },
    {
      "type": "ContinueStatement",
      "start": 554,
      "end": 563,
      "label": null
    },
    {
      "type": "WithStatement",
      "start": 598,
      "end": 613,
      "body": {
        "type": "BlockStatement",
        "start": 610,
        "end": 613,
        "body": []
      },
      "object": {
        "type": "Identifier",
        "start": 604,
        "end": 608,
        "decorators": [],
        "name": "name",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "SwitchStatement",
      "start": 648,
      "end": 665,
      "cases": [],
      "discriminant": {
        "type": "Identifier",
        "start": 656,
        "end": 660,
        "decorators": [],
        "name": "name",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "LabeledStatement",
      "start": 701,
      "end": 724,
      "body": {
        "type": "WhileStatement",
        "start": 707,
        "end": 724,
        "body": {
          "type": "BlockStatement",
          "start": 721,
          "end": 724,
          "body": []
        },
        "test": {
          "type": "Literal",
          "start": 714,
          "end": 719,
          "raw": "false",
          "value": false
        }
      },
      "label": {
        "type": "Identifier",
        "start": 701,
        "end": 705,
        "decorators": [],
        "name": "fork",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ThrowStatement",
      "start": 760,
      "end": 790,
      "argument": {
        "type": "NewExpression",
        "start": 766,
        "end": 790,
        "arguments": [
          {
            "type": "Literal",
            "start": 776,
            "end": 789,
            "raw": "'Unreachable'",
            "value": "Unreachable"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 770,
          "end": 775,
          "decorators": [],
          "name": "Error",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "TryStatement",
      "start": 826,
      "end": 847,
      "block": {
        "type": "BlockStatement",
        "start": 830,
        "end": 833,
        "body": []
      },
      "finalizer": null,
      "handler": {
        "type": "CatchClause",
        "start": 834,
        "end": 847,
        "body": {
          "type": "BlockStatement",
          "start": 844,
          "end": 847,
          "body": []
        },
        "param": {
          "type": "Identifier",
          "start": 841,
          "end": 842,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1129,
      "end": 1401,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1180,
        "end": 1401,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1186,
            "end": 1282,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1186,
              "end": 1282,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 1198,
                  "end": 1201,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1198,
                    "end": 1199,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1200,
                    "end": 1201,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "MemberExpression",
                  "start": 1203,
                  "end": 1206,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1203,
                    "end": 1204,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1205,
                    "end": 1206,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "MemberExpression",
                  "start": 1208,
                  "end": 1211,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1208,
                    "end": 1209,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1210,
                    "end": 1211,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "MemberExpression",
                  "start": 1213,
                  "end": 1216,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1213,
                    "end": 1214,
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1215,
                    "end": 1216,
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "MemberExpression",
                  "start": 1218,
                  "end": 1221,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1218,
                    "end": 1219,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1220,
                    "end": 1221,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "MemberExpression",
                  "start": 1223,
                  "end": 1226,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1223,
                    "end": 1224,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1225,
                    "end": 1226,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "MemberExpression",
                  "start": 1228,
                  "end": 1231,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1228,
                    "end": 1229,
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1230,
                    "end": 1231,
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "MemberExpression",
                  "start": 1233,
                  "end": 1236,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1233,
                    "end": 1234,
                    "decorators": [],
                    "name": "h",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1235,
                    "end": 1236,
                    "decorators": [],
                    "name": "h",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "MemberExpression",
                  "start": 1238,
                  "end": 1241,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1238,
                    "end": 1239,
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1240,
                    "end": 1241,
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "MemberExpression",
                  "start": 1243,
                  "end": 1246,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1243,
                    "end": 1244,
                    "decorators": [],
                    "name": "j",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1245,
                    "end": 1246,
                    "decorators": [],
                    "name": "j",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "MemberExpression",
                  "start": 1248,
                  "end": 1251,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1248,
                    "end": 1249,
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1250,
                    "end": 1251,
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "MemberExpression",
                  "start": 1253,
                  "end": 1256,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1253,
                    "end": 1254,
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1255,
                    "end": 1256,
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "MemberExpression",
                  "start": 1258,
                  "end": 1261,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1258,
                    "end": 1259,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1260,
                    "end": 1261,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "MemberExpression",
                  "start": 1263,
                  "end": 1266,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1263,
                    "end": 1264,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1265,
                    "end": 1266,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "MemberExpression",
                  "start": 1268,
                  "end": 1271,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1268,
                    "end": 1269,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1270,
                    "end": 1271,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "MemberExpression",
                  "start": 1273,
                  "end": 1276,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1273,
                    "end": 1274,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1275,
                    "end": 1276,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "MemberExpression",
                  "start": 1278,
                  "end": 1281,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1278,
                    "end": 1279,
                    "decorators": [],
                    "name": "q",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1280,
                    "end": 1281,
                    "decorators": [],
                    "name": "q",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1186,
                "end": 1197,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1186,
                  "end": 1193,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1194,
                  "end": 1197,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 1312,
            "end": 1342,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1316,
                "end": 1342,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1316,
                  "end": 1321,
                  "decorators": [],
                  "name": "alpha",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1324,
                  "end": 1342,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1326,
                      "end": 1340,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1326,
                        "end": 1331,
                        "decorators": [],
                        "name": "alpha",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1333,
                        "end": 1340,
                        "raw": "\"aleph\"",
                        "value": "aleph"
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ReturnStatement",
            "start": 1393,
            "end": 1399,
            "argument": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1138,
        "end": 1143,
        "decorators": [],
        "name": "proof",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1145,
          "end": 1146,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 1147,
          "end": 1148,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 1149,
          "end": 1150,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 1151,
          "end": 1152,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 1153,
          "end": 1154,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 1155,
          "end": 1156,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 1157,
          "end": 1158,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 1159,
          "end": 1160,
          "decorators": [],
          "name": "h",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 1161,
          "end": 1162,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 1163,
          "end": 1164,
          "decorators": [],
          "name": "j",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 1165,
          "end": 1166,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 1167,
          "end": 1168,
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 1169,
          "end": 1170,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 1171,
          "end": 1172,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 1173,
          "end": 1174,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 1175,
          "end": 1176,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 1177,
          "end": 1178,
          "decorators": [],
          "name": "q",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
