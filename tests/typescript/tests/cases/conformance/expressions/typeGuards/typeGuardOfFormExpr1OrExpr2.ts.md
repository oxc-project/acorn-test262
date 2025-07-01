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
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 170,
        "end": 171
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 182,
              "end": 183
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 174,
            "end": 184
          }
        ],
        "start": 172,
        "end": 186
      },
      "abstract": false,
      "declare": false,
      "start": 164,
      "end": 186
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 194,
                  "end": 195
                },
                "typeArguments": null,
                "start": 194,
                "end": 195
              },
              "start": 192,
              "end": 195
            },
            "start": 191,
            "end": 195
          },
          "init": null,
          "definite": false,
          "start": 191,
          "end": 195
        }
      ],
      "declare": false,
      "start": 187,
      "end": 196
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
            "name": "cOrBool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 210,
                      "end": 211
                    },
                    "typeArguments": null,
                    "start": 210,
                    "end": 211
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 213,
                    "end": 220
                  }
                ],
                "start": 210,
                "end": 220
              },
              "start": 208,
              "end": 220
            },
            "start": 201,
            "end": 220
          },
          "init": null,
          "definite": false,
          "start": 201,
          "end": 220
        }
      ],
      "declare": false,
      "start": 197,
      "end": 221
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
            "name": "strOrNumOrBoolOrC",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 245,
                    "end": 251
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 254,
                    "end": 260
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 263,
                    "end": 270
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 273,
                      "end": 274
                    },
                    "typeArguments": null,
                    "start": 273,
                    "end": 274
                  }
                ],
                "start": 245,
                "end": 274
              },
              "start": 243,
              "end": 274
            },
            "start": 226,
            "end": 274
          },
          "init": null,
          "definite": false,
          "start": 226,
          "end": 274
        }
      ],
      "declare": false,
      "start": 222,
      "end": 275
    },
    {
      "type": "IfStatement",
      "test": {
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
              "start": 650,
              "end": 664
            },
            "prefix": true,
            "start": 643,
            "end": 664
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 669,
            "end": 677
          },
          "start": 643,
          "end": 677
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
              "start": 688,
              "end": 702
            },
            "prefix": true,
            "start": 681,
            "end": 702
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": "number",
            "raw": "\"number\"",
            "start": 707,
            "end": 715
          },
          "start": 681,
          "end": 715
        },
        "start": 643,
        "end": 715
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
                "start": 723,
                "end": 731
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 734,
                "end": 748
              },
              "start": 723,
              "end": 748
            },
            "directive": null,
            "start": 723,
            "end": 749
          }
        ],
        "start": 717,
        "end": 770
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
                "start": 782,
                "end": 786
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 789,
                "end": 803
              },
              "start": 782,
              "end": 803
            },
            "directive": null,
            "start": 782,
            "end": 804
          }
        ],
        "start": 776,
        "end": 817
      },
      "start": 639,
      "end": 817
    },
    {
      "type": "IfStatement",
      "test": {
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
                "name": "strOrNumOrBoolOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 873,
                "end": 890
              },
              "prefix": true,
              "start": 866,
              "end": 890
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\"",
              "start": 895,
              "end": 903
            },
            "start": 866,
            "end": 903
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
                "name": "strOrNumOrBoolOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 914,
                "end": 931
              },
              "prefix": true,
              "start": 907,
              "end": 931
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "number",
              "raw": "\"number\"",
              "start": 936,
              "end": 944
            },
            "start": 907,
            "end": 944
          },
          "start": 866,
          "end": 944
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
              "name": "strOrNumOrBoolOrC",
              "optional": false,
              "typeAnnotation": null,
              "start": 955,
              "end": 972
            },
            "prefix": true,
            "start": 948,
            "end": 972
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": "boolean",
            "raw": "\"boolean\"",
            "start": 977,
            "end": 986
          },
          "start": 948,
          "end": 986
        },
        "start": 866,
        "end": 986
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
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 994,
                "end": 1008
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBoolOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1011,
                "end": 1028
              },
              "start": 994,
              "end": 1028
            },
            "directive": null,
            "start": 994,
            "end": 1029
          }
        ],
        "start": 988,
        "end": 1060
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
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1072,
                "end": 1073
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBoolOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1076,
                "end": 1093
              },
              "start": 1072,
              "end": 1093
            },
            "directive": null,
            "start": 1072,
            "end": 1094
          }
        ],
        "start": 1066,
        "end": 1101
      },
      "start": 862,
      "end": 1101
    },
    {
      "type": "IfStatement",
      "test": {
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
                "name": "strOrNumOrBoolOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1173,
                "end": 1190
              },
              "prefix": true,
              "start": 1166,
              "end": 1190
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\"",
              "start": 1195,
              "end": 1203
            },
            "start": 1166,
            "end": 1203
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
                "name": "strOrNumOrBoolOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1214,
                "end": 1231
              },
              "prefix": true,
              "start": 1207,
              "end": 1231
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "number",
              "raw": "\"number\"",
              "start": 1236,
              "end": 1244
            },
            "start": 1207,
            "end": 1244
          },
          "start": 1166,
          "end": 1244
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
              "start": 1255,
              "end": 1269
            },
            "prefix": true,
            "start": 1248,
            "end": 1269
          },
          "operator": "!==",
          "right": {
            "type": "Literal",
            "value": "boolean",
            "raw": "\"boolean\"",
            "start": 1274,
            "end": 1283
          },
          "start": 1248,
          "end": 1283
        },
        "start": 1166,
        "end": 1283
      },
      "consequent": {
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
                          "start": 1299,
                          "end": 1305
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1308,
                          "end": 1314
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1317,
                          "end": 1324
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1327,
                            "end": 1328
                          },
                          "typeArguments": null,
                          "start": 1327,
                          "end": 1328
                        }
                      ],
                      "start": 1299,
                      "end": 1328
                    },
                    "start": 1297,
                    "end": 1328
                  },
                  "start": 1295,
                  "end": 1328
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumOrBoolOrC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1331,
                  "end": 1348
                },
                "definite": false,
                "start": 1295,
                "end": 1348
              }
            ],
            "declare": false,
            "start": 1291,
            "end": 1349
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1395,
                          "end": 1401
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1404,
                          "end": 1410
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1413,
                          "end": 1420
                        }
                      ],
                      "start": 1395,
                      "end": 1420
                    },
                    "start": 1393,
                    "end": 1420
                  },
                  "start": 1391,
                  "end": 1420
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1423,
                  "end": 1437
                },
                "definite": false,
                "start": 1391,
                "end": 1437
              }
            ],
            "declare": false,
            "start": 1387,
            "end": 1438
          }
        ],
        "start": 1285,
        "end": 1440
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
                "name": "cOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1452,
                "end": 1459
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBoolOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1462,
                "end": 1479
              },
              "start": 1452,
              "end": 1479
            },
            "directive": null,
            "start": 1452,
            "end": 1480
          },
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
                "start": 1500,
                "end": 1504
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1507,
                "end": 1521
              },
              "start": 1500,
              "end": 1521
            },
            "directive": null,
            "start": 1500,
            "end": 1522
          }
        ],
        "start": 1446,
        "end": 1535
      },
      "start": 1162,
      "end": 1535
    },
    {
      "type": "IfStatement",
      "test": {
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
              "start": 1577,
              "end": 1591
            },
            "prefix": true,
            "start": 1570,
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
          "start": 1570,
          "end": 1604
        },
        "operator": "||",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "numOrBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 1608,
            "end": 1617
          },
          "operator": "!==",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrNumOrBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 1622,
            "end": 1636
          },
          "start": 1608,
          "end": 1636
        },
        "start": 1570,
        "end": 1636
      },
      "consequent": {
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
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1652,
                          "end": 1658
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1661,
                          "end": 1667
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1670,
                          "end": 1677
                        }
                      ],
                      "start": 1652,
                      "end": 1677
                    },
                    "start": 1650,
                    "end": 1677
                  },
                  "start": 1648,
                  "end": 1677
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1680,
                  "end": 1694
                },
                "definite": false,
                "start": 1648,
                "end": 1694
              }
            ],
            "declare": false,
            "start": 1644,
            "end": 1695
          }
        ],
        "start": 1638,
        "end": 1726
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
                "name": "numOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1738,
                "end": 1747
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1750,
                "end": 1764
              },
              "start": 1738,
              "end": 1764
            },
            "directive": null,
            "start": 1738,
            "end": 1765
          }
        ],
        "start": 1732,
        "end": 1787
      },
      "start": 1566,
      "end": 1787
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1787
}
```
