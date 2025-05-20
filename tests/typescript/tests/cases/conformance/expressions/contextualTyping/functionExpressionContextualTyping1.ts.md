__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 195,
  "end": 2388,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 195,
      "end": 215,
      "body": {
        "type": "TSEnumBody",
        "start": 202,
        "end": 215,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 204,
            "end": 207,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 204,
              "end": 207,
              "decorators": [],
              "name": "red",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 209,
            "end": 213,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 209,
              "end": 213,
              "decorators": [],
              "name": "blue",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 200,
        "end": 201,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 424,
      "end": 523,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 428,
          "end": 523,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 428,
            "end": 464,
            "decorators": [],
            "name": "a0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 430,
              "end": 464,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 432,
                "end": 464,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 433,
                    "end": 442,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 434,
                      "end": 442,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 436,
                        "end": 442
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 444,
                    "end": 453,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 445,
                      "end": 453,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 447,
                        "end": 453
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 455,
                  "end": 464,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 458,
                    "end": 464
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 467,
            "end": 523,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 481,
              "end": 523,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 487,
                  "end": 507,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 487,
                    "end": 506,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 487,
                      "end": 504,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 487,
                        "end": 490,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 491,
                        "end": 504,
                        "decorators": [],
                        "name": "toExponential",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 512,
                  "end": 521,
                  "argument": {
                    "type": "Literal",
                    "start": 519,
                    "end": 520,
                    "raw": "0",
                    "value": 0
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 468,
                "end": 471,
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 473,
                "end": 476,
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 525,
      "end": 557,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 540,
        "end": 557,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 546,
            "end": 555,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 546,
              "end": 549,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 549,
              "end": 555,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 552,
                "end": 555,
                "body": []
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
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 531,
        "end": 536,
        "decorators": [],
        "name": "Class",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 536,
        "end": 539,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 537,
            "end": 538,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 537,
              "end": 538,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 559,
      "end": 637,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 563,
          "end": 637,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 563,
            "end": 595,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 565,
              "end": 595,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 567,
                "end": 595,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 568,
                    "end": 584,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 569,
                      "end": 584,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 571,
                        "end": 584,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 576,
                          "end": 584,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 577,
                              "end": 583,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 577,
                                "end": 583,
                                "decorators": [],
                                "name": "Number",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 571,
                          "end": 576,
                          "decorators": [],
                          "name": "Class",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 586,
                  "end": 595,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 589,
                    "end": 595
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 598,
            "end": 637,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 606,
              "end": 637,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 612,
                  "end": 621,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 612,
                    "end": 620,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 612,
                      "end": 618,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 612,
                        "end": 614,
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 615,
                        "end": 618,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 626,
                  "end": 635,
                  "argument": {
                    "type": "Literal",
                    "start": 633,
                    "end": 634,
                    "raw": "1",
                    "value": 1
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 599,
                "end": 601,
                "decorators": [],
                "name": "a1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
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
      "start": 1077,
      "end": 1157,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1081,
          "end": 1156,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1081,
            "end": 1156,
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1083,
              "end": 1156,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1085,
                "end": 1156,
                "types": [
                  {
                    "type": "TSFunctionType",
                    "start": 1086,
                    "end": 1117,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1087,
                        "end": 1096,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1088,
                          "end": 1096,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1090,
                            "end": 1096
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 1098,
                        "end": 1108,
                        "decorators": [],
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1099,
                          "end": 1108,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 1101,
                            "end": 1108
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1110,
                      "end": 1117,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1113,
                        "end": 1117
                      }
                    },
                    "typeParameters": null
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 1122,
                    "end": 1155,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1123,
                        "end": 1132,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1124,
                          "end": 1132,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1126,
                            "end": 1132
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 1134,
                        "end": 1144,
                        "decorators": [],
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1135,
                          "end": 1144,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 1137,
                            "end": 1144
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1146,
                      "end": 1155,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1149,
                        "end": 1155
                      }
                    },
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1158,
      "end": 1177,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1158,
        "end": 1176,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1158,
          "end": 1160,
          "decorators": [],
          "name": "b1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 1163,
          "end": 1176,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 1173,
            "end": 1176,
            "body": []
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 1164,
              "end": 1165,
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 1167,
              "end": 1168,
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1178,
      "end": 1233,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1182,
          "end": 1232,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1182,
            "end": 1232,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1184,
              "end": 1232,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1186,
                "end": 1232,
                "types": [
                  {
                    "type": "TSTypeQuery",
                    "start": 1186,
                    "end": 1195,
                    "exprName": {
                      "type": "Identifier",
                      "start": 1193,
                      "end": 1195,
                      "decorators": [],
                      "name": "a0",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 1199,
                    "end": 1231,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1200,
                        "end": 1209,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1201,
                          "end": 1209,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1203,
                            "end": 1209
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 1211,
                        "end": 1220,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1212,
                          "end": 1220,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1214,
                            "end": 1220
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1222,
                      "end": 1231,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1225,
                        "end": 1231
                      }
                    },
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1234,
      "end": 1272,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1234,
        "end": 1272,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1234,
          "end": 1236,
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 1239,
          "end": 1272,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 1253,
            "end": 1272,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 1255,
                "end": 1270,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 1262,
                  "end": 1269,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 1262,
                    "end": 1265,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1268,
                    "end": 1269,
                    "raw": "1",
                    "value": 1
                  }
                }
              }
            ]
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 1240,
              "end": 1243,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 1245,
              "end": 1248,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1273,
      "end": 1311,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1273,
        "end": 1311,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1273,
          "end": 1275,
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 1278,
          "end": 1311,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 1292,
            "end": 1311,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 1294,
                "end": 1309,
                "argument": {
                  "type": "Literal",
                  "start": 1301,
                  "end": 1308,
                  "raw": "\"hello\"",
                  "value": "hello"
                }
              }
            ]
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 1279,
              "end": 1282,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 1284,
              "end": 1287,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1312,
      "end": 1370,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1316,
          "end": 1369,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1316,
            "end": 1369,
            "decorators": [],
            "name": "b3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1318,
              "end": 1369,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1320,
                "end": 1369,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1321,
                    "end": 1333,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1325,
                      "end": 1333,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1327,
                        "end": 1333
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 1335,
                    "end": 1346,
                    "decorators": [],
                    "name": "num",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1338,
                      "end": 1346,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1340,
                        "end": 1346
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 1348,
                    "end": 1360,
                    "decorators": [],
                    "name": "boo",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1351,
                      "end": 1360,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1353,
                        "end": 1360
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1362,
                  "end": 1369,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1365,
                    "end": 1369
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1371,
      "end": 1398,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1371,
        "end": 1397,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1371,
          "end": 1373,
          "decorators": [],
          "name": "b3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 1376,
          "end": 1397,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 1394,
            "end": 1397,
            "body": []
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 1377,
              "end": 1381,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 1383,
              "end": 1389,
              "decorators": [],
              "name": "number",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1400,
      "end": 1463,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1404,
          "end": 1462,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1404,
            "end": 1424,
            "decorators": [],
            "name": "b4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1406,
              "end": 1424,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1408,
                "end": 1424,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1409,
                    "end": 1413,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1410,
                      "end": 1413,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1412,
                        "end": 1413,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1412,
                          "end": 1413,
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1415,
                  "end": 1424,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1418,
                    "end": 1424
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1427,
            "end": 1462,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1443,
              "end": 1462,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1445,
                  "end": 1460,
                  "argument": {
                    "type": "Literal",
                    "start": 1452,
                    "end": 1459,
                    "raw": "\"hello\"",
                    "value": "hello"
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 1428,
                "end": 1438,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 1428,
                  "end": 1434,
                  "decorators": [],
                  "name": "number",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 1437,
                  "end": 1438,
                  "raw": "1",
                  "value": 1
                },
                "typeAnnotation": null
              }
            ],
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
      "start": 1464,
      "end": 1535,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1468,
          "end": 1534,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1468,
            "end": 1489,
            "decorators": [],
            "name": "b5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1470,
              "end": 1489,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1472,
                "end": 1489,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1473,
                    "end": 1478,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1474,
                      "end": 1478,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1476,
                        "end": 1478,
                        "members": []
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1480,
                  "end": 1489,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1483,
                    "end": 1489
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1492,
            "end": 1534,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1515,
              "end": 1534,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1517,
                  "end": 1532,
                  "argument": {
                    "type": "Literal",
                    "start": 1524,
                    "end": 1531,
                    "raw": "\"hello\"",
                    "value": "hello"
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 1493,
                "end": 1510,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 1493,
                  "end": 1499,
                  "decorators": [],
                  "name": "number",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 1502,
                  "end": 1510,
                  "raw": "\"string\"",
                  "value": "string"
                },
                "typeAnnotation": null
              }
            ],
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
      "start": 1700,
      "end": 1768,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1704,
          "end": 1767,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1704,
            "end": 1767,
            "decorators": [],
            "name": "b6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1706,
              "end": 1767,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1708,
                "end": 1767,
                "types": [
                  {
                    "type": "TSFunctionType",
                    "start": 1709,
                    "end": 1740,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1710,
                        "end": 1719,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1711,
                          "end": 1719,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1713,
                            "end": 1719
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 1721,
                        "end": 1731,
                        "decorators": [],
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1722,
                          "end": 1731,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 1724,
                            "end": 1731
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1733,
                      "end": 1740,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1736,
                        "end": 1740
                      }
                    },
                    "typeParameters": null
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 1745,
                    "end": 1766,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1746,
                        "end": 1755,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1747,
                          "end": 1755,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1749,
                            "end": 1755
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1757,
                      "end": 1766,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1760,
                        "end": 1766
                      }
                    },
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1769,
      "end": 1848,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1773,
          "end": 1847,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1773,
            "end": 1847,
            "decorators": [],
            "name": "b7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1775,
              "end": 1847,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1777,
                "end": 1847,
                "types": [
                  {
                    "type": "TSFunctionType",
                    "start": 1778,
                    "end": 1809,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1779,
                        "end": 1788,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1780,
                          "end": 1788,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1782,
                            "end": 1788
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 1790,
                        "end": 1800,
                        "decorators": [],
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1791,
                          "end": 1800,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 1793,
                            "end": 1800
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1802,
                      "end": 1809,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1805,
                        "end": 1809
                      }
                    },
                    "typeParameters": null
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 1814,
                    "end": 1846,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1815,
                        "end": 1824,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1816,
                          "end": 1824,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1818,
                            "end": 1824
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 1826,
                        "end": 1835,
                        "decorators": [],
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1827,
                          "end": 1835,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1829,
                            "end": 1835
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1837,
                      "end": 1846,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1840,
                        "end": 1846
                      }
                    },
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1849,
      "end": 1881,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1849,
        "end": 1880,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1849,
          "end": 1851,
          "decorators": [],
          "name": "b6",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 1854,
          "end": 1880,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 1861,
            "end": 1880,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 1863,
                "end": 1878,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 1863,
                  "end": 1878,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1863,
                    "end": 1876,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1863,
                      "end": 1864,
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1865,
                      "end": 1876,
                      "decorators": [],
                      "name": "toLowerCase",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 1855,
              "end": 1856,
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1882,
      "end": 1935,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1882,
        "end": 1934,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1882,
          "end": 1884,
          "decorators": [],
          "name": "b6",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 1887,
          "end": 1934,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 1894,
            "end": 1934,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 1900,
                "end": 1918,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 1900,
                  "end": 1917,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1900,
                    "end": 1915,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1900,
                      "end": 1901,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1902,
                      "end": 1915,
                      "decorators": [],
                      "name": "toExponential",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              },
              {
                "type": "ReturnStatement",
                "start": 1923,
                "end": 1932,
                "argument": {
                  "type": "Identifier",
                  "start": 1930,
                  "end": 1931,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 1888,
              "end": 1889,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2041,
      "end": 2060,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2041,
        "end": 2059,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2041,
          "end": 2043,
          "decorators": [],
          "name": "b7",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 2046,
          "end": 2059,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 2056,
            "end": 2059,
            "body": []
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 2047,
              "end": 2048,
              "decorators": [],
              "name": "j",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 2050,
              "end": 2051,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 2150,
      "end": 2388,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2164,
        "end": 2388,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2170,
            "end": 2386,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2170,
              "end": 2181,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2181,
              "end": 2386,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2184,
                "end": 2386,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 2194,
                    "end": 2310,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2198,
                        "end": 2310,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 2198,
                          "end": 2259,
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2199,
                            "end": 2259,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 2201,
                              "end": 2259,
                              "types": [
                                {
                                  "type": "TSFunctionType",
                                  "start": 2202,
                                  "end": 2225,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 2203,
                                      "end": 2207,
                                      "decorators": [],
                                      "name": "j",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 2204,
                                        "end": 2207,
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 2206,
                                          "end": 2207,
                                          "typeArguments": null,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 2206,
                                            "end": 2207,
                                            "decorators": [],
                                            "name": "T",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        }
                                      }
                                    },
                                    {
                                      "type": "Identifier",
                                      "start": 2209,
                                      "end": 2213,
                                      "decorators": [],
                                      "name": "k",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 2210,
                                        "end": 2213,
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 2212,
                                          "end": 2213,
                                          "typeArguments": null,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 2212,
                                            "end": 2213,
                                            "decorators": [],
                                            "name": "U",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        }
                                      }
                                    }
                                  ],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "start": 2215,
                                    "end": 2225,
                                    "typeAnnotation": {
                                      "type": "TSArrayType",
                                      "start": 2218,
                                      "end": 2225,
                                      "elementType": {
                                        "type": "TSUnionType",
                                        "start": 2219,
                                        "end": 2222,
                                        "types": [
                                          {
                                            "type": "TSTypeReference",
                                            "start": 2219,
                                            "end": 2220,
                                            "typeArguments": null,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 2219,
                                              "end": 2220,
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          },
                                          {
                                            "type": "TSTypeReference",
                                            "start": 2221,
                                            "end": 2222,
                                            "typeArguments": null,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 2221,
                                              "end": 2222,
                                              "decorators": [],
                                              "name": "U",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  },
                                  "typeParameters": null
                                },
                                {
                                  "type": "TSFunctionType",
                                  "start": 2230,
                                  "end": 2258,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 2231,
                                      "end": 2240,
                                      "decorators": [],
                                      "name": "j",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 2232,
                                        "end": 2240,
                                        "typeAnnotation": {
                                          "type": "TSNumberKeyword",
                                          "start": 2234,
                                          "end": 2240
                                        }
                                      }
                                    },
                                    {
                                      "type": "Identifier",
                                      "start": 2241,
                                      "end": 2245,
                                      "decorators": [],
                                      "name": "k",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 2243,
                                        "end": 2245,
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 2244,
                                          "end": 2245,
                                          "typeArguments": null,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 2244,
                                            "end": 2245,
                                            "decorators": [],
                                            "name": "U",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        }
                                      }
                                    }
                                  ],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "start": 2247,
                                    "end": 2258,
                                    "typeAnnotation": {
                                      "type": "TSArrayType",
                                      "start": 2250,
                                      "end": 2258,
                                      "elementType": {
                                        "type": "TSNumberKeyword",
                                        "start": 2250,
                                        "end": 2256
                                      }
                                    }
                                  },
                                  "typeParameters": null
                                }
                              ]
                            }
                          }
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 2262,
                          "end": 2310,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 2272,
                            "end": 2310,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 2286,
                                "end": 2300,
                                "argument": {
                                  "type": "ArrayExpression",
                                  "start": 2293,
                                  "end": 2299,
                                  "elements": [
                                    {
                                      "type": "Identifier",
                                      "start": 2294,
                                      "end": 2295,
                                      "decorators": [],
                                      "name": "j",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    {
                                      "type": "Identifier",
                                      "start": 2297,
                                      "end": 2298,
                                      "decorators": [],
                                      "name": "k",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ]
                                }
                              }
                            ]
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 2263,
                              "end": 2264,
                              "decorators": [],
                              "name": "j",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            {
                              "type": "Identifier",
                              "start": 2266,
                              "end": 2267,
                              "decorators": [],
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
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
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2156,
        "end": 2157,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2157,
        "end": 2163,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2158,
            "end": 2159,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2158,
              "end": 2159,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2161,
            "end": 2162,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2161,
              "end": 2162,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
