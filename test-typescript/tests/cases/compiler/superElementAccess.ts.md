superElementAccess.ts
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 213,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 19,
            "end": 46,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 21,
              "decorators": [],
              "name": "m1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 21,
              "end": 46,
              "async": false,
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
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 51,
            "end": 67,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 61,
              "decorators": [],
              "name": "p1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 61,
              "end": 67,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 64,
                "end": 67,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 72,
            "end": 104,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 74,
              "decorators": [],
              "name": "m2",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 86,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 76,
                "end": 86,
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
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 101,
                "end": 104,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 109,
            "end": 125,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 111,
              "decorators": [],
              "name": "d1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
              "raw": "42",
              "value": 42
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 130,
            "end": 154,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 138,
              "end": 140,
              "decorators": [],
              "name": "d2",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
              "raw": "42",
              "value": 42
            }
          },
          {
            "type": "MethodDefinition",
            "start": 159,
            "end": 182,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 168,
              "decorators": [],
              "name": "value",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 168,
              "end": 182,
              "async": false,
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
                      "raw": "0",
                      "value": 0
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 187,
            "end": 211,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 191,
              "end": 196,
              "decorators": [],
              "name": "value",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 196,
              "end": 211,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 208,
                "end": 211,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "decorators": [],
        "name": "MyBase",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 216,
      "end": 1592,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 247,
        "end": 1592,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 254,
            "end": 1590,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 254,
              "end": 257,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 257,
              "end": 1590,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 282,
                          "end": 286,
                          "raw": "\"hi\"",
                          "value": "hi"
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 270,
                        "end": 281,
                        "computed": true,
                        "object": {
                          "type": "Super",
                          "start": 270,
                          "end": 275
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "start": 276,
                          "end": 280,
                          "raw": "\"m1\"",
                          "value": "m1"
                        }
                      },
                      "optional": false
                    }
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 385,
                          "end": 387,
                          "decorators": [],
                          "name": "l2",
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 390,
                          "end": 412,
                          "arguments": [
                            {
                              "type": "ThisExpression",
                              "start": 407,
                              "end": 411
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 390,
                            "end": 406,
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "start": 390,
                              "end": 401,
                              "computed": true,
                              "object": {
                                "type": "Super",
                                "start": 390,
                                "end": 395
                              },
                              "optional": false,
                              "property": {
                                "type": "Literal",
                                "start": 396,
                                "end": 400,
                                "raw": "\"m1\"",
                                "value": "m1"
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 402,
                              "end": 406,
                              "decorators": [],
                              "name": "bind",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                        "definite": false,
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
                          "computed": true,
                          "object": {
                            "type": "Super",
                            "start": 538,
                            "end": 543
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 544,
                            "end": 548,
                            "raw": "\"m1\"",
                            "value": "m1"
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 637,
                    "end": 660,
                    "expression": {
                      "type": "CallExpression",
                      "start": 637,
                      "end": 659,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 654,
                          "end": 658
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 637,
                        "end": 653,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 637,
                          "end": 648,
                          "computed": true,
                          "object": {
                            "type": "Super",
                            "start": 637,
                            "end": 642
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 643,
                            "end": 647,
                            "raw": "\"m2\"",
                            "value": "m2"
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 649,
                          "end": 653,
                          "decorators": [],
                          "name": "bind",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 775,
                    "end": 789,
                    "expression": {
                      "type": "CallExpression",
                      "start": 775,
                      "end": 788,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 775,
                        "end": 786,
                        "computed": true,
                        "object": {
                          "type": "Super",
                          "start": 775,
                          "end": 780
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "start": 781,
                          "end": 785,
                          "raw": "\"p1\"",
                          "value": "p1"
                        }
                      },
                      "optional": false
                    }
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 904,
                          "end": 906,
                          "decorators": [],
                          "name": "l1",
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 909,
                          "end": 920,
                          "computed": true,
                          "object": {
                            "type": "Super",
                            "start": 909,
                            "end": 914
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 915,
                            "end": 919,
                            "raw": "\"d1\"",
                            "value": "d1"
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1046,
                          "end": 1048,
                          "decorators": [],
                          "name": "l1",
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 1051,
                          "end": 1062,
                          "computed": true,
                          "object": {
                            "type": "Super",
                            "start": 1051,
                            "end": 1056
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 1057,
                            "end": 1061,
                            "raw": "\"d2\"",
                            "value": "d2"
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                        "computed": true,
                        "object": {
                          "type": "Super",
                          "start": 1184,
                          "end": 1189
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "start": 1190,
                          "end": 1194,
                          "raw": "\"m1\"",
                          "value": "m1"
                        }
                      },
                      "right": {
                        "type": "FunctionExpression",
                        "start": 1198,
                        "end": 1233,
                        "async": false,
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
                                "raw": "\"\"",
                                "value": ""
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
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
                        ]
                      }
                    }
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
                        "computed": true,
                        "object": {
                          "type": "Super",
                          "start": 1302,
                          "end": 1307
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "start": 1308,
                          "end": 1315,
                          "raw": "\"value\"",
                          "value": "value"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1319,
                        "end": 1320,
                        "raw": "0",
                        "value": 0
                      }
                    }
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1456,
                          "end": 1457,
                          "decorators": [],
                          "name": "z",
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 1460,
                          "end": 1474,
                          "computed": true,
                          "object": {
                            "type": "Super",
                            "start": 1460,
                            "end": 1465
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 1466,
                            "end": 1473,
                            "raw": "\"value\"",
                            "value": "value"
                          }
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
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 222,
        "end": 231,
        "decorators": [],
        "name": "MyDerived",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 240,
        "end": 246,
        "decorators": [],
        "name": "MyBase",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
