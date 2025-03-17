__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2756,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 57,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 56,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 56,
            "name": "iterableIterator",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 56,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 32,
                "end": 56,
                "typeName": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 48,
                  "name": "IterableIterator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 48,
                  "end": 56,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 49,
                      "end": 55
                    }
                  ]
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
      "start": 58,
      "end": 118,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 72,
          "end": 117,
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 117,
            "name": "generator",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 81,
              "end": 117,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 83,
                "end": 117,
                "typeName": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 92,
                  "name": "Generator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 92,
                  "end": 117,
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
                  ]
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
      "start": 119,
      "end": 146,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 133,
          "end": 145,
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 145,
            "name": "never",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 138,
              "end": 145,
              "typeAnnotation": {
                "type": "TSNeverKeyword",
                "start": 140,
                "end": 145
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
      "type": "FunctionDeclaration",
      "start": 148,
      "end": 203,
      "id": {
        "type": "Identifier",
        "start": 158,
        "end": 162,
        "name": "g000",
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
        "start": 165,
        "end": 203,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 241,
      "end": 311,
      "id": {
        "type": "Identifier",
        "start": 251,
        "end": 255,
        "name": "g001",
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
        "start": 258,
        "end": 311,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 303,
            "end": 309,
            "expression": {
              "type": "YieldExpression",
              "start": 303,
              "end": 308,
              "delegate": false,
              "argument": null
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
      "start": 313,
      "end": 382,
      "id": {
        "type": "Identifier",
        "start": 323,
        "end": 327,
        "name": "g002",
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
        "start": 330,
        "end": 382,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 372,
            "end": 380,
            "expression": {
              "type": "YieldExpression",
              "start": 372,
              "end": 379,
              "delegate": false,
              "argument": {
                "type": "Literal",
                "start": 378,
                "end": 379,
                "value": 1,
                "raw": "1"
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
      "start": 384,
      "end": 456,
      "id": {
        "type": "Identifier",
        "start": 394,
        "end": 398,
        "name": "g003",
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
        "start": 401,
        "end": 456,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 444,
            "end": 454,
            "expression": {
              "type": "YieldExpression",
              "start": 444,
              "end": 453,
              "delegate": true,
              "argument": {
                "type": "ArrayExpression",
                "start": 451,
                "end": 453,
                "elements": []
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
      "start": 458,
      "end": 545,
      "id": {
        "type": "Identifier",
        "start": 468,
        "end": 472,
        "name": "g004",
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
        "start": 475,
        "end": 545,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 519,
            "end": 543,
            "expression": {
              "type": "YieldExpression",
              "start": 519,
              "end": 542,
              "delegate": true,
              "argument": {
                "type": "Identifier",
                "start": 526,
                "end": 542,
                "name": "iterableIterator",
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
      "start": 547,
      "end": 635,
      "id": {
        "type": "Identifier",
        "start": 557,
        "end": 561,
        "name": "g005",
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
        "start": 564,
        "end": 635,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 606,
            "end": 633,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 612,
                "end": 632,
                "id": {
                  "type": "Identifier",
                  "start": 612,
                  "end": 613,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 616,
                  "end": 632,
                  "delegate": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 623,
                    "end": 632,
                    "name": "generator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 637,
      "end": 718,
      "id": {
        "type": "Identifier",
        "start": 647,
        "end": 651,
        "name": "g006",
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
        "start": 654,
        "end": 718,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 695,
            "end": 703,
            "expression": {
              "type": "YieldExpression",
              "start": 695,
              "end": 702,
              "delegate": false,
              "argument": {
                "type": "Literal",
                "start": 701,
                "end": 702,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 708,
            "end": 716,
            "expression": {
              "type": "YieldExpression",
              "start": 708,
              "end": 715,
              "delegate": false,
              "argument": {
                "type": "Literal",
                "start": 714,
                "end": 715,
                "value": 2,
                "raw": "2"
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
      "start": 720,
      "end": 792,
      "id": {
        "type": "Identifier",
        "start": 730,
        "end": 734,
        "name": "g007",
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
        "start": 737,
        "end": 792,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 778,
            "end": 790,
            "expression": {
              "type": "YieldExpression",
              "start": 778,
              "end": 789,
              "delegate": false,
              "argument": {
                "type": "Identifier",
                "start": 784,
                "end": 789,
                "name": "never",
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
      "start": 831,
      "end": 902,
      "id": {
        "type": "Identifier",
        "start": 841,
        "end": 845,
        "name": "g102",
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
        "start": 848,
        "end": 902,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 891,
            "end": 900,
            "argument": {
              "type": "Literal",
              "start": 898,
              "end": 899,
              "value": 1,
              "raw": "1"
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
      "start": 904,
      "end": 1007,
      "id": {
        "type": "Identifier",
        "start": 914,
        "end": 918,
        "name": "g103",
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
        "start": 921,
        "end": 1007,
        "body": [
          {
            "type": "IfStatement",
            "start": 963,
            "end": 991,
            "test": {
              "type": "CallExpression",
              "start": 967,
              "end": 980,
              "callee": {
                "type": "MemberExpression",
                "start": 967,
                "end": 978,
                "object": {
                  "type": "Identifier",
                  "start": 967,
                  "end": 971,
                  "name": "Math",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 972,
                  "end": 978,
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
            "consequent": {
              "type": "ReturnStatement",
              "start": 982,
              "end": 991,
              "argument": {
                "type": "Literal",
                "start": 989,
                "end": 990,
                "value": 1,
                "raw": "1"
              }
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "start": 996,
            "end": 1005,
            "argument": {
              "type": "Literal",
              "start": 1003,
              "end": 1004,
              "value": 2,
              "raw": "2"
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
      "start": 1009,
      "end": 1083,
      "id": {
        "type": "Identifier",
        "start": 1019,
        "end": 1023,
        "name": "g104",
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
        "start": 1026,
        "end": 1083,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1068,
            "end": 1081,
            "argument": {
              "type": "Identifier",
              "start": 1075,
              "end": 1080,
              "name": "never",
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
      "start": 1120,
      "end": 1204,
      "id": {
        "type": "Identifier",
        "start": 1130,
        "end": 1134,
        "name": "g201",
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
        "start": 1137,
        "end": 1204,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1178,
            "end": 1202,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1182,
                "end": 1201,
                "id": {
                  "type": "Identifier",
                  "start": 1182,
                  "end": 1191,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1183,
                    "end": 1191,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1185,
                      "end": 1191
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 1194,
                  "end": 1201,
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "start": 1200,
                    "end": 1201,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1206,
      "end": 1317,
      "id": {
        "type": "Identifier",
        "start": 1216,
        "end": 1220,
        "name": "g202",
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
        "start": 1223,
        "end": 1317,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1262,
            "end": 1286,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1266,
                "end": 1285,
                "id": {
                  "type": "Identifier",
                  "start": 1266,
                  "end": 1275,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1267,
                    "end": 1275,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1269,
                      "end": 1275
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 1278,
                  "end": 1285,
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "start": 1284,
                    "end": 1285,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1291,
            "end": 1315,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1295,
                "end": 1314,
                "id": {
                  "type": "Identifier",
                  "start": 1295,
                  "end": 1304,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1296,
                    "end": 1304,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1298,
                      "end": 1304
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 1307,
                  "end": 1314,
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "start": 1313,
                    "end": 1314,
                    "value": 2,
                    "raw": "2"
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1319,
      "end": 1356,
      "id": {
        "type": "Identifier",
        "start": 1336,
        "end": 1338,
        "name": "f1",
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
          "start": 1339,
          "end": 1348,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1340,
            "end": 1348,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1342,
              "end": 1348
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
        "start": 1349,
        "end": 1355,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1351,
          "end": 1355
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1357,
      "end": 1394,
      "id": {
        "type": "Identifier",
        "start": 1374,
        "end": 1376,
        "name": "f1",
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
          "start": 1377,
          "end": 1386,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1378,
            "end": 1386,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1380,
              "end": 1386
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
        "start": 1387,
        "end": 1393,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1389,
          "end": 1393
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1396,
      "end": 1475,
      "id": {
        "type": "Identifier",
        "start": 1406,
        "end": 1410,
        "name": "g203",
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
        "start": 1413,
        "end": 1475,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1451,
            "end": 1473,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1457,
                "end": 1472,
                "id": {
                  "type": "Identifier",
                  "start": 1457,
                  "end": 1458,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1461,
                  "end": 1472,
                  "callee": {
                    "type": "Identifier",
                    "start": 1461,
                    "end": 1463,
                    "name": "f1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "YieldExpression",
                      "start": 1464,
                      "end": 1471,
                      "delegate": false,
                      "argument": {
                        "type": "Literal",
                        "start": 1470,
                        "end": 1471,
                        "value": 1,
                        "raw": "1"
                      }
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
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1477,
      "end": 1509,
      "id": {
        "type": "Identifier",
        "start": 1494,
        "end": 1496,
        "name": "f2",
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
          "start": 1500,
          "end": 1504,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1501,
            "end": 1504,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1503,
              "end": 1504,
              "typeName": {
                "type": "Identifier",
                "start": 1503,
                "end": 1504,
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
        "start": 1496,
        "end": 1499,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1497,
            "end": 1498,
            "name": {
              "type": "Identifier",
              "start": 1497,
              "end": 1498,
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
        "start": 1505,
        "end": 1508,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1507,
          "end": 1508,
          "typeName": {
            "type": "Identifier",
            "start": 1507,
            "end": 1508,
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
      "type": "FunctionDeclaration",
      "start": 1511,
      "end": 1587,
      "id": {
        "type": "Identifier",
        "start": 1521,
        "end": 1525,
        "name": "g204",
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
        "start": 1528,
        "end": 1587,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1563,
            "end": 1585,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1569,
                "end": 1584,
                "id": {
                  "type": "Identifier",
                  "start": 1569,
                  "end": 1570,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1573,
                  "end": 1584,
                  "callee": {
                    "type": "Identifier",
                    "start": 1573,
                    "end": 1575,
                    "name": "f2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "YieldExpression",
                      "start": 1576,
                      "end": 1583,
                      "delegate": false,
                      "argument": {
                        "type": "Literal",
                        "start": 1582,
                        "end": 1583,
                        "value": 1,
                        "raw": "1"
                      }
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
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1625,
      "end": 1707,
      "id": {
        "type": "Identifier",
        "start": 1635,
        "end": 1639,
        "name": "g301",
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
        "start": 1642,
        "end": 1707,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1687,
            "end": 1693,
            "expression": {
              "type": "YieldExpression",
              "start": 1687,
              "end": 1692,
              "delegate": false,
              "argument": null
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 1698,
            "end": 1705,
            "argument": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1709,
      "end": 1790,
      "id": {
        "type": "Identifier",
        "start": 1719,
        "end": 1723,
        "name": "g302",
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
        "start": 1726,
        "end": 1790,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1768,
            "end": 1776,
            "expression": {
              "type": "YieldExpression",
              "start": 1768,
              "end": 1775,
              "delegate": false,
              "argument": {
                "type": "Literal",
                "start": 1774,
                "end": 1775,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 1781,
            "end": 1788,
            "argument": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1792,
      "end": 1880,
      "id": {
        "type": "Identifier",
        "start": 1802,
        "end": 1806,
        "name": "g303",
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
        "start": 1809,
        "end": 1880,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1856,
            "end": 1862,
            "expression": {
              "type": "YieldExpression",
              "start": 1856,
              "end": 1861,
              "delegate": false,
              "argument": null
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 1867,
            "end": 1878,
            "argument": {
              "type": "Literal",
              "start": 1874,
              "end": 1877,
              "value": "a",
              "raw": "\"a\""
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
      "start": 1882,
      "end": 1969,
      "id": {
        "type": "Identifier",
        "start": 1892,
        "end": 1896,
        "name": "g304",
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
        "start": 1899,
        "end": 1969,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1943,
            "end": 1951,
            "expression": {
              "type": "YieldExpression",
              "start": 1943,
              "end": 1950,
              "delegate": false,
              "argument": {
                "type": "Literal",
                "start": 1949,
                "end": 1950,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 1956,
            "end": 1967,
            "argument": {
              "type": "Literal",
              "start": 1963,
              "end": 1966,
              "value": "a",
              "raw": "\"a\""
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
      "start": 1971,
      "end": 2127,
      "id": {
        "type": "Identifier",
        "start": 1981,
        "end": 1985,
        "name": "g305",
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
        "start": 1988,
        "end": 2127,
        "body": [
          {
            "type": "IfStatement",
            "start": 2034,
            "end": 2061,
            "test": {
              "type": "CallExpression",
              "start": 2038,
              "end": 2051,
              "callee": {
                "type": "MemberExpression",
                "start": 2038,
                "end": 2049,
                "object": {
                  "type": "Identifier",
                  "start": 2038,
                  "end": 2042,
                  "name": "Math",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2043,
                  "end": 2049,
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
            "consequent": {
              "type": "ExpressionStatement",
              "start": 2053,
              "end": 2061,
              "expression": {
                "type": "YieldExpression",
                "start": 2053,
                "end": 2060,
                "delegate": false,
                "argument": {
                  "type": "Literal",
                  "start": 2059,
                  "end": 2060,
                  "value": 1,
                  "raw": "1"
                }
              },
              "directive": null
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2066,
            "end": 2074,
            "expression": {
              "type": "YieldExpression",
              "start": 2066,
              "end": 2073,
              "delegate": false,
              "argument": {
                "type": "Literal",
                "start": 2072,
                "end": 2073,
                "value": 2,
                "raw": "2"
              }
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 2079,
            "end": 2109,
            "test": {
              "type": "CallExpression",
              "start": 2083,
              "end": 2096,
              "callee": {
                "type": "MemberExpression",
                "start": 2083,
                "end": 2094,
                "object": {
                  "type": "Identifier",
                  "start": 2083,
                  "end": 2087,
                  "name": "Math",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2088,
                  "end": 2094,
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
            "consequent": {
              "type": "ReturnStatement",
              "start": 2098,
              "end": 2109,
              "argument": {
                "type": "Literal",
                "start": 2105,
                "end": 2108,
                "value": "a",
                "raw": "\"a\""
              }
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "start": 2114,
            "end": 2125,
            "argument": {
              "type": "Literal",
              "start": 2121,
              "end": 2124,
              "value": "b",
              "raw": "\"b\""
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
      "start": 2129,
      "end": 2231,
      "id": {
        "type": "Identifier",
        "start": 2139,
        "end": 2143,
        "name": "g306",
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
        "start": 2146,
        "end": 2231,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2188,
            "end": 2212,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2194,
                "end": 2211,
                "id": {
                  "type": "Identifier",
                  "start": 2194,
                  "end": 2201,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2195,
                    "end": 2201,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 2197,
                      "end": 2201,
                      "literal": {
                        "type": "Literal",
                        "start": 2197,
                        "end": 2201,
                        "value": "hi",
                        "raw": "\"hi\""
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 2204,
                  "end": 2211,
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "start": 2210,
                    "end": 2211,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 2217,
            "end": 2229,
            "argument": {
              "type": "Literal",
              "start": 2224,
              "end": 2228,
              "value": true,
              "raw": "true"
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
      "start": 2233,
      "end": 2323,
      "id": {
        "type": "Identifier",
        "start": 2243,
        "end": 2247,
        "name": "g307",
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
        "start": 2253,
        "end": 2323,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2286,
            "end": 2307,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2292,
                "end": 2306,
                "id": {
                  "type": "Identifier",
                  "start": 2292,
                  "end": 2296,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2293,
                    "end": 2296,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2295,
                      "end": 2296,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2295,
                        "end": 2296,
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
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 2299,
                  "end": 2306,
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "start": 2305,
                    "end": 2306,
                    "value": 0,
                    "raw": "0"
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 2312,
            "end": 2321,
            "argument": {
              "type": "Identifier",
              "start": 2319,
              "end": 2320,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2247,
        "end": 2250,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2248,
            "end": 2249,
            "name": {
              "type": "Identifier",
              "start": 2248,
              "end": 2249,
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2325,
      "end": 2414,
      "id": {
        "type": "Identifier",
        "start": 2335,
        "end": 2339,
        "name": "g308",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2343,
          "end": 2347,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2344,
            "end": 2347,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2346,
              "end": 2347,
              "typeName": {
                "type": "Identifier",
                "start": 2346,
                "end": 2347,
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
      "body": {
        "type": "BlockStatement",
        "start": 2349,
        "end": 2414,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2377,
            "end": 2398,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2383,
                "end": 2397,
                "id": {
                  "type": "Identifier",
                  "start": 2383,
                  "end": 2387,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2384,
                    "end": 2387,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2386,
                      "end": 2387,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2386,
                        "end": 2387,
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
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 2390,
                  "end": 2397,
                  "delegate": false,
                  "argument": {
                    "type": "Identifier",
                    "start": 2396,
                    "end": 2397,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 2403,
            "end": 2412,
            "argument": {
              "type": "Identifier",
              "start": 2410,
              "end": 2411,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2339,
        "end": 2342,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2340,
            "end": 2341,
            "name": {
              "type": "Identifier",
              "start": 2340,
              "end": 2341,
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2416,
      "end": 2517,
      "id": {
        "type": "Identifier",
        "start": 2426,
        "end": 2430,
        "name": "g309",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2440,
          "end": 2444,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2441,
            "end": 2444,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2443,
              "end": 2444,
              "typeName": {
                "type": "Identifier",
                "start": 2443,
                "end": 2444,
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
        },
        {
          "type": "Identifier",
          "start": 2446,
          "end": 2450,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2447,
            "end": 2450,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2449,
              "end": 2450,
              "typeName": {
                "type": "Identifier",
                "start": 2449,
                "end": 2450,
                "name": "U",
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
        "start": 2452,
        "end": 2517,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2480,
            "end": 2501,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2486,
                "end": 2500,
                "id": {
                  "type": "Identifier",
                  "start": 2486,
                  "end": 2490,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2487,
                    "end": 2490,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2489,
                      "end": 2490,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2489,
                        "end": 2490,
                        "name": "V",
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
                  "type": "YieldExpression",
                  "start": 2493,
                  "end": 2500,
                  "delegate": false,
                  "argument": {
                    "type": "Identifier",
                    "start": 2499,
                    "end": 2500,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 2506,
            "end": 2515,
            "argument": {
              "type": "Identifier",
              "start": 2513,
              "end": 2514,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2430,
        "end": 2439,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2431,
            "end": 2432,
            "name": {
              "type": "Identifier",
              "start": 2431,
              "end": 2432,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 2434,
            "end": 2435,
            "name": {
              "type": "Identifier",
              "start": 2434,
              "end": 2435,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2437,
            "end": 2438,
            "name": {
              "type": "Identifier",
              "start": 2437,
              "end": 2438,
              "name": "V",
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2519,
      "end": 2638,
      "id": {
        "type": "Identifier",
        "start": 2529,
        "end": 2533,
        "name": "g310",
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
        "start": 2536,
        "end": 2638,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2607,
            "end": 2636,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2613,
                "end": 2635,
                "id": {
                  "type": "ArrayPattern",
                  "start": 2613,
                  "end": 2627,
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "start": 2614,
                      "end": 2619,
                      "left": {
                        "type": "Identifier",
                        "start": 2614,
                        "end": 2615,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2618,
                        "end": 2619,
                        "value": 1,
                        "raw": "1"
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "AssignmentPattern",
                      "start": 2621,
                      "end": 2626,
                      "left": {
                        "type": "Identifier",
                        "start": 2621,
                        "end": 2622,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2625,
                        "end": 2626,
                        "value": 2,
                        "raw": "2"
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 2630,
                  "end": 2635,
                  "delegate": false,
                  "argument": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2640,
      "end": 2755,
      "id": {
        "type": "Identifier",
        "start": 2650,
        "end": 2654,
        "name": "g311",
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
        "start": 2657,
        "end": 2755,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2698,
            "end": 2753,
            "expression": {
              "type": "YieldExpression",
              "start": 2698,
              "end": 2752,
              "delegate": true,
              "argument": {
                "type": "CallExpression",
                "start": 2705,
                "end": 2752,
                "callee": {
                  "type": "FunctionExpression",
                  "start": 2706,
                  "end": 2749,
                  "id": null,
                  "expression": false,
                  "generator": true,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 2718,
                    "end": 2749,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 2722,
                        "end": 2746,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 2728,
                            "end": 2745,
                            "id": {
                              "type": "Identifier",
                              "start": 2728,
                              "end": 2737,
                              "name": "y",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 2729,
                                "end": 2737,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 2731,
                                  "end": 2737
                                }
                              },
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "YieldExpression",
                              "start": 2740,
                              "end": 2745,
                              "delegate": false,
                              "argument": null
                            },
                            "definite": false
                          }
                        ],
                        "kind": "const",
                        "declare": false
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
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
