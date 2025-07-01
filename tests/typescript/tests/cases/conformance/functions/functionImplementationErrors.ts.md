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
