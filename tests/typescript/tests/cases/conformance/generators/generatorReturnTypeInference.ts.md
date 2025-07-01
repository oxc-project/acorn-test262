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
              "start": 303,
              "end": 308
            },
            "directive": null,
            "start": 303,
            "end": 309
          }
        ],
        "start": 258,
        "end": 311
      },
      "expression": false,
      "start": 241,
      "end": 311
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g002",
        "optional": false,
        "typeAnnotation": null,
        "start": 323,
        "end": 327
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
                "start": 378,
                "end": 379
              },
              "start": 372,
              "end": 379
            },
            "directive": null,
            "start": 372,
            "end": 380
          }
        ],
        "start": 330,
        "end": 382
      },
      "expression": false,
      "start": 313,
      "end": 382
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g003",
        "optional": false,
        "typeAnnotation": null,
        "start": 394,
        "end": 398
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
                "start": 451,
                "end": 453
              },
              "start": 444,
              "end": 453
            },
            "directive": null,
            "start": 444,
            "end": 454
          }
        ],
        "start": 401,
        "end": 456
      },
      "expression": false,
      "start": 384,
      "end": 456
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g004",
        "optional": false,
        "typeAnnotation": null,
        "start": 468,
        "end": 472
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
                "start": 526,
                "end": 542
              },
              "start": 519,
              "end": 542
            },
            "directive": null,
            "start": 519,
            "end": 543
          }
        ],
        "start": 475,
        "end": 545
      },
      "expression": false,
      "start": 458,
      "end": 545
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g005",
        "optional": false,
        "typeAnnotation": null,
        "start": 557,
        "end": 561
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
                  "start": 612,
                  "end": 613
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
                    "start": 623,
                    "end": 632
                  },
                  "start": 616,
                  "end": 632
                },
                "definite": false,
                "start": 612,
                "end": 632
              }
            ],
            "declare": false,
            "start": 606,
            "end": 633
          }
        ],
        "start": 564,
        "end": 635
      },
      "expression": false,
      "start": 547,
      "end": 635
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g006",
        "optional": false,
        "typeAnnotation": null,
        "start": 647,
        "end": 651
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
                "start": 701,
                "end": 702
              },
              "start": 695,
              "end": 702
            },
            "directive": null,
            "start": 695,
            "end": 703
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
                "start": 714,
                "end": 715
              },
              "start": 708,
              "end": 715
            },
            "directive": null,
            "start": 708,
            "end": 716
          }
        ],
        "start": 654,
        "end": 718
      },
      "expression": false,
      "start": 637,
      "end": 718
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g007",
        "optional": false,
        "typeAnnotation": null,
        "start": 730,
        "end": 734
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
                "start": 784,
                "end": 789
              },
              "start": 778,
              "end": 789
            },
            "directive": null,
            "start": 778,
            "end": 790
          }
        ],
        "start": 737,
        "end": 792
      },
      "expression": false,
      "start": 720,
      "end": 792
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g102",
        "optional": false,
        "typeAnnotation": null,
        "start": 841,
        "end": 845
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
              "start": 898,
              "end": 899
            },
            "start": 891,
            "end": 900
          }
        ],
        "start": 848,
        "end": 902
      },
      "expression": false,
      "start": 831,
      "end": 902
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g103",
        "optional": false,
        "typeAnnotation": null,
        "start": 914,
        "end": 918
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
                  "start": 967,
                  "end": 971
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 972,
                  "end": 978
                },
                "optional": false,
                "computed": false,
                "start": 967,
                "end": 978
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 967,
              "end": 980
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 989,
                "end": 990
              },
              "start": 982,
              "end": 991
            },
            "alternate": null,
            "start": 963,
            "end": 991
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 1003,
              "end": 1004
            },
            "start": 996,
            "end": 1005
          }
        ],
        "start": 921,
        "end": 1007
      },
      "expression": false,
      "start": 904,
      "end": 1007
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g104",
        "optional": false,
        "typeAnnotation": null,
        "start": 1019,
        "end": 1023
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
              "start": 1075,
              "end": 1080
            },
            "start": 1068,
            "end": 1081
          }
        ],
        "start": 1026,
        "end": 1083
      },
      "expression": false,
      "start": 1009,
      "end": 1083
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g201",
        "optional": false,
        "typeAnnotation": null,
        "start": 1130,
        "end": 1134
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
                      "start": 1185,
                      "end": 1191
                    },
                    "start": 1183,
                    "end": 1191
                  },
                  "start": 1182,
                  "end": 1191
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1200,
                    "end": 1201
                  },
                  "start": 1194,
                  "end": 1201
                },
                "definite": false,
                "start": 1182,
                "end": 1201
              }
            ],
            "declare": false,
            "start": 1178,
            "end": 1202
          }
        ],
        "start": 1137,
        "end": 1204
      },
      "expression": false,
      "start": 1120,
      "end": 1204
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g202",
        "optional": false,
        "typeAnnotation": null,
        "start": 1216,
        "end": 1220
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
                      "start": 1269,
                      "end": 1275
                    },
                    "start": 1267,
                    "end": 1275
                  },
                  "start": 1266,
                  "end": 1275
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1284,
                    "end": 1285
                  },
                  "start": 1278,
                  "end": 1285
                },
                "definite": false,
                "start": 1266,
                "end": 1285
              }
            ],
            "declare": false,
            "start": 1262,
            "end": 1286
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
                      "start": 1298,
                      "end": 1304
                    },
                    "start": 1296,
                    "end": 1304
                  },
                  "start": 1295,
                  "end": 1304
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1313,
                    "end": 1314
                  },
                  "start": 1307,
                  "end": 1314
                },
                "definite": false,
                "start": 1295,
                "end": 1314
              }
            ],
            "declare": false,
            "start": 1291,
            "end": 1315
          }
        ],
        "start": 1223,
        "end": 1317
      },
      "expression": false,
      "start": 1206,
      "end": 1317
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1336,
        "end": 1338
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
              "start": 1342,
              "end": 1348
            },
            "start": 1340,
            "end": 1348
          },
          "start": 1339,
          "end": 1348
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1351,
          "end": 1355
        },
        "start": 1349,
        "end": 1355
      },
      "body": null,
      "expression": false,
      "start": 1319,
      "end": 1356
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1374,
        "end": 1376
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
              "start": 1380,
              "end": 1386
            },
            "start": 1378,
            "end": 1386
          },
          "start": 1377,
          "end": 1386
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1389,
          "end": 1393
        },
        "start": 1387,
        "end": 1393
      },
      "body": null,
      "expression": false,
      "start": 1357,
      "end": 1394
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g203",
        "optional": false,
        "typeAnnotation": null,
        "start": 1406,
        "end": 1410
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
                  "start": 1457,
                  "end": 1458
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1461,
                    "end": 1463
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
                        "start": 1470,
                        "end": 1471
                      },
                      "start": 1464,
                      "end": 1471
                    }
                  ],
                  "optional": false,
                  "start": 1461,
                  "end": 1472
                },
                "definite": false,
                "start": 1457,
                "end": 1472
              }
            ],
            "declare": false,
            "start": 1451,
            "end": 1473
          }
        ],
        "start": 1413,
        "end": 1475
      },
      "expression": false,
      "start": 1396,
      "end": 1475
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1494,
        "end": 1496
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
              "start": 1497,
              "end": 1498
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1497,
            "end": 1498
          }
        ],
        "start": 1496,
        "end": 1499
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
                "start": 1503,
                "end": 1504
              },
              "typeArguments": null,
              "start": 1503,
              "end": 1504
            },
            "start": 1501,
            "end": 1504
          },
          "start": 1500,
          "end": 1504
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
            "start": 1507,
            "end": 1508
          },
          "typeArguments": null,
          "start": 1507,
          "end": 1508
        },
        "start": 1505,
        "end": 1508
      },
      "body": null,
      "expression": false,
      "start": 1477,
      "end": 1509
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g204",
        "optional": false,
        "typeAnnotation": null,
        "start": 1521,
        "end": 1525
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
                  "start": 1569,
                  "end": 1570
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1573,
                    "end": 1575
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
                        "start": 1582,
                        "end": 1583
                      },
                      "start": 1576,
                      "end": 1583
                    }
                  ],
                  "optional": false,
                  "start": 1573,
                  "end": 1584
                },
                "definite": false,
                "start": 1569,
                "end": 1584
              }
            ],
            "declare": false,
            "start": 1563,
            "end": 1585
          }
        ],
        "start": 1528,
        "end": 1587
      },
      "expression": false,
      "start": 1511,
      "end": 1587
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g301",
        "optional": false,
        "typeAnnotation": null,
        "start": 1635,
        "end": 1639
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
              "start": 1687,
              "end": 1692
            },
            "directive": null,
            "start": 1687,
            "end": 1693
          },
          {
            "type": "ReturnStatement",
            "argument": null,
            "start": 1698,
            "end": 1705
          }
        ],
        "start": 1642,
        "end": 1707
      },
      "expression": false,
      "start": 1625,
      "end": 1707
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g302",
        "optional": false,
        "typeAnnotation": null,
        "start": 1719,
        "end": 1723
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
                "start": 1774,
                "end": 1775
              },
              "start": 1768,
              "end": 1775
            },
            "directive": null,
            "start": 1768,
            "end": 1776
          },
          {
            "type": "ReturnStatement",
            "argument": null,
            "start": 1781,
            "end": 1788
          }
        ],
        "start": 1726,
        "end": 1790
      },
      "expression": false,
      "start": 1709,
      "end": 1790
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g303",
        "optional": false,
        "typeAnnotation": null,
        "start": 1802,
        "end": 1806
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
              "start": 1856,
              "end": 1861
            },
            "directive": null,
            "start": 1856,
            "end": 1862
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 1874,
              "end": 1877
            },
            "start": 1867,
            "end": 1878
          }
        ],
        "start": 1809,
        "end": 1880
      },
      "expression": false,
      "start": 1792,
      "end": 1880
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g304",
        "optional": false,
        "typeAnnotation": null,
        "start": 1892,
        "end": 1896
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
            "argument": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 1963,
              "end": 1966
            },
            "start": 1956,
            "end": 1967
          }
        ],
        "start": 1899,
        "end": 1969
      },
      "expression": false,
      "start": 1882,
      "end": 1969
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g305",
        "optional": false,
        "typeAnnotation": null,
        "start": 1981,
        "end": 1985
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
                  "start": 2038,
                  "end": 2042
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2043,
                  "end": 2049
                },
                "optional": false,
                "computed": false,
                "start": 2038,
                "end": 2049
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2038,
              "end": 2051
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
                  "start": 2059,
                  "end": 2060
                },
                "start": 2053,
                "end": 2060
              },
              "directive": null,
              "start": 2053,
              "end": 2061
            },
            "alternate": null,
            "start": 2034,
            "end": 2061
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
                "start": 2072,
                "end": 2073
              },
              "start": 2066,
              "end": 2073
            },
            "directive": null,
            "start": 2066,
            "end": 2074
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
                  "start": 2083,
                  "end": 2087
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2088,
                  "end": 2094
                },
                "optional": false,
                "computed": false,
                "start": 2083,
                "end": 2094
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2083,
              "end": 2096
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 2105,
                "end": 2108
              },
              "start": 2098,
              "end": 2109
            },
            "alternate": null,
            "start": 2079,
            "end": 2109
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 2121,
              "end": 2124
            },
            "start": 2114,
            "end": 2125
          }
        ],
        "start": 1988,
        "end": 2127
      },
      "expression": false,
      "start": 1971,
      "end": 2127
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g306",
        "optional": false,
        "typeAnnotation": null,
        "start": 2139,
        "end": 2143
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
                        "start": 2197,
                        "end": 2201
                      },
                      "start": 2197,
                      "end": 2201
                    },
                    "start": 2195,
                    "end": 2201
                  },
                  "start": 2194,
                  "end": 2201
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2210,
                    "end": 2211
                  },
                  "start": 2204,
                  "end": 2211
                },
                "definite": false,
                "start": 2194,
                "end": 2211
              }
            ],
            "declare": false,
            "start": 2188,
            "end": 2212
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 2224,
              "end": 2228
            },
            "start": 2217,
            "end": 2229
          }
        ],
        "start": 2146,
        "end": 2231
      },
      "expression": false,
      "start": 2129,
      "end": 2231
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g307",
        "optional": false,
        "typeAnnotation": null,
        "start": 2243,
        "end": 2247
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
              "start": 2248,
              "end": 2249
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2248,
            "end": 2249
          }
        ],
        "start": 2247,
        "end": 2250
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
                        "start": 2295,
                        "end": 2296
                      },
                      "typeArguments": null,
                      "start": 2295,
                      "end": 2296
                    },
                    "start": 2293,
                    "end": 2296
                  },
                  "start": 2292,
                  "end": 2296
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 2305,
                    "end": 2306
                  },
                  "start": 2299,
                  "end": 2306
                },
                "definite": false,
                "start": 2292,
                "end": 2306
              }
            ],
            "declare": false,
            "start": 2286,
            "end": 2307
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 2319,
              "end": 2320
            },
            "start": 2312,
            "end": 2321
          }
        ],
        "start": 2253,
        "end": 2323
      },
      "expression": false,
      "start": 2233,
      "end": 2323
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g308",
        "optional": false,
        "typeAnnotation": null,
        "start": 2335,
        "end": 2339
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
              "start": 2340,
              "end": 2341
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2340,
            "end": 2341
          }
        ],
        "start": 2339,
        "end": 2342
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
                "start": 2346,
                "end": 2347
              },
              "typeArguments": null,
              "start": 2346,
              "end": 2347
            },
            "start": 2344,
            "end": 2347
          },
          "start": 2343,
          "end": 2347
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
                        "start": 2386,
                        "end": 2387
                      },
                      "typeArguments": null,
                      "start": 2386,
                      "end": 2387
                    },
                    "start": 2384,
                    "end": 2387
                  },
                  "start": 2383,
                  "end": 2387
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
                    "start": 2396,
                    "end": 2397
                  },
                  "start": 2390,
                  "end": 2397
                },
                "definite": false,
                "start": 2383,
                "end": 2397
              }
            ],
            "declare": false,
            "start": 2377,
            "end": 2398
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 2410,
              "end": 2411
            },
            "start": 2403,
            "end": 2412
          }
        ],
        "start": 2349,
        "end": 2414
      },
      "expression": false,
      "start": 2325,
      "end": 2414
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g309",
        "optional": false,
        "typeAnnotation": null,
        "start": 2426,
        "end": 2430
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
              "start": 2431,
              "end": 2432
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2431,
            "end": 2432
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2434,
              "end": 2435
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2434,
            "end": 2435
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 2437,
              "end": 2438
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2437,
            "end": 2438
          }
        ],
        "start": 2430,
        "end": 2439
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
                "start": 2443,
                "end": 2444
              },
              "typeArguments": null,
              "start": 2443,
              "end": 2444
            },
            "start": 2441,
            "end": 2444
          },
          "start": 2440,
          "end": 2444
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
                "start": 2449,
                "end": 2450
              },
              "typeArguments": null,
              "start": 2449,
              "end": 2450
            },
            "start": 2447,
            "end": 2450
          },
          "start": 2446,
          "end": 2450
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
                        "start": 2489,
                        "end": 2490
                      },
                      "typeArguments": null,
                      "start": 2489,
                      "end": 2490
                    },
                    "start": 2487,
                    "end": 2490
                  },
                  "start": 2486,
                  "end": 2490
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
                    "start": 2499,
                    "end": 2500
                  },
                  "start": 2493,
                  "end": 2500
                },
                "definite": false,
                "start": 2486,
                "end": 2500
              }
            ],
            "declare": false,
            "start": 2480,
            "end": 2501
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 2513,
              "end": 2514
            },
            "start": 2506,
            "end": 2515
          }
        ],
        "start": 2452,
        "end": 2517
      },
      "expression": false,
      "start": 2416,
      "end": 2517
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g310",
        "optional": false,
        "typeAnnotation": null,
        "start": 2529,
        "end": 2533
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
                        "start": 2614,
                        "end": 2615
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2618,
                        "end": 2619
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2614,
                      "end": 2619
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
                        "start": 2621,
                        "end": 2622
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 2625,
                        "end": 2626
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2621,
                      "end": 2626
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2613,
                  "end": 2627
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": null,
                  "start": 2630,
                  "end": 2635
                },
                "definite": false,
                "start": 2613,
                "end": 2635
              }
            ],
            "declare": false,
            "start": 2607,
            "end": 2636
          }
        ],
        "start": 2536,
        "end": 2638
      },
      "expression": false,
      "start": 2519,
      "end": 2638
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g311",
        "optional": false,
        "typeAnnotation": null,
        "start": 2650,
        "end": 2654
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
                                  "start": 2731,
                                  "end": 2737
                                },
                                "start": 2729,
                                "end": 2737
                              },
                              "start": 2728,
                              "end": 2737
                            },
                            "init": {
                              "type": "YieldExpression",
                              "delegate": false,
                              "argument": null,
                              "start": 2740,
                              "end": 2745
                            },
                            "definite": false,
                            "start": 2728,
                            "end": 2745
                          }
                        ],
                        "declare": false,
                        "start": 2722,
                        "end": 2746
                      }
                    ],
                    "start": 2718,
                    "end": 2749
                  },
                  "expression": false,
                  "start": 2706,
                  "end": 2749
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 2705,
                "end": 2752
              },
              "start": 2698,
              "end": 2752
            },
            "directive": null,
            "start": 2698,
            "end": 2753
          }
        ],
        "start": 2657,
        "end": 2755
      },
      "expression": false,
      "start": 2640,
      "end": 2755
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2755
}
```
