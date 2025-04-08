__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 38,
  "end": 7041,
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
      "type": "FunctionDeclaration",
      "start": 991,
      "end": 1043,
      "id": {
        "type": "Identifier",
        "start": 1000,
        "end": 1019,
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
        "start": 1022,
        "end": 1043,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1024,
            "end": 1041,
            "argument": {
              "type": "Identifier",
              "start": 1031,
              "end": 1040,
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
      "start": 1044,
      "end": 1092,
      "id": {
        "type": "Identifier",
        "start": 1053,
        "end": 1070,
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
        "start": 1073,
        "end": 1092,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1075,
            "end": 1090,
            "argument": {
              "type": "Identifier",
              "start": 1082,
              "end": 1089,
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
      "start": 1093,
      "end": 1141,
      "id": {
        "type": "Identifier",
        "start": 1102,
        "end": 1119,
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
        "start": 1122,
        "end": 1141,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1124,
            "end": 1139,
            "argument": {
              "type": "Identifier",
              "start": 1131,
              "end": 1138,
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
      "start": 1184,
      "end": 1267,
      "id": {
        "type": "Identifier",
        "start": 1193,
        "end": 1225,
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
        "start": 1246,
        "end": 1267,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1248,
            "end": 1265,
            "argument": {
              "type": "Identifier",
              "start": 1255,
              "end": 1264,
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
        "start": 1227,
        "end": 1245,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 1229,
          "end": 1245,
          "exprName": {
            "type": "Identifier",
            "start": 1236,
            "end": 1245,
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
      "start": 1307,
      "end": 1361,
      "id": {
        "type": "Identifier",
        "start": 1317,
        "end": 1338,
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
        "start": 1341,
        "end": 1361,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1343,
            "end": 1359,
            "expression": {
              "type": "YieldExpression",
              "start": 1343,
              "end": 1358,
              "delegate": false,
              "argument": {
                "type": "Identifier",
                "start": 1349,
                "end": 1358,
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
      "start": 1362,
      "end": 1412,
      "id": {
        "type": "Identifier",
        "start": 1372,
        "end": 1391,
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
        "start": 1394,
        "end": 1412,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1396,
            "end": 1410,
            "expression": {
              "type": "YieldExpression",
              "start": 1396,
              "end": 1409,
              "delegate": false,
              "argument": {
                "type": "Identifier",
                "start": 1402,
                "end": 1409,
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
      "start": 1413,
      "end": 1463,
      "id": {
        "type": "Identifier",
        "start": 1423,
        "end": 1442,
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
        "start": 1445,
        "end": 1463,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1447,
            "end": 1461,
            "expression": {
              "type": "YieldExpression",
              "start": 1447,
              "end": 1460,
              "delegate": false,
              "argument": {
                "type": "Identifier",
                "start": 1453,
                "end": 1460,
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
      "start": 1516,
      "end": 1619,
      "id": {
        "type": "Identifier",
        "start": 1526,
        "end": 1560,
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
        "start": 1599,
        "end": 1619,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1601,
            "end": 1617,
            "expression": {
              "type": "YieldExpression",
              "start": 1601,
              "end": 1616,
              "delegate": false,
              "argument": {
                "type": "Identifier",
                "start": 1607,
                "end": 1616,
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
        "start": 1562,
        "end": 1598,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1564,
          "end": 1598,
          "typeName": {
            "type": "Identifier",
            "start": 1564,
            "end": 1580,
            "name": "IterableIterator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1580,
            "end": 1598,
            "params": [
              {
                "type": "TSTypeQuery",
                "start": 1581,
                "end": 1597,
                "exprName": {
                  "type": "Identifier",
                  "start": 1588,
                  "end": 1597,
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
      "start": 1656,
      "end": 1719,
      "id": {
        "type": "Identifier",
        "start": 1671,
        "end": 1695,
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
        "start": 1698,
        "end": 1719,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1700,
            "end": 1717,
            "argument": {
              "type": "Identifier",
              "start": 1707,
              "end": 1716,
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
      "start": 1720,
      "end": 1779,
      "id": {
        "type": "Identifier",
        "start": 1735,
        "end": 1757,
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
        "start": 1760,
        "end": 1779,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1762,
            "end": 1777,
            "argument": {
              "type": "Identifier",
              "start": 1769,
              "end": 1776,
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
      "start": 1780,
      "end": 1839,
      "id": {
        "type": "Identifier",
        "start": 1795,
        "end": 1817,
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
        "start": 1820,
        "end": 1839,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1822,
            "end": 1837,
            "argument": {
              "type": "Identifier",
              "start": 1829,
              "end": 1836,
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
      "start": 1885,
      "end": 1950,
      "id": {
        "type": "Identifier",
        "start": 1901,
        "end": 1927,
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
        "start": 1930,
        "end": 1950,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1932,
            "end": 1948,
            "expression": {
              "type": "YieldExpression",
              "start": 1932,
              "end": 1947,
              "delegate": false,
              "argument": {
                "type": "Identifier",
                "start": 1938,
                "end": 1947,
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
      "start": 1951,
      "end": 2012,
      "id": {
        "type": "Identifier",
        "start": 1967,
        "end": 1991,
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
        "start": 1994,
        "end": 2012,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1996,
            "end": 2010,
            "expression": {
              "type": "YieldExpression",
              "start": 1996,
              "end": 2009,
              "delegate": false,
              "argument": {
                "type": "Identifier",
                "start": 2002,
                "end": 2009,
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
      "start": 2013,
      "end": 2074,
      "id": {
        "type": "Identifier",
        "start": 2029,
        "end": 2053,
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
        "start": 2056,
        "end": 2074,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2058,
            "end": 2072,
            "expression": {
              "type": "YieldExpression",
              "start": 2058,
              "end": 2071,
              "delegate": false,
              "argument": {
                "type": "Identifier",
                "start": 2064,
                "end": 2071,
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
      "start": 2087,
      "end": 2389,
      "id": {
        "type": "Identifier",
        "start": 2093,
        "end": 2094,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2095,
        "end": 2389,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 2101,
            "end": 2147,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2117,
              "end": 2135,
              "name": "readonlyStaticCall",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 2138,
              "end": 2146,
              "callee": {
                "type": "Identifier",
                "start": 2138,
                "end": 2144,
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
            "start": 2152,
            "end": 2202,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2168,
              "end": 2186,
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
              "start": 2186,
              "end": 2201,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 2188,
                "end": 2201,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 2195,
                  "end": 2201
                }
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 2207,
            "end": 2275,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2223,
              "end": 2248,
              "name": "readonlyStaticTypeAndCall",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 2266,
              "end": 2274,
              "callee": {
                "type": "Identifier",
                "start": 2266,
                "end": 2272,
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
              "start": 2248,
              "end": 2263,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 2250,
                "end": 2263,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 2257,
                  "end": 2263
                }
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 2280,
            "end": 2318,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2287,
              "end": 2306,
              "name": "readwriteStaticCall",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 2309,
              "end": 2317,
              "callee": {
                "type": "Identifier",
                "start": 2309,
                "end": 2315,
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
            "start": 2324,
            "end": 2357,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2333,
              "end": 2345,
              "name": "readonlyCall",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 2348,
              "end": 2356,
              "callee": {
                "type": "Identifier",
                "start": 2348,
                "end": 2354,
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
            "start": 2362,
            "end": 2387,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2362,
              "end": 2375,
              "name": "readwriteCall",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 2378,
              "end": 2386,
              "callee": {
                "type": "Identifier",
                "start": 2378,
                "end": 2384,
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
      "start": 2390,
      "end": 2409,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2404,
          "end": 2408,
          "id": {
            "type": "Identifier",
            "start": 2404,
            "end": 2408,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2405,
              "end": 2408,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2407,
                "end": 2408,
                "typeName": {
                  "type": "Identifier",
                  "start": 2407,
                  "end": 2408,
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
      "start": 2411,
      "end": 2471,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2417,
          "end": 2470,
          "id": {
            "type": "Identifier",
            "start": 2417,
            "end": 2447,
            "name": "constInitToCReadonlyStaticCall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 2450,
            "end": 2470,
            "object": {
              "type": "Identifier",
              "start": 2450,
              "end": 2451,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2452,
              "end": 2470,
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
      "start": 2472,
      "end": 2532,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2478,
          "end": 2531,
          "id": {
            "type": "Identifier",
            "start": 2478,
            "end": 2508,
            "name": "constInitToCReadonlyStaticType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 2511,
            "end": 2531,
            "object": {
              "type": "Identifier",
              "start": 2511,
              "end": 2512,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2513,
              "end": 2531,
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
      "start": 2533,
      "end": 2607,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2539,
          "end": 2606,
          "id": {
            "type": "Identifier",
            "start": 2539,
            "end": 2576,
            "name": "constInitToCReadonlyStaticTypeAndCall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 2579,
            "end": 2606,
            "object": {
              "type": "Identifier",
              "start": 2579,
              "end": 2580,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2581,
              "end": 2606,
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
      "start": 2608,
      "end": 2670,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2614,
          "end": 2669,
          "id": {
            "type": "Identifier",
            "start": 2614,
            "end": 2645,
            "name": "constInitToCReadwriteStaticCall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 2648,
            "end": 2669,
            "object": {
              "type": "Identifier",
              "start": 2648,
              "end": 2649,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2650,
              "end": 2669,
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
      "start": 2672,
      "end": 2774,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2678,
          "end": 2773,
          "id": {
            "type": "Identifier",
            "start": 2678,
            "end": 2750,
            "name": "constInitToCReadonlyStaticCallWithTypeQuery",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2721,
              "end": 2750,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 2723,
                "end": 2750,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 2730,
                  "end": 2750,
                  "left": {
                    "type": "Identifier",
                    "start": 2730,
                    "end": 2731,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2732,
                    "end": 2750,
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
            "start": 2753,
            "end": 2773,
            "object": {
              "type": "Identifier",
              "start": 2753,
              "end": 2754,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2755,
              "end": 2773,
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
      "start": 2775,
      "end": 2877,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2781,
          "end": 2876,
          "id": {
            "type": "Identifier",
            "start": 2781,
            "end": 2853,
            "name": "constInitToCReadonlyStaticTypeWithTypeQuery",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2824,
              "end": 2853,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 2826,
                "end": 2853,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 2833,
                  "end": 2853,
                  "left": {
                    "type": "Identifier",
                    "start": 2833,
                    "end": 2834,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2835,
                    "end": 2853,
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
            "start": 2856,
            "end": 2876,
            "object": {
              "type": "Identifier",
              "start": 2856,
              "end": 2857,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2858,
              "end": 2876,
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
      "start": 2878,
      "end": 3001,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2884,
          "end": 3000,
          "id": {
            "type": "Identifier",
            "start": 2884,
            "end": 2970,
            "name": "constInitToCReadonlyStaticTypeAndCallWithTypeQuery",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2934,
              "end": 2970,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 2936,
                "end": 2970,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 2943,
                  "end": 2970,
                  "left": {
                    "type": "Identifier",
                    "start": 2943,
                    "end": 2944,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2945,
                    "end": 2970,
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
            "start": 2973,
            "end": 3000,
            "object": {
              "type": "Identifier",
              "start": 2973,
              "end": 2974,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2975,
              "end": 3000,
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
      "start": 3002,
      "end": 3107,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3008,
          "end": 3106,
          "id": {
            "type": "Identifier",
            "start": 3008,
            "end": 3082,
            "name": "constInitToCReadwriteStaticCallWithTypeQuery",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3052,
              "end": 3082,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 3054,
                "end": 3082,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 3061,
                  "end": 3082,
                  "left": {
                    "type": "Identifier",
                    "start": 3061,
                    "end": 3062,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 3063,
                    "end": 3082,
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
            "start": 3085,
            "end": 3106,
            "object": {
              "type": "Identifier",
              "start": 3085,
              "end": 3086,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 3087,
              "end": 3106,
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
      "start": 3109,
      "end": 3157,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3115,
          "end": 3156,
          "id": {
            "type": "Identifier",
            "start": 3115,
            "end": 3139,
            "name": "constInitToCReadonlyCall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 3142,
            "end": 3156,
            "object": {
              "type": "Identifier",
              "start": 3142,
              "end": 3143,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 3144,
              "end": 3156,
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
      "start": 3158,
      "end": 3208,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3164,
          "end": 3207,
          "id": {
            "type": "Identifier",
            "start": 3164,
            "end": 3189,
            "name": "constInitToCReadwriteCall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 3192,
            "end": 3207,
            "object": {
              "type": "Identifier",
              "start": 3192,
              "end": 3193,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 3194,
              "end": 3207,
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
      "start": 3209,
      "end": 3293,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3215,
          "end": 3292,
          "id": {
            "type": "Identifier",
            "start": 3215,
            "end": 3275,
            "name": "constInitToCReadonlyCallWithTypeQuery",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3252,
              "end": 3275,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 3254,
                "end": 3275,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 3261,
                  "end": 3275,
                  "left": {
                    "type": "Identifier",
                    "start": 3261,
                    "end": 3262,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 3263,
                    "end": 3275,
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
            "start": 3278,
            "end": 3292,
            "object": {
              "type": "Identifier",
              "start": 3278,
              "end": 3279,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 3280,
              "end": 3292,
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
      "start": 3294,
      "end": 3381,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3300,
          "end": 3380,
          "id": {
            "type": "Identifier",
            "start": 3300,
            "end": 3362,
            "name": "constInitToCReadwriteCallWithTypeQuery",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3338,
              "end": 3362,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 3340,
                "end": 3362,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 3347,
                  "end": 3362,
                  "left": {
                    "type": "Identifier",
                    "start": 3347,
                    "end": 3348,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 3349,
                    "end": 3362,
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
            "start": 3365,
            "end": 3380,
            "object": {
              "type": "Identifier",
              "start": 3365,
              "end": 3366,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 3367,
              "end": 3380,
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
      "start": 3382,
      "end": 3466,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3388,
          "end": 3465,
          "id": {
            "type": "Identifier",
            "start": 3388,
            "end": 3448,
            "name": "constInitToCReadonlyCallWithIndexedAccess",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3429,
              "end": 3448,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 3431,
                "end": 3448,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 3431,
                  "end": 3432,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3431,
                    "end": 3432,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 3433,
                  "end": 3447,
                  "literal": {
                    "type": "Literal",
                    "start": 3433,
                    "end": 3447,
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
            "start": 3451,
            "end": 3465,
            "object": {
              "type": "Identifier",
              "start": 3451,
              "end": 3452,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 3453,
              "end": 3465,
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
      "start": 3467,
      "end": 3554,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3473,
          "end": 3553,
          "id": {
            "type": "Identifier",
            "start": 3473,
            "end": 3535,
            "name": "constInitToCReadwriteCallWithIndexedAccess",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3515,
              "end": 3535,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 3517,
                "end": 3535,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 3517,
                  "end": 3518,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3517,
                    "end": 3518,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 3519,
                  "end": 3534,
                  "literal": {
                    "type": "Literal",
                    "start": 3519,
                    "end": 3534,
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
            "start": 3538,
            "end": 3553,
            "object": {
              "type": "Identifier",
              "start": 3538,
              "end": 3539,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 3540,
              "end": 3553,
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
      "start": 3570,
      "end": 3627,
      "id": {
        "type": "Identifier",
        "start": 3580,
        "end": 3581,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 3582,
        "end": 3627,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 3588,
            "end": 3625,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 3597,
              "end": 3609,
              "name": "readonlyType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3609,
              "end": 3624,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 3611,
                "end": 3624,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 3618,
                  "end": 3624
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
      "start": 3628,
      "end": 3647,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3642,
          "end": 3646,
          "id": {
            "type": "Identifier",
            "start": 3642,
            "end": 3646,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3643,
              "end": 3646,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3645,
                "end": 3646,
                "typeName": {
                  "type": "Identifier",
                  "start": 3645,
                  "end": 3646,
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
      "start": 3649,
      "end": 3697,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3655,
          "end": 3696,
          "id": {
            "type": "Identifier",
            "start": 3655,
            "end": 3679,
            "name": "constInitToIReadonlyType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 3682,
            "end": 3696,
            "object": {
              "type": "Identifier",
              "start": 3682,
              "end": 3683,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 3684,
              "end": 3696,
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
      "start": 3698,
      "end": 3782,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3704,
          "end": 3781,
          "id": {
            "type": "Identifier",
            "start": 3704,
            "end": 3764,
            "name": "constInitToIReadonlyTypeWithTypeQuery",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3741,
              "end": 3764,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 3743,
                "end": 3764,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 3750,
                  "end": 3764,
                  "left": {
                    "type": "Identifier",
                    "start": 3750,
                    "end": 3751,
                    "name": "i",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 3752,
                    "end": 3764,
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
            "start": 3767,
            "end": 3781,
            "object": {
              "type": "Identifier",
              "start": 3767,
              "end": 3768,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 3769,
              "end": 3781,
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
      "start": 3783,
      "end": 3867,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3789,
          "end": 3866,
          "id": {
            "type": "Identifier",
            "start": 3789,
            "end": 3849,
            "name": "constInitToIReadonlyTypeWithIndexedAccess",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3830,
              "end": 3849,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 3832,
                "end": 3849,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 3832,
                  "end": 3833,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3832,
                    "end": 3833,
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 3834,
                  "end": 3848,
                  "literal": {
                    "type": "Literal",
                    "start": 3834,
                    "end": 3848,
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
            "start": 3852,
            "end": 3866,
            "object": {
              "type": "Identifier",
              "start": 3852,
              "end": 3853,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 3854,
              "end": 3866,
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
      "start": 3886,
      "end": 4013,
      "id": {
        "type": "Identifier",
        "start": 3891,
        "end": 3892,
        "name": "L",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 3895,
        "end": 4012,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 3901,
            "end": 3938,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 3910,
              "end": 3922,
              "name": "readonlyType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3922,
              "end": 3937,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 3924,
                "end": 3937,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 3931,
                  "end": 3937
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 3943,
            "end": 4010,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3943,
              "end": 3949,
              "name": "nested",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3949,
              "end": 4010,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 3951,
                "end": 4010,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 3961,
                    "end": 4004,
                    "computed": false,
                    "optional": false,
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "start": 3970,
                      "end": 3988,
                      "name": "readonlyNestedType",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3988,
                      "end": 4003,
                      "typeAnnotation": {
                        "type": "TSTypeOperator",
                        "start": 3990,
                        "end": 4003,
                        "operator": "unique",
                        "typeAnnotation": {
                          "type": "TSSymbolKeyword",
                          "start": 3997,
                          "end": 4003
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
      "start": 4014,
      "end": 4033,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4028,
          "end": 4032,
          "id": {
            "type": "Identifier",
            "start": 4028,
            "end": 4032,
            "name": "l",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4029,
              "end": 4032,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4031,
                "end": 4032,
                "typeName": {
                  "type": "Identifier",
                  "start": 4031,
                  "end": 4032,
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
      "start": 4035,
      "end": 4083,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4041,
          "end": 4082,
          "id": {
            "type": "Identifier",
            "start": 4041,
            "end": 4065,
            "name": "constInitToLReadonlyType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 4068,
            "end": 4082,
            "object": {
              "type": "Identifier",
              "start": 4068,
              "end": 4069,
              "name": "l",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 4070,
              "end": 4082,
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
      "start": 4084,
      "end": 4151,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4090,
          "end": 4150,
          "id": {
            "type": "Identifier",
            "start": 4090,
            "end": 4120,
            "name": "constInitToLReadonlyNestedType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 4123,
            "end": 4150,
            "object": {
              "type": "MemberExpression",
              "start": 4123,
              "end": 4131,
              "object": {
                "type": "Identifier",
                "start": 4123,
                "end": 4124,
                "name": "l",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4125,
                "end": 4131,
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
              "start": 4132,
              "end": 4150,
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
      "start": 4152,
      "end": 4236,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4158,
          "end": 4235,
          "id": {
            "type": "Identifier",
            "start": 4158,
            "end": 4218,
            "name": "constInitToLReadonlyTypeWithTypeQuery",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4195,
              "end": 4218,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 4197,
                "end": 4218,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 4204,
                  "end": 4218,
                  "left": {
                    "type": "Identifier",
                    "start": 4204,
                    "end": 4205,
                    "name": "l",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 4206,
                    "end": 4218,
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
            "start": 4221,
            "end": 4235,
            "object": {
              "type": "Identifier",
              "start": 4221,
              "end": 4222,
              "name": "l",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 4223,
              "end": 4235,
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
      "start": 4237,
      "end": 4353,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4243,
          "end": 4352,
          "id": {
            "type": "Identifier",
            "start": 4243,
            "end": 4322,
            "name": "constInitToLReadonlyNestedTypeWithTypeQuery",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4286,
              "end": 4322,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 4288,
                "end": 4322,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 4295,
                  "end": 4322,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 4295,
                    "end": 4303,
                    "left": {
                      "type": "Identifier",
                      "start": 4295,
                      "end": 4296,
                      "name": "l",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 4297,
                      "end": 4303,
                      "name": "nested",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 4304,
                    "end": 4322,
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
            "start": 4325,
            "end": 4352,
            "object": {
              "type": "MemberExpression",
              "start": 4325,
              "end": 4333,
              "object": {
                "type": "Identifier",
                "start": 4325,
                "end": 4326,
                "name": "l",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4327,
                "end": 4333,
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
              "start": 4334,
              "end": 4352,
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
      "start": 4354,
      "end": 4438,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4360,
          "end": 4437,
          "id": {
            "type": "Identifier",
            "start": 4360,
            "end": 4420,
            "name": "constInitToLReadonlyTypeWithIndexedAccess",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4401,
              "end": 4420,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 4403,
                "end": 4420,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 4403,
                  "end": 4404,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4403,
                    "end": 4404,
                    "name": "L",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 4405,
                  "end": 4419,
                  "literal": {
                    "type": "Literal",
                    "start": 4405,
                    "end": 4419,
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
            "start": 4423,
            "end": 4437,
            "object": {
              "type": "Identifier",
              "start": 4423,
              "end": 4424,
              "name": "l",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 4425,
              "end": 4437,
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
      "start": 4439,
      "end": 4558,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4445,
          "end": 4557,
          "id": {
            "type": "Identifier",
            "start": 4445,
            "end": 4527,
            "name": "constInitToLReadonlyNestedTypeWithIndexedAccess",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4492,
              "end": 4527,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 4494,
                "end": 4527,
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "start": 4494,
                  "end": 4505,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 4494,
                    "end": 4495,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4494,
                      "end": 4495,
                      "name": "L",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 4496,
                    "end": 4504,
                    "literal": {
                      "type": "Literal",
                      "start": 4496,
                      "end": 4504,
                      "value": "nested",
                      "raw": "\"nested\""
                    }
                  }
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 4506,
                  "end": 4526,
                  "literal": {
                    "type": "Literal",
                    "start": 4506,
                    "end": 4526,
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
            "start": 4530,
            "end": 4557,
            "object": {
              "type": "MemberExpression",
              "start": 4530,
              "end": 4538,
              "object": {
                "type": "Identifier",
                "start": 4530,
                "end": 4531,
                "name": "l",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4532,
                "end": 4538,
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
              "start": 4539,
              "end": 4557,
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
      "start": 4587,
      "end": 4642,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4593,
          "end": 4641,
          "id": {
            "type": "Identifier",
            "start": 4593,
            "end": 4612,
            "name": "promiseForConstCall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4615,
            "end": 4641,
            "callee": {
              "type": "MemberExpression",
              "start": 4615,
              "end": 4630,
              "object": {
                "type": "Identifier",
                "start": 4615,
                "end": 4622,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4623,
                "end": 4630,
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
                "start": 4631,
                "end": 4640,
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
      "start": 4643,
      "end": 4680,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4649,
          "end": 4679,
          "id": {
            "type": "Identifier",
            "start": 4649,
            "end": 4665,
            "name": "arrayOfConstCall",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 4668,
            "end": 4679,
            "elements": [
              {
                "type": "Identifier",
                "start": 4669,
                "end": 4678,
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
      "start": 4723,
      "end": 4754,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4737,
          "end": 4753,
          "id": {
            "type": "Identifier",
            "start": 4737,
            "end": 4753,
            "name": "s",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4738,
              "end": 4753,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 4740,
                "end": 4753,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 4747,
                  "end": 4753
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
      "start": 4755,
      "end": 4802,
      "id": {
        "type": "Identifier",
        "start": 4773,
        "end": 4774,
        "name": "N",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 4775,
        "end": 4802,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 4777,
            "end": 4800,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4783,
                "end": 4799,
                "id": {
                  "type": "Identifier",
                  "start": 4783,
                  "end": 4799,
                  "name": "s",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4784,
                    "end": 4799,
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "start": 4786,
                      "end": 4799,
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 4793,
                        "end": 4799
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
      "start": 4803,
      "end": 4845,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4817,
          "end": 4844,
          "id": {
            "type": "Identifier",
            "start": 4817,
            "end": 4844,
            "name": "o",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4818,
              "end": 4844,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 4820,
                "end": 4844,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 4822,
                    "end": 4831,
                    "computed": true,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4823,
                      "end": 4824,
                      "name": "s",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4825,
                      "end": 4830,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 4827,
                        "end": 4830,
                        "literal": {
                          "type": "Literal",
                          "start": 4827,
                          "end": 4830,
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
                    "start": 4832,
                    "end": 4842,
                    "computed": true,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "MemberExpression",
                      "start": 4833,
                      "end": 4836,
                      "object": {
                        "type": "Identifier",
                        "start": 4833,
                        "end": 4834,
                        "name": "N",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 4835,
                        "end": 4836,
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
                      "start": 4837,
                      "end": 4842,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 4839,
                        "end": 4842,
                        "literal": {
                          "type": "Literal",
                          "start": 4839,
                          "end": 4842,
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
      "start": 4846,
      "end": 4877,
      "id": {
        "type": "Identifier",
        "start": 4863,
        "end": 4864,
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
          "start": 4868,
          "end": 4872,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4869,
            "end": 4872,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4871,
              "end": 4872,
              "typeName": {
                "type": "Identifier",
                "start": 4871,
                "end": 4872,
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
        "start": 4864,
        "end": 4867,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4865,
            "end": 4866,
            "name": {
              "type": "Identifier",
              "start": 4865,
              "end": 4866,
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
        "start": 4873,
        "end": 4876,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 4875,
          "end": 4876,
          "typeName": {
            "type": "Identifier",
            "start": 4875,
            "end": 4876,
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
      "start": 4878,
      "end": 4916,
      "id": {
        "type": "Identifier",
        "start": 4895,
        "end": 4896,
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
          "start": 4897,
          "end": 4908,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4898,
            "end": 4908,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 4900,
              "end": 4908,
              "exprName": {
                "type": "Identifier",
                "start": 4907,
                "end": 4908,
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
        "start": 4909,
        "end": 4915,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 4911,
          "end": 4915
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 4917,
      "end": 4957,
      "id": {
        "type": "Identifier",
        "start": 4934,
        "end": 4935,
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
          "start": 4936,
          "end": 4949,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4937,
            "end": 4949,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 4939,
              "end": 4949,
              "exprName": {
                "type": "TSQualifiedName",
                "start": 4946,
                "end": 4949,
                "left": {
                  "type": "Identifier",
                  "start": 4946,
                  "end": 4947,
                  "name": "N",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 4948,
                  "end": 4949,
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
        "start": 4950,
        "end": 4956,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 4952,
          "end": 4956
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 5004,
      "end": 5009,
      "expression": {
        "type": "CallExpression",
        "start": 5004,
        "end": 5008,
        "callee": {
          "type": "Identifier",
          "start": 5004,
          "end": 5005,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 5006,
            "end": 5007,
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
      "start": 5010,
      "end": 5017,
      "expression": {
        "type": "CallExpression",
        "start": 5010,
        "end": 5016,
        "callee": {
          "type": "Identifier",
          "start": 5010,
          "end": 5011,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 5012,
            "end": 5015,
            "object": {
              "type": "Identifier",
              "start": 5012,
              "end": 5013,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 5014,
              "end": 5015,
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
      "start": 5018,
      "end": 5028,
      "expression": {
        "type": "CallExpression",
        "start": 5018,
        "end": 5027,
        "callee": {
          "type": "Identifier",
          "start": 5018,
          "end": 5019,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 5020,
            "end": 5026,
            "object": {
              "type": "Identifier",
              "start": 5020,
              "end": 5021,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 5022,
              "end": 5025,
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
      "start": 5056,
      "end": 5060,
      "expression": {
        "type": "ArrayExpression",
        "start": 5056,
        "end": 5059,
        "elements": [
          {
            "type": "Identifier",
            "start": 5057,
            "end": 5058,
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
      "start": 5061,
      "end": 5067,
      "expression": {
        "type": "ArrayExpression",
        "start": 5061,
        "end": 5066,
        "elements": [
          {
            "type": "MemberExpression",
            "start": 5062,
            "end": 5065,
            "object": {
              "type": "Identifier",
              "start": 5062,
              "end": 5063,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 5064,
              "end": 5065,
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
      "start": 5068,
      "end": 5077,
      "expression": {
        "type": "ArrayExpression",
        "start": 5068,
        "end": 5076,
        "elements": [
          {
            "type": "MemberExpression",
            "start": 5069,
            "end": 5075,
            "object": {
              "type": "Identifier",
              "start": 5069,
              "end": 5070,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 5071,
              "end": 5074,
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
      "start": 5111,
      "end": 5327,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5117,
          "end": 5326,
          "id": {
            "type": "Identifier",
            "start": 5117,
            "end": 5119,
            "name": "o2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 5122,
            "end": 5326,
            "properties": [
              {
                "type": "Property",
                "start": 5128,
                "end": 5132,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 5128,
                  "end": 5129,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 5131,
                  "end": 5132,
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
                "start": 5138,
                "end": 5144,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 5138,
                  "end": 5139,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 5141,
                  "end": 5144,
                  "object": {
                    "type": "Identifier",
                    "start": 5141,
                    "end": 5142,
                    "name": "N",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 5143,
                    "end": 5144,
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
                "start": 5150,
                "end": 5159,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 5150,
                  "end": 5151,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 5153,
                  "end": 5159,
                  "object": {
                    "type": "Identifier",
                    "start": 5153,
                    "end": 5154,
                    "name": "N",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 5155,
                    "end": 5158,
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
                "start": 5166,
                "end": 5189,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 5166,
                  "end": 5173,
                  "name": "method1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 5173,
                  "end": 5189,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 5176,
                    "end": 5189,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 5178,
                        "end": 5187,
                        "argument": {
                          "type": "Identifier",
                          "start": 5185,
                          "end": 5186,
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
                "start": 5195,
                "end": 5224,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 5201,
                  "end": 5208,
                  "name": "method2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 5208,
                  "end": 5224,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": true,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 5211,
                    "end": 5224,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 5213,
                        "end": 5222,
                        "argument": {
                          "type": "Identifier",
                          "start": 5220,
                          "end": 5221,
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
                "start": 5230,
                "end": 5260,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 5238,
                  "end": 5245,
                  "name": "method3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 5245,
                  "end": 5260,
                  "id": null,
                  "expression": false,
                  "generator": true,
                  "async": true,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 5248,
                    "end": 5260,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 5250,
                        "end": 5258,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 5250,
                          "end": 5257,
                          "delegate": false,
                          "argument": {
                            "type": "Identifier",
                            "start": 5256,
                            "end": 5257,
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
                "start": 5266,
                "end": 5290,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 5268,
                  "end": 5275,
                  "name": "method4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 5275,
                  "end": 5290,
                  "id": null,
                  "expression": false,
                  "generator": true,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 5278,
                    "end": 5290,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 5280,
                        "end": 5288,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 5280,
                          "end": 5287,
                          "delegate": false,
                          "argument": {
                            "type": "Identifier",
                            "start": 5286,
                            "end": 5287,
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
                "start": 5296,
                "end": 5324,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 5296,
                  "end": 5303,
                  "name": "method5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 5303,
                  "end": 5324,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "start": 5304,
                      "end": 5309,
                      "left": {
                        "type": "Identifier",
                        "start": 5304,
                        "end": 5305,
                        "name": "p",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 5308,
                        "end": 5309,
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
                    "start": 5311,
                    "end": 5324,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 5313,
                        "end": 5322,
                        "argument": {
                          "type": "Identifier",
                          "start": 5320,
                          "end": 5321,
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
      "start": 5354,
      "end": 5785,
      "id": {
        "type": "Identifier",
        "start": 5360,
        "end": 5362,
        "name": "C0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 5363,
        "end": 5785,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 5369,
            "end": 5391,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5385,
              "end": 5386,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 5389,
              "end": 5390,
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
            "start": 5396,
            "end": 5420,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5412,
              "end": 5413,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 5416,
              "end": 5419,
              "object": {
                "type": "Identifier",
                "start": 5416,
                "end": 5417,
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5418,
                "end": 5419,
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
            "start": 5425,
            "end": 5452,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5441,
              "end": 5442,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 5445,
              "end": 5451,
              "object": {
                "type": "Identifier",
                "start": 5445,
                "end": 5446,
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 5447,
                "end": 5450,
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
            "start": 5458,
            "end": 5471,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5465,
              "end": 5466,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 5469,
              "end": 5470,
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
            "start": 5476,
            "end": 5491,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5483,
              "end": 5484,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 5487,
              "end": 5490,
              "object": {
                "type": "Identifier",
                "start": 5487,
                "end": 5488,
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5489,
                "end": 5490,
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
            "start": 5496,
            "end": 5514,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5503,
              "end": 5504,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 5507,
              "end": 5513,
              "object": {
                "type": "Identifier",
                "start": 5507,
                "end": 5508,
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 5509,
                "end": 5512,
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
            "start": 5520,
            "end": 5535,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5529,
              "end": 5530,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 5533,
              "end": 5534,
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
            "start": 5540,
            "end": 5557,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5549,
              "end": 5550,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 5553,
              "end": 5556,
              "object": {
                "type": "Identifier",
                "start": 5553,
                "end": 5554,
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5555,
                "end": 5556,
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
            "start": 5562,
            "end": 5582,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5571,
              "end": 5572,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 5575,
              "end": 5581,
              "object": {
                "type": "Identifier",
                "start": 5575,
                "end": 5576,
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 5577,
                "end": 5580,
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
            "start": 5588,
            "end": 5594,
            "static": false,
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
            "end": 5607,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5599,
              "end": 5600,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 5603,
              "end": 5606,
              "object": {
                "type": "Identifier",
                "start": 5603,
                "end": 5604,
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 5605,
                "end": 5606,
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
            "start": 5612,
            "end": 5623,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5612,
              "end": 5613,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 5616,
              "end": 5622,
              "object": {
                "type": "Identifier",
                "start": 5616,
                "end": 5617,
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 5618,
                "end": 5621,
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
            "start": 5629,
            "end": 5652,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5629,
              "end": 5636,
              "name": "method1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 5636,
              "end": 5652,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 5639,
                "end": 5652,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 5641,
                    "end": 5650,
                    "argument": {
                      "type": "Identifier",
                      "start": 5648,
                      "end": 5649,
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
            "start": 5657,
            "end": 5686,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5663,
              "end": 5670,
              "name": "method2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 5670,
              "end": 5686,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 5673,
                "end": 5686,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 5675,
                    "end": 5684,
                    "argument": {
                      "type": "Identifier",
                      "start": 5682,
                      "end": 5683,
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
            "start": 5691,
            "end": 5721,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5699,
              "end": 5706,
              "name": "method3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 5706,
              "end": 5721,
              "id": null,
              "expression": false,
              "generator": true,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 5709,
                "end": 5721,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 5711,
                    "end": 5719,
                    "expression": {
                      "type": "YieldExpression",
                      "start": 5711,
                      "end": 5718,
                      "delegate": false,
                      "argument": {
                        "type": "Identifier",
                        "start": 5717,
                        "end": 5718,
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
            "start": 5726,
            "end": 5750,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5728,
              "end": 5735,
              "name": "method4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 5735,
              "end": 5750,
              "id": null,
              "expression": false,
              "generator": true,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 5738,
                "end": 5750,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 5740,
                    "end": 5748,
                    "expression": {
                      "type": "YieldExpression",
                      "start": 5740,
                      "end": 5747,
                      "delegate": false,
                      "argument": {
                        "type": "Identifier",
                        "start": 5746,
                        "end": 5747,
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
            "start": 5755,
            "end": 5783,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5755,
              "end": 5762,
              "name": "method5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 5762,
              "end": 5783,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 5763,
                  "end": 5768,
                  "left": {
                    "type": "Identifier",
                    "start": 5763,
                    "end": 5764,
                    "name": "p",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 5767,
                    "end": 5768,
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
                "start": 5770,
                "end": 5783,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 5772,
                    "end": 5781,
                    "argument": {
                      "type": "Identifier",
                      "start": 5779,
                      "end": 5780,
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
      "start": 5832,
      "end": 5837,
      "expression": {
        "type": "MemberExpression",
        "start": 5832,
        "end": 5836,
        "object": {
          "type": "Identifier",
          "start": 5832,
          "end": 5833,
          "name": "o",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 5834,
          "end": 5835,
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
      "start": 5838,
      "end": 5845,
      "expression": {
        "type": "MemberExpression",
        "start": 5838,
        "end": 5844,
        "object": {
          "type": "Identifier",
          "start": 5838,
          "end": 5839,
          "name": "o",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "MemberExpression",
          "start": 5840,
          "end": 5843,
          "object": {
            "type": "Identifier",
            "start": 5840,
            "end": 5841,
            "name": "N",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 5842,
            "end": 5843,
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
      "start": 5846,
      "end": 5856,
      "expression": {
        "type": "MemberExpression",
        "start": 5846,
        "end": 5855,
        "object": {
          "type": "Identifier",
          "start": 5846,
          "end": 5847,
          "name": "o",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "MemberExpression",
          "start": 5848,
          "end": 5854,
          "object": {
            "type": "Identifier",
            "start": 5848,
            "end": 5849,
            "name": "N",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 5850,
            "end": 5853,
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
      "start": 5886,
      "end": 5901,
      "expression": {
        "type": "CallExpression",
        "start": 5886,
        "end": 5900,
        "callee": {
          "type": "Identifier",
          "start": 5886,
          "end": 5887,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 5898,
            "end": 5899,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 5887,
          "end": 5897,
          "params": [
            {
              "type": "TSTypeQuery",
              "start": 5888,
              "end": 5896,
              "exprName": {
                "type": "Identifier",
                "start": 5895,
                "end": 5896,
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
      "start": 5902,
      "end": 5921,
      "expression": {
        "type": "CallExpression",
        "start": 5902,
        "end": 5920,
        "callee": {
          "type": "Identifier",
          "start": 5902,
          "end": 5903,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 5916,
            "end": 5919,
            "object": {
              "type": "Identifier",
              "start": 5916,
              "end": 5917,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 5918,
              "end": 5919,
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
          "start": 5903,
          "end": 5915,
          "params": [
            {
              "type": "TSTypeQuery",
              "start": 5904,
              "end": 5914,
              "exprName": {
                "type": "TSQualifiedName",
                "start": 5911,
                "end": 5914,
                "left": {
                  "type": "Identifier",
                  "start": 5911,
                  "end": 5912,
                  "name": "N",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 5913,
                  "end": 5914,
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
      "start": 5922,
      "end": 5944,
      "expression": {
        "type": "CallExpression",
        "start": 5922,
        "end": 5943,
        "callee": {
          "type": "Identifier",
          "start": 5922,
          "end": 5923,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 5936,
            "end": 5942,
            "object": {
              "type": "Identifier",
              "start": 5936,
              "end": 5937,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 5938,
              "end": 5941,
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
          "start": 5923,
          "end": 5935,
          "params": [
            {
              "type": "TSTypeQuery",
              "start": 5924,
              "end": 5934,
              "exprName": {
                "type": "TSQualifiedName",
                "start": 5931,
                "end": 5934,
                "left": {
                  "type": "Identifier",
                  "start": 5931,
                  "end": 5932,
                  "name": "N",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 5933,
                  "end": 5934,
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
      "start": 5945,
      "end": 5950,
      "expression": {
        "type": "CallExpression",
        "start": 5945,
        "end": 5949,
        "callee": {
          "type": "Identifier",
          "start": 5945,
          "end": 5946,
          "name": "g",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 5947,
            "end": 5948,
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
      "start": 5951,
      "end": 5958,
      "expression": {
        "type": "CallExpression",
        "start": 5951,
        "end": 5957,
        "callee": {
          "type": "Identifier",
          "start": 5951,
          "end": 5952,
          "name": "g",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 5953,
            "end": 5956,
            "object": {
              "type": "Identifier",
              "start": 5953,
              "end": 5954,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 5955,
              "end": 5956,
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
      "start": 5959,
      "end": 5969,
      "expression": {
        "type": "CallExpression",
        "start": 5959,
        "end": 5968,
        "callee": {
          "type": "Identifier",
          "start": 5959,
          "end": 5960,
          "name": "g",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 5961,
            "end": 5967,
            "object": {
              "type": "Identifier",
              "start": 5961,
              "end": 5962,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 5963,
              "end": 5966,
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
      "start": 5992,
      "end": 6000,
      "expression": {
        "type": "LogicalExpression",
        "start": 5992,
        "end": 5999,
        "left": {
          "type": "Identifier",
          "start": 5992,
          "end": 5993,
          "name": "s",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "||",
        "right": {
          "type": "Literal",
          "start": 5997,
          "end": 5999,
          "value": "",
          "raw": "\"\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 6001,
      "end": 6011,
      "expression": {
        "type": "LogicalExpression",
        "start": 6001,
        "end": 6010,
        "left": {
          "type": "MemberExpression",
          "start": 6001,
          "end": 6004,
          "object": {
            "type": "Identifier",
            "start": 6001,
            "end": 6002,
            "name": "N",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 6003,
            "end": 6004,
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
          "start": 6008,
          "end": 6010,
          "value": "",
          "raw": "\"\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 6012,
      "end": 6025,
      "expression": {
        "type": "LogicalExpression",
        "start": 6012,
        "end": 6024,
        "left": {
          "type": "MemberExpression",
          "start": 6012,
          "end": 6018,
          "object": {
            "type": "Identifier",
            "start": 6012,
            "end": 6013,
            "name": "N",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 6014,
            "end": 6017,
            "value": "s",
            "raw": "\"s\""
          },
          "computed": true,
          "optional": false
        },
        "operator": "||",
        "right": {
          "type": "Literal",
          "start": 6022,
          "end": 6024,
          "value": "",
          "raw": "\"\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 6043,
      "end": 6071,
      "expression": {
        "type": "ConditionalExpression",
        "start": 6043,
        "end": 6070,
        "test": {
          "type": "BinaryExpression",
          "start": 6043,
          "end": 6060,
          "left": {
            "type": "CallExpression",
            "start": 6043,
            "end": 6056,
            "callee": {
              "type": "MemberExpression",
              "start": 6043,
              "end": 6054,
              "object": {
                "type": "Identifier",
                "start": 6043,
                "end": 6047,
                "name": "Math",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6048,
                "end": 6054,
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
            "start": 6059,
            "end": 6060,
            "value": 2,
            "raw": "2"
          }
        },
        "consequent": {
          "type": "Identifier",
          "start": 6063,
          "end": 6064,
          "name": "s",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "alternate": {
          "type": "Literal",
          "start": 6067,
          "end": 6070,
          "value": "a",
          "raw": "\"a\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 6072,
      "end": 6102,
      "expression": {
        "type": "ConditionalExpression",
        "start": 6072,
        "end": 6101,
        "test": {
          "type": "BinaryExpression",
          "start": 6072,
          "end": 6089,
          "left": {
            "type": "CallExpression",
            "start": 6072,
            "end": 6085,
            "callee": {
              "type": "MemberExpression",
              "start": 6072,
              "end": 6083,
              "object": {
                "type": "Identifier",
                "start": 6072,
                "end": 6076,
                "name": "Math",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6077,
                "end": 6083,
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
            "start": 6088,
            "end": 6089,
            "value": 2,
            "raw": "2"
          }
        },
        "consequent": {
          "type": "MemberExpression",
          "start": 6092,
          "end": 6095,
          "object": {
            "type": "Identifier",
            "start": 6092,
            "end": 6093,
            "name": "N",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 6094,
            "end": 6095,
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
          "start": 6098,
          "end": 6101,
          "value": "a",
          "raw": "\"a\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 6103,
      "end": 6136,
      "expression": {
        "type": "ConditionalExpression",
        "start": 6103,
        "end": 6135,
        "test": {
          "type": "BinaryExpression",
          "start": 6103,
          "end": 6120,
          "left": {
            "type": "CallExpression",
            "start": 6103,
            "end": 6116,
            "callee": {
              "type": "MemberExpression",
              "start": 6103,
              "end": 6114,
              "object": {
                "type": "Identifier",
                "start": 6103,
                "end": 6107,
                "name": "Math",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6108,
                "end": 6114,
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
            "start": 6119,
            "end": 6120,
            "value": 2,
            "raw": "2"
          }
        },
        "consequent": {
          "type": "MemberExpression",
          "start": 6123,
          "end": 6129,
          "object": {
            "type": "Identifier",
            "start": 6123,
            "end": 6124,
            "name": "N",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 6125,
            "end": 6128,
            "value": "s",
            "raw": "\"s\""
          },
          "computed": true,
          "optional": false
        },
        "alternate": {
          "type": "Literal",
          "start": 6132,
          "end": 6135,
          "value": "a",
          "raw": "\"a\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 6165,
      "end": 6201,
      "expression": {
        "type": "ObjectExpression",
        "start": 6166,
        "end": 6199,
        "properties": [
          {
            "type": "Property",
            "start": 6172,
            "end": 6180,
            "method": false,
            "shorthand": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 6173,
              "end": 6174,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 6177,
              "end": 6180,
              "value": "a",
              "raw": "\"a\""
            },
            "kind": "init",
            "optional": false
          },
          {
            "type": "Property",
            "start": 6186,
            "end": 6196,
            "method": false,
            "shorthand": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 6187,
              "end": 6190,
              "object": {
                "type": "Identifier",
                "start": 6187,
                "end": 6188,
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6189,
                "end": 6190,
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
              "start": 6193,
              "end": 6196,
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
      "start": 6203,
      "end": 6290,
      "id": {
        "type": "Identifier",
        "start": 6209,
        "end": 6211,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 6212,
        "end": 6290,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 6218,
            "end": 6234,
            "static": true,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 6226,
              "end": 6227,
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
              "start": 6228,
              "end": 6233,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 6230,
                "end": 6233,
                "literal": {
                  "type": "Literal",
                  "start": 6230,
                  "end": 6233,
                  "value": "a",
                  "raw": "\"a\""
                }
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 6239,
            "end": 6257,
            "static": true,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 6247,
              "end": 6250,
              "object": {
                "type": "Identifier",
                "start": 6247,
                "end": 6248,
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6249,
                "end": 6250,
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
              "start": 6251,
              "end": 6256,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 6253,
                "end": 6256,
                "literal": {
                  "type": "Literal",
                  "start": 6253,
                  "end": 6256,
                  "value": "b",
                  "raw": "\"b\""
                }
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 6263,
            "end": 6272,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 6264,
              "end": 6265,
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
              "start": 6266,
              "end": 6271,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 6268,
                "end": 6271,
                "literal": {
                  "type": "Literal",
                  "start": 6268,
                  "end": 6271,
                  "value": "a",
                  "raw": "\"a\""
                }
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 6277,
            "end": 6288,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 6278,
              "end": 6281,
              "object": {
                "type": "Identifier",
                "start": 6278,
                "end": 6279,
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 6280,
                "end": 6281,
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
              "start": 6282,
              "end": 6287,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 6284,
                "end": 6287,
                "literal": {
                  "type": "Literal",
                  "start": 6284,
                  "end": 6287,
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
      "start": 6313,
      "end": 6521,
      "id": {
        "type": "Identifier",
        "start": 6323,
        "end": 6330,
        "name": "Context",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 6331,
        "end": 6521,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 6337,
            "end": 6357,
            "key": {
              "type": "Identifier",
              "start": 6337,
              "end": 6344,
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
              "start": 6346,
              "end": 6356,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 6348,
                "end": 6356,
                "exprName": {
                  "type": "Identifier",
                  "start": 6355,
                  "end": 6356,
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
            "start": 6362,
            "end": 6391,
            "key": {
              "type": "Identifier",
              "start": 6362,
              "end": 6369,
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
              "start": 6371,
              "end": 6390,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 6373,
                "end": 6390,
                "typeName": {
                  "type": "Identifier",
                  "start": 6373,
                  "end": 6380,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 6380,
                  "end": 6390,
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "start": 6381,
                      "end": 6389,
                      "exprName": {
                        "type": "Identifier",
                        "start": 6388,
                        "end": 6389,
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
            "start": 6396,
            "end": 6439,
            "key": {
              "type": "Identifier",
              "start": 6396,
              "end": 6403,
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
              "start": 6405,
              "end": 6438,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 6407,
                "end": 6438,
                "typeName": {
                  "type": "Identifier",
                  "start": 6407,
                  "end": 6428,
                  "name": "AsyncIterableIterator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 6428,
                  "end": 6438,
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "start": 6429,
                      "end": 6437,
                      "exprName": {
                        "type": "Identifier",
                        "start": 6436,
                        "end": 6437,
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
            "start": 6444,
            "end": 6482,
            "key": {
              "type": "Identifier",
              "start": 6444,
              "end": 6451,
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
              "start": 6453,
              "end": 6481,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 6455,
                "end": 6481,
                "typeName": {
                  "type": "Identifier",
                  "start": 6455,
                  "end": 6471,
                  "name": "IterableIterator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 6471,
                  "end": 6481,
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "start": 6472,
                      "end": 6480,
                      "exprName": {
                        "type": "Identifier",
                        "start": 6479,
                        "end": 6480,
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
            "start": 6487,
            "end": 6519,
            "key": {
              "type": "Identifier",
              "start": 6487,
              "end": 6494,
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
                "start": 6495,
                "end": 6507,
                "name": "p",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 6497,
                  "end": 6507,
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "start": 6499,
                    "end": 6507,
                    "exprName": {
                      "type": "Identifier",
                      "start": 6506,
                      "end": 6507,
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
              "start": 6508,
              "end": 6518,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 6510,
                "end": 6518,
                "exprName": {
                  "type": "Identifier",
                  "start": 6517,
                  "end": 6518,
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
      "start": 6523,
      "end": 7041,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6529,
          "end": 7040,
          "id": {
            "type": "Identifier",
            "start": 6529,
            "end": 6540,
            "name": "o4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6531,
              "end": 6540,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 6533,
                "end": 6540,
                "typeName": {
                  "type": "Identifier",
                  "start": 6533,
                  "end": 6540,
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
            "start": 6543,
            "end": 7040,
            "properties": [
              {
                "type": "Property",
                "start": 6549,
                "end": 6639,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 6549,
                  "end": 6556,
                  "name": "method1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 6556,
                  "end": 6639,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 6559,
                    "end": 6639,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 6569,
                        "end": 6578,
                        "argument": {
                          "type": "Identifier",
                          "start": 6576,
                          "end": 6577,
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
                "start": 6645,
                "end": 6741,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 6651,
                  "end": 6658,
                  "name": "method2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 6658,
                  "end": 6741,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": true,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 6661,
                    "end": 6741,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 6671,
                        "end": 6680,
                        "argument": {
                          "type": "Identifier",
                          "start": 6678,
                          "end": 6679,
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
                "start": 6747,
                "end": 6843,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 6755,
                  "end": 6762,
                  "name": "method3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 6762,
                  "end": 6843,
                  "id": null,
                  "expression": false,
                  "generator": true,
                  "async": true,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 6765,
                    "end": 6843,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 6775,
                        "end": 6783,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 6775,
                          "end": 6782,
                          "delegate": false,
                          "argument": {
                            "type": "Identifier",
                            "start": 6781,
                            "end": 6782,
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
                "start": 6849,
                "end": 6939,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 6851,
                  "end": 6858,
                  "name": "method4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 6858,
                  "end": 6939,
                  "id": null,
                  "expression": false,
                  "generator": true,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 6861,
                    "end": 6939,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 6871,
                        "end": 6879,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 6871,
                          "end": 6878,
                          "delegate": false,
                          "argument": {
                            "type": "Identifier",
                            "start": 6877,
                            "end": 6878,
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
                "start": 6945,
                "end": 7038,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 6945,
                  "end": 6952,
                  "name": "method5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 6952,
                  "end": 7038,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "start": 6953,
                      "end": 6958,
                      "left": {
                        "type": "Identifier",
                        "start": 6953,
                        "end": 6954,
                        "name": "p",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 6957,
                        "end": 6958,
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
                    "start": 6960,
                    "end": 7038,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 7023,
                        "end": 7032,
                        "argument": {
                          "type": "Identifier",
                          "start": 7030,
                          "end": 7031,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
