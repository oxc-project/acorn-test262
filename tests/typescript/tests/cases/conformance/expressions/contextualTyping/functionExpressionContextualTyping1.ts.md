__ESTREE_TEST__:PASS:
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
