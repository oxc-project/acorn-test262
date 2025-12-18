__ESTREE_TEST__:AST:
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
            "name": "iterableIterator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IterableIterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 32,
                  "end": 48
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 49,
                      "end": 55
                    }
                  ],
                  "start": 48,
                  "end": 56
                },
                "start": 32,
                "end": 56
              },
              "start": 30,
              "end": 56
            },
            "start": 14,
            "end": 56
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 56
        }
      ],
      "declare": true,
      "start": 0,
      "end": 57
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
            "name": "generator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Generator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 83,
                  "end": 92
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 93,
                      "end": 99
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 101,
                      "end": 107
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 109,
                      "end": 116
                    }
                  ],
                  "start": 92,
                  "end": 117
                },
                "start": 83,
                "end": 117
              },
              "start": 81,
              "end": 117
            },
            "start": 72,
            "end": 117
          },
          "init": null,
          "definite": false,
          "start": 72,
          "end": 117
        }
      ],
      "declare": true,
      "start": 58,
      "end": 118
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
            "name": "never",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNeverKeyword",
                "start": 140,
                "end": 145
              },
              "start": 138,
              "end": 145
            },
            "start": 133,
            "end": 145
          },
          "init": null,
          "definite": false,
          "start": 133,
          "end": 145
        }
      ],
      "declare": true,
      "start": 119,
      "end": 146
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g000",
        "optional": false,
        "typeAnnotation": null,
        "start": 158,
        "end": 162
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 165,
        "end": 203
      },
      "expression": false,
      "start": 148,
      "end": 203
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g001",
        "optional": false,
        "typeAnnotation": null,
        "start": 251,
        "end": 255
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
              "argument": null,
              "start": 308,
              "end": 313
            },
            "directive": null,
            "start": 308,
            "end": 314
          }
        ],
        "start": 258,
        "end": 316
      },
      "expression": false,
      "start": 241,
      "end": 316
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g002",
        "optional": false,
        "typeAnnotation": null,
        "start": 328,
        "end": 332
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
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 383,
                "end": 384
              },
              "start": 377,
              "end": 384
            },
            "directive": null,
            "start": 377,
            "end": 385
          }
        ],
        "start": 335,
        "end": 387
      },
      "expression": false,
      "start": 318,
      "end": 387
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g003",
        "optional": false,
        "typeAnnotation": null,
        "start": 399,
        "end": 403
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
              "delegate": true,
              "argument": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 621,
                "end": 623
              },
              "start": 614,
              "end": 623
            },
            "directive": null,
            "start": 614,
            "end": 624
          }
        ],
        "start": 406,
        "end": 626
      },
      "expression": false,
      "start": 389,
      "end": 626
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g004",
        "optional": false,
        "typeAnnotation": null,
        "start": 638,
        "end": 642
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
              "delegate": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterableIterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 696,
                "end": 712
              },
              "start": 689,
              "end": 712
            },
            "directive": null,
            "start": 689,
            "end": 713
          }
        ],
        "start": 645,
        "end": 715
      },
      "expression": false,
      "start": 628,
      "end": 715
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g005",
        "optional": false,
        "typeAnnotation": null,
        "start": 727,
        "end": 731
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
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 782,
                  "end": 783
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": true,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "generator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 793,
                    "end": 802
                  },
                  "start": 786,
                  "end": 802
                },
                "definite": false,
                "start": 782,
                "end": 802
              }
            ],
            "declare": false,
            "start": 776,
            "end": 803
          }
        ],
        "start": 734,
        "end": 805
      },
      "expression": false,
      "start": 717,
      "end": 805
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g006",
        "optional": false,
        "typeAnnotation": null,
        "start": 817,
        "end": 821
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
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 871,
                "end": 872
              },
              "start": 865,
              "end": 872
            },
            "directive": null,
            "start": 865,
            "end": 873
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 884,
                "end": 885
              },
              "start": 878,
              "end": 885
            },
            "directive": null,
            "start": 878,
            "end": 886
          }
        ],
        "start": 824,
        "end": 888
      },
      "expression": false,
      "start": 807,
      "end": 888
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g007",
        "optional": false,
        "typeAnnotation": null,
        "start": 900,
        "end": 904
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
                "name": "never",
                "optional": false,
                "typeAnnotation": null,
                "start": 954,
                "end": 959
              },
              "start": 948,
              "end": 959
            },
            "directive": null,
            "start": 948,
            "end": 960
          }
        ],
        "start": 907,
        "end": 962
      },
      "expression": false,
      "start": 890,
      "end": 962
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g102",
        "optional": false,
        "typeAnnotation": null,
        "start": 1011,
        "end": 1015
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1068,
              "end": 1069
            },
            "start": 1061,
            "end": 1070
          }
        ],
        "start": 1018,
        "end": 1072
      },
      "expression": false,
      "start": 1001,
      "end": 1072
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g103",
        "optional": false,
        "typeAnnotation": null,
        "start": 1084,
        "end": 1088
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
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1137,
                  "end": 1141
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1142,
                  "end": 1148
                },
                "optional": false,
                "computed": false,
                "start": 1137,
                "end": 1148
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1137,
              "end": 1150
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1159,
                "end": 1160
              },
              "start": 1152,
              "end": 1161
            },
            "alternate": null,
            "start": 1133,
            "end": 1161
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 1173,
              "end": 1174
            },
            "start": 1166,
            "end": 1175
          }
        ],
        "start": 1091,
        "end": 1177
      },
      "expression": false,
      "start": 1074,
      "end": 1177
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g104",
        "optional": false,
        "typeAnnotation": null,
        "start": 1189,
        "end": 1193
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "never",
              "optional": false,
              "typeAnnotation": null,
              "start": 1245,
              "end": 1250
            },
            "start": 1238,
            "end": 1251
          }
        ],
        "start": 1196,
        "end": 1253
      },
      "expression": false,
      "start": 1179,
      "end": 1253
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g201",
        "optional": false,
        "typeAnnotation": null,
        "start": 1300,
        "end": 1304
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1355,
                      "end": 1361
                    },
                    "start": 1353,
                    "end": 1361
                  },
                  "start": 1352,
                  "end": 1361
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1370,
                    "end": 1371
                  },
                  "start": 1364,
                  "end": 1371
                },
                "definite": false,
                "start": 1352,
                "end": 1371
              }
            ],
            "declare": false,
            "start": 1348,
            "end": 1372
          }
        ],
        "start": 1307,
        "end": 1374
      },
      "expression": false,
      "start": 1290,
      "end": 1374
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g202",
        "optional": false,
        "typeAnnotation": null,
        "start": 1386,
        "end": 1390
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1439,
                      "end": 1445
                    },
                    "start": 1437,
                    "end": 1445
                  },
                  "start": 1436,
                  "end": 1445
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1454,
                    "end": 1455
                  },
                  "start": 1448,
                  "end": 1455
                },
                "definite": false,
                "start": 1436,
                "end": 1455
              }
            ],
            "declare": false,
            "start": 1432,
            "end": 1456
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1468,
                      "end": 1474
                    },
                    "start": 1466,
                    "end": 1474
                  },
                  "start": 1465,
                  "end": 1474
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1483,
                    "end": 1484
                  },
                  "start": 1477,
                  "end": 1484
                },
                "definite": false,
                "start": 1465,
                "end": 1484
              }
            ],
            "declare": false,
            "start": 1461,
            "end": 1485
          }
        ],
        "start": 1393,
        "end": 1487
      },
      "expression": false,
      "start": 1376,
      "end": 1487
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1506,
        "end": 1508
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
              "type": "TSStringKeyword",
              "start": 1512,
              "end": 1518
            },
            "start": 1510,
            "end": 1518
          },
          "start": 1509,
          "end": 1518
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1521,
          "end": 1525
        },
        "start": 1519,
        "end": 1525
      },
      "body": null,
      "expression": false,
      "start": 1489,
      "end": 1526
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1544,
        "end": 1546
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
              "type": "TSNumberKeyword",
              "start": 1550,
              "end": 1556
            },
            "start": 1548,
            "end": 1556
          },
          "start": 1547,
          "end": 1556
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1559,
          "end": 1563
        },
        "start": 1557,
        "end": 1563
      },
      "body": null,
      "expression": false,
      "start": 1527,
      "end": 1564
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g203",
        "optional": false,
        "typeAnnotation": null,
        "start": 1576,
        "end": 1580
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
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1627,
                  "end": 1628
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1631,
                    "end": 1633
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "YieldExpression",
                      "delegate": false,
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1640,
                        "end": 1641
                      },
                      "start": 1634,
                      "end": 1641
                    }
                  ],
                  "optional": false,
                  "start": 1631,
                  "end": 1642
                },
                "definite": false,
                "start": 1627,
                "end": 1642
              }
            ],
            "declare": false,
            "start": 1621,
            "end": 1643
          }
        ],
        "start": 1583,
        "end": 1645
      },
      "expression": false,
      "start": 1566,
      "end": 1645
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1664,
        "end": 1666
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
              "start": 1667,
              "end": 1668
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1667,
            "end": 1668
          }
        ],
        "start": 1666,
        "end": 1669
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
                "start": 1673,
                "end": 1674
              },
              "typeArguments": null,
              "start": 1673,
              "end": 1674
            },
            "start": 1671,
            "end": 1674
          },
          "start": 1670,
          "end": 1674
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
            "start": 1677,
            "end": 1678
          },
          "typeArguments": null,
          "start": 1677,
          "end": 1678
        },
        "start": 1675,
        "end": 1678
      },
      "body": null,
      "expression": false,
      "start": 1647,
      "end": 1679
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g204",
        "optional": false,
        "typeAnnotation": null,
        "start": 1691,
        "end": 1695
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
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1739,
                  "end": 1740
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1743,
                    "end": 1745
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "YieldExpression",
                      "delegate": false,
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1752,
                        "end": 1753
                      },
                      "start": 1746,
                      "end": 1753
                    }
                  ],
                  "optional": false,
                  "start": 1743,
                  "end": 1754
                },
                "definite": false,
                "start": 1739,
                "end": 1754
              }
            ],
            "declare": false,
            "start": 1733,
            "end": 1755
          }
        ],
        "start": 1698,
        "end": 1757
      },
      "expression": false,
      "start": 1681,
      "end": 1757
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g301",
        "optional": false,
        "typeAnnotation": null,
        "start": 1805,
        "end": 1809
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
              "argument": null,
              "start": 1862,
              "end": 1867
            },
            "directive": null,
            "start": 1862,
            "end": 1868
          },
          {
            "type": "ReturnStatement",
            "argument": null,
            "start": 1873,
            "end": 1880
          }
        ],
        "start": 1812,
        "end": 1882
      },
      "expression": false,
      "start": 1795,
      "end": 1882
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g302",
        "optional": false,
        "typeAnnotation": null,
        "start": 1894,
        "end": 1898
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
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1949,
                "end": 1950
              },
              "start": 1943,
              "end": 1950
            },
            "directive": null,
            "start": 1943,
            "end": 1951
          },
          {
            "type": "ReturnStatement",
            "argument": null,
            "start": 1956,
            "end": 1963
          }
        ],
        "start": 1901,
        "end": 1965
      },
      "expression": false,
      "start": 1884,
      "end": 1965
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g303",
        "optional": false,
        "typeAnnotation": null,
        "start": 1977,
        "end": 1981
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
              "argument": null,
              "start": 2036,
              "end": 2041
            },
            "directive": null,
            "start": 2036,
            "end": 2042
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 2054,
              "end": 2057
            },
            "start": 2047,
            "end": 2058
          }
        ],
        "start": 1984,
        "end": 2060
      },
      "expression": false,
      "start": 1967,
      "end": 2060
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g304",
        "optional": false,
        "typeAnnotation": null,
        "start": 2072,
        "end": 2076
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
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2129,
                "end": 2130
              },
              "start": 2123,
              "end": 2130
            },
            "directive": null,
            "start": 2123,
            "end": 2131
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 2143,
              "end": 2146
            },
            "start": 2136,
            "end": 2147
          }
        ],
        "start": 2079,
        "end": 2149
      },
      "expression": false,
      "start": 2062,
      "end": 2149
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g305",
        "optional": false,
        "typeAnnotation": null,
        "start": 2161,
        "end": 2165
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
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2218,
                  "end": 2222
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2223,
                  "end": 2229
                },
                "optional": false,
                "computed": false,
                "start": 2218,
                "end": 2229
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2218,
              "end": 2231
            },
            "consequent": {
              "type": "ExpressionStatement",
              "expression": {
                "type": "YieldExpression",
                "delegate": false,
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2239,
                  "end": 2240
                },
                "start": 2233,
                "end": 2240
              },
              "directive": null,
              "start": 2233,
              "end": 2241
            },
            "alternate": null,
            "start": 2214,
            "end": 2241
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2252,
                "end": 2253
              },
              "start": 2246,
              "end": 2253
            },
            "directive": null,
            "start": 2246,
            "end": 2254
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2263,
                  "end": 2267
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2268,
                  "end": 2274
                },
                "optional": false,
                "computed": false,
                "start": 2263,
                "end": 2274
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2263,
              "end": 2276
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 2285,
                "end": 2288
              },
              "start": 2278,
              "end": 2289
            },
            "alternate": null,
            "start": 2259,
            "end": 2289
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 2301,
              "end": 2304
            },
            "start": 2294,
            "end": 2305
          }
        ],
        "start": 2168,
        "end": 2307
      },
      "expression": false,
      "start": 2151,
      "end": 2307
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g306",
        "optional": false,
        "typeAnnotation": null,
        "start": 2319,
        "end": 2323
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
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "hi",
                        "raw": "\"hi\"",
                        "start": 2377,
                        "end": 2381
                      },
                      "start": 2377,
                      "end": 2381
                    },
                    "start": 2375,
                    "end": 2381
                  },
                  "start": 2374,
                  "end": 2381
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2390,
                    "end": 2391
                  },
                  "start": 2384,
                  "end": 2391
                },
                "definite": false,
                "start": 2374,
                "end": 2391
              }
            ],
            "declare": false,
            "start": 2368,
            "end": 2392
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 2404,
              "end": 2408
            },
            "start": 2397,
            "end": 2409
          }
        ],
        "start": 2326,
        "end": 2411
      },
      "expression": false,
      "start": 2309,
      "end": 2411
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g307",
        "optional": false,
        "typeAnnotation": null,
        "start": 2423,
        "end": 2427
      },
      "generator": true,
      "async": false,
      "declare": false,
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
              "start": 2428,
              "end": 2429
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2428,
            "end": 2429
          }
        ],
        "start": 2427,
        "end": 2430
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "a",
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
                        "start": 2475,
                        "end": 2476
                      },
                      "typeArguments": null,
                      "start": 2475,
                      "end": 2476
                    },
                    "start": 2473,
                    "end": 2476
                  },
                  "start": 2472,
                  "end": 2476
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 2485,
                    "end": 2486
                  },
                  "start": 2479,
                  "end": 2486
                },
                "definite": false,
                "start": 2472,
                "end": 2486
              }
            ],
            "declare": false,
            "start": 2466,
            "end": 2487
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 2499,
              "end": 2500
            },
            "start": 2492,
            "end": 2501
          }
        ],
        "start": 2433,
        "end": 2503
      },
      "expression": false,
      "start": 2413,
      "end": 2503
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g308",
        "optional": false,
        "typeAnnotation": null,
        "start": 2515,
        "end": 2519
      },
      "generator": true,
      "async": false,
      "declare": false,
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
              "start": 2520,
              "end": 2521
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2520,
            "end": 2521
          }
        ],
        "start": 2519,
        "end": 2522
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
                "start": 2526,
                "end": 2527
              },
              "typeArguments": null,
              "start": 2526,
              "end": 2527
            },
            "start": 2524,
            "end": 2527
          },
          "start": 2523,
          "end": 2527
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "a",
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
                        "start": 2566,
                        "end": 2567
                      },
                      "typeArguments": null,
                      "start": 2566,
                      "end": 2567
                    },
                    "start": 2564,
                    "end": 2567
                  },
                  "start": 2563,
                  "end": 2567
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2576,
                    "end": 2577
                  },
                  "start": 2570,
                  "end": 2577
                },
                "definite": false,
                "start": 2563,
                "end": 2577
              }
            ],
            "declare": false,
            "start": 2557,
            "end": 2578
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 2590,
              "end": 2591
            },
            "start": 2583,
            "end": 2592
          }
        ],
        "start": 2529,
        "end": 2594
      },
      "expression": false,
      "start": 2505,
      "end": 2594
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g309",
        "optional": false,
        "typeAnnotation": null,
        "start": 2606,
        "end": 2610
      },
      "generator": true,
      "async": false,
      "declare": false,
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
              "start": 2611,
              "end": 2612
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2611,
            "end": 2612
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2614,
              "end": 2615
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2614,
            "end": 2615
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 2617,
              "end": 2618
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2617,
            "end": 2618
          }
        ],
        "start": 2610,
        "end": 2619
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
                "start": 2623,
                "end": 2624
              },
              "typeArguments": null,
              "start": 2623,
              "end": 2624
            },
            "start": 2621,
            "end": 2624
          },
          "start": 2620,
          "end": 2624
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 2629,
                "end": 2630
              },
              "typeArguments": null,
              "start": 2629,
              "end": 2630
            },
            "start": 2627,
            "end": 2630
          },
          "start": 2626,
          "end": 2630
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2669,
                        "end": 2670
                      },
                      "typeArguments": null,
                      "start": 2669,
                      "end": 2670
                    },
                    "start": 2667,
                    "end": 2670
                  },
                  "start": 2666,
                  "end": 2670
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2679,
                    "end": 2680
                  },
                  "start": 2673,
                  "end": 2680
                },
                "definite": false,
                "start": 2666,
                "end": 2680
              }
            ],
            "declare": false,
            "start": 2660,
            "end": 2681
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 2693,
              "end": 2694
            },
            "start": 2686,
            "end": 2695
          }
        ],
        "start": 2632,
        "end": 2697
      },
      "expression": false,
      "start": 2596,
      "end": 2697
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g310",
        "optional": false,
        "typeAnnotation": null,
        "start": 2709,
        "end": 2713
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
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2799,
                        "end": 2800
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2803,
                        "end": 2804
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2799,
                      "end": 2804
                    },
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2806,
                        "end": 2807
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 2810,
                        "end": 2811
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2806,
                      "end": 2811
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2798,
                  "end": 2812
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": null,
                  "start": 2815,
                  "end": 2820
                },
                "definite": false,
                "start": 2798,
                "end": 2820
              }
            ],
            "declare": false,
            "start": 2792,
            "end": 2821
          }
        ],
        "start": 2716,
        "end": 2823
      },
      "expression": false,
      "start": 2699,
      "end": 2823
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g311",
        "optional": false,
        "typeAnnotation": null,
        "start": 2835,
        "end": 2839
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
              "delegate": true,
              "argument": {
                "type": "CallExpression",
                "callee": {
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
                        "type": "VariableDeclaration",
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 2921,
                                  "end": 2927
                                },
                                "start": 2919,
                                "end": 2927
                              },
                              "start": 2918,
                              "end": 2927
                            },
                            "init": {
                              "type": "YieldExpression",
                              "delegate": false,
                              "argument": null,
                              "start": 2930,
                              "end": 2935
                            },
                            "definite": false,
                            "start": 2918,
                            "end": 2935
                          }
                        ],
                        "declare": false,
                        "start": 2912,
                        "end": 2936
                      }
                    ],
                    "start": 2908,
                    "end": 2939
                  },
                  "expression": false,
                  "start": 2896,
                  "end": 2939
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 2895,
                "end": 2942
              },
              "start": 2888,
              "end": 2942
            },
            "directive": null,
            "start": 2888,
            "end": 2943
          }
        ],
        "start": 2842,
        "end": 2945
      },
      "expression": false,
      "start": 2825,
      "end": 2945
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2945
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 8,
    "end": 13,
    "range": [
      8,
      13
    ]
  },
  {
    "type": "Identifier",
    "value": "iterableIterator",
    "start": 14,
    "end": 30,
    "range": [
      14,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "IterableIterator",
    "start": 32,
    "end": 48,
    "range": [
      32,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 49,
    "end": 55,
    "range": [
      49,
      55
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 58,
    "end": 65,
    "range": [
      58,
      65
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 66,
    "end": 71,
    "range": [
      66,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "generator",
    "start": 72,
    "end": 81,
    "range": [
      72,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 83,
    "end": 92,
    "range": [
      83,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 93,
    "end": 99,
    "range": [
      93,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 101,
    "end": 107,
    "range": [
      101,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 109,
    "end": 116,
    "range": [
      109,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 119,
    "end": 126,
    "range": [
      119,
      126
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 127,
    "end": 132,
    "range": [
      127,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 133,
    "end": 138,
    "range": [
      133,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 140,
    "end": 145,
    "range": [
      140,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 148,
    "end": 156,
    "range": [
      148,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Identifier",
    "value": "g000",
    "start": 158,
    "end": 162,
    "range": [
      158,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 241,
    "end": 249,
    "range": [
      241,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Identifier",
    "value": "g001",
    "start": 251,
    "end": 255,
    "range": [
      251,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 308,
    "end": 313,
    "range": [
      308,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 318,
    "end": 326,
    "range": [
      318,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Identifier",
    "value": "g002",
    "start": 328,
    "end": 332,
    "range": [
      328,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 377,
    "end": 382,
    "range": [
      377,
      382
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 389,
    "end": 397,
    "range": [
      389,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Identifier",
    "value": "g003",
    "start": 399,
    "end": 403,
    "range": [
      399,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 614,
    "end": 619,
    "range": [
      614,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 628,
    "end": 636,
    "range": [
      628,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Identifier",
    "value": "g004",
    "start": 638,
    "end": 642,
    "range": [
      638,
      642
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 645,
    "end": 646,
    "range": [
      645,
      646
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 689,
    "end": 694,
    "range": [
      689,
      694
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 694,
    "end": 695,
    "range": [
      694,
      695
    ]
  },
  {
    "type": "Identifier",
    "value": "iterableIterator",
    "start": 696,
    "end": 712,
    "range": [
      696,
      712
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 717,
    "end": 725,
    "range": [
      717,
      725
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 725,
    "end": 726,
    "range": [
      725,
      726
    ]
  },
  {
    "type": "Identifier",
    "value": "g005",
    "start": 727,
    "end": 731,
    "range": [
      727,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 734,
    "end": 735,
    "range": [
      734,
      735
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 776,
    "end": 781,
    "range": [
      776,
      781
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 782,
    "end": 783,
    "range": [
      782,
      783
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 784,
    "end": 785,
    "range": [
      784,
      785
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 786,
    "end": 791,
    "range": [
      786,
      791
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Identifier",
    "value": "generator",
    "start": 793,
    "end": 802,
    "range": [
      793,
      802
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 802,
    "end": 803,
    "range": [
      802,
      803
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 807,
    "end": 815,
    "range": [
      807,
      815
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 815,
    "end": 816,
    "range": [
      815,
      816
    ]
  },
  {
    "type": "Identifier",
    "value": "g006",
    "start": 817,
    "end": 821,
    "range": [
      817,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 865,
    "end": 870,
    "range": [
      865,
      870
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 871,
    "end": 872,
    "range": [
      871,
      872
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 872,
    "end": 873,
    "range": [
      872,
      873
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 878,
    "end": 883,
    "range": [
      878,
      883
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 884,
    "end": 885,
    "range": [
      884,
      885
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 887,
    "end": 888,
    "range": [
      887,
      888
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 890,
    "end": 898,
    "range": [
      890,
      898
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 898,
    "end": 899,
    "range": [
      898,
      899
    ]
  },
  {
    "type": "Identifier",
    "value": "g007",
    "start": 900,
    "end": 904,
    "range": [
      900,
      904
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 904,
    "end": 905,
    "range": [
      904,
      905
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 948,
    "end": 953,
    "range": [
      948,
      953
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 954,
    "end": 959,
    "range": [
      954,
      959
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 959,
    "end": 960,
    "range": [
      959,
      960
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 961,
    "end": 962,
    "range": [
      961,
      962
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1001,
    "end": 1009,
    "range": [
      1001,
      1009
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1009,
    "end": 1010,
    "range": [
      1009,
      1010
    ]
  },
  {
    "type": "Identifier",
    "value": "g102",
    "start": 1011,
    "end": 1015,
    "range": [
      1011,
      1015
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1015,
    "end": 1016,
    "range": [
      1015,
      1016
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1016,
    "end": 1017,
    "range": [
      1016,
      1017
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1018,
    "end": 1019,
    "range": [
      1018,
      1019
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1061,
    "end": 1067,
    "range": [
      1061,
      1067
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1068,
    "end": 1069,
    "range": [
      1068,
      1069
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1069,
    "end": 1070,
    "range": [
      1069,
      1070
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1071,
    "end": 1072,
    "range": [
      1071,
      1072
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1074,
    "end": 1082,
    "range": [
      1074,
      1082
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1082,
    "end": 1083,
    "range": [
      1082,
      1083
    ]
  },
  {
    "type": "Identifier",
    "value": "g103",
    "start": 1084,
    "end": 1088,
    "range": [
      1084,
      1088
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1089,
    "end": 1090,
    "range": [
      1089,
      1090
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1091,
    "end": 1092,
    "range": [
      1091,
      1092
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1133,
    "end": 1135,
    "range": [
      1133,
      1135
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1136,
    "end": 1137,
    "range": [
      1136,
      1137
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 1137,
    "end": 1141,
    "range": [
      1137,
      1141
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1141,
    "end": 1142,
    "range": [
      1141,
      1142
    ]
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 1142,
    "end": 1148,
    "range": [
      1142,
      1148
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1148,
    "end": 1149,
    "range": [
      1148,
      1149
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1149,
    "end": 1150,
    "range": [
      1149,
      1150
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1150,
    "end": 1151,
    "range": [
      1150,
      1151
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1152,
    "end": 1158,
    "range": [
      1152,
      1158
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1159,
    "end": 1160,
    "range": [
      1159,
      1160
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1160,
    "end": 1161,
    "range": [
      1160,
      1161
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1166,
    "end": 1172,
    "range": [
      1166,
      1172
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1173,
    "end": 1174,
    "range": [
      1173,
      1174
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1174,
    "end": 1175,
    "range": [
      1174,
      1175
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1176,
    "end": 1177,
    "range": [
      1176,
      1177
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1179,
    "end": 1187,
    "range": [
      1179,
      1187
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1187,
    "end": 1188,
    "range": [
      1187,
      1188
    ]
  },
  {
    "type": "Identifier",
    "value": "g104",
    "start": 1189,
    "end": 1193,
    "range": [
      1189,
      1193
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1193,
    "end": 1194,
    "range": [
      1193,
      1194
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1194,
    "end": 1195,
    "range": [
      1194,
      1195
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1196,
    "end": 1197,
    "range": [
      1196,
      1197
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1238,
    "end": 1244,
    "range": [
      1238,
      1244
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1245,
    "end": 1250,
    "range": [
      1245,
      1250
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1250,
    "end": 1251,
    "range": [
      1250,
      1251
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1252,
    "end": 1253,
    "range": [
      1252,
      1253
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1290,
    "end": 1298,
    "range": [
      1290,
      1298
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1298,
    "end": 1299,
    "range": [
      1298,
      1299
    ]
  },
  {
    "type": "Identifier",
    "value": "g201",
    "start": 1300,
    "end": 1304,
    "range": [
      1300,
      1304
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1304,
    "end": 1305,
    "range": [
      1304,
      1305
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1305,
    "end": 1306,
    "range": [
      1305,
      1306
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1307,
    "end": 1308,
    "range": [
      1307,
      1308
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1348,
    "end": 1351,
    "range": [
      1348,
      1351
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1352,
    "end": 1353,
    "range": [
      1352,
      1353
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1353,
    "end": 1354,
    "range": [
      1353,
      1354
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1355,
    "end": 1361,
    "range": [
      1355,
      1361
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1362,
    "end": 1363,
    "range": [
      1362,
      1363
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1364,
    "end": 1369,
    "range": [
      1364,
      1369
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1370,
    "end": 1371,
    "range": [
      1370,
      1371
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1371,
    "end": 1372,
    "range": [
      1371,
      1372
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1373,
    "end": 1374,
    "range": [
      1373,
      1374
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1376,
    "end": 1384,
    "range": [
      1376,
      1384
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1384,
    "end": 1385,
    "range": [
      1384,
      1385
    ]
  },
  {
    "type": "Identifier",
    "value": "g202",
    "start": 1386,
    "end": 1390,
    "range": [
      1386,
      1390
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1390,
    "end": 1391,
    "range": [
      1390,
      1391
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1391,
    "end": 1392,
    "range": [
      1391,
      1392
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1393,
    "end": 1394,
    "range": [
      1393,
      1394
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1432,
    "end": 1435,
    "range": [
      1432,
      1435
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1436,
    "end": 1437,
    "range": [
      1436,
      1437
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1437,
    "end": 1438,
    "range": [
      1437,
      1438
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1439,
    "end": 1445,
    "range": [
      1439,
      1445
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1446,
    "end": 1447,
    "range": [
      1446,
      1447
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1448,
    "end": 1453,
    "range": [
      1448,
      1453
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1454,
    "end": 1455,
    "range": [
      1454,
      1455
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1455,
    "end": 1456,
    "range": [
      1455,
      1456
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1461,
    "end": 1464,
    "range": [
      1461,
      1464
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1465,
    "end": 1466,
    "range": [
      1465,
      1466
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1466,
    "end": 1467,
    "range": [
      1466,
      1467
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1468,
    "end": 1474,
    "range": [
      1468,
      1474
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1475,
    "end": 1476,
    "range": [
      1475,
      1476
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1477,
    "end": 1482,
    "range": [
      1477,
      1482
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1483,
    "end": 1484,
    "range": [
      1483,
      1484
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1484,
    "end": 1485,
    "range": [
      1484,
      1485
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1486,
    "end": 1487,
    "range": [
      1486,
      1487
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1489,
    "end": 1496,
    "range": [
      1489,
      1496
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1497,
    "end": 1505,
    "range": [
      1497,
      1505
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1506,
    "end": 1508,
    "range": [
      1506,
      1508
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1508,
    "end": 1509,
    "range": [
      1508,
      1509
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1509,
    "end": 1510,
    "range": [
      1509,
      1510
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1510,
    "end": 1511,
    "range": [
      1510,
      1511
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1512,
    "end": 1518,
    "range": [
      1512,
      1518
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1518,
    "end": 1519,
    "range": [
      1518,
      1519
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1519,
    "end": 1520,
    "range": [
      1519,
      1520
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1521,
    "end": 1525,
    "range": [
      1521,
      1525
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1525,
    "end": 1526,
    "range": [
      1525,
      1526
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1527,
    "end": 1534,
    "range": [
      1527,
      1534
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1535,
    "end": 1543,
    "range": [
      1535,
      1543
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1544,
    "end": 1546,
    "range": [
      1544,
      1546
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1546,
    "end": 1547,
    "range": [
      1546,
      1547
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1547,
    "end": 1548,
    "range": [
      1547,
      1548
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1548,
    "end": 1549,
    "range": [
      1548,
      1549
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1550,
    "end": 1556,
    "range": [
      1550,
      1556
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1556,
    "end": 1557,
    "range": [
      1556,
      1557
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1557,
    "end": 1558,
    "range": [
      1557,
      1558
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1559,
    "end": 1563,
    "range": [
      1559,
      1563
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1563,
    "end": 1564,
    "range": [
      1563,
      1564
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1566,
    "end": 1574,
    "range": [
      1566,
      1574
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1574,
    "end": 1575,
    "range": [
      1574,
      1575
    ]
  },
  {
    "type": "Identifier",
    "value": "g203",
    "start": 1576,
    "end": 1580,
    "range": [
      1576,
      1580
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1580,
    "end": 1581,
    "range": [
      1580,
      1581
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1581,
    "end": 1582,
    "range": [
      1581,
      1582
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1583,
    "end": 1584,
    "range": [
      1583,
      1584
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1621,
    "end": 1626,
    "range": [
      1621,
      1626
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1627,
    "end": 1628,
    "range": [
      1627,
      1628
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1629,
    "end": 1630,
    "range": [
      1629,
      1630
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1631,
    "end": 1633,
    "range": [
      1631,
      1633
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1633,
    "end": 1634,
    "range": [
      1633,
      1634
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1634,
    "end": 1639,
    "range": [
      1634,
      1639
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1640,
    "end": 1641,
    "range": [
      1640,
      1641
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1641,
    "end": 1642,
    "range": [
      1641,
      1642
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1642,
    "end": 1643,
    "range": [
      1642,
      1643
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1644,
    "end": 1645,
    "range": [
      1644,
      1645
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1647,
    "end": 1654,
    "range": [
      1647,
      1654
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1655,
    "end": 1663,
    "range": [
      1655,
      1663
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1664,
    "end": 1666,
    "range": [
      1664,
      1666
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1666,
    "end": 1667,
    "range": [
      1666,
      1667
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1667,
    "end": 1668,
    "range": [
      1667,
      1668
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1668,
    "end": 1669,
    "range": [
      1668,
      1669
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1669,
    "end": 1670,
    "range": [
      1669,
      1670
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1670,
    "end": 1671,
    "range": [
      1670,
      1671
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1671,
    "end": 1672,
    "range": [
      1671,
      1672
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1673,
    "end": 1674,
    "range": [
      1673,
      1674
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1674,
    "end": 1675,
    "range": [
      1674,
      1675
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1675,
    "end": 1676,
    "range": [
      1675,
      1676
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1677,
    "end": 1678,
    "range": [
      1677,
      1678
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1678,
    "end": 1679,
    "range": [
      1678,
      1679
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1681,
    "end": 1689,
    "range": [
      1681,
      1689
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1689,
    "end": 1690,
    "range": [
      1689,
      1690
    ]
  },
  {
    "type": "Identifier",
    "value": "g204",
    "start": 1691,
    "end": 1695,
    "range": [
      1691,
      1695
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1695,
    "end": 1696,
    "range": [
      1695,
      1696
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1696,
    "end": 1697,
    "range": [
      1696,
      1697
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1698,
    "end": 1699,
    "range": [
      1698,
      1699
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1733,
    "end": 1738,
    "range": [
      1733,
      1738
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1739,
    "end": 1740,
    "range": [
      1739,
      1740
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1741,
    "end": 1742,
    "range": [
      1741,
      1742
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1743,
    "end": 1745,
    "range": [
      1743,
      1745
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1745,
    "end": 1746,
    "range": [
      1745,
      1746
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1746,
    "end": 1751,
    "range": [
      1746,
      1751
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1752,
    "end": 1753,
    "range": [
      1752,
      1753
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1753,
    "end": 1754,
    "range": [
      1753,
      1754
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1754,
    "end": 1755,
    "range": [
      1754,
      1755
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1756,
    "end": 1757,
    "range": [
      1756,
      1757
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1795,
    "end": 1803,
    "range": [
      1795,
      1803
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1803,
    "end": 1804,
    "range": [
      1803,
      1804
    ]
  },
  {
    "type": "Identifier",
    "value": "g301",
    "start": 1805,
    "end": 1809,
    "range": [
      1805,
      1809
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1809,
    "end": 1810,
    "range": [
      1809,
      1810
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1810,
    "end": 1811,
    "range": [
      1810,
      1811
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1812,
    "end": 1813,
    "range": [
      1812,
      1813
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1862,
    "end": 1867,
    "range": [
      1862,
      1867
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1867,
    "end": 1868,
    "range": [
      1867,
      1868
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1873,
    "end": 1879,
    "range": [
      1873,
      1879
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1879,
    "end": 1880,
    "range": [
      1879,
      1880
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1881,
    "end": 1882,
    "range": [
      1881,
      1882
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1884,
    "end": 1892,
    "range": [
      1884,
      1892
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1892,
    "end": 1893,
    "range": [
      1892,
      1893
    ]
  },
  {
    "type": "Identifier",
    "value": "g302",
    "start": 1894,
    "end": 1898,
    "range": [
      1894,
      1898
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1898,
    "end": 1899,
    "range": [
      1898,
      1899
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1899,
    "end": 1900,
    "range": [
      1899,
      1900
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1901,
    "end": 1902,
    "range": [
      1901,
      1902
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1943,
    "end": 1948,
    "range": [
      1943,
      1948
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1949,
    "end": 1950,
    "range": [
      1949,
      1950
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1950,
    "end": 1951,
    "range": [
      1950,
      1951
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1956,
    "end": 1962,
    "range": [
      1956,
      1962
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1962,
    "end": 1963,
    "range": [
      1962,
      1963
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1964,
    "end": 1965,
    "range": [
      1964,
      1965
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1967,
    "end": 1975,
    "range": [
      1967,
      1975
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1975,
    "end": 1976,
    "range": [
      1975,
      1976
    ]
  },
  {
    "type": "Identifier",
    "value": "g303",
    "start": 1977,
    "end": 1981,
    "range": [
      1977,
      1981
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1981,
    "end": 1982,
    "range": [
      1981,
      1982
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1982,
    "end": 1983,
    "range": [
      1982,
      1983
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1984,
    "end": 1985,
    "range": [
      1984,
      1985
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2036,
    "end": 2041,
    "range": [
      2036,
      2041
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2041,
    "end": 2042,
    "range": [
      2041,
      2042
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2047,
    "end": 2053,
    "range": [
      2047,
      2053
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2054,
    "end": 2057,
    "range": [
      2054,
      2057
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2057,
    "end": 2058,
    "range": [
      2057,
      2058
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2059,
    "end": 2060,
    "range": [
      2059,
      2060
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2062,
    "end": 2070,
    "range": [
      2062,
      2070
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2070,
    "end": 2071,
    "range": [
      2070,
      2071
    ]
  },
  {
    "type": "Identifier",
    "value": "g304",
    "start": 2072,
    "end": 2076,
    "range": [
      2072,
      2076
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2076,
    "end": 2077,
    "range": [
      2076,
      2077
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2077,
    "end": 2078,
    "range": [
      2077,
      2078
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2079,
    "end": 2080,
    "range": [
      2079,
      2080
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2123,
    "end": 2128,
    "range": [
      2123,
      2128
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2129,
    "end": 2130,
    "range": [
      2129,
      2130
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2130,
    "end": 2131,
    "range": [
      2130,
      2131
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2136,
    "end": 2142,
    "range": [
      2136,
      2142
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2143,
    "end": 2146,
    "range": [
      2143,
      2146
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2146,
    "end": 2147,
    "range": [
      2146,
      2147
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2148,
    "end": 2149,
    "range": [
      2148,
      2149
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2151,
    "end": 2159,
    "range": [
      2151,
      2159
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2159,
    "end": 2160,
    "range": [
      2159,
      2160
    ]
  },
  {
    "type": "Identifier",
    "value": "g305",
    "start": 2161,
    "end": 2165,
    "range": [
      2161,
      2165
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2165,
    "end": 2166,
    "range": [
      2165,
      2166
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2166,
    "end": 2167,
    "range": [
      2166,
      2167
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2168,
    "end": 2169,
    "range": [
      2168,
      2169
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2214,
    "end": 2216,
    "range": [
      2214,
      2216
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2217,
    "end": 2218,
    "range": [
      2217,
      2218
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 2218,
    "end": 2222,
    "range": [
      2218,
      2222
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2222,
    "end": 2223,
    "range": [
      2222,
      2223
    ]
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 2223,
    "end": 2229,
    "range": [
      2223,
      2229
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2229,
    "end": 2230,
    "range": [
      2229,
      2230
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2230,
    "end": 2231,
    "range": [
      2230,
      2231
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2231,
    "end": 2232,
    "range": [
      2231,
      2232
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2233,
    "end": 2238,
    "range": [
      2233,
      2238
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2239,
    "end": 2240,
    "range": [
      2239,
      2240
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2240,
    "end": 2241,
    "range": [
      2240,
      2241
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2246,
    "end": 2251,
    "range": [
      2246,
      2251
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2252,
    "end": 2253,
    "range": [
      2252,
      2253
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2253,
    "end": 2254,
    "range": [
      2253,
      2254
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2259,
    "end": 2261,
    "range": [
      2259,
      2261
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2262,
    "end": 2263,
    "range": [
      2262,
      2263
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 2263,
    "end": 2267,
    "range": [
      2263,
      2267
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2267,
    "end": 2268,
    "range": [
      2267,
      2268
    ]
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 2268,
    "end": 2274,
    "range": [
      2268,
      2274
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2274,
    "end": 2275,
    "range": [
      2274,
      2275
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2275,
    "end": 2276,
    "range": [
      2275,
      2276
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2276,
    "end": 2277,
    "range": [
      2276,
      2277
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2278,
    "end": 2284,
    "range": [
      2278,
      2284
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2285,
    "end": 2288,
    "range": [
      2285,
      2288
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2288,
    "end": 2289,
    "range": [
      2288,
      2289
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2294,
    "end": 2300,
    "range": [
      2294,
      2300
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 2301,
    "end": 2304,
    "range": [
      2301,
      2304
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2304,
    "end": 2305,
    "range": [
      2304,
      2305
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2306,
    "end": 2307,
    "range": [
      2306,
      2307
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2309,
    "end": 2317,
    "range": [
      2309,
      2317
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2317,
    "end": 2318,
    "range": [
      2317,
      2318
    ]
  },
  {
    "type": "Identifier",
    "value": "g306",
    "start": 2319,
    "end": 2323,
    "range": [
      2319,
      2323
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2323,
    "end": 2324,
    "range": [
      2323,
      2324
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2324,
    "end": 2325,
    "range": [
      2324,
      2325
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2326,
    "end": 2327,
    "range": [
      2326,
      2327
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2368,
    "end": 2373,
    "range": [
      2368,
      2373
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2374,
    "end": 2375,
    "range": [
      2374,
      2375
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2375,
    "end": 2376,
    "range": [
      2375,
      2376
    ]
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 2377,
    "end": 2381,
    "range": [
      2377,
      2381
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2382,
    "end": 2383,
    "range": [
      2382,
      2383
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2384,
    "end": 2389,
    "range": [
      2384,
      2389
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2390,
    "end": 2391,
    "range": [
      2390,
      2391
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2391,
    "end": 2392,
    "range": [
      2391,
      2392
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2397,
    "end": 2403,
    "range": [
      2397,
      2403
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2404,
    "end": 2408,
    "range": [
      2404,
      2408
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2408,
    "end": 2409,
    "range": [
      2408,
      2409
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2410,
    "end": 2411,
    "range": [
      2410,
      2411
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2413,
    "end": 2421,
    "range": [
      2413,
      2421
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2421,
    "end": 2422,
    "range": [
      2421,
      2422
    ]
  },
  {
    "type": "Identifier",
    "value": "g307",
    "start": 2423,
    "end": 2427,
    "range": [
      2423,
      2427
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2427,
    "end": 2428,
    "range": [
      2427,
      2428
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2428,
    "end": 2429,
    "range": [
      2428,
      2429
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2429,
    "end": 2430,
    "range": [
      2429,
      2430
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2430,
    "end": 2431,
    "range": [
      2430,
      2431
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2431,
    "end": 2432,
    "range": [
      2431,
      2432
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2433,
    "end": 2434,
    "range": [
      2433,
      2434
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2466,
    "end": 2471,
    "range": [
      2466,
      2471
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2472,
    "end": 2473,
    "range": [
      2472,
      2473
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2473,
    "end": 2474,
    "range": [
      2473,
      2474
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2475,
    "end": 2476,
    "range": [
      2475,
      2476
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2477,
    "end": 2478,
    "range": [
      2477,
      2478
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2479,
    "end": 2484,
    "range": [
      2479,
      2484
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2485,
    "end": 2486,
    "range": [
      2485,
      2486
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2486,
    "end": 2487,
    "range": [
      2486,
      2487
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2492,
    "end": 2498,
    "range": [
      2492,
      2498
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2499,
    "end": 2500,
    "range": [
      2499,
      2500
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2500,
    "end": 2501,
    "range": [
      2500,
      2501
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2502,
    "end": 2503,
    "range": [
      2502,
      2503
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2505,
    "end": 2513,
    "range": [
      2505,
      2513
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2513,
    "end": 2514,
    "range": [
      2513,
      2514
    ]
  },
  {
    "type": "Identifier",
    "value": "g308",
    "start": 2515,
    "end": 2519,
    "range": [
      2515,
      2519
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2519,
    "end": 2520,
    "range": [
      2519,
      2520
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2520,
    "end": 2521,
    "range": [
      2520,
      2521
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2521,
    "end": 2522,
    "range": [
      2521,
      2522
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2522,
    "end": 2523,
    "range": [
      2522,
      2523
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2523,
    "end": 2524,
    "range": [
      2523,
      2524
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2524,
    "end": 2525,
    "range": [
      2524,
      2525
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2526,
    "end": 2527,
    "range": [
      2526,
      2527
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2527,
    "end": 2528,
    "range": [
      2527,
      2528
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2529,
    "end": 2530,
    "range": [
      2529,
      2530
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2557,
    "end": 2562,
    "range": [
      2557,
      2562
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2563,
    "end": 2564,
    "range": [
      2563,
      2564
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2564,
    "end": 2565,
    "range": [
      2564,
      2565
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2566,
    "end": 2567,
    "range": [
      2566,
      2567
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2568,
    "end": 2569,
    "range": [
      2568,
      2569
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2570,
    "end": 2575,
    "range": [
      2570,
      2575
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2576,
    "end": 2577,
    "range": [
      2576,
      2577
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2577,
    "end": 2578,
    "range": [
      2577,
      2578
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2583,
    "end": 2589,
    "range": [
      2583,
      2589
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2590,
    "end": 2591,
    "range": [
      2590,
      2591
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2591,
    "end": 2592,
    "range": [
      2591,
      2592
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2593,
    "end": 2594,
    "range": [
      2593,
      2594
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2596,
    "end": 2604,
    "range": [
      2596,
      2604
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2604,
    "end": 2605,
    "range": [
      2604,
      2605
    ]
  },
  {
    "type": "Identifier",
    "value": "g309",
    "start": 2606,
    "end": 2610,
    "range": [
      2606,
      2610
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2610,
    "end": 2611,
    "range": [
      2610,
      2611
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2611,
    "end": 2612,
    "range": [
      2611,
      2612
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2612,
    "end": 2613,
    "range": [
      2612,
      2613
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2614,
    "end": 2615,
    "range": [
      2614,
      2615
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2615,
    "end": 2616,
    "range": [
      2615,
      2616
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2617,
    "end": 2618,
    "range": [
      2617,
      2618
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2618,
    "end": 2619,
    "range": [
      2618,
      2619
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2619,
    "end": 2620,
    "range": [
      2619,
      2620
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2620,
    "end": 2621,
    "range": [
      2620,
      2621
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2621,
    "end": 2622,
    "range": [
      2621,
      2622
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2623,
    "end": 2624,
    "range": [
      2623,
      2624
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2624,
    "end": 2625,
    "range": [
      2624,
      2625
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2626,
    "end": 2627,
    "range": [
      2626,
      2627
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2627,
    "end": 2628,
    "range": [
      2627,
      2628
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2629,
    "end": 2630,
    "range": [
      2629,
      2630
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2630,
    "end": 2631,
    "range": [
      2630,
      2631
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2632,
    "end": 2633,
    "range": [
      2632,
      2633
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2660,
    "end": 2665,
    "range": [
      2660,
      2665
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2666,
    "end": 2667,
    "range": [
      2666,
      2667
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2667,
    "end": 2668,
    "range": [
      2667,
      2668
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2669,
    "end": 2670,
    "range": [
      2669,
      2670
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2671,
    "end": 2672,
    "range": [
      2671,
      2672
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2673,
    "end": 2678,
    "range": [
      2673,
      2678
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2679,
    "end": 2680,
    "range": [
      2679,
      2680
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2680,
    "end": 2681,
    "range": [
      2680,
      2681
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2686,
    "end": 2692,
    "range": [
      2686,
      2692
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2693,
    "end": 2694,
    "range": [
      2693,
      2694
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2694,
    "end": 2695,
    "range": [
      2694,
      2695
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2696,
    "end": 2697,
    "range": [
      2696,
      2697
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2699,
    "end": 2707,
    "range": [
      2699,
      2707
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2707,
    "end": 2708,
    "range": [
      2707,
      2708
    ]
  },
  {
    "type": "Identifier",
    "value": "g310",
    "start": 2709,
    "end": 2713,
    "range": [
      2709,
      2713
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2713,
    "end": 2714,
    "range": [
      2713,
      2714
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2714,
    "end": 2715,
    "range": [
      2714,
      2715
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2716,
    "end": 2717,
    "range": [
      2716,
      2717
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2792,
    "end": 2797,
    "range": [
      2792,
      2797
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2798,
    "end": 2799,
    "range": [
      2798,
      2799
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2799,
    "end": 2800,
    "range": [
      2799,
      2800
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2801,
    "end": 2802,
    "range": [
      2801,
      2802
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2803,
    "end": 2804,
    "range": [
      2803,
      2804
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2804,
    "end": 2805,
    "range": [
      2804,
      2805
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2806,
    "end": 2807,
    "range": [
      2806,
      2807
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2808,
    "end": 2809,
    "range": [
      2808,
      2809
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2810,
    "end": 2811,
    "range": [
      2810,
      2811
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2811,
    "end": 2812,
    "range": [
      2811,
      2812
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2813,
    "end": 2814,
    "range": [
      2813,
      2814
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2815,
    "end": 2820,
    "range": [
      2815,
      2820
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2820,
    "end": 2821,
    "range": [
      2820,
      2821
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2822,
    "end": 2823,
    "range": [
      2822,
      2823
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2825,
    "end": 2833,
    "range": [
      2825,
      2833
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2833,
    "end": 2834,
    "range": [
      2833,
      2834
    ]
  },
  {
    "type": "Identifier",
    "value": "g311",
    "start": 2835,
    "end": 2839,
    "range": [
      2835,
      2839
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2839,
    "end": 2840,
    "range": [
      2839,
      2840
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2840,
    "end": 2841,
    "range": [
      2840,
      2841
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2842,
    "end": 2843,
    "range": [
      2842,
      2843
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2888,
    "end": 2893,
    "range": [
      2888,
      2893
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2893,
    "end": 2894,
    "range": [
      2893,
      2894
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2895,
    "end": 2896,
    "range": [
      2895,
      2896
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2896,
    "end": 2904,
    "range": [
      2896,
      2904
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2904,
    "end": 2905,
    "range": [
      2904,
      2905
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2905,
    "end": 2906,
    "range": [
      2905,
      2906
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2906,
    "end": 2907,
    "range": [
      2906,
      2907
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2908,
    "end": 2909,
    "range": [
      2908,
      2909
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2912,
    "end": 2917,
    "range": [
      2912,
      2917
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2918,
    "end": 2919,
    "range": [
      2918,
      2919
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2919,
    "end": 2920,
    "range": [
      2919,
      2920
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2921,
    "end": 2927,
    "range": [
      2921,
      2927
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2928,
    "end": 2929,
    "range": [
      2928,
      2929
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2930,
    "end": 2935,
    "range": [
      2930,
      2935
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2935,
    "end": 2936,
    "range": [
      2935,
      2936
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2938,
    "end": 2939,
    "range": [
      2938,
      2939
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2939,
    "end": 2940,
    "range": [
      2939,
      2940
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2940,
    "end": 2941,
    "range": [
      2940,
      2941
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2941,
    "end": 2942,
    "range": [
      2941,
      2942
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2942,
    "end": 2943,
    "range": [
      2942,
      2943
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2944,
    "end": 2945,
    "range": [
      2944,
      2945
    ]
  }
]
```
