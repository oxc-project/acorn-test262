__ESTREE_TEST__:AST:
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
              "start": 649,
              "end": 663
            },
            "prefix": true,
            "start": 642,
            "end": 663
          },
          "operator": "!==",
          "right": {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 668,
            "end": 676
          },
          "start": 642,
          "end": 676
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
              "start": 687,
              "end": 701
            },
            "prefix": true,
            "start": 680,
            "end": 701
          },
          "operator": "!==",
          "right": {
            "type": "Literal",
            "value": "number",
            "raw": "\"number\"",
            "start": 706,
            "end": 714
          },
          "start": 680,
          "end": 714
        },
        "start": 642,
        "end": 714
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
                "start": 722,
                "end": 726
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 729,
                "end": 743
              },
              "start": 722,
              "end": 743
            },
            "directive": null,
            "start": 722,
            "end": 744
          }
        ],
        "start": 716,
        "end": 757
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
                "start": 769,
                "end": 777
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 780,
                "end": 794
              },
              "start": 769,
              "end": 794
            },
            "directive": null,
            "start": 769,
            "end": 795
          }
        ],
        "start": 763,
        "end": 816
      },
      "start": 638,
      "end": 816
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
                "start": 872,
                "end": 889
              },
              "prefix": true,
              "start": 865,
              "end": 889
            },
            "operator": "!==",
            "right": {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\"",
              "start": 894,
              "end": 902
            },
            "start": 865,
            "end": 902
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
                "name": "strOrNumOrBoolOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 913,
                "end": 930
              },
              "prefix": true,
              "start": 906,
              "end": 930
            },
            "operator": "!==",
            "right": {
              "type": "Literal",
              "value": "number",
              "raw": "\"number\"",
              "start": 935,
              "end": 943
            },
            "start": 906,
            "end": 943
          },
          "start": 865,
          "end": 943
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
              "name": "strOrNumOrBoolOrC",
              "optional": false,
              "typeAnnotation": null,
              "start": 954,
              "end": 971
            },
            "prefix": true,
            "start": 947,
            "end": 971
          },
          "operator": "!==",
          "right": {
            "type": "Literal",
            "value": "boolean",
            "raw": "\"boolean\"",
            "start": 976,
            "end": 985
          },
          "start": 947,
          "end": 985
        },
        "start": 865,
        "end": 985
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
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 993,
                "end": 994
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBoolOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 997,
                "end": 1014
              },
              "start": 993,
              "end": 1014
            },
            "directive": null,
            "start": 993,
            "end": 1015
          }
        ],
        "start": 987,
        "end": 1022
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
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1034,
                "end": 1048
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBoolOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1051,
                "end": 1068
              },
              "start": 1034,
              "end": 1068
            },
            "directive": null,
            "start": 1034,
            "end": 1069
          }
        ],
        "start": 1028,
        "end": 1100
      },
      "start": 861,
      "end": 1100
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
                "start": 1172,
                "end": 1189
              },
              "prefix": true,
              "start": 1165,
              "end": 1189
            },
            "operator": "!==",
            "right": {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\"",
              "start": 1194,
              "end": 1202
            },
            "start": 1165,
            "end": 1202
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
                "name": "strOrNumOrBoolOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1213,
                "end": 1230
              },
              "prefix": true,
              "start": 1206,
              "end": 1230
            },
            "operator": "!==",
            "right": {
              "type": "Literal",
              "value": "number",
              "raw": "\"number\"",
              "start": 1235,
              "end": 1243
            },
            "start": 1206,
            "end": 1243
          },
          "start": 1165,
          "end": 1243
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
              "start": 1254,
              "end": 1268
            },
            "prefix": true,
            "start": 1247,
            "end": 1268
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": "boolean",
            "raw": "\"boolean\"",
            "start": 1273,
            "end": 1282
          },
          "start": 1247,
          "end": 1282
        },
        "start": 1165,
        "end": 1282
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
                "name": "cOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1290,
                "end": 1297
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBoolOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1300,
                "end": 1317
              },
              "start": 1290,
              "end": 1317
            },
            "directive": null,
            "start": 1290,
            "end": 1318
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
                "start": 1338,
                "end": 1342
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1345,
                "end": 1359
              },
              "start": 1338,
              "end": 1359
            },
            "directive": null,
            "start": 1338,
            "end": 1360
          }
        ],
        "start": 1284,
        "end": 1373
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
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1421,
                            "end": 1422
                          },
                          "typeArguments": null,
                          "start": 1421,
                          "end": 1422
                        }
                      ],
                      "start": 1393,
                      "end": 1422
                    },
                    "start": 1391,
                    "end": 1422
                  },
                  "start": 1389,
                  "end": 1422
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumOrBoolOrC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1425,
                  "end": 1442
                },
                "definite": false,
                "start": 1389,
                "end": 1442
              }
            ],
            "declare": false,
            "start": 1385,
            "end": 1443
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
                      ],
                      "start": 1489,
                      "end": 1514
                    },
                    "start": 1487,
                    "end": 1514
                  },
                  "start": 1485,
                  "end": 1514
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1517,
                  "end": 1531
                },
                "definite": false,
                "start": 1485,
                "end": 1531
              }
            ],
            "declare": false,
            "start": 1481,
            "end": 1532
          }
        ],
        "start": 1379,
        "end": 1534
      },
      "start": 1161,
      "end": 1534
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
              "start": 1576,
              "end": 1590
            },
            "prefix": true,
            "start": 1569,
            "end": 1590
          },
          "operator": "!==",
          "right": {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1595,
            "end": 1603
          },
          "start": 1569,
          "end": 1603
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
            "start": 1607,
            "end": 1616
          },
          "operator": "!==",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrNumOrBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 1621,
            "end": 1635
          },
          "start": 1607,
          "end": 1635
        },
        "start": 1569,
        "end": 1635
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
                "start": 1643,
                "end": 1652
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1655,
                "end": 1669
              },
              "start": 1643,
              "end": 1669
            },
            "directive": null,
            "start": 1643,
            "end": 1670
          }
        ],
        "start": 1637,
        "end": 1692
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
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
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
                      ],
                      "start": 1712,
                      "end": 1737
                    },
                    "start": 1710,
                    "end": 1737
                  },
                  "start": 1708,
                  "end": 1737
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1740,
                  "end": 1754
                },
                "definite": false,
                "start": 1708,
                "end": 1754
              }
            ],
            "declare": false,
            "start": 1704,
            "end": 1755
          }
        ],
        "start": 1698,
        "end": 1786
      },
      "start": 1565,
      "end": 1786
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1786
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3,
    "range": [
      0,
      3
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 4,
    "end": 7,
    "range": [
      4,
      7
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 9,
    "end": 15,
    "range": [
      9,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 17,
    "end": 20,
    "range": [
      17,
      20
    ]
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 21,
    "end": 25,
    "range": [
      21,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 27,
    "end": 34,
    "range": [
      27,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 36,
    "end": 39,
    "range": [
      36,
      39
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 40,
    "end": 43,
    "range": [
      40,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 45,
    "end": 51,
    "range": [
      45,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 53,
    "end": 56,
    "range": [
      53,
      56
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 57,
    "end": 65,
    "range": [
      57,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 67,
    "end": 73,
    "range": [
      67,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 76,
    "end": 82,
    "range": [
      76,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 84,
    "end": 87,
    "range": [
      84,
      87
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 88,
    "end": 102,
    "range": [
      88,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 104,
    "end": 110,
    "range": [
      104,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 113,
    "end": 119,
    "range": [
      113,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 122,
    "end": 129,
    "range": [
      122,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 131,
    "end": 134,
    "range": [
      131,
      134
    ]
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 135,
    "end": 144,
    "range": [
      135,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 146,
    "end": 152,
    "range": [
      146,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 155,
    "end": 162,
    "range": [
      155,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 164,
    "end": 169,
    "range": [
      164,
      169
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 174,
    "end": 181,
    "range": [
      174,
      181
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 187,
    "end": 190,
    "range": [
      187,
      190
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 197,
    "end": 200,
    "range": [
      197,
      200
    ]
  },
  {
    "type": "Identifier",
    "value": "cOrBool",
    "start": 201,
    "end": 208,
    "range": [
      201,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 213,
    "end": 220,
    "range": [
      213,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 222,
    "end": 225,
    "range": [
      222,
      225
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBoolOrC",
    "start": 226,
    "end": 243,
    "range": [
      226,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 245,
    "end": 251,
    "range": [
      245,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 254,
    "end": 260,
    "range": [
      254,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 263,
    "end": 270,
    "range": [
      263,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 638,
    "end": 640,
    "range": [
      638,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 642,
    "end": 648,
    "range": [
      642,
      648
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 649,
    "end": 663,
    "range": [
      649,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 664,
    "end": 667,
    "range": [
      664,
      667
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 668,
    "end": 676,
    "range": [
      668,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 677,
    "end": 679,
    "range": [
      677,
      679
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 680,
    "end": 686,
    "range": [
      680,
      686
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 687,
    "end": 701,
    "range": [
      687,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 702,
    "end": 705,
    "range": [
      702,
      705
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 706,
    "end": 714,
    "range": [
      706,
      714
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 716,
    "end": 717,
    "range": [
      716,
      717
    ]
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 722,
    "end": 726,
    "range": [
      722,
      726
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 729,
    "end": 743,
    "range": [
      729,
      743
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 758,
    "end": 762,
    "range": [
      758,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 769,
    "end": 777,
    "range": [
      769,
      777
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 778,
    "end": 779,
    "range": [
      778,
      779
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 780,
    "end": 794,
    "range": [
      780,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 794,
    "end": 795,
    "range": [
      794,
      795
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 815,
    "end": 816,
    "range": [
      815,
      816
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 861,
    "end": 863,
    "range": [
      861,
      863
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 864,
    "end": 865,
    "range": [
      864,
      865
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 865,
    "end": 871,
    "range": [
      865,
      871
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBoolOrC",
    "start": 872,
    "end": 889,
    "range": [
      872,
      889
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 890,
    "end": 893,
    "range": [
      890,
      893
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 894,
    "end": 902,
    "range": [
      894,
      902
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 903,
    "end": 905,
    "range": [
      903,
      905
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 906,
    "end": 912,
    "range": [
      906,
      912
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBoolOrC",
    "start": 913,
    "end": 930,
    "range": [
      913,
      930
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 931,
    "end": 934,
    "range": [
      931,
      934
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 935,
    "end": 943,
    "range": [
      935,
      943
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 944,
    "end": 946,
    "range": [
      944,
      946
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 947,
    "end": 953,
    "range": [
      947,
      953
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBoolOrC",
    "start": 954,
    "end": 971,
    "range": [
      954,
      971
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 972,
    "end": 975,
    "range": [
      972,
      975
    ]
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 976,
    "end": 985,
    "range": [
      976,
      985
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 985,
    "end": 986,
    "range": [
      985,
      986
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 987,
    "end": 988,
    "range": [
      987,
      988
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 993,
    "end": 994,
    "range": [
      993,
      994
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 995,
    "end": 996,
    "range": [
      995,
      996
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBoolOrC",
    "start": 997,
    "end": 1014,
    "range": [
      997,
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
    "type": "Punctuator",
    "value": "}",
    "start": 1021,
    "end": 1022,
    "range": [
      1021,
      1022
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1023,
    "end": 1027,
    "range": [
      1023,
      1027
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1028,
    "end": 1029,
    "range": [
      1028,
      1029
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1034,
    "end": 1048,
    "range": [
      1034,
      1048
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1049,
    "end": 1050,
    "range": [
      1049,
      1050
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBoolOrC",
    "start": 1051,
    "end": 1068,
    "range": [
      1051,
      1068
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1068,
    "end": 1069,
    "range": [
      1068,
      1069
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1161,
    "end": 1163,
    "range": [
      1161,
      1163
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1164,
    "end": 1165,
    "range": [
      1164,
      1165
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1165,
    "end": 1171,
    "range": [
      1165,
      1171
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBoolOrC",
    "start": 1172,
    "end": 1189,
    "range": [
      1172,
      1189
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1190,
    "end": 1193,
    "range": [
      1190,
      1193
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1194,
    "end": 1202,
    "range": [
      1194,
      1202
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1203,
    "end": 1205,
    "range": [
      1203,
      1205
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1206,
    "end": 1212,
    "range": [
      1206,
      1212
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBoolOrC",
    "start": 1213,
    "end": 1230,
    "range": [
      1213,
      1230
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1231,
    "end": 1234,
    "range": [
      1231,
      1234
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 1235,
    "end": 1243,
    "range": [
      1235,
      1243
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1244,
    "end": 1246,
    "range": [
      1244,
      1246
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1247,
    "end": 1253,
    "range": [
      1247,
      1253
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1254,
    "end": 1268,
    "range": [
      1254,
      1268
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1269,
    "end": 1272,
    "range": [
      1269,
      1272
    ]
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 1273,
    "end": 1282,
    "range": [
      1273,
      1282
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1282,
    "end": 1283,
    "range": [
      1282,
      1283
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1284,
    "end": 1285,
    "range": [
      1284,
      1285
    ]
  },
  {
    "type": "Identifier",
    "value": "cOrBool",
    "start": 1290,
    "end": 1297,
    "range": [
      1290,
      1297
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1298,
    "end": 1299,
    "range": [
      1298,
      1299
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBoolOrC",
    "start": 1300,
    "end": 1317,
    "range": [
      1300,
      1317
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1317,
    "end": 1318,
    "range": [
      1317,
      1318
    ]
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 1338,
    "end": 1342,
    "range": [
      1338,
      1342
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1343,
    "end": 1344,
    "range": [
      1343,
      1344
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1345,
    "end": 1359,
    "range": [
      1345,
      1359
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1359,
    "end": 1360,
    "range": [
      1359,
      1360
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1372,
    "end": 1373,
    "range": [
      1372,
      1373
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1374,
    "end": 1378,
    "range": [
      1374,
      1378
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1379,
    "end": 1380,
    "range": [
      1379,
      1380
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1385,
    "end": 1388,
    "range": [
      1385,
      1388
    ]
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 1389,
    "end": 1391,
    "range": [
      1389,
      1391
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1391,
    "end": 1392,
    "range": [
      1391,
      1392
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1393,
    "end": 1399,
    "range": [
      1393,
      1399
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1400,
    "end": 1401,
    "range": [
      1400,
      1401
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1402,
    "end": 1408,
    "range": [
      1402,
      1408
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1409,
    "end": 1410,
    "range": [
      1409,
      1410
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1411,
    "end": 1418,
    "range": [
      1411,
      1418
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1419,
    "end": 1420,
    "range": [
      1419,
      1420
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1421,
    "end": 1422,
    "range": [
      1421,
      1422
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1423,
    "end": 1424,
    "range": [
      1423,
      1424
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBoolOrC",
    "start": 1425,
    "end": 1442,
    "range": [
      1425,
      1442
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1442,
    "end": 1443,
    "range": [
      1442,
      1443
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1481,
    "end": 1484,
    "range": [
      1481,
      1484
    ]
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 1485,
    "end": 1487,
    "range": [
      1485,
      1487
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1487,
    "end": 1488,
    "range": [
      1487,
      1488
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1489,
    "end": 1495,
    "range": [
      1489,
      1495
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1496,
    "end": 1497,
    "range": [
      1496,
      1497
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1498,
    "end": 1504,
    "range": [
      1498,
      1504
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1505,
    "end": 1506,
    "range": [
      1505,
      1506
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1507,
    "end": 1514,
    "range": [
      1507,
      1514
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1515,
    "end": 1516,
    "range": [
      1515,
      1516
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1517,
    "end": 1531,
    "range": [
      1517,
      1531
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1531,
    "end": 1532,
    "range": [
      1531,
      1532
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1533,
    "end": 1534,
    "range": [
      1533,
      1534
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1565,
    "end": 1567,
    "range": [
      1565,
      1567
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1568,
    "end": 1569,
    "range": [
      1568,
      1569
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1569,
    "end": 1575,
    "range": [
      1569,
      1575
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1576,
    "end": 1590,
    "range": [
      1576,
      1590
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1591,
    "end": 1594,
    "range": [
      1591,
      1594
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1595,
    "end": 1603,
    "range": [
      1595,
      1603
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1604,
    "end": 1606,
    "range": [
      1604,
      1606
    ]
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 1607,
    "end": 1616,
    "range": [
      1607,
      1616
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1617,
    "end": 1620,
    "range": [
      1617,
      1620
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1621,
    "end": 1635,
    "range": [
      1621,
      1635
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1635,
    "end": 1636,
    "range": [
      1635,
      1636
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1637,
    "end": 1638,
    "range": [
      1637,
      1638
    ]
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 1643,
    "end": 1652,
    "range": [
      1643,
      1652
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1653,
    "end": 1654,
    "range": [
      1653,
      1654
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1655,
    "end": 1669,
    "range": [
      1655,
      1669
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1669,
    "end": 1670,
    "range": [
      1669,
      1670
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1691,
    "end": 1692,
    "range": [
      1691,
      1692
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1693,
    "end": 1697,
    "range": [
      1693,
      1697
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1698,
    "end": 1699,
    "range": [
      1698,
      1699
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1704,
    "end": 1707,
    "range": [
      1704,
      1707
    ]
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 1708,
    "end": 1710,
    "range": [
      1708,
      1710
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1710,
    "end": 1711,
    "range": [
      1710,
      1711
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1712,
    "end": 1718,
    "range": [
      1712,
      1718
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1719,
    "end": 1720,
    "range": [
      1719,
      1720
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1721,
    "end": 1727,
    "range": [
      1721,
      1727
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1728,
    "end": 1729,
    "range": [
      1728,
      1729
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1730,
    "end": 1737,
    "range": [
      1730,
      1737
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1738,
    "end": 1739,
    "range": [
      1738,
      1739
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1740,
    "end": 1754,
    "range": [
      1740,
      1754
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1754,
    "end": 1755,
    "range": [
      1754,
      1755
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1785,
    "end": 1786,
    "range": [
      1785,
      1786
    ]
  }
]
```
