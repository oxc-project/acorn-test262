__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1592,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 213,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "name": "MyBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 213,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 19,
            "end": 46,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 21,
              "name": "m1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 21,
              "end": 46,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 22,
                  "end": 31,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 23,
                    "end": 31,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 25,
                      "end": 31
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 33,
                "end": 46,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 35,
                    "end": 44,
                    "argument": {
                      "type": "Identifier",
                      "start": 42,
                      "end": 43,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
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
          },
          {
            "type": "MethodDefinition",
            "start": 51,
            "end": 67,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 61,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 61,
              "end": 67,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 64,
                "end": 67,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 72,
            "end": 104,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 74,
              "name": "m2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "FunctionExpression",
              "start": 89,
              "end": 104,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 101,
                "end": 104,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 86,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 76,
                "end": 86,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 79,
                  "end": 86,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 82,
                    "end": 86
                  }
                }
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 109,
            "end": 125,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 111,
              "name": "d1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 122,
              "end": 124,
              "value": 42,
              "raw": "42"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 111,
              "end": 119,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 113,
                "end": 119
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 130,
            "end": 154,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 138,
              "end": 140,
              "name": "d2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 151,
              "end": 153,
              "value": 42,
              "raw": "42"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 148,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 142,
                "end": 148
              }
            },
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 159,
            "end": 182,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 168,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 168,
              "end": 182,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 171,
                "end": 182,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 172,
                    "end": 180,
                    "argument": {
                      "type": "Literal",
                      "start": 179,
                      "end": 180,
                      "value": 0,
                      "raw": "0"
                    }
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
          },
          {
            "type": "MethodDefinition",
            "start": 187,
            "end": 211,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 191,
              "end": 196,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 196,
              "end": 211,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 197,
                  "end": 206,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 198,
                    "end": 206,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 200,
                      "end": 206
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 208,
                "end": 211,
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
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 216,
      "end": 1592,
      "id": {
        "type": "Identifier",
        "start": 222,
        "end": 231,
        "name": "MyDerived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 240,
        "end": 246,
        "name": "MyBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 247,
        "end": 1592,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 254,
            "end": 1590,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 254,
              "end": 257,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 257,
              "end": 1590,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 260,
                "end": 1590,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 270,
                    "end": 288,
                    "expression": {
                      "type": "CallExpression",
                      "start": 270,
                      "end": 287,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 270,
                        "end": 281,
                        "object": {
                          "type": "Super",
                          "start": 270,
                          "end": 275
                        },
                        "property": {
                          "type": "Literal",
                          "start": 276,
                          "end": 280,
                          "value": "m1",
                          "raw": "\"m1\""
                        },
                        "computed": true,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 282,
                          "end": 286,
                          "value": "hi",
                          "raw": "\"hi\""
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 381,
                    "end": 413,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 385,
                        "end": 412,
                        "id": {
                          "type": "Identifier",
                          "start": 385,
                          "end": 387,
                          "name": "l2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 390,
                          "end": 412,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 390,
                            "end": 406,
                            "object": {
                              "type": "MemberExpression",
                              "start": 390,
                              "end": 401,
                              "object": {
                                "type": "Super",
                                "start": 390,
                                "end": 395
                              },
                              "property": {
                                "type": "Literal",
                                "start": 396,
                                "end": 400,
                                "value": "m1",
                                "raw": "\"m1\""
                              },
                              "computed": true,
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 402,
                              "end": 406,
                              "name": "bind",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "ThisExpression",
                              "start": 407,
                              "end": 411
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 507,
                    "end": 550,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 511,
                        "end": 549,
                        "id": {
                          "type": "Identifier",
                          "start": 511,
                          "end": 535,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 512,
                            "end": 535,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 514,
                              "end": 535,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 515,
                                  "end": 524,
                                  "name": "a",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 516,
                                    "end": 524,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 518,
                                      "end": 524
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 526,
                                "end": 535,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 529,
                                  "end": 535
                                }
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 538,
                          "end": 549,
                          "object": {
                            "type": "Super",
                            "start": 538,
                            "end": 543
                          },
                          "property": {
                            "type": "Literal",
                            "start": 544,
                            "end": 548,
                            "value": "m1",
                            "raw": "\"m1\""
                          },
                          "computed": true,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 637,
                    "end": 660,
                    "expression": {
                      "type": "CallExpression",
                      "start": 637,
                      "end": 659,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 637,
                        "end": 653,
                        "object": {
                          "type": "MemberExpression",
                          "start": 637,
                          "end": 648,
                          "object": {
                            "type": "Super",
                            "start": 637,
                            "end": 642
                          },
                          "property": {
                            "type": "Literal",
                            "start": 643,
                            "end": 647,
                            "value": "m2",
                            "raw": "\"m2\""
                          },
                          "computed": true,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 649,
                          "end": 653,
                          "name": "bind",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 654,
                          "end": 658
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 775,
                    "end": 789,
                    "expression": {
                      "type": "CallExpression",
                      "start": 775,
                      "end": 788,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 775,
                        "end": 786,
                        "object": {
                          "type": "Super",
                          "start": 775,
                          "end": 780
                        },
                        "property": {
                          "type": "Literal",
                          "start": 781,
                          "end": 785,
                          "value": "p1",
                          "raw": "\"p1\""
                        },
                        "computed": true,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 900,
                    "end": 921,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 904,
                        "end": 920,
                        "id": {
                          "type": "Identifier",
                          "start": 904,
                          "end": 906,
                          "name": "l1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 909,
                          "end": 920,
                          "object": {
                            "type": "Super",
                            "start": 909,
                            "end": 914
                          },
                          "property": {
                            "type": "Literal",
                            "start": 915,
                            "end": 919,
                            "value": "d1",
                            "raw": "\"d1\""
                          },
                          "computed": true,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1042,
                    "end": 1063,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1046,
                        "end": 1062,
                        "id": {
                          "type": "Identifier",
                          "start": 1046,
                          "end": 1048,
                          "name": "l1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 1051,
                          "end": 1062,
                          "object": {
                            "type": "Super",
                            "start": 1051,
                            "end": 1056
                          },
                          "property": {
                            "type": "Literal",
                            "start": 1057,
                            "end": 1061,
                            "value": "d2",
                            "raw": "\"d2\""
                          },
                          "computed": true,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1184,
                    "end": 1234,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1184,
                      "end": 1233,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1184,
                        "end": 1195,
                        "object": {
                          "type": "Super",
                          "start": 1184,
                          "end": 1189
                        },
                        "property": {
                          "type": "Literal",
                          "start": 1190,
                          "end": 1194,
                          "value": "m1",
                          "raw": "\"m1\""
                        },
                        "computed": true,
                        "optional": false
                      },
                      "right": {
                        "type": "FunctionExpression",
                        "start": 1198,
                        "end": 1233,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1208,
                            "end": 1217,
                            "name": "a",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1209,
                              "end": 1217,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1211,
                                "end": 1217
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "BlockStatement",
                          "start": 1219,
                          "end": 1233,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 1221,
                              "end": 1231,
                              "argument": {
                                "type": "Literal",
                                "start": 1228,
                                "end": 1230,
                                "value": "",
                                "raw": "\"\""
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1302,
                    "end": 1321,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1302,
                      "end": 1320,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1302,
                        "end": 1316,
                        "object": {
                          "type": "Super",
                          "start": 1302,
                          "end": 1307
                        },
                        "property": {
                          "type": "Literal",
                          "start": 1308,
                          "end": 1315,
                          "value": "value",
                          "raw": "\"value\""
                        },
                        "computed": true,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1319,
                        "end": 1320,
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1452,
                    "end": 1475,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1456,
                        "end": 1474,
                        "id": {
                          "type": "Identifier",
                          "start": 1456,
                          "end": 1457,
                          "name": "z",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 1460,
                          "end": 1474,
                          "object": {
                            "type": "Super",
                            "start": 1460,
                            "end": 1465
                          },
                          "property": {
                            "type": "Literal",
                            "start": 1466,
                            "end": 1473,
                            "value": "value",
                            "raw": "\"value\""
                          },
                          "computed": true,
                          "optional": false
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
      "typeParameters": null,
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
