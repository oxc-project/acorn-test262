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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 276,
                          "end": 278
                        },
                        "optional": false,
                        "computed": false,
                        "start": 270,
                        "end": 278
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "hi",
                          "raw": "\"hi\"",
                          "start": 279,
                          "end": 283
                        }
                      ],
                      "optional": false,
                      "start": 270,
                      "end": 284
                    },
                    "directive": null,
                    "start": 270,
                    "end": 285
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
                          "start": 382,
                          "end": 384
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 387,
                                "end": 392
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "m1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 393,
                                "end": 395
                              },
                              "optional": false,
                              "computed": false,
                              "start": 387,
                              "end": 395
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 396,
                              "end": 400
                            },
                            "optional": false,
                            "computed": false,
                            "start": 387,
                            "end": 400
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ThisExpression",
                              "start": 401,
                              "end": 405
                            }
                          ],
                          "optional": false,
                          "start": 387,
                          "end": 406
                        },
                        "definite": false,
                        "start": 382,
                        "end": 406
                      }
                    ],
                    "declare": false,
                    "start": 378,
                    "end": 407
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
                                      "start": 512,
                                      "end": 518
                                    },
                                    "start": 510,
                                    "end": 518
                                  },
                                  "start": 509,
                                  "end": 518
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 523,
                                  "end": 529
                                },
                                "start": 520,
                                "end": 529
                              },
                              "start": 508,
                              "end": 529
                            },
                            "start": 506,
                            "end": 529
                          },
                          "start": 505,
                          "end": 529
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 532,
                            "end": 537
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "m1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 538,
                            "end": 540
                          },
                          "optional": false,
                          "computed": false,
                          "start": 532,
                          "end": 540
                        },
                        "definite": false,
                        "start": 505,
                        "end": 540
                      }
                    ],
                    "declare": false,
                    "start": 501,
                    "end": 541
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
                            "start": 628,
                            "end": 633
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "m2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 634,
                            "end": 636
                          },
                          "optional": false,
                          "computed": false,
                          "start": 628,
                          "end": 636
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bind",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 637,
                          "end": 641
                        },
                        "optional": false,
                        "computed": false,
                        "start": 628,
                        "end": 641
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 642,
                          "end": 646
                        }
                      ],
                      "optional": false,
                      "start": 628,
                      "end": 647
                    },
                    "directive": null,
                    "start": 628,
                    "end": 648
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 763,
                          "end": 768
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 769,
                          "end": 771
                        },
                        "optional": false,
                        "computed": false,
                        "start": 763,
                        "end": 771
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 763,
                      "end": 773
                    },
                    "directive": null,
                    "start": 763,
                    "end": 774
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
                          "start": 889,
                          "end": 891
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 894,
                            "end": 899
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "d1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 900,
                            "end": 902
                          },
                          "optional": false,
                          "computed": false,
                          "start": 894,
                          "end": 902
                        },
                        "definite": false,
                        "start": 889,
                        "end": 902
                      }
                    ],
                    "declare": false,
                    "start": 885,
                    "end": 903
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
                          "start": 1028,
                          "end": 1030
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 1033,
                            "end": 1038
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "d2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1039,
                            "end": 1041
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1033,
                          "end": 1041
                        },
                        "definite": false,
                        "start": 1028,
                        "end": 1041
                      }
                    ],
                    "declare": false,
                    "start": 1024,
                    "end": 1042
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
                          "start": 1163,
                          "end": 1168
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1169,
                          "end": 1171
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1163,
                        "end": 1171
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
                                "start": 1187,
                                "end": 1193
                              },
                              "start": 1185,
                              "end": 1193
                            },
                            "start": 1184,
                            "end": 1193
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
                                "start": 1204,
                                "end": 1206
                              },
                              "start": 1197,
                              "end": 1207
                            }
                          ],
                          "start": 1195,
                          "end": 1209
                        },
                        "expression": false,
                        "start": 1174,
                        "end": 1209
                      },
                      "start": 1163,
                      "end": 1209
                    },
                    "directive": null,
                    "start": 1163,
                    "end": 1210
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
                          "start": 1278,
                          "end": 1283
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1284,
                          "end": 1289
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1278,
                        "end": 1289
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1292,
                        "end": 1293
                      },
                      "start": 1278,
                      "end": 1293
                    },
                    "directive": null,
                    "start": 1278,
                    "end": 1294
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
                          "start": 1429,
                          "end": 1430
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 1433,
                            "end": 1438
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1439,
                            "end": 1444
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1433,
                          "end": 1444
                        },
                        "definite": false,
                        "start": 1429,
                        "end": 1444
                      }
                    ],
                    "declare": false,
                    "start": 1425,
                    "end": 1445
                  }
                ],
                "start": 260,
                "end": 1560
              },
              "expression": false,
              "start": 257,
              "end": 1560
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 254,
            "end": 1560
          }
        ],
        "start": 247,
        "end": 1562
      },
      "abstract": false,
      "declare": false,
      "start": 216,
      "end": 1562
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1562
}
```
