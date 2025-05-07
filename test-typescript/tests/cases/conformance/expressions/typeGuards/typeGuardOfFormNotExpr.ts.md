__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1565,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 16,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 15,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 15,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9,
                "end": 15
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
      "start": 17,
      "end": 35,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 34,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 34,
            "decorators": [],
            "name": "bool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 34,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 27,
                "end": 34
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
      "start": 36,
      "end": 52,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 51,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 51,
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 51,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 45,
                "end": 51
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
      "start": 53,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 82,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 82,
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 82,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 67,
                "end": 82,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 67,
                    "end": 73
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 76,
                    "end": 82
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
      "start": 84,
      "end": 130,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 129,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 129,
            "decorators": [],
            "name": "strOrNumOrBool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 102,
              "end": 129,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 104,
                "end": 129,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 104,
                    "end": 110
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 113,
                    "end": 119
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 122,
                    "end": 129
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
      "start": 131,
      "end": 163,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 135,
          "end": 162,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 135,
            "end": 162,
            "decorators": [],
            "name": "numOrBool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 144,
              "end": 162,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 146,
                "end": 162,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 146,
                    "end": 152
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 155,
                    "end": 162
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
      "type": "IfStatement",
      "start": 334,
      "end": 445,
      "alternate": {
        "type": "BlockStatement",
        "start": 412,
        "end": 445,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 418,
            "end": 433,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 418,
              "end": 432,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 418,
                "end": 421,
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 424,
                "end": 432,
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 371,
        "end": 406,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 377,
            "end": 394,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 377,
              "end": 393,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 377,
                "end": 380,
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 385,
                "end": 393,
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "UnaryExpression",
        "start": 338,
        "end": 369,
        "argument": {
          "type": "BinaryExpression",
          "start": 340,
          "end": 368,
          "operator": "===",
          "left": {
            "type": "UnaryExpression",
            "start": 340,
            "end": 355,
            "argument": {
              "type": "Identifier",
              "start": 347,
              "end": 355,
              "decorators": [],
              "name": "strOrNum",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "typeof",
            "prefix": true
          },
          "right": {
            "type": "Literal",
            "start": 360,
            "end": 368,
            "raw": "\"string\"",
            "value": "string",
            "regex": null,
            "bigint": null
          }
        },
        "operator": "!",
        "prefix": true
      }
    },
    {
      "type": "IfStatement",
      "start": 477,
      "end": 658,
      "alternate": {
        "type": "BlockStatement",
        "start": 605,
        "end": 658,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 611,
            "end": 637,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 611,
              "end": 636,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 611,
                "end": 619,
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 622,
                "end": 636,
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 558,
        "end": 599,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 564,
            "end": 586,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 564,
              "end": 585,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 564,
                "end": 568,
                "decorators": [],
                "name": "bool",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 571,
                "end": 585,
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "UnaryExpression",
        "start": 481,
        "end": 556,
        "argument": {
          "type": "LogicalExpression",
          "start": 483,
          "end": 555,
          "operator": "||",
          "left": {
            "type": "BinaryExpression",
            "start": 483,
            "end": 517,
            "operator": "===",
            "left": {
              "type": "UnaryExpression",
              "start": 483,
              "end": 504,
              "argument": {
                "type": "Identifier",
                "start": 490,
                "end": 504,
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "typeof",
              "prefix": true
            },
            "right": {
              "type": "Literal",
              "start": 509,
              "end": 517,
              "raw": "\"string\"",
              "value": "string",
              "regex": null,
              "bigint": null
            }
          },
          "right": {
            "type": "BinaryExpression",
            "start": 521,
            "end": 555,
            "operator": "===",
            "left": {
              "type": "UnaryExpression",
              "start": 521,
              "end": 542,
              "argument": {
                "type": "Identifier",
                "start": 528,
                "end": 542,
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "typeof",
              "prefix": true
            },
            "right": {
              "type": "Literal",
              "start": 547,
              "end": 555,
              "raw": "\"number\"",
              "value": "number",
              "regex": null,
              "bigint": null
            }
          }
        },
        "operator": "!",
        "prefix": true
      }
    },
    {
      "type": "IfStatement",
      "start": 693,
      "end": 877,
      "alternate": {
        "type": "BlockStatement",
        "start": 836,
        "end": 877,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 842,
            "end": 864,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 842,
              "end": 863,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 842,
                "end": 846,
                "decorators": [],
                "name": "bool",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 849,
                "end": 863,
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 777,
        "end": 830,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 783,
            "end": 809,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 783,
              "end": 808,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 783,
                "end": 791,
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 794,
                "end": 808,
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "LogicalExpression",
        "start": 697,
        "end": 775,
        "operator": "||",
        "left": {
          "type": "UnaryExpression",
          "start": 697,
          "end": 734,
          "argument": {
            "type": "BinaryExpression",
            "start": 699,
            "end": 733,
            "operator": "!==",
            "left": {
              "type": "UnaryExpression",
              "start": 699,
              "end": 720,
              "argument": {
                "type": "Identifier",
                "start": 706,
                "end": 720,
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "typeof",
              "prefix": true
            },
            "right": {
              "type": "Literal",
              "start": 725,
              "end": 733,
              "raw": "\"string\"",
              "value": "string",
              "regex": null,
              "bigint": null
            }
          },
          "operator": "!",
          "prefix": true
        },
        "right": {
          "type": "UnaryExpression",
          "start": 738,
          "end": 775,
          "argument": {
            "type": "BinaryExpression",
            "start": 740,
            "end": 774,
            "operator": "!==",
            "left": {
              "type": "UnaryExpression",
              "start": 740,
              "end": 761,
              "argument": {
                "type": "Identifier",
                "start": 747,
                "end": 761,
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "typeof",
              "prefix": true
            },
            "right": {
              "type": "Literal",
              "start": 766,
              "end": 774,
              "raw": "\"number\"",
              "value": "number",
              "regex": null,
              "bigint": null
            }
          },
          "operator": "!",
          "prefix": true
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 909,
      "end": 1090,
      "alternate": {
        "type": "BlockStatement",
        "start": 1049,
        "end": 1090,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1055,
            "end": 1077,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1055,
              "end": 1076,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1055,
                "end": 1059,
                "decorators": [],
                "name": "bool",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1062,
                "end": 1076,
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 990,
        "end": 1043,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 996,
            "end": 1022,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 996,
              "end": 1021,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 996,
                "end": 1004,
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1007,
                "end": 1021,
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "UnaryExpression",
        "start": 913,
        "end": 988,
        "argument": {
          "type": "LogicalExpression",
          "start": 915,
          "end": 987,
          "operator": "&&",
          "left": {
            "type": "BinaryExpression",
            "start": 915,
            "end": 949,
            "operator": "!==",
            "left": {
              "type": "UnaryExpression",
              "start": 915,
              "end": 936,
              "argument": {
                "type": "Identifier",
                "start": 922,
                "end": 936,
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "typeof",
              "prefix": true
            },
            "right": {
              "type": "Literal",
              "start": 941,
              "end": 949,
              "raw": "\"string\"",
              "value": "string",
              "regex": null,
              "bigint": null
            }
          },
          "right": {
            "type": "BinaryExpression",
            "start": 953,
            "end": 987,
            "operator": "!==",
            "left": {
              "type": "UnaryExpression",
              "start": 953,
              "end": 974,
              "argument": {
                "type": "Identifier",
                "start": 960,
                "end": 974,
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "typeof",
              "prefix": true
            },
            "right": {
              "type": "Literal",
              "start": 979,
              "end": 987,
              "raw": "\"number\"",
              "value": "number",
              "regex": null,
              "bigint": null
            }
          }
        },
        "operator": "!",
        "prefix": true
      }
    },
    {
      "type": "IfStatement",
      "start": 1125,
      "end": 1309,
      "alternate": {
        "type": "BlockStatement",
        "start": 1256,
        "end": 1309,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1262,
            "end": 1288,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1262,
              "end": 1287,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1262,
                "end": 1270,
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1273,
                "end": 1287,
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1209,
        "end": 1250,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1215,
            "end": 1237,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1215,
              "end": 1236,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1215,
                "end": 1219,
                "decorators": [],
                "name": "bool",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1222,
                "end": 1236,
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "LogicalExpression",
        "start": 1129,
        "end": 1207,
        "operator": "&&",
        "left": {
          "type": "UnaryExpression",
          "start": 1129,
          "end": 1166,
          "argument": {
            "type": "BinaryExpression",
            "start": 1131,
            "end": 1165,
            "operator": "===",
            "left": {
              "type": "UnaryExpression",
              "start": 1131,
              "end": 1152,
              "argument": {
                "type": "Identifier",
                "start": 1138,
                "end": 1152,
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "typeof",
              "prefix": true
            },
            "right": {
              "type": "Literal",
              "start": 1157,
              "end": 1165,
              "raw": "\"string\"",
              "value": "string",
              "regex": null,
              "bigint": null
            }
          },
          "operator": "!",
          "prefix": true
        },
        "right": {
          "type": "UnaryExpression",
          "start": 1170,
          "end": 1207,
          "argument": {
            "type": "BinaryExpression",
            "start": 1172,
            "end": 1206,
            "operator": "===",
            "left": {
              "type": "UnaryExpression",
              "start": 1172,
              "end": 1193,
              "argument": {
                "type": "Identifier",
                "start": 1179,
                "end": 1193,
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "typeof",
              "prefix": true
            },
            "right": {
              "type": "Literal",
              "start": 1198,
              "end": 1206,
              "raw": "\"number\"",
              "value": "number",
              "regex": null,
              "bigint": null
            }
          },
          "operator": "!",
          "prefix": true
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1341,
      "end": 1565,
      "alternate": {
        "type": "BlockStatement",
        "start": 1477,
        "end": 1565,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1483,
            "end": 1534,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1487,
                "end": 1533,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1487,
                  "end": 1516,
                  "decorators": [],
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1489,
                    "end": 1516,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1491,
                      "end": 1516,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1491,
                          "end": 1497
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1500,
                          "end": 1506
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1509,
                          "end": 1516
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1519,
                  "end": 1533,
                  "decorators": [],
                  "name": "strOrNumOrBool",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1416,
        "end": 1471,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1422,
            "end": 1449,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1422,
              "end": 1448,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1422,
                "end": 1431,
                "decorators": [],
                "name": "numOrBool",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1434,
                "end": 1448,
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "LogicalExpression",
        "start": 1345,
        "end": 1414,
        "operator": "&&",
        "left": {
          "type": "UnaryExpression",
          "start": 1345,
          "end": 1382,
          "argument": {
            "type": "BinaryExpression",
            "start": 1347,
            "end": 1381,
            "operator": "===",
            "left": {
              "type": "UnaryExpression",
              "start": 1347,
              "end": 1368,
              "argument": {
                "type": "Identifier",
                "start": 1354,
                "end": 1368,
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "typeof",
              "prefix": true
            },
            "right": {
              "type": "Literal",
              "start": 1373,
              "end": 1381,
              "raw": "\"string\"",
              "value": "string",
              "regex": null,
              "bigint": null
            }
          },
          "operator": "!",
          "prefix": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 1386,
          "end": 1414,
          "operator": "!==",
          "left": {
            "type": "Identifier",
            "start": 1386,
            "end": 1395,
            "decorators": [],
            "name": "numOrBool",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 1400,
            "end": 1414,
            "decorators": [],
            "name": "strOrNumOrBool",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
