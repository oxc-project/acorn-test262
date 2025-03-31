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
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 202,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 205,
          "end": 208,
          "id": {
            "type": "Identifier",
            "start": 205,
            "end": 208,
            "name": "red",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 210,
          "end": 214,
          "id": {
            "type": "Identifier",
            "start": 210,
            "end": 214,
            "name": "blue",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 203,
        "end": 216,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 205,
            "end": 208,
            "id": {
              "type": "Identifier",
              "start": 205,
              "end": 208,
              "name": "red",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 210,
            "end": 214,
            "id": {
              "type": "Identifier",
              "start": 210,
              "end": 214,
              "name": "blue",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
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
          "id": {
            "type": "Identifier",
            "start": 429,
            "end": 465,
            "name": "a0",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 431,
              "end": 465,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 433,
                "end": 465,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 434,
                    "end": 443,
                    "name": "n",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 435,
                      "end": 443,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 437,
                        "end": 443
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 445,
                    "end": 454,
                    "name": "s",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 446,
                      "end": 454,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 448,
                        "end": 454
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 468,
            "end": 524,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 469,
                "end": 472,
                "name": "num",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 474,
                "end": 477,
                "name": "str",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 482,
              "end": 524,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 488,
                  "end": 508,
                  "expression": {
                    "type": "CallExpression",
                    "start": 488,
                    "end": 507,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 488,
                      "end": 505,
                      "object": {
                        "type": "Identifier",
                        "start": 488,
                        "end": 491,
                        "name": "num",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 492,
                        "end": 505,
                        "name": "toExponential",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 513,
                  "end": 522,
                  "argument": {
                    "type": "Literal",
                    "start": 520,
                    "end": 521,
                    "value": 0,
                    "raw": "0"
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
      "type": "ClassDeclaration",
      "start": 526,
      "end": 558,
      "id": {
        "type": "Identifier",
        "start": 532,
        "end": 537,
        "name": "Class",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 541,
        "end": 558,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 547,
            "end": 556,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 547,
              "end": 550,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 550,
              "end": 556,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 553,
                "end": 556,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 537,
        "end": 540,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 538,
            "end": 539,
            "name": {
              "type": "Identifier",
              "start": 538,
              "end": 539,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 564,
            "end": 596,
            "name": "a1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 566,
              "end": 596,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 568,
                "end": 596,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 569,
                    "end": 585,
                    "name": "c",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 570,
                      "end": 585,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 572,
                        "end": 585,
                        "typeName": {
                          "type": "Identifier",
                          "start": 572,
                          "end": 577,
                          "name": "Class",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 577,
                          "end": 585,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 578,
                              "end": 584,
                              "typeName": {
                                "type": "Identifier",
                                "start": 578,
                                "end": 584,
                                "name": "Number",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 599,
            "end": 638,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 600,
                "end": 602,
                "name": "a1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 607,
              "end": 638,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 613,
                  "end": 622,
                  "expression": {
                    "type": "CallExpression",
                    "start": 613,
                    "end": 621,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 613,
                      "end": 619,
                      "object": {
                        "type": "Identifier",
                        "start": 613,
                        "end": 615,
                        "name": "a1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 616,
                        "end": 619,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 627,
                  "end": 636,
                  "argument": {
                    "type": "Literal",
                    "start": 634,
                    "end": 635,
                    "value": 1,
                    "raw": "1"
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
      "start": 1078,
      "end": 1158,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1082,
          "end": 1157,
          "id": {
            "type": "Identifier",
            "start": 1082,
            "end": 1157,
            "name": "b1",
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
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1088,
                        "end": 1097,
                        "name": "s",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1089,
                          "end": 1097,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1091,
                            "end": 1097
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1099,
                        "end": 1109,
                        "name": "w",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1100,
                          "end": 1109,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 1102,
                            "end": 1109
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                    }
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 1123,
                    "end": 1156,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1124,
                        "end": 1133,
                        "name": "s",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1125,
                          "end": 1133,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1127,
                            "end": 1133
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1135,
                        "end": 1145,
                        "name": "w",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1136,
                          "end": 1145,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 1138,
                            "end": 1145
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                    }
                  }
                ]
              }
            },
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
      "type": "ExpressionStatement",
      "start": 1159,
      "end": 1178,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1159,
        "end": 1177,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1159,
          "end": 1161,
          "name": "b1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 1164,
          "end": 1177,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 1165,
              "end": 1166,
              "name": "k",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 1168,
              "end": 1169,
              "name": "h",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "body": {
            "type": "BlockStatement",
            "start": 1174,
            "end": 1177,
            "body": []
          },
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 1183,
            "end": 1233,
            "name": "b2",
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
                      "name": "a0",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 1200,
                    "end": 1232,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1201,
                        "end": 1210,
                        "name": "n",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1202,
                          "end": 1210,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1204,
                            "end": 1210
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1212,
                        "end": 1221,
                        "name": "s",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1213,
                          "end": 1221,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1215,
                            "end": 1221
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                    }
                  }
                ]
              }
            },
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
      "type": "ExpressionStatement",
      "start": 1235,
      "end": 1273,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1235,
        "end": 1273,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1235,
          "end": 1237,
          "name": "b2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 1240,
          "end": 1273,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 1241,
              "end": 1244,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 1246,
              "end": 1249,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
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
                  "left": {
                    "type": "Identifier",
                    "start": 1263,
                    "end": 1266,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 1269,
                    "end": 1270,
                    "value": 1,
                    "raw": "1"
                  }
                }
              }
            ]
          },
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1274,
      "end": 1312,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1274,
        "end": 1312,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1274,
          "end": 1276,
          "name": "b2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 1279,
          "end": 1312,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 1280,
              "end": 1283,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 1285,
              "end": 1288,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
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
                  "value": "hello",
                  "raw": "\"hello\""
                }
              }
            ]
          },
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 1317,
            "end": 1370,
            "name": "b3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1319,
              "end": 1370,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1321,
                "end": 1370,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1322,
                    "end": 1334,
                    "name": "name",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1326,
                      "end": 1334,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1328,
                        "end": 1334
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 1336,
                    "end": 1347,
                    "name": "num",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1339,
                      "end": 1347,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1341,
                        "end": 1347
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 1349,
                    "end": 1361,
                    "name": "boo",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1352,
                      "end": 1361,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1354,
                        "end": 1361
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                }
              }
            },
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
      "type": "ExpressionStatement",
      "start": 1372,
      "end": 1399,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1372,
        "end": 1398,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1372,
          "end": 1374,
          "name": "b3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 1377,
          "end": 1398,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 1378,
              "end": 1382,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 1384,
              "end": 1390,
              "name": "number",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "body": {
            "type": "BlockStatement",
            "start": 1395,
            "end": 1398,
            "body": []
          },
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 1405,
            "end": 1425,
            "name": "b4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1407,
              "end": 1425,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1409,
                "end": 1425,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1410,
                    "end": 1414,
                    "name": "n",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1411,
                      "end": 1414,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1413,
                        "end": 1414,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1413,
                          "end": 1414,
                          "name": "E",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1428,
            "end": 1463,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 1429,
                "end": 1439,
                "left": {
                  "type": "Identifier",
                  "start": 1429,
                  "end": 1435,
                  "name": "number",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 1438,
                  "end": 1439,
                  "value": 1,
                  "raw": "1"
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
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
                    "value": "hello",
                    "raw": "\"hello\""
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
      "start": 1465,
      "end": 1536,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1469,
          "end": 1535,
          "id": {
            "type": "Identifier",
            "start": 1469,
            "end": 1490,
            "name": "b5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1471,
              "end": 1490,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1473,
                "end": 1490,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1474,
                    "end": 1479,
                    "name": "n",
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
                    },
                    "decorators": [],
                    "optional": false
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1493,
            "end": 1535,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 1494,
                "end": 1511,
                "left": {
                  "type": "Identifier",
                  "start": 1494,
                  "end": 1500,
                  "name": "number",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 1503,
                  "end": 1511,
                  "value": "string",
                  "raw": "\"string\""
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
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
                    "value": "hello",
                    "raw": "\"hello\""
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
      "start": 1701,
      "end": 1769,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1705,
          "end": 1768,
          "id": {
            "type": "Identifier",
            "start": 1705,
            "end": 1768,
            "name": "b6",
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
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1711,
                        "end": 1720,
                        "name": "s",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1712,
                          "end": 1720,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1714,
                            "end": 1720
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1722,
                        "end": 1732,
                        "name": "w",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1723,
                          "end": 1732,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 1725,
                            "end": 1732
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                    }
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 1746,
                    "end": 1767,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1747,
                        "end": 1756,
                        "name": "n",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1748,
                          "end": 1756,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1750,
                            "end": 1756
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                    }
                  }
                ]
              }
            },
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
      "type": "VariableDeclaration",
      "start": 1770,
      "end": 1849,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1774,
          "end": 1848,
          "id": {
            "type": "Identifier",
            "start": 1774,
            "end": 1848,
            "name": "b7",
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
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1780,
                        "end": 1789,
                        "name": "s",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1781,
                          "end": 1789,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1783,
                            "end": 1789
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1791,
                        "end": 1801,
                        "name": "w",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1792,
                          "end": 1801,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 1794,
                            "end": 1801
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                    }
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 1815,
                    "end": 1847,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1816,
                        "end": 1825,
                        "name": "s",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1817,
                          "end": 1825,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1819,
                            "end": 1825
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1827,
                        "end": 1836,
                        "name": "w",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1828,
                          "end": 1836,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1830,
                            "end": 1836
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                    }
                  }
                ]
              }
            },
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
      "type": "ExpressionStatement",
      "start": 1850,
      "end": 1882,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1850,
        "end": 1881,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1850,
          "end": 1852,
          "name": "b6",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 1855,
          "end": 1881,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 1856,
              "end": 1857,
              "name": "k",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "body": {
            "type": "BlockStatement",
            "start": 1862,
            "end": 1881,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 1864,
                "end": 1879,
                "expression": {
                  "type": "CallExpression",
                  "start": 1864,
                  "end": 1879,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1864,
                    "end": 1877,
                    "object": {
                      "type": "Identifier",
                      "start": 1864,
                      "end": 1865,
                      "name": "k",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1866,
                      "end": 1877,
                      "name": "toLowerCase",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "directive": null
              }
            ]
          },
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1883,
      "end": 1936,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1883,
        "end": 1935,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1883,
          "end": 1885,
          "name": "b6",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 1888,
          "end": 1935,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 1889,
              "end": 1890,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "body": {
            "type": "BlockStatement",
            "start": 1895,
            "end": 1935,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 1901,
                "end": 1919,
                "expression": {
                  "type": "CallExpression",
                  "start": 1901,
                  "end": 1918,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1901,
                    "end": 1916,
                    "object": {
                      "type": "Identifier",
                      "start": 1901,
                      "end": 1902,
                      "name": "i",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1903,
                      "end": 1916,
                      "name": "toExponential",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "directive": null
              },
              {
                "type": "ReturnStatement",
                "start": 1924,
                "end": 1933,
                "argument": {
                  "type": "Identifier",
                  "start": 1931,
                  "end": 1932,
                  "name": "i",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2042,
      "end": 2061,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2042,
        "end": 2060,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2042,
          "end": 2044,
          "name": "b7",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 2047,
          "end": 2060,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 2048,
              "end": 2049,
              "name": "j",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 2051,
              "end": 2052,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "body": {
            "type": "BlockStatement",
            "start": 2057,
            "end": 2060,
            "body": []
          },
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 2151,
      "end": 2389,
      "id": {
        "type": "Identifier",
        "start": 2157,
        "end": 2158,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2165,
        "end": 2389,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2171,
            "end": 2387,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2171,
              "end": 2182,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 2182,
              "end": 2387,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "id": {
                          "type": "Identifier",
                          "start": 2199,
                          "end": 2260,
                          "name": "k",
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
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 2204,
                                      "end": 2208,
                                      "name": "j",
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 2205,
                                        "end": 2208,
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 2207,
                                          "end": 2208,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 2207,
                                            "end": 2208,
                                            "name": "T",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeArguments": null
                                        }
                                      },
                                      "decorators": [],
                                      "optional": false
                                    },
                                    {
                                      "type": "Identifier",
                                      "start": 2210,
                                      "end": 2214,
                                      "name": "k",
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 2211,
                                        "end": 2214,
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 2213,
                                          "end": 2214,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 2213,
                                            "end": 2214,
                                            "name": "U",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeArguments": null
                                        }
                                      },
                                      "decorators": [],
                                      "optional": false
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
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 2220,
                                              "end": 2221,
                                              "name": "T",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "typeArguments": null
                                          },
                                          {
                                            "type": "TSTypeReference",
                                            "start": 2222,
                                            "end": 2223,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 2222,
                                              "end": 2223,
                                              "name": "U",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "typeArguments": null
                                          }
                                        ]
                                      }
                                    }
                                  }
                                },
                                {
                                  "type": "TSFunctionType",
                                  "start": 2231,
                                  "end": 2259,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 2232,
                                      "end": 2241,
                                      "name": "j",
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 2233,
                                        "end": 2241,
                                        "typeAnnotation": {
                                          "type": "TSNumberKeyword",
                                          "start": 2235,
                                          "end": 2241
                                        }
                                      },
                                      "decorators": [],
                                      "optional": false
                                    },
                                    {
                                      "type": "Identifier",
                                      "start": 2242,
                                      "end": 2246,
                                      "name": "k",
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 2244,
                                        "end": 2246,
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 2245,
                                          "end": 2246,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 2245,
                                            "end": 2246,
                                            "name": "U",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeArguments": null
                                        }
                                      },
                                      "decorators": [],
                                      "optional": false
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
                                  }
                                }
                              ]
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 2263,
                          "end": 2311,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 2264,
                              "end": 2265,
                              "name": "j",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            {
                              "type": "Identifier",
                              "start": 2267,
                              "end": 2268,
                              "name": "k",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
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
                                      "name": "j",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    {
                                      "type": "Identifier",
                                      "start": 2298,
                                      "end": 2299,
                                      "name": "k",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ]
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
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2158,
        "end": 2164,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2159,
            "end": 2160,
            "name": {
              "type": "Identifier",
              "start": 2159,
              "end": 2160,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2162,
            "end": 2163,
            "name": {
              "type": "Identifier",
              "start": 2162,
              "end": 2163,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
