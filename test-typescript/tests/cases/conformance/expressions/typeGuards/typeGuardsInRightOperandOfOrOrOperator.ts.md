__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 230,
  "end": 1875,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 230,
      "end": 329,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 263,
        "end": 329,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 269,
            "end": 317,
            "argument": {
              "type": "LogicalExpression",
              "start": 276,
              "end": 316,
              "operator": "||",
              "left": {
                "type": "BinaryExpression",
                "start": 276,
                "end": 297,
                "operator": "!==",
                "left": {
                  "type": "UnaryExpression",
                  "start": 276,
                  "end": 284,
                  "argument": {
                    "type": "Identifier",
                    "start": 283,
                    "end": 284,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "operator": "typeof",
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "start": 289,
                  "end": 297,
                  "raw": "\"string\"",
                  "value": "string"
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 301,
                "end": 316,
                "operator": "===",
                "left": {
                  "type": "MemberExpression",
                  "start": 301,
                  "end": 309,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 301,
                    "end": 302,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 303,
                    "end": 309,
                    "decorators": [],
                    "name": "length",
                    "optional": false
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 314,
                  "end": 316,
                  "raw": "10",
                  "value": 10
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 239,
        "end": 242,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 243,
          "end": 261,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 244,
            "end": 261,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 246,
              "end": 261,
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
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 330,
      "end": 477,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 364,
        "end": 477,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 408,
            "end": 456,
            "argument": {
              "type": "LogicalExpression",
              "start": 415,
              "end": 455,
              "operator": "||",
              "left": {
                "type": "BinaryExpression",
                "start": 415,
                "end": 436,
                "operator": "!==",
                "left": {
                  "type": "UnaryExpression",
                  "start": 415,
                  "end": 423,
                  "argument": {
                    "type": "Identifier",
                    "start": 422,
                    "end": 423,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "operator": "typeof",
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "start": 428,
                  "end": 436,
                  "raw": "\"string\"",
                  "value": "string"
                }
              },
              "right": {
                "type": "LogicalExpression",
                "start": 441,
                "end": 454,
                "operator": "||",
                "left": {
                  "type": "AssignmentExpression",
                  "start": 442,
                  "end": 448,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 442,
                    "end": 443,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 446,
                    "end": 448,
                    "raw": "10",
                    "value": 10
                  }
                },
                "right": {
                  "type": "Identifier",
                  "start": 453,
                  "end": 454,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 339,
        "end": 343,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 344,
          "end": 362,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 345,
            "end": 362,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 347,
              "end": 362,
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
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 478,
      "end": 654,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 512,
        "end": 654,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 580,
            "end": 633,
            "argument": {
              "type": "LogicalExpression",
              "start": 587,
              "end": 632,
              "operator": "||",
              "left": {
                "type": "BinaryExpression",
                "start": 587,
                "end": 608,
                "operator": "!==",
                "left": {
                  "type": "UnaryExpression",
                  "start": 587,
                  "end": 595,
                  "argument": {
                    "type": "Identifier",
                    "start": 594,
                    "end": 595,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "operator": "typeof",
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "start": 600,
                  "end": 608,
                  "raw": "\"string\"",
                  "value": "string"
                }
              },
              "right": {
                "type": "LogicalExpression",
                "start": 613,
                "end": 631,
                "operator": "||",
                "left": {
                  "type": "AssignmentExpression",
                  "start": 614,
                  "end": 625,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 614,
                    "end": 615,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 618,
                    "end": 625,
                    "raw": "\"hello\"",
                    "value": "hello"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "start": 630,
                  "end": 631,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 487,
        "end": 491,
        "decorators": [],
        "name": "foo3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 492,
          "end": 510,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 493,
            "end": 510,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 495,
              "end": 510,
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
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 655,
      "end": 845,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 699,
        "end": 845,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 705,
            "end": 830,
            "argument": {
              "type": "LogicalExpression",
              "start": 712,
              "end": 829,
              "operator": "||",
              "left": {
                "type": "LogicalExpression",
                "start": 712,
                "end": 795,
                "operator": "||",
                "left": {
                  "type": "BinaryExpression",
                  "start": 712,
                  "end": 733,
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "start": 712,
                    "end": 720,
                    "argument": {
                      "type": "Identifier",
                      "start": 719,
                      "end": 720,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "operator": "typeof",
                    "prefix": true
                  },
                  "right": {
                    "type": "Literal",
                    "start": 725,
                    "end": 733,
                    "raw": "\"string\"",
                    "value": "string"
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "start": 774,
                  "end": 795,
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "start": 774,
                    "end": 782,
                    "argument": {
                      "type": "Identifier",
                      "start": 781,
                      "end": 782,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "operator": "typeof",
                    "prefix": true
                  },
                  "right": {
                    "type": "Literal",
                    "start": 787,
                    "end": 795,
                    "raw": "\"number\"",
                    "value": "number"
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "start": 828,
                "end": 829,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 664,
        "end": 668,
        "decorators": [],
        "name": "foo4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 669,
          "end": 697,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 670,
            "end": 697,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 672,
              "end": 697,
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
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 846,
      "end": 1175,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 890,
        "end": 1175,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 991,
            "end": 1015,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 995,
                "end": 1014,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 995,
                  "end": 1014,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 996,
                    "end": 1014,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 998,
                      "end": 1014,
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
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ReturnStatement",
            "start": 1020,
            "end": 1160,
            "argument": {
              "type": "LogicalExpression",
              "start": 1027,
              "end": 1159,
              "operator": "||",
              "left": {
                "type": "BinaryExpression",
                "start": 1027,
                "end": 1048,
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "start": 1027,
                  "end": 1035,
                  "argument": {
                    "type": "Identifier",
                    "start": 1034,
                    "end": 1035,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "operator": "typeof",
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "start": 1040,
                  "end": 1048,
                  "raw": "\"string\"",
                  "value": "string"
                }
              },
              "right": {
                "type": "LogicalExpression",
                "start": 1090,
                "end": 1158,
                "operator": "||",
                "left": {
                  "type": "AssignmentExpression",
                  "start": 1091,
                  "end": 1096,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 1091,
                    "end": 1092,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1095,
                    "end": 1096,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                },
                "right": {
                  "type": "LogicalExpression",
                  "start": 1102,
                  "end": 1157,
                  "operator": "||",
                  "left": {
                    "type": "BinaryExpression",
                    "start": 1102,
                    "end": 1123,
                    "operator": "===",
                    "left": {
                      "type": "UnaryExpression",
                      "start": 1102,
                      "end": 1110,
                      "argument": {
                        "type": "Identifier",
                        "start": 1109,
                        "end": 1110,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "operator": "typeof",
                      "prefix": true
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1115,
                      "end": 1123,
                      "raw": "\"number\"",
                      "value": "number"
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1156,
                    "end": 1157,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 855,
        "end": 859,
        "decorators": [],
        "name": "foo5",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 860,
          "end": 888,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 861,
            "end": 888,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 863,
              "end": 888,
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
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1176,
      "end": 1417,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1220,
        "end": 1417,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1250,
            "end": 1404,
            "argument": {
              "type": "LogicalExpression",
              "start": 1257,
              "end": 1404,
              "operator": "||",
              "left": {
                "type": "BinaryExpression",
                "start": 1257,
                "end": 1278,
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "start": 1257,
                  "end": 1265,
                  "argument": {
                    "type": "Identifier",
                    "start": 1264,
                    "end": 1265,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "operator": "typeof",
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "start": 1270,
                  "end": 1278,
                  "raw": "\"string\"",
                  "value": "string"
                }
              },
              "right": {
                "type": "ConditionalExpression",
                "start": 1320,
                "end": 1403,
                "alternate": {
                  "type": "BinaryExpression",
                  "start": 1395,
                  "end": 1403,
                  "operator": "===",
                  "left": {
                    "type": "Identifier",
                    "start": 1395,
                    "end": 1396,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1401,
                    "end": 1403,
                    "raw": "10",
                    "value": 10
                  }
                },
                "consequent": {
                  "type": "Identifier",
                  "start": 1372,
                  "end": 1373,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "test": {
                  "type": "BinaryExpression",
                  "start": 1320,
                  "end": 1341,
                  "operator": "!==",
                  "left": {
                    "type": "UnaryExpression",
                    "start": 1320,
                    "end": 1328,
                    "argument": {
                      "type": "Identifier",
                      "start": 1327,
                      "end": 1328,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "operator": "typeof",
                    "prefix": true
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1333,
                    "end": 1341,
                    "raw": "\"number\"",
                    "value": "number"
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1185,
        "end": 1189,
        "decorators": [],
        "name": "foo6",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1190,
          "end": 1218,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1191,
            "end": 1218,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1193,
              "end": 1218,
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
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1418,
      "end": 1874,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1462,
        "end": 1874,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1468,
            "end": 1500,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1472,
                "end": 1499,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1472,
                  "end": 1499,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1473,
                    "end": 1499,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1475,
                      "end": 1499,
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
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1505,
            "end": 1537,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1509,
                "end": 1536,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1509,
                  "end": 1536,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1510,
                    "end": 1536,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1512,
                      "end": 1536,
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
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ReturnStatement",
            "start": 1576,
            "end": 1843,
            "argument": {
              "type": "LogicalExpression",
              "start": 1583,
              "end": 1842,
              "operator": "||",
              "left": {
                "type": "BinaryExpression",
                "start": 1583,
                "end": 1604,
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "start": 1583,
                  "end": 1591,
                  "argument": {
                    "type": "Identifier",
                    "start": 1590,
                    "end": 1591,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "operator": "typeof",
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "start": 1596,
                  "end": 1604,
                  "raw": "\"string\"",
                  "value": "string"
                }
              },
              "right": {
                "type": "LogicalExpression",
                "start": 1617,
                "end": 1841,
                "operator": "||",
                "left": {
                  "type": "AssignmentExpression",
                  "start": 1618,
                  "end": 1623,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 1618,
                    "end": 1619,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1622,
                    "end": 1623,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                },
                "right": {
                  "type": "ConditionalExpression",
                  "start": 1657,
                  "end": 1840,
                  "alternate": {
                    "type": "LogicalExpression",
                    "start": 1816,
                    "end": 1839,
                    "operator": "&&",
                    "left": {
                      "type": "AssignmentExpression",
                      "start": 1817,
                      "end": 1822,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1817,
                        "end": 1818,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1821,
                        "end": 1822,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 1827,
                      "end": 1839,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1827,
                        "end": 1837,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1827,
                          "end": 1828,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1829,
                          "end": 1837,
                          "decorators": [],
                          "name": "toString",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  },
                  "consequent": {
                    "type": "LogicalExpression",
                    "start": 1719,
                    "end": 1743,
                    "operator": "&&",
                    "left": {
                      "type": "AssignmentExpression",
                      "start": 1720,
                      "end": 1726,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1720,
                        "end": 1721,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1724,
                        "end": 1726,
                        "raw": "10",
                        "value": 10
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 1731,
                      "end": 1743,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1731,
                        "end": 1741,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1731,
                          "end": 1732,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1733,
                          "end": 1741,
                          "decorators": [],
                          "name": "toString",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1657,
                    "end": 1678,
                    "operator": "===",
                    "left": {
                      "type": "UnaryExpression",
                      "start": 1657,
                      "end": 1665,
                      "argument": {
                        "type": "Identifier",
                        "start": 1664,
                        "end": 1665,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "operator": "typeof",
                      "prefix": true
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1670,
                      "end": 1678,
                      "raw": "\"number\"",
                      "value": "number"
                    }
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1427,
        "end": 1431,
        "decorators": [],
        "name": "foo7",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1432,
          "end": 1460,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1433,
            "end": 1460,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1435,
              "end": 1460,
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
              ]
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
