__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 106,
  "end": 1632,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 106,
      "end": 160,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 110,
          "end": 159,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 112,
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 115,
            "end": 159,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 127,
              "end": 159,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 133,
                  "end": 143,
                  "argument": {
                    "type": "Literal",
                    "start": 140,
                    "end": 142,
                    "raw": "''",
                    "value": ""
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 148,
                  "end": 157,
                  "argument": {
                    "type": "Literal",
                    "start": 155,
                    "end": 156,
                    "raw": "3",
                    "value": 3
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 161,
      "end": 216,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 165,
          "end": 215,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 165,
            "end": 167,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 170,
            "end": 215,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 183,
              "end": 215,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 189,
                  "end": 199,
                  "argument": {
                    "type": "Literal",
                    "start": 196,
                    "end": 198,
                    "raw": "''",
                    "value": ""
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 204,
                  "end": 213,
                  "argument": {
                    "type": "Literal",
                    "start": 211,
                    "end": 212,
                    "raw": "3",
                    "value": 3
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 179,
              "end": 180,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 217,
      "end": 265,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 221,
          "end": 264,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 221,
            "end": 223,
            "decorators": [],
            "name": "f3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 226,
            "end": 264,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 232,
              "end": 264,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 238,
                  "end": 248,
                  "argument": {
                    "type": "Literal",
                    "start": 245,
                    "end": 247,
                    "raw": "''",
                    "value": ""
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 253,
                  "end": 262,
                  "argument": {
                    "type": "Literal",
                    "start": 260,
                    "end": 261,
                    "raw": "3",
                    "value": 3
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 373,
      "end": 473,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 377,
          "end": 473,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 377,
            "end": 379,
            "decorators": [],
            "name": "f4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 382,
            "end": 473,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 394,
              "end": 473,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 400,
                  "end": 471,
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 444,
                    "end": 471,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 454,
                        "end": 465,
                        "argument": {
                          "type": "ArrayExpression",
                          "start": 461,
                          "end": 464,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 462,
                              "end": 463,
                              "raw": "1",
                              "value": 1
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 410,
                    "end": 438,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 420,
                        "end": 432,
                        "argument": {
                          "type": "ArrayExpression",
                          "start": 427,
                          "end": 431,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 428,
                              "end": 430,
                              "raw": "''",
                              "value": ""
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "Literal",
                    "start": 404,
                    "end": 408,
                    "raw": "true",
                    "value": true
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 555,
      "end": 580,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 577,
        "end": 580,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 564,
        "end": 566,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 568,
        "end": 576,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 570,
          "end": 576
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 582,
      "end": 588,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 586,
          "end": 587,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 586,
            "end": 587,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 674,
      "end": 711,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 693,
        "end": 711,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 699,
            "end": 709,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 703,
                "end": 708,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 703,
                  "end": 704,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 707,
                  "end": 708,
                  "raw": "4",
                  "value": 4
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 683,
        "end": 685,
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 686,
          "end": 691,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 686,
            "end": 687,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "start": 690,
            "end": 691,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 793,
      "end": 819,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 816,
        "end": 819,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 802,
        "end": 804,
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 805,
          "end": 810,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 805,
            "end": 806,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "start": 809,
            "end": 810,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 812,
          "end": 814,
          "decorators": [],
          "name": "m",
          "optional": true,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 950,
      "end": 1024,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 950,
        "end": 1023,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 950,
          "end": 959,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "FunctionExpression",
          "start": 964,
          "end": 1023,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 984,
            "end": 1023,
            "body": [
              {
                "type": "ThrowStatement",
                "start": 990,
                "end": 1006,
                "argument": {
                  "type": "Identifier",
                  "start": 996,
                  "end": 1005,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "VariableDeclaration",
                "start": 1011,
                "end": 1021,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1015,
                    "end": 1020,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1015,
                      "end": 1016,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "Literal",
                      "start": 1019,
                      "end": 1020,
                      "raw": "4",
                      "value": 4
                    }
                  }
                ],
                "declare": false,
                "kind": "var"
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 975,
            "end": 983,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 977,
              "end": 983
            }
          },
          "typeParameters": null
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1026,
      "end": 1051,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1037,
        "end": 1051,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1039,
            "end": 1049,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1047,
              "end": 1048,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1032,
        "end": 1036,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1052,
      "end": 1085,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1071,
        "end": 1085,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1073,
            "end": 1083,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1081,
              "end": 1082,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1058,
        "end": 1070,
        "decorators": [],
        "name": "AnotherClass",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1086,
      "end": 1128,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1114,
        "end": 1128,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1116,
            "end": 1126,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1124,
              "end": 1125,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1092,
        "end": 1100,
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 1109,
        "end": 1113,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1129,
      "end": 1171,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1157,
        "end": 1171,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1159,
            "end": 1169,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1167,
              "end": 1168,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1135,
        "end": 1143,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 1152,
        "end": 1156,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1172,
      "end": 1247,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1186,
        "end": 1247,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1192,
            "end": 1214,
            "argument": {
              "type": "NewExpression",
              "start": 1199,
              "end": 1213,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1203,
                "end": 1211,
                "decorators": [],
                "name": "Derived1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          {
            "type": "ReturnStatement",
            "start": 1219,
            "end": 1241,
            "argument": {
              "type": "NewExpression",
              "start": 1226,
              "end": 1240,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1230,
                "end": 1238,
                "decorators": [],
                "name": "Derived2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1181,
        "end": 1183,
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1248,
      "end": 1327,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1252,
          "end": 1326,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1252,
            "end": 1254,
            "decorators": [],
            "name": "f9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 1257,
            "end": 1326,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1269,
              "end": 1326,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1275,
                  "end": 1297,
                  "argument": {
                    "type": "NewExpression",
                    "start": 1282,
                    "end": 1296,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 1286,
                      "end": 1294,
                      "decorators": [],
                      "name": "Derived1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 1302,
                  "end": 1324,
                  "argument": {
                    "type": "NewExpression",
                    "start": 1309,
                    "end": 1323,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 1313,
                      "end": 1321,
                      "decorators": [],
                      "name": "Derived2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1328,
      "end": 1402,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1332,
          "end": 1401,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1332,
            "end": 1335,
            "decorators": [],
            "name": "f10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1338,
            "end": 1401,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1344,
              "end": 1401,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1350,
                  "end": 1372,
                  "argument": {
                    "type": "NewExpression",
                    "start": 1357,
                    "end": 1371,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 1361,
                      "end": 1369,
                      "decorators": [],
                      "name": "Derived1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 1377,
                  "end": 1399,
                  "argument": {
                    "type": "NewExpression",
                    "start": 1384,
                    "end": 1398,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 1388,
                      "end": 1396,
                      "decorators": [],
                      "name": "Derived2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 1403,
      "end": 1475,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1418,
        "end": 1475,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1424,
            "end": 1442,
            "argument": {
              "type": "NewExpression",
              "start": 1431,
              "end": 1441,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1435,
                "end": 1439,
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          {
            "type": "ReturnStatement",
            "start": 1447,
            "end": 1473,
            "argument": {
              "type": "NewExpression",
              "start": 1454,
              "end": 1472,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1458,
                "end": 1470,
                "decorators": [],
                "name": "AnotherClass",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1412,
        "end": 1415,
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1476,
      "end": 1556,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1480,
          "end": 1555,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1480,
            "end": 1483,
            "decorators": [],
            "name": "f12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 1486,
            "end": 1555,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1498,
              "end": 1555,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1504,
                  "end": 1522,
                  "argument": {
                    "type": "NewExpression",
                    "start": 1511,
                    "end": 1521,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 1515,
                      "end": 1519,
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 1527,
                  "end": 1553,
                  "argument": {
                    "type": "NewExpression",
                    "start": 1534,
                    "end": 1552,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 1538,
                      "end": 1550,
                      "decorators": [],
                      "name": "AnotherClass",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1557,
      "end": 1631,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1561,
          "end": 1630,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1561,
            "end": 1564,
            "decorators": [],
            "name": "f13",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1567,
            "end": 1630,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1573,
              "end": 1630,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1579,
                  "end": 1597,
                  "argument": {
                    "type": "NewExpression",
                    "start": 1586,
                    "end": 1596,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 1590,
                      "end": 1594,
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 1602,
                  "end": 1628,
                  "argument": {
                    "type": "NewExpression",
                    "start": 1609,
                    "end": 1627,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 1613,
                      "end": 1625,
                      "decorators": [],
                      "name": "AnotherClass",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
