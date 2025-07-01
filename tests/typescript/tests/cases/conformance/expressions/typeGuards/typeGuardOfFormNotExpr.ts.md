__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9,
                "end": 15
              },
              "start": 7,
              "end": 15
            },
            "start": 4,
            "end": 15
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 15
        }
      ],
      "declare": false,
      "start": 0,
      "end": 16
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
            "name": "bool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 27,
                "end": 34
              },
              "start": 25,
              "end": 34
            },
            "start": 21,
            "end": 34
          },
          "init": null,
          "definite": false,
          "start": 21,
          "end": 34
        }
      ],
      "declare": false,
      "start": 17,
      "end": 35
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
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 45,
                "end": 51
              },
              "start": 43,
              "end": 51
            },
            "start": 40,
            "end": 51
          },
          "init": null,
          "definite": false,
          "start": 40,
          "end": 51
        }
      ],
      "declare": false,
      "start": 36,
      "end": 52
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
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 67,
                "end": 82
              },
              "start": 65,
              "end": 82
            },
            "start": 57,
            "end": 82
          },
          "init": null,
          "definite": false,
          "start": 57,
          "end": 82
        }
      ],
      "declare": false,
      "start": 53,
      "end": 83
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
            "name": "strOrNumOrBool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 104,
                "end": 129
              },
              "start": 102,
              "end": 129
            },
            "start": 88,
            "end": 129
          },
          "init": null,
          "definite": false,
          "start": 88,
          "end": 129
        }
      ],
      "declare": false,
      "start": 84,
      "end": 130
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
            "name": "numOrBool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 146,
                "end": 162
              },
              "start": 144,
              "end": 162
            },
            "start": 135,
            "end": 162
          },
          "init": null,
          "definite": false,
          "start": 135,
          "end": 162
        }
      ],
      "declare": false,
      "start": 131,
      "end": 163
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "strOrNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 347,
              "end": 355
            },
            "prefix": true,
            "start": 340,
            "end": 355
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 360,
            "end": 368
          },
          "start": 340,
          "end": 368
        },
        "prefix": true,
        "start": 338,
        "end": 369
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 377,
                "end": 380
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 385,
                "end": 393
              },
              "start": 377,
              "end": 393
            },
            "directive": null,
            "start": 377,
            "end": 394
          }
        ],
        "start": 371,
        "end": 406
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null,
                "start": 418,
                "end": 421
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 424,
                "end": 432
              },
              "start": 418,
              "end": 432
            },
            "directive": null,
            "start": 418,
            "end": 433
          }
        ],
        "start": 412,
        "end": 445
      },
      "start": 334,
      "end": 445
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "!",
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
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 490,
                "end": 504
              },
              "prefix": true,
              "start": 483,
              "end": 504
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\"",
              "start": 509,
              "end": 517
            },
            "start": 483,
            "end": 517
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
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 528,
                "end": 542
              },
              "prefix": true,
              "start": 521,
              "end": 542
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "number",
              "raw": "\"number\"",
              "start": 547,
              "end": 555
            },
            "start": 521,
            "end": 555
          },
          "start": 483,
          "end": 555
        },
        "prefix": true,
        "start": 481,
        "end": 556
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "bool",
                "optional": false,
                "typeAnnotation": null,
                "start": 564,
                "end": 568
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 571,
                "end": 585
              },
              "start": 564,
              "end": 585
            },
            "directive": null,
            "start": 564,
            "end": 586
          }
        ],
        "start": 558,
        "end": 599
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 611,
                "end": 619
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 622,
                "end": 636
              },
              "start": 611,
              "end": 636
            },
            "directive": null,
            "start": 611,
            "end": 637
          }
        ],
        "start": 605,
        "end": 658
      },
      "start": 477,
      "end": 658
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "!",
          "argument": {
            "type": "BinaryExpression",
            "left": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 706,
                "end": 720
              },
              "prefix": true,
              "start": 699,
              "end": 720
            },
            "operator": "!==",
            "right": {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\"",
              "start": 725,
              "end": 733
            },
            "start": 699,
            "end": 733
          },
          "prefix": true,
          "start": 697,
          "end": 734
        },
        "operator": "||",
        "right": {
          "type": "UnaryExpression",
          "operator": "!",
          "argument": {
            "type": "BinaryExpression",
            "left": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 747,
                "end": 761
              },
              "prefix": true,
              "start": 740,
              "end": 761
            },
            "operator": "!==",
            "right": {
              "type": "Literal",
              "value": "number",
              "raw": "\"number\"",
              "start": 766,
              "end": 774
            },
            "start": 740,
            "end": 774
          },
          "prefix": true,
          "start": 738,
          "end": 775
        },
        "start": 697,
        "end": 775
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 783,
                "end": 791
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 794,
                "end": 808
              },
              "start": 783,
              "end": 808
            },
            "directive": null,
            "start": 783,
            "end": 809
          }
        ],
        "start": 777,
        "end": 830
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "bool",
                "optional": false,
                "typeAnnotation": null,
                "start": 842,
                "end": 846
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 849,
                "end": 863
              },
              "start": 842,
              "end": 863
            },
            "directive": null,
            "start": 842,
            "end": 864
          }
        ],
        "start": 836,
        "end": 877
      },
      "start": 693,
      "end": 877
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "!",
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
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 922,
                "end": 936
              },
              "prefix": true,
              "start": 915,
              "end": 936
            },
            "operator": "!==",
            "right": {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\"",
              "start": 941,
              "end": 949
            },
            "start": 915,
            "end": 949
          },
          "operator": "&&",
          "right": {
            "type": "BinaryExpression",
            "left": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 960,
                "end": 974
              },
              "prefix": true,
              "start": 953,
              "end": 974
            },
            "operator": "!==",
            "right": {
              "type": "Literal",
              "value": "number",
              "raw": "\"number\"",
              "start": 979,
              "end": 987
            },
            "start": 953,
            "end": 987
          },
          "start": 915,
          "end": 987
        },
        "prefix": true,
        "start": 913,
        "end": 988
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 996,
                "end": 1004
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1007,
                "end": 1021
              },
              "start": 996,
              "end": 1021
            },
            "directive": null,
            "start": 996,
            "end": 1022
          }
        ],
        "start": 990,
        "end": 1043
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "bool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1055,
                "end": 1059
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1062,
                "end": 1076
              },
              "start": 1055,
              "end": 1076
            },
            "directive": null,
            "start": 1055,
            "end": 1077
          }
        ],
        "start": 1049,
        "end": 1090
      },
      "start": 909,
      "end": 1090
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "!",
          "argument": {
            "type": "BinaryExpression",
            "left": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1138,
                "end": 1152
              },
              "prefix": true,
              "start": 1131,
              "end": 1152
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\"",
              "start": 1157,
              "end": 1165
            },
            "start": 1131,
            "end": 1165
          },
          "prefix": true,
          "start": 1129,
          "end": 1166
        },
        "operator": "&&",
        "right": {
          "type": "UnaryExpression",
          "operator": "!",
          "argument": {
            "type": "BinaryExpression",
            "left": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1179,
                "end": 1193
              },
              "prefix": true,
              "start": 1172,
              "end": 1193
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "number",
              "raw": "\"number\"",
              "start": 1198,
              "end": 1206
            },
            "start": 1172,
            "end": 1206
          },
          "prefix": true,
          "start": 1170,
          "end": 1207
        },
        "start": 1129,
        "end": 1207
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "bool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1215,
                "end": 1219
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1222,
                "end": 1236
              },
              "start": 1215,
              "end": 1236
            },
            "directive": null,
            "start": 1215,
            "end": 1237
          }
        ],
        "start": 1209,
        "end": 1250
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 1262,
                "end": 1270
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1273,
                "end": 1287
              },
              "start": 1262,
              "end": 1287
            },
            "directive": null,
            "start": 1262,
            "end": 1288
          }
        ],
        "start": 1256,
        "end": 1309
      },
      "start": 1125,
      "end": 1309
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "!",
          "argument": {
            "type": "BinaryExpression",
            "left": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1354,
                "end": 1368
              },
              "prefix": true,
              "start": 1347,
              "end": 1368
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\"",
              "start": 1373,
              "end": 1381
            },
            "start": 1347,
            "end": 1381
          },
          "prefix": true,
          "start": 1345,
          "end": 1382
        },
        "operator": "&&",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "numOrBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 1386,
            "end": 1395
          },
          "operator": "!==",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrNumOrBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 1400,
            "end": 1414
          },
          "start": 1386,
          "end": 1414
        },
        "start": 1345,
        "end": 1414
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "numOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1422,
                "end": 1431
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1434,
                "end": 1448
              },
              "start": 1422,
              "end": 1448
            },
            "directive": null,
            "start": 1422,
            "end": 1449
          }
        ],
        "start": 1416,
        "end": 1471
      },
      "alternate": {
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
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
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
                      ],
                      "start": 1491,
                      "end": 1516
                    },
                    "start": 1489,
                    "end": 1516
                  },
                  "start": 1487,
                  "end": 1516
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1519,
                  "end": 1533
                },
                "definite": false,
                "start": 1487,
                "end": 1533
              }
            ],
            "declare": false,
            "start": 1483,
            "end": 1534
          }
        ],
        "start": 1477,
        "end": 1565
      },
      "start": 1341,
      "end": 1565
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1565
}
```
