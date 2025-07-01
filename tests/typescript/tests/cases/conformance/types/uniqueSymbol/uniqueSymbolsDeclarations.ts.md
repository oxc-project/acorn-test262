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
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "funcReturnConstCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 1000,
        "end": 1019
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
              "start": 1031,
              "end": 1040
            },
            "start": 1024,
            "end": 1041
          }
        ],
        "start": 1022,
        "end": 1043
      },
      "expression": false,
      "start": 991,
      "end": 1043
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "funcReturnLetCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 1053,
        "end": 1070
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
              "start": 1082,
              "end": 1089
            },
            "start": 1075,
            "end": 1090
          }
        ],
        "start": 1073,
        "end": 1092
      },
      "expression": false,
      "start": 1044,
      "end": 1092
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "funcReturnVarCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 1102,
        "end": 1119
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
              "start": 1131,
              "end": 1138
            },
            "start": 1124,
            "end": 1139
          }
        ],
        "start": 1122,
        "end": 1141
      },
      "expression": false,
      "start": 1093,
      "end": 1141
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "funcReturnConstCallWithTypeQuery",
        "optional": false,
        "typeAnnotation": null,
        "start": 1193,
        "end": 1225
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
            "start": 1236,
            "end": 1245
          },
          "typeArguments": null,
          "start": 1229,
          "end": 1245
        },
        "start": 1227,
        "end": 1245
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
              "start": 1255,
              "end": 1264
            },
            "start": 1248,
            "end": 1265
          }
        ],
        "start": 1246,
        "end": 1267
      },
      "expression": false,
      "start": 1184,
      "end": 1267
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "genFuncYieldConstCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 1317,
        "end": 1338
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
                "start": 1349,
                "end": 1358
              },
              "start": 1343,
              "end": 1358
            },
            "directive": null,
            "start": 1343,
            "end": 1359
          }
        ],
        "start": 1341,
        "end": 1361
      },
      "expression": false,
      "start": 1307,
      "end": 1361
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "genFuncYieldLetCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 1372,
        "end": 1391
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
                "start": 1402,
                "end": 1409
              },
              "start": 1396,
              "end": 1409
            },
            "directive": null,
            "start": 1396,
            "end": 1410
          }
        ],
        "start": 1394,
        "end": 1412
      },
      "expression": false,
      "start": 1362,
      "end": 1412
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "genFuncYieldVarCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 1423,
        "end": 1442
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
                "start": 1453,
                "end": 1460
              },
              "start": 1447,
              "end": 1460
            },
            "directive": null,
            "start": 1447,
            "end": 1461
          }
        ],
        "start": 1445,
        "end": 1463
      },
      "expression": false,
      "start": 1413,
      "end": 1463
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "genFuncYieldConstCallWithTypeQuery",
        "optional": false,
        "typeAnnotation": null,
        "start": 1526,
        "end": 1560
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
            "start": 1564,
            "end": 1580
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
                  "start": 1588,
                  "end": 1597
                },
                "typeArguments": null,
                "start": 1581,
                "end": 1597
              }
            ],
            "start": 1580,
            "end": 1598
          },
          "start": 1564,
          "end": 1598
        },
        "start": 1562,
        "end": 1598
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
                "start": 1607,
                "end": 1616
              },
              "start": 1601,
              "end": 1616
            },
            "directive": null,
            "start": 1601,
            "end": 1617
          }
        ],
        "start": 1599,
        "end": 1619
      },
      "expression": false,
      "start": 1516,
      "end": 1619
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "asyncFuncReturnConstCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 1671,
        "end": 1695
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
              "start": 1707,
              "end": 1716
            },
            "start": 1700,
            "end": 1717
          }
        ],
        "start": 1698,
        "end": 1719
      },
      "expression": false,
      "start": 1656,
      "end": 1719
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "asyncFuncReturnLetCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 1735,
        "end": 1757
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
              "start": 1769,
              "end": 1776
            },
            "start": 1762,
            "end": 1777
          }
        ],
        "start": 1760,
        "end": 1779
      },
      "expression": false,
      "start": 1720,
      "end": 1779
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "asyncFuncReturnVarCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 1795,
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
              "name": "varCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 1829,
              "end": 1836
            },
            "start": 1822,
            "end": 1837
          }
        ],
        "start": 1820,
        "end": 1839
      },
      "expression": false,
      "start": 1780,
      "end": 1839
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "asyncGenFuncYieldConstCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 1901,
        "end": 1927
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
                "start": 1938,
                "end": 1947
              },
              "start": 1932,
              "end": 1947
            },
            "directive": null,
            "start": 1932,
            "end": 1948
          }
        ],
        "start": 1930,
        "end": 1950
      },
      "expression": false,
      "start": 1885,
      "end": 1950
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "asyncGenFuncYieldLetCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 1967,
        "end": 1991
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
                "start": 2002,
                "end": 2009
              },
              "start": 1996,
              "end": 2009
            },
            "directive": null,
            "start": 1996,
            "end": 2010
          }
        ],
        "start": 1994,
        "end": 2012
      },
      "expression": false,
      "start": 1951,
      "end": 2012
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "asyncGenFuncYieldVarCall",
        "optional": false,
        "typeAnnotation": null,
        "start": 2029,
        "end": 2053
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
                "start": 2064,
                "end": 2071
              },
              "start": 2058,
              "end": 2071
            },
            "directive": null,
            "start": 2058,
            "end": 2072
          }
        ],
        "start": 2056,
        "end": 2074
      },
      "expression": false,
      "start": 2013,
      "end": 2074
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
        "start": 2093,
        "end": 2094
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
              "start": 2117,
              "end": 2135
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
                "start": 2138,
                "end": 2144
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2138,
              "end": 2146
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 2101,
            "end": 2147
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
              "start": 2168,
              "end": 2186
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 2195,
                  "end": 2201
                },
                "start": 2188,
                "end": 2201
              },
              "start": 2186,
              "end": 2201
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
            "start": 2152,
            "end": 2202
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
              "start": 2223,
              "end": 2248
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 2257,
                  "end": 2263
                },
                "start": 2250,
                "end": 2263
              },
              "start": 2248,
              "end": 2263
            },
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 2266,
                "end": 2272
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2266,
              "end": 2274
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 2207,
            "end": 2275
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
              "start": 2287,
              "end": 2306
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
                "start": 2309,
                "end": 2315
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2309,
              "end": 2317
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2280,
            "end": 2318
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
              "start": 2333,
              "end": 2345
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
                "start": 2348,
                "end": 2354
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2348,
              "end": 2356
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 2324,
            "end": 2357
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
              "start": 2362,
              "end": 2375
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
                "start": 2378,
                "end": 2384
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2378,
              "end": 2386
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2362,
            "end": 2387
          }
        ],
        "start": 2095,
        "end": 2389
      },
      "abstract": false,
      "declare": false,
      "start": 2087,
      "end": 2389
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
                  "start": 2407,
                  "end": 2408
                },
                "typeArguments": null,
                "start": 2407,
                "end": 2408
              },
              "start": 2405,
              "end": 2408
            },
            "start": 2404,
            "end": 2408
          },
          "init": null,
          "definite": false,
          "start": 2404,
          "end": 2408
        }
      ],
      "declare": true,
      "start": 2390,
      "end": 2409
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
            "start": 2417,
            "end": 2447
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 2450,
              "end": 2451
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyStaticCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 2452,
              "end": 2470
            },
            "optional": false,
            "computed": false,
            "start": 2450,
            "end": 2470
          },
          "definite": false,
          "start": 2417,
          "end": 2470
        }
      ],
      "declare": false,
      "start": 2411,
      "end": 2471
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
            "start": 2478,
            "end": 2508
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 2511,
              "end": 2512
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyStaticType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2513,
              "end": 2531
            },
            "optional": false,
            "computed": false,
            "start": 2511,
            "end": 2531
          },
          "definite": false,
          "start": 2478,
          "end": 2531
        }
      ],
      "declare": false,
      "start": 2472,
      "end": 2532
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
            "start": 2539,
            "end": 2576
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 2579,
              "end": 2580
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyStaticTypeAndCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 2581,
              "end": 2606
            },
            "optional": false,
            "computed": false,
            "start": 2579,
            "end": 2606
          },
          "definite": false,
          "start": 2539,
          "end": 2606
        }
      ],
      "declare": false,
      "start": 2533,
      "end": 2607
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
            "start": 2614,
            "end": 2645
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 2648,
              "end": 2649
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readwriteStaticCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 2650,
              "end": 2669
            },
            "optional": false,
            "computed": false,
            "start": 2648,
            "end": 2669
          },
          "definite": false,
          "start": 2614,
          "end": 2669
        }
      ],
      "declare": false,
      "start": 2608,
      "end": 2670
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
                    "start": 2730,
                    "end": 2731
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "readonlyStaticCall",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2732,
                    "end": 2750
                  },
                  "start": 2730,
                  "end": 2750
                },
                "typeArguments": null,
                "start": 2723,
                "end": 2750
              },
              "start": 2721,
              "end": 2750
            },
            "start": 2678,
            "end": 2750
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 2753,
              "end": 2754
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyStaticCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 2755,
              "end": 2773
            },
            "optional": false,
            "computed": false,
            "start": 2753,
            "end": 2773
          },
          "definite": false,
          "start": 2678,
          "end": 2773
        }
      ],
      "declare": false,
      "start": 2672,
      "end": 2774
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
                    "start": 2833,
                    "end": 2834
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "readonlyStaticType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2835,
                    "end": 2853
                  },
                  "start": 2833,
                  "end": 2853
                },
                "typeArguments": null,
                "start": 2826,
                "end": 2853
              },
              "start": 2824,
              "end": 2853
            },
            "start": 2781,
            "end": 2853
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 2856,
              "end": 2857
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyStaticType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2858,
              "end": 2876
            },
            "optional": false,
            "computed": false,
            "start": 2856,
            "end": 2876
          },
          "definite": false,
          "start": 2781,
          "end": 2876
        }
      ],
      "declare": false,
      "start": 2775,
      "end": 2877
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
                    "start": 2943,
                    "end": 2944
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "readonlyStaticTypeAndCall",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2945,
                    "end": 2970
                  },
                  "start": 2943,
                  "end": 2970
                },
                "typeArguments": null,
                "start": 2936,
                "end": 2970
              },
              "start": 2934,
              "end": 2970
            },
            "start": 2884,
            "end": 2970
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 2973,
              "end": 2974
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyStaticTypeAndCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 2975,
              "end": 3000
            },
            "optional": false,
            "computed": false,
            "start": 2973,
            "end": 3000
          },
          "definite": false,
          "start": 2884,
          "end": 3000
        }
      ],
      "declare": false,
      "start": 2878,
      "end": 3001
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
                    "start": 3061,
                    "end": 3062
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "readwriteStaticCall",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3063,
                    "end": 3082
                  },
                  "start": 3061,
                  "end": 3082
                },
                "typeArguments": null,
                "start": 3054,
                "end": 3082
              },
              "start": 3052,
              "end": 3082
            },
            "start": 3008,
            "end": 3082
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 3085,
              "end": 3086
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readwriteStaticCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 3087,
              "end": 3106
            },
            "optional": false,
            "computed": false,
            "start": 3085,
            "end": 3106
          },
          "definite": false,
          "start": 3008,
          "end": 3106
        }
      ],
      "declare": false,
      "start": 3002,
      "end": 3107
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
            "start": 3115,
            "end": 3139
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 3142,
              "end": 3143
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 3144,
              "end": 3156
            },
            "optional": false,
            "computed": false,
            "start": 3142,
            "end": 3156
          },
          "definite": false,
          "start": 3115,
          "end": 3156
        }
      ],
      "declare": false,
      "start": 3109,
      "end": 3157
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
            "start": 3164,
            "end": 3189
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 3192,
              "end": 3193
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readwriteCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 3194,
              "end": 3207
            },
            "optional": false,
            "computed": false,
            "start": 3192,
            "end": 3207
          },
          "definite": false,
          "start": 3164,
          "end": 3207
        }
      ],
      "declare": false,
      "start": 3158,
      "end": 3208
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
                    "start": 3261,
                    "end": 3262
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "readonlyCall",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3263,
                    "end": 3275
                  },
                  "start": 3261,
                  "end": 3275
                },
                "typeArguments": null,
                "start": 3254,
                "end": 3275
              },
              "start": 3252,
              "end": 3275
            },
            "start": 3215,
            "end": 3275
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 3278,
              "end": 3279
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 3280,
              "end": 3292
            },
            "optional": false,
            "computed": false,
            "start": 3278,
            "end": 3292
          },
          "definite": false,
          "start": 3215,
          "end": 3292
        }
      ],
      "declare": false,
      "start": 3209,
      "end": 3293
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
                    "start": 3347,
                    "end": 3348
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "readwriteCall",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3349,
                    "end": 3362
                  },
                  "start": 3347,
                  "end": 3362
                },
                "typeArguments": null,
                "start": 3340,
                "end": 3362
              },
              "start": 3338,
              "end": 3362
            },
            "start": 3300,
            "end": 3362
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 3365,
              "end": 3366
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readwriteCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 3367,
              "end": 3380
            },
            "optional": false,
            "computed": false,
            "start": 3365,
            "end": 3380
          },
          "definite": false,
          "start": 3300,
          "end": 3380
        }
      ],
      "declare": false,
      "start": 3294,
      "end": 3381
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
                    "start": 3431,
                    "end": 3432
                  },
                  "typeArguments": null,
                  "start": 3431,
                  "end": 3432
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "readonlyCall",
                    "raw": "\"readonlyCall\"",
                    "start": 3433,
                    "end": 3447
                  },
                  "start": 3433,
                  "end": 3447
                },
                "start": 3431,
                "end": 3448
              },
              "start": 3429,
              "end": 3448
            },
            "start": 3388,
            "end": 3448
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 3451,
              "end": 3452
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 3453,
              "end": 3465
            },
            "optional": false,
            "computed": false,
            "start": 3451,
            "end": 3465
          },
          "definite": false,
          "start": 3388,
          "end": 3465
        }
      ],
      "declare": false,
      "start": 3382,
      "end": 3466
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
                    "start": 3517,
                    "end": 3518
                  },
                  "typeArguments": null,
                  "start": 3517,
                  "end": 3518
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "readwriteCall",
                    "raw": "\"readwriteCall\"",
                    "start": 3519,
                    "end": 3534
                  },
                  "start": 3519,
                  "end": 3534
                },
                "start": 3517,
                "end": 3535
              },
              "start": 3515,
              "end": 3535
            },
            "start": 3473,
            "end": 3535
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 3538,
              "end": 3539
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readwriteCall",
              "optional": false,
              "typeAnnotation": null,
              "start": 3540,
              "end": 3553
            },
            "optional": false,
            "computed": false,
            "start": 3538,
            "end": 3553
          },
          "definite": false,
          "start": 3473,
          "end": 3553
        }
      ],
      "declare": false,
      "start": 3467,
      "end": 3554
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 3580,
        "end": 3581
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
              "start": 3597,
              "end": 3609
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 3618,
                  "end": 3624
                },
                "start": 3611,
                "end": 3624
              },
              "start": 3609,
              "end": 3624
            },
            "accessibility": null,
            "static": false,
            "start": 3588,
            "end": 3625
          }
        ],
        "start": 3582,
        "end": 3627
      },
      "declare": false,
      "start": 3570,
      "end": 3627
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
                  "start": 3645,
                  "end": 3646
                },
                "typeArguments": null,
                "start": 3645,
                "end": 3646
              },
              "start": 3643,
              "end": 3646
            },
            "start": 3642,
            "end": 3646
          },
          "init": null,
          "definite": false,
          "start": 3642,
          "end": 3646
        }
      ],
      "declare": true,
      "start": 3628,
      "end": 3647
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
            "start": 3655,
            "end": 3679
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 3682,
              "end": 3683
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 3684,
              "end": 3696
            },
            "optional": false,
            "computed": false,
            "start": 3682,
            "end": 3696
          },
          "definite": false,
          "start": 3655,
          "end": 3696
        }
      ],
      "declare": false,
      "start": 3649,
      "end": 3697
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
                    "start": 3750,
                    "end": 3751
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "readonlyType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3752,
                    "end": 3764
                  },
                  "start": 3750,
                  "end": 3764
                },
                "typeArguments": null,
                "start": 3743,
                "end": 3764
              },
              "start": 3741,
              "end": 3764
            },
            "start": 3704,
            "end": 3764
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 3767,
              "end": 3768
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 3769,
              "end": 3781
            },
            "optional": false,
            "computed": false,
            "start": 3767,
            "end": 3781
          },
          "definite": false,
          "start": 3704,
          "end": 3781
        }
      ],
      "declare": false,
      "start": 3698,
      "end": 3782
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
                    "start": 3832,
                    "end": 3833
                  },
                  "typeArguments": null,
                  "start": 3832,
                  "end": 3833
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "readonlyType",
                    "raw": "\"readonlyType\"",
                    "start": 3834,
                    "end": 3848
                  },
                  "start": 3834,
                  "end": 3848
                },
                "start": 3832,
                "end": 3849
              },
              "start": 3830,
              "end": 3849
            },
            "start": 3789,
            "end": 3849
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 3852,
              "end": 3853
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 3854,
              "end": 3866
            },
            "optional": false,
            "computed": false,
            "start": 3852,
            "end": 3866
          },
          "definite": false,
          "start": 3789,
          "end": 3866
        }
      ],
      "declare": false,
      "start": 3783,
      "end": 3867
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "L",
        "optional": false,
        "typeAnnotation": null,
        "start": 3891,
        "end": 3892
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
              "start": 3910,
              "end": 3922
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 3931,
                  "end": 3937
                },
                "start": 3924,
                "end": 3937
              },
              "start": 3922,
              "end": 3937
            },
            "accessibility": null,
            "static": false,
            "start": 3901,
            "end": 3938
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
              "start": 3943,
              "end": 3949
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
                      "start": 3970,
                      "end": 3988
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeOperator",
                        "operator": "unique",
                        "typeAnnotation": {
                          "type": "TSSymbolKeyword",
                          "start": 3997,
                          "end": 4003
                        },
                        "start": 3990,
                        "end": 4003
                      },
                      "start": 3988,
                      "end": 4003
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3961,
                    "end": 4004
                  }
                ],
                "start": 3951,
                "end": 4010
              },
              "start": 3949,
              "end": 4010
            },
            "accessibility": null,
            "static": false,
            "start": 3943,
            "end": 4010
          }
        ],
        "start": 3895,
        "end": 4012
      },
      "declare": false,
      "start": 3886,
      "end": 4013
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
                  "start": 4031,
                  "end": 4032
                },
                "typeArguments": null,
                "start": 4031,
                "end": 4032
              },
              "start": 4029,
              "end": 4032
            },
            "start": 4028,
            "end": 4032
          },
          "init": null,
          "definite": false,
          "start": 4028,
          "end": 4032
        }
      ],
      "declare": true,
      "start": 4014,
      "end": 4033
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
            "start": 4041,
            "end": 4065
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "l",
              "optional": false,
              "typeAnnotation": null,
              "start": 4068,
              "end": 4069
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 4070,
              "end": 4082
            },
            "optional": false,
            "computed": false,
            "start": 4068,
            "end": 4082
          },
          "definite": false,
          "start": 4041,
          "end": 4082
        }
      ],
      "declare": false,
      "start": 4035,
      "end": 4083
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
            "start": 4090,
            "end": 4120
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
                "start": 4123,
                "end": 4124
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null,
                "start": 4125,
                "end": 4131
              },
              "optional": false,
              "computed": false,
              "start": 4123,
              "end": 4131
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyNestedType",
              "optional": false,
              "typeAnnotation": null,
              "start": 4132,
              "end": 4150
            },
            "optional": false,
            "computed": false,
            "start": 4123,
            "end": 4150
          },
          "definite": false,
          "start": 4090,
          "end": 4150
        }
      ],
      "declare": false,
      "start": 4084,
      "end": 4151
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
                    "start": 4204,
                    "end": 4205
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "readonlyType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4206,
                    "end": 4218
                  },
                  "start": 4204,
                  "end": 4218
                },
                "typeArguments": null,
                "start": 4197,
                "end": 4218
              },
              "start": 4195,
              "end": 4218
            },
            "start": 4158,
            "end": 4218
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "l",
              "optional": false,
              "typeAnnotation": null,
              "start": 4221,
              "end": 4222
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 4223,
              "end": 4235
            },
            "optional": false,
            "computed": false,
            "start": 4221,
            "end": 4235
          },
          "definite": false,
          "start": 4158,
          "end": 4235
        }
      ],
      "declare": false,
      "start": 4152,
      "end": 4236
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
                      "start": 4295,
                      "end": 4296
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4297,
                      "end": 4303
                    },
                    "start": 4295,
                    "end": 4303
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "readonlyNestedType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4304,
                    "end": 4322
                  },
                  "start": 4295,
                  "end": 4322
                },
                "typeArguments": null,
                "start": 4288,
                "end": 4322
              },
              "start": 4286,
              "end": 4322
            },
            "start": 4243,
            "end": 4322
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
                "start": 4325,
                "end": 4326
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null,
                "start": 4327,
                "end": 4333
              },
              "optional": false,
              "computed": false,
              "start": 4325,
              "end": 4333
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyNestedType",
              "optional": false,
              "typeAnnotation": null,
              "start": 4334,
              "end": 4352
            },
            "optional": false,
            "computed": false,
            "start": 4325,
            "end": 4352
          },
          "definite": false,
          "start": 4243,
          "end": 4352
        }
      ],
      "declare": false,
      "start": 4237,
      "end": 4353
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
                    "start": 4403,
                    "end": 4404
                  },
                  "typeArguments": null,
                  "start": 4403,
                  "end": 4404
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "readonlyType",
                    "raw": "\"readonlyType\"",
                    "start": 4405,
                    "end": 4419
                  },
                  "start": 4405,
                  "end": 4419
                },
                "start": 4403,
                "end": 4420
              },
              "start": 4401,
              "end": 4420
            },
            "start": 4360,
            "end": 4420
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "l",
              "optional": false,
              "typeAnnotation": null,
              "start": 4423,
              "end": 4424
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 4425,
              "end": 4437
            },
            "optional": false,
            "computed": false,
            "start": 4423,
            "end": 4437
          },
          "definite": false,
          "start": 4360,
          "end": 4437
        }
      ],
      "declare": false,
      "start": 4354,
      "end": 4438
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
                      "start": 4494,
                      "end": 4495
                    },
                    "typeArguments": null,
                    "start": 4494,
                    "end": 4495
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "nested",
                      "raw": "\"nested\"",
                      "start": 4496,
                      "end": 4504
                    },
                    "start": 4496,
                    "end": 4504
                  },
                  "start": 4494,
                  "end": 4505
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "readonlyNestedType",
                    "raw": "\"readonlyNestedType\"",
                    "start": 4506,
                    "end": 4526
                  },
                  "start": 4506,
                  "end": 4526
                },
                "start": 4494,
                "end": 4527
              },
              "start": 4492,
              "end": 4527
            },
            "start": 4445,
            "end": 4527
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
                "start": 4530,
                "end": 4531
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null,
                "start": 4532,
                "end": 4538
              },
              "optional": false,
              "computed": false,
              "start": 4530,
              "end": 4538
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyNestedType",
              "optional": false,
              "typeAnnotation": null,
              "start": 4539,
              "end": 4557
            },
            "optional": false,
            "computed": false,
            "start": 4530,
            "end": 4557
          },
          "definite": false,
          "start": 4445,
          "end": 4557
        }
      ],
      "declare": false,
      "start": 4439,
      "end": 4558
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
            "start": 4593,
            "end": 4612
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
                "start": 4615,
                "end": 4622
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 4623,
                "end": 4630
              },
              "optional": false,
              "computed": false,
              "start": 4615,
              "end": 4630
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "constCall",
                "optional": false,
                "typeAnnotation": null,
                "start": 4631,
                "end": 4640
              }
            ],
            "optional": false,
            "start": 4615,
            "end": 4641
          },
          "definite": false,
          "start": 4593,
          "end": 4641
        }
      ],
      "declare": false,
      "start": 4587,
      "end": 4642
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
            "start": 4649,
            "end": 4665
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
                "start": 4669,
                "end": 4678
              }
            ],
            "start": 4668,
            "end": 4679
          },
          "definite": false,
          "start": 4649,
          "end": 4679
        }
      ],
      "declare": false,
      "start": 4643,
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
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 4747,
                  "end": 4753
                },
                "start": 4740,
                "end": 4753
              },
              "start": 4738,
              "end": 4753
            },
            "start": 4737,
            "end": 4753
          },
          "init": null,
          "definite": false,
          "start": 4737,
          "end": 4753
        }
      ],
      "declare": true,
      "start": 4723,
      "end": 4754
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 4773,
        "end": 4774
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
                        "start": 4793,
                        "end": 4799
                      },
                      "start": 4786,
                      "end": 4799
                    },
                    "start": 4784,
                    "end": 4799
                  },
                  "start": 4783,
                  "end": 4799
                },
                "init": null,
                "definite": false,
                "start": 4783,
                "end": 4799
              }
            ],
            "declare": false,
            "start": 4777,
            "end": 4800
          }
        ],
        "start": 4775,
        "end": 4802
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 4755,
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
                      "start": 4823,
                      "end": 4824
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "a",
                          "raw": "\"a\"",
                          "start": 4827,
                          "end": 4830
                        },
                        "start": 4827,
                        "end": 4830
                      },
                      "start": 4825,
                      "end": 4830
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4822,
                    "end": 4831
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
                        "start": 4833,
                        "end": 4834
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4835,
                        "end": 4836
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4833,
                      "end": 4836
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "b",
                          "raw": "\"b\"",
                          "start": 4839,
                          "end": 4842
                        },
                        "start": 4839,
                        "end": 4842
                      },
                      "start": 4837,
                      "end": 4842
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4832,
                    "end": 4842
                  }
                ],
                "start": 4820,
                "end": 4844
              },
              "start": 4818,
              "end": 4844
            },
            "start": 4817,
            "end": 4844
          },
          "init": null,
          "definite": false,
          "start": 4817,
          "end": 4844
        }
      ],
      "declare": true,
      "start": 4803,
      "end": 4845
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 4863,
        "end": 4864
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
              "start": 4865,
              "end": 4866
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4865,
            "end": 4866
          }
        ],
        "start": 4864,
        "end": 4867
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
                "start": 4871,
                "end": 4872
              },
              "typeArguments": null,
              "start": 4871,
              "end": 4872
            },
            "start": 4869,
            "end": 4872
          },
          "start": 4868,
          "end": 4872
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
            "start": 4875,
            "end": 4876
          },
          "typeArguments": null,
          "start": 4875,
          "end": 4876
        },
        "start": 4873,
        "end": 4876
      },
      "body": null,
      "expression": false,
      "start": 4846,
      "end": 4877
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 4895,
        "end": 4896
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
                "start": 4907,
                "end": 4908
              },
              "typeArguments": null,
              "start": 4900,
              "end": 4908
            },
            "start": 4898,
            "end": 4908
          },
          "start": 4897,
          "end": 4908
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 4911,
          "end": 4915
        },
        "start": 4909,
        "end": 4915
      },
      "body": null,
      "expression": false,
      "start": 4878,
      "end": 4916
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 4934,
        "end": 4935
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
                  "start": 4946,
                  "end": 4947
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4948,
                  "end": 4949
                },
                "start": 4946,
                "end": 4949
              },
              "typeArguments": null,
              "start": 4939,
              "end": 4949
            },
            "start": 4937,
            "end": 4949
          },
          "start": 4936,
          "end": 4949
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 4952,
          "end": 4956
        },
        "start": 4950,
        "end": 4956
      },
      "body": null,
      "expression": false,
      "start": 4917,
      "end": 4957
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
          "start": 5004,
          "end": 5005
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 5006,
            "end": 5007
          }
        ],
        "optional": false,
        "start": 5004,
        "end": 5008
      },
      "directive": null,
      "start": 5004,
      "end": 5009
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
          "start": 5010,
          "end": 5011
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
              "start": 5012,
              "end": 5013
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 5014,
              "end": 5015
            },
            "optional": false,
            "computed": false,
            "start": 5012,
            "end": 5015
          }
        ],
        "optional": false,
        "start": 5010,
        "end": 5016
      },
      "directive": null,
      "start": 5010,
      "end": 5017
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
          "start": 5018,
          "end": 5019
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
              "start": 5020,
              "end": 5021
            },
            "property": {
              "type": "Literal",
              "value": "s",
              "raw": "\"s\"",
              "start": 5022,
              "end": 5025
            },
            "optional": false,
            "computed": true,
            "start": 5020,
            "end": 5026
          }
        ],
        "optional": false,
        "start": 5018,
        "end": 5027
      },
      "directive": null,
      "start": 5018,
      "end": 5028
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
            "start": 5057,
            "end": 5058
          }
        ],
        "start": 5056,
        "end": 5059
      },
      "directive": null,
      "start": 5056,
      "end": 5060
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
              "start": 5062,
              "end": 5063
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 5064,
              "end": 5065
            },
            "optional": false,
            "computed": false,
            "start": 5062,
            "end": 5065
          }
        ],
        "start": 5061,
        "end": 5066
      },
      "directive": null,
      "start": 5061,
      "end": 5067
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
              "start": 5069,
              "end": 5070
            },
            "property": {
              "type": "Literal",
              "value": "s",
              "raw": "\"s\"",
              "start": 5071,
              "end": 5074
            },
            "optional": false,
            "computed": true,
            "start": 5069,
            "end": 5075
          }
        ],
        "start": 5068,
        "end": 5076
      },
      "directive": null,
      "start": 5068,
      "end": 5077
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
            "start": 5117,
            "end": 5119
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
                  "start": 5128,
                  "end": 5129
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5131,
                  "end": 5132
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5128,
                "end": 5132
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
                  "start": 5138,
                  "end": 5139
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5141,
                    "end": 5142
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5143,
                    "end": 5144
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5141,
                  "end": 5144
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5138,
                "end": 5144
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
                  "start": 5150,
                  "end": 5151
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5153,
                    "end": 5154
                  },
                  "property": {
                    "type": "Literal",
                    "value": "s",
                    "raw": "\"s\"",
                    "start": 5155,
                    "end": 5158
                  },
                  "optional": false,
                  "computed": true,
                  "start": 5153,
                  "end": 5159
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5150,
                "end": 5159
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
                  "start": 5166,
                  "end": 5173
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
                          "start": 5185,
                          "end": 5186
                        },
                        "start": 5178,
                        "end": 5187
                      }
                    ],
                    "start": 5176,
                    "end": 5189
                  },
                  "expression": false,
                  "start": 5173,
                  "end": 5189
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5166,
                "end": 5189
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
                  "start": 5201,
                  "end": 5208
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
                          "start": 5220,
                          "end": 5221
                        },
                        "start": 5213,
                        "end": 5222
                      }
                    ],
                    "start": 5211,
                    "end": 5224
                  },
                  "expression": false,
                  "start": 5208,
                  "end": 5224
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5195,
                "end": 5224
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
                  "start": 5238,
                  "end": 5245
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
                            "start": 5256,
                            "end": 5257
                          },
                          "start": 5250,
                          "end": 5257
                        },
                        "directive": null,
                        "start": 5250,
                        "end": 5258
                      }
                    ],
                    "start": 5248,
                    "end": 5260
                  },
                  "expression": false,
                  "start": 5245,
                  "end": 5260
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5230,
                "end": 5260
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
                  "start": 5268,
                  "end": 5275
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
                            "start": 5286,
                            "end": 5287
                          },
                          "start": 5280,
                          "end": 5287
                        },
                        "directive": null,
                        "start": 5280,
                        "end": 5288
                      }
                    ],
                    "start": 5278,
                    "end": 5290
                  },
                  "expression": false,
                  "start": 5275,
                  "end": 5290
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5266,
                "end": 5290
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
                  "start": 5296,
                  "end": 5303
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
                        "start": 5304,
                        "end": 5305
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5308,
                        "end": 5309
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5304,
                      "end": 5309
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
                          "start": 5320,
                          "end": 5321
                        },
                        "start": 5313,
                        "end": 5322
                      }
                    ],
                    "start": 5311,
                    "end": 5324
                  },
                  "expression": false,
                  "start": 5303,
                  "end": 5324
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5296,
                "end": 5324
              }
            ],
            "start": 5122,
            "end": 5326
          },
          "definite": false,
          "start": 5117,
          "end": 5326
        }
      ],
      "declare": false,
      "start": 5111,
      "end": 5327
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
        "start": 5360,
        "end": 5362
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
              "start": 5385,
              "end": 5386
            },
            "typeAnnotation": null,
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 5389,
              "end": 5390
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 5369,
            "end": 5391
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
              "start": 5412,
              "end": 5413
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
                "start": 5416,
                "end": 5417
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 5418,
                "end": 5419
              },
              "optional": false,
              "computed": false,
              "start": 5416,
              "end": 5419
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 5396,
            "end": 5420
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
              "start": 5441,
              "end": 5442
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
                "start": 5445,
                "end": 5446
              },
              "property": {
                "type": "Literal",
                "value": "s",
                "raw": "\"s\"",
                "start": 5447,
                "end": 5450
              },
              "optional": false,
              "computed": true,
              "start": 5445,
              "end": 5451
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 5425,
            "end": 5452
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
              "start": 5465,
              "end": 5466
            },
            "typeAnnotation": null,
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 5469,
              "end": 5470
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 5458,
            "end": 5471
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
              "start": 5483,
              "end": 5484
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
                "start": 5487,
                "end": 5488
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 5489,
                "end": 5490
              },
              "optional": false,
              "computed": false,
              "start": 5487,
              "end": 5490
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 5476,
            "end": 5491
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
              "start": 5503,
              "end": 5504
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
                "start": 5507,
                "end": 5508
              },
              "property": {
                "type": "Literal",
                "value": "s",
                "raw": "\"s\"",
                "start": 5509,
                "end": 5512
              },
              "optional": false,
              "computed": true,
              "start": 5507,
              "end": 5513
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 5496,
            "end": 5514
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
              "start": 5529,
              "end": 5530
            },
            "typeAnnotation": null,
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 5533,
              "end": 5534
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 5520,
            "end": 5535
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
              "start": 5549,
              "end": 5550
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
                "start": 5553,
                "end": 5554
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 5555,
                "end": 5556
              },
              "optional": false,
              "computed": false,
              "start": 5553,
              "end": 5556
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 5540,
            "end": 5557
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
              "start": 5571,
              "end": 5572
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
                "start": 5575,
                "end": 5576
              },
              "property": {
                "type": "Literal",
                "value": "s",
                "raw": "\"s\"",
                "start": 5577,
                "end": 5580
              },
              "optional": false,
              "computed": true,
              "start": 5575,
              "end": 5581
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 5562,
            "end": 5582
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
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 5588,
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
              "start": 5599,
              "end": 5600
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
                "start": 5603,
                "end": 5604
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 5605,
                "end": 5606
              },
              "optional": false,
              "computed": false,
              "start": 5603,
              "end": 5606
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 5599,
            "end": 5607
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
              "start": 5612,
              "end": 5613
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
                "start": 5616,
                "end": 5617
              },
              "property": {
                "type": "Literal",
                "value": "s",
                "raw": "\"s\"",
                "start": 5618,
                "end": 5621
              },
              "optional": false,
              "computed": true,
              "start": 5616,
              "end": 5622
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 5612,
            "end": 5623
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
              "start": 5629,
              "end": 5636
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
                      "start": 5648,
                      "end": 5649
                    },
                    "start": 5641,
                    "end": 5650
                  }
                ],
                "start": 5639,
                "end": 5652
              },
              "expression": false,
              "start": 5636,
              "end": 5652
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 5629,
            "end": 5652
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
              "start": 5663,
              "end": 5670
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
                      "start": 5682,
                      "end": 5683
                    },
                    "start": 5675,
                    "end": 5684
                  }
                ],
                "start": 5673,
                "end": 5686
              },
              "expression": false,
              "start": 5670,
              "end": 5686
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 5657,
            "end": 5686
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
              "start": 5699,
              "end": 5706
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
                        "start": 5717,
                        "end": 5718
                      },
                      "start": 5711,
                      "end": 5718
                    },
                    "directive": null,
                    "start": 5711,
                    "end": 5719
                  }
                ],
                "start": 5709,
                "end": 5721
              },
              "expression": false,
              "start": 5706,
              "end": 5721
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 5691,
            "end": 5721
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
              "start": 5728,
              "end": 5735
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
                        "start": 5746,
                        "end": 5747
                      },
                      "start": 5740,
                      "end": 5747
                    },
                    "directive": null,
                    "start": 5740,
                    "end": 5748
                  }
                ],
                "start": 5738,
                "end": 5750
              },
              "expression": false,
              "start": 5735,
              "end": 5750
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 5726,
            "end": 5750
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
              "start": 5755,
              "end": 5762
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
                    "start": 5763,
                    "end": 5764
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5767,
                    "end": 5768
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5763,
                  "end": 5768
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
                      "start": 5779,
                      "end": 5780
                    },
                    "start": 5772,
                    "end": 5781
                  }
                ],
                "start": 5770,
                "end": 5783
              },
              "expression": false,
              "start": 5762,
              "end": 5783
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 5755,
            "end": 5783
          }
        ],
        "start": 5363,
        "end": 5785
      },
      "abstract": false,
      "declare": false,
      "start": 5354,
      "end": 5785
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
          "start": 5832,
          "end": 5833
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 5834,
          "end": 5835
        },
        "optional": false,
        "computed": true,
        "start": 5832,
        "end": 5836
      },
      "directive": null,
      "start": 5832,
      "end": 5837
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
          "start": 5838,
          "end": 5839
        },
        "property": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 5840,
            "end": 5841
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 5842,
            "end": 5843
          },
          "optional": false,
          "computed": false,
          "start": 5840,
          "end": 5843
        },
        "optional": false,
        "computed": true,
        "start": 5838,
        "end": 5844
      },
      "directive": null,
      "start": 5838,
      "end": 5845
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
          "start": 5846,
          "end": 5847
        },
        "property": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 5848,
            "end": 5849
          },
          "property": {
            "type": "Literal",
            "value": "s",
            "raw": "\"s\"",
            "start": 5850,
            "end": 5853
          },
          "optional": false,
          "computed": true,
          "start": 5848,
          "end": 5854
        },
        "optional": false,
        "computed": true,
        "start": 5846,
        "end": 5855
      },
      "directive": null,
      "start": 5846,
      "end": 5856
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
          "start": 5886,
          "end": 5887
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
                "start": 5895,
                "end": 5896
              },
              "typeArguments": null,
              "start": 5888,
              "end": 5896
            }
          ],
          "start": 5887,
          "end": 5897
        },
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 5898,
            "end": 5899
          }
        ],
        "optional": false,
        "start": 5886,
        "end": 5900
      },
      "directive": null,
      "start": 5886,
      "end": 5901
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
          "start": 5902,
          "end": 5903
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
                  "start": 5911,
                  "end": 5912
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5913,
                  "end": 5914
                },
                "start": 5911,
                "end": 5914
              },
              "typeArguments": null,
              "start": 5904,
              "end": 5914
            }
          ],
          "start": 5903,
          "end": 5915
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
              "start": 5916,
              "end": 5917
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 5918,
              "end": 5919
            },
            "optional": false,
            "computed": false,
            "start": 5916,
            "end": 5919
          }
        ],
        "optional": false,
        "start": 5902,
        "end": 5920
      },
      "directive": null,
      "start": 5902,
      "end": 5921
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
          "start": 5922,
          "end": 5923
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
                  "start": 5931,
                  "end": 5932
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5933,
                  "end": 5934
                },
                "start": 5931,
                "end": 5934
              },
              "typeArguments": null,
              "start": 5924,
              "end": 5934
            }
          ],
          "start": 5923,
          "end": 5935
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
              "start": 5936,
              "end": 5937
            },
            "property": {
              "type": "Literal",
              "value": "s",
              "raw": "\"s\"",
              "start": 5938,
              "end": 5941
            },
            "optional": false,
            "computed": true,
            "start": 5936,
            "end": 5942
          }
        ],
        "optional": false,
        "start": 5922,
        "end": 5943
      },
      "directive": null,
      "start": 5922,
      "end": 5944
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
          "start": 5945,
          "end": 5946
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 5947,
            "end": 5948
          }
        ],
        "optional": false,
        "start": 5945,
        "end": 5949
      },
      "directive": null,
      "start": 5945,
      "end": 5950
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
          "start": 5951,
          "end": 5952
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
              "start": 5953,
              "end": 5954
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 5955,
              "end": 5956
            },
            "optional": false,
            "computed": false,
            "start": 5953,
            "end": 5956
          }
        ],
        "optional": false,
        "start": 5951,
        "end": 5957
      },
      "directive": null,
      "start": 5951,
      "end": 5958
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
          "start": 5959,
          "end": 5960
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
              "start": 5961,
              "end": 5962
            },
            "property": {
              "type": "Literal",
              "value": "s",
              "raw": "\"s\"",
              "start": 5963,
              "end": 5966
            },
            "optional": false,
            "computed": true,
            "start": 5961,
            "end": 5967
          }
        ],
        "optional": false,
        "start": 5959,
        "end": 5968
      },
      "directive": null,
      "start": 5959,
      "end": 5969
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
          "start": 5992,
          "end": 5993
        },
        "operator": "||",
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 5997,
          "end": 5999
        },
        "start": 5992,
        "end": 5999
      },
      "directive": null,
      "start": 5992,
      "end": 6000
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
            "start": 6001,
            "end": 6002
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 6003,
            "end": 6004
          },
          "optional": false,
          "computed": false,
          "start": 6001,
          "end": 6004
        },
        "operator": "||",
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 6008,
          "end": 6010
        },
        "start": 6001,
        "end": 6010
      },
      "directive": null,
      "start": 6001,
      "end": 6011
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
            "start": 6012,
            "end": 6013
          },
          "property": {
            "type": "Literal",
            "value": "s",
            "raw": "\"s\"",
            "start": 6014,
            "end": 6017
          },
          "optional": false,
          "computed": true,
          "start": 6012,
          "end": 6018
        },
        "operator": "||",
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 6022,
          "end": 6024
        },
        "start": 6012,
        "end": 6024
      },
      "directive": null,
      "start": 6012,
      "end": 6025
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
                "start": 6043,
                "end": 6047
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "random",
                "optional": false,
                "typeAnnotation": null,
                "start": 6048,
                "end": 6054
              },
              "optional": false,
              "computed": false,
              "start": 6043,
              "end": 6054
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 6043,
            "end": 6056
          },
          "operator": "*",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 6059,
            "end": 6060
          },
          "start": 6043,
          "end": 6060
        },
        "consequent": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 6063,
          "end": 6064
        },
        "alternate": {
          "type": "Literal",
          "value": "a",
          "raw": "\"a\"",
          "start": 6067,
          "end": 6070
        },
        "start": 6043,
        "end": 6070
      },
      "directive": null,
      "start": 6043,
      "end": 6071
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
                "start": 6072,
                "end": 6076
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "random",
                "optional": false,
                "typeAnnotation": null,
                "start": 6077,
                "end": 6083
              },
              "optional": false,
              "computed": false,
              "start": 6072,
              "end": 6083
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 6072,
            "end": 6085
          },
          "operator": "*",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 6088,
            "end": 6089
          },
          "start": 6072,
          "end": 6089
        },
        "consequent": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 6092,
            "end": 6093
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 6094,
            "end": 6095
          },
          "optional": false,
          "computed": false,
          "start": 6092,
          "end": 6095
        },
        "alternate": {
          "type": "Literal",
          "value": "a",
          "raw": "\"a\"",
          "start": 6098,
          "end": 6101
        },
        "start": 6072,
        "end": 6101
      },
      "directive": null,
      "start": 6072,
      "end": 6102
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
                "start": 6103,
                "end": 6107
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "random",
                "optional": false,
                "typeAnnotation": null,
                "start": 6108,
                "end": 6114
              },
              "optional": false,
              "computed": false,
              "start": 6103,
              "end": 6114
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 6103,
            "end": 6116
          },
          "operator": "*",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 6119,
            "end": 6120
          },
          "start": 6103,
          "end": 6120
        },
        "consequent": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 6123,
            "end": 6124
          },
          "property": {
            "type": "Literal",
            "value": "s",
            "raw": "\"s\"",
            "start": 6125,
            "end": 6128
          },
          "optional": false,
          "computed": true,
          "start": 6123,
          "end": 6129
        },
        "alternate": {
          "type": "Literal",
          "value": "a",
          "raw": "\"a\"",
          "start": 6132,
          "end": 6135
        },
        "start": 6103,
        "end": 6135
      },
      "directive": null,
      "start": 6103,
      "end": 6136
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
              "start": 6173,
              "end": 6174
            },
            "value": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 6177,
              "end": 6180
            },
            "method": false,
            "shorthand": false,
            "computed": true,
            "optional": false,
            "start": 6172,
            "end": 6180
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
                "start": 6187,
                "end": 6188
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 6189,
                "end": 6190
              },
              "optional": false,
              "computed": false,
              "start": 6187,
              "end": 6190
            },
            "value": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 6193,
              "end": 6196
            },
            "method": false,
            "shorthand": false,
            "computed": true,
            "optional": false,
            "start": 6186,
            "end": 6196
          }
        ],
        "start": 6166,
        "end": 6199
      },
      "directive": null,
      "start": 6165,
      "end": 6201
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
        "start": 6209,
        "end": 6211
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
              "start": 6226,
              "end": 6227
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 6230,
                  "end": 6233
                },
                "start": 6230,
                "end": 6233
              },
              "start": 6228,
              "end": 6233
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
            "start": 6218,
            "end": 6234
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
                "start": 6247,
                "end": 6248
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 6249,
                "end": 6250
              },
              "optional": false,
              "computed": false,
              "start": 6247,
              "end": 6250
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 6253,
                  "end": 6256
                },
                "start": 6253,
                "end": 6256
              },
              "start": 6251,
              "end": 6256
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
            "start": 6239,
            "end": 6257
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
              "start": 6264,
              "end": 6265
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 6268,
                  "end": 6271
                },
                "start": 6268,
                "end": 6271
              },
              "start": 6266,
              "end": 6271
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
            "start": 6263,
            "end": 6272
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
                "start": 6278,
                "end": 6279
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 6280,
                "end": 6281
              },
              "optional": false,
              "computed": false,
              "start": 6278,
              "end": 6281
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 6284,
                  "end": 6287
                },
                "start": 6284,
                "end": 6287
              },
              "start": 6282,
              "end": 6287
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
            "start": 6277,
            "end": 6288
          }
        ],
        "start": 6212,
        "end": 6290
      },
      "abstract": false,
      "declare": false,
      "start": 6203,
      "end": 6290
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Context",
        "optional": false,
        "typeAnnotation": null,
        "start": 6323,
        "end": 6330
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
              "start": 6337,
              "end": 6344
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
                  "start": 6355,
                  "end": 6356
                },
                "typeArguments": null,
                "start": 6348,
                "end": 6356
              },
              "start": 6346,
              "end": 6356
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 6337,
            "end": 6357
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null,
              "start": 6362,
              "end": 6369
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
                  "start": 6373,
                  "end": 6380
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
                        "start": 6388,
                        "end": 6389
                      },
                      "typeArguments": null,
                      "start": 6381,
                      "end": 6389
                    }
                  ],
                  "start": 6380,
                  "end": 6390
                },
                "start": 6373,
                "end": 6390
              },
              "start": 6371,
              "end": 6390
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 6362,
            "end": 6391
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method3",
              "optional": false,
              "typeAnnotation": null,
              "start": 6396,
              "end": 6403
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
                  "start": 6407,
                  "end": 6428
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
                        "start": 6436,
                        "end": 6437
                      },
                      "typeArguments": null,
                      "start": 6429,
                      "end": 6437
                    }
                  ],
                  "start": 6428,
                  "end": 6438
                },
                "start": 6407,
                "end": 6438
              },
              "start": 6405,
              "end": 6438
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 6396,
            "end": 6439
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method4",
              "optional": false,
              "typeAnnotation": null,
              "start": 6444,
              "end": 6451
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
                  "start": 6455,
                  "end": 6471
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
                        "start": 6479,
                        "end": 6480
                      },
                      "typeArguments": null,
                      "start": 6472,
                      "end": 6480
                    }
                  ],
                  "start": 6471,
                  "end": 6481
                },
                "start": 6455,
                "end": 6481
              },
              "start": 6453,
              "end": 6481
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 6444,
            "end": 6482
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method5",
              "optional": false,
              "typeAnnotation": null,
              "start": 6487,
              "end": 6494
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
                      "start": 6506,
                      "end": 6507
                    },
                    "typeArguments": null,
                    "start": 6499,
                    "end": 6507
                  },
                  "start": 6497,
                  "end": 6507
                },
                "start": 6495,
                "end": 6507
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
                  "start": 6517,
                  "end": 6518
                },
                "typeArguments": null,
                "start": 6510,
                "end": 6518
              },
              "start": 6508,
              "end": 6518
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 6487,
            "end": 6519
          }
        ],
        "start": 6331,
        "end": 6521
      },
      "declare": false,
      "start": 6313,
      "end": 6521
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
                  "start": 6533,
                  "end": 6540
                },
                "typeArguments": null,
                "start": 6533,
                "end": 6540
              },
              "start": 6531,
              "end": 6540
            },
            "start": 6529,
            "end": 6540
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
                  "start": 6549,
                  "end": 6556
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
                          "start": 6576,
                          "end": 6577
                        },
                        "start": 6569,
                        "end": 6578
                      }
                    ],
                    "start": 6559,
                    "end": 6639
                  },
                  "expression": false,
                  "start": 6556,
                  "end": 6639
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 6549,
                "end": 6639
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
                  "start": 6651,
                  "end": 6658
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
                          "start": 6678,
                          "end": 6679
                        },
                        "start": 6671,
                        "end": 6680
                      }
                    ],
                    "start": 6661,
                    "end": 6741
                  },
                  "expression": false,
                  "start": 6658,
                  "end": 6741
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 6645,
                "end": 6741
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
                  "start": 6755,
                  "end": 6762
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
                            "start": 6781,
                            "end": 6782
                          },
                          "start": 6775,
                          "end": 6782
                        },
                        "directive": null,
                        "start": 6775,
                        "end": 6783
                      }
                    ],
                    "start": 6765,
                    "end": 6843
                  },
                  "expression": false,
                  "start": 6762,
                  "end": 6843
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 6747,
                "end": 6843
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
                  "start": 6851,
                  "end": 6858
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
                            "start": 6877,
                            "end": 6878
                          },
                          "start": 6871,
                          "end": 6878
                        },
                        "directive": null,
                        "start": 6871,
                        "end": 6879
                      }
                    ],
                    "start": 6861,
                    "end": 6939
                  },
                  "expression": false,
                  "start": 6858,
                  "end": 6939
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 6849,
                "end": 6939
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
                  "start": 6945,
                  "end": 6952
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
                        "start": 6953,
                        "end": 6954
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6957,
                        "end": 6958
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6953,
                      "end": 6958
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
                          "start": 7030,
                          "end": 7031
                        },
                        "start": 7023,
                        "end": 7032
                      }
                    ],
                    "start": 6960,
                    "end": 7038
                  },
                  "expression": false,
                  "start": 6952,
                  "end": 7038
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 6945,
                "end": 7038
              }
            ],
            "start": 6543,
            "end": 7040
          },
          "definite": false,
          "start": 6529,
          "end": 7040
        }
      ],
      "declare": false,
      "start": 6523,
      "end": 7041
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 38,
  "end": 7041
}
```
