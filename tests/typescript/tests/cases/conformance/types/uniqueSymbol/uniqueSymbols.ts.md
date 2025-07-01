__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "constCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 53
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 62
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 56,
            "end": 64
          },
          "definite": false,
          "start": 44,
          "end": 64
        }
      ],
      "declare": false,
      "start": 38,
      "end": 65
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "letCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 77
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 86
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 80,
            "end": 88
          },
          "definite": false,
          "start": 70,
          "end": 88
        }
      ],
      "declare": false,
      "start": 66,
      "end": 89
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
            "name": "varCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 101
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 110
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 104,
            "end": 112
          },
          "definite": false,
          "start": 94,
          "end": 112
        }
      ],
      "declare": false,
      "start": 90,
      "end": 113
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "constType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 180,
                  "end": 186
                },
                "start": 173,
                "end": 186
              },
              "start": 171,
              "end": 186
            },
            "start": 162,
            "end": 186
          },
          "init": null,
          "definite": false,
          "start": 162,
          "end": 186
        }
      ],
      "declare": true,
      "start": 148,
      "end": 187
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "constTypeAndCall",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 266,
                  "end": 272
                },
                "start": 259,
                "end": 272
              },
              "start": 257,
              "end": 272
            },
            "start": 241,
            "end": 272
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 275,
              "end": 281
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 275,
            "end": 283
          },
          "definite": false,
          "start": 241,
          "end": 283
        }
      ],
      "declare": false,
      "start": 235,
      "end": 284
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "constInitToConstCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 324,
            "end": 344
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "constCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 347,
            "end": 356
          },
          "definite": false,
          "start": 324,
          "end": 356
        }
      ],
      "declare": false,
      "start": 318,
      "end": 357
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "constInitToLetCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 364,
            "end": 382
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "letCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 385,
            "end": 392
          },
          "definite": false,
          "start": 364,
          "end": 392
        }
      ],
      "declare": false,
      "start": 358,
      "end": 393
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "constInitToVarCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 400,
            "end": 418
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "varCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 421,
            "end": 428
          },
          "definite": false,
          "start": 400,
          "end": 428
        }
      ],
      "declare": false,
      "start": 394,
      "end": 429
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "constInitToConstDeclAmbient",
            "optional": false,
            "typeAnnotation": null,
            "start": 436,
            "end": 463
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "constType",
            "optional": false,
            "typeAnnotation": null,
            "start": 466,
            "end": 475
          },
          "definite": false,
          "start": 436,
          "end": 475
        }
      ],
      "declare": false,
      "start": 430,
      "end": 476
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "letInitToConstCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 481,
            "end": 499
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "constCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 502,
            "end": 511
          },
          "definite": false,
          "start": 481,
          "end": 511
        }
      ],
      "declare": false,
      "start": 477,
      "end": 512
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "letInitToLetCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 517,
            "end": 533
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "letCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 536,
            "end": 543
          },
          "definite": false,
          "start": 517,
          "end": 543
        }
      ],
      "declare": false,
      "start": 513,
      "end": 544
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "letInitToVarCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 549,
            "end": 565
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "varCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 568,
            "end": 575
          },
          "definite": false,
          "start": 549,
          "end": 575
        }
      ],
      "declare": false,
      "start": 545,
      "end": 576
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "letInitToConstDeclAmbient",
            "optional": false,
            "typeAnnotation": null,
            "start": 581,
            "end": 606
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "constType",
            "optional": false,
            "typeAnnotation": null,
            "start": 609,
            "end": 618
          },
          "definite": false,
          "start": 581,
          "end": 618
        }
      ],
      "declare": false,
      "start": 577,
      "end": 619
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
            "name": "varInitToConstCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 624,
            "end": 642
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "constCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 645,
            "end": 654
          },
          "definite": false,
          "start": 624,
          "end": 654
        }
      ],
      "declare": false,
      "start": 620,
      "end": 655
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
            "name": "varInitToLetCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 660,
            "end": 676
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "letCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 679,
            "end": 686
          },
          "definite": false,
          "start": 660,
          "end": 686
        }
      ],
      "declare": false,
      "start": 656,
      "end": 687
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
            "name": "varInitToVarCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 692,
            "end": 708
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "varCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 711,
            "end": 718
          },
          "definite": false,
          "start": 692,
          "end": 718
        }
      ],
      "declare": false,
      "start": 688,
      "end": 719
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
            "name": "varInitToConstDeclAmbient",
            "optional": false,
            "typeAnnotation": null,
            "start": 724,
            "end": 749
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "constType",
            "optional": false,
            "typeAnnotation": null,
            "start": 752,
            "end": 761
          },
          "definite": false,
          "start": 724,
          "end": 761
        }
      ],
      "declare": false,
      "start": 720,
      "end": 762
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "constInitToConstCallWithTypeQuery",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constCall",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 860,
                  "end": 869
                },
                "typeArguments": null,
                "start": 853,
                "end": 869
              },
              "start": 851,
              "end": 869
            },
            "start": 818,
            "end": 869
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "constCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 872,
            "end": 881
          },
          "definite": false,
          "start": 818,
          "end": 881
        }
      ],
      "declare": false,
      "start": 812,
      "end": 882
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "constInitToConstDeclAmbientWithTypeQuery",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 938,
                  "end": 947
                },
                "typeArguments": null,
                "start": 931,
                "end": 947
              },
              "start": 929,
              "end": 947
            },
            "start": 889,
            "end": 947
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "constType",
            "optional": false,
            "typeAnnotation": null,
            "start": 950,
            "end": 959
          },
          "definite": false,
          "start": 889,
          "end": 959
        }
      ],
      "declare": false,
      "start": 883,
      "end": 960
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fromAny",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 1063,
                  "end": 1069
                },
                "start": 1056,
                "end": 1069
              },
              "start": 1054,
              "end": 1069
            },
            "start": 1047,
            "end": 1069
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 1072,
              "end": 1074
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1078,
              "end": 1081
            },
            "start": 1072,
            "end": 1081
          },
          "definite": false,
          "start": 1047,
          "end": 1081
        }
      ],
      "declare": false,
      "start": 1041,
      "end": 1082
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "funcReturnConstCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 1122,
        "end": 1141
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "constCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 1153,
              "end": 1162
            },
            "start": 1146,
            "end": 1163
          }
        ],
        "start": 1144,
        "end": 1165
      },
      "expression": false,
      "start": 1113,
      "end": 1165
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "funcReturnLetCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 1175,
        "end": 1192
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "letCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 1204,
              "end": 1211
            },
            "start": 1197,
            "end": 1212
          }
        ],
        "start": 1195,
        "end": 1214
      },
      "expression": false,
      "start": 1166,
      "end": 1214
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "funcReturnVarCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 1224,
        "end": 1241
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "varCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 1253,
              "end": 1260
            },
            "start": 1246,
            "end": 1261
          }
        ],
        "start": 1244,
        "end": 1263
      },
      "expression": false,
      "start": 1215,
      "end": 1263
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "funcReturnConstCallWithTypeQuery",
        "optional": false,
        "typeAnnotation": null,
        "start": 1315,
        "end": 1347
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "constCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 1358,
            "end": 1367
          },
          "typeArguments": null,
          "start": 1351,
          "end": 1367
        },
        "start": 1349,
        "end": 1367
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "constCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 1377,
              "end": 1386
            },
            "start": 1370,
            "end": 1387
          }
        ],
        "start": 1368,
        "end": 1389
      },
      "expression": false,
      "start": 1306,
      "end": 1389
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "genFuncYieldConstCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 1439,
        "end": 1460
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "constCall",
                "optional": false,
                "typeAnnotation": null,
                "start": 1471,
                "end": 1480
              },
              "start": 1465,
              "end": 1480
            },
            "directive": null,
            "start": 1465,
            "end": 1481
          }
        ],
        "start": 1463,
        "end": 1483
      },
      "expression": false,
      "start": 1429,
      "end": 1483
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "genFuncYieldLetCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 1494,
        "end": 1513
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "letCall",
                "optional": false,
                "typeAnnotation": null,
                "start": 1524,
                "end": 1531
              },
              "start": 1518,
              "end": 1531
            },
            "directive": null,
            "start": 1518,
            "end": 1532
          }
        ],
        "start": 1516,
        "end": 1534
      },
      "expression": false,
      "start": 1484,
      "end": 1534
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "genFuncYieldVarCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 1545,
        "end": 1564
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "varCall",
                "optional": false,
                "typeAnnotation": null,
                "start": 1575,
                "end": 1582
              },
              "start": 1569,
              "end": 1582
            },
            "directive": null,
            "start": 1569,
            "end": 1583
          }
        ],
        "start": 1567,
        "end": 1585
      },
      "expression": false,
      "start": 1535,
      "end": 1585
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "genFuncYieldConstCallWithTypeQuery",
        "optional": false,
        "typeAnnotation": null,
        "start": 1648,
        "end": 1682
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IterableIterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 1686,
            "end": 1702
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constCall",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1710,
                  "end": 1719
                },
                "typeArguments": null,
                "start": 1703,
                "end": 1719
              }
            ],
            "start": 1702,
            "end": 1720
          },
          "start": 1686,
          "end": 1720
        },
        "start": 1684,
        "end": 1720
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "constCall",
                "optional": false,
                "typeAnnotation": null,
                "start": 1729,
                "end": 1738
              },
              "start": 1723,
              "end": 1738
            },
            "directive": null,
            "start": 1723,
            "end": 1739
          }
        ],
        "start": 1721,
        "end": 1741
      },
      "expression": false,
      "start": 1638,
      "end": 1741
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "asyncFuncReturnConstCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 1793,
        "end": 1817
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "constCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 1829,
              "end": 1838
            },
            "start": 1822,
            "end": 1839
          }
        ],
        "start": 1820,
        "end": 1841
      },
      "expression": false,
      "start": 1778,
      "end": 1841
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "asyncFuncReturnLetCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 1857,
        "end": 1879
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "letCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 1891,
              "end": 1898
            },
            "start": 1884,
            "end": 1899
          }
        ],
        "start": 1882,
        "end": 1901
      },
      "expression": false,
      "start": 1842,
      "end": 1901
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "asyncFuncReturnVarCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 1917,
        "end": 1939
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "varCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 1951,
              "end": 1958
            },
            "start": 1944,
            "end": 1959
          }
        ],
        "start": 1942,
        "end": 1961
      },
      "expression": false,
      "start": 1902,
      "end": 1961
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "asyncGenFuncYieldConstCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 2023,
        "end": 2049
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "constCall",
                "optional": false,
                "typeAnnotation": null,
                "start": 2060,
                "end": 2069
              },
              "start": 2054,
              "end": 2069
            },
            "directive": null,
            "start": 2054,
            "end": 2070
          }
        ],
        "start": 2052,
        "end": 2072
      },
      "expression": false,
      "start": 2007,
      "end": 2072
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "asyncGenFuncYieldLetCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 2089,
        "end": 2113
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "letCall",
                "optional": false,
                "typeAnnotation": null,
                "start": 2124,
                "end": 2131
              },
              "start": 2118,
              "end": 2131
            },
            "directive": null,
            "start": 2118,
            "end": 2132
          }
        ],
        "start": 2116,
        "end": 2134
      },
      "expression": false,
      "start": 2073,
      "end": 2134
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "asyncGenFuncYieldVarCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 2151,
        "end": 2175
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "varCall",
                "optional": false,
                "typeAnnotation": null,
                "start": 2186,
                "end": 2193
              },
              "start": 2180,
              "end": 2193
            },
            "directive": null,
            "start": 2180,
            "end": 2194
          }
        ],
        "start": 2178,
        "end": 2196
      },
      "expression": false,
      "start": 2135,
      "end": 2196
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 2215,
        "end": 2216
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyStaticCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 2239,
              "end": 2257
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 2260,
                "end": 2266
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2260,
              "end": 2268
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 2223,
            "end": 2269
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyStaticType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2290,
              "end": 2308
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 2317,
                  "end": 2323
                },
                "start": 2310,
                "end": 2323
              },
              "start": 2308,
              "end": 2323
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 2274,
            "end": 2324
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyStaticTypeAndCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 2345,
              "end": 2370
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 2379,
                  "end": 2385
                },
                "start": 2372,
                "end": 2385
              },
              "start": 2370,
              "end": 2385
            },
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 2388,
                "end": 2394
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2388,
              "end": 2396
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 2329,
            "end": 2397
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "readwriteStaticCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 2409,
              "end": 2428
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 2431,
                "end": 2437
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2431,
              "end": 2439
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2402,
            "end": 2440
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 2455,
              "end": 2467
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 2470,
                "end": 2476
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2470,
              "end": 2478
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 2446,
            "end": 2479
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "readwriteCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 2484,
              "end": 2497
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 2500,
                "end": 2506
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2500,
              "end": 2508
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2484,
            "end": 2509
          }
        ],
        "start": 2217,
        "end": 2511
      },
      "abstract": false,
      "declare": false,
      "start": 2209,
      "end": 2511
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2529,
                  "end": 2530
                },
                "typeArguments": null,
                "start": 2529,
                "end": 2530
              },
              "start": 2527,
              "end": 2530
            },
            "start": 2526,
            "end": 2530
          },
          "init": null,
          "definite": false,
          "start": 2526,
          "end": 2530
        }
      ],
      "declare": true,
      "start": 2512,
      "end": 2531
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "constInitToCReadonlyStaticCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 2539,
            "end": 2569
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 2572,
              "end": 2573
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyStaticCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 2574,
              "end": 2592
            },
            "optional": false,
            "computed": false,
            "start": 2572,
            "end": 2592
          },
          "definite": false,
          "start": 2539,
          "end": 2592
        }
      ],
      "declare": false,
      "start": 2533,
      "end": 2593
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "constInitToCReadonlyStaticType",
            "optional": false,
            "typeAnnotation": null,
            "start": 2600,
            "end": 2630
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 2633,
              "end": 2634
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyStaticType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2635,
              "end": 2653
            },
            "optional": false,
            "computed": false,
            "start": 2633,
            "end": 2653
          },
          "definite": false,
          "start": 2600,
          "end": 2653
        }
      ],
      "declare": false,
      "start": 2594,
      "end": 2654
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "constInitToCReadonlyStaticTypeAndCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 2661,
            "end": 2698
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 2701,
              "end": 2702
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyStaticTypeAndCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 2703,
              "end": 2728
            },
            "optional": false,
            "computed": false,
            "start": 2701,
            "end": 2728
          },
          "definite": false,
          "start": 2661,
          "end": 2728
        }
      ],
      "declare": false,
      "start": 2655,
      "end": 2729
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "constInitToCReadwriteStaticCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 2736,
            "end": 2767
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 2770,
              "end": 2771
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readwriteStaticCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 2772,
              "end": 2791
            },
            "optional": false,
            "computed": false,
            "start": 2770,
            "end": 2791
          },
          "definite": false,
          "start": 2736,
          "end": 2791
        }
      ],
      "declare": false,
      "start": 2730,
      "end": 2792
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "constInitToCReadonlyStaticCallWithTypeQuery",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2852,
                    "end": 2853
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "readonlyStaticCall",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2854,
                    "end": 2872
                  },
                  "start": 2852,
                  "end": 2872
                },
                "typeArguments": null,
                "start": 2845,
                "end": 2872
              },
              "start": 2843,
              "end": 2872
            },
            "start": 2800,
            "end": 2872
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 2875,
              "end": 2876
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyStaticCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 2877,
              "end": 2895
            },
            "optional": false,
            "computed": false,
            "start": 2875,
            "end": 2895
          },
          "definite": false,
          "start": 2800,
          "end": 2895
        }
      ],
      "declare": false,
      "start": 2794,
      "end": 2896
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "constInitToCReadonlyStaticTypeWithTypeQuery",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2955,
                    "end": 2956
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "readonlyStaticType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2957,
                    "end": 2975
                  },
                  "start": 2955,
                  "end": 2975
                },
                "typeArguments": null,
                "start": 2948,
                "end": 2975
              },
              "start": 2946,
              "end": 2975
            },
            "start": 2903,
            "end": 2975
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 2978,
              "end": 2979
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyStaticType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2980,
              "end": 2998
            },
            "optional": false,
            "computed": false,
            "start": 2978,
            "end": 2998
          },
          "definite": false,
          "start": 2903,
          "end": 2998
        }
      ],
      "declare": false,
      "start": 2897,
      "end": 2999
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "constInitToCReadonlyStaticTypeAndCallWithTypeQuery",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3065,
                    "end": 3066
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "readonlyStaticTypeAndCall",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3067,
                    "end": 3092
                  },
                  "start": 3065,
                  "end": 3092
                },
                "typeArguments": null,
                "start": 3058,
                "end": 3092
              },
              "start": 3056,
              "end": 3092
            },
            "start": 3006,
            "end": 3092
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 3095,
              "end": 3096
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyStaticTypeAndCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 3097,
              "end": 3122
            },
            "optional": false,
            "computed": false,
            "start": 3095,
            "end": 3122
          },
          "definite": false,
          "start": 3006,
          "end": 3122
        }
      ],
      "declare": false,
      "start": 3000,
      "end": 3123
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "constInitToCReadwriteStaticCallWithTypeQuery",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3183,
                    "end": 3184
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "readwriteStaticCall",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3185,
                    "end": 3204
                  },
                  "start": 3183,
                  "end": 3204
                },
                "typeArguments": null,
                "start": 3176,
                "end": 3204
              },
              "start": 3174,
              "end": 3204
            },
            "start": 3130,
            "end": 3204
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 3207,
              "end": 3208
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readwriteStaticCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 3209,
              "end": 3228
            },
            "optional": false,
            "computed": false,
            "start": 3207,
            "end": 3228
          },
          "definite": false,
          "start": 3130,
          "end": 3228
        }
      ],
      "declare": false,
      "start": 3124,
      "end": 3229
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "constInitToCReadonlyCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 3237,
            "end": 3261
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 3264,
              "end": 3265
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 3266,
              "end": 3278
            },
            "optional": false,
            "computed": false,
            "start": 3264,
            "end": 3278
          },
          "definite": false,
          "start": 3237,
          "end": 3278
        }
      ],
      "declare": false,
      "start": 3231,
      "end": 3279
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "constInitToCReadwriteCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 3286,
            "end": 3311
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 3314,
              "end": 3315
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readwriteCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 3316,
              "end": 3329
            },
            "optional": false,
            "computed": false,
            "start": 3314,
            "end": 3329
          },
          "definite": false,
          "start": 3286,
          "end": 3329
        }
      ],
      "declare": false,
      "start": 3280,
      "end": 3330
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "constInitToCReadonlyCallWithTypeQuery",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3383,
                    "end": 3384
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "readonlyCall",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3385,
                    "end": 3397
                  },
                  "start": 3383,
                  "end": 3397
                },
                "typeArguments": null,
                "start": 3376,
                "end": 3397
              },
              "start": 3374,
              "end": 3397
            },
            "start": 3337,
            "end": 3397
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 3400,
              "end": 3401
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 3402,
              "end": 3414
            },
            "optional": false,
            "computed": false,
            "start": 3400,
            "end": 3414
          },
          "definite": false,
          "start": 3337,
          "end": 3414
        }
      ],
      "declare": false,
      "start": 3331,
      "end": 3415
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "constInitToCReadwriteCallWithTypeQuery",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3469,
                    "end": 3470
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "readwriteCall",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3471,
                    "end": 3484
                  },
                  "start": 3469,
                  "end": 3484
                },
                "typeArguments": null,
                "start": 3462,
                "end": 3484
              },
              "start": 3460,
              "end": 3484
            },
            "start": 3422,
            "end": 3484
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 3487,
              "end": 3488
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readwriteCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 3489,
              "end": 3502
            },
            "optional": false,
            "computed": false,
            "start": 3487,
            "end": 3502
          },
          "definite": false,
          "start": 3422,
          "end": 3502
        }
      ],
      "declare": false,
      "start": 3416,
      "end": 3503
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "constInitToCReadonlyCallWithIndexedAccess",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3553,
                    "end": 3554
                  },
                  "typeArguments": null,
                  "start": 3553,
                  "end": 3554
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "readonlyCall",
                    "raw": "\"readonlyCall\"",
                    "start": 3555,
                    "end": 3569
                  },
                  "start": 3555,
                  "end": 3569
                },
                "start": 3553,
                "end": 3570
              },
              "start": 3551,
              "end": 3570
            },
            "start": 3510,
            "end": 3570
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 3573,
              "end": 3574
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 3575,
              "end": 3587
            },
            "optional": false,
            "computed": false,
            "start": 3573,
            "end": 3587
          },
          "definite": false,
          "start": 3510,
          "end": 3587
        }
      ],
      "declare": false,
      "start": 3504,
      "end": 3588
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "constInitToCReadwriteCallWithIndexedAccess",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3639,
                    "end": 3640
                  },
                  "typeArguments": null,
                  "start": 3639,
                  "end": 3640
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "readwriteCall",
                    "raw": "\"readwriteCall\"",
                    "start": 3641,
                    "end": 3656
                  },
                  "start": 3641,
                  "end": 3656
                },
                "start": 3639,
                "end": 3657
              },
              "start": 3637,
              "end": 3657
            },
            "start": 3595,
            "end": 3657
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 3660,
              "end": 3661
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readwriteCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 3662,
              "end": 3675
            },
            "optional": false,
            "computed": false,
            "start": 3660,
            "end": 3675
          },
          "definite": false,
          "start": 3595,
          "end": 3675
        }
      ],
      "declare": false,
      "start": 3589,
      "end": 3676
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 3702,
        "end": 3703
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 3719,
              "end": 3731
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 3740,
                  "end": 3746
                },
                "start": 3733,
                "end": 3746
              },
              "start": 3731,
              "end": 3746
            },
            "accessibility": null,
            "static": false,
            "start": 3710,
            "end": 3747
          }
        ],
        "start": 3704,
        "end": 3749
      },
      "declare": false,
      "start": 3692,
      "end": 3749
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3767,
                  "end": 3768
                },
                "typeArguments": null,
                "start": 3767,
                "end": 3768
              },
              "start": 3765,
              "end": 3768
            },
            "start": 3764,
            "end": 3768
          },
          "init": null,
          "definite": false,
          "start": 3764,
          "end": 3768
        }
      ],
      "declare": true,
      "start": 3750,
      "end": 3769
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "constInitToIReadonlyType",
            "optional": false,
            "typeAnnotation": null,
            "start": 3777,
            "end": 3801
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 3804,
              "end": 3805
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 3806,
              "end": 3818
            },
            "optional": false,
            "computed": false,
            "start": 3804,
            "end": 3818
          },
          "definite": false,
          "start": 3777,
          "end": 3818
        }
      ],
      "declare": false,
      "start": 3771,
      "end": 3819
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "constInitToIReadonlyTypeWithTypeQuery",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3872,
                    "end": 3873
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "readonlyType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3874,
                    "end": 3886
                  },
                  "start": 3872,
                  "end": 3886
                },
                "typeArguments": null,
                "start": 3865,
                "end": 3886
              },
              "start": 3863,
              "end": 3886
            },
            "start": 3826,
            "end": 3886
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 3889,
              "end": 3890
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 3891,
              "end": 3903
            },
            "optional": false,
            "computed": false,
            "start": 3889,
            "end": 3903
          },
          "definite": false,
          "start": 3826,
          "end": 3903
        }
      ],
      "declare": false,
      "start": 3820,
      "end": 3904
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "constInitToIReadonlyTypeWithIndexedAccess",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3954,
                    "end": 3955
                  },
                  "typeArguments": null,
                  "start": 3954,
                  "end": 3955
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "readonlyType",
                    "raw": "\"readonlyType\"",
                    "start": 3956,
                    "end": 3970
                  },
                  "start": 3956,
                  "end": 3970
                },
                "start": 3954,
                "end": 3971
              },
              "start": 3952,
              "end": 3971
            },
            "start": 3911,
            "end": 3971
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 3974,
              "end": 3975
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 3976,
              "end": 3988
            },
            "optional": false,
            "computed": false,
            "start": 3974,
            "end": 3988
          },
          "definite": false,
          "start": 3911,
          "end": 3988
        }
      ],
      "declare": false,
      "start": 3905,
      "end": 3989
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "L",
        "optional": false,
        "typeAnnotation": null,
        "start": 4013,
        "end": 4014
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 4032,
              "end": 4044
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 4053,
                  "end": 4059
                },
                "start": 4046,
                "end": 4059
              },
              "start": 4044,
              "end": 4059
            },
            "accessibility": null,
            "static": false,
            "start": 4023,
            "end": 4060
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 4065,
              "end": 4071
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "readonlyNestedType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4092,
                      "end": 4110
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeOperator",
                        "operator": "unique",
                        "typeAnnotation": {
                          "type": "TSSymbolKeyword",
                          "start": 4119,
                          "end": 4125
                        },
                        "start": 4112,
                        "end": 4125
                      },
                      "start": 4110,
                      "end": 4125
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4083,
                    "end": 4126
                  }
                ],
                "start": 4073,
                "end": 4132
              },
              "start": 4071,
              "end": 4132
            },
            "accessibility": null,
            "static": false,
            "start": 4065,
            "end": 4132
          }
        ],
        "start": 4017,
        "end": 4134
      },
      "declare": false,
      "start": 4008,
      "end": 4135
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "l",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "L",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4153,
                  "end": 4154
                },
                "typeArguments": null,
                "start": 4153,
                "end": 4154
              },
              "start": 4151,
              "end": 4154
            },
            "start": 4150,
            "end": 4154
          },
          "init": null,
          "definite": false,
          "start": 4150,
          "end": 4154
        }
      ],
      "declare": true,
      "start": 4136,
      "end": 4155
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "constInitToLReadonlyType",
            "optional": false,
            "typeAnnotation": null,
            "start": 4163,
            "end": 4187
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "l",
              "optional": false,
              "typeAnnotation": null,
              "start": 4190,
              "end": 4191
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 4192,
              "end": 4204
            },
            "optional": false,
            "computed": false,
            "start": 4190,
            "end": 4204
          },
          "definite": false,
          "start": 4163,
          "end": 4204
        }
      ],
      "declare": false,
      "start": 4157,
      "end": 4205
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "constInitToLReadonlyNestedType",
            "optional": false,
            "typeAnnotation": null,
            "start": 4212,
            "end": 4242
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 4245,
                "end": 4246
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null,
                "start": 4247,
                "end": 4253
              },
              "optional": false,
              "computed": false,
              "start": 4245,
              "end": 4253
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyNestedType",
              "optional": false,
              "typeAnnotation": null,
              "start": 4254,
              "end": 4272
            },
            "optional": false,
            "computed": false,
            "start": 4245,
            "end": 4272
          },
          "definite": false,
          "start": 4212,
          "end": 4272
        }
      ],
      "declare": false,
      "start": 4206,
      "end": 4273
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "constInitToLReadonlyTypeWithTypeQuery",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4326,
                    "end": 4327
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "readonlyType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4328,
                    "end": 4340
                  },
                  "start": 4326,
                  "end": 4340
                },
                "typeArguments": null,
                "start": 4319,
                "end": 4340
              },
              "start": 4317,
              "end": 4340
            },
            "start": 4280,
            "end": 4340
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "l",
              "optional": false,
              "typeAnnotation": null,
              "start": 4343,
              "end": 4344
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 4345,
              "end": 4357
            },
            "optional": false,
            "computed": false,
            "start": 4343,
            "end": 4357
          },
          "definite": false,
          "start": 4280,
          "end": 4357
        }
      ],
      "declare": false,
      "start": 4274,
      "end": 4358
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "constInitToLReadonlyNestedTypeWithTypeQuery",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4417,
                      "end": 4418
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4419,
                      "end": 4425
                    },
                    "start": 4417,
                    "end": 4425
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "readonlyNestedType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4426,
                    "end": 4444
                  },
                  "start": 4417,
                  "end": 4444
                },
                "typeArguments": null,
                "start": 4410,
                "end": 4444
              },
              "start": 4408,
              "end": 4444
            },
            "start": 4365,
            "end": 4444
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 4447,
                "end": 4448
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null,
                "start": 4449,
                "end": 4455
              },
              "optional": false,
              "computed": false,
              "start": 4447,
              "end": 4455
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyNestedType",
              "optional": false,
              "typeAnnotation": null,
              "start": 4456,
              "end": 4474
            },
            "optional": false,
            "computed": false,
            "start": 4447,
            "end": 4474
          },
          "definite": false,
          "start": 4365,
          "end": 4474
        }
      ],
      "declare": false,
      "start": 4359,
      "end": 4475
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "constInitToLReadonlyTypeWithIndexedAccess",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "L",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4525,
                    "end": 4526
                  },
                  "typeArguments": null,
                  "start": 4525,
                  "end": 4526
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "readonlyType",
                    "raw": "\"readonlyType\"",
                    "start": 4527,
                    "end": 4541
                  },
                  "start": 4527,
                  "end": 4541
                },
                "start": 4525,
                "end": 4542
              },
              "start": 4523,
              "end": 4542
            },
            "start": 4482,
            "end": 4542
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "l",
              "optional": false,
              "typeAnnotation": null,
              "start": 4545,
              "end": 4546
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 4547,
              "end": 4559
            },
            "optional": false,
            "computed": false,
            "start": 4545,
            "end": 4559
          },
          "definite": false,
          "start": 4482,
          "end": 4559
        }
      ],
      "declare": false,
      "start": 4476,
      "end": 4560
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "constInitToLReadonlyNestedTypeWithIndexedAccess",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "L",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4616,
                      "end": 4617
                    },
                    "typeArguments": null,
                    "start": 4616,
                    "end": 4617
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "nested",
                      "raw": "\"nested\"",
                      "start": 4618,
                      "end": 4626
                    },
                    "start": 4618,
                    "end": 4626
                  },
                  "start": 4616,
                  "end": 4627
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "readonlyNestedType",
                    "raw": "\"readonlyNestedType\"",
                    "start": 4628,
                    "end": 4648
                  },
                  "start": 4628,
                  "end": 4648
                },
                "start": 4616,
                "end": 4649
              },
              "start": 4614,
              "end": 4649
            },
            "start": 4567,
            "end": 4649
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 4652,
                "end": 4653
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null,
                "start": 4654,
                "end": 4660
              },
              "optional": false,
              "computed": false,
              "start": 4652,
              "end": 4660
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyNestedType",
              "optional": false,
              "typeAnnotation": null,
              "start": 4661,
              "end": 4679
            },
            "optional": false,
            "computed": false,
            "start": 4652,
            "end": 4679
          },
          "definite": false,
          "start": 4567,
          "end": 4679
        }
      ],
      "declare": false,
      "start": 4561,
      "end": 4680
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "promiseForConstCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 4715,
            "end": 4734
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 4737,
                "end": 4744
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 4745,
                "end": 4752
              },
              "optional": false,
              "computed": false,
              "start": 4737,
              "end": 4752
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "constCall",
                "optional": false,
                "typeAnnotation": null,
                "start": 4753,
                "end": 4762
              }
            ],
            "optional": false,
            "start": 4737,
            "end": 4763
          },
          "definite": false,
          "start": 4715,
          "end": 4763
        }
      ],
      "declare": false,
      "start": 4709,
      "end": 4764
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "arrayOfConstCall",
            "optional": false,
            "typeAnnotation": null,
            "start": 4771,
            "end": 4787
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "constCall",
                "optional": false,
                "typeAnnotation": null,
                "start": 4791,
                "end": 4800
              }
            ],
            "start": 4790,
            "end": 4801
          },
          "definite": false,
          "start": 4771,
          "end": 4801
        }
      ],
      "declare": false,
      "start": 4765,
      "end": 4802
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 4869,
                  "end": 4875
                },
                "start": 4862,
                "end": 4875
              },
              "start": 4860,
              "end": 4875
            },
            "start": 4859,
            "end": 4875
          },
          "init": null,
          "definite": false,
          "start": 4859,
          "end": 4875
        }
      ],
      "declare": true,
      "start": 4845,
      "end": 4876
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 4895,
        "end": 4896
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 4915,
                        "end": 4921
                      },
                      "start": 4908,
                      "end": 4921
                    },
                    "start": 4906,
                    "end": 4921
                  },
                  "start": 4905,
                  "end": 4921
                },
                "init": null,
                "definite": false,
                "start": 4905,
                "end": 4921
              }
            ],
            "declare": false,
            "start": 4899,
            "end": 4922
          }
        ],
        "start": 4897,
        "end": 4924
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 4877,
      "end": 4924
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": true,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4945,
                      "end": 4946
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "a",
                          "raw": "\"a\"",
                          "start": 4949,
                          "end": 4952
                        },
                        "start": 4949,
                        "end": 4952
                      },
                      "start": 4947,
                      "end": 4952
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4944,
                    "end": 4953
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": true,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4955,
                        "end": 4956
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4957,
                        "end": 4958
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4955,
                      "end": 4958
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "b",
                          "raw": "\"b\"",
                          "start": 4961,
                          "end": 4964
                        },
                        "start": 4961,
                        "end": 4964
                      },
                      "start": 4959,
                      "end": 4964
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4954,
                    "end": 4964
                  }
                ],
                "start": 4942,
                "end": 4966
              },
              "start": 4940,
              "end": 4966
            },
            "start": 4939,
            "end": 4966
          },
          "init": null,
          "definite": false,
          "start": 4939,
          "end": 4966
        }
      ],
      "declare": true,
      "start": 4925,
      "end": 4967
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 4985,
        "end": 4986
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 4987,
              "end": 4988
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4987,
            "end": 4988
          }
        ],
        "start": 4986,
        "end": 4989
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 4993,
                "end": 4994
              },
              "typeArguments": null,
              "start": 4993,
              "end": 4994
            },
            "start": 4991,
            "end": 4994
          },
          "start": 4990,
          "end": 4994
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 4997,
            "end": 4998
          },
          "typeArguments": null,
          "start": 4997,
          "end": 4998
        },
        "start": 4995,
        "end": 4998
      },
      "body": null,
      "expression": false,
      "start": 4968,
      "end": 4999
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 5017,
        "end": 5018
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 5029,
                "end": 5030
              },
              "typeArguments": null,
              "start": 5022,
              "end": 5030
            },
            "start": 5020,
            "end": 5030
          },
          "start": 5019,
          "end": 5030
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 5033,
          "end": 5037
        },
        "start": 5031,
        "end": 5037
      },
      "body": null,
      "expression": false,
      "start": 5000,
      "end": 5038
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 5056,
        "end": 5057
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5068,
                  "end": 5069
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5070,
                  "end": 5071
                },
                "start": 5068,
                "end": 5071
              },
              "typeArguments": null,
              "start": 5061,
              "end": 5071
            },
            "start": 5059,
            "end": 5071
          },
          "start": 5058,
          "end": 5071
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 5074,
          "end": 5078
        },
        "start": 5072,
        "end": 5078
      },
      "body": null,
      "expression": false,
      "start": 5039,
      "end": 5079
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 5126,
          "end": 5127
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 5128,
            "end": 5129
          }
        ],
        "optional": false,
        "start": 5126,
        "end": 5130
      },
      "directive": null,
      "start": 5126,
      "end": 5131
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 5132,
          "end": 5133
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 5134,
              "end": 5135
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 5136,
              "end": 5137
            },
            "optional": false,
            "computed": false,
            "start": 5134,
            "end": 5137
          }
        ],
        "optional": false,
        "start": 5132,
        "end": 5138
      },
      "directive": null,
      "start": 5132,
      "end": 5139
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 5140,
          "end": 5141
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 5142,
              "end": 5143
            },
            "property": {
              "type": "Literal",
              "value": "s",
              "raw": "\"s\"",
              "start": 5144,
              "end": 5147
            },
            "optional": false,
            "computed": true,
            "start": 5142,
            "end": 5148
          }
        ],
        "optional": false,
        "start": 5140,
        "end": 5149
      },
      "directive": null,
      "start": 5140,
      "end": 5150
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 5179,
            "end": 5180
          }
        ],
        "start": 5178,
        "end": 5181
      },
      "directive": null,
      "start": 5178,
      "end": 5182
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 5184,
              "end": 5185
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 5186,
              "end": 5187
            },
            "optional": false,
            "computed": false,
            "start": 5184,
            "end": 5187
          }
        ],
        "start": 5183,
        "end": 5188
      },
      "directive": null,
      "start": 5183,
      "end": 5189
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 5191,
              "end": 5192
            },
            "property": {
              "type": "Literal",
              "value": "s",
              "raw": "\"s\"",
              "start": 5193,
              "end": 5196
            },
            "optional": false,
            "computed": true,
            "start": 5191,
            "end": 5197
          }
        ],
        "start": 5190,
        "end": 5198
      },
      "directive": null,
      "start": 5190,
      "end": 5199
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5239,
            "end": 5241
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5250,
                  "end": 5251
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5253,
                  "end": 5254
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5250,
                "end": 5254
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5260,
                  "end": 5261
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5263,
                    "end": 5264
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5265,
                    "end": 5266
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5263,
                  "end": 5266
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5260,
                "end": 5266
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5272,
                  "end": 5273
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5275,
                    "end": 5276
                  },
                  "property": {
                    "type": "Literal",
                    "value": "s",
                    "raw": "\"s\"",
                    "start": 5277,
                    "end": 5280
                  },
                  "optional": false,
                  "computed": true,
                  "start": 5275,
                  "end": 5281
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5272,
                "end": 5281
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5288,
                  "end": 5295
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5307,
                          "end": 5308
                        },
                        "start": 5300,
                        "end": 5309
                      }
                    ],
                    "start": 5298,
                    "end": 5311
                  },
                  "expression": false,
                  "start": 5295,
                  "end": 5311
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5288,
                "end": 5311
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5323,
                  "end": 5330
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": true,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5342,
                          "end": 5343
                        },
                        "start": 5335,
                        "end": 5344
                      }
                    ],
                    "start": 5333,
                    "end": 5346
                  },
                  "expression": false,
                  "start": 5330,
                  "end": 5346
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5317,
                "end": 5346
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5360,
                  "end": 5367
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": true,
                  "async": true,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "YieldExpression",
                          "delegate": false,
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5378,
                            "end": 5379
                          },
                          "start": 5372,
                          "end": 5379
                        },
                        "directive": null,
                        "start": 5372,
                        "end": 5380
                      }
                    ],
                    "start": 5370,
                    "end": 5382
                  },
                  "expression": false,
                  "start": 5367,
                  "end": 5382
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5352,
                "end": 5382
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5390,
                  "end": 5397
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": true,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "YieldExpression",
                          "delegate": false,
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5408,
                            "end": 5409
                          },
                          "start": 5402,
                          "end": 5409
                        },
                        "directive": null,
                        "start": 5402,
                        "end": 5410
                      }
                    ],
                    "start": 5400,
                    "end": 5412
                  },
                  "expression": false,
                  "start": 5397,
                  "end": 5412
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5388,
                "end": 5412
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5418,
                  "end": 5425
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5426,
                        "end": 5427
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5430,
                        "end": 5431
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5426,
                      "end": 5431
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5442,
                          "end": 5443
                        },
                        "start": 5435,
                        "end": 5444
                      }
                    ],
                    "start": 5433,
                    "end": 5446
                  },
                  "expression": false,
                  "start": 5425,
                  "end": 5446
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5418,
                "end": 5446
              }
            ],
            "start": 5244,
            "end": 5449
          },
          "definite": false,
          "start": 5239,
          "end": 5449
        }
      ],
      "declare": false,
      "start": 5233,
      "end": 5450
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C0",
        "optional": false,
        "typeAnnotation": null,
        "start": 5483,
        "end": 5485
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 5508,
              "end": 5509
            },
            "typeAnnotation": null,
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 5512,
              "end": 5513
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 5492,
            "end": 5514
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 5535,
              "end": 5536
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 5539,
                "end": 5540
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 5541,
                "end": 5542
              },
              "optional": false,
              "computed": false,
              "start": 5539,
              "end": 5542
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 5519,
            "end": 5543
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 5564,
              "end": 5565
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 5568,
                "end": 5569
              },
              "property": {
                "type": "Literal",
                "value": "s",
                "raw": "\"s\"",
                "start": 5570,
                "end": 5573
              },
              "optional": false,
              "computed": true,
              "start": 5568,
              "end": 5574
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 5548,
            "end": 5575
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 5588,
              "end": 5589
            },
            "typeAnnotation": null,
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 5592,
              "end": 5593
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 5581,
            "end": 5594
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 5606,
              "end": 5607
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 5610,
                "end": 5611
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 5612,
                "end": 5613
              },
              "optional": false,
              "computed": false,
              "start": 5610,
              "end": 5613
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 5599,
            "end": 5614
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 5626,
              "end": 5627
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 5630,
                "end": 5631
              },
              "property": {
                "type": "Literal",
                "value": "s",
                "raw": "\"s\"",
                "start": 5632,
                "end": 5635
              },
              "optional": false,
              "computed": true,
              "start": 5630,
              "end": 5636
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 5619,
            "end": 5637
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 5652,
              "end": 5653
            },
            "typeAnnotation": null,
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 5656,
              "end": 5657
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 5643,
            "end": 5658
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 5672,
              "end": 5673
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 5676,
                "end": 5677
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 5678,
                "end": 5679
              },
              "optional": false,
              "computed": false,
              "start": 5676,
              "end": 5679
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 5663,
            "end": 5680
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 5694,
              "end": 5695
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 5698,
                "end": 5699
              },
              "property": {
                "type": "Literal",
                "value": "s",
                "raw": "\"s\"",
                "start": 5700,
                "end": 5703
              },
              "optional": false,
              "computed": true,
              "start": 5698,
              "end": 5704
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 5685,
            "end": 5705
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 5711,
              "end": 5712
            },
            "typeAnnotation": null,
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 5715,
              "end": 5716
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 5711,
            "end": 5717
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 5722,
              "end": 5723
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 5726,
                "end": 5727
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 5728,
                "end": 5729
              },
              "optional": false,
              "computed": false,
              "start": 5726,
              "end": 5729
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 5722,
            "end": 5730
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 5735,
              "end": 5736
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 5739,
                "end": 5740
              },
              "property": {
                "type": "Literal",
                "value": "s",
                "raw": "\"s\"",
                "start": 5741,
                "end": 5744
              },
              "optional": false,
              "computed": true,
              "start": 5739,
              "end": 5745
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 5735,
            "end": 5746
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null,
              "start": 5752,
              "end": 5759
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5771,
                      "end": 5772
                    },
                    "start": 5764,
                    "end": 5773
                  }
                ],
                "start": 5762,
                "end": 5775
              },
              "expression": false,
              "start": 5759,
              "end": 5775
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 5752,
            "end": 5775
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null,
              "start": 5786,
              "end": 5793
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5805,
                      "end": 5806
                    },
                    "start": 5798,
                    "end": 5807
                  }
                ],
                "start": 5796,
                "end": 5809
              },
              "expression": false,
              "start": 5793,
              "end": 5809
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 5780,
            "end": 5809
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method3",
              "optional": false,
              "typeAnnotation": null,
              "start": 5822,
              "end": 5829
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": true,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "YieldExpression",
                      "delegate": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5840,
                        "end": 5841
                      },
                      "start": 5834,
                      "end": 5841
                    },
                    "directive": null,
                    "start": 5834,
                    "end": 5842
                  }
                ],
                "start": 5832,
                "end": 5844
              },
              "expression": false,
              "start": 5829,
              "end": 5844
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 5814,
            "end": 5844
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method4",
              "optional": false,
              "typeAnnotation": null,
              "start": 5851,
              "end": 5858
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": true,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "YieldExpression",
                      "delegate": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5869,
                        "end": 5870
                      },
                      "start": 5863,
                      "end": 5870
                    },
                    "directive": null,
                    "start": 5863,
                    "end": 5871
                  }
                ],
                "start": 5861,
                "end": 5873
              },
              "expression": false,
              "start": 5858,
              "end": 5873
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 5849,
            "end": 5873
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method5",
              "optional": false,
              "typeAnnotation": null,
              "start": 5878,
              "end": 5885
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5886,
                    "end": 5887
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5890,
                    "end": 5891
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5886,
                  "end": 5891
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5902,
                      "end": 5903
                    },
                    "start": 5895,
                    "end": 5904
                  }
                ],
                "start": 5893,
                "end": 5906
              },
              "expression": false,
              "start": 5885,
              "end": 5906
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 5878,
            "end": 5906
          }
        ],
        "start": 5486,
        "end": 5908
      },
      "abstract": false,
      "declare": false,
      "start": 5477,
      "end": 5908
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null,
          "start": 5955,
          "end": 5956
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 5957,
          "end": 5958
        },
        "optional": false,
        "computed": true,
        "start": 5955,
        "end": 5959
      },
      "directive": null,
      "start": 5955,
      "end": 5960
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null,
          "start": 5961,
          "end": 5962
        },
        "property": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 5963,
            "end": 5964
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 5965,
            "end": 5966
          },
          "optional": false,
          "computed": false,
          "start": 5963,
          "end": 5966
        },
        "optional": false,
        "computed": true,
        "start": 5961,
        "end": 5967
      },
      "directive": null,
      "start": 5961,
      "end": 5968
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null,
          "start": 5969,
          "end": 5970
        },
        "property": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 5971,
            "end": 5972
          },
          "property": {
            "type": "Literal",
            "value": "s",
            "raw": "\"s\"",
            "start": 5973,
            "end": 5976
          },
          "optional": false,
          "computed": true,
          "start": 5971,
          "end": 5977
        },
        "optional": false,
        "computed": true,
        "start": 5969,
        "end": 5978
      },
      "directive": null,
      "start": 5969,
      "end": 5979
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 6009,
          "end": 6010
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 6018,
                "end": 6019
              },
              "typeArguments": null,
              "start": 6011,
              "end": 6019
            }
          ],
          "start": 6010,
          "end": 6020
        },
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 6021,
            "end": 6022
          }
        ],
        "optional": false,
        "start": 6009,
        "end": 6023
      },
      "directive": null,
      "start": 6009,
      "end": 6024
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 6025,
          "end": 6026
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6034,
                  "end": 6035
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6036,
                  "end": 6037
                },
                "start": 6034,
                "end": 6037
              },
              "typeArguments": null,
              "start": 6027,
              "end": 6037
            }
          ],
          "start": 6026,
          "end": 6038
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 6039,
              "end": 6040
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 6041,
              "end": 6042
            },
            "optional": false,
            "computed": false,
            "start": 6039,
            "end": 6042
          }
        ],
        "optional": false,
        "start": 6025,
        "end": 6043
      },
      "directive": null,
      "start": 6025,
      "end": 6044
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 6045,
          "end": 6046
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6054,
                  "end": 6055
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6056,
                  "end": 6057
                },
                "start": 6054,
                "end": 6057
              },
              "typeArguments": null,
              "start": 6047,
              "end": 6057
            }
          ],
          "start": 6046,
          "end": 6058
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 6059,
              "end": 6060
            },
            "property": {
              "type": "Literal",
              "value": "s",
              "raw": "\"s\"",
              "start": 6061,
              "end": 6064
            },
            "optional": false,
            "computed": true,
            "start": 6059,
            "end": 6065
          }
        ],
        "optional": false,
        "start": 6045,
        "end": 6066
      },
      "directive": null,
      "start": 6045,
      "end": 6067
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 6068,
          "end": 6069
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 6070,
            "end": 6071
          }
        ],
        "optional": false,
        "start": 6068,
        "end": 6072
      },
      "directive": null,
      "start": 6068,
      "end": 6073
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 6074,
          "end": 6075
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 6076,
              "end": 6077
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 6078,
              "end": 6079
            },
            "optional": false,
            "computed": false,
            "start": 6076,
            "end": 6079
          }
        ],
        "optional": false,
        "start": 6074,
        "end": 6080
      },
      "directive": null,
      "start": 6074,
      "end": 6081
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 6082,
          "end": 6083
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 6084,
              "end": 6085
            },
            "property": {
              "type": "Literal",
              "value": "s",
              "raw": "\"s\"",
              "start": 6086,
              "end": 6089
            },
            "optional": false,
            "computed": true,
            "start": 6084,
            "end": 6090
          }
        ],
        "optional": false,
        "start": 6082,
        "end": 6091
      },
      "directive": null,
      "start": 6082,
      "end": 6092
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 6115,
          "end": 6116
        },
        "operator": "||",
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 6120,
          "end": 6122
        },
        "start": 6115,
        "end": 6122
      },
      "directive": null,
      "start": 6115,
      "end": 6123
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 6124,
            "end": 6125
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 6126,
            "end": 6127
          },
          "optional": false,
          "computed": false,
          "start": 6124,
          "end": 6127
        },
        "operator": "||",
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 6131,
          "end": 6133
        },
        "start": 6124,
        "end": 6133
      },
      "directive": null,
      "start": 6124,
      "end": 6134
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 6135,
            "end": 6136
          },
          "property": {
            "type": "Literal",
            "value": "s",
            "raw": "\"s\"",
            "start": 6137,
            "end": 6140
          },
          "optional": false,
          "computed": true,
          "start": 6135,
          "end": 6141
        },
        "operator": "||",
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 6145,
          "end": 6147
        },
        "start": 6135,
        "end": 6147
      },
      "directive": null,
      "start": 6135,
      "end": 6148
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ConditionalExpression",
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 6166,
                "end": 6170
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "random",
                "optional": false,
                "typeAnnotation": null,
                "start": 6171,
                "end": 6177
              },
              "optional": false,
              "computed": false,
              "start": 6166,
              "end": 6177
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 6166,
            "end": 6179
          },
          "operator": "*",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 6182,
            "end": 6183
          },
          "start": 6166,
          "end": 6183
        },
        "consequent": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 6186,
          "end": 6187
        },
        "alternate": {
          "type": "Literal",
          "value": "a",
          "raw": "\"a\"",
          "start": 6190,
          "end": 6193
        },
        "start": 6166,
        "end": 6193
      },
      "directive": null,
      "start": 6166,
      "end": 6194
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ConditionalExpression",
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 6195,
                "end": 6199
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "random",
                "optional": false,
                "typeAnnotation": null,
                "start": 6200,
                "end": 6206
              },
              "optional": false,
              "computed": false,
              "start": 6195,
              "end": 6206
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 6195,
            "end": 6208
          },
          "operator": "*",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 6211,
            "end": 6212
          },
          "start": 6195,
          "end": 6212
        },
        "consequent": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 6215,
            "end": 6216
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 6217,
            "end": 6218
          },
          "optional": false,
          "computed": false,
          "start": 6215,
          "end": 6218
        },
        "alternate": {
          "type": "Literal",
          "value": "a",
          "raw": "\"a\"",
          "start": 6221,
          "end": 6224
        },
        "start": 6195,
        "end": 6224
      },
      "directive": null,
      "start": 6195,
      "end": 6225
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ConditionalExpression",
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 6226,
                "end": 6230
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "random",
                "optional": false,
                "typeAnnotation": null,
                "start": 6231,
                "end": 6237
              },
              "optional": false,
              "computed": false,
              "start": 6226,
              "end": 6237
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 6226,
            "end": 6239
          },
          "operator": "*",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 6242,
            "end": 6243
          },
          "start": 6226,
          "end": 6243
        },
        "consequent": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 6246,
            "end": 6247
          },
          "property": {
            "type": "Literal",
            "value": "s",
            "raw": "\"s\"",
            "start": 6248,
            "end": 6251
          },
          "optional": false,
          "computed": true,
          "start": 6246,
          "end": 6252
        },
        "alternate": {
          "type": "Literal",
          "value": "a",
          "raw": "\"a\"",
          "start": 6255,
          "end": 6258
        },
        "start": 6226,
        "end": 6258
      },
      "directive": null,
      "start": 6226,
      "end": 6259
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 6296,
              "end": 6297
            },
            "value": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 6300,
              "end": 6303
            },
            "method": false,
            "shorthand": false,
            "computed": true,
            "optional": false,
            "start": 6295,
            "end": 6303
          },
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 6310,
                "end": 6311
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 6312,
                "end": 6313
              },
              "optional": false,
              "computed": false,
              "start": 6310,
              "end": 6313
            },
            "value": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 6316,
              "end": 6319
            },
            "method": false,
            "shorthand": false,
            "computed": true,
            "optional": false,
            "start": 6309,
            "end": 6319
          }
        ],
        "start": 6289,
        "end": 6322
      },
      "directive": null,
      "start": 6288,
      "end": 6324
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6332,
        "end": 6334
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 6349,
              "end": 6350
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 6353,
                  "end": 6356
                },
                "start": 6353,
                "end": 6356
              },
              "start": 6351,
              "end": 6356
            },
            "value": null,
            "computed": true,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 6341,
            "end": 6357
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 6370,
                "end": 6371
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 6372,
                "end": 6373
              },
              "optional": false,
              "computed": false,
              "start": 6370,
              "end": 6373
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 6376,
                  "end": 6379
                },
                "start": 6376,
                "end": 6379
              },
              "start": 6374,
              "end": 6379
            },
            "value": null,
            "computed": true,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 6362,
            "end": 6380
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 6387,
              "end": 6388
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 6391,
                  "end": 6394
                },
                "start": 6391,
                "end": 6394
              },
              "start": 6389,
              "end": 6394
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 6386,
            "end": 6395
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 6401,
                "end": 6402
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 6403,
                "end": 6404
              },
              "optional": false,
              "computed": false,
              "start": 6401,
              "end": 6404
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 6407,
                  "end": 6410
                },
                "start": 6407,
                "end": 6410
              },
              "start": 6405,
              "end": 6410
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 6400,
            "end": 6411
          }
        ],
        "start": 6335,
        "end": 6413
      },
      "abstract": false,
      "declare": false,
      "start": 6326,
      "end": 6413
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Context",
        "optional": false,
        "typeAnnotation": null,
        "start": 6446,
        "end": 6453
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null,
              "start": 6460,
              "end": 6467
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6478,
                  "end": 6479
                },
                "typeArguments": null,
                "start": 6471,
                "end": 6479
              },
              "start": 6469,
              "end": 6479
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 6460,
            "end": 6480
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null,
              "start": 6485,
              "end": 6492
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6496,
                  "end": 6503
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6511,
                        "end": 6512
                      },
                      "typeArguments": null,
                      "start": 6504,
                      "end": 6512
                    }
                  ],
                  "start": 6503,
                  "end": 6513
                },
                "start": 6496,
                "end": 6513
              },
              "start": 6494,
              "end": 6513
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 6485,
            "end": 6514
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method3",
              "optional": false,
              "typeAnnotation": null,
              "start": 6519,
              "end": 6526
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AsyncIterableIterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6530,
                  "end": 6551
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6559,
                        "end": 6560
                      },
                      "typeArguments": null,
                      "start": 6552,
                      "end": 6560
                    }
                  ],
                  "start": 6551,
                  "end": 6561
                },
                "start": 6530,
                "end": 6561
              },
              "start": 6528,
              "end": 6561
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 6519,
            "end": 6562
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method4",
              "optional": false,
              "typeAnnotation": null,
              "start": 6567,
              "end": 6574
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IterableIterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6578,
                  "end": 6594
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6602,
                        "end": 6603
                      },
                      "typeArguments": null,
                      "start": 6595,
                      "end": 6603
                    }
                  ],
                  "start": 6594,
                  "end": 6604
                },
                "start": 6578,
                "end": 6604
              },
              "start": 6576,
              "end": 6604
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 6567,
            "end": 6605
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method5",
              "optional": false,
              "typeAnnotation": null,
              "start": 6610,
              "end": 6617
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6629,
                      "end": 6630
                    },
                    "typeArguments": null,
                    "start": 6622,
                    "end": 6630
                  },
                  "start": 6620,
                  "end": 6630
                },
                "start": 6618,
                "end": 6630
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6640,
                  "end": 6641
                },
                "typeArguments": null,
                "start": 6633,
                "end": 6641
              },
              "start": 6631,
              "end": 6641
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 6610,
            "end": 6642
          }
        ],
        "start": 6454,
        "end": 6644
      },
      "declare": false,
      "start": 6436,
      "end": 6644
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Context",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6656,
                  "end": 6663
                },
                "typeArguments": null,
                "start": 6656,
                "end": 6663
              },
              "start": 6654,
              "end": 6663
            },
            "start": 6652,
            "end": 6663
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
                  "name": "method1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6672,
                  "end": 6679
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6699,
                          "end": 6700
                        },
                        "start": 6692,
                        "end": 6701
                      }
                    ],
                    "start": 6682,
                    "end": 6762
                  },
                  "expression": false,
                  "start": 6679,
                  "end": 6762
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 6672,
                "end": 6762
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6774,
                  "end": 6781
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": true,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6801,
                          "end": 6802
                        },
                        "start": 6794,
                        "end": 6803
                      }
                    ],
                    "start": 6784,
                    "end": 6864
                  },
                  "expression": false,
                  "start": 6781,
                  "end": 6864
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 6768,
                "end": 6864
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6878,
                  "end": 6885
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": true,
                  "async": true,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "YieldExpression",
                          "delegate": false,
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6904,
                            "end": 6905
                          },
                          "start": 6898,
                          "end": 6905
                        },
                        "directive": null,
                        "start": 6898,
                        "end": 6906
                      }
                    ],
                    "start": 6888,
                    "end": 6966
                  },
                  "expression": false,
                  "start": 6885,
                  "end": 6966
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 6870,
                "end": 6966
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6974,
                  "end": 6981
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": true,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "YieldExpression",
                          "delegate": false,
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7000,
                            "end": 7001
                          },
                          "start": 6994,
                          "end": 7001
                        },
                        "directive": null,
                        "start": 6994,
                        "end": 7002
                      }
                    ],
                    "start": 6984,
                    "end": 7062
                  },
                  "expression": false,
                  "start": 6981,
                  "end": 7062
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 6972,
                "end": 7062
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7068,
                  "end": 7075
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7076,
                        "end": 7077
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7080,
                        "end": 7081
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7076,
                      "end": 7081
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7153,
                          "end": 7154
                        },
                        "start": 7146,
                        "end": 7155
                      }
                    ],
                    "start": 7083,
                    "end": 7161
                  },
                  "expression": false,
                  "start": 7075,
                  "end": 7161
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 7068,
                "end": 7161
              }
            ],
            "start": 6666,
            "end": 7164
          },
          "definite": false,
          "start": 6652,
          "end": 7164
        }
      ],
      "declare": false,
      "start": 6646,
      "end": 7165
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o4",
            "optional": false,
            "typeAnnotation": null,
            "start": 7216,
            "end": 7218
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
                  "name": "method1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7227,
                  "end": 7234
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7245,
                            "end": 7246
                          },
                          "typeArguments": null,
                          "start": 7238,
                          "end": 7246
                        },
                        "start": 7236,
                        "end": 7246
                      },
                      "start": 7235,
                      "end": 7246
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7256,
                        "end": 7257
                      },
                      "typeArguments": null,
                      "start": 7249,
                      "end": 7257
                    },
                    "start": 7247,
                    "end": 7257
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7275,
                          "end": 7276
                        },
                        "start": 7268,
                        "end": 7277
                      }
                    ],
                    "start": 7258,
                    "end": 7283
                  },
                  "expression": false,
                  "start": 7234,
                  "end": 7283
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 7227,
                "end": 7283
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7289,
                  "end": 7296
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "I",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 7300,
                              "end": 7301
                            },
                            "typeArguments": null,
                            "start": 7300,
                            "end": 7301
                          },
                          "indexType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "readonlyType",
                              "raw": "\"readonlyType\"",
                              "start": 7302,
                              "end": 7316
                            },
                            "start": 7302,
                            "end": 7316
                          },
                          "start": 7300,
                          "end": 7317
                        },
                        "start": 7298,
                        "end": 7317
                      },
                      "start": 7297,
                      "end": 7317
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7320,
                          "end": 7321
                        },
                        "typeArguments": null,
                        "start": 7320,
                        "end": 7321
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "readonlyType",
                          "raw": "\"readonlyType\"",
                          "start": 7322,
                          "end": 7336
                        },
                        "start": 7322,
                        "end": 7336
                      },
                      "start": 7320,
                      "end": 7337
                    },
                    "start": 7318,
                    "end": 7337
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7355,
                          "end": 7356
                        },
                        "start": 7348,
                        "end": 7357
                      }
                    ],
                    "start": 7338,
                    "end": 7363
                  },
                  "expression": false,
                  "start": 7296,
                  "end": 7363
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 7289,
                "end": 7363
              }
            ],
            "start": 7221,
            "end": 7365
          },
          "definite": false,
          "start": 7216,
          "end": 7365
        }
      ],
      "declare": false,
      "start": 7210,
      "end": 7366
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ce0",
            "optional": false,
            "typeAnnotation": null,
            "start": 7374,
            "end": 7377
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "method1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7392,
                    "end": 7399
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 7410,
                              "end": 7411
                            },
                            "typeArguments": null,
                            "start": 7403,
                            "end": 7411
                          },
                          "start": 7401,
                          "end": 7411
                        },
                        "start": 7400,
                        "end": 7411
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7421,
                          "end": 7422
                        },
                        "typeArguments": null,
                        "start": 7414,
                        "end": 7422
                      },
                      "start": 7412,
                      "end": 7422
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "p",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7440,
                            "end": 7441
                          },
                          "start": 7433,
                          "end": 7442
                        }
                      ],
                      "start": 7423,
                      "end": 7448
                    },
                    "expression": false,
                    "start": 7399,
                    "end": 7448
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 7392,
                  "end": 7448
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "method2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7453,
                    "end": 7460
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSIndexedAccessType",
                            "objectType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "I",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7464,
                                "end": 7465
                              },
                              "typeArguments": null,
                              "start": 7464,
                              "end": 7465
                            },
                            "indexType": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "readonlyType",
                                "raw": "\"readonlyType\"",
                                "start": 7466,
                                "end": 7480
                              },
                              "start": 7466,
                              "end": 7480
                            },
                            "start": 7464,
                            "end": 7481
                          },
                          "start": 7462,
                          "end": 7481
                        },
                        "start": 7461,
                        "end": 7481
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "I",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7484,
                            "end": 7485
                          },
                          "typeArguments": null,
                          "start": 7484,
                          "end": 7485
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "readonlyType",
                            "raw": "\"readonlyType\"",
                            "start": 7486,
                            "end": 7500
                          },
                          "start": 7486,
                          "end": 7500
                        },
                        "start": 7484,
                        "end": 7501
                      },
                      "start": 7482,
                      "end": 7501
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "p",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7519,
                            "end": 7520
                          },
                          "start": 7512,
                          "end": 7521
                        }
                      ],
                      "start": 7502,
                      "end": 7527
                    },
                    "expression": false,
                    "start": 7460,
                    "end": 7527
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 7453,
                  "end": 7527
                }
              ],
              "start": 7386,
              "end": 7529
            },
            "abstract": false,
            "declare": false,
            "start": 7380,
            "end": 7529
          },
          "definite": false,
          "start": 7374,
          "end": 7529
        }
      ],
      "declare": false,
      "start": 7368,
      "end": 7530
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "funcInferredReturnType",
        "optional": false,
        "typeAnnotation": null,
        "start": 7541,
        "end": 7563
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "method",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7571,
                    "end": 7577
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7588,
                            "end": 7589
                          },
                          "typeArguments": null,
                          "start": 7581,
                          "end": 7589
                        },
                        "start": 7579,
                        "end": 7589
                      },
                      "start": 7578,
                      "end": 7589
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 7592,
                      "end": 7596
                    },
                    "start": 7590,
                    "end": 7596
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 7571,
                  "end": 7596
                }
              ],
              "start": 7569,
              "end": 7598
            },
            "start": 7567,
            "end": 7598
          },
          "start": 7564,
          "end": 7598
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 7613,
              "end": 7616
            },
            "start": 7606,
            "end": 7617
          }
        ],
        "start": 7600,
        "end": 7619
      },
      "expression": false,
      "start": 7532,
      "end": 7619
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 38,
  "end": 7619
}
```
