__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1786,
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
      "start": 638,
      "end": 816,
      "test": {
        "type": "LogicalExpression",
        "start": 642,
        "end": 714,
        "left": {
          "type": "BinaryExpression",
          "start": 642,
          "end": 676,
          "left": {
            "type": "UnaryExpression",
            "start": 642,
            "end": 663,
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "start": 649,
              "end": 663,
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
            "start": 668,
            "end": 676,
            "value": "string",
            "raw": "\"string\""
          }
        },
        "operator": "&&",
        "right": {
          "type": "BinaryExpression",
          "start": 680,
          "end": 714,
          "left": {
            "type": "UnaryExpression",
            "start": 680,
            "end": 701,
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "start": 687,
              "end": 701,
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
            "start": 706,
            "end": 714,
            "value": "number",
            "raw": "\"number\""
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 716,
        "end": 757,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 722,
            "end": 744,
            "expression": {
              "type": "AssignmentExpression",
              "start": 722,
              "end": 743,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 722,
                "end": 726,
                "decorators": [],
                "name": "bool",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 729,
                "end": 743,
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
        "start": 763,
        "end": 816,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 769,
            "end": 795,
            "expression": {
              "type": "AssignmentExpression",
              "start": 769,
              "end": 794,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 769,
                "end": 777,
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 780,
                "end": 794,
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
      "start": 861,
      "end": 1100,
      "test": {
        "type": "LogicalExpression",
        "start": 865,
        "end": 985,
        "left": {
          "type": "LogicalExpression",
          "start": 865,
          "end": 943,
          "left": {
            "type": "BinaryExpression",
            "start": 865,
            "end": 902,
            "left": {
              "type": "UnaryExpression",
              "start": 865,
              "end": 889,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 872,
                "end": 889,
                "decorators": [],
                "name": "strOrNumOrBoolOrC",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "operator": "!==",
            "right": {
              "type": "Literal",
              "start": 894,
              "end": 902,
              "value": "string",
              "raw": "\"string\""
            }
          },
          "operator": "&&",
          "right": {
            "type": "BinaryExpression",
            "start": 906,
            "end": 943,
            "left": {
              "type": "UnaryExpression",
              "start": 906,
              "end": 930,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 913,
                "end": 930,
                "decorators": [],
                "name": "strOrNumOrBoolOrC",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "operator": "!==",
            "right": {
              "type": "Literal",
              "start": 935,
              "end": 943,
              "value": "number",
              "raw": "\"number\""
            }
          }
        },
        "operator": "&&",
        "right": {
          "type": "BinaryExpression",
          "start": 947,
          "end": 985,
          "left": {
            "type": "UnaryExpression",
            "start": 947,
            "end": 971,
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "start": 954,
              "end": 971,
              "decorators": [],
              "name": "strOrNumOrBoolOrC",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          "operator": "!==",
          "right": {
            "type": "Literal",
            "start": 976,
            "end": 985,
            "value": "boolean",
            "raw": "\"boolean\""
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 987,
        "end": 1022,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 993,
            "end": 1015,
            "expression": {
              "type": "AssignmentExpression",
              "start": 993,
              "end": 1014,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 993,
                "end": 994,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 997,
                "end": 1014,
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
        "start": 1028,
        "end": 1100,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1034,
            "end": 1069,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1034,
              "end": 1068,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1034,
                "end": 1048,
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1051,
                "end": 1068,
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
      "start": 1161,
      "end": 1534,
      "test": {
        "type": "LogicalExpression",
        "start": 1165,
        "end": 1282,
        "left": {
          "type": "LogicalExpression",
          "start": 1165,
          "end": 1243,
          "left": {
            "type": "BinaryExpression",
            "start": 1165,
            "end": 1202,
            "left": {
              "type": "UnaryExpression",
              "start": 1165,
              "end": 1189,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 1172,
                "end": 1189,
                "decorators": [],
                "name": "strOrNumOrBoolOrC",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "operator": "!==",
            "right": {
              "type": "Literal",
              "start": 1194,
              "end": 1202,
              "value": "string",
              "raw": "\"string\""
            }
          },
          "operator": "&&",
          "right": {
            "type": "BinaryExpression",
            "start": 1206,
            "end": 1243,
            "left": {
              "type": "UnaryExpression",
              "start": 1206,
              "end": 1230,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 1213,
                "end": 1230,
                "decorators": [],
                "name": "strOrNumOrBoolOrC",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "operator": "!==",
            "right": {
              "type": "Literal",
              "start": 1235,
              "end": 1243,
              "value": "number",
              "raw": "\"number\""
            }
          }
        },
        "operator": "&&",
        "right": {
          "type": "BinaryExpression",
          "start": 1247,
          "end": 1282,
          "left": {
            "type": "UnaryExpression",
            "start": 1247,
            "end": 1268,
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "start": 1254,
              "end": 1268,
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
            "start": 1273,
            "end": 1282,
            "value": "boolean",
            "raw": "\"boolean\""
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1284,
        "end": 1373,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1290,
            "end": 1318,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1290,
              "end": 1317,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1290,
                "end": 1297,
                "decorators": [],
                "name": "cOrBool",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1300,
                "end": 1317,
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
            "start": 1338,
            "end": 1360,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1338,
              "end": 1359,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1338,
                "end": 1342,
                "decorators": [],
                "name": "bool",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1345,
                "end": 1359,
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
        "start": 1379,
        "end": 1534,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1385,
            "end": 1443,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1389,
                "end": 1442,
                "id": {
                  "type": "Identifier",
                  "start": 1389,
                  "end": 1422,
                  "decorators": [],
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1391,
                    "end": 1422,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1393,
                      "end": 1422,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1393,
                          "end": 1399
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1402,
                          "end": 1408
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1411,
                          "end": 1418
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1421,
                          "end": 1422,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1421,
                            "end": 1422,
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
                  "start": 1425,
                  "end": 1442,
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
            "start": 1481,
            "end": 1532,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1485,
                "end": 1531,
                "id": {
                  "type": "Identifier",
                  "start": 1485,
                  "end": 1514,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1487,
                    "end": 1514,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1489,
                      "end": 1514,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1489,
                          "end": 1495
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1498,
                          "end": 1504
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1507,
                          "end": 1514
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1517,
                  "end": 1531,
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
    },
    {
      "type": "IfStatement",
      "start": 1565,
      "end": 1786,
      "test": {
        "type": "LogicalExpression",
        "start": 1569,
        "end": 1635,
        "left": {
          "type": "BinaryExpression",
          "start": 1569,
          "end": 1603,
          "left": {
            "type": "UnaryExpression",
            "start": 1569,
            "end": 1590,
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "start": 1576,
              "end": 1590,
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
            "start": 1595,
            "end": 1603,
            "value": "string",
            "raw": "\"string\""
          }
        },
        "operator": "&&",
        "right": {
          "type": "BinaryExpression",
          "start": 1607,
          "end": 1635,
          "left": {
            "type": "Identifier",
            "start": 1607,
            "end": 1616,
            "decorators": [],
            "name": "numOrBool",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "!==",
          "right": {
            "type": "Identifier",
            "start": 1621,
            "end": 1635,
            "decorators": [],
            "name": "strOrNumOrBool",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1637,
        "end": 1692,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1643,
            "end": 1670,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1643,
              "end": 1669,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1643,
                "end": 1652,
                "decorators": [],
                "name": "numOrBool",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1655,
                "end": 1669,
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
        "start": 1698,
        "end": 1786,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1704,
            "end": 1755,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1708,
                "end": 1754,
                "id": {
                  "type": "Identifier",
                  "start": 1708,
                  "end": 1737,
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1710,
                    "end": 1737,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1712,
                      "end": 1737,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1712,
                          "end": 1718
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1721,
                          "end": 1727
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1730,
                          "end": 1737
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1740,
                  "end": 1754,
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
