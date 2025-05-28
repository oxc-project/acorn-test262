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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 35,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 34,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 52,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 51,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 53,
      "end": 83,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 82,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 84,
      "end": 130,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 129,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 131,
      "end": 163,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 135,
          "end": 162,
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
          "init": null,
          "definite": false
        }
      ],
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
        "argument": {
          "type": "BinaryExpression",
          "start": 340,
          "end": 368,
          "left": {
            "type": "UnaryExpression",
            "start": 340,
            "end": 355,
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "start": 347,
              "end": 355,
              "decorators": [],
              "name": "strOrNum",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "start": 360,
            "end": 368,
            "value": "string",
            "raw": "\"string\""
          }
        },
        "prefix": true
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
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 385,
                "end": 393,
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null
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
              "argument": {
                "type": "Identifier",
                "start": 490,
                "end": 504,
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
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
              "argument": {
                "type": "Identifier",
                "start": 528,
                "end": 542,
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
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
        },
        "prefix": true
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
          "argument": {
            "type": "BinaryExpression",
            "start": 699,
            "end": 733,
            "left": {
              "type": "UnaryExpression",
              "start": 699,
              "end": 720,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 706,
                "end": 720,
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "operator": "!==",
            "right": {
              "type": "Literal",
              "start": 725,
              "end": 733,
              "value": "string",
              "raw": "\"string\""
            }
          },
          "prefix": true
        },
        "operator": "||",
        "right": {
          "type": "UnaryExpression",
          "start": 738,
          "end": 775,
          "operator": "!",
          "argument": {
            "type": "BinaryExpression",
            "start": 740,
            "end": 774,
            "left": {
              "type": "UnaryExpression",
              "start": 740,
              "end": 761,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 747,
                "end": 761,
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "operator": "!==",
            "right": {
              "type": "Literal",
              "start": 766,
              "end": 774,
              "value": "number",
              "raw": "\"number\""
            }
          },
          "prefix": true
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
              "argument": {
                "type": "Identifier",
                "start": 922,
                "end": 936,
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
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
              "argument": {
                "type": "Identifier",
                "start": 960,
                "end": 974,
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
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
        },
        "prefix": true
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
          "argument": {
            "type": "BinaryExpression",
            "start": 1131,
            "end": 1165,
            "left": {
              "type": "UnaryExpression",
              "start": 1131,
              "end": 1152,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 1138,
                "end": 1152,
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 1157,
              "end": 1165,
              "value": "string",
              "raw": "\"string\""
            }
          },
          "prefix": true
        },
        "operator": "&&",
        "right": {
          "type": "UnaryExpression",
          "start": 1170,
          "end": 1207,
          "operator": "!",
          "argument": {
            "type": "BinaryExpression",
            "start": 1172,
            "end": 1206,
            "left": {
              "type": "UnaryExpression",
              "start": 1172,
              "end": 1193,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 1179,
                "end": 1193,
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 1198,
              "end": 1206,
              "value": "number",
              "raw": "\"number\""
            }
          },
          "prefix": true
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
          "argument": {
            "type": "BinaryExpression",
            "start": 1347,
            "end": 1381,
            "left": {
              "type": "UnaryExpression",
              "start": 1347,
              "end": 1368,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 1354,
                "end": 1368,
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 1373,
              "end": 1381,
              "value": "string",
              "raw": "\"string\""
            }
          },
          "prefix": true
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
            "decorators": [],
            "name": "numOrBool",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "!==",
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
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1487,
                "end": 1533,
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
                },
                "definite": false
              }
            ],
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
