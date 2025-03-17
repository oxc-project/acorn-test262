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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 15,
            "name": "str",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 15,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9,
                "end": 15
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 34,
            "name": "bool",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 34,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 27,
                "end": 34
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 51,
            "name": "num",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 51,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 45,
                "end": 51
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 82,
            "name": "strOrNum",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 129,
            "name": "strOrNumOrBool",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 135,
            "end": 162,
            "name": "numOrBool",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 334,
      "end": 445,
      "test": {
        "type": "UnaryExpression",
        "start": 338,
        "end": 369,
        "operator": "!",
        "prefix": true,
        "argument": {
          "type": "BinaryExpression",
          "start": 340,
          "end": 368,
          "left": {
            "type": "UnaryExpression",
            "start": 340,
            "end": 355,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 347,
              "end": 355,
              "name": "strOrNum",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "start": 360,
            "end": 368,
            "value": "string",
            "raw": "\"string\""
          }
        }
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
            "expression": {
              "type": "BinaryExpression",
              "start": 377,
              "end": 393,
              "left": {
                "type": "Identifier",
                "start": 377,
                "end": 380,
                "name": "num",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 385,
                "end": 393,
                "name": "strOrNum",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 412,
        "end": 445,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 418,
            "end": 433,
            "expression": {
              "type": "AssignmentExpression",
              "start": 418,
              "end": 432,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 418,
                "end": 421,
                "name": "str",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 424,
                "end": 432,
                "name": "strOrNum",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 477,
      "end": 658,
      "test": {
        "type": "UnaryExpression",
        "start": 481,
        "end": 556,
        "operator": "!",
        "prefix": true,
        "argument": {
          "type": "LogicalExpression",
          "start": 483,
          "end": 555,
          "left": {
            "type": "BinaryExpression",
            "start": 483,
            "end": 517,
            "left": {
              "type": "UnaryExpression",
              "start": 483,
              "end": 504,
              "operator": "typeof",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 490,
                "end": 504,
                "name": "strOrNumOrBool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 509,
              "end": 517,
              "value": "string",
              "raw": "\"string\""
            }
          },
          "operator": "||",
          "right": {
            "type": "BinaryExpression",
            "start": 521,
            "end": 555,
            "left": {
              "type": "UnaryExpression",
              "start": 521,
              "end": 542,
              "operator": "typeof",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 528,
                "end": 542,
                "name": "strOrNumOrBool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 547,
              "end": 555,
              "value": "number",
              "raw": "\"number\""
            }
          }
        }
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
            "expression": {
              "type": "AssignmentExpression",
              "start": 564,
              "end": 585,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 564,
                "end": 568,
                "name": "bool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 571,
                "end": 585,
                "name": "strOrNumOrBool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 605,
        "end": 658,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 611,
            "end": 637,
            "expression": {
              "type": "AssignmentExpression",
              "start": 611,
              "end": 636,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 611,
                "end": 619,
                "name": "strOrNum",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 622,
                "end": 636,
                "name": "strOrNumOrBool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 693,
      "end": 877,
      "test": {
        "type": "LogicalExpression",
        "start": 697,
        "end": 775,
        "left": {
          "type": "UnaryExpression",
          "start": 697,
          "end": 734,
          "operator": "!",
          "prefix": true,
          "argument": {
            "type": "BinaryExpression",
            "start": 699,
            "end": 733,
            "left": {
              "type": "UnaryExpression",
              "start": 699,
              "end": 720,
              "operator": "typeof",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 706,
                "end": 720,
                "name": "strOrNumOrBool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "!==",
            "right": {
              "type": "Literal",
              "start": 725,
              "end": 733,
              "value": "string",
              "raw": "\"string\""
            }
          }
        },
        "operator": "||",
        "right": {
          "type": "UnaryExpression",
          "start": 738,
          "end": 775,
          "operator": "!",
          "prefix": true,
          "argument": {
            "type": "BinaryExpression",
            "start": 740,
            "end": 774,
            "left": {
              "type": "UnaryExpression",
              "start": 740,
              "end": 761,
              "operator": "typeof",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 747,
                "end": 761,
                "name": "strOrNumOrBool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "!==",
            "right": {
              "type": "Literal",
              "start": 766,
              "end": 774,
              "value": "number",
              "raw": "\"number\""
            }
          }
        }
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
            "expression": {
              "type": "AssignmentExpression",
              "start": 783,
              "end": 808,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 783,
                "end": 791,
                "name": "strOrNum",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 794,
                "end": 808,
                "name": "strOrNumOrBool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 836,
        "end": 877,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 842,
            "end": 864,
            "expression": {
              "type": "AssignmentExpression",
              "start": 842,
              "end": 863,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 842,
                "end": 846,
                "name": "bool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 849,
                "end": 863,
                "name": "strOrNumOrBool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 909,
      "end": 1090,
      "test": {
        "type": "UnaryExpression",
        "start": 913,
        "end": 988,
        "operator": "!",
        "prefix": true,
        "argument": {
          "type": "LogicalExpression",
          "start": 915,
          "end": 987,
          "left": {
            "type": "BinaryExpression",
            "start": 915,
            "end": 949,
            "left": {
              "type": "UnaryExpression",
              "start": 915,
              "end": 936,
              "operator": "typeof",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 922,
                "end": 936,
                "name": "strOrNumOrBool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "!==",
            "right": {
              "type": "Literal",
              "start": 941,
              "end": 949,
              "value": "string",
              "raw": "\"string\""
            }
          },
          "operator": "&&",
          "right": {
            "type": "BinaryExpression",
            "start": 953,
            "end": 987,
            "left": {
              "type": "UnaryExpression",
              "start": 953,
              "end": 974,
              "operator": "typeof",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 960,
                "end": 974,
                "name": "strOrNumOrBool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "!==",
            "right": {
              "type": "Literal",
              "start": 979,
              "end": 987,
              "value": "number",
              "raw": "\"number\""
            }
          }
        }
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
            "expression": {
              "type": "AssignmentExpression",
              "start": 996,
              "end": 1021,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 996,
                "end": 1004,
                "name": "strOrNum",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1007,
                "end": 1021,
                "name": "strOrNumOrBool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 1049,
        "end": 1090,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1055,
            "end": 1077,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1055,
              "end": 1076,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1055,
                "end": 1059,
                "name": "bool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1062,
                "end": 1076,
                "name": "strOrNumOrBool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 1125,
      "end": 1309,
      "test": {
        "type": "LogicalExpression",
        "start": 1129,
        "end": 1207,
        "left": {
          "type": "UnaryExpression",
          "start": 1129,
          "end": 1166,
          "operator": "!",
          "prefix": true,
          "argument": {
            "type": "BinaryExpression",
            "start": 1131,
            "end": 1165,
            "left": {
              "type": "UnaryExpression",
              "start": 1131,
              "end": 1152,
              "operator": "typeof",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 1138,
                "end": 1152,
                "name": "strOrNumOrBool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 1157,
              "end": 1165,
              "value": "string",
              "raw": "\"string\""
            }
          }
        },
        "operator": "&&",
        "right": {
          "type": "UnaryExpression",
          "start": 1170,
          "end": 1207,
          "operator": "!",
          "prefix": true,
          "argument": {
            "type": "BinaryExpression",
            "start": 1172,
            "end": 1206,
            "left": {
              "type": "UnaryExpression",
              "start": 1172,
              "end": 1193,
              "operator": "typeof",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 1179,
                "end": 1193,
                "name": "strOrNumOrBool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 1198,
              "end": 1206,
              "value": "number",
              "raw": "\"number\""
            }
          }
        }
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
            "expression": {
              "type": "AssignmentExpression",
              "start": 1215,
              "end": 1236,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1215,
                "end": 1219,
                "name": "bool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1222,
                "end": 1236,
                "name": "strOrNumOrBool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 1256,
        "end": 1309,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1262,
            "end": 1288,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1262,
              "end": 1287,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1262,
                "end": 1270,
                "name": "strOrNum",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1273,
                "end": 1287,
                "name": "strOrNumOrBool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 1341,
      "end": 1565,
      "test": {
        "type": "LogicalExpression",
        "start": 1345,
        "end": 1414,
        "left": {
          "type": "UnaryExpression",
          "start": 1345,
          "end": 1382,
          "operator": "!",
          "prefix": true,
          "argument": {
            "type": "BinaryExpression",
            "start": 1347,
            "end": 1381,
            "left": {
              "type": "UnaryExpression",
              "start": 1347,
              "end": 1368,
              "operator": "typeof",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 1354,
                "end": 1368,
                "name": "strOrNumOrBool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 1373,
              "end": 1381,
              "value": "string",
              "raw": "\"string\""
            }
          }
        },
        "operator": "&&",
        "right": {
          "type": "BinaryExpression",
          "start": 1386,
          "end": 1414,
          "left": {
            "type": "Identifier",
            "start": 1386,
            "end": 1395,
            "name": "numOrBool",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "!==",
          "right": {
            "type": "Identifier",
            "start": 1400,
            "end": 1414,
            "name": "strOrNumOrBool",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
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
            "expression": {
              "type": "AssignmentExpression",
              "start": 1422,
              "end": 1448,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1422,
                "end": 1431,
                "name": "numOrBool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1434,
                "end": 1448,
                "name": "strOrNumOrBool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 1487,
                  "end": 1516,
                  "name": "r1",
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1519,
                  "end": 1533,
                  "name": "strOrNumOrBool",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
