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
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 112
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 140,
                    "end": 142
                  },
                  "start": 133,
                  "end": 143
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 155,
                    "end": 156
                  },
                  "start": 148,
                  "end": 157
                }
              ],
              "start": 127,
              "end": 159
            },
            "expression": false,
            "start": 115,
            "end": 159
          },
          "definite": false,
          "start": 110,
          "end": 159
        }
      ],
      "declare": false,
      "start": 106,
      "end": 160
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 165,
            "end": 167
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 180
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 196,
                    "end": 198
                  },
                  "start": 189,
                  "end": 199
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 211,
                    "end": 212
                  },
                  "start": 204,
                  "end": 213
                }
              ],
              "start": 183,
              "end": 215
            },
            "expression": false,
            "start": 170,
            "end": 215
          },
          "definite": false,
          "start": 165,
          "end": 215
        }
      ],
      "declare": false,
      "start": 161,
      "end": 216
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
            "name": "f3",
            "optional": false,
            "typeAnnotation": null,
            "start": 221,
            "end": 223
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 245,
                    "end": 247
                  },
                  "start": 238,
                  "end": 248
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 260,
                    "end": 261
                  },
                  "start": 253,
                  "end": 262
                }
              ],
              "start": 232,
              "end": 264
            },
            "id": null,
            "generator": false,
            "start": 226,
            "end": 264
          },
          "definite": false,
          "start": 221,
          "end": 264
        }
      ],
      "declare": false,
      "start": 217,
      "end": 265
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
            "name": "f4",
            "optional": false,
            "typeAnnotation": null,
            "start": 377,
            "end": 379
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 404,
                    "end": 408
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": "",
                              "raw": "''",
                              "start": 428,
                              "end": 430
                            }
                          ],
                          "start": 427,
                          "end": 431
                        },
                        "start": 420,
                        "end": 432
                      }
                    ],
                    "start": 410,
                    "end": 438
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 462,
                              "end": 463
                            }
                          ],
                          "start": 461,
                          "end": 464
                        },
                        "start": 454,
                        "end": 465
                      }
                    ],
                    "start": 444,
                    "end": 471
                  },
                  "start": 400,
                  "end": 471
                }
              ],
              "start": 394,
              "end": 473
            },
            "expression": false,
            "start": 382,
            "end": 473
          },
          "definite": false,
          "start": 377,
          "end": 473
        }
      ],
      "declare": false,
      "start": 373,
      "end": 473
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 564,
        "end": 566
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 570,
          "end": 576
        },
        "start": 568,
        "end": 576
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 577,
        "end": 580
      },
      "expression": false,
      "start": 555,
      "end": 580
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
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 586,
            "end": 587
          },
          "init": null,
          "definite": false,
          "start": 586,
          "end": 587
        }
      ],
      "declare": false,
      "start": 582,
      "end": 588
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 683,
        "end": 685
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 686,
            "end": 687
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 690,
            "end": 691
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 686,
          "end": 691
        }
      ],
      "returnType": null,
      "body": {
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
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 703,
                  "end": 704
                },
                "init": {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 707,
                  "end": 708
                },
                "definite": false,
                "start": 703,
                "end": 708
              }
            ],
            "declare": false,
            "start": 699,
            "end": 709
          }
        ],
        "start": 693,
        "end": 711
      },
      "expression": false,
      "start": 674,
      "end": 711
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 802,
        "end": 804
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 805,
            "end": 806
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 809,
            "end": 810
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 805,
          "end": 810
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": true,
          "typeAnnotation": null,
          "start": 812,
          "end": 814
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 816,
        "end": 819
      },
      "expression": false,
      "start": 793,
      "end": 819
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 950,
          "end": 959
        },
        "operator": "===",
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 977,
              "end": 983
            },
            "start": 975,
            "end": 983
          },
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ThrowStatement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 996,
                  "end": 1005
                },
                "start": 990,
                "end": 1006
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1015,
                      "end": 1016
                    },
                    "init": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 1019,
                      "end": 1020
                    },
                    "definite": false,
                    "start": 1015,
                    "end": 1020
                  }
                ],
                "declare": false,
                "start": 1011,
                "end": 1021
              }
            ],
            "start": 984,
            "end": 1023
          },
          "expression": false,
          "start": 964,
          "end": 1023
        },
        "start": 950,
        "end": 1023
      },
      "directive": null,
      "start": 950,
      "end": 1024
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 1032,
        "end": 1036
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1047,
              "end": 1048
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
            "start": 1039,
            "end": 1049
          }
        ],
        "start": 1037,
        "end": 1051
      },
      "abstract": false,
      "declare": false,
      "start": 1026,
      "end": 1051
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnotherClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 1058,
        "end": 1070
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1081,
              "end": 1082
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
            "start": 1073,
            "end": 1083
          }
        ],
        "start": 1071,
        "end": 1085
      },
      "abstract": false,
      "declare": false,
      "start": 1052,
      "end": 1085
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1092,
        "end": 1100
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 1109,
        "end": 1113
      },
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
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 1124,
              "end": 1125
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
            "start": 1116,
            "end": 1126
          }
        ],
        "start": 1114,
        "end": 1128
      },
      "abstract": false,
      "declare": false,
      "start": 1086,
      "end": 1128
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1135,
        "end": 1143
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 1152,
        "end": 1156
      },
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
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1167,
              "end": 1168
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
            "start": 1159,
            "end": 1169
          }
        ],
        "start": 1157,
        "end": 1171
      },
      "abstract": false,
      "declare": false,
      "start": 1129,
      "end": 1171
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1181,
        "end": 1183
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Derived1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1203,
                "end": 1211
              },
              "typeArguments": null,
              "arguments": [],
              "start": 1199,
              "end": 1213
            },
            "start": 1192,
            "end": 1214
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Derived2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1230,
                "end": 1238
              },
              "typeArguments": null,
              "arguments": [],
              "start": 1226,
              "end": 1240
            },
            "start": 1219,
            "end": 1241
          }
        ],
        "start": 1186,
        "end": 1247
      },
      "expression": false,
      "start": 1172,
      "end": 1247
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
            "name": "f9",
            "optional": false,
            "typeAnnotation": null,
            "start": 1252,
            "end": 1254
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1286,
                      "end": 1294
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1282,
                    "end": 1296
                  },
                  "start": 1275,
                  "end": 1297
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1313,
                      "end": 1321
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1309,
                    "end": 1323
                  },
                  "start": 1302,
                  "end": 1324
                }
              ],
              "start": 1269,
              "end": 1326
            },
            "expression": false,
            "start": 1257,
            "end": 1326
          },
          "definite": false,
          "start": 1252,
          "end": 1326
        }
      ],
      "declare": false,
      "start": 1248,
      "end": 1327
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
            "name": "f10",
            "optional": false,
            "typeAnnotation": null,
            "start": 1332,
            "end": 1335
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1361,
                      "end": 1369
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1357,
                    "end": 1371
                  },
                  "start": 1350,
                  "end": 1372
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1388,
                      "end": 1396
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1384,
                    "end": 1398
                  },
                  "start": 1377,
                  "end": 1399
                }
              ],
              "start": 1344,
              "end": 1401
            },
            "id": null,
            "generator": false,
            "start": 1338,
            "end": 1401
          },
          "definite": false,
          "start": 1332,
          "end": 1401
        }
      ],
      "declare": false,
      "start": 1328,
      "end": 1402
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1412,
        "end": 1415
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 1435,
                "end": 1439
              },
              "typeArguments": null,
              "arguments": [],
              "start": 1431,
              "end": 1441
            },
            "start": 1424,
            "end": 1442
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "AnotherClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 1458,
                "end": 1470
              },
              "typeArguments": null,
              "arguments": [],
              "start": 1454,
              "end": 1472
            },
            "start": 1447,
            "end": 1473
          }
        ],
        "start": 1418,
        "end": 1475
      },
      "expression": false,
      "start": 1403,
      "end": 1475
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
            "name": "f12",
            "optional": false,
            "typeAnnotation": null,
            "start": 1480,
            "end": 1483
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1515,
                      "end": 1519
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1511,
                    "end": 1521
                  },
                  "start": 1504,
                  "end": 1522
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AnotherClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1538,
                      "end": 1550
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1534,
                    "end": 1552
                  },
                  "start": 1527,
                  "end": 1553
                }
              ],
              "start": 1498,
              "end": 1555
            },
            "expression": false,
            "start": 1486,
            "end": 1555
          },
          "definite": false,
          "start": 1480,
          "end": 1555
        }
      ],
      "declare": false,
      "start": 1476,
      "end": 1556
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
            "name": "f13",
            "optional": false,
            "typeAnnotation": null,
            "start": 1561,
            "end": 1564
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1590,
                      "end": 1594
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1586,
                    "end": 1596
                  },
                  "start": 1579,
                  "end": 1597
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AnotherClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1613,
                      "end": 1625
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1609,
                    "end": 1627
                  },
                  "start": 1602,
                  "end": 1628
                }
              ],
              "start": 1573,
              "end": 1630
            },
            "id": null,
            "generator": false,
            "start": 1567,
            "end": 1630
          },
          "definite": false,
          "start": 1561,
          "end": 1630
        }
      ],
      "declare": false,
      "start": 1557,
      "end": 1631
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 106,
  "end": 1631
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 106,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 110,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 115,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 133,
    "end": 139
  },
  {
    "type": "String",
    "value": "''",
    "start": 140,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 148,
    "end": 154
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 161,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 165,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 170,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 183,
    "end": 184
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 189,
    "end": 195
  },
  {
    "type": "String",
    "value": "''",
    "start": 196,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 204,
    "end": 210
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 217,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 221,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 229,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 232,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 238,
    "end": 244
  },
  {
    "type": "String",
    "value": "''",
    "start": 245,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 247,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 253,
    "end": 259
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 373,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 377,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 380,
    "end": 381
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 382,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 394,
    "end": 395
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 400,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 403,
    "end": 404
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 404,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 410,
    "end": 411
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 420,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 427,
    "end": 428
  },
  {
    "type": "String",
    "value": "''",
    "start": 428,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 437,
    "end": 438
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 439,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 444,
    "end": 445
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 454,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 461,
    "end": 462
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 472,
    "end": 473
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 555,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 564,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 570,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 579,
    "end": 580
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 582,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 587,
    "end": 588
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 674,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 683,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 693,
    "end": 694
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 699,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 705,
    "end": 706
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 710,
    "end": 711
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 793,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 802,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 818,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 950,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 960,
    "end": 963
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 964,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 975,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 977,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 984,
    "end": 985
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 990,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 996,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1011,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1026,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1032,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1039,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1052,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "AnotherClass",
    "start": 1058,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1073,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1086,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 1092,
    "end": 1100
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1101,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1109,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1116,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1129,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1135,
    "end": 1143
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1144,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1152,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1159,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1172,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "f8",
    "start": 1181,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1192,
    "end": 1198
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1199,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 1203,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1219,
    "end": 1225
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1226,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1230,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1248,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "f9",
    "start": 1252,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1257,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1275,
    "end": 1281
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1282,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 1286,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1302,
    "end": 1308
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1309,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1313,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1328,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 1332,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1341,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1350,
    "end": 1356
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1357,
    "end": 1360
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 1361,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1377,
    "end": 1383
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1384,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1388,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1403,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1412,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1424,
    "end": 1430
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1431,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1435,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1447,
    "end": 1453
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1454,
    "end": 1457
  },
  {
    "type": "Identifier",
    "value": "AnotherClass",
    "start": 1458,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1476,
    "end": 1479
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 1480,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1486,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1504,
    "end": 1510
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1511,
    "end": 1514
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1515,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1527,
    "end": 1533
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1534,
    "end": 1537
  },
  {
    "type": "Identifier",
    "value": "AnotherClass",
    "start": 1538,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1557,
    "end": 1560
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 1561,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1570,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1579,
    "end": 1585
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1586,
    "end": 1589
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1590,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1602,
    "end": 1608
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1609,
    "end": 1612
  },
  {
    "type": "Identifier",
    "value": "AnotherClass",
    "start": 1613,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1630,
    "end": 1631
  }
]
```
