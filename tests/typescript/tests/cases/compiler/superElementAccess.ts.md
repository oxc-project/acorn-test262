__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 12
      },
      "typeParameters": null,
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
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 21
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 25,
                      "end": 31
                    },
                    "start": 23,
                    "end": 31
                  },
                  "start": 22,
                  "end": 31
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 42,
                      "end": 43
                    },
                    "start": 35,
                    "end": 44
                  }
                ],
                "start": 33,
                "end": 46
              },
              "expression": false,
              "start": 21,
              "end": 46
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 19,
            "end": 46
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 61
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
                "start": 64,
                "end": 67
              },
              "expression": false,
              "start": 61,
              "end": 67
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 51,
            "end": 67
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 74
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 82,
                    "end": 86
                  },
                  "start": 79,
                  "end": 86
                },
                "start": 76,
                "end": 86
              },
              "start": 74,
              "end": 86
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
                "start": 101,
                "end": 104
              },
              "expression": false,
              "start": 89,
              "end": 104
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 72,
            "end": 104
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d1",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 111
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 113,
                "end": 119
              },
              "start": 111,
              "end": 119
            },
            "value": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 122,
              "end": 124
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 109,
            "end": 125
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d2",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 140
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 142,
                "end": 148
              },
              "start": 140,
              "end": 148
            },
            "value": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 151,
              "end": 153
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 130,
            "end": 154
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 168
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 179,
                      "end": 180
                    },
                    "start": 172,
                    "end": 180
                  }
                ],
                "start": 171,
                "end": 182
              },
              "expression": false,
              "start": 168,
              "end": 182
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 159,
            "end": 182
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 191,
              "end": 196
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 200,
                      "end": 206
                    },
                    "start": 198,
                    "end": 206
                  },
                  "start": 197,
                  "end": 206
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 208,
                "end": 211
              },
              "expression": false,
              "start": 196,
              "end": 211
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 187,
            "end": 211
          }
        ],
        "start": 13,
        "end": 213
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 213
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyDerived",
        "optional": false,
        "typeAnnotation": null,
        "start": 222,
        "end": 231
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 240,
        "end": 246
      },
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
              "start": 254,
              "end": 257
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 270,
                          "end": 275
                        },
                        "property": {
                          "type": "Literal",
                          "value": "m1",
                          "raw": "\"m1\"",
                          "start": 276,
                          "end": 280
                        },
                        "optional": false,
                        "computed": true,
                        "start": 270,
                        "end": 281
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "hi",
                          "raw": "\"hi\"",
                          "start": 282,
                          "end": 286
                        }
                      ],
                      "optional": false,
                      "start": 270,
                      "end": 287
                    },
                    "directive": null,
                    "start": 270,
                    "end": 288
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
                          "name": "l2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 385,
                          "end": 387
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 390,
                                "end": 395
                              },
                              "property": {
                                "type": "Literal",
                                "value": "m1",
                                "raw": "\"m1\"",
                                "start": 396,
                                "end": 400
                              },
                              "optional": false,
                              "computed": true,
                              "start": 390,
                              "end": 401
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 402,
                              "end": 406
                            },
                            "optional": false,
                            "computed": false,
                            "start": 390,
                            "end": 406
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ThisExpression",
                              "start": 407,
                              "end": 411
                            }
                          ],
                          "optional": false,
                          "start": 390,
                          "end": 412
                        },
                        "definite": false,
                        "start": 385,
                        "end": 412
                      }
                    ],
                    "declare": false,
                    "start": 381,
                    "end": 413
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
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 518,
                                      "end": 524
                                    },
                                    "start": 516,
                                    "end": 524
                                  },
                                  "start": 515,
                                  "end": 524
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 529,
                                  "end": 535
                                },
                                "start": 526,
                                "end": 535
                              },
                              "start": 514,
                              "end": 535
                            },
                            "start": 512,
                            "end": 535
                          },
                          "start": 511,
                          "end": 535
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 538,
                            "end": 543
                          },
                          "property": {
                            "type": "Literal",
                            "value": "m1",
                            "raw": "\"m1\"",
                            "start": 544,
                            "end": 548
                          },
                          "optional": false,
                          "computed": true,
                          "start": 538,
                          "end": 549
                        },
                        "definite": false,
                        "start": 511,
                        "end": 549
                      }
                    ],
                    "declare": false,
                    "start": 507,
                    "end": 550
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 637,
                            "end": 642
                          },
                          "property": {
                            "type": "Literal",
                            "value": "m2",
                            "raw": "\"m2\"",
                            "start": 643,
                            "end": 647
                          },
                          "optional": false,
                          "computed": true,
                          "start": 637,
                          "end": 648
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bind",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 649,
                          "end": 653
                        },
                        "optional": false,
                        "computed": false,
                        "start": 637,
                        "end": 653
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 654,
                          "end": 658
                        }
                      ],
                      "optional": false,
                      "start": 637,
                      "end": 659
                    },
                    "directive": null,
                    "start": 637,
                    "end": 660
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 775,
                          "end": 780
                        },
                        "property": {
                          "type": "Literal",
                          "value": "p1",
                          "raw": "\"p1\"",
                          "start": 781,
                          "end": 785
                        },
                        "optional": false,
                        "computed": true,
                        "start": 775,
                        "end": 786
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 775,
                      "end": 788
                    },
                    "directive": null,
                    "start": 775,
                    "end": 789
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
                          "name": "l1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 904,
                          "end": 906
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 909,
                            "end": 914
                          },
                          "property": {
                            "type": "Literal",
                            "value": "d1",
                            "raw": "\"d1\"",
                            "start": 915,
                            "end": 919
                          },
                          "optional": false,
                          "computed": true,
                          "start": 909,
                          "end": 920
                        },
                        "definite": false,
                        "start": 904,
                        "end": 920
                      }
                    ],
                    "declare": false,
                    "start": 900,
                    "end": 921
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
                          "name": "l1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1046,
                          "end": 1048
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 1051,
                            "end": 1056
                          },
                          "property": {
                            "type": "Literal",
                            "value": "d2",
                            "raw": "\"d2\"",
                            "start": 1057,
                            "end": 1061
                          },
                          "optional": false,
                          "computed": true,
                          "start": 1051,
                          "end": 1062
                        },
                        "definite": false,
                        "start": 1046,
                        "end": 1062
                      }
                    ],
                    "declare": false,
                    "start": 1042,
                    "end": 1063
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 1184,
                          "end": 1189
                        },
                        "property": {
                          "type": "Literal",
                          "value": "m1",
                          "raw": "\"m1\"",
                          "start": 1190,
                          "end": 1194
                        },
                        "optional": false,
                        "computed": true,
                        "start": 1184,
                        "end": 1195
                      },
                      "right": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1211,
                                "end": 1217
                              },
                              "start": 1209,
                              "end": 1217
                            },
                            "start": 1208,
                            "end": 1217
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
                                "value": "",
                                "raw": "\"\"",
                                "start": 1228,
                                "end": 1230
                              },
                              "start": 1221,
                              "end": 1231
                            }
                          ],
                          "start": 1219,
                          "end": 1233
                        },
                        "expression": false,
                        "start": 1198,
                        "end": 1233
                      },
                      "start": 1184,
                      "end": 1233
                    },
                    "directive": null,
                    "start": 1184,
                    "end": 1234
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 1302,
                          "end": 1307
                        },
                        "property": {
                          "type": "Literal",
                          "value": "value",
                          "raw": "\"value\"",
                          "start": 1308,
                          "end": 1315
                        },
                        "optional": false,
                        "computed": true,
                        "start": 1302,
                        "end": 1316
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1319,
                        "end": 1320
                      },
                      "start": 1302,
                      "end": 1320
                    },
                    "directive": null,
                    "start": 1302,
                    "end": 1321
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
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1456,
                          "end": 1457
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 1460,
                            "end": 1465
                          },
                          "property": {
                            "type": "Literal",
                            "value": "value",
                            "raw": "\"value\"",
                            "start": 1466,
                            "end": 1473
                          },
                          "optional": false,
                          "computed": true,
                          "start": 1460,
                          "end": 1474
                        },
                        "definite": false,
                        "start": 1456,
                        "end": 1474
                      }
                    ],
                    "declare": false,
                    "start": 1452,
                    "end": 1475
                  }
                ],
                "start": 260,
                "end": 1590
              },
              "expression": false,
              "start": 257,
              "end": 1590
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 254,
            "end": 1590
          }
        ],
        "start": 247,
        "end": 1592
      },
      "abstract": false,
      "declare": false,
      "start": 216,
      "end": 1592
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1592
}
```
