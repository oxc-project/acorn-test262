__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 196,
  "end": 2389,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 196,
      "end": 216,
      "body": {
        "type": "TSEnumBody",
        "start": 203,
        "end": 216,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 205,
            "end": 208,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 205,
              "end": 208,
              "decorators": [],
              "name": "red",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 210,
            "end": 214,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 210,
              "end": 214,
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
        "start": 201,
        "end": 202,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 425,
      "end": 524,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 429,
          "end": 524,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 429,
            "end": 465,
            "decorators": [],
            "name": "a0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 431,
              "end": 465,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 433,
                "end": 465,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 434,
                    "end": 443,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 435,
                      "end": 443,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 437,
                        "end": 443
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 445,
                    "end": 454,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 446,
                      "end": 454,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 448,
                        "end": 454
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 456,
                  "end": 465,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 459,
                    "end": 465
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 468,
            "end": 524,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 482,
              "end": 524,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 488,
                  "end": 508,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 488,
                    "end": 507,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 488,
                      "end": 505,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 488,
                        "end": 491,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 492,
                        "end": 505,
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
                  "start": 513,
                  "end": 522,
                  "argument": {
                    "type": "Literal",
                    "start": 520,
                    "end": 521,
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
                "start": 469,
                "end": 472,
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 474,
                "end": 477,
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
      "start": 526,
      "end": 558,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 541,
        "end": 558,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 547,
            "end": 556,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 547,
              "end": 550,
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
              "start": 550,
              "end": 556,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 553,
                "end": 556,
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
        "start": 532,
        "end": 537,
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
        "start": 537,
        "end": 540,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 538,
            "end": 539,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 538,
              "end": 539,
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
      "start": 560,
      "end": 638,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 564,
          "end": 638,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 564,
            "end": 596,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 566,
              "end": 596,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 568,
                "end": 596,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 569,
                    "end": 585,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 570,
                      "end": 585,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 572,
                        "end": 585,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 577,
                          "end": 585,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 578,
                              "end": 584,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 578,
                                "end": 584,
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
                          "start": 572,
                          "end": 577,
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
                  "start": 587,
                  "end": 596,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 590,
                    "end": 596
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 599,
            "end": 638,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 607,
              "end": 638,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 613,
                  "end": 622,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 613,
                    "end": 621,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 613,
                      "end": 619,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 613,
                        "end": 615,
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 616,
                        "end": 619,
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
                  "start": 627,
                  "end": 636,
                  "argument": {
                    "type": "Literal",
                    "start": 634,
                    "end": 635,
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
                "start": 600,
                "end": 602,
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
      "start": 1078,
      "end": 1158,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1082,
          "end": 1157,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1082,
            "end": 1157,
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1084,
              "end": 1157,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1086,
                "end": 1157,
                "types": [
                  {
                    "type": "TSFunctionType",
                    "start": 1087,
                    "end": 1118,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1088,
                        "end": 1097,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1089,
                          "end": 1097,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1091,
                            "end": 1097
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 1099,
                        "end": 1109,
                        "decorators": [],
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1100,
                          "end": 1109,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 1102,
                            "end": 1109
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1111,
                      "end": 1118,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1114,
                        "end": 1118
                      }
                    },
                    "typeParameters": null
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 1123,
                    "end": 1156,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1124,
                        "end": 1133,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1125,
                          "end": 1133,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1127,
                            "end": 1133
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 1135,
                        "end": 1145,
                        "decorators": [],
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1136,
                          "end": 1145,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 1138,
                            "end": 1145
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1147,
                      "end": 1156,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1150,
                        "end": 1156
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
      "start": 1159,
      "end": 1178,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1159,
        "end": 1177,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1159,
          "end": 1161,
          "decorators": [],
          "name": "b1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 1164,
          "end": 1177,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 1174,
            "end": 1177,
            "body": []
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 1165,
              "end": 1166,
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 1168,
              "end": 1169,
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
      "start": 1179,
      "end": 1234,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1183,
          "end": 1233,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1183,
            "end": 1233,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1185,
              "end": 1233,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1187,
                "end": 1233,
                "types": [
                  {
                    "type": "TSTypeQuery",
                    "start": 1187,
                    "end": 1196,
                    "exprName": {
                      "type": "Identifier",
                      "start": 1194,
                      "end": 1196,
                      "decorators": [],
                      "name": "a0",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 1200,
                    "end": 1232,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1201,
                        "end": 1210,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1202,
                          "end": 1210,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1204,
                            "end": 1210
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 1212,
                        "end": 1221,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1213,
                          "end": 1221,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1215,
                            "end": 1221
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1223,
                      "end": 1232,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1226,
                        "end": 1232
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
      "start": 1235,
      "end": 1273,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1235,
        "end": 1273,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1235,
          "end": 1237,
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 1240,
          "end": 1273,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 1254,
            "end": 1273,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 1256,
                "end": 1271,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 1263,
                  "end": 1270,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 1263,
                    "end": 1266,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1269,
                    "end": 1270,
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
              "start": 1241,
              "end": 1244,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 1246,
              "end": 1249,
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
      "start": 1274,
      "end": 1312,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1274,
        "end": 1312,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1274,
          "end": 1276,
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 1279,
          "end": 1312,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 1293,
            "end": 1312,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 1295,
                "end": 1310,
                "argument": {
                  "type": "Literal",
                  "start": 1302,
                  "end": 1309,
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
              "start": 1280,
              "end": 1283,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 1285,
              "end": 1288,
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
      "start": 1313,
      "end": 1371,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1317,
          "end": 1370,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1317,
            "end": 1370,
            "decorators": [],
            "name": "b3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1319,
              "end": 1370,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1321,
                "end": 1370,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1322,
                    "end": 1334,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1326,
                      "end": 1334,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1328,
                        "end": 1334
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 1336,
                    "end": 1347,
                    "decorators": [],
                    "name": "num",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1339,
                      "end": 1347,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1341,
                        "end": 1347
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 1349,
                    "end": 1361,
                    "decorators": [],
                    "name": "boo",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1352,
                      "end": 1361,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1354,
                        "end": 1361
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1363,
                  "end": 1370,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1366,
                    "end": 1370
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
      "start": 1372,
      "end": 1399,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1372,
        "end": 1398,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1372,
          "end": 1374,
          "decorators": [],
          "name": "b3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 1377,
          "end": 1398,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 1395,
            "end": 1398,
            "body": []
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 1378,
              "end": 1382,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 1384,
              "end": 1390,
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
      "start": 1401,
      "end": 1464,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1405,
          "end": 1463,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1405,
            "end": 1425,
            "decorators": [],
            "name": "b4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1407,
              "end": 1425,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1409,
                "end": 1425,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1410,
                    "end": 1414,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1411,
                      "end": 1414,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1413,
                        "end": 1414,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1413,
                          "end": 1414,
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
                  "start": 1416,
                  "end": 1425,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1419,
                    "end": 1425
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1428,
            "end": 1463,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1444,
              "end": 1463,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1446,
                  "end": 1461,
                  "argument": {
                    "type": "Literal",
                    "start": 1453,
                    "end": 1460,
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
                "start": 1429,
                "end": 1439,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 1429,
                  "end": 1435,
                  "decorators": [],
                  "name": "number",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 1438,
                  "end": 1439,
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
      "start": 1465,
      "end": 1536,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1469,
          "end": 1535,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1469,
            "end": 1490,
            "decorators": [],
            "name": "b5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1471,
              "end": 1490,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1473,
                "end": 1490,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1474,
                    "end": 1479,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1475,
                      "end": 1479,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1477,
                        "end": 1479,
                        "members": []
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1481,
                  "end": 1490,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1484,
                    "end": 1490
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1493,
            "end": 1535,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1516,
              "end": 1535,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1518,
                  "end": 1533,
                  "argument": {
                    "type": "Literal",
                    "start": 1525,
                    "end": 1532,
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
                "start": 1494,
                "end": 1511,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 1494,
                  "end": 1500,
                  "decorators": [],
                  "name": "number",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 1503,
                  "end": 1511,
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
      "start": 1701,
      "end": 1769,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1705,
          "end": 1768,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1705,
            "end": 1768,
            "decorators": [],
            "name": "b6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1707,
              "end": 1768,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1709,
                "end": 1768,
                "types": [
                  {
                    "type": "TSFunctionType",
                    "start": 1710,
                    "end": 1741,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1711,
                        "end": 1720,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1712,
                          "end": 1720,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1714,
                            "end": 1720
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 1722,
                        "end": 1732,
                        "decorators": [],
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1723,
                          "end": 1732,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 1725,
                            "end": 1732
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1734,
                      "end": 1741,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1737,
                        "end": 1741
                      }
                    },
                    "typeParameters": null
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 1746,
                    "end": 1767,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1747,
                        "end": 1756,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1748,
                          "end": 1756,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1750,
                            "end": 1756
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1758,
                      "end": 1767,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1761,
                        "end": 1767
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
      "start": 1770,
      "end": 1849,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1774,
          "end": 1848,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1774,
            "end": 1848,
            "decorators": [],
            "name": "b7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1776,
              "end": 1848,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1778,
                "end": 1848,
                "types": [
                  {
                    "type": "TSFunctionType",
                    "start": 1779,
                    "end": 1810,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1780,
                        "end": 1789,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1781,
                          "end": 1789,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1783,
                            "end": 1789
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 1791,
                        "end": 1801,
                        "decorators": [],
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1792,
                          "end": 1801,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 1794,
                            "end": 1801
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1803,
                      "end": 1810,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1806,
                        "end": 1810
                      }
                    },
                    "typeParameters": null
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 1815,
                    "end": 1847,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1816,
                        "end": 1825,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1817,
                          "end": 1825,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1819,
                            "end": 1825
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 1827,
                        "end": 1836,
                        "decorators": [],
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1828,
                          "end": 1836,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1830,
                            "end": 1836
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1838,
                      "end": 1847,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1841,
                        "end": 1847
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
      "start": 1850,
      "end": 1882,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1850,
        "end": 1881,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1850,
          "end": 1852,
          "decorators": [],
          "name": "b6",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 1855,
          "end": 1881,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 1862,
            "end": 1881,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 1864,
                "end": 1879,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 1864,
                  "end": 1879,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1864,
                    "end": 1877,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1864,
                      "end": 1865,
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1866,
                      "end": 1877,
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
              "start": 1856,
              "end": 1857,
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
      "start": 1883,
      "end": 1936,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1883,
        "end": 1935,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1883,
          "end": 1885,
          "decorators": [],
          "name": "b6",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 1888,
          "end": 1935,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 1895,
            "end": 1935,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 1901,
                "end": 1919,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 1901,
                  "end": 1918,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1901,
                    "end": 1916,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1901,
                      "end": 1902,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1903,
                      "end": 1916,
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
                "start": 1924,
                "end": 1933,
                "argument": {
                  "type": "Identifier",
                  "start": 1931,
                  "end": 1932,
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
              "start": 1889,
              "end": 1890,
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
      "start": 2042,
      "end": 2061,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2042,
        "end": 2060,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2042,
          "end": 2044,
          "decorators": [],
          "name": "b7",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 2047,
          "end": 2060,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 2057,
            "end": 2060,
            "body": []
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 2048,
              "end": 2049,
              "decorators": [],
              "name": "j",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 2051,
              "end": 2052,
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
      "start": 2151,
      "end": 2389,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2165,
        "end": 2389,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2171,
            "end": 2387,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2171,
              "end": 2182,
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
              "start": 2182,
              "end": 2387,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2185,
                "end": 2387,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 2195,
                    "end": 2311,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2199,
                        "end": 2311,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 2199,
                          "end": 2260,
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2200,
                            "end": 2260,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 2202,
                              "end": 2260,
                              "types": [
                                {
                                  "type": "TSFunctionType",
                                  "start": 2203,
                                  "end": 2226,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 2204,
                                      "end": 2208,
                                      "decorators": [],
                                      "name": "j",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 2205,
                                        "end": 2208,
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 2207,
                                          "end": 2208,
                                          "typeArguments": null,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 2207,
                                            "end": 2208,
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
                                      "start": 2210,
                                      "end": 2214,
                                      "decorators": [],
                                      "name": "k",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 2211,
                                        "end": 2214,
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 2213,
                                          "end": 2214,
                                          "typeArguments": null,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 2213,
                                            "end": 2214,
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
                                    "start": 2216,
                                    "end": 2226,
                                    "typeAnnotation": {
                                      "type": "TSArrayType",
                                      "start": 2219,
                                      "end": 2226,
                                      "elementType": {
                                        "type": "TSUnionType",
                                        "start": 2220,
                                        "end": 2223,
                                        "types": [
                                          {
                                            "type": "TSTypeReference",
                                            "start": 2220,
                                            "end": 2221,
                                            "typeArguments": null,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 2220,
                                              "end": 2221,
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          },
                                          {
                                            "type": "TSTypeReference",
                                            "start": 2222,
                                            "end": 2223,
                                            "typeArguments": null,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 2222,
                                              "end": 2223,
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
                                  "start": 2231,
                                  "end": 2259,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 2232,
                                      "end": 2241,
                                      "decorators": [],
                                      "name": "j",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 2233,
                                        "end": 2241,
                                        "typeAnnotation": {
                                          "type": "TSNumberKeyword",
                                          "start": 2235,
                                          "end": 2241
                                        }
                                      }
                                    },
                                    {
                                      "type": "Identifier",
                                      "start": 2242,
                                      "end": 2246,
                                      "decorators": [],
                                      "name": "k",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 2244,
                                        "end": 2246,
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 2245,
                                          "end": 2246,
                                          "typeArguments": null,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 2245,
                                            "end": 2246,
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
                                    "start": 2248,
                                    "end": 2259,
                                    "typeAnnotation": {
                                      "type": "TSArrayType",
                                      "start": 2251,
                                      "end": 2259,
                                      "elementType": {
                                        "type": "TSNumberKeyword",
                                        "start": 2251,
                                        "end": 2257
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
                          "start": 2263,
                          "end": 2311,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 2273,
                            "end": 2311,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 2287,
                                "end": 2301,
                                "argument": {
                                  "type": "ArrayExpression",
                                  "start": 2294,
                                  "end": 2300,
                                  "elements": [
                                    {
                                      "type": "Identifier",
                                      "start": 2295,
                                      "end": 2296,
                                      "decorators": [],
                                      "name": "j",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    {
                                      "type": "Identifier",
                                      "start": 2298,
                                      "end": 2299,
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
                              "start": 2264,
                              "end": 2265,
                              "decorators": [],
                              "name": "j",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            {
                              "type": "Identifier",
                              "start": 2267,
                              "end": 2268,
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
        "start": 2157,
        "end": 2158,
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
        "start": 2158,
        "end": 2164,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2159,
            "end": 2160,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2159,
              "end": 2160,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2162,
            "end": 2163,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2162,
              "end": 2163,
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
