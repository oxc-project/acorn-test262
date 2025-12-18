__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 230,
    "end": 238,
    "range": [
      230,
      238
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 239,
    "end": 242,
    "range": [
      239,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 246,
    "end": 252,
    "range": [
      246,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 255,
    "end": 261,
    "range": [
      255,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 269,
    "end": 275,
    "range": [
      269,
      275
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 276,
    "end": 282,
    "range": [
      276,
      282
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 285,
    "end": 288,
    "range": [
      285,
      288
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 289,
    "end": 297,
    "range": [
      289,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 298,
    "end": 300,
    "range": [
      298,
      300
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 303,
    "end": 309,
    "range": [
      303,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 310,
    "end": 313,
    "range": [
      310,
      313
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 314,
    "end": 316,
    "range": [
      314,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 330,
    "end": 338,
    "range": [
      330,
      338
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 339,
    "end": 343,
    "range": [
      339,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 347,
    "end": 353,
    "range": [
      347,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 356,
    "end": 362,
    "range": [
      356,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 408,
    "end": 414,
    "range": [
      408,
      414
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 415,
    "end": 421,
    "range": [
      415,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 424,
    "end": 427,
    "range": [
      424,
      427
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 428,
    "end": 436,
    "range": [
      428,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 437,
    "end": 439,
    "range": [
      437,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 446,
    "end": 448,
    "range": [
      446,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 450,
    "end": 452,
    "range": [
      450,
      452
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 478,
    "end": 486,
    "range": [
      478,
      486
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 487,
    "end": 491,
    "range": [
      487,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 495,
    "end": 501,
    "range": [
      495,
      501
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 504,
    "end": 510,
    "range": [
      504,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 580,
    "end": 586,
    "range": [
      580,
      586
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 587,
    "end": 593,
    "range": [
      587,
      593
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 596,
    "end": 599,
    "range": [
      596,
      599
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 600,
    "end": 608,
    "range": [
      600,
      608
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 609,
    "end": 611,
    "range": [
      609,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 618,
    "end": 625,
    "range": [
      618,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 627,
    "end": 629,
    "range": [
      627,
      629
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 631,
    "end": 632,
    "range": [
      631,
      632
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 655,
    "end": 663,
    "range": [
      655,
      663
    ]
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 664,
    "end": 668,
    "range": [
      664,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 670,
    "end": 671,
    "range": [
      670,
      671
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 672,
    "end": 678,
    "range": [
      672,
      678
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 679,
    "end": 680,
    "range": [
      679,
      680
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 681,
    "end": 687,
    "range": [
      681,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 690,
    "end": 697,
    "range": [
      690,
      697
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 697,
    "end": 698,
    "range": [
      697,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 705,
    "end": 711,
    "range": [
      705,
      711
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 712,
    "end": 718,
    "range": [
      712,
      718
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 721,
    "end": 724,
    "range": [
      721,
      724
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 725,
    "end": 733,
    "range": [
      725,
      733
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 771,
    "end": 773,
    "range": [
      771,
      773
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 774,
    "end": 780,
    "range": [
      774,
      780
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 781,
    "end": 782,
    "range": [
      781,
      782
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 783,
    "end": 786,
    "range": [
      783,
      786
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 787,
    "end": 795,
    "range": [
      787,
      795
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 825,
    "end": 827,
    "range": [
      825,
      827
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 829,
    "end": 830,
    "range": [
      829,
      830
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 844,
    "end": 845,
    "range": [
      844,
      845
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 846,
    "end": 854,
    "range": [
      846,
      854
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 855,
    "end": 859,
    "range": [
      855,
      859
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 859,
    "end": 860,
    "range": [
      859,
      860
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 860,
    "end": 861,
    "range": [
      860,
      861
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 863,
    "end": 869,
    "range": [
      863,
      869
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 870,
    "end": 871,
    "range": [
      870,
      871
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 872,
    "end": 878,
    "range": [
      872,
      878
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 879,
    "end": 880,
    "range": [
      879,
      880
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 881,
    "end": 888,
    "range": [
      881,
      888
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 888,
    "end": 889,
    "range": [
      888,
      889
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 890,
    "end": 891,
    "range": [
      890,
      891
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 991,
    "end": 994,
    "range": [
      991,
      994
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 995,
    "end": 996,
    "range": [
      995,
      996
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 996,
    "end": 997,
    "range": [
      996,
      997
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 998,
    "end": 1004,
    "range": [
      998,
      1004
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1005,
    "end": 1006,
    "range": [
      1005,
      1006
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1007,
    "end": 1014,
    "range": [
      1007,
      1014
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1014,
    "end": 1015,
    "range": [
      1014,
      1015
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1020,
    "end": 1026,
    "range": [
      1020,
      1026
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1027,
    "end": 1033,
    "range": [
      1027,
      1033
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1034,
    "end": 1035,
    "range": [
      1034,
      1035
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1036,
    "end": 1039,
    "range": [
      1036,
      1039
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1040,
    "end": 1048,
    "range": [
      1040,
      1048
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1086,
    "end": 1088,
    "range": [
      1086,
      1088
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1089,
    "end": 1090,
    "range": [
      1089,
      1090
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1090,
    "end": 1091,
    "range": [
      1090,
      1091
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1091,
    "end": 1092,
    "range": [
      1091,
      1092
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1093,
    "end": 1094,
    "range": [
      1093,
      1094
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1095,
    "end": 1096,
    "range": [
      1095,
      1096
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1096,
    "end": 1097,
    "range": [
      1096,
      1097
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1098,
    "end": 1100,
    "range": [
      1098,
      1100
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1101,
    "end": 1102,
    "range": [
      1101,
      1102
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1102,
    "end": 1108,
    "range": [
      1102,
      1108
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1109,
    "end": 1110,
    "range": [
      1109,
      1110
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1111,
    "end": 1114,
    "range": [
      1111,
      1114
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 1115,
    "end": 1123,
    "range": [
      1115,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1153,
    "end": 1155,
    "range": [
      1153,
      1155
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1156,
    "end": 1157,
    "range": [
      1156,
      1157
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1157,
    "end": 1158,
    "range": [
      1157,
      1158
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1158,
    "end": 1159,
    "range": [
      1158,
      1159
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1159,
    "end": 1160,
    "range": [
      1159,
      1160
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1174,
    "end": 1175,
    "range": [
      1174,
      1175
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1176,
    "end": 1184,
    "range": [
      1176,
      1184
    ]
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1185,
    "end": 1189,
    "range": [
      1185,
      1189
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1189,
    "end": 1190,
    "range": [
      1189,
      1190
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1190,
    "end": 1191,
    "range": [
      1190,
      1191
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1191,
    "end": 1192,
    "range": [
      1191,
      1192
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1193,
    "end": 1199,
    "range": [
      1193,
      1199
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1200,
    "end": 1201,
    "range": [
      1200,
      1201
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1202,
    "end": 1208,
    "range": [
      1202,
      1208
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1209,
    "end": 1210,
    "range": [
      1209,
      1210
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1211,
    "end": 1218,
    "range": [
      1211,
      1218
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1218,
    "end": 1219,
    "range": [
      1218,
      1219
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1220,
    "end": 1221,
    "range": [
      1220,
      1221
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1250,
    "end": 1256,
    "range": [
      1250,
      1256
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1257,
    "end": 1263,
    "range": [
      1257,
      1263
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1264,
    "end": 1265,
    "range": [
      1264,
      1265
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1266,
    "end": 1269,
    "range": [
      1266,
      1269
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1270,
    "end": 1278,
    "range": [
      1270,
      1278
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1316,
    "end": 1318,
    "range": [
      1316,
      1318
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1319,
    "end": 1320,
    "range": [
      1319,
      1320
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1320,
    "end": 1326,
    "range": [
      1320,
      1326
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1327,
    "end": 1328,
    "range": [
      1327,
      1328
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1329,
    "end": 1332,
    "range": [
      1329,
      1332
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 1333,
    "end": 1341,
    "range": [
      1333,
      1341
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1370,
    "end": 1371,
    "range": [
      1370,
      1371
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1372,
    "end": 1373,
    "range": [
      1372,
      1373
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1393,
    "end": 1394,
    "range": [
      1393,
      1394
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1395,
    "end": 1396,
    "range": [
      1395,
      1396
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1397,
    "end": 1400,
    "range": [
      1397,
      1400
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1401,
    "end": 1403,
    "range": [
      1401,
      1403
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1403,
    "end": 1404,
    "range": [
      1403,
      1404
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1416,
    "end": 1417,
    "range": [
      1416,
      1417
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1418,
    "end": 1426,
    "range": [
      1418,
      1426
    ]
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1427,
    "end": 1431,
    "range": [
      1427,
      1431
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1431,
    "end": 1432,
    "range": [
      1431,
      1432
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1432,
    "end": 1433,
    "range": [
      1432,
      1433
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1433,
    "end": 1434,
    "range": [
      1433,
      1434
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1435,
    "end": 1441,
    "range": [
      1435,
      1441
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1442,
    "end": 1443,
    "range": [
      1442,
      1443
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1444,
    "end": 1450,
    "range": [
      1444,
      1450
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1451,
    "end": 1452,
    "range": [
      1451,
      1452
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1453,
    "end": 1460,
    "range": [
      1453,
      1460
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1460,
    "end": 1461,
    "range": [
      1460,
      1461
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1462,
    "end": 1463,
    "range": [
      1462,
      1463
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1468,
    "end": 1471,
    "range": [
      1468,
      1471
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1472,
    "end": 1473,
    "range": [
      1472,
      1473
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1473,
    "end": 1474,
    "range": [
      1473,
      1474
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1475,
    "end": 1481,
    "range": [
      1475,
      1481
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1481,
    "end": 1482,
    "range": [
      1481,
      1482
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1483,
    "end": 1490,
    "range": [
      1483,
      1490
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1491,
    "end": 1492,
    "range": [
      1491,
      1492
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1493,
    "end": 1499,
    "range": [
      1493,
      1499
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1499,
    "end": 1500,
    "range": [
      1499,
      1500
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1505,
    "end": 1508,
    "range": [
      1505,
      1508
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
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
    "value": "number",
    "start": 1512,
    "end": 1518,
    "range": [
      1512,
      1518
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1518,
    "end": 1519,
    "range": [
      1518,
      1519
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1520,
    "end": 1527,
    "range": [
      1520,
      1527
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1528,
    "end": 1529,
    "range": [
      1528,
      1529
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1530,
    "end": 1536,
    "range": [
      1530,
      1536
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1536,
    "end": 1537,
    "range": [
      1536,
      1537
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1576,
    "end": 1582,
    "range": [
      1576,
      1582
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1583,
    "end": 1589,
    "range": [
      1583,
      1589
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1590,
    "end": 1591,
    "range": [
      1590,
      1591
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1592,
    "end": 1595,
    "range": [
      1592,
      1595
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1596,
    "end": 1604,
    "range": [
      1596,
      1604
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1613,
    "end": 1615,
    "range": [
      1613,
      1615
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1616,
    "end": 1617,
    "range": [
      1616,
      1617
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1617,
    "end": 1618,
    "range": [
      1617,
      1618
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1618,
    "end": 1619,
    "range": [
      1618,
      1619
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1620,
    "end": 1621,
    "range": [
      1620,
      1621
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1622,
    "end": 1623,
    "range": [
      1622,
      1623
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1623,
    "end": 1624,
    "range": [
      1623,
      1624
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1653,
    "end": 1655,
    "range": [
      1653,
      1655
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1656,
    "end": 1657,
    "range": [
      1656,
      1657
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1657,
    "end": 1663,
    "range": [
      1657,
      1663
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1664,
    "end": 1665,
    "range": [
      1664,
      1665
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1666,
    "end": 1669,
    "range": [
      1666,
      1669
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 1670,
    "end": 1678,
    "range": [
      1670,
      1678
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1716,
    "end": 1717,
    "range": [
      1716,
      1717
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1718,
    "end": 1719,
    "range": [
      1718,
      1719
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1719,
    "end": 1720,
    "range": [
      1719,
      1720
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1720,
    "end": 1721,
    "range": [
      1720,
      1721
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1722,
    "end": 1723,
    "range": [
      1722,
      1723
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1724,
    "end": 1726,
    "range": [
      1724,
      1726
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1726,
    "end": 1727,
    "range": [
      1726,
      1727
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1728,
    "end": 1730,
    "range": [
      1728,
      1730
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1731,
    "end": 1732,
    "range": [
      1731,
      1732
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1732,
    "end": 1733,
    "range": [
      1732,
      1733
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 1733,
    "end": 1741,
    "range": [
      1733,
      1741
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1741,
    "end": 1742,
    "range": [
      1741,
      1742
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1742,
    "end": 1743,
    "range": [
      1742,
      1743
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1743,
    "end": 1744,
    "range": [
      1743,
      1744
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1813,
    "end": 1814,
    "range": [
      1813,
      1814
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1815,
    "end": 1816,
    "range": [
      1815,
      1816
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1816,
    "end": 1817,
    "range": [
      1816,
      1817
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1817,
    "end": 1818,
    "range": [
      1817,
      1818
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1819,
    "end": 1820,
    "range": [
      1819,
      1820
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1821,
    "end": 1822,
    "range": [
      1821,
      1822
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1822,
    "end": 1823,
    "range": [
      1822,
      1823
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1824,
    "end": 1826,
    "range": [
      1824,
      1826
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1827,
    "end": 1828,
    "range": [
      1827,
      1828
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1828,
    "end": 1829,
    "range": [
      1828,
      1829
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 1829,
    "end": 1837,
    "range": [
      1829,
      1837
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1837,
    "end": 1838,
    "range": [
      1837,
      1838
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1838,
    "end": 1839,
    "range": [
      1838,
      1839
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1839,
    "end": 1840,
    "range": [
      1839,
      1840
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1840,
    "end": 1841,
    "range": [
      1840,
      1841
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1841,
    "end": 1842,
    "range": [
      1841,
      1842
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1842,
    "end": 1843,
    "range": [
      1842,
      1843
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1873,
    "end": 1874,
    "range": [
      1873,
      1874
    ]
  }
]
```
