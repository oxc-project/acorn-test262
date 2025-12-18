__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 200,
        "end": 201
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "red",
              "optional": false,
              "typeAnnotation": null,
              "start": 204,
              "end": 207
            },
            "initializer": null,
            "computed": false,
            "start": 204,
            "end": 207
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "blue",
              "optional": false,
              "typeAnnotation": null,
              "start": 209,
              "end": 213
            },
            "initializer": null,
            "computed": false,
            "start": 209,
            "end": 213
          }
        ],
        "start": 202,
        "end": 215
      },
      "const": false,
      "declare": false,
      "start": 195,
      "end": 215
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
            "name": "a0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 436,
                        "end": 442
                      },
                      "start": 434,
                      "end": 442
                    },
                    "start": 433,
                    "end": 442
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 447,
                        "end": 453
                      },
                      "start": 445,
                      "end": 453
                    },
                    "start": 444,
                    "end": 453
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 458,
                    "end": 464
                  },
                  "start": 455,
                  "end": 464
                },
                "start": 432,
                "end": 464
              },
              "start": 430,
              "end": 464
            },
            "start": 428,
            "end": 464
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 468,
                "end": 471
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null,
                "start": 473,
                "end": 476
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 487,
                        "end": 490
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toExponential",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 491,
                        "end": 504
                      },
                      "optional": false,
                      "computed": false,
                      "start": 487,
                      "end": 504
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 487,
                    "end": 506
                  },
                  "directive": null,
                  "start": 487,
                  "end": 507
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 519,
                    "end": 520
                  },
                  "start": 512,
                  "end": 521
                }
              ],
              "start": 481,
              "end": 523
            },
            "id": null,
            "generator": false,
            "start": 467,
            "end": 523
          },
          "definite": false,
          "start": 428,
          "end": 523
        }
      ],
      "declare": false,
      "start": 424,
      "end": 523
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Class",
        "optional": false,
        "typeAnnotation": null,
        "start": 531,
        "end": 536
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 537,
              "end": 538
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 537,
            "end": 538
          }
        ],
        "start": 536,
        "end": 539
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 546,
              "end": 549
            },
            "value": {
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
                "body": [],
                "start": 552,
                "end": 555
              },
              "expression": false,
              "start": 549,
              "end": 555
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 546,
            "end": 555
          }
        ],
        "start": 540,
        "end": 557
      },
      "abstract": false,
      "declare": false,
      "start": 525,
      "end": 557
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
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
                          "name": "Class",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 571,
                          "end": 576
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Number",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 577,
                                "end": 583
                              },
                              "typeArguments": null,
                              "start": 577,
                              "end": 583
                            }
                          ],
                          "start": 576,
                          "end": 584
                        },
                        "start": 571,
                        "end": 584
                      },
                      "start": 569,
                      "end": 584
                    },
                    "start": 568,
                    "end": 584
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 589,
                    "end": 595
                  },
                  "start": 586,
                  "end": 595
                },
                "start": 567,
                "end": 595
              },
              "start": 565,
              "end": 595
            },
            "start": 563,
            "end": 595
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a1",
                "optional": false,
                "typeAnnotation": null,
                "start": 599,
                "end": 601
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 612,
                        "end": 614
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 615,
                        "end": 618
                      },
                      "optional": false,
                      "computed": false,
                      "start": 612,
                      "end": 618
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 612,
                    "end": 620
                  },
                  "directive": null,
                  "start": 612,
                  "end": 621
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 633,
                    "end": 634
                  },
                  "start": 626,
                  "end": 635
                }
              ],
              "start": 606,
              "end": 637
            },
            "id": null,
            "generator": false,
            "start": 598,
            "end": 637
          },
          "definite": false,
          "start": 563,
          "end": 637
        }
      ],
      "declare": false,
      "start": 559,
      "end": 637
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
            "name": "b1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1090,
                            "end": 1096
                          },
                          "start": 1088,
                          "end": 1096
                        },
                        "start": 1087,
                        "end": 1096
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 1101,
                            "end": 1108
                          },
                          "start": 1099,
                          "end": 1108
                        },
                        "start": 1098,
                        "end": 1108
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1113,
                        "end": 1117
                      },
                      "start": 1110,
                      "end": 1117
                    },
                    "start": 1086,
                    "end": 1117
                  },
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1126,
                            "end": 1132
                          },
                          "start": 1124,
                          "end": 1132
                        },
                        "start": 1123,
                        "end": 1132
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 1137,
                            "end": 1144
                          },
                          "start": 1135,
                          "end": 1144
                        },
                        "start": 1134,
                        "end": 1144
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1149,
                        "end": 1155
                      },
                      "start": 1146,
                      "end": 1155
                    },
                    "start": 1122,
                    "end": 1155
                  }
                ],
                "start": 1085,
                "end": 1156
              },
              "start": 1083,
              "end": 1156
            },
            "start": 1081,
            "end": 1156
          },
          "init": null,
          "definite": false,
          "start": 1081,
          "end": 1156
        }
      ],
      "declare": false,
      "start": 1077,
      "end": 1157
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1158,
          "end": 1160
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null,
              "start": 1164,
              "end": 1165
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 1167,
              "end": 1168
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 1173,
            "end": 1176
          },
          "id": null,
          "generator": false,
          "start": 1163,
          "end": 1176
        },
        "start": 1158,
        "end": 1176
      },
      "directive": null,
      "start": 1158,
      "end": 1177
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1193,
                      "end": 1195
                    },
                    "typeArguments": null,
                    "start": 1186,
                    "end": 1195
                  },
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1203,
                            "end": 1209
                          },
                          "start": 1201,
                          "end": 1209
                        },
                        "start": 1200,
                        "end": 1209
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1214,
                            "end": 1220
                          },
                          "start": 1212,
                          "end": 1220
                        },
                        "start": 1211,
                        "end": 1220
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1225,
                        "end": 1231
                      },
                      "start": 1222,
                      "end": 1231
                    },
                    "start": 1199,
                    "end": 1231
                  }
                ],
                "start": 1186,
                "end": 1232
              },
              "start": 1184,
              "end": 1232
            },
            "start": 1182,
            "end": 1232
          },
          "init": null,
          "definite": false,
          "start": 1182,
          "end": 1232
        }
      ],
      "declare": false,
      "start": 1178,
      "end": 1233
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1234,
          "end": 1236
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1240,
              "end": 1243
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1245,
              "end": 1248
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1262,
                    "end": 1265
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1268,
                    "end": 1269
                  },
                  "start": 1262,
                  "end": 1269
                },
                "start": 1255,
                "end": 1270
              }
            ],
            "start": 1253,
            "end": 1272
          },
          "id": null,
          "generator": false,
          "start": 1239,
          "end": 1272
        },
        "start": 1234,
        "end": 1272
      },
      "directive": null,
      "start": 1234,
      "end": 1272
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1273,
          "end": 1275
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1279,
              "end": 1282
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1284,
              "end": 1287
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 1301,
                  "end": 1308
                },
                "start": 1294,
                "end": 1309
              }
            ],
            "start": 1292,
            "end": 1311
          },
          "id": null,
          "generator": false,
          "start": 1278,
          "end": 1311
        },
        "start": 1273,
        "end": 1311
      },
      "directive": null,
      "start": 1273,
      "end": 1311
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
            "name": "b3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1327,
                        "end": 1333
                      },
                      "start": 1325,
                      "end": 1333
                    },
                    "start": 1321,
                    "end": 1333
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "num",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1340,
                        "end": 1346
                      },
                      "start": 1338,
                      "end": 1346
                    },
                    "start": 1335,
                    "end": 1346
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "boo",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1353,
                        "end": 1360
                      },
                      "start": 1351,
                      "end": 1360
                    },
                    "start": 1348,
                    "end": 1360
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1365,
                    "end": 1369
                  },
                  "start": 1362,
                  "end": 1369
                },
                "start": 1320,
                "end": 1369
              },
              "start": 1318,
              "end": 1369
            },
            "start": 1316,
            "end": 1369
          },
          "init": null,
          "definite": false,
          "start": 1316,
          "end": 1369
        }
      ],
      "declare": false,
      "start": 1312,
      "end": 1370
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1371,
          "end": 1373
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1377,
              "end": 1381
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "number",
              "optional": false,
              "typeAnnotation": null,
              "start": 1383,
              "end": 1389
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 1394,
            "end": 1397
          },
          "id": null,
          "generator": false,
          "start": 1376,
          "end": 1397
        },
        "start": 1371,
        "end": 1397
      },
      "directive": null,
      "start": 1371,
      "end": 1398
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
            "name": "b4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1412,
                          "end": 1413
                        },
                        "typeArguments": null,
                        "start": 1412,
                        "end": 1413
                      },
                      "start": 1410,
                      "end": 1413
                    },
                    "start": 1409,
                    "end": 1413
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1418,
                    "end": 1424
                  },
                  "start": 1415,
                  "end": 1424
                },
                "start": 1408,
                "end": 1424
              },
              "start": 1406,
              "end": 1424
            },
            "start": 1404,
            "end": 1424
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "number",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1428,
                  "end": 1434
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1437,
                  "end": 1438
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 1428,
                "end": 1438
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 1452,
                    "end": 1459
                  },
                  "start": 1445,
                  "end": 1460
                }
              ],
              "start": 1443,
              "end": 1462
            },
            "id": null,
            "generator": false,
            "start": 1427,
            "end": 1462
          },
          "definite": false,
          "start": 1404,
          "end": 1462
        }
      ],
      "declare": false,
      "start": 1400,
      "end": 1463
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
            "name": "b5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [],
                        "start": 1476,
                        "end": 1478
                      },
                      "start": 1474,
                      "end": 1478
                    },
                    "start": 1473,
                    "end": 1478
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1483,
                    "end": 1489
                  },
                  "start": 1480,
                  "end": 1489
                },
                "start": 1472,
                "end": 1489
              },
              "start": 1470,
              "end": 1489
            },
            "start": 1468,
            "end": 1489
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "number",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1493,
                  "end": 1499
                },
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 1502,
                  "end": 1510
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 1493,
                "end": 1510
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 1524,
                    "end": 1531
                  },
                  "start": 1517,
                  "end": 1532
                }
              ],
              "start": 1515,
              "end": 1534
            },
            "id": null,
            "generator": false,
            "start": 1492,
            "end": 1534
          },
          "definite": false,
          "start": 1468,
          "end": 1534
        }
      ],
      "declare": false,
      "start": 1464,
      "end": 1535
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
            "name": "b6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1713,
                            "end": 1719
                          },
                          "start": 1711,
                          "end": 1719
                        },
                        "start": 1710,
                        "end": 1719
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 1724,
                            "end": 1731
                          },
                          "start": 1722,
                          "end": 1731
                        },
                        "start": 1721,
                        "end": 1731
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1736,
                        "end": 1740
                      },
                      "start": 1733,
                      "end": 1740
                    },
                    "start": 1709,
                    "end": 1740
                  },
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1749,
                            "end": 1755
                          },
                          "start": 1747,
                          "end": 1755
                        },
                        "start": 1746,
                        "end": 1755
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1760,
                        "end": 1766
                      },
                      "start": 1757,
                      "end": 1766
                    },
                    "start": 1745,
                    "end": 1766
                  }
                ],
                "start": 1708,
                "end": 1767
              },
              "start": 1706,
              "end": 1767
            },
            "start": 1704,
            "end": 1767
          },
          "init": null,
          "definite": false,
          "start": 1704,
          "end": 1767
        }
      ],
      "declare": false,
      "start": 1700,
      "end": 1768
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
            "name": "b7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1782,
                            "end": 1788
                          },
                          "start": 1780,
                          "end": 1788
                        },
                        "start": 1779,
                        "end": 1788
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 1793,
                            "end": 1800
                          },
                          "start": 1791,
                          "end": 1800
                        },
                        "start": 1790,
                        "end": 1800
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1805,
                        "end": 1809
                      },
                      "start": 1802,
                      "end": 1809
                    },
                    "start": 1778,
                    "end": 1809
                  },
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1818,
                            "end": 1824
                          },
                          "start": 1816,
                          "end": 1824
                        },
                        "start": 1815,
                        "end": 1824
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1829,
                            "end": 1835
                          },
                          "start": 1827,
                          "end": 1835
                        },
                        "start": 1826,
                        "end": 1835
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1840,
                        "end": 1846
                      },
                      "start": 1837,
                      "end": 1846
                    },
                    "start": 1814,
                    "end": 1846
                  }
                ],
                "start": 1777,
                "end": 1847
              },
              "start": 1775,
              "end": 1847
            },
            "start": 1773,
            "end": 1847
          },
          "init": null,
          "definite": false,
          "start": 1773,
          "end": 1847
        }
      ],
      "declare": false,
      "start": 1769,
      "end": 1848
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1849,
          "end": 1851
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null,
              "start": 1855,
              "end": 1856
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1863,
                      "end": 1864
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toLowerCase",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1865,
                      "end": 1876
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1863,
                    "end": 1876
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1863,
                  "end": 1878
                },
                "directive": null,
                "start": 1863,
                "end": 1878
              }
            ],
            "start": 1861,
            "end": 1880
          },
          "id": null,
          "generator": false,
          "start": 1854,
          "end": 1880
        },
        "start": 1849,
        "end": 1880
      },
      "directive": null,
      "start": 1849,
      "end": 1881
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1882,
          "end": 1884
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1888,
              "end": 1889
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1900,
                      "end": 1901
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toExponential",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1902,
                      "end": 1915
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1900,
                    "end": 1915
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1900,
                  "end": 1917
                },
                "directive": null,
                "start": 1900,
                "end": 1918
              },
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1930,
                  "end": 1931
                },
                "start": 1923,
                "end": 1932
              }
            ],
            "start": 1894,
            "end": 1934
          },
          "id": null,
          "generator": false,
          "start": 1887,
          "end": 1934
        },
        "start": 1882,
        "end": 1934
      },
      "directive": null,
      "start": 1882,
      "end": 1935
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b7",
          "optional": false,
          "typeAnnotation": null,
          "start": 2041,
          "end": 2043
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "j",
              "optional": false,
              "typeAnnotation": null,
              "start": 2047,
              "end": 2048
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 2050,
              "end": 2051
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 2056,
            "end": 2059
          },
          "id": null,
          "generator": false,
          "start": 2046,
          "end": 2059
        },
        "start": 2041,
        "end": 2059
      },
      "directive": null,
      "start": 2041,
      "end": 2060
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
        "start": 2156,
        "end": 2157
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2158,
              "end": 2159
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2158,
            "end": 2159
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2161,
              "end": 2162
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2161,
            "end": 2162
          }
        ],
        "start": 2157,
        "end": 2163
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2170,
              "end": 2181
            },
            "value": {
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSFunctionType",
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "j",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "T",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2206,
                                            "end": 2207
                                          },
                                          "typeArguments": null,
                                          "start": 2206,
                                          "end": 2207
                                        },
                                        "start": 2204,
                                        "end": 2207
                                      },
                                      "start": 2203,
                                      "end": 2207
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "k",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "U",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2212,
                                            "end": 2213
                                          },
                                          "typeArguments": null,
                                          "start": 2212,
                                          "end": 2213
                                        },
                                        "start": 2210,
                                        "end": 2213
                                      },
                                      "start": 2209,
                                      "end": 2213
                                    }
                                  ],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSArrayType",
                                      "elementType": {
                                        "type": "TSUnionType",
                                        "types": [
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 2219,
                                              "end": 2220
                                            },
                                            "typeArguments": null,
                                            "start": 2219,
                                            "end": 2220
                                          },
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "U",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 2221,
                                              "end": 2222
                                            },
                                            "typeArguments": null,
                                            "start": 2221,
                                            "end": 2222
                                          }
                                        ],
                                        "start": 2219,
                                        "end": 2222
                                      },
                                      "start": 2218,
                                      "end": 2225
                                    },
                                    "start": 2215,
                                    "end": 2225
                                  },
                                  "start": 2202,
                                  "end": 2225
                                },
                                {
                                  "type": "TSFunctionType",
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "j",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSNumberKeyword",
                                          "start": 2234,
                                          "end": 2240
                                        },
                                        "start": 2232,
                                        "end": 2240
                                      },
                                      "start": 2231,
                                      "end": 2240
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "k",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "U",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2244,
                                            "end": 2245
                                          },
                                          "typeArguments": null,
                                          "start": 2244,
                                          "end": 2245
                                        },
                                        "start": 2243,
                                        "end": 2245
                                      },
                                      "start": 2241,
                                      "end": 2245
                                    }
                                  ],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSArrayType",
                                      "elementType": {
                                        "type": "TSNumberKeyword",
                                        "start": 2250,
                                        "end": 2256
                                      },
                                      "start": 2250,
                                      "end": 2258
                                    },
                                    "start": 2247,
                                    "end": 2258
                                  },
                                  "start": 2230,
                                  "end": 2258
                                }
                              ],
                              "start": 2201,
                              "end": 2259
                            },
                            "start": 2199,
                            "end": 2259
                          },
                          "start": 2198,
                          "end": 2259
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "j",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2263,
                              "end": 2264
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2266,
                              "end": 2267
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "ArrayExpression",
                                  "elements": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "j",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2294,
                                      "end": 2295
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "k",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2297,
                                      "end": 2298
                                    }
                                  ],
                                  "start": 2293,
                                  "end": 2299
                                },
                                "start": 2286,
                                "end": 2300
                              }
                            ],
                            "start": 2272,
                            "end": 2310
                          },
                          "id": null,
                          "generator": false,
                          "start": 2262,
                          "end": 2310
                        },
                        "definite": false,
                        "start": 2198,
                        "end": 2310
                      }
                    ],
                    "declare": false,
                    "start": 2194,
                    "end": 2310
                  }
                ],
                "start": 2184,
                "end": 2386
              },
              "expression": false,
              "start": 2181,
              "end": 2386
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2170,
            "end": 2386
          }
        ],
        "start": 2164,
        "end": 2388
      },
      "abstract": false,
      "declare": false,
      "start": 2150,
      "end": 2388
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 195,
  "end": 2388
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 195,
    "end": 199,
    "range": [
      195,
      199
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Identifier",
    "value": "red",
    "start": 204,
    "end": 207,
    "range": [
      204,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "blue",
    "start": 209,
    "end": 213,
    "range": [
      209,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 424,
    "end": 427,
    "range": [
      424,
      427
    ]
  },
  {
    "type": "Identifier",
    "value": "a0",
    "start": 428,
    "end": 430,
    "range": [
      428,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 436,
    "end": 442,
    "range": [
      436,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 447,
    "end": 453,
    "range": [
      447,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 455,
    "end": 457,
    "range": [
      455,
      457
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 458,
    "end": 464,
    "range": [
      458,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 468,
    "end": 471,
    "range": [
      468,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 473,
    "end": 476,
    "range": [
      473,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 478,
    "end": 480,
    "range": [
      478,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 487,
    "end": 490,
    "range": [
      487,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Identifier",
    "value": "toExponential",
    "start": 491,
    "end": 504,
    "range": [
      491,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 512,
    "end": 518,
    "range": [
      512,
      518
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 525,
    "end": 530,
    "range": [
      525,
      530
    ]
  },
  {
    "type": "Identifier",
    "value": "Class",
    "start": 531,
    "end": 536,
    "range": [
      531,
      536
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 537,
    "end": 538,
    "range": [
      537,
      538
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 546,
    "end": 549,
    "range": [
      546,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 559,
    "end": 562,
    "range": [
      559,
      562
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 563,
    "end": 565,
    "range": [
      563,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Identifier",
    "value": "Class",
    "start": 571,
    "end": 576,
    "range": [
      571,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 577,
    "end": 583,
    "range": [
      577,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 586,
    "end": 588,
    "range": [
      586,
      588
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 589,
    "end": 595,
    "range": [
      589,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 599,
    "end": 601,
    "range": [
      599,
      601
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 603,
    "end": 605,
    "range": [
      603,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 612,
    "end": 614,
    "range": [
      612,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 615,
    "end": 618,
    "range": [
      615,
      618
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 626,
    "end": 632,
    "range": [
      626,
      632
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 633,
    "end": 634,
    "range": [
      633,
      634
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1077,
    "end": 1080,
    "range": [
      1077,
      1080
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1081,
    "end": 1083,
    "range": [
      1081,
      1083
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1083,
    "end": 1084,
    "range": [
      1083,
      1084
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1085,
    "end": 1086,
    "range": [
      1085,
      1086
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1086,
    "end": 1087,
    "range": [
      1086,
      1087
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1087,
    "end": 1088,
    "range": [
      1087,
      1088
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1090,
    "end": 1096,
    "range": [
      1090,
      1096
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1096,
    "end": 1097,
    "range": [
      1096,
      1097
    ]
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 1098,
    "end": 1099,
    "range": [
      1098,
      1099
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1101,
    "end": 1108,
    "range": [
      1101,
      1108
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1108,
    "end": 1109,
    "range": [
      1108,
      1109
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1110,
    "end": 1112,
    "range": [
      1110,
      1112
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1113,
    "end": 1117,
    "range": [
      1113,
      1117
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1117,
    "end": 1118,
    "range": [
      1117,
      1118
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1119,
    "end": 1120,
    "range": [
      1119,
      1120
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1121,
    "end": 1122,
    "range": [
      1121,
      1122
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1122,
    "end": 1123,
    "range": [
      1122,
      1123
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1123,
    "end": 1124,
    "range": [
      1123,
      1124
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1124,
    "end": 1125,
    "range": [
      1124,
      1125
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1126,
    "end": 1132,
    "range": [
      1126,
      1132
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1132,
    "end": 1133,
    "range": [
      1132,
      1133
    ]
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 1134,
    "end": 1135,
    "range": [
      1134,
      1135
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1135,
    "end": 1136,
    "range": [
      1135,
      1136
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1137,
    "end": 1144,
    "range": [
      1137,
      1144
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1144,
    "end": 1145,
    "range": [
      1144,
      1145
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1146,
    "end": 1148,
    "range": [
      1146,
      1148
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1149,
    "end": 1155,
    "range": [
      1149,
      1155
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1155,
    "end": 1156,
    "range": [
      1155,
      1156
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1156,
    "end": 1157,
    "range": [
      1156,
      1157
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1158,
    "end": 1160,
    "range": [
      1158,
      1160
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1161,
    "end": 1162,
    "range": [
      1161,
      1162
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1163,
    "end": 1164,
    "range": [
      1163,
      1164
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1164,
    "end": 1165,
    "range": [
      1164,
      1165
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1165,
    "end": 1166,
    "range": [
      1165,
      1166
    ]
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 1167,
    "end": 1168,
    "range": [
      1167,
      1168
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1168,
    "end": 1169,
    "range": [
      1168,
      1169
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1170,
    "end": 1172,
    "range": [
      1170,
      1172
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1173,
    "end": 1174,
    "range": [
      1173,
      1174
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1175,
    "end": 1176,
    "range": [
      1175,
      1176
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1176,
    "end": 1177,
    "range": [
      1176,
      1177
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1178,
    "end": 1181,
    "range": [
      1178,
      1181
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1182,
    "end": 1184,
    "range": [
      1182,
      1184
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1184,
    "end": 1185,
    "range": [
      1184,
      1185
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1186,
    "end": 1192,
    "range": [
      1186,
      1192
    ]
  },
  {
    "type": "Identifier",
    "value": "a0",
    "start": 1193,
    "end": 1195,
    "range": [
      1193,
      1195
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1196,
    "end": 1197,
    "range": [
      1196,
      1197
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1198,
    "end": 1199,
    "range": [
      1198,
      1199
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1199,
    "end": 1200,
    "range": [
      1199,
      1200
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1200,
    "end": 1201,
    "range": [
      1200,
      1201
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1201,
    "end": 1202,
    "range": [
      1201,
      1202
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1203,
    "end": 1209,
    "range": [
      1203,
      1209
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1209,
    "end": 1210,
    "range": [
      1209,
      1210
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1211,
    "end": 1212,
    "range": [
      1211,
      1212
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1212,
    "end": 1213,
    "range": [
      1212,
      1213
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1214,
    "end": 1220,
    "range": [
      1214,
      1220
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1220,
    "end": 1221,
    "range": [
      1220,
      1221
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1222,
    "end": 1224,
    "range": [
      1222,
      1224
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1225,
    "end": 1231,
    "range": [
      1225,
      1231
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1231,
    "end": 1232,
    "range": [
      1231,
      1232
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1232,
    "end": 1233,
    "range": [
      1232,
      1233
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1234,
    "end": 1236,
    "range": [
      1234,
      1236
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1237,
    "end": 1238,
    "range": [
      1237,
      1238
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1239,
    "end": 1240,
    "range": [
      1239,
      1240
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1240,
    "end": 1243,
    "range": [
      1240,
      1243
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1243,
    "end": 1244,
    "range": [
      1243,
      1244
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1245,
    "end": 1248,
    "range": [
      1245,
      1248
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1248,
    "end": 1249,
    "range": [
      1248,
      1249
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1250,
    "end": 1252,
    "range": [
      1250,
      1252
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1253,
    "end": 1254,
    "range": [
      1253,
      1254
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1255,
    "end": 1261,
    "range": [
      1255,
      1261
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1262,
    "end": 1265,
    "range": [
      1262,
      1265
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1266,
    "end": 1267,
    "range": [
      1266,
      1267
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1268,
    "end": 1269,
    "range": [
      1268,
      1269
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1269,
    "end": 1270,
    "range": [
      1269,
      1270
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1271,
    "end": 1272,
    "range": [
      1271,
      1272
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1273,
    "end": 1275,
    "range": [
      1273,
      1275
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1276,
    "end": 1277,
    "range": [
      1276,
      1277
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1278,
    "end": 1279,
    "range": [
      1278,
      1279
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1279,
    "end": 1282,
    "range": [
      1279,
      1282
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1282,
    "end": 1283,
    "range": [
      1282,
      1283
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1284,
    "end": 1287,
    "range": [
      1284,
      1287
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1287,
    "end": 1288,
    "range": [
      1287,
      1288
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1289,
    "end": 1291,
    "range": [
      1289,
      1291
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1292,
    "end": 1293,
    "range": [
      1292,
      1293
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1294,
    "end": 1300,
    "range": [
      1294,
      1300
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1301,
    "end": 1308,
    "range": [
      1301,
      1308
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1308,
    "end": 1309,
    "range": [
      1308,
      1309
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1310,
    "end": 1311,
    "range": [
      1310,
      1311
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1312,
    "end": 1315,
    "range": [
      1312,
      1315
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1316,
    "end": 1318,
    "range": [
      1316,
      1318
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1318,
    "end": 1319,
    "range": [
      1318,
      1319
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1320,
    "end": 1321,
    "range": [
      1320,
      1321
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1321,
    "end": 1325,
    "range": [
      1321,
      1325
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1325,
    "end": 1326,
    "range": [
      1325,
      1326
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1327,
    "end": 1333,
    "range": [
      1327,
      1333
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1333,
    "end": 1334,
    "range": [
      1333,
      1334
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1335,
    "end": 1338,
    "range": [
      1335,
      1338
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1338,
    "end": 1339,
    "range": [
      1338,
      1339
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1340,
    "end": 1346,
    "range": [
      1340,
      1346
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1346,
    "end": 1347,
    "range": [
      1346,
      1347
    ]
  },
  {
    "type": "Identifier",
    "value": "boo",
    "start": 1348,
    "end": 1351,
    "range": [
      1348,
      1351
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1351,
    "end": 1352,
    "range": [
      1351,
      1352
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1353,
    "end": 1360,
    "range": [
      1353,
      1360
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1360,
    "end": 1361,
    "range": [
      1360,
      1361
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1362,
    "end": 1364,
    "range": [
      1362,
      1364
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1365,
    "end": 1369,
    "range": [
      1365,
      1369
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1369,
    "end": 1370,
    "range": [
      1369,
      1370
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1371,
    "end": 1373,
    "range": [
      1371,
      1373
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1374,
    "end": 1375,
    "range": [
      1374,
      1375
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1376,
    "end": 1377,
    "range": [
      1376,
      1377
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1377,
    "end": 1381,
    "range": [
      1377,
      1381
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1381,
    "end": 1382,
    "range": [
      1381,
      1382
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1383,
    "end": 1389,
    "range": [
      1383,
      1389
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1389,
    "end": 1390,
    "range": [
      1389,
      1390
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1391,
    "end": 1393,
    "range": [
      1391,
      1393
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1394,
    "end": 1395,
    "range": [
      1394,
      1395
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1396,
    "end": 1397,
    "range": [
      1396,
      1397
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1397,
    "end": 1398,
    "range": [
      1397,
      1398
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1400,
    "end": 1403,
    "range": [
      1400,
      1403
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1404,
    "end": 1406,
    "range": [
      1404,
      1406
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1406,
    "end": 1407,
    "range": [
      1406,
      1407
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1408,
    "end": 1409,
    "range": [
      1408,
      1409
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1409,
    "end": 1410,
    "range": [
      1409,
      1410
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1410,
    "end": 1411,
    "range": [
      1410,
      1411
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1412,
    "end": 1413,
    "range": [
      1412,
      1413
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1413,
    "end": 1414,
    "range": [
      1413,
      1414
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1415,
    "end": 1417,
    "range": [
      1415,
      1417
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1418,
    "end": 1424,
    "range": [
      1418,
      1424
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1425,
    "end": 1426,
    "range": [
      1425,
      1426
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1427,
    "end": 1428,
    "range": [
      1427,
      1428
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1428,
    "end": 1434,
    "range": [
      1428,
      1434
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1435,
    "end": 1436,
    "range": [
      1435,
      1436
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1437,
    "end": 1438,
    "range": [
      1437,
      1438
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1438,
    "end": 1439,
    "range": [
      1438,
      1439
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1440,
    "end": 1442,
    "range": [
      1440,
      1442
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1443,
    "end": 1444,
    "range": [
      1443,
      1444
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1445,
    "end": 1451,
    "range": [
      1445,
      1451
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1452,
    "end": 1459,
    "range": [
      1452,
      1459
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1459,
    "end": 1460,
    "range": [
      1459,
      1460
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1461,
    "end": 1462,
    "range": [
      1461,
      1462
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1462,
    "end": 1463,
    "range": [
      1462,
      1463
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1464,
    "end": 1467,
    "range": [
      1464,
      1467
    ]
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 1468,
    "end": 1470,
    "range": [
      1468,
      1470
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1470,
    "end": 1471,
    "range": [
      1470,
      1471
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1472,
    "end": 1473,
    "range": [
      1472,
      1473
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1473,
    "end": 1474,
    "range": [
      1473,
      1474
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1474,
    "end": 1475,
    "range": [
      1474,
      1475
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1476,
    "end": 1477,
    "range": [
      1476,
      1477
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1477,
    "end": 1478,
    "range": [
      1477,
      1478
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1478,
    "end": 1479,
    "range": [
      1478,
      1479
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1480,
    "end": 1482,
    "range": [
      1480,
      1482
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1483,
    "end": 1489,
    "range": [
      1483,
      1489
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1490,
    "end": 1491,
    "range": [
      1490,
      1491
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1492,
    "end": 1493,
    "range": [
      1492,
      1493
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1493,
    "end": 1499,
    "range": [
      1493,
      1499
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1500,
    "end": 1501,
    "range": [
      1500,
      1501
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1502,
    "end": 1510,
    "range": [
      1502,
      1510
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1510,
    "end": 1511,
    "range": [
      1510,
      1511
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1512,
    "end": 1514,
    "range": [
      1512,
      1514
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1515,
    "end": 1516,
    "range": [
      1515,
      1516
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1517,
    "end": 1523,
    "range": [
      1517,
      1523
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1524,
    "end": 1531,
    "range": [
      1524,
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
    "type": "Punctuator",
    "value": ";",
    "start": 1534,
    "end": 1535,
    "range": [
      1534,
      1535
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1700,
    "end": 1703,
    "range": [
      1700,
      1703
    ]
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 1704,
    "end": 1706,
    "range": [
      1704,
      1706
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1706,
    "end": 1707,
    "range": [
      1706,
      1707
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1708,
    "end": 1709,
    "range": [
      1708,
      1709
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1709,
    "end": 1710,
    "range": [
      1709,
      1710
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1710,
    "end": 1711,
    "range": [
      1710,
      1711
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1711,
    "end": 1712,
    "range": [
      1711,
      1712
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1713,
    "end": 1719,
    "range": [
      1713,
      1719
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1719,
    "end": 1720,
    "range": [
      1719,
      1720
    ]
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 1721,
    "end": 1722,
    "range": [
      1721,
      1722
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1722,
    "end": 1723,
    "range": [
      1722,
      1723
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1724,
    "end": 1731,
    "range": [
      1724,
      1731
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1731,
    "end": 1732,
    "range": [
      1731,
      1732
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1733,
    "end": 1735,
    "range": [
      1733,
      1735
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1736,
    "end": 1740,
    "range": [
      1736,
      1740
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1740,
    "end": 1741,
    "range": [
      1740,
      1741
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1742,
    "end": 1743,
    "range": [
      1742,
      1743
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1744,
    "end": 1745,
    "range": [
      1744,
      1745
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1745,
    "end": 1746,
    "range": [
      1745,
      1746
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1746,
    "end": 1747,
    "range": [
      1746,
      1747
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1747,
    "end": 1748,
    "range": [
      1747,
      1748
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1749,
    "end": 1755,
    "range": [
      1749,
      1755
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1755,
    "end": 1756,
    "range": [
      1755,
      1756
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1757,
    "end": 1759,
    "range": [
      1757,
      1759
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1760,
    "end": 1766,
    "range": [
      1760,
      1766
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1766,
    "end": 1767,
    "range": [
      1766,
      1767
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1767,
    "end": 1768,
    "range": [
      1767,
      1768
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1769,
    "end": 1772,
    "range": [
      1769,
      1772
    ]
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 1773,
    "end": 1775,
    "range": [
      1773,
      1775
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1775,
    "end": 1776,
    "range": [
      1775,
      1776
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1777,
    "end": 1778,
    "range": [
      1777,
      1778
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1778,
    "end": 1779,
    "range": [
      1778,
      1779
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1779,
    "end": 1780,
    "range": [
      1779,
      1780
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1780,
    "end": 1781,
    "range": [
      1780,
      1781
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1782,
    "end": 1788,
    "range": [
      1782,
      1788
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1788,
    "end": 1789,
    "range": [
      1788,
      1789
    ]
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 1790,
    "end": 1791,
    "range": [
      1790,
      1791
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1791,
    "end": 1792,
    "range": [
      1791,
      1792
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1793,
    "end": 1800,
    "range": [
      1793,
      1800
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1800,
    "end": 1801,
    "range": [
      1800,
      1801
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1802,
    "end": 1804,
    "range": [
      1802,
      1804
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1805,
    "end": 1809,
    "range": [
      1805,
      1809
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1809,
    "end": 1810,
    "range": [
      1809,
      1810
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1811,
    "end": 1812,
    "range": [
      1811,
      1812
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1813,
    "end": 1814,
    "range": [
      1813,
      1814
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1814,
    "end": 1815,
    "range": [
      1814,
      1815
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1815,
    "end": 1816,
    "range": [
      1815,
      1816
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1816,
    "end": 1817,
    "range": [
      1816,
      1817
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1818,
    "end": 1824,
    "range": [
      1818,
      1824
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1824,
    "end": 1825,
    "range": [
      1824,
      1825
    ]
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 1826,
    "end": 1827,
    "range": [
      1826,
      1827
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1827,
    "end": 1828,
    "range": [
      1827,
      1828
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1829,
    "end": 1835,
    "range": [
      1829,
      1835
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1835,
    "end": 1836,
    "range": [
      1835,
      1836
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1837,
    "end": 1839,
    "range": [
      1837,
      1839
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1840,
    "end": 1846,
    "range": [
      1840,
      1846
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1846,
    "end": 1847,
    "range": [
      1846,
      1847
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1847,
    "end": 1848,
    "range": [
      1847,
      1848
    ]
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 1849,
    "end": 1851,
    "range": [
      1849,
      1851
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1852,
    "end": 1853,
    "range": [
      1852,
      1853
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1854,
    "end": 1855,
    "range": [
      1854,
      1855
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1855,
    "end": 1856,
    "range": [
      1855,
      1856
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1856,
    "end": 1857,
    "range": [
      1856,
      1857
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1858,
    "end": 1860,
    "range": [
      1858,
      1860
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1861,
    "end": 1862,
    "range": [
      1861,
      1862
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1863,
    "end": 1864,
    "range": [
      1863,
      1864
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1864,
    "end": 1865,
    "range": [
      1864,
      1865
    ]
  },
  {
    "type": "Identifier",
    "value": "toLowerCase",
    "start": 1865,
    "end": 1876,
    "range": [
      1865,
      1876
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1876,
    "end": 1877,
    "range": [
      1876,
      1877
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1877,
    "end": 1878,
    "range": [
      1877,
      1878
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1879,
    "end": 1880,
    "range": [
      1879,
      1880
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1880,
    "end": 1881,
    "range": [
      1880,
      1881
    ]
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 1882,
    "end": 1884,
    "range": [
      1882,
      1884
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1885,
    "end": 1886,
    "range": [
      1885,
      1886
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1887,
    "end": 1888,
    "range": [
      1887,
      1888
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1888,
    "end": 1889,
    "range": [
      1888,
      1889
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1889,
    "end": 1890,
    "range": [
      1889,
      1890
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1891,
    "end": 1893,
    "range": [
      1891,
      1893
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1894,
    "end": 1895,
    "range": [
      1894,
      1895
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1900,
    "end": 1901,
    "range": [
      1900,
      1901
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1901,
    "end": 1902,
    "range": [
      1901,
      1902
    ]
  },
  {
    "type": "Identifier",
    "value": "toExponential",
    "start": 1902,
    "end": 1915,
    "range": [
      1902,
      1915
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1915,
    "end": 1916,
    "range": [
      1915,
      1916
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1916,
    "end": 1917,
    "range": [
      1916,
      1917
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1917,
    "end": 1918,
    "range": [
      1917,
      1918
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1923,
    "end": 1929,
    "range": [
      1923,
      1929
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1930,
    "end": 1931,
    "range": [
      1930,
      1931
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1931,
    "end": 1932,
    "range": [
      1931,
      1932
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1933,
    "end": 1934,
    "range": [
      1933,
      1934
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1934,
    "end": 1935,
    "range": [
      1934,
      1935
    ]
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 2041,
    "end": 2043,
    "range": [
      2041,
      2043
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2044,
    "end": 2045,
    "range": [
      2044,
      2045
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2046,
    "end": 2047,
    "range": [
      2046,
      2047
    ]
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 2047,
    "end": 2048,
    "range": [
      2047,
      2048
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2048,
    "end": 2049,
    "range": [
      2048,
      2049
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2050,
    "end": 2051,
    "range": [
      2050,
      2051
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2051,
    "end": 2052,
    "range": [
      2051,
      2052
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2053,
    "end": 2055,
    "range": [
      2053,
      2055
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2056,
    "end": 2057,
    "range": [
      2056,
      2057
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2058,
    "end": 2059,
    "range": [
      2058,
      2059
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2059,
    "end": 2060,
    "range": [
      2059,
      2060
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2150,
    "end": 2155,
    "range": [
      2150,
      2155
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2156,
    "end": 2157,
    "range": [
      2156,
      2157
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2157,
    "end": 2158,
    "range": [
      2157,
      2158
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2158,
    "end": 2159,
    "range": [
      2158,
      2159
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2159,
    "end": 2160,
    "range": [
      2159,
      2160
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2161,
    "end": 2162,
    "range": [
      2161,
      2162
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2162,
    "end": 2163,
    "range": [
      2162,
      2163
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2164,
    "end": 2165,
    "range": [
      2164,
      2165
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2170,
    "end": 2181,
    "range": [
      2170,
      2181
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2181,
    "end": 2182,
    "range": [
      2181,
      2182
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2182,
    "end": 2183,
    "range": [
      2182,
      2183
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2184,
    "end": 2185,
    "range": [
      2184,
      2185
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2194,
    "end": 2197,
    "range": [
      2194,
      2197
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2198,
    "end": 2199,
    "range": [
      2198,
      2199
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2199,
    "end": 2200,
    "range": [
      2199,
      2200
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2201,
    "end": 2202,
    "range": [
      2201,
      2202
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2202,
    "end": 2203,
    "range": [
      2202,
      2203
    ]
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 2203,
    "end": 2204,
    "range": [
      2203,
      2204
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2204,
    "end": 2205,
    "range": [
      2204,
      2205
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2206,
    "end": 2207,
    "range": [
      2206,
      2207
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2207,
    "end": 2208,
    "range": [
      2207,
      2208
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2209,
    "end": 2210,
    "range": [
      2209,
      2210
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2210,
    "end": 2211,
    "range": [
      2210,
      2211
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2212,
    "end": 2213,
    "range": [
      2212,
      2213
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2213,
    "end": 2214,
    "range": [
      2213,
      2214
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2215,
    "end": 2217,
    "range": [
      2215,
      2217
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2218,
    "end": 2219,
    "range": [
      2218,
      2219
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2219,
    "end": 2220,
    "range": [
      2219,
      2220
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2220,
    "end": 2221,
    "range": [
      2220,
      2221
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2221,
    "end": 2222,
    "range": [
      2221,
      2222
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2222,
    "end": 2223,
    "range": [
      2222,
      2223
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2223,
    "end": 2224,
    "range": [
      2223,
      2224
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2224,
    "end": 2225,
    "range": [
      2224,
      2225
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2225,
    "end": 2226,
    "range": [
      2225,
      2226
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2227,
    "end": 2228,
    "range": [
      2227,
      2228
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2229,
    "end": 2230,
    "range": [
      2229,
      2230
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2230,
    "end": 2231,
    "range": [
      2230,
      2231
    ]
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 2231,
    "end": 2232,
    "range": [
      2231,
      2232
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2232,
    "end": 2233,
    "range": [
      2232,
      2233
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2234,
    "end": 2240,
    "range": [
      2234,
      2240
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2240,
    "end": 2241,
    "range": [
      2240,
      2241
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2241,
    "end": 2242,
    "range": [
      2241,
      2242
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2243,
    "end": 2244,
    "range": [
      2243,
      2244
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2244,
    "end": 2245,
    "range": [
      2244,
      2245
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2245,
    "end": 2246,
    "range": [
      2245,
      2246
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2247,
    "end": 2249,
    "range": [
      2247,
      2249
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2250,
    "end": 2256,
    "range": [
      2250,
      2256
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2256,
    "end": 2257,
    "range": [
      2256,
      2257
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2257,
    "end": 2258,
    "range": [
      2257,
      2258
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2258,
    "end": 2259,
    "range": [
      2258,
      2259
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2260,
    "end": 2261,
    "range": [
      2260,
      2261
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2262,
    "end": 2263,
    "range": [
      2262,
      2263
    ]
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 2263,
    "end": 2264,
    "range": [
      2263,
      2264
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2264,
    "end": 2265,
    "range": [
      2264,
      2265
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2266,
    "end": 2267,
    "range": [
      2266,
      2267
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2267,
    "end": 2268,
    "range": [
      2267,
      2268
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2269,
    "end": 2271,
    "range": [
      2269,
      2271
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2272,
    "end": 2273,
    "range": [
      2272,
      2273
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2286,
    "end": 2292,
    "range": [
      2286,
      2292
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2293,
    "end": 2294,
    "range": [
      2293,
      2294
    ]
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 2294,
    "end": 2295,
    "range": [
      2294,
      2295
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2295,
    "end": 2296,
    "range": [
      2295,
      2296
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2297,
    "end": 2298,
    "range": [
      2297,
      2298
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2298,
    "end": 2299,
    "range": [
      2298,
      2299
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2299,
    "end": 2300,
    "range": [
      2299,
      2300
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2309,
    "end": 2310,
    "range": [
      2309,
      2310
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2385,
    "end": 2386,
    "range": [
      2385,
      2386
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2387,
    "end": 2388,
    "range": [
      2387,
      2388
    ]
  }
]
```
