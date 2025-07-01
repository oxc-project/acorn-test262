__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 239,
        "end": 242
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 246,
                  "end": 252
                },
                {
                  "type": "TSStringKeyword",
                  "start": 255,
                  "end": 261
                }
              ],
              "start": 246,
              "end": 261
            },
            "start": 244,
            "end": 261
          },
          "start": 243,
          "end": 261
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 283,
                    "end": 284
                  },
                  "prefix": true,
                  "start": 276,
                  "end": 284
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 289,
                  "end": 297
                },
                "start": 276,
                "end": 297
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 301,
                    "end": 302
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 303,
                    "end": 309
                  },
                  "optional": false,
                  "computed": false,
                  "start": 301,
                  "end": 309
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 314,
                  "end": 316
                },
                "start": 301,
                "end": 316
              },
              "start": 276,
              "end": 316
            },
            "start": 269,
            "end": 317
          }
        ],
        "start": 263,
        "end": 329
      },
      "expression": false,
      "start": 230,
      "end": 329
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 339,
        "end": 343
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 347,
                  "end": 353
                },
                {
                  "type": "TSStringKeyword",
                  "start": 356,
                  "end": 362
                }
              ],
              "start": 347,
              "end": 362
            },
            "start": 345,
            "end": 362
          },
          "start": 344,
          "end": 362
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 422,
                    "end": 423
                  },
                  "prefix": true,
                  "start": 415,
                  "end": 423
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 428,
                  "end": 436
                },
                "start": 415,
                "end": 436
              },
              "operator": "||",
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 442,
                    "end": 443
                  },
                  "right": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 446,
                    "end": 448
                  },
                  "start": 442,
                  "end": 448
                },
                "operator": "||",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 453,
                  "end": 454
                },
                "start": 441,
                "end": 454
              },
              "start": 415,
              "end": 455
            },
            "start": 408,
            "end": 456
          }
        ],
        "start": 364,
        "end": 477
      },
      "expression": false,
      "start": 330,
      "end": 477
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 487,
        "end": 491
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 495,
                  "end": 501
                },
                {
                  "type": "TSStringKeyword",
                  "start": 504,
                  "end": 510
                }
              ],
              "start": 495,
              "end": 510
            },
            "start": 493,
            "end": 510
          },
          "start": 492,
          "end": 510
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 594,
                    "end": 595
                  },
                  "prefix": true,
                  "start": 587,
                  "end": 595
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 600,
                  "end": 608
                },
                "start": 587,
                "end": 608
              },
              "operator": "||",
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 614,
                    "end": 615
                  },
                  "right": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 618,
                    "end": 625
                  },
                  "start": 614,
                  "end": 625
                },
                "operator": "||",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 630,
                  "end": 631
                },
                "start": 613,
                "end": 631
              },
              "start": 587,
              "end": 632
            },
            "start": 580,
            "end": 633
          }
        ],
        "start": 512,
        "end": 654
      },
      "expression": false,
      "start": 478,
      "end": 654
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 664,
        "end": 668
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 672,
                  "end": 678
                },
                {
                  "type": "TSStringKeyword",
                  "start": 681,
                  "end": 687
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 690,
                  "end": 697
                }
              ],
              "start": 672,
              "end": 697
            },
            "start": 670,
            "end": 697
          },
          "start": 669,
          "end": 697
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 719,
                      "end": 720
                    },
                    "prefix": true,
                    "start": 712,
                    "end": 720
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 725,
                    "end": 733
                  },
                  "start": 712,
                  "end": 733
                },
                "operator": "||",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 781,
                      "end": 782
                    },
                    "prefix": true,
                    "start": 774,
                    "end": 782
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "number",
                    "raw": "\"number\"",
                    "start": 787,
                    "end": 795
                  },
                  "start": 774,
                  "end": 795
                },
                "start": 712,
                "end": 795
              },
              "operator": "||",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 828,
                "end": 829
              },
              "start": 712,
              "end": 829
            },
            "start": 705,
            "end": 830
          }
        ],
        "start": 699,
        "end": 845
      },
      "expression": false,
      "start": 655,
      "end": 845
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 855,
        "end": 859
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 863,
                  "end": 869
                },
                {
                  "type": "TSStringKeyword",
                  "start": 872,
                  "end": 878
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 881,
                  "end": 888
                }
              ],
              "start": 863,
              "end": 888
            },
            "start": 861,
            "end": 888
          },
          "start": 860,
          "end": 888
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 998,
                          "end": 1004
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1007,
                          "end": 1014
                        }
                      ],
                      "start": 998,
                      "end": 1014
                    },
                    "start": 996,
                    "end": 1014
                  },
                  "start": 995,
                  "end": 1014
                },
                "init": null,
                "definite": false,
                "start": 995,
                "end": 1014
              }
            ],
            "declare": false,
            "start": 991,
            "end": 1015
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1034,
                    "end": 1035
                  },
                  "prefix": true,
                  "start": 1027,
                  "end": 1035
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 1040,
                  "end": 1048
                },
                "start": 1027,
                "end": 1048
              },
              "operator": "||",
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1091,
                    "end": 1092
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1095,
                    "end": 1096
                  },
                  "start": 1091,
                  "end": 1096
                },
                "operator": "||",
                "right": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1109,
                        "end": 1110
                      },
                      "prefix": true,
                      "start": 1102,
                      "end": 1110
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "number",
                      "raw": "\"number\"",
                      "start": 1115,
                      "end": 1123
                    },
                    "start": 1102,
                    "end": 1123
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1156,
                    "end": 1157
                  },
                  "start": 1102,
                  "end": 1157
                },
                "start": 1090,
                "end": 1158
              },
              "start": 1027,
              "end": 1159
            },
            "start": 1020,
            "end": 1160
          }
        ],
        "start": 890,
        "end": 1175
      },
      "expression": false,
      "start": 846,
      "end": 1175
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1185,
        "end": 1189
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1193,
                  "end": 1199
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1202,
                  "end": 1208
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 1211,
                  "end": 1218
                }
              ],
              "start": 1193,
              "end": 1218
            },
            "start": 1191,
            "end": 1218
          },
          "start": 1190,
          "end": 1218
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1264,
                    "end": 1265
                  },
                  "prefix": true,
                  "start": 1257,
                  "end": 1265
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 1270,
                  "end": 1278
                },
                "start": 1257,
                "end": 1278
              },
              "operator": "||",
              "right": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1327,
                      "end": 1328
                    },
                    "prefix": true,
                    "start": 1320,
                    "end": 1328
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Literal",
                    "value": "number",
                    "raw": "\"number\"",
                    "start": 1333,
                    "end": 1341
                  },
                  "start": 1320,
                  "end": 1341
                },
                "consequent": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1372,
                  "end": 1373
                },
                "alternate": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1395,
                    "end": 1396
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 1401,
                    "end": 1403
                  },
                  "start": 1395,
                  "end": 1403
                },
                "start": 1320,
                "end": 1403
              },
              "start": 1257,
              "end": 1404
            },
            "start": 1250,
            "end": 1404
          }
        ],
        "start": 1220,
        "end": 1417
      },
      "expression": false,
      "start": 1176,
      "end": 1417
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1427,
        "end": 1431
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1435,
                  "end": 1441
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1444,
                  "end": 1450
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 1453,
                  "end": 1460
                }
              ],
              "start": 1435,
              "end": 1460
            },
            "start": 1433,
            "end": 1460
          },
          "start": 1432,
          "end": 1460
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1475,
                          "end": 1481
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1483,
                          "end": 1490
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 1493,
                          "end": 1499
                        }
                      ],
                      "start": 1475,
                      "end": 1499
                    },
                    "start": 1473,
                    "end": 1499
                  },
                  "start": 1472,
                  "end": 1499
                },
                "init": null,
                "definite": false,
                "start": 1472,
                "end": 1499
              }
            ],
            "declare": false,
            "start": 1468,
            "end": 1500
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
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1512,
                          "end": 1518
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1520,
                          "end": 1527
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 1530,
                          "end": 1536
                        }
                      ],
                      "start": 1512,
                      "end": 1536
                    },
                    "start": 1510,
                    "end": 1536
                  },
                  "start": 1509,
                  "end": 1536
                },
                "init": null,
                "definite": false,
                "start": 1509,
                "end": 1536
              }
            ],
            "declare": false,
            "start": 1505,
            "end": 1537
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1590,
                    "end": 1591
                  },
                  "prefix": true,
                  "start": 1583,
                  "end": 1591
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 1596,
                  "end": 1604
                },
                "start": 1583,
                "end": 1604
              },
              "operator": "||",
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1618,
                    "end": 1619
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1622,
                    "end": 1623
                  },
                  "start": 1618,
                  "end": 1623
                },
                "operator": "||",
                "right": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1664,
                        "end": 1665
                      },
                      "prefix": true,
                      "start": 1657,
                      "end": 1665
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "number",
                      "raw": "\"number\"",
                      "start": 1670,
                      "end": 1678
                    },
                    "start": 1657,
                    "end": 1678
                  },
                  "consequent": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1720,
                        "end": 1721
                      },
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 1724,
                        "end": 1726
                      },
                      "start": 1720,
                      "end": 1726
                    },
                    "operator": "&&",
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1731,
                          "end": 1732
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1733,
                          "end": 1741
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1731,
                        "end": 1741
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1731,
                      "end": 1743
                    },
                    "start": 1719,
                    "end": 1743
                  },
                  "alternate": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1817,
                        "end": 1818
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1821,
                        "end": 1822
                      },
                      "start": 1817,
                      "end": 1822
                    },
                    "operator": "&&",
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1827,
                          "end": 1828
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1829,
                          "end": 1837
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1827,
                        "end": 1837
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1827,
                      "end": 1839
                    },
                    "start": 1816,
                    "end": 1839
                  },
                  "start": 1657,
                  "end": 1840
                },
                "start": 1617,
                "end": 1841
              },
              "start": 1583,
              "end": 1842
            },
            "start": 1576,
            "end": 1843
          }
        ],
        "start": 1462,
        "end": 1874
      },
      "expression": false,
      "start": 1418,
      "end": 1874
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 230,
  "end": 1874
}
```
