__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1787,
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
      "type": "ClassDeclaration",
      "start": 164,
      "end": 186,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 170,
        "end": 171,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 172,
        "end": 186,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 174,
            "end": 184,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 182,
              "end": 183,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
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
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 187,
      "end": 196,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 191,
          "end": 195,
          "id": {
            "type": "Identifier",
            "start": 191,
            "end": 195,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 192,
              "end": 195,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 194,
                "end": 195,
                "typeName": {
                  "type": "Identifier",
                  "start": 194,
                  "end": 195,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 197,
      "end": 221,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 201,
          "end": 220,
          "id": {
            "type": "Identifier",
            "start": 201,
            "end": 220,
            "decorators": [],
            "name": "cOrBool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 208,
              "end": 220,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 210,
                "end": 220,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 210,
                    "end": 211,
                    "typeName": {
                      "type": "Identifier",
                      "start": 210,
                      "end": 211,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 213,
                    "end": 220
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
      "start": 222,
      "end": 275,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 226,
          "end": 274,
          "id": {
            "type": "Identifier",
            "start": 226,
            "end": 274,
            "decorators": [],
            "name": "strOrNumOrBoolOrC",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 243,
              "end": 274,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 245,
                "end": 274,
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
                    "start": 273,
                    "end": 274,
                    "typeName": {
                      "type": "Identifier",
                      "start": 273,
                      "end": 274,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
      "start": 639,
      "end": 817,
      "test": {
        "type": "LogicalExpression",
        "start": 643,
        "end": 715,
        "left": {
          "type": "BinaryExpression",
          "start": 643,
          "end": 677,
          "left": {
            "type": "UnaryExpression",
            "start": 643,
            "end": 664,
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "start": 650,
              "end": 664,
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
            "start": 669,
            "end": 677,
            "value": "string",
            "raw": "\"string\""
          }
        },
        "operator": "||",
        "right": {
          "type": "BinaryExpression",
          "start": 681,
          "end": 715,
          "left": {
            "type": "UnaryExpression",
            "start": 681,
            "end": 702,
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "start": 688,
              "end": 702,
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
            "start": 707,
            "end": 715,
            "value": "number",
            "raw": "\"number\""
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 717,
        "end": 770,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 723,
            "end": 749,
            "expression": {
              "type": "AssignmentExpression",
              "start": 723,
              "end": 748,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 723,
                "end": 731,
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 734,
                "end": 748,
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
        "start": 776,
        "end": 817,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 782,
            "end": 804,
            "expression": {
              "type": "AssignmentExpression",
              "start": 782,
              "end": 803,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 782,
                "end": 786,
                "decorators": [],
                "name": "bool",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 789,
                "end": 803,
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
      "start": 862,
      "end": 1101,
      "test": {
        "type": "LogicalExpression",
        "start": 866,
        "end": 986,
        "left": {
          "type": "LogicalExpression",
          "start": 866,
          "end": 944,
          "left": {
            "type": "BinaryExpression",
            "start": 866,
            "end": 903,
            "left": {
              "type": "UnaryExpression",
              "start": 866,
              "end": 890,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 873,
                "end": 890,
                "decorators": [],
                "name": "strOrNumOrBoolOrC",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 895,
              "end": 903,
              "value": "string",
              "raw": "\"string\""
            }
          },
          "operator": "||",
          "right": {
            "type": "BinaryExpression",
            "start": 907,
            "end": 944,
            "left": {
              "type": "UnaryExpression",
              "start": 907,
              "end": 931,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 914,
                "end": 931,
                "decorators": [],
                "name": "strOrNumOrBoolOrC",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 936,
              "end": 944,
              "value": "number",
              "raw": "\"number\""
            }
          }
        },
        "operator": "||",
        "right": {
          "type": "BinaryExpression",
          "start": 948,
          "end": 986,
          "left": {
            "type": "UnaryExpression",
            "start": 948,
            "end": 972,
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "start": 955,
              "end": 972,
              "decorators": [],
              "name": "strOrNumOrBoolOrC",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "start": 977,
            "end": 986,
            "value": "boolean",
            "raw": "\"boolean\""
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 988,
        "end": 1060,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 994,
            "end": 1029,
            "expression": {
              "type": "AssignmentExpression",
              "start": 994,
              "end": 1028,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 994,
                "end": 1008,
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1011,
                "end": 1028,
                "decorators": [],
                "name": "strOrNumOrBoolOrC",
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
        "start": 1066,
        "end": 1101,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1072,
            "end": 1094,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1072,
              "end": 1093,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1072,
                "end": 1073,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1076,
                "end": 1093,
                "decorators": [],
                "name": "strOrNumOrBoolOrC",
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
      "start": 1162,
      "end": 1535,
      "test": {
        "type": "LogicalExpression",
        "start": 1166,
        "end": 1283,
        "left": {
          "type": "LogicalExpression",
          "start": 1166,
          "end": 1244,
          "left": {
            "type": "BinaryExpression",
            "start": 1166,
            "end": 1203,
            "left": {
              "type": "UnaryExpression",
              "start": 1166,
              "end": 1190,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 1173,
                "end": 1190,
                "decorators": [],
                "name": "strOrNumOrBoolOrC",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 1195,
              "end": 1203,
              "value": "string",
              "raw": "\"string\""
            }
          },
          "operator": "||",
          "right": {
            "type": "BinaryExpression",
            "start": 1207,
            "end": 1244,
            "left": {
              "type": "UnaryExpression",
              "start": 1207,
              "end": 1231,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 1214,
                "end": 1231,
                "decorators": [],
                "name": "strOrNumOrBoolOrC",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 1236,
              "end": 1244,
              "value": "number",
              "raw": "\"number\""
            }
          }
        },
        "operator": "||",
        "right": {
          "type": "BinaryExpression",
          "start": 1248,
          "end": 1283,
          "left": {
            "type": "UnaryExpression",
            "start": 1248,
            "end": 1269,
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "start": 1255,
              "end": 1269,
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
            "start": 1274,
            "end": 1283,
            "value": "boolean",
            "raw": "\"boolean\""
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1285,
        "end": 1440,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1291,
            "end": 1349,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1295,
                "end": 1348,
                "id": {
                  "type": "Identifier",
                  "start": 1295,
                  "end": 1328,
                  "decorators": [],
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1297,
                    "end": 1328,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1299,
                      "end": 1328,
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
                          "start": 1327,
                          "end": 1328,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1327,
                            "end": 1328,
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1331,
                  "end": 1348,
                  "decorators": [],
                  "name": "strOrNumOrBoolOrC",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1387,
            "end": 1438,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1391,
                "end": 1437,
                "id": {
                  "type": "Identifier",
                  "start": 1391,
                  "end": 1420,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1393,
                    "end": 1420,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1395,
                      "end": 1420,
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
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1423,
                  "end": 1437,
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
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 1446,
        "end": 1535,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1452,
            "end": 1480,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1452,
              "end": 1479,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1452,
                "end": 1459,
                "decorators": [],
                "name": "cOrBool",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1462,
                "end": 1479,
                "decorators": [],
                "name": "strOrNumOrBoolOrC",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1500,
            "end": 1522,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1500,
              "end": 1521,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1500,
                "end": 1504,
                "decorators": [],
                "name": "bool",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1507,
                "end": 1521,
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
      "start": 1566,
      "end": 1787,
      "test": {
        "type": "LogicalExpression",
        "start": 1570,
        "end": 1636,
        "left": {
          "type": "BinaryExpression",
          "start": 1570,
          "end": 1604,
          "left": {
            "type": "UnaryExpression",
            "start": 1570,
            "end": 1591,
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "start": 1577,
              "end": 1591,
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
            "start": 1596,
            "end": 1604,
            "value": "string",
            "raw": "\"string\""
          }
        },
        "operator": "||",
        "right": {
          "type": "BinaryExpression",
          "start": 1608,
          "end": 1636,
          "left": {
            "type": "Identifier",
            "start": 1608,
            "end": 1617,
            "decorators": [],
            "name": "numOrBool",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "!==",
          "right": {
            "type": "Identifier",
            "start": 1622,
            "end": 1636,
            "decorators": [],
            "name": "strOrNumOrBool",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1638,
        "end": 1726,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1644,
            "end": 1695,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1648,
                "end": 1694,
                "id": {
                  "type": "Identifier",
                  "start": 1648,
                  "end": 1677,
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1650,
                    "end": 1677,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1652,
                      "end": 1677,
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
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1680,
                  "end": 1694,
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
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 1732,
        "end": 1787,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1738,
            "end": 1765,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1738,
              "end": 1764,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1738,
                "end": 1747,
                "decorators": [],
                "name": "numOrBool",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1750,
                "end": 1764,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
