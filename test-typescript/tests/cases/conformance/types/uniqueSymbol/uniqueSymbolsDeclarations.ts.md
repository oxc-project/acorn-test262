uniqueSymbolsDeclarations.ts
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 53,
            "decorators": [],
            "name": "constCall",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 56,
            "end": 64,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 56,
              "end": 62,
              "decorators": [],
              "name": "Symbol",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 77,
            "decorators": [],
            "name": "letCall",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 80,
            "end": 88,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 80,
              "end": 86,
              "decorators": [],
              "name": "Symbol",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 101,
            "decorators": [],
            "name": "varCall",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 104,
            "end": 112,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 104,
              "end": 110,
              "decorators": [],
              "name": "Symbol",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 162,
            "end": 186,
            "decorators": [],
            "name": "constType",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 241,
            "end": 272,
            "decorators": [],
            "name": "constTypeAndCall",
            "optional": false,
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
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 275,
            "end": 283,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 275,
              "end": 281,
              "decorators": [],
              "name": "Symbol",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 324,
            "end": 344,
            "decorators": [],
            "name": "constInitToConstCall",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 347,
            "end": 356,
            "decorators": [],
            "name": "constCall",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 364,
            "end": 382,
            "decorators": [],
            "name": "constInitToLetCall",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 385,
            "end": 392,
            "decorators": [],
            "name": "letCall",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 400,
            "end": 418,
            "decorators": [],
            "name": "constInitToVarCall",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 421,
            "end": 428,
            "decorators": [],
            "name": "varCall",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 436,
            "end": 463,
            "decorators": [],
            "name": "constInitToConstDeclAmbient",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 466,
            "end": 475,
            "decorators": [],
            "name": "constType",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 481,
            "end": 499,
            "decorators": [],
            "name": "letInitToConstCall",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 502,
            "end": 511,
            "decorators": [],
            "name": "constCall",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 517,
            "end": 533,
            "decorators": [],
            "name": "letInitToLetCall",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 536,
            "end": 543,
            "decorators": [],
            "name": "letCall",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 549,
            "end": 565,
            "decorators": [],
            "name": "letInitToVarCall",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 568,
            "end": 575,
            "decorators": [],
            "name": "varCall",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 581,
            "end": 606,
            "decorators": [],
            "name": "letInitToConstDeclAmbient",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 609,
            "end": 618,
            "decorators": [],
            "name": "constType",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 624,
            "end": 642,
            "decorators": [],
            "name": "varInitToConstCall",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 645,
            "end": 654,
            "decorators": [],
            "name": "constCall",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 660,
            "end": 676,
            "decorators": [],
            "name": "varInitToLetCall",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 679,
            "end": 686,
            "decorators": [],
            "name": "letCall",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 692,
            "end": 708,
            "decorators": [],
            "name": "varInitToVarCall",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 711,
            "end": 718,
            "decorators": [],
            "name": "varCall",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 724,
            "end": 749,
            "decorators": [],
            "name": "varInitToConstDeclAmbient",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 752,
            "end": 761,
            "decorators": [],
            "name": "constType",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 818,
            "end": 869,
            "decorators": [],
            "name": "constInitToConstCallWithTypeQuery",
            "optional": false,
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
                  "decorators": [],
                  "name": "constCall",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 872,
            "end": 881,
            "decorators": [],
            "name": "constCall",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 889,
            "end": 947,
            "decorators": [],
            "name": "constInitToConstDeclAmbientWithTypeQuery",
            "optional": false,
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
                  "decorators": [],
                  "name": "constType",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 950,
            "end": 959,
            "decorators": [],
            "name": "constType",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 991,
      "end": 1043,
      "async": false,
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
              "decorators": [],
              "name": "constCall",
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
        "start": 1000,
        "end": 1019,
        "decorators": [],
        "name": "funcReturnConstCall",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1044,
      "end": 1092,
      "async": false,
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
              "decorators": [],
              "name": "letCall",
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
        "start": 1053,
        "end": 1070,
        "decorators": [],
        "name": "funcReturnLetCall",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1093,
      "end": 1141,
      "async": false,
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
              "decorators": [],
              "name": "varCall",
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
        "start": 1102,
        "end": 1119,
        "decorators": [],
        "name": "funcReturnVarCall",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1184,
      "end": 1267,
      "async": false,
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
              "decorators": [],
              "name": "constCall",
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
        "start": 1193,
        "end": 1225,
        "decorators": [],
        "name": "funcReturnConstCallWithTypeQuery",
        "optional": false
      },
      "params": [],
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
            "decorators": [],
            "name": "constCall",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1307,
      "end": 1361,
      "async": false,
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
              "argument": {
                "type": "Identifier",
                "start": 1349,
                "end": 1358,
                "decorators": [],
                "name": "constCall",
                "optional": false
              },
              "delegate": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 1317,
        "end": 1338,
        "decorators": [],
        "name": "genFuncYieldConstCall",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1362,
      "end": 1412,
      "async": false,
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
              "argument": {
                "type": "Identifier",
                "start": 1402,
                "end": 1409,
                "decorators": [],
                "name": "letCall",
                "optional": false
              },
              "delegate": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 1372,
        "end": 1391,
        "decorators": [],
        "name": "genFuncYieldLetCall",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1413,
      "end": 1463,
      "async": false,
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
              "argument": {
                "type": "Identifier",
                "start": 1453,
                "end": 1460,
                "decorators": [],
                "name": "varCall",
                "optional": false
              },
              "delegate": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 1423,
        "end": 1442,
        "decorators": [],
        "name": "genFuncYieldVarCall",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1516,
      "end": 1619,
      "async": false,
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
              "argument": {
                "type": "Identifier",
                "start": 1607,
                "end": 1616,
                "decorators": [],
                "name": "constCall",
                "optional": false
              },
              "delegate": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 1526,
        "end": 1560,
        "decorators": [],
        "name": "genFuncYieldConstCallWithTypeQuery",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1562,
        "end": 1598,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1564,
          "end": 1598,
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
                  "decorators": [],
                  "name": "constCall",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1564,
            "end": 1580,
            "decorators": [],
            "name": "IterableIterator",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1656,
      "end": 1719,
      "async": true,
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
              "decorators": [],
              "name": "constCall",
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
        "start": 1671,
        "end": 1695,
        "decorators": [],
        "name": "asyncFuncReturnConstCall",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1720,
      "end": 1779,
      "async": true,
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
              "decorators": [],
              "name": "letCall",
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
        "start": 1735,
        "end": 1757,
        "decorators": [],
        "name": "asyncFuncReturnLetCall",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1780,
      "end": 1839,
      "async": true,
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
              "decorators": [],
              "name": "varCall",
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
        "start": 1795,
        "end": 1817,
        "decorators": [],
        "name": "asyncFuncReturnVarCall",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1885,
      "end": 1950,
      "async": true,
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
              "argument": {
                "type": "Identifier",
                "start": 1938,
                "end": 1947,
                "decorators": [],
                "name": "constCall",
                "optional": false
              },
              "delegate": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 1901,
        "end": 1927,
        "decorators": [],
        "name": "asyncGenFuncYieldConstCall",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1951,
      "end": 2012,
      "async": true,
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
              "argument": {
                "type": "Identifier",
                "start": 2002,
                "end": 2009,
                "decorators": [],
                "name": "letCall",
                "optional": false
              },
              "delegate": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 1967,
        "end": 1991,
        "decorators": [],
        "name": "asyncGenFuncYieldLetCall",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 2013,
      "end": 2074,
      "async": true,
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
              "argument": {
                "type": "Identifier",
                "start": 2064,
                "end": 2071,
                "decorators": [],
                "name": "varCall",
                "optional": false
              },
              "delegate": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 2029,
        "end": 2053,
        "decorators": [],
        "name": "asyncGenFuncYieldVarCall",
        "optional": false
      },
      "params": []
    },
    {
      "type": "ClassDeclaration",
      "start": 2087,
      "end": 2389,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2095,
        "end": 2389,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 2101,
            "end": 2147,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 2117,
              "end": 2135,
              "decorators": [],
              "name": "readonlyStaticCall",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": true,
            "value": {
              "type": "CallExpression",
              "start": 2138,
              "end": 2146,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 2138,
                "end": 2144,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 2152,
            "end": 2202,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 2168,
              "end": 2186,
              "decorators": [],
              "name": "readonlyStaticType",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": true,
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
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 2207,
            "end": 2275,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 2223,
              "end": 2248,
              "decorators": [],
              "name": "readonlyStaticTypeAndCall",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": true,
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
            "value": {
              "type": "CallExpression",
              "start": 2266,
              "end": 2274,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 2266,
                "end": 2272,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 2280,
            "end": 2318,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 2287,
              "end": 2306,
              "decorators": [],
              "name": "readwriteStaticCall",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "CallExpression",
              "start": 2309,
              "end": 2317,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 2309,
                "end": 2315,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 2324,
            "end": 2357,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 2333,
              "end": 2345,
              "decorators": [],
              "name": "readonlyCall",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "value": {
              "type": "CallExpression",
              "start": 2348,
              "end": 2356,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 2348,
                "end": 2354,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 2362,
            "end": 2387,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 2362,
              "end": 2375,
              "decorators": [],
              "name": "readwriteCall",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "CallExpression",
              "start": 2378,
              "end": 2386,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 2378,
                "end": 2384,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2093,
        "end": 2094,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2404,
            "end": 2408,
            "decorators": [],
            "name": "c",
            "optional": false,
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
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2417,
            "end": 2447,
            "decorators": [],
            "name": "constInitToCReadonlyStaticCall",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 2450,
            "end": 2470,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2450,
              "end": 2451,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2452,
              "end": 2470,
              "decorators": [],
              "name": "readonlyStaticCall",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2478,
            "end": 2508,
            "decorators": [],
            "name": "constInitToCReadonlyStaticType",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 2511,
            "end": 2531,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2511,
              "end": 2512,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2513,
              "end": 2531,
              "decorators": [],
              "name": "readonlyStaticType",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2539,
            "end": 2576,
            "decorators": [],
            "name": "constInitToCReadonlyStaticTypeAndCall",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 2579,
            "end": 2606,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2579,
              "end": 2580,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2581,
              "end": 2606,
              "decorators": [],
              "name": "readonlyStaticTypeAndCall",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2614,
            "end": 2645,
            "decorators": [],
            "name": "constInitToCReadwriteStaticCall",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 2648,
            "end": 2669,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2648,
              "end": 2649,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2650,
              "end": 2669,
              "decorators": [],
              "name": "readwriteStaticCall",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2678,
            "end": 2750,
            "decorators": [],
            "name": "constInitToCReadonlyStaticCallWithTypeQuery",
            "optional": false,
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
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2732,
                    "end": 2750,
                    "decorators": [],
                    "name": "readonlyStaticCall",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 2753,
            "end": 2773,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2753,
              "end": 2754,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2755,
              "end": 2773,
              "decorators": [],
              "name": "readonlyStaticCall",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2781,
            "end": 2853,
            "decorators": [],
            "name": "constInitToCReadonlyStaticTypeWithTypeQuery",
            "optional": false,
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
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2835,
                    "end": 2853,
                    "decorators": [],
                    "name": "readonlyStaticType",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 2856,
            "end": 2876,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2856,
              "end": 2857,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2858,
              "end": 2876,
              "decorators": [],
              "name": "readonlyStaticType",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2884,
            "end": 2970,
            "decorators": [],
            "name": "constInitToCReadonlyStaticTypeAndCallWithTypeQuery",
            "optional": false,
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
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2945,
                    "end": 2970,
                    "decorators": [],
                    "name": "readonlyStaticTypeAndCall",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 2973,
            "end": 3000,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2973,
              "end": 2974,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2975,
              "end": 3000,
              "decorators": [],
              "name": "readonlyStaticTypeAndCall",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3008,
            "end": 3082,
            "decorators": [],
            "name": "constInitToCReadwriteStaticCallWithTypeQuery",
            "optional": false,
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
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 3063,
                    "end": 3082,
                    "decorators": [],
                    "name": "readwriteStaticCall",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 3085,
            "end": 3106,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 3085,
              "end": 3086,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 3087,
              "end": 3106,
              "decorators": [],
              "name": "readwriteStaticCall",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3115,
            "end": 3139,
            "decorators": [],
            "name": "constInitToCReadonlyCall",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 3142,
            "end": 3156,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 3142,
              "end": 3143,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 3144,
              "end": 3156,
              "decorators": [],
              "name": "readonlyCall",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3164,
            "end": 3189,
            "decorators": [],
            "name": "constInitToCReadwriteCall",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 3192,
            "end": 3207,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 3192,
              "end": 3193,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 3194,
              "end": 3207,
              "decorators": [],
              "name": "readwriteCall",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3215,
            "end": 3275,
            "decorators": [],
            "name": "constInitToCReadonlyCallWithTypeQuery",
            "optional": false,
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
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 3263,
                    "end": 3275,
                    "decorators": [],
                    "name": "readonlyCall",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 3278,
            "end": 3292,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 3278,
              "end": 3279,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 3280,
              "end": 3292,
              "decorators": [],
              "name": "readonlyCall",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3300,
            "end": 3362,
            "decorators": [],
            "name": "constInitToCReadwriteCallWithTypeQuery",
            "optional": false,
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
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 3349,
                    "end": 3362,
                    "decorators": [],
                    "name": "readwriteCall",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 3365,
            "end": 3380,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 3365,
              "end": 3366,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 3367,
              "end": 3380,
              "decorators": [],
              "name": "readwriteCall",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3388,
            "end": 3448,
            "decorators": [],
            "name": "constInitToCReadonlyCallWithIndexedAccess",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3429,
              "end": 3448,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 3431,
                "end": 3448,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 3433,
                  "end": 3447,
                  "literal": {
                    "type": "Literal",
                    "start": 3433,
                    "end": 3447,
                    "raw": "\"readonlyCall\"",
                    "value": "readonlyCall"
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 3431,
                  "end": 3432,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3431,
                    "end": 3432,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 3451,
            "end": 3465,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 3451,
              "end": 3452,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 3453,
              "end": 3465,
              "decorators": [],
              "name": "readonlyCall",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3473,
            "end": 3535,
            "decorators": [],
            "name": "constInitToCReadwriteCallWithIndexedAccess",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3515,
              "end": 3535,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 3517,
                "end": 3535,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 3519,
                  "end": 3534,
                  "literal": {
                    "type": "Literal",
                    "start": 3519,
                    "end": 3534,
                    "raw": "\"readwriteCall\"",
                    "value": "readwriteCall"
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 3517,
                  "end": 3518,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3517,
                    "end": 3518,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 3538,
            "end": 3553,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 3538,
              "end": 3539,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 3540,
              "end": 3553,
              "decorators": [],
              "name": "readwriteCall",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 3570,
      "end": 3627,
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
            "key": {
              "type": "Identifier",
              "start": 3597,
              "end": 3609,
              "decorators": [],
              "name": "readonlyType",
              "optional": false
            },
            "optional": false,
            "readonly": true,
            "static": false,
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
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 3580,
        "end": 3581,
        "decorators": [],
        "name": "I",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3642,
            "end": 3646,
            "decorators": [],
            "name": "i",
            "optional": false,
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
                  "decorators": [],
                  "name": "I",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3655,
            "end": 3679,
            "decorators": [],
            "name": "constInitToIReadonlyType",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 3682,
            "end": 3696,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 3682,
              "end": 3683,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 3684,
              "end": 3696,
              "decorators": [],
              "name": "readonlyType",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3704,
            "end": 3764,
            "decorators": [],
            "name": "constInitToIReadonlyTypeWithTypeQuery",
            "optional": false,
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
                    "decorators": [],
                    "name": "i",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 3752,
                    "end": 3764,
                    "decorators": [],
                    "name": "readonlyType",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 3767,
            "end": 3781,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 3767,
              "end": 3768,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 3769,
              "end": 3781,
              "decorators": [],
              "name": "readonlyType",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3789,
            "end": 3849,
            "decorators": [],
            "name": "constInitToIReadonlyTypeWithIndexedAccess",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3830,
              "end": 3849,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 3832,
                "end": 3849,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 3834,
                  "end": 3848,
                  "literal": {
                    "type": "Literal",
                    "start": 3834,
                    "end": 3848,
                    "raw": "\"readonlyType\"",
                    "value": "readonlyType"
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 3832,
                  "end": 3833,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3832,
                    "end": 3833,
                    "decorators": [],
                    "name": "I",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 3852,
            "end": 3866,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 3852,
              "end": 3853,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 3854,
              "end": 3866,
              "decorators": [],
              "name": "readonlyType",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3886,
      "end": 4013,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3891,
        "end": 3892,
        "decorators": [],
        "name": "L",
        "optional": false
      },
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
            "key": {
              "type": "Identifier",
              "start": 3910,
              "end": 3922,
              "decorators": [],
              "name": "readonlyType",
              "optional": false
            },
            "optional": false,
            "readonly": true,
            "static": false,
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
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 3943,
            "end": 4010,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3943,
              "end": 3949,
              "decorators": [],
              "name": "nested",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                    "key": {
                      "type": "Identifier",
                      "start": 3970,
                      "end": 3988,
                      "decorators": [],
                      "name": "readonlyNestedType",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": true,
                    "static": false,
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
                    }
                  }
                ]
              }
            }
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4028,
            "end": 4032,
            "decorators": [],
            "name": "l",
            "optional": false,
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
                  "decorators": [],
                  "name": "L",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4041,
            "end": 4065,
            "decorators": [],
            "name": "constInitToLReadonlyType",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 4068,
            "end": 4082,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 4068,
              "end": 4069,
              "decorators": [],
              "name": "l",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 4070,
              "end": 4082,
              "decorators": [],
              "name": "readonlyType",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4090,
            "end": 4120,
            "decorators": [],
            "name": "constInitToLReadonlyNestedType",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 4123,
            "end": 4150,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 4123,
              "end": 4131,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4123,
                "end": 4124,
                "decorators": [],
                "name": "l",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4125,
                "end": 4131,
                "decorators": [],
                "name": "nested",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 4132,
              "end": 4150,
              "decorators": [],
              "name": "readonlyNestedType",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4158,
            "end": 4218,
            "decorators": [],
            "name": "constInitToLReadonlyTypeWithTypeQuery",
            "optional": false,
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
                    "decorators": [],
                    "name": "l",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 4206,
                    "end": 4218,
                    "decorators": [],
                    "name": "readonlyType",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 4221,
            "end": 4235,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 4221,
              "end": 4222,
              "decorators": [],
              "name": "l",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 4223,
              "end": 4235,
              "decorators": [],
              "name": "readonlyType",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4243,
            "end": 4322,
            "decorators": [],
            "name": "constInitToLReadonlyNestedTypeWithTypeQuery",
            "optional": false,
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
                      "decorators": [],
                      "name": "l",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 4297,
                      "end": 4303,
                      "decorators": [],
                      "name": "nested",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 4304,
                    "end": 4322,
                    "decorators": [],
                    "name": "readonlyNestedType",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 4325,
            "end": 4352,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 4325,
              "end": 4333,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4325,
                "end": 4326,
                "decorators": [],
                "name": "l",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4327,
                "end": 4333,
                "decorators": [],
                "name": "nested",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 4334,
              "end": 4352,
              "decorators": [],
              "name": "readonlyNestedType",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4360,
            "end": 4420,
            "decorators": [],
            "name": "constInitToLReadonlyTypeWithIndexedAccess",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4401,
              "end": 4420,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 4403,
                "end": 4420,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 4405,
                  "end": 4419,
                  "literal": {
                    "type": "Literal",
                    "start": 4405,
                    "end": 4419,
                    "raw": "\"readonlyType\"",
                    "value": "readonlyType"
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 4403,
                  "end": 4404,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4403,
                    "end": 4404,
                    "decorators": [],
                    "name": "L",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 4423,
            "end": 4437,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 4423,
              "end": 4424,
              "decorators": [],
              "name": "l",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 4425,
              "end": 4437,
              "decorators": [],
              "name": "readonlyType",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4445,
            "end": 4527,
            "decorators": [],
            "name": "constInitToLReadonlyNestedTypeWithIndexedAccess",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4492,
              "end": 4527,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 4494,
                "end": 4527,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 4506,
                  "end": 4526,
                  "literal": {
                    "type": "Literal",
                    "start": 4506,
                    "end": 4526,
                    "raw": "\"readonlyNestedType\"",
                    "value": "readonlyNestedType"
                  }
                },
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "start": 4494,
                  "end": 4505,
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 4496,
                    "end": 4504,
                    "literal": {
                      "type": "Literal",
                      "start": 4496,
                      "end": 4504,
                      "raw": "\"nested\"",
                      "value": "nested"
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 4494,
                    "end": 4495,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4494,
                      "end": 4495,
                      "decorators": [],
                      "name": "L",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 4530,
            "end": 4557,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 4530,
              "end": 4538,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4530,
                "end": 4531,
                "decorators": [],
                "name": "l",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4532,
                "end": 4538,
                "decorators": [],
                "name": "nested",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 4539,
              "end": 4557,
              "decorators": [],
              "name": "readonlyNestedType",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4593,
            "end": 4612,
            "decorators": [],
            "name": "promiseForConstCall",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4615,
            "end": 4641,
            "arguments": [
              {
                "type": "Identifier",
                "start": 4631,
                "end": 4640,
                "decorators": [],
                "name": "constCall",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 4615,
              "end": 4630,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4615,
                "end": 4622,
                "decorators": [],
                "name": "Promise",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4623,
                "end": 4630,
                "decorators": [],
                "name": "resolve",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4649,
            "end": 4665,
            "decorators": [],
            "name": "arrayOfConstCall",
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
                "decorators": [],
                "name": "constCall",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4737,
            "end": 4753,
            "decorators": [],
            "name": "s",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 4755,
      "end": 4802,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 4783,
                  "end": 4799,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
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
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 4773,
        "end": 4774,
        "decorators": [],
        "name": "N",
        "optional": false
      },
      "kind": "namespace"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4817,
            "end": 4844,
            "decorators": [],
            "name": "o",
            "optional": false,
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
                    "key": {
                      "type": "Identifier",
                      "start": 4823,
                      "end": 4824,
                      "decorators": [],
                      "name": "s",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
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
                          "raw": "\"a\"",
                          "value": "a"
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 4832,
                    "end": 4842,
                    "computed": true,
                    "key": {
                      "type": "MemberExpression",
                      "start": 4833,
                      "end": 4836,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 4833,
                        "end": 4834,
                        "decorators": [],
                        "name": "N",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 4835,
                        "end": 4836,
                        "decorators": [],
                        "name": "s",
                        "optional": false
                      }
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
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
                          "raw": "\"b\"",
                          "value": "b"
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 4846,
      "end": 4877,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 4863,
        "end": 4864,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4868,
          "end": 4872,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
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
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4864,
        "end": 4867,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4865,
            "end": 4866,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4865,
              "end": 4866,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 4878,
      "end": 4916,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 4895,
        "end": 4896,
        "decorators": [],
        "name": "g",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4897,
          "end": 4908,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "s",
                "optional": false
              }
            }
          }
        }
      ],
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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 4934,
        "end": 4935,
        "decorators": [],
        "name": "g",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4936,
          "end": 4949,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                  "decorators": [],
                  "name": "N",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 4948,
                  "end": 4949,
                  "decorators": [],
                  "name": "s",
                  "optional": false
                }
              }
            }
          }
        }
      ],
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
        "arguments": [
          {
            "type": "Identifier",
            "start": 5006,
            "end": 5007,
            "decorators": [],
            "name": "s",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 5004,
          "end": 5005,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 5010,
      "end": 5017,
      "expression": {
        "type": "CallExpression",
        "start": 5010,
        "end": 5016,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 5012,
            "end": 5015,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 5012,
              "end": 5013,
              "decorators": [],
              "name": "N",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 5014,
              "end": 5015,
              "decorators": [],
              "name": "s",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 5010,
          "end": 5011,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 5018,
      "end": 5028,
      "expression": {
        "type": "CallExpression",
        "start": 5018,
        "end": 5027,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 5020,
            "end": 5026,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 5020,
              "end": 5021,
              "decorators": [],
              "name": "N",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 5022,
              "end": 5025,
              "raw": "\"s\"",
              "value": "s"
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 5018,
          "end": 5019,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
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
            "decorators": [],
            "name": "s",
            "optional": false
          }
        ]
      }
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
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 5062,
              "end": 5063,
              "decorators": [],
              "name": "N",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 5064,
              "end": 5065,
              "decorators": [],
              "name": "s",
              "optional": false
            }
          }
        ]
      }
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
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 5069,
              "end": 5070,
              "decorators": [],
              "name": "N",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 5071,
              "end": 5074,
              "raw": "\"s\"",
              "value": "s"
            }
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5117,
            "end": 5119,
            "decorators": [],
            "name": "o2",
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 5128,
                  "end": 5129,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 5131,
                  "end": 5132,
                  "decorators": [],
                  "name": "s",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 5138,
                "end": 5144,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 5138,
                  "end": 5139,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "MemberExpression",
                  "start": 5141,
                  "end": 5144,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 5141,
                    "end": 5142,
                    "decorators": [],
                    "name": "N",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 5143,
                    "end": 5144,
                    "decorators": [],
                    "name": "s",
                    "optional": false
                  }
                }
              },
              {
                "type": "Property",
                "start": 5150,
                "end": 5159,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 5150,
                  "end": 5151,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "MemberExpression",
                  "start": 5153,
                  "end": 5159,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 5153,
                    "end": 5154,
                    "decorators": [],
                    "name": "N",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 5155,
                    "end": 5158,
                    "raw": "\"s\"",
                    "value": "s"
                  }
                }
              },
              {
                "type": "Property",
                "start": 5166,
                "end": 5189,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 5166,
                  "end": 5173,
                  "decorators": [],
                  "name": "method1",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 5173,
                  "end": 5189,
                  "async": false,
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
                          "decorators": [],
                          "name": "s",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              },
              {
                "type": "Property",
                "start": 5195,
                "end": 5224,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 5201,
                  "end": 5208,
                  "decorators": [],
                  "name": "method2",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 5208,
                  "end": 5224,
                  "async": true,
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
                          "decorators": [],
                          "name": "s",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              },
              {
                "type": "Property",
                "start": 5230,
                "end": 5260,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 5238,
                  "end": 5245,
                  "decorators": [],
                  "name": "method3",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 5245,
                  "end": 5260,
                  "async": true,
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
                          "argument": {
                            "type": "Identifier",
                            "start": 5256,
                            "end": 5257,
                            "decorators": [],
                            "name": "s",
                            "optional": false
                          },
                          "delegate": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": []
                }
              },
              {
                "type": "Property",
                "start": 5266,
                "end": 5290,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 5268,
                  "end": 5275,
                  "decorators": [],
                  "name": "method4",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 5275,
                  "end": 5290,
                  "async": false,
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
                          "argument": {
                            "type": "Identifier",
                            "start": 5286,
                            "end": 5287,
                            "decorators": [],
                            "name": "s",
                            "optional": false
                          },
                          "delegate": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": []
                }
              },
              {
                "type": "Property",
                "start": 5296,
                "end": 5324,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 5296,
                  "end": 5303,
                  "decorators": [],
                  "name": "method5",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 5303,
                  "end": 5324,
                  "async": false,
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
                          "decorators": [],
                          "name": "p",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "start": 5304,
                      "end": 5309,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 5304,
                        "end": 5305,
                        "decorators": [],
                        "name": "p",
                        "optional": false
                      },
                      "optional": false,
                      "right": {
                        "type": "Identifier",
                        "start": 5308,
                        "end": 5309,
                        "decorators": [],
                        "name": "s",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 5354,
      "end": 5785,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 5363,
        "end": 5785,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 5369,
            "end": 5391,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 5385,
              "end": 5386,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": true,
            "value": {
              "type": "Identifier",
              "start": 5389,
              "end": 5390,
              "decorators": [],
              "name": "s",
              "optional": false
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 5396,
            "end": 5420,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 5412,
              "end": 5413,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": true,
            "value": {
              "type": "MemberExpression",
              "start": 5416,
              "end": 5419,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 5416,
                "end": 5417,
                "decorators": [],
                "name": "N",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 5418,
                "end": 5419,
                "decorators": [],
                "name": "s",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 5425,
            "end": 5452,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 5441,
              "end": 5442,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": true,
            "value": {
              "type": "MemberExpression",
              "start": 5445,
              "end": 5451,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 5445,
                "end": 5446,
                "decorators": [],
                "name": "N",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 5447,
                "end": 5450,
                "raw": "\"s\"",
                "value": "s"
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 5458,
            "end": 5471,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 5465,
              "end": 5466,
              "decorators": [],
              "name": "d",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Identifier",
              "start": 5469,
              "end": 5470,
              "decorators": [],
              "name": "s",
              "optional": false
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 5476,
            "end": 5491,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 5483,
              "end": 5484,
              "decorators": [],
              "name": "e",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "MemberExpression",
              "start": 5487,
              "end": 5490,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 5487,
                "end": 5488,
                "decorators": [],
                "name": "N",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 5489,
                "end": 5490,
                "decorators": [],
                "name": "s",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 5496,
            "end": 5514,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 5503,
              "end": 5504,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "MemberExpression",
              "start": 5507,
              "end": 5513,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 5507,
                "end": 5508,
                "decorators": [],
                "name": "N",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 5509,
                "end": 5512,
                "raw": "\"s\"",
                "value": "s"
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 5520,
            "end": 5535,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 5529,
              "end": 5530,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "value": {
              "type": "Identifier",
              "start": 5533,
              "end": 5534,
              "decorators": [],
              "name": "s",
              "optional": false
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 5540,
            "end": 5557,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 5549,
              "end": 5550,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 5553,
              "end": 5556,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 5553,
                "end": 5554,
                "decorators": [],
                "name": "N",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 5555,
                "end": 5556,
                "decorators": [],
                "name": "s",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 5562,
            "end": 5582,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 5571,
              "end": 5572,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 5575,
              "end": 5581,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 5575,
                "end": 5576,
                "decorators": [],
                "name": "N",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 5577,
                "end": 5580,
                "raw": "\"s\"",
                "value": "s"
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 5588,
            "end": 5594,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 5588,
              "end": 5589,
              "decorators": [],
              "name": "d",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Identifier",
              "start": 5592,
              "end": 5593,
              "decorators": [],
              "name": "s",
              "optional": false
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 5599,
            "end": 5607,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 5599,
              "end": 5600,
              "decorators": [],
              "name": "e",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 5603,
              "end": 5606,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 5603,
                "end": 5604,
                "decorators": [],
                "name": "N",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 5605,
                "end": 5606,
                "decorators": [],
                "name": "s",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 5612,
            "end": 5623,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 5612,
              "end": 5613,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 5616,
              "end": 5622,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 5616,
                "end": 5617,
                "decorators": [],
                "name": "N",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 5618,
                "end": 5621,
                "raw": "\"s\"",
                "value": "s"
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 5629,
            "end": 5652,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 5629,
              "end": 5636,
              "decorators": [],
              "name": "method1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 5636,
              "end": 5652,
              "async": false,
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
                      "decorators": [],
                      "name": "s",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 5657,
            "end": 5686,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 5663,
              "end": 5670,
              "decorators": [],
              "name": "method2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 5670,
              "end": 5686,
              "async": true,
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
                      "decorators": [],
                      "name": "s",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 5691,
            "end": 5721,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 5699,
              "end": 5706,
              "decorators": [],
              "name": "method3",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 5706,
              "end": 5721,
              "async": true,
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
                      "argument": {
                        "type": "Identifier",
                        "start": 5717,
                        "end": 5718,
                        "decorators": [],
                        "name": "s",
                        "optional": false
                      },
                      "delegate": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": true,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 5726,
            "end": 5750,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 5728,
              "end": 5735,
              "decorators": [],
              "name": "method4",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 5735,
              "end": 5750,
              "async": false,
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
                      "argument": {
                        "type": "Identifier",
                        "start": 5746,
                        "end": 5747,
                        "decorators": [],
                        "name": "s",
                        "optional": false
                      },
                      "delegate": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": true,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 5755,
            "end": 5783,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 5755,
              "end": 5762,
              "decorators": [],
              "name": "method5",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 5762,
              "end": 5783,
              "async": false,
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
                      "decorators": [],
                      "name": "p",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 5763,
                  "end": 5768,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 5763,
                    "end": 5764,
                    "decorators": [],
                    "name": "p",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Identifier",
                    "start": 5767,
                    "end": 5768,
                    "decorators": [],
                    "name": "s",
                    "optional": false
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 5360,
        "end": 5362,
        "decorators": [],
        "name": "C0",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExpressionStatement",
      "start": 5832,
      "end": 5837,
      "expression": {
        "type": "MemberExpression",
        "start": 5832,
        "end": 5836,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 5832,
          "end": 5833,
          "decorators": [],
          "name": "o",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 5834,
          "end": 5835,
          "decorators": [],
          "name": "s",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 5838,
      "end": 5845,
      "expression": {
        "type": "MemberExpression",
        "start": 5838,
        "end": 5844,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 5838,
          "end": 5839,
          "decorators": [],
          "name": "o",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "MemberExpression",
          "start": 5840,
          "end": 5843,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 5840,
            "end": 5841,
            "decorators": [],
            "name": "N",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 5842,
            "end": 5843,
            "decorators": [],
            "name": "s",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 5846,
      "end": 5856,
      "expression": {
        "type": "MemberExpression",
        "start": 5846,
        "end": 5855,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 5846,
          "end": 5847,
          "decorators": [],
          "name": "o",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "MemberExpression",
          "start": 5848,
          "end": 5854,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 5848,
            "end": 5849,
            "decorators": [],
            "name": "N",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 5850,
            "end": 5853,
            "raw": "\"s\"",
            "value": "s"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 5886,
      "end": 5901,
      "expression": {
        "type": "CallExpression",
        "start": 5886,
        "end": 5900,
        "arguments": [
          {
            "type": "Identifier",
            "start": 5898,
            "end": 5899,
            "decorators": [],
            "name": "s",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 5886,
          "end": 5887,
          "decorators": [],
          "name": "f",
          "optional": false
        },
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
                "decorators": [],
                "name": "s",
                "optional": false
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 5902,
      "end": 5921,
      "expression": {
        "type": "CallExpression",
        "start": 5902,
        "end": 5920,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 5916,
            "end": 5919,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 5916,
              "end": 5917,
              "decorators": [],
              "name": "N",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 5918,
              "end": 5919,
              "decorators": [],
              "name": "s",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 5902,
          "end": 5903,
          "decorators": [],
          "name": "f",
          "optional": false
        },
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
                  "decorators": [],
                  "name": "N",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 5913,
                  "end": 5914,
                  "decorators": [],
                  "name": "s",
                  "optional": false
                }
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 5922,
      "end": 5944,
      "expression": {
        "type": "CallExpression",
        "start": 5922,
        "end": 5943,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 5936,
            "end": 5942,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 5936,
              "end": 5937,
              "decorators": [],
              "name": "N",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 5938,
              "end": 5941,
              "raw": "\"s\"",
              "value": "s"
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 5922,
          "end": 5923,
          "decorators": [],
          "name": "f",
          "optional": false
        },
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
                  "decorators": [],
                  "name": "N",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 5933,
                  "end": 5934,
                  "decorators": [],
                  "name": "s",
                  "optional": false
                }
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 5945,
      "end": 5950,
      "expression": {
        "type": "CallExpression",
        "start": 5945,
        "end": 5949,
        "arguments": [
          {
            "type": "Identifier",
            "start": 5947,
            "end": 5948,
            "decorators": [],
            "name": "s",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 5945,
          "end": 5946,
          "decorators": [],
          "name": "g",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 5951,
      "end": 5958,
      "expression": {
        "type": "CallExpression",
        "start": 5951,
        "end": 5957,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 5953,
            "end": 5956,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 5953,
              "end": 5954,
              "decorators": [],
              "name": "N",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 5955,
              "end": 5956,
              "decorators": [],
              "name": "s",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 5951,
          "end": 5952,
          "decorators": [],
          "name": "g",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 5959,
      "end": 5969,
      "expression": {
        "type": "CallExpression",
        "start": 5959,
        "end": 5968,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 5961,
            "end": 5967,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 5961,
              "end": 5962,
              "decorators": [],
              "name": "N",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 5963,
              "end": 5966,
              "raw": "\"s\"",
              "value": "s"
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 5959,
          "end": 5960,
          "decorators": [],
          "name": "g",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 5992,
      "end": 6000,
      "expression": {
        "type": "LogicalExpression",
        "start": 5992,
        "end": 5999,
        "operator": "||",
        "left": {
          "type": "Identifier",
          "start": 5992,
          "end": 5993,
          "decorators": [],
          "name": "s",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 5997,
          "end": 5999,
          "raw": "\"\"",
          "value": ""
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 6001,
      "end": 6011,
      "expression": {
        "type": "LogicalExpression",
        "start": 6001,
        "end": 6010,
        "operator": "||",
        "left": {
          "type": "MemberExpression",
          "start": 6001,
          "end": 6004,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 6001,
            "end": 6002,
            "decorators": [],
            "name": "N",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 6003,
            "end": 6004,
            "decorators": [],
            "name": "s",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 6008,
          "end": 6010,
          "raw": "\"\"",
          "value": ""
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 6012,
      "end": 6025,
      "expression": {
        "type": "LogicalExpression",
        "start": 6012,
        "end": 6024,
        "operator": "||",
        "left": {
          "type": "MemberExpression",
          "start": 6012,
          "end": 6018,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 6012,
            "end": 6013,
            "decorators": [],
            "name": "N",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 6014,
            "end": 6017,
            "raw": "\"s\"",
            "value": "s"
          }
        },
        "right": {
          "type": "Literal",
          "start": 6022,
          "end": 6024,
          "raw": "\"\"",
          "value": ""
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 6043,
      "end": 6071,
      "expression": {
        "type": "ConditionalExpression",
        "start": 6043,
        "end": 6070,
        "alternate": {
          "type": "Literal",
          "start": 6067,
          "end": 6070,
          "raw": "\"a\"",
          "value": "a"
        },
        "consequent": {
          "type": "Identifier",
          "start": 6063,
          "end": 6064,
          "decorators": [],
          "name": "s",
          "optional": false
        },
        "test": {
          "type": "BinaryExpression",
          "start": 6043,
          "end": 6060,
          "operator": "*",
          "left": {
            "type": "CallExpression",
            "start": 6043,
            "end": 6056,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 6043,
              "end": 6054,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 6043,
                "end": 6047,
                "decorators": [],
                "name": "Math",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 6048,
                "end": 6054,
                "decorators": [],
                "name": "random",
                "optional": false
              }
            },
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 6059,
            "end": 6060,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 6072,
      "end": 6102,
      "expression": {
        "type": "ConditionalExpression",
        "start": 6072,
        "end": 6101,
        "alternate": {
          "type": "Literal",
          "start": 6098,
          "end": 6101,
          "raw": "\"a\"",
          "value": "a"
        },
        "consequent": {
          "type": "MemberExpression",
          "start": 6092,
          "end": 6095,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 6092,
            "end": 6093,
            "decorators": [],
            "name": "N",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 6094,
            "end": 6095,
            "decorators": [],
            "name": "s",
            "optional": false
          }
        },
        "test": {
          "type": "BinaryExpression",
          "start": 6072,
          "end": 6089,
          "operator": "*",
          "left": {
            "type": "CallExpression",
            "start": 6072,
            "end": 6085,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 6072,
              "end": 6083,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 6072,
                "end": 6076,
                "decorators": [],
                "name": "Math",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 6077,
                "end": 6083,
                "decorators": [],
                "name": "random",
                "optional": false
              }
            },
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 6088,
            "end": 6089,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 6103,
      "end": 6136,
      "expression": {
        "type": "ConditionalExpression",
        "start": 6103,
        "end": 6135,
        "alternate": {
          "type": "Literal",
          "start": 6132,
          "end": 6135,
          "raw": "\"a\"",
          "value": "a"
        },
        "consequent": {
          "type": "MemberExpression",
          "start": 6123,
          "end": 6129,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 6123,
            "end": 6124,
            "decorators": [],
            "name": "N",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 6125,
            "end": 6128,
            "raw": "\"s\"",
            "value": "s"
          }
        },
        "test": {
          "type": "BinaryExpression",
          "start": 6103,
          "end": 6120,
          "operator": "*",
          "left": {
            "type": "CallExpression",
            "start": 6103,
            "end": 6116,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 6103,
              "end": 6114,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 6103,
                "end": 6107,
                "decorators": [],
                "name": "Math",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 6108,
                "end": 6114,
                "decorators": [],
                "name": "random",
                "optional": false
              }
            },
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 6119,
            "end": 6120,
            "raw": "2",
            "value": 2
          }
        }
      }
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
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 6173,
              "end": 6174,
              "decorators": [],
              "name": "s",
              "optional": false
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "Literal",
              "start": 6177,
              "end": 6180,
              "raw": "\"a\"",
              "value": "a"
            }
          },
          {
            "type": "Property",
            "start": 6186,
            "end": 6196,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 6187,
              "end": 6190,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 6187,
                "end": 6188,
                "decorators": [],
                "name": "N",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 6189,
                "end": 6190,
                "decorators": [],
                "name": "s",
                "optional": false
              }
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "Literal",
              "start": 6193,
              "end": 6196,
              "raw": "\"b\"",
              "value": "b"
            }
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 6203,
      "end": 6290,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 6212,
        "end": 6290,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 6218,
            "end": 6234,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 6226,
              "end": 6227,
              "decorators": [],
              "name": "s",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
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
                  "raw": "\"a\"",
                  "value": "a"
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 6239,
            "end": 6257,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "start": 6247,
              "end": 6250,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 6247,
                "end": 6248,
                "decorators": [],
                "name": "N",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 6249,
                "end": 6250,
                "decorators": [],
                "name": "s",
                "optional": false
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
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
                  "raw": "\"b\"",
                  "value": "b"
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 6263,
            "end": 6272,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 6264,
              "end": 6265,
              "decorators": [],
              "name": "s",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
                  "raw": "\"a\"",
                  "value": "a"
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 6277,
            "end": 6288,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "start": 6278,
              "end": 6281,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 6278,
                "end": 6279,
                "decorators": [],
                "name": "N",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 6280,
                "end": 6281,
                "decorators": [],
                "name": "s",
                "optional": false
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
                  "raw": "\"b\"",
                  "value": "b"
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6209,
        "end": 6211,
        "decorators": [],
        "name": "C1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 6313,
      "end": 6521,
      "body": {
        "type": "TSInterfaceBody",
        "start": 6331,
        "end": 6521,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 6337,
            "end": 6357,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 6337,
              "end": 6344,
              "decorators": [],
              "name": "method1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
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
                  "decorators": [],
                  "name": "s",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 6362,
            "end": 6391,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 6362,
              "end": 6369,
              "decorators": [],
              "name": "method2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 6371,
              "end": 6390,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 6373,
                "end": 6390,
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
                        "decorators": [],
                        "name": "s",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 6373,
                  "end": 6380,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 6396,
            "end": 6439,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 6396,
              "end": 6403,
              "decorators": [],
              "name": "method3",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 6405,
              "end": 6438,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 6407,
                "end": 6438,
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
                        "decorators": [],
                        "name": "s",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 6407,
                  "end": 6428,
                  "decorators": [],
                  "name": "AsyncIterableIterator",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 6444,
            "end": 6482,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 6444,
              "end": 6451,
              "decorators": [],
              "name": "method4",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 6453,
              "end": 6481,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 6455,
                "end": 6481,
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
                        "decorators": [],
                        "name": "s",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 6455,
                  "end": 6471,
                  "decorators": [],
                  "name": "IterableIterator",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 6487,
            "end": 6519,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 6487,
              "end": 6494,
              "decorators": [],
              "name": "method5",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 6495,
                "end": 6507,
                "decorators": [],
                "name": "p",
                "optional": true,
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
                      "decorators": [],
                      "name": "s",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
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
                  "decorators": [],
                  "name": "s",
                  "optional": false
                }
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 6323,
        "end": 6330,
        "decorators": [],
        "name": "Context",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6529,
            "end": 6540,
            "decorators": [],
            "name": "o4",
            "optional": false,
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
                  "decorators": [],
                  "name": "Context",
                  "optional": false
                }
              }
            }
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 6549,
                  "end": 6556,
                  "decorators": [],
                  "name": "method1",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 6556,
                  "end": 6639,
                  "async": false,
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
                          "decorators": [],
                          "name": "s",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              },
              {
                "type": "Property",
                "start": 6645,
                "end": 6741,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 6651,
                  "end": 6658,
                  "decorators": [],
                  "name": "method2",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 6658,
                  "end": 6741,
                  "async": true,
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
                          "decorators": [],
                          "name": "s",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              },
              {
                "type": "Property",
                "start": 6747,
                "end": 6843,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 6755,
                  "end": 6762,
                  "decorators": [],
                  "name": "method3",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 6762,
                  "end": 6843,
                  "async": true,
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
                          "argument": {
                            "type": "Identifier",
                            "start": 6781,
                            "end": 6782,
                            "decorators": [],
                            "name": "s",
                            "optional": false
                          },
                          "delegate": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": []
                }
              },
              {
                "type": "Property",
                "start": 6849,
                "end": 6939,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 6851,
                  "end": 6858,
                  "decorators": [],
                  "name": "method4",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 6858,
                  "end": 6939,
                  "async": false,
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
                          "argument": {
                            "type": "Identifier",
                            "start": 6877,
                            "end": 6878,
                            "decorators": [],
                            "name": "s",
                            "optional": false
                          },
                          "delegate": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": []
                }
              },
              {
                "type": "Property",
                "start": 6945,
                "end": 7038,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 6945,
                  "end": 6952,
                  "decorators": [],
                  "name": "method5",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 6952,
                  "end": 7038,
                  "async": false,
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
                          "decorators": [],
                          "name": "p",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "start": 6953,
                      "end": 6958,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 6953,
                        "end": 6954,
                        "decorators": [],
                        "name": "p",
                        "optional": false
                      },
                      "optional": false,
                      "right": {
                        "type": "Identifier",
                        "start": 6957,
                        "end": 6958,
                        "decorators": [],
                        "name": "s",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
