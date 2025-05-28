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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "decorators": [],
        "name": "MyBase",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 213,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 19,
            "end": 46,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 21,
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 21,
              "end": 46,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 22,
                  "end": 31,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 23,
                    "end": 31,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 25,
                      "end": 31
                    }
                  }
                }
              ],
              "returnType": null,
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
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 51,
            "end": 67,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 61,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 61,
              "end": 67,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 64,
                "end": 67,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 72,
            "end": 104,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 74,
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": {
              "type": "FunctionExpression",
              "start": 89,
              "end": 104,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 101,
                "end": 104,
                "body": []
              },
              "expression": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 109,
            "end": 125,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 111,
              "decorators": [],
              "name": "d1",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": {
              "type": "Literal",
              "start": 122,
              "end": 124,
              "value": 42,
              "raw": "42"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 130,
            "end": 154,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 138,
              "end": 140,
              "decorators": [],
              "name": "d2",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": {
              "type": "Literal",
              "start": 151,
              "end": 153,
              "value": 42,
              "raw": "42"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 159,
            "end": 182,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 168,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 168,
              "end": 182,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 187,
            "end": 211,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 191,
              "end": 196,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 196,
              "end": 211,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 197,
                  "end": 206,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 198,
                    "end": 206,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 200,
                      "end": 206
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 208,
                "end": 211,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 216,
      "end": 1592,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 222,
        "end": 231,
        "decorators": [],
        "name": "MyDerived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 240,
        "end": 246,
        "decorators": [],
        "name": "MyBase",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 247,
        "end": 1592,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 254,
            "end": 1590,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 254,
              "end": 257,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 257,
              "end": 1590,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                        "optional": false,
                        "computed": true
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 282,
                          "end": 286,
                          "value": "hi",
                          "raw": "\"hi\""
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 381,
                    "end": 413,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 385,
                        "end": 412,
                        "id": {
                          "type": "Identifier",
                          "start": 385,
                          "end": 387,
                          "decorators": [],
                          "name": "l2",
                          "optional": false,
                          "typeAnnotation": null
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
                              "optional": false,
                              "computed": true
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 402,
                              "end": 406,
                              "decorators": [],
                              "name": "bind",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ThisExpression",
                              "start": 407,
                              "end": 411
                            }
                          ],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 507,
                    "end": 550,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 511,
                        "end": 549,
                        "id": {
                          "type": "Identifier",
                          "start": 511,
                          "end": 535,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
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
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 516,
                                    "end": 524,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 518,
                                      "end": 524
                                    }
                                  }
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
                          }
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
                          "optional": false,
                          "computed": true
                        },
                        "definite": false
                      }
                    ],
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
                          "optional": false,
                          "computed": true
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 649,
                          "end": 653,
                          "decorators": [],
                          "name": "bind",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 654,
                          "end": 658
                        }
                      ],
                      "optional": false
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
                        "optional": false,
                        "computed": true
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 900,
                    "end": 921,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 904,
                        "end": 920,
                        "id": {
                          "type": "Identifier",
                          "start": 904,
                          "end": 906,
                          "decorators": [],
                          "name": "l1",
                          "optional": false,
                          "typeAnnotation": null
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
                          "optional": false,
                          "computed": true
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1042,
                    "end": 1063,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1046,
                        "end": 1062,
                        "id": {
                          "type": "Identifier",
                          "start": 1046,
                          "end": 1048,
                          "decorators": [],
                          "name": "l1",
                          "optional": false,
                          "typeAnnotation": null
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
                          "optional": false,
                          "computed": true
                        },
                        "definite": false
                      }
                    ],
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
                        "optional": false,
                        "computed": true
                      },
                      "right": {
                        "type": "FunctionExpression",
                        "start": 1198,
                        "end": 1233,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1208,
                            "end": 1217,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1209,
                              "end": 1217,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1211,
                                "end": 1217
                              }
                            }
                          }
                        ],
                        "returnType": null,
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
                        "expression": false
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
                        "optional": false,
                        "computed": true
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
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1456,
                        "end": 1474,
                        "id": {
                          "type": "Identifier",
                          "start": 1456,
                          "end": 1457,
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null
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
                          "optional": false,
                          "computed": true
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
