__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 38,
  "end": 7620,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 38,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 64,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 53,
            "name": "constCall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 56,
            "end": 64,
            "callee": {
              "type": "Identifier",
              "start": 56,
              "end": 62,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 66,
      "end": 89,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 70,
          "end": 88,
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 77,
            "name": "letCall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 80,
            "end": 88,
            "callee": {
              "type": "Identifier",
              "start": 80,
              "end": 86,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 90,
      "end": 113,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 94,
          "end": 112,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 101,
            "name": "varCall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 104,
            "end": 112,
            "callee": {
              "type": "Identifier",
              "start": 104,
              "end": 110,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 148,
      "end": 187,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 162,
          "end": 186,
          "id": {
            "type": "Identifier",
            "start": 162,
            "end": 186,
            "name": "constType",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 171,
              "end": 186,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 173,
                "end": 186,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 180,
                  "end": 186
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
      "start": 235,
      "end": 284,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 241,
          "end": 283,
          "id": {
            "type": "Identifier",
            "start": 241,
            "end": 272,
            "name": "constTypeAndCall",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 257,
              "end": 272,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 259,
                "end": 272,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 266,
                  "end": 272
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 275,
            "end": 283,
            "callee": {
              "type": "Identifier",
              "start": 275,
              "end": 281,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 318,
      "end": 357,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 324,
          "end": 356,
          "id": {
            "type": "Identifier",
            "start": 324,
            "end": 344,
            "name": "constInitToConstCall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 347,
            "end": 356,
            "name": "constCall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 358,
      "end": 393,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 364,
          "end": 392,
          "id": {
            "type": "Identifier",
            "start": 364,
            "end": 382,
            "name": "constInitToLetCall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 385,
            "end": 392,
            "name": "letCall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 394,
      "end": 429,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 400,
          "end": 428,
          "id": {
            "type": "Identifier",
            "start": 400,
            "end": 418,
            "name": "constInitToVarCall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 421,
            "end": 428,
            "name": "varCall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 430,
      "end": 476,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 436,
          "end": 475,
          "id": {
            "type": "Identifier",
            "start": 436,
            "end": 463,
            "name": "constInitToConstDeclAmbient",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 466,
            "end": 475,
            "name": "constType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 477,
      "end": 512,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 481,
          "end": 511,
          "id": {
            "type": "Identifier",
            "start": 481,
            "end": 499,
            "name": "letInitToConstCall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 502,
            "end": 511,
            "name": "constCall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 513,
      "end": 544,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 517,
          "end": 543,
          "id": {
            "type": "Identifier",
            "start": 517,
            "end": 533,
            "name": "letInitToLetCall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 536,
            "end": 543,
            "name": "letCall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 545,
      "end": 576,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 549,
          "end": 575,
          "id": {
            "type": "Identifier",
            "start": 549,
            "end": 565,
            "name": "letInitToVarCall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 568,
            "end": 575,
            "name": "varCall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 577,
      "end": 619,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 581,
          "end": 618,
          "id": {
            "type": "Identifier",
            "start": 581,
            "end": 606,
            "name": "letInitToConstDeclAmbient",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 609,
            "end": 618,
            "name": "constType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 620,
      "end": 655,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 624,
          "end": 654,
          "id": {
            "type": "Identifier",
            "start": 624,
            "end": 642,
            "name": "varInitToConstCall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 645,
            "end": 654,
            "name": "constCall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 656,
      "end": 687,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 660,
          "end": 686,
          "id": {
            "type": "Identifier",
            "start": 660,
            "end": 676,
            "name": "varInitToLetCall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 679,
            "end": 686,
            "name": "letCall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 688,
      "end": 719,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 692,
          "end": 718,
          "id": {
            "type": "Identifier",
            "start": 692,
            "end": 708,
            "name": "varInitToVarCall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 711,
            "end": 718,
            "name": "varCall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 720,
      "end": 762,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 724,
          "end": 761,
          "id": {
            "type": "Identifier",
            "start": 724,
            "end": 749,
            "name": "varInitToConstDeclAmbient",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 752,
            "end": 761,
            "name": "constType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 812,
      "end": 882,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 818,
          "end": 881,
          "id": {
            "type": "Identifier",
            "start": 818,
            "end": 869,
            "name": "constInitToConstCallWithTypeQuery",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 851,
              "end": 869,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 853,
                "end": 869,
                "exprName": {
                  "type": "Identifier",
                  "start": 860,
                  "end": 869,
                  "name": "constCall",
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
            "type": "Identifier",
            "start": 872,
            "end": 881,
            "name": "constCall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 883,
      "end": 960,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 889,
          "end": 959,
          "id": {
            "type": "Identifier",
            "start": 889,
            "end": 947,
            "name": "constInitToConstDeclAmbientWithTypeQuery",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 929,
              "end": 947,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 931,
                "end": 947,
                "exprName": {
                  "type": "Identifier",
                  "start": 938,
                  "end": 947,
                  "name": "constType",
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
            "type": "Identifier",
            "start": 950,
            "end": 959,
            "name": "constType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1041,
      "end": 1082,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1047,
          "end": 1081,
          "id": {
            "type": "Identifier",
            "start": 1047,
            "end": 1069,
            "name": "fromAny",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1054,
              "end": 1069,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 1056,
                "end": 1069,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 1063,
                  "end": 1069
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1072,
            "end": 1081,
            "expression": {
              "type": "ObjectExpression",
              "start": 1072,
              "end": 1074,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1078,
              "end": 1081
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1113,
      "end": 1165,
      "id": {
        "type": "Identifier",
        "start": 1122,
        "end": 1141,
        "name": "funcReturnConstCall",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1144,
        "end": 1165,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1146,
            "end": 1163,
            "argument": {
              "type": "Identifier",
              "start": 1153,
              "end": 1162,
              "name": "constCall",
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
      "start": 1166,
      "end": 1214,
      "id": {
        "type": "Identifier",
        "start": 1175,
        "end": 1192,
        "name": "funcReturnLetCall",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1195,
        "end": 1214,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1197,
            "end": 1212,
            "argument": {
              "type": "Identifier",
              "start": 1204,
              "end": 1211,
              "name": "letCall",
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
      "start": 1215,
      "end": 1263,
      "id": {
        "type": "Identifier",
        "start": 1224,
        "end": 1241,
        "name": "funcReturnVarCall",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1244,
        "end": 1263,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1246,
            "end": 1261,
            "argument": {
              "type": "Identifier",
              "start": 1253,
              "end": 1260,
              "name": "varCall",
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
      "start": 1306,
      "end": 1389,
      "id": {
        "type": "Identifier",
        "start": 1315,
        "end": 1347,
        "name": "funcReturnConstCallWithTypeQuery",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1368,
        "end": 1389,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1370,
            "end": 1387,
            "argument": {
              "type": "Identifier",
              "start": 1377,
              "end": 1386,
              "name": "constCall",
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
        "start": 1349,
        "end": 1367,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 1351,
          "end": 1367,
          "exprName": {
            "type": "Identifier",
            "start": 1358,
            "end": 1367,
            "name": "constCall",
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
      "start": 1429,
      "end": 1483,
      "id": {
        "type": "Identifier",
        "start": 1439,
        "end": 1460,
        "name": "genFuncYieldConstCall",
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
        "start": 1463,
        "end": 1483,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1465,
            "end": 1481,
            "expression": {
              "type": "YieldExpression",
              "start": 1465,
              "end": 1480,
              "delegate": false,
              "argument": {
                "type": "Identifier",
                "start": 1471,
                "end": 1480,
                "name": "constCall",
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
      "start": 1484,
      "end": 1534,
      "id": {
        "type": "Identifier",
        "start": 1494,
        "end": 1513,
        "name": "genFuncYieldLetCall",
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
        "start": 1516,
        "end": 1534,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1518,
            "end": 1532,
            "expression": {
              "type": "YieldExpression",
              "start": 1518,
              "end": 1531,
              "delegate": false,
              "argument": {
                "type": "Identifier",
                "start": 1524,
                "end": 1531,
                "name": "letCall",
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
      "start": 1535,
      "end": 1585,
      "id": {
        "type": "Identifier",
        "start": 1545,
        "end": 1564,
        "name": "genFuncYieldVarCall",
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
        "start": 1567,
        "end": 1585,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1569,
            "end": 1583,
            "expression": {
              "type": "YieldExpression",
              "start": 1569,
              "end": 1582,
              "delegate": false,
              "argument": {
                "type": "Identifier",
                "start": 1575,
                "end": 1582,
                "name": "varCall",
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
      "start": 1638,
      "end": 1741,
      "id": {
        "type": "Identifier",
        "start": 1648,
        "end": 1682,
        "name": "genFuncYieldConstCallWithTypeQuery",
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
        "start": 1721,
        "end": 1741,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1723,
            "end": 1739,
            "expression": {
              "type": "YieldExpression",
              "start": 1723,
              "end": 1738,
              "delegate": false,
              "argument": {
                "type": "Identifier",
                "start": 1729,
                "end": 1738,
                "name": "constCall",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1684,
        "end": 1720,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1686,
          "end": 1720,
          "typeName": {
            "type": "Identifier",
            "start": 1686,
            "end": 1702,
            "name": "IterableIterator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1702,
            "end": 1720,
            "params": [
              {
                "type": "TSTypeQuery",
                "start": 1703,
                "end": 1719,
                "exprName": {
                  "type": "Identifier",
                  "start": 1710,
                  "end": 1719,
                  "name": "constCall",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1778,
      "end": 1841,
      "id": {
        "type": "Identifier",
        "start": 1793,
        "end": 1817,
        "name": "asyncFuncReturnConstCall",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1820,
        "end": 1841,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1822,
            "end": 1839,
            "argument": {
              "type": "Identifier",
              "start": 1829,
              "end": 1838,
              "name": "constCall",
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
      "start": 1842,
      "end": 1901,
      "id": {
        "type": "Identifier",
        "start": 1857,
        "end": 1879,
        "name": "asyncFuncReturnLetCall",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1882,
        "end": 1901,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1884,
            "end": 1899,
            "argument": {
              "type": "Identifier",
              "start": 1891,
              "end": 1898,
              "name": "letCall",
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
      "start": 1902,
      "end": 1961,
      "id": {
        "type": "Identifier",
        "start": 1917,
        "end": 1939,
        "name": "asyncFuncReturnVarCall",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1942,
        "end": 1961,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1944,
            "end": 1959,
            "argument": {
              "type": "Identifier",
              "start": 1951,
              "end": 1958,
              "name": "varCall",
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
      "start": 2007,
      "end": 2072,
      "id": {
        "type": "Identifier",
        "start": 2023,
        "end": 2049,
        "name": "asyncGenFuncYieldConstCall",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 2052,
        "end": 2072,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2054,
            "end": 2070,
            "expression": {
              "type": "YieldExpression",
              "start": 2054,
              "end": 2069,
              "delegate": false,
              "argument": {
                "type": "Identifier",
                "start": 2060,
                "end": 2069,
                "name": "constCall",
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
      "start": 2073,
      "end": 2134,
      "id": {
        "type": "Identifier",
        "start": 2089,
        "end": 2113,
        "name": "asyncGenFuncYieldLetCall",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 2116,
        "end": 2134,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2118,
            "end": 2132,
            "expression": {
              "type": "YieldExpression",
              "start": 2118,
              "end": 2131,
              "delegate": false,
              "argument": {
                "type": "Identifier",
                "start": 2124,
                "end": 2131,
                "name": "letCall",
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
      "start": 2135,
      "end": 2196,
      "id": {
        "type": "Identifier",
        "start": 2151,
        "end": 2175,
        "name": "asyncGenFuncYieldVarCall",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 2178,
        "end": 2196,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2180,
            "end": 2194,
            "expression": {
              "type": "YieldExpression",
              "start": 2180,
              "end": 2193,
              "delegate": false,
              "argument": {
                "type": "Identifier",
                "start": 2186,
                "end": 2193,
                "name": "varCall",
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
      "type": "ClassDeclaration",
      "start": 2209,
      "end": 2511,
      "id": {
        "type": "Identifier",
        "start": 2215,
        "end": 2216,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2217,
        "end": 2511,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 2223,
            "end": 2269,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2239,
              "end": 2257,
              "name": "readonlyStaticCall",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 2260,
              "end": 2268,
              "callee": {
                "type": "Identifier",
                "start": 2260,
                "end": 2266,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 2274,
            "end": 2324,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2290,
              "end": 2308,
              "name": "readonlyStaticType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2308,
              "end": 2323,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 2310,
                "end": 2323,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 2317,
                  "end": 2323
                }
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 2329,
            "end": 2397,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2345,
              "end": 2370,
              "name": "readonlyStaticTypeAndCall",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 2388,
              "end": 2396,
              "callee": {
                "type": "Identifier",
                "start": 2388,
                "end": 2394,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2370,
              "end": 2385,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 2372,
                "end": 2385,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 2379,
                  "end": 2385
                }
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 2402,
            "end": 2440,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2409,
              "end": 2428,
              "name": "readwriteStaticCall",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 2431,
              "end": 2439,
              "callee": {
                "type": "Identifier",
                "start": 2431,
                "end": 2437,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 2446,
            "end": 2479,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2455,
              "end": 2467,
              "name": "readonlyCall",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 2470,
              "end": 2478,
              "callee": {
                "type": "Identifier",
                "start": 2470,
                "end": 2476,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 2484,
            "end": 2509,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2484,
              "end": 2497,
              "name": "readwriteCall",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 2500,
              "end": 2508,
              "callee": {
                "type": "Identifier",
                "start": 2500,
                "end": 2506,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2512,
      "end": 2531,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2526,
          "end": 2530,
          "id": {
            "type": "Identifier",
            "start": 2526,
            "end": 2530,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2527,
              "end": 2530,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2529,
                "end": 2530,
                "typeName": {
                  "type": "Identifier",
                  "start": 2529,
                  "end": 2530,
                  "name": "C",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 2533,
      "end": 2593,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2539,
          "end": 2592,
          "id": {
            "type": "Identifier",
            "start": 2539,
            "end": 2569,
            "name": "constInitToCReadonlyStaticCall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 2572,
            "end": 2592,
            "object": {
              "type": "Identifier",
              "start": 2572,
              "end": 2573,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2574,
              "end": 2592,
              "name": "readonlyStaticCall",
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2594,
      "end": 2654,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2600,
          "end": 2653,
          "id": {
            "type": "Identifier",
            "start": 2600,
            "end": 2630,
            "name": "constInitToCReadonlyStaticType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 2633,
            "end": 2653,
            "object": {
              "type": "Identifier",
              "start": 2633,
              "end": 2634,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2635,
              "end": 2653,
              "name": "readonlyStaticType",
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2655,
      "end": 2729,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2661,
          "end": 2728,
          "id": {
            "type": "Identifier",
            "start": 2661,
            "end": 2698,
            "name": "constInitToCReadonlyStaticTypeAndCall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 2701,
            "end": 2728,
            "object": {
              "type": "Identifier",
              "start": 2701,
              "end": 2702,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2703,
              "end": 2728,
              "name": "readonlyStaticTypeAndCall",
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2730,
      "end": 2792,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2736,
          "end": 2791,
          "id": {
            "type": "Identifier",
            "start": 2736,
            "end": 2767,
            "name": "constInitToCReadwriteStaticCall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 2770,
            "end": 2791,
            "object": {
              "type": "Identifier",
              "start": 2770,
              "end": 2771,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2772,
              "end": 2791,
              "name": "readwriteStaticCall",
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2794,
      "end": 2896,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2800,
          "end": 2895,
          "id": {
            "type": "Identifier",
            "start": 2800,
            "end": 2872,
            "name": "constInitToCReadonlyStaticCallWithTypeQuery",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2843,
              "end": 2872,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 2845,
                "end": 2872,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 2852,
                  "end": 2872,
                  "left": {
                    "type": "Identifier",
                    "start": 2852,
                    "end": 2853,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2854,
                    "end": 2872,
                    "name": "readonlyStaticCall",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 2875,
            "end": 2895,
            "object": {
              "type": "Identifier",
              "start": 2875,
              "end": 2876,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2877,
              "end": 2895,
              "name": "readonlyStaticCall",
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2897,
      "end": 2999,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2903,
          "end": 2998,
          "id": {
            "type": "Identifier",
            "start": 2903,
            "end": 2975,
            "name": "constInitToCReadonlyStaticTypeWithTypeQuery",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2946,
              "end": 2975,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 2948,
                "end": 2975,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 2955,
                  "end": 2975,
                  "left": {
                    "type": "Identifier",
                    "start": 2955,
                    "end": 2956,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2957,
                    "end": 2975,
                    "name": "readonlyStaticType",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 2978,
            "end": 2998,
            "object": {
              "type": "Identifier",
              "start": 2978,
              "end": 2979,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2980,
              "end": 2998,
              "name": "readonlyStaticType",
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3000,
      "end": 3123,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3006,
          "end": 3122,
          "id": {
            "type": "Identifier",
            "start": 3006,
            "end": 3092,
            "name": "constInitToCReadonlyStaticTypeAndCallWithTypeQuery",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3056,
              "end": 3092,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 3058,
                "end": 3092,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 3065,
                  "end": 3092,
                  "left": {
                    "type": "Identifier",
                    "start": 3065,
                    "end": 3066,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 3067,
                    "end": 3092,
                    "name": "readonlyStaticTypeAndCall",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 3095,
            "end": 3122,
            "object": {
              "type": "Identifier",
              "start": 3095,
              "end": 3096,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 3097,
              "end": 3122,
              "name": "readonlyStaticTypeAndCall",
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3124,
      "end": 3229,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3130,
          "end": 3228,
          "id": {
            "type": "Identifier",
            "start": 3130,
            "end": 3204,
            "name": "constInitToCReadwriteStaticCallWithTypeQuery",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3174,
              "end": 3204,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 3176,
                "end": 3204,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 3183,
                  "end": 3204,
                  "left": {
                    "type": "Identifier",
                    "start": 3183,
                    "end": 3184,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 3185,
                    "end": 3204,
                    "name": "readwriteStaticCall",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 3207,
            "end": 3228,
            "object": {
              "type": "Identifier",
              "start": 3207,
              "end": 3208,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 3209,
              "end": 3228,
              "name": "readwriteStaticCall",
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3231,
      "end": 3279,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3237,
          "end": 3278,
          "id": {
            "type": "Identifier",
            "start": 3237,
            "end": 3261,
            "name": "constInitToCReadonlyCall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 3264,
            "end": 3278,
            "object": {
              "type": "Identifier",
              "start": 3264,
              "end": 3265,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 3266,
              "end": 3278,
              "name": "readonlyCall",
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3280,
      "end": 3330,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3286,
          "end": 3329,
          "id": {
            "type": "Identifier",
            "start": 3286,
            "end": 3311,
            "name": "constInitToCReadwriteCall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 3314,
            "end": 3329,
            "object": {
              "type": "Identifier",
              "start": 3314,
              "end": 3315,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 3316,
              "end": 3329,
              "name": "readwriteCall",
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3331,
      "end": 3415,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3337,
          "end": 3414,
          "id": {
            "type": "Identifier",
            "start": 3337,
            "end": 3397,
            "name": "constInitToCReadonlyCallWithTypeQuery",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3374,
              "end": 3397,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 3376,
                "end": 3397,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 3383,
                  "end": 3397,
                  "left": {
                    "type": "Identifier",
                    "start": 3383,
                    "end": 3384,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 3385,
                    "end": 3397,
                    "name": "readonlyCall",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 3400,
            "end": 3414,
            "object": {
              "type": "Identifier",
              "start": 3400,
              "end": 3401,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 3402,
              "end": 3414,
              "name": "readonlyCall",
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3416,
      "end": 3503,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3422,
          "end": 3502,
          "id": {
            "type": "Identifier",
            "start": 3422,
            "end": 3484,
            "name": "constInitToCReadwriteCallWithTypeQuery",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3460,
              "end": 3484,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 3462,
                "end": 3484,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 3469,
                  "end": 3484,
                  "left": {
                    "type": "Identifier",
                    "start": 3469,
                    "end": 3470,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 3471,
                    "end": 3484,
                    "name": "readwriteCall",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 3487,
            "end": 3502,
            "object": {
              "type": "Identifier",
              "start": 3487,
              "end": 3488,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 3489,
              "end": 3502,
              "name": "readwriteCall",
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3504,
      "end": 3588,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3510,
          "end": 3587,
          "id": {
            "type": "Identifier",
            "start": 3510,
            "end": 3570,
            "name": "constInitToCReadonlyCallWithIndexedAccess",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3551,
              "end": 3570,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 3553,
                "end": 3570,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 3553,
                  "end": 3554,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3553,
                    "end": 3554,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 3555,
                  "end": 3569,
                  "literal": {
                    "type": "Literal",
                    "start": 3555,
                    "end": 3569,
                    "value": "readonlyCall",
                    "raw": "\"readonlyCall\""
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 3573,
            "end": 3587,
            "object": {
              "type": "Identifier",
              "start": 3573,
              "end": 3574,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 3575,
              "end": 3587,
              "name": "readonlyCall",
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3589,
      "end": 3676,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3595,
          "end": 3675,
          "id": {
            "type": "Identifier",
            "start": 3595,
            "end": 3657,
            "name": "constInitToCReadwriteCallWithIndexedAccess",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3637,
              "end": 3657,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 3639,
                "end": 3657,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 3639,
                  "end": 3640,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3639,
                    "end": 3640,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 3641,
                  "end": 3656,
                  "literal": {
                    "type": "Literal",
                    "start": 3641,
                    "end": 3656,
                    "value": "readwriteCall",
                    "raw": "\"readwriteCall\""
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 3660,
            "end": 3675,
            "object": {
              "type": "Identifier",
              "start": 3660,
              "end": 3661,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 3662,
              "end": 3675,
              "name": "readwriteCall",
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 3692,
      "end": 3749,
      "id": {
        "type": "Identifier",
        "start": 3702,
        "end": 3703,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 3704,
        "end": 3749,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 3710,
            "end": 3747,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 3719,
              "end": 3731,
              "name": "readonlyType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3731,
              "end": 3746,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 3733,
                "end": 3746,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 3740,
                  "end": 3746
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3750,
      "end": 3769,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3764,
          "end": 3768,
          "id": {
            "type": "Identifier",
            "start": 3764,
            "end": 3768,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3765,
              "end": 3768,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3767,
                "end": 3768,
                "typeName": {
                  "type": "Identifier",
                  "start": 3767,
                  "end": 3768,
                  "name": "I",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 3771,
      "end": 3819,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3777,
          "end": 3818,
          "id": {
            "type": "Identifier",
            "start": 3777,
            "end": 3801,
            "name": "constInitToIReadonlyType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 3804,
            "end": 3818,
            "object": {
              "type": "Identifier",
              "start": 3804,
              "end": 3805,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 3806,
              "end": 3818,
              "name": "readonlyType",
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3820,
      "end": 3904,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3826,
          "end": 3903,
          "id": {
            "type": "Identifier",
            "start": 3826,
            "end": 3886,
            "name": "constInitToIReadonlyTypeWithTypeQuery",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3863,
              "end": 3886,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 3865,
                "end": 3886,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 3872,
                  "end": 3886,
                  "left": {
                    "type": "Identifier",
                    "start": 3872,
                    "end": 3873,
                    "name": "i",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 3874,
                    "end": 3886,
                    "name": "readonlyType",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 3889,
            "end": 3903,
            "object": {
              "type": "Identifier",
              "start": 3889,
              "end": 3890,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 3891,
              "end": 3903,
              "name": "readonlyType",
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3905,
      "end": 3989,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3911,
          "end": 3988,
          "id": {
            "type": "Identifier",
            "start": 3911,
            "end": 3971,
            "name": "constInitToIReadonlyTypeWithIndexedAccess",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3952,
              "end": 3971,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 3954,
                "end": 3971,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 3954,
                  "end": 3955,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3954,
                    "end": 3955,
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 3956,
                  "end": 3970,
                  "literal": {
                    "type": "Literal",
                    "start": 3956,
                    "end": 3970,
                    "value": "readonlyType",
                    "raw": "\"readonlyType\""
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 3974,
            "end": 3988,
            "object": {
              "type": "Identifier",
              "start": 3974,
              "end": 3975,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 3976,
              "end": 3988,
              "name": "readonlyType",
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4008,
      "end": 4135,
      "id": {
        "type": "Identifier",
        "start": 4013,
        "end": 4014,
        "name": "L",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 4017,
        "end": 4134,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 4023,
            "end": 4060,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 4032,
              "end": 4044,
              "name": "readonlyType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4044,
              "end": 4059,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 4046,
                "end": 4059,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 4053,
                  "end": 4059
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 4065,
            "end": 4132,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 4065,
              "end": 4071,
              "name": "nested",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4071,
              "end": 4132,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 4073,
                "end": 4132,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 4083,
                    "end": 4126,
                    "computed": false,
                    "optional": false,
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "start": 4092,
                      "end": 4110,
                      "name": "readonlyNestedType",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4110,
                      "end": 4125,
                      "typeAnnotation": {
                        "type": "TSTypeOperator",
                        "start": 4112,
                        "end": 4125,
                        "operator": "unique",
                        "typeAnnotation": {
                          "type": "TSSymbolKeyword",
                          "start": 4119,
                          "end": 4125
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4136,
      "end": 4155,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4150,
          "end": 4154,
          "id": {
            "type": "Identifier",
            "start": 4150,
            "end": 4154,
            "name": "l",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4151,
              "end": 4154,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4153,
                "end": 4154,
                "typeName": {
                  "type": "Identifier",
                  "start": 4153,
                  "end": 4154,
                  "name": "L",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 4157,
      "end": 4205,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4163,
          "end": 4204,
          "id": {
            "type": "Identifier",
            "start": 4163,
            "end": 4187,
            "name": "constInitToLReadonlyType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 4190,
            "end": 4204,
            "object": {
              "type": "Identifier",
              "start": 4190,
              "end": 4191,
              "name": "l",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 4192,
              "end": 4204,
              "name": "readonlyType",
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4206,
      "end": 4273,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4212,
          "end": 4272,
          "id": {
            "type": "Identifier",
            "start": 4212,
            "end": 4242,
            "name": "constInitToLReadonlyNestedType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 4245,
            "end": 4272,
            "object": {
              "type": "MemberExpression",
              "start": 4245,
              "end": 4253,
              "object": {
                "type": "Identifier",
                "start": 4245,
                "end": 4246,
                "name": "l",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4247,
                "end": 4253,
                "name": "nested",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 4254,
              "end": 4272,
              "name": "readonlyNestedType",
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4274,
      "end": 4358,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4280,
          "end": 4357,
          "id": {
            "type": "Identifier",
            "start": 4280,
            "end": 4340,
            "name": "constInitToLReadonlyTypeWithTypeQuery",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4317,
              "end": 4340,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 4319,
                "end": 4340,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 4326,
                  "end": 4340,
                  "left": {
                    "type": "Identifier",
                    "start": 4326,
                    "end": 4327,
                    "name": "l",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 4328,
                    "end": 4340,
                    "name": "readonlyType",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 4343,
            "end": 4357,
            "object": {
              "type": "Identifier",
              "start": 4343,
              "end": 4344,
              "name": "l",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 4345,
              "end": 4357,
              "name": "readonlyType",
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4359,
      "end": 4475,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4365,
          "end": 4474,
          "id": {
            "type": "Identifier",
            "start": 4365,
            "end": 4444,
            "name": "constInitToLReadonlyNestedTypeWithTypeQuery",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4408,
              "end": 4444,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 4410,
                "end": 4444,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 4417,
                  "end": 4444,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 4417,
                    "end": 4425,
                    "left": {
                      "type": "Identifier",
                      "start": 4417,
                      "end": 4418,
                      "name": "l",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 4419,
                      "end": 4425,
                      "name": "nested",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 4426,
                    "end": 4444,
                    "name": "readonlyNestedType",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 4447,
            "end": 4474,
            "object": {
              "type": "MemberExpression",
              "start": 4447,
              "end": 4455,
              "object": {
                "type": "Identifier",
                "start": 4447,
                "end": 4448,
                "name": "l",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4449,
                "end": 4455,
                "name": "nested",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 4456,
              "end": 4474,
              "name": "readonlyNestedType",
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4476,
      "end": 4560,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4482,
          "end": 4559,
          "id": {
            "type": "Identifier",
            "start": 4482,
            "end": 4542,
            "name": "constInitToLReadonlyTypeWithIndexedAccess",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4523,
              "end": 4542,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 4525,
                "end": 4542,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 4525,
                  "end": 4526,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4525,
                    "end": 4526,
                    "name": "L",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 4527,
                  "end": 4541,
                  "literal": {
                    "type": "Literal",
                    "start": 4527,
                    "end": 4541,
                    "value": "readonlyType",
                    "raw": "\"readonlyType\""
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 4545,
            "end": 4559,
            "object": {
              "type": "Identifier",
              "start": 4545,
              "end": 4546,
              "name": "l",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 4547,
              "end": 4559,
              "name": "readonlyType",
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4561,
      "end": 4680,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4567,
          "end": 4679,
          "id": {
            "type": "Identifier",
            "start": 4567,
            "end": 4649,
            "name": "constInitToLReadonlyNestedTypeWithIndexedAccess",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4614,
              "end": 4649,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 4616,
                "end": 4649,
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "start": 4616,
                  "end": 4627,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 4616,
                    "end": 4617,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4616,
                      "end": 4617,
                      "name": "L",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 4618,
                    "end": 4626,
                    "literal": {
                      "type": "Literal",
                      "start": 4618,
                      "end": 4626,
                      "value": "nested",
                      "raw": "\"nested\""
                    }
                  }
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 4628,
                  "end": 4648,
                  "literal": {
                    "type": "Literal",
                    "start": 4628,
                    "end": 4648,
                    "value": "readonlyNestedType",
                    "raw": "\"readonlyNestedType\""
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 4652,
            "end": 4679,
            "object": {
              "type": "MemberExpression",
              "start": 4652,
              "end": 4660,
              "object": {
                "type": "Identifier",
                "start": 4652,
                "end": 4653,
                "name": "l",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4654,
                "end": 4660,
                "name": "nested",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 4661,
              "end": 4679,
              "name": "readonlyNestedType",
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4709,
      "end": 4764,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4715,
          "end": 4763,
          "id": {
            "type": "Identifier",
            "start": 4715,
            "end": 4734,
            "name": "promiseForConstCall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4737,
            "end": 4763,
            "callee": {
              "type": "MemberExpression",
              "start": 4737,
              "end": 4752,
              "object": {
                "type": "Identifier",
                "start": 4737,
                "end": 4744,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4745,
                "end": 4752,
                "name": "resolve",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 4753,
                "end": 4762,
                "name": "constCall",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
    },
    {
      "type": "VariableDeclaration",
      "start": 4765,
      "end": 4802,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4771,
          "end": 4801,
          "id": {
            "type": "Identifier",
            "start": 4771,
            "end": 4787,
            "name": "arrayOfConstCall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 4790,
            "end": 4801,
            "elements": [
              {
                "type": "Identifier",
                "start": 4791,
                "end": 4800,
                "name": "constCall",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4845,
      "end": 4876,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4859,
          "end": 4875,
          "id": {
            "type": "Identifier",
            "start": 4859,
            "end": 4875,
            "name": "s",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4860,
              "end": 4875,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 4862,
                "end": 4875,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 4869,
                  "end": 4875
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
      "type": "TSModuleDeclaration",
      "start": 4877,
      "end": 4924,
      "id": {
        "type": "Identifier",
        "start": 4895,
        "end": 4896,
        "name": "N",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 4897,
        "end": 4924,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 4899,
            "end": 4922,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4905,
                "end": 4921,
                "id": {
                  "type": "Identifier",
                  "start": 4905,
                  "end": 4921,
                  "name": "s",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4906,
                    "end": 4921,
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "start": 4908,
                      "end": 4921,
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 4915,
                        "end": 4921
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
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4925,
      "end": 4967,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4939,
          "end": 4966,
          "id": {
            "type": "Identifier",
            "start": 4939,
            "end": 4966,
            "name": "o",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4940,
              "end": 4966,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 4942,
                "end": 4966,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 4944,
                    "end": 4953,
                    "computed": true,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4945,
                      "end": 4946,
                      "name": "s",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4947,
                      "end": 4952,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 4949,
                        "end": 4952,
                        "literal": {
                          "type": "Literal",
                          "start": 4949,
                          "end": 4952,
                          "value": "a",
                          "raw": "\"a\""
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 4954,
                    "end": 4964,
                    "computed": true,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "MemberExpression",
                      "start": 4955,
                      "end": 4958,
                      "object": {
                        "type": "Identifier",
                        "start": 4955,
                        "end": 4956,
                        "name": "N",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 4957,
                        "end": 4958,
                        "name": "s",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4959,
                      "end": 4964,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 4961,
                        "end": 4964,
                        "literal": {
                          "type": "Literal",
                          "start": 4961,
                          "end": 4964,
                          "value": "b",
                          "raw": "\"b\""
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "TSDeclareFunction",
      "start": 4968,
      "end": 4999,
      "id": {
        "type": "Identifier",
        "start": 4985,
        "end": 4986,
        "name": "f",
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
          "start": 4990,
          "end": 4994,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4991,
            "end": 4994,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4993,
              "end": 4994,
              "typeName": {
                "type": "Identifier",
                "start": 4993,
                "end": 4994,
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
        "start": 4986,
        "end": 4989,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4987,
            "end": 4988,
            "name": {
              "type": "Identifier",
              "start": 4987,
              "end": 4988,
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
        "start": 4995,
        "end": 4998,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 4997,
          "end": 4998,
          "typeName": {
            "type": "Identifier",
            "start": 4997,
            "end": 4998,
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
      "type": "TSDeclareFunction",
      "start": 5000,
      "end": 5038,
      "id": {
        "type": "Identifier",
        "start": 5017,
        "end": 5018,
        "name": "g",
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
          "start": 5019,
          "end": 5030,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5020,
            "end": 5030,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 5022,
              "end": 5030,
              "exprName": {
                "type": "Identifier",
                "start": 5029,
                "end": 5030,
                "name": "s",
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
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 5031,
        "end": 5037,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 5033,
          "end": 5037
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 5039,
      "end": 5079,
      "id": {
        "type": "Identifier",
        "start": 5056,
        "end": 5057,
        "name": "g",
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
          "start": 5058,
          "end": 5071,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5059,
            "end": 5071,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 5061,
              "end": 5071,
              "exprName": {
                "type": "TSQualifiedName",
                "start": 5068,
                "end": 5071,
                "left": {
                  "type": "Identifier",
                  "start": 5068,
                  "end": 5069,
                  "name": "N",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 5070,
                  "end": 5071,
                  "name": "s",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
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
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 5072,
        "end": 5078,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 5074,
          "end": 5078
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 5126,
      "end": 5131,
      "expression": {
        "type": "CallExpression",
        "start": 5126,
        "end": 5130,
        "callee": {
          "type": "Identifier",
          "start": 5126,
          "end": 5127,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 5128,
            "end": 5129,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 5132,
      "end": 5139,
      "expression": {
        "type": "CallExpression",
        "start": 5132,
        "end": 5138,
        "callee": {
          "type": "Identifier",
          "start": 5132,
          "end": 5133,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 5134,
            "end": 5137,
            "object": {
              "type": "Identifier",
              "start": 5134,
              "end": 5135,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 5136,
              "end": 5137,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 5140,
      "end": 5150,
      "expression": {
        "type": "CallExpression",
        "start": 5140,
        "end": 5149,
        "callee": {
          "type": "Identifier",
          "start": 5140,
          "end": 5141,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 5142,
            "end": 5148,
            "object": {
              "type": "Identifier",
              "start": 5142,
              "end": 5143,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 5144,
              "end": 5147,
              "value": "s",
              "raw": "\"s\""
            },
            "computed": true,
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 5178,
      "end": 5182,
      "expression": {
        "type": "ArrayExpression",
        "start": 5178,
        "end": 5181,
        "elements": [
          {
            "type": "Identifier",
            "start": 5179,
            "end": 5180,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 5183,
      "end": 5189,
      "expression": {
        "type": "ArrayExpression",
        "start": 5183,
        "end": 5188,
        "elements": [
          {
            "type": "MemberExpression",
            "start": 5184,
            "end": 5187,
            "object": {
              "type": "Identifier",
              "start": 5184,
              "end": 5185,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 5186,
              "end": 5187,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 5190,
      "end": 5199,
      "expression": {
        "type": "ArrayExpression",
        "start": 5190,
        "end": 5198,
        "elements": [
          {
            "type": "MemberExpression",
            "start": 5191,
            "end": 5197,
            "object": {
              "type": "Identifier",
              "start": 5191,
              "end": 5192,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 5193,
              "end": 5196,
              "value": "s",
              "raw": "\"s\""
            },
            "computed": true,
            "optional": false
          }
        ]
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 5233,
      "end": 5450,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5239,
          "end": 5449,
          "id": {
            "type": "Identifier",
            "start": 5239,
            "end": 5241,
            "name": "o2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 5244,
            "end": 5449,
            "properties": [
              {
                "type": "Property",
                "start": 5250,
                "end": 5254,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 5250,
                  "end": 5251,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 5253,
                  "end": 5254,
                  "name": "s",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 5260,
                "end": 5266,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 5260,
                  "end": 5261,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 5263,
                  "end": 5266,
                  "object": {
                    "type": "Identifier",
                    "start": 5263,
                    "end": 5264,
                    "name": "N",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 5265,
                    "end": 5266,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 5272,
                "end": 5281,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 5272,
                  "end": 5273,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 5275,
                  "end": 5281,
                  "object": {
                    "type": "Identifier",
                    "start": 5275,
                    "end": 5276,
                    "name": "N",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 5277,
                    "end": 5280,
                    "value": "s",
                    "raw": "\"s\""
                  },
                  "computed": true,
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 5288,
                "end": 5311,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 5288,
                  "end": 5295,
                  "name": "method1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 5295,
                  "end": 5311,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 5298,
                    "end": 5311,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 5300,
                        "end": 5309,
                        "argument": {
                          "type": "Identifier",
                          "start": 5307,
                          "end": 5308,
                          "name": "s",
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
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 5317,
                "end": 5346,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 5323,
                  "end": 5330,
                  "name": "method2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 5330,
                  "end": 5346,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": true,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 5333,
                    "end": 5346,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 5335,
                        "end": 5344,
                        "argument": {
                          "type": "Identifier",
                          "start": 5342,
                          "end": 5343,
                          "name": "s",
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
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 5352,
                "end": 5382,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 5360,
                  "end": 5367,
                  "name": "method3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 5367,
                  "end": 5382,
                  "id": null,
                  "expression": false,
                  "generator": true,
                  "async": true,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 5370,
                    "end": 5382,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 5372,
                        "end": 5380,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 5372,
                          "end": 5379,
                          "delegate": false,
                          "argument": {
                            "type": "Identifier",
                            "start": 5378,
                            "end": 5379,
                            "name": "s",
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
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 5388,
                "end": 5412,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 5390,
                  "end": 5397,
                  "name": "method4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 5397,
                  "end": 5412,
                  "id": null,
                  "expression": false,
                  "generator": true,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 5400,
                    "end": 5412,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 5402,
                        "end": 5410,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 5402,
                          "end": 5409,
                          "delegate": false,
                          "argument": {
                            "type": "Identifier",
                            "start": 5408,
                            "end": 5409,
                            "name": "s",
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
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 5418,
                "end": 5446,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 5418,
                  "end": 5425,
                  "name": "method5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 5425,
                  "end": 5446,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "start": 5426,
                      "end": 5431,
                      "left": {
                        "type": "Identifier",
                        "start": 5426,
                        "end": 5427,
                        "name": "p",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 5430,
                        "end": 5431,
                        "name": "s",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 5433,
                    "end": 5446,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 5435,
                        "end": 5444,
                        "argument": {
                          "type": "Identifier",
                          "start": 5442,
                          "end": 5443,
                          "name": "p",
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
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 5477,
      "end": 5908,
      "id": {
        "type": "Identifier",
        "start": 5483,
        "end": 5485,
        "name": "C0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 5486,
        "end": 5908,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 5492,
            "end": 5514,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5508,
              "end": 5509,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 5512,
              "end": 5513,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 5519,
            "end": 5543,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5535,
              "end": 5536,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 5539,
              "end": 5542,
              "object": {
                "type": "Identifier",
                "start": 5539,
                "end": 5540,
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5541,
                "end": 5542,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 5548,
            "end": 5575,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5564,
              "end": 5565,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 5568,
              "end": 5574,
              "object": {
                "type": "Identifier",
                "start": 5568,
                "end": 5569,
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 5570,
                "end": 5573,
                "value": "s",
                "raw": "\"s\""
              },
              "computed": true,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 5581,
            "end": 5594,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5588,
              "end": 5589,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 5592,
              "end": 5593,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 5599,
            "end": 5614,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5606,
              "end": 5607,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 5610,
              "end": 5613,
              "object": {
                "type": "Identifier",
                "start": 5610,
                "end": 5611,
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5612,
                "end": 5613,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 5619,
            "end": 5637,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5626,
              "end": 5627,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 5630,
              "end": 5636,
              "object": {
                "type": "Identifier",
                "start": 5630,
                "end": 5631,
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 5632,
                "end": 5635,
                "value": "s",
                "raw": "\"s\""
              },
              "computed": true,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 5643,
            "end": 5658,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5652,
              "end": 5653,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 5656,
              "end": 5657,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 5663,
            "end": 5680,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5672,
              "end": 5673,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 5676,
              "end": 5679,
              "object": {
                "type": "Identifier",
                "start": 5676,
                "end": 5677,
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5678,
                "end": 5679,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 5685,
            "end": 5705,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5694,
              "end": 5695,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 5698,
              "end": 5704,
              "object": {
                "type": "Identifier",
                "start": 5698,
                "end": 5699,
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 5700,
                "end": 5703,
                "value": "s",
                "raw": "\"s\""
              },
              "computed": true,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 5711,
            "end": 5717,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5711,
              "end": 5712,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 5715,
              "end": 5716,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 5722,
            "end": 5730,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5722,
              "end": 5723,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 5726,
              "end": 5729,
              "object": {
                "type": "Identifier",
                "start": 5726,
                "end": 5727,
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5728,
                "end": 5729,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 5735,
            "end": 5746,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5735,
              "end": 5736,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 5739,
              "end": 5745,
              "object": {
                "type": "Identifier",
                "start": 5739,
                "end": 5740,
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 5741,
                "end": 5744,
                "value": "s",
                "raw": "\"s\""
              },
              "computed": true,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 5752,
            "end": 5775,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5752,
              "end": 5759,
              "name": "method1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 5759,
              "end": 5775,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 5762,
                "end": 5775,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 5764,
                    "end": 5773,
                    "argument": {
                      "type": "Identifier",
                      "start": 5771,
                      "end": 5772,
                      "name": "s",
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
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 5780,
            "end": 5809,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5786,
              "end": 5793,
              "name": "method2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 5793,
              "end": 5809,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 5796,
                "end": 5809,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 5798,
                    "end": 5807,
                    "argument": {
                      "type": "Identifier",
                      "start": 5805,
                      "end": 5806,
                      "name": "s",
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
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 5814,
            "end": 5844,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5822,
              "end": 5829,
              "name": "method3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 5829,
              "end": 5844,
              "id": null,
              "expression": false,
              "generator": true,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 5832,
                "end": 5844,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 5834,
                    "end": 5842,
                    "expression": {
                      "type": "YieldExpression",
                      "start": 5834,
                      "end": 5841,
                      "delegate": false,
                      "argument": {
                        "type": "Identifier",
                        "start": 5840,
                        "end": 5841,
                        "name": "s",
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
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 5849,
            "end": 5873,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5851,
              "end": 5858,
              "name": "method4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 5858,
              "end": 5873,
              "id": null,
              "expression": false,
              "generator": true,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 5861,
                "end": 5873,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 5863,
                    "end": 5871,
                    "expression": {
                      "type": "YieldExpression",
                      "start": 5863,
                      "end": 5870,
                      "delegate": false,
                      "argument": {
                        "type": "Identifier",
                        "start": 5869,
                        "end": 5870,
                        "name": "s",
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
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 5878,
            "end": 5906,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5878,
              "end": 5885,
              "name": "method5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 5885,
              "end": 5906,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 5886,
                  "end": 5891,
                  "left": {
                    "type": "Identifier",
                    "start": 5886,
                    "end": 5887,
                    "name": "p",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 5890,
                    "end": 5891,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 5893,
                "end": 5906,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 5895,
                    "end": 5904,
                    "argument": {
                      "type": "Identifier",
                      "start": 5902,
                      "end": 5903,
                      "name": "p",
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
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExpressionStatement",
      "start": 5955,
      "end": 5960,
      "expression": {
        "type": "MemberExpression",
        "start": 5955,
        "end": 5959,
        "object": {
          "type": "Identifier",
          "start": 5955,
          "end": 5956,
          "name": "o",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 5957,
          "end": 5958,
          "name": "s",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 5961,
      "end": 5968,
      "expression": {
        "type": "MemberExpression",
        "start": 5961,
        "end": 5967,
        "object": {
          "type": "Identifier",
          "start": 5961,
          "end": 5962,
          "name": "o",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "MemberExpression",
          "start": 5963,
          "end": 5966,
          "object": {
            "type": "Identifier",
            "start": 5963,
            "end": 5964,
            "name": "N",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 5965,
            "end": 5966,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 5969,
      "end": 5979,
      "expression": {
        "type": "MemberExpression",
        "start": 5969,
        "end": 5978,
        "object": {
          "type": "Identifier",
          "start": 5969,
          "end": 5970,
          "name": "o",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "MemberExpression",
          "start": 5971,
          "end": 5977,
          "object": {
            "type": "Identifier",
            "start": 5971,
            "end": 5972,
            "name": "N",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 5973,
            "end": 5976,
            "value": "s",
            "raw": "\"s\""
          },
          "computed": true,
          "optional": false
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 6009,
      "end": 6024,
      "expression": {
        "type": "CallExpression",
        "start": 6009,
        "end": 6023,
        "callee": {
          "type": "Identifier",
          "start": 6009,
          "end": 6010,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 6021,
            "end": 6022,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 6010,
          "end": 6020,
          "params": [
            {
              "type": "TSTypeQuery",
              "start": 6011,
              "end": 6019,
              "exprName": {
                "type": "Identifier",
                "start": 6018,
                "end": 6019,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 6025,
      "end": 6044,
      "expression": {
        "type": "CallExpression",
        "start": 6025,
        "end": 6043,
        "callee": {
          "type": "Identifier",
          "start": 6025,
          "end": 6026,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 6039,
            "end": 6042,
            "object": {
              "type": "Identifier",
              "start": 6039,
              "end": 6040,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 6041,
              "end": 6042,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 6026,
          "end": 6038,
          "params": [
            {
              "type": "TSTypeQuery",
              "start": 6027,
              "end": 6037,
              "exprName": {
                "type": "TSQualifiedName",
                "start": 6034,
                "end": 6037,
                "left": {
                  "type": "Identifier",
                  "start": 6034,
                  "end": 6035,
                  "name": "N",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 6036,
                  "end": 6037,
                  "name": "s",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeArguments": null
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 6045,
      "end": 6067,
      "expression": {
        "type": "CallExpression",
        "start": 6045,
        "end": 6066,
        "callee": {
          "type": "Identifier",
          "start": 6045,
          "end": 6046,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 6059,
            "end": 6065,
            "object": {
              "type": "Identifier",
              "start": 6059,
              "end": 6060,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 6061,
              "end": 6064,
              "value": "s",
              "raw": "\"s\""
            },
            "computed": true,
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 6046,
          "end": 6058,
          "params": [
            {
              "type": "TSTypeQuery",
              "start": 6047,
              "end": 6057,
              "exprName": {
                "type": "TSQualifiedName",
                "start": 6054,
                "end": 6057,
                "left": {
                  "type": "Identifier",
                  "start": 6054,
                  "end": 6055,
                  "name": "N",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 6056,
                  "end": 6057,
                  "name": "s",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeArguments": null
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 6068,
      "end": 6073,
      "expression": {
        "type": "CallExpression",
        "start": 6068,
        "end": 6072,
        "callee": {
          "type": "Identifier",
          "start": 6068,
          "end": 6069,
          "name": "g",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 6070,
            "end": 6071,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 6074,
      "end": 6081,
      "expression": {
        "type": "CallExpression",
        "start": 6074,
        "end": 6080,
        "callee": {
          "type": "Identifier",
          "start": 6074,
          "end": 6075,
          "name": "g",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 6076,
            "end": 6079,
            "object": {
              "type": "Identifier",
              "start": 6076,
              "end": 6077,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 6078,
              "end": 6079,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 6082,
      "end": 6092,
      "expression": {
        "type": "CallExpression",
        "start": 6082,
        "end": 6091,
        "callee": {
          "type": "Identifier",
          "start": 6082,
          "end": 6083,
          "name": "g",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 6084,
            "end": 6090,
            "object": {
              "type": "Identifier",
              "start": 6084,
              "end": 6085,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 6086,
              "end": 6089,
              "value": "s",
              "raw": "\"s\""
            },
            "computed": true,
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 6115,
      "end": 6123,
      "expression": {
        "type": "LogicalExpression",
        "start": 6115,
        "end": 6122,
        "left": {
          "type": "Identifier",
          "start": 6115,
          "end": 6116,
          "name": "s",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "||",
        "right": {
          "type": "Literal",
          "start": 6120,
          "end": 6122,
          "value": "",
          "raw": "\"\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 6124,
      "end": 6134,
      "expression": {
        "type": "LogicalExpression",
        "start": 6124,
        "end": 6133,
        "left": {
          "type": "MemberExpression",
          "start": 6124,
          "end": 6127,
          "object": {
            "type": "Identifier",
            "start": 6124,
            "end": 6125,
            "name": "N",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 6126,
            "end": 6127,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "||",
        "right": {
          "type": "Literal",
          "start": 6131,
          "end": 6133,
          "value": "",
          "raw": "\"\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 6135,
      "end": 6148,
      "expression": {
        "type": "LogicalExpression",
        "start": 6135,
        "end": 6147,
        "left": {
          "type": "MemberExpression",
          "start": 6135,
          "end": 6141,
          "object": {
            "type": "Identifier",
            "start": 6135,
            "end": 6136,
            "name": "N",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 6137,
            "end": 6140,
            "value": "s",
            "raw": "\"s\""
          },
          "computed": true,
          "optional": false
        },
        "operator": "||",
        "right": {
          "type": "Literal",
          "start": 6145,
          "end": 6147,
          "value": "",
          "raw": "\"\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 6166,
      "end": 6194,
      "expression": {
        "type": "ConditionalExpression",
        "start": 6166,
        "end": 6193,
        "test": {
          "type": "BinaryExpression",
          "start": 6166,
          "end": 6183,
          "left": {
            "type": "CallExpression",
            "start": 6166,
            "end": 6179,
            "callee": {
              "type": "MemberExpression",
              "start": 6166,
              "end": 6177,
              "object": {
                "type": "Identifier",
                "start": 6166,
                "end": 6170,
                "name": "Math",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6171,
                "end": 6177,
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
          "operator": "*",
          "right": {
            "type": "Literal",
            "start": 6182,
            "end": 6183,
            "value": 2,
            "raw": "2"
          }
        },
        "consequent": {
          "type": "Identifier",
          "start": 6186,
          "end": 6187,
          "name": "s",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "alternate": {
          "type": "Literal",
          "start": 6190,
          "end": 6193,
          "value": "a",
          "raw": "\"a\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 6195,
      "end": 6225,
      "expression": {
        "type": "ConditionalExpression",
        "start": 6195,
        "end": 6224,
        "test": {
          "type": "BinaryExpression",
          "start": 6195,
          "end": 6212,
          "left": {
            "type": "CallExpression",
            "start": 6195,
            "end": 6208,
            "callee": {
              "type": "MemberExpression",
              "start": 6195,
              "end": 6206,
              "object": {
                "type": "Identifier",
                "start": 6195,
                "end": 6199,
                "name": "Math",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6200,
                "end": 6206,
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
          "operator": "*",
          "right": {
            "type": "Literal",
            "start": 6211,
            "end": 6212,
            "value": 2,
            "raw": "2"
          }
        },
        "consequent": {
          "type": "MemberExpression",
          "start": 6215,
          "end": 6218,
          "object": {
            "type": "Identifier",
            "start": 6215,
            "end": 6216,
            "name": "N",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 6217,
            "end": 6218,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "alternate": {
          "type": "Literal",
          "start": 6221,
          "end": 6224,
          "value": "a",
          "raw": "\"a\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 6226,
      "end": 6259,
      "expression": {
        "type": "ConditionalExpression",
        "start": 6226,
        "end": 6258,
        "test": {
          "type": "BinaryExpression",
          "start": 6226,
          "end": 6243,
          "left": {
            "type": "CallExpression",
            "start": 6226,
            "end": 6239,
            "callee": {
              "type": "MemberExpression",
              "start": 6226,
              "end": 6237,
              "object": {
                "type": "Identifier",
                "start": 6226,
                "end": 6230,
                "name": "Math",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6231,
                "end": 6237,
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
          "operator": "*",
          "right": {
            "type": "Literal",
            "start": 6242,
            "end": 6243,
            "value": 2,
            "raw": "2"
          }
        },
        "consequent": {
          "type": "MemberExpression",
          "start": 6246,
          "end": 6252,
          "object": {
            "type": "Identifier",
            "start": 6246,
            "end": 6247,
            "name": "N",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 6248,
            "end": 6251,
            "value": "s",
            "raw": "\"s\""
          },
          "computed": true,
          "optional": false
        },
        "alternate": {
          "type": "Literal",
          "start": 6255,
          "end": 6258,
          "value": "a",
          "raw": "\"a\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 6288,
      "end": 6324,
      "expression": {
        "type": "ObjectExpression",
        "start": 6289,
        "end": 6322,
        "properties": [
          {
            "type": "Property",
            "start": 6295,
            "end": 6303,
            "method": false,
            "shorthand": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 6296,
              "end": 6297,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 6300,
              "end": 6303,
              "value": "a",
              "raw": "\"a\""
            },
            "kind": "init",
            "optional": false
          },
          {
            "type": "Property",
            "start": 6309,
            "end": 6319,
            "method": false,
            "shorthand": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 6310,
              "end": 6313,
              "object": {
                "type": "Identifier",
                "start": 6310,
                "end": 6311,
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6312,
                "end": 6313,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 6316,
              "end": 6319,
              "value": "b",
              "raw": "\"b\""
            },
            "kind": "init",
            "optional": false
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 6326,
      "end": 6413,
      "id": {
        "type": "Identifier",
        "start": 6332,
        "end": 6334,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 6335,
        "end": 6413,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 6341,
            "end": 6357,
            "static": true,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 6349,
              "end": 6350,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6351,
              "end": 6356,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 6353,
                "end": 6356,
                "literal": {
                  "type": "Literal",
                  "start": 6353,
                  "end": 6356,
                  "value": "a",
                  "raw": "\"a\""
                }
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 6362,
            "end": 6380,
            "static": true,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 6370,
              "end": 6373,
              "object": {
                "type": "Identifier",
                "start": 6370,
                "end": 6371,
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6372,
                "end": 6373,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6374,
              "end": 6379,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 6376,
                "end": 6379,
                "literal": {
                  "type": "Literal",
                  "start": 6376,
                  "end": 6379,
                  "value": "b",
                  "raw": "\"b\""
                }
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 6386,
            "end": 6395,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 6387,
              "end": 6388,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6389,
              "end": 6394,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 6391,
                "end": 6394,
                "literal": {
                  "type": "Literal",
                  "start": 6391,
                  "end": 6394,
                  "value": "a",
                  "raw": "\"a\""
                }
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 6400,
            "end": 6411,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 6401,
              "end": 6404,
              "object": {
                "type": "Identifier",
                "start": 6401,
                "end": 6402,
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6403,
                "end": 6404,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6405,
              "end": 6410,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 6407,
                "end": 6410,
                "literal": {
                  "type": "Literal",
                  "start": 6407,
                  "end": 6410,
                  "value": "b",
                  "raw": "\"b\""
                }
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 6436,
      "end": 6644,
      "id": {
        "type": "Identifier",
        "start": 6446,
        "end": 6453,
        "name": "Context",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 6454,
        "end": 6644,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 6460,
            "end": 6480,
            "key": {
              "type": "Identifier",
              "start": 6460,
              "end": 6467,
              "name": "method1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 6469,
              "end": 6479,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 6471,
                "end": 6479,
                "exprName": {
                  "type": "Identifier",
                  "start": 6478,
                  "end": 6479,
                  "name": "s",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 6485,
            "end": 6514,
            "key": {
              "type": "Identifier",
              "start": 6485,
              "end": 6492,
              "name": "method2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 6494,
              "end": 6513,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 6496,
                "end": 6513,
                "typeName": {
                  "type": "Identifier",
                  "start": 6496,
                  "end": 6503,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 6503,
                  "end": 6513,
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "start": 6504,
                      "end": 6512,
                      "exprName": {
                        "type": "Identifier",
                        "start": 6511,
                        "end": 6512,
                        "name": "s",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 6519,
            "end": 6562,
            "key": {
              "type": "Identifier",
              "start": 6519,
              "end": 6526,
              "name": "method3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 6528,
              "end": 6561,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 6530,
                "end": 6561,
                "typeName": {
                  "type": "Identifier",
                  "start": 6530,
                  "end": 6551,
                  "name": "AsyncIterableIterator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 6551,
                  "end": 6561,
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "start": 6552,
                      "end": 6560,
                      "exprName": {
                        "type": "Identifier",
                        "start": 6559,
                        "end": 6560,
                        "name": "s",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 6567,
            "end": 6605,
            "key": {
              "type": "Identifier",
              "start": 6567,
              "end": 6574,
              "name": "method4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 6576,
              "end": 6604,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 6578,
                "end": 6604,
                "typeName": {
                  "type": "Identifier",
                  "start": 6578,
                  "end": 6594,
                  "name": "IterableIterator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 6594,
                  "end": 6604,
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "start": 6595,
                      "end": 6603,
                      "exprName": {
                        "type": "Identifier",
                        "start": 6602,
                        "end": 6603,
                        "name": "s",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 6610,
            "end": 6642,
            "key": {
              "type": "Identifier",
              "start": 6610,
              "end": 6617,
              "name": "method5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 6618,
                "end": 6630,
                "name": "p",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 6620,
                  "end": 6630,
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "start": 6622,
                    "end": 6630,
                    "exprName": {
                      "type": "Identifier",
                      "start": 6629,
                      "end": 6630,
                      "name": "s",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 6631,
              "end": 6641,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 6633,
                "end": 6641,
                "exprName": {
                  "type": "Identifier",
                  "start": 6640,
                  "end": 6641,
                  "name": "s",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6646,
      "end": 7165,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6652,
          "end": 7164,
          "id": {
            "type": "Identifier",
            "start": 6652,
            "end": 6663,
            "name": "o3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6654,
              "end": 6663,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 6656,
                "end": 6663,
                "typeName": {
                  "type": "Identifier",
                  "start": 6656,
                  "end": 6663,
                  "name": "Context",
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
            "type": "ObjectExpression",
            "start": 6666,
            "end": 7164,
            "properties": [
              {
                "type": "Property",
                "start": 6672,
                "end": 6762,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 6672,
                  "end": 6679,
                  "name": "method1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 6679,
                  "end": 6762,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 6682,
                    "end": 6762,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 6692,
                        "end": 6701,
                        "argument": {
                          "type": "Identifier",
                          "start": 6699,
                          "end": 6700,
                          "name": "s",
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
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 6768,
                "end": 6864,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 6774,
                  "end": 6781,
                  "name": "method2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 6781,
                  "end": 6864,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": true,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 6784,
                    "end": 6864,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 6794,
                        "end": 6803,
                        "argument": {
                          "type": "Identifier",
                          "start": 6801,
                          "end": 6802,
                          "name": "s",
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
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 6870,
                "end": 6966,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 6878,
                  "end": 6885,
                  "name": "method3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 6885,
                  "end": 6966,
                  "id": null,
                  "expression": false,
                  "generator": true,
                  "async": true,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 6888,
                    "end": 6966,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 6898,
                        "end": 6906,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 6898,
                          "end": 6905,
                          "delegate": false,
                          "argument": {
                            "type": "Identifier",
                            "start": 6904,
                            "end": 6905,
                            "name": "s",
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
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 6972,
                "end": 7062,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 6974,
                  "end": 6981,
                  "name": "method4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 6981,
                  "end": 7062,
                  "id": null,
                  "expression": false,
                  "generator": true,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 6984,
                    "end": 7062,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 6994,
                        "end": 7002,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 6994,
                          "end": 7001,
                          "delegate": false,
                          "argument": {
                            "type": "Identifier",
                            "start": 7000,
                            "end": 7001,
                            "name": "s",
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
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 7068,
                "end": 7161,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 7068,
                  "end": 7075,
                  "name": "method5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 7075,
                  "end": 7161,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "start": 7076,
                      "end": 7081,
                      "left": {
                        "type": "Identifier",
                        "start": 7076,
                        "end": 7077,
                        "name": "p",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 7080,
                        "end": 7081,
                        "name": "s",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 7083,
                    "end": 7161,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 7146,
                        "end": 7155,
                        "argument": {
                          "type": "Identifier",
                          "start": 7153,
                          "end": 7154,
                          "name": "p",
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
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 7210,
      "end": 7366,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7216,
          "end": 7365,
          "id": {
            "type": "Identifier",
            "start": 7216,
            "end": 7218,
            "name": "o4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 7221,
            "end": 7365,
            "properties": [
              {
                "type": "Property",
                "start": 7227,
                "end": 7283,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 7227,
                  "end": 7234,
                  "name": "method1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 7234,
                  "end": 7283,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 7235,
                      "end": 7246,
                      "name": "p",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 7236,
                        "end": 7246,
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "start": 7238,
                          "end": 7246,
                          "exprName": {
                            "type": "Identifier",
                            "start": 7245,
                            "end": 7246,
                            "name": "s",
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
                    "start": 7258,
                    "end": 7283,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 7268,
                        "end": 7277,
                        "argument": {
                          "type": "Identifier",
                          "start": 7275,
                          "end": 7276,
                          "name": "p",
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
                    "start": 7247,
                    "end": 7257,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 7249,
                      "end": 7257,
                      "exprName": {
                        "type": "Identifier",
                        "start": 7256,
                        "end": 7257,
                        "name": "s",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 7289,
                "end": 7363,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 7289,
                  "end": 7296,
                  "name": "method2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 7296,
                  "end": 7363,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 7297,
                      "end": 7317,
                      "name": "p",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 7298,
                        "end": 7317,
                        "typeAnnotation": {
                          "type": "TSIndexedAccessType",
                          "start": 7300,
                          "end": 7317,
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 7300,
                            "end": 7301,
                            "typeName": {
                              "type": "Identifier",
                              "start": 7300,
                              "end": 7301,
                              "name": "I",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          "indexType": {
                            "type": "TSLiteralType",
                            "start": 7302,
                            "end": 7316,
                            "literal": {
                              "type": "Literal",
                              "start": 7302,
                              "end": 7316,
                              "value": "readonlyType",
                              "raw": "\"readonlyType\""
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 7338,
                    "end": 7363,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 7348,
                        "end": 7357,
                        "argument": {
                          "type": "Identifier",
                          "start": 7355,
                          "end": 7356,
                          "name": "p",
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
                    "start": 7318,
                    "end": 7337,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 7320,
                      "end": 7337,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 7320,
                        "end": 7321,
                        "typeName": {
                          "type": "Identifier",
                          "start": 7320,
                          "end": 7321,
                          "name": "I",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 7322,
                        "end": 7336,
                        "literal": {
                          "type": "Literal",
                          "start": 7322,
                          "end": 7336,
                          "value": "readonlyType",
                          "raw": "\"readonlyType\""
                        }
                      }
                    }
                  }
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 7368,
      "end": 7530,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7374,
          "end": 7529,
          "id": {
            "type": "Identifier",
            "start": 7374,
            "end": 7377,
            "name": "ce0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ClassExpression",
            "start": 7380,
            "end": 7529,
            "id": null,
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 7386,
              "end": 7529,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 7392,
                  "end": 7448,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 7392,
                    "end": 7399,
                    "name": "method1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 7399,
                    "end": 7448,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 7400,
                        "end": 7411,
                        "name": "p",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 7401,
                          "end": 7411,
                          "typeAnnotation": {
                            "type": "TSTypeQuery",
                            "start": 7403,
                            "end": 7411,
                            "exprName": {
                              "type": "Identifier",
                              "start": 7410,
                              "end": 7411,
                              "name": "s",
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
                      "start": 7423,
                      "end": 7448,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 7433,
                          "end": 7442,
                          "argument": {
                            "type": "Identifier",
                            "start": 7440,
                            "end": 7441,
                            "name": "p",
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
                      "start": 7412,
                      "end": 7422,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 7414,
                        "end": 7422,
                        "exprName": {
                          "type": "Identifier",
                          "start": 7421,
                          "end": 7422,
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 7453,
                  "end": 7527,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 7453,
                    "end": 7460,
                    "name": "method2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 7460,
                    "end": 7527,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 7461,
                        "end": 7481,
                        "name": "p",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 7462,
                          "end": 7481,
                          "typeAnnotation": {
                            "type": "TSIndexedAccessType",
                            "start": 7464,
                            "end": 7481,
                            "objectType": {
                              "type": "TSTypeReference",
                              "start": 7464,
                              "end": 7465,
                              "typeName": {
                                "type": "Identifier",
                                "start": 7464,
                                "end": 7465,
                                "name": "I",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            },
                            "indexType": {
                              "type": "TSLiteralType",
                              "start": 7466,
                              "end": 7480,
                              "literal": {
                                "type": "Literal",
                                "start": 7466,
                                "end": 7480,
                                "value": "readonlyType",
                                "raw": "\"readonlyType\""
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 7502,
                      "end": 7527,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 7512,
                          "end": 7521,
                          "argument": {
                            "type": "Identifier",
                            "start": 7519,
                            "end": 7520,
                            "name": "p",
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
                      "start": 7482,
                      "end": 7501,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 7484,
                        "end": 7501,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 7484,
                          "end": 7485,
                          "typeName": {
                            "type": "Identifier",
                            "start": 7484,
                            "end": 7485,
                            "name": "I",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "start": 7486,
                          "end": 7500,
                          "literal": {
                            "type": "Literal",
                            "start": 7486,
                            "end": 7500,
                            "value": "readonlyType",
                            "raw": "\"readonlyType\""
                          }
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 7532,
      "end": 7619,
      "id": {
        "type": "Identifier",
        "start": 7541,
        "end": 7563,
        "name": "funcInferredReturnType",
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
          "start": 7564,
          "end": 7598,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 7567,
            "end": 7598,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 7569,
              "end": 7598,
              "members": [
                {
                  "type": "TSMethodSignature",
                  "start": 7571,
                  "end": 7596,
                  "key": {
                    "type": "Identifier",
                    "start": 7571,
                    "end": 7577,
                    "name": "method",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 7578,
                      "end": 7589,
                      "name": "p",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 7579,
                        "end": 7589,
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "start": 7581,
                          "end": 7589,
                          "exprName": {
                            "type": "Identifier",
                            "start": 7588,
                            "end": 7589,
                            "name": "s",
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
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 7590,
                    "end": 7596,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 7592,
                      "end": 7596
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
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
        "start": 7600,
        "end": 7619,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 7606,
            "end": 7617,
            "argument": {
              "type": "Identifier",
              "start": 7613,
              "end": 7616,
              "name": "obj",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
