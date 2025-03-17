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
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 112,
            "name": "f1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 115,
            "end": 159,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
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
                    "value": "",
                    "raw": "''"
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
                    "value": 3,
                    "raw": "3"
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 165,
            "end": 167,
            "name": "f2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 170,
            "end": 215,
            "id": {
              "type": "Identifier",
              "start": 179,
              "end": 180,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
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
                    "value": "",
                    "raw": "''"
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
                    "value": 3,
                    "raw": "3"
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 221,
            "end": 223,
            "name": "f3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 226,
            "end": 264,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
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
                    "value": "",
                    "raw": "''"
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
                    "value": 3,
                    "raw": "3"
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 377,
            "end": 379,
            "name": "f4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 382,
            "end": 473,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 394,
              "end": 473,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 400,
                  "end": 471,
                  "test": {
                    "type": "Literal",
                    "start": 404,
                    "end": 408,
                    "value": true,
                    "raw": "true"
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
                              "value": "",
                              "raw": "''"
                            }
                          ]
                        }
                      }
                    ]
                  },
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
                              "value": 1,
                              "raw": "1"
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 555,
      "end": 580,
      "id": {
        "type": "Identifier",
        "start": 564,
        "end": 566,
        "name": "f5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 577,
        "end": 580,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 568,
        "end": 576,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 570,
          "end": 576
        }
      }
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
          "id": {
            "type": "Identifier",
            "start": 586,
            "end": 587,
            "name": "m",
            "typeAnnotation": null,
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
      "type": "FunctionDeclaration",
      "start": 674,
      "end": 711,
      "id": {
        "type": "Identifier",
        "start": 683,
        "end": 685,
        "name": "f6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 686,
          "end": 691,
          "left": {
            "type": "Identifier",
            "start": 686,
            "end": 687,
            "name": "n",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 690,
            "end": 691,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 703,
                  "end": 704,
                  "name": "m",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 707,
                  "end": 708,
                  "value": 4,
                  "raw": "4"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 793,
      "end": 819,
      "id": {
        "type": "Identifier",
        "start": 802,
        "end": 804,
        "name": "f7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 805,
          "end": 810,
          "left": {
            "type": "Identifier",
            "start": 805,
            "end": 806,
            "name": "n",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 809,
            "end": 810,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 812,
          "end": 814,
          "name": "m",
          "typeAnnotation": null,
          "decorators": [],
          "optional": true
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 816,
        "end": 819,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 950,
      "end": 1024,
      "expression": {
        "type": "BinaryExpression",
        "start": 950,
        "end": 1023,
        "left": {
          "type": "Identifier",
          "start": 950,
          "end": 959,
          "name": "undefined",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "FunctionExpression",
          "start": 964,
          "end": 1023,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [],
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
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "id": {
                      "type": "Identifier",
                      "start": 1015,
                      "end": 1016,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "Literal",
                      "start": 1019,
                      "end": 1020,
                      "value": 4,
                      "raw": "4"
                    },
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": false
              }
            ]
          },
          "declare": false,
          "typeParameters": null,
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 975,
            "end": 983,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 977,
              "end": 983
            }
          }
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1026,
      "end": 1051,
      "id": {
        "type": "Identifier",
        "start": 1032,
        "end": 1036,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1037,
        "end": 1051,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1039,
            "end": 1049,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1047,
              "end": 1048,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1052,
      "end": 1085,
      "id": {
        "type": "Identifier",
        "start": 1058,
        "end": 1070,
        "name": "AnotherClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1071,
        "end": 1085,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1073,
            "end": 1083,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1081,
              "end": 1082,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1086,
      "end": 1128,
      "id": {
        "type": "Identifier",
        "start": 1092,
        "end": 1100,
        "name": "Derived1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 1109,
        "end": 1113,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 1114,
        "end": 1128,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1116,
            "end": 1126,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1124,
              "end": 1125,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1129,
      "end": 1171,
      "id": {
        "type": "Identifier",
        "start": 1135,
        "end": 1143,
        "name": "Derived2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 1152,
        "end": 1156,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 1157,
        "end": 1171,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1159,
            "end": 1169,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1167,
              "end": 1168,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1172,
      "end": 1247,
      "id": {
        "type": "Identifier",
        "start": 1181,
        "end": 1183,
        "name": "f8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "callee": {
                "type": "Identifier",
                "start": 1203,
                "end": 1211,
                "name": "Derived1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
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
              "callee": {
                "type": "Identifier",
                "start": 1230,
                "end": 1238,
                "name": "Derived2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 1252,
            "end": 1254,
            "name": "f9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 1257,
            "end": 1326,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
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
                    "callee": {
                      "type": "Identifier",
                      "start": 1286,
                      "end": 1294,
                      "name": "Derived1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
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
                    "callee": {
                      "type": "Identifier",
                      "start": 1313,
                      "end": 1321,
                      "name": "Derived2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1332,
            "end": 1335,
            "name": "f10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1338,
            "end": 1401,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
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
                    "callee": {
                      "type": "Identifier",
                      "start": 1361,
                      "end": 1369,
                      "name": "Derived1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
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
                    "callee": {
                      "type": "Identifier",
                      "start": 1388,
                      "end": 1396,
                      "name": "Derived2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1403,
      "end": 1475,
      "id": {
        "type": "Identifier",
        "start": 1412,
        "end": 1415,
        "name": "f11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "callee": {
                "type": "Identifier",
                "start": 1435,
                "end": 1439,
                "name": "Base",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
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
              "callee": {
                "type": "Identifier",
                "start": 1458,
                "end": 1470,
                "name": "AnotherClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 1480,
            "end": 1483,
            "name": "f12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 1486,
            "end": 1555,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
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
                    "callee": {
                      "type": "Identifier",
                      "start": 1515,
                      "end": 1519,
                      "name": "Base",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
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
                    "callee": {
                      "type": "Identifier",
                      "start": 1538,
                      "end": 1550,
                      "name": "AnotherClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1561,
            "end": 1564,
            "name": "f13",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1567,
            "end": 1630,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
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
                    "callee": {
                      "type": "Identifier",
                      "start": 1590,
                      "end": 1594,
                      "name": "Base",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
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
                    "callee": {
                      "type": "Identifier",
                      "start": 1613,
                      "end": 1625,
                      "name": "AnotherClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
