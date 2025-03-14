asyncMethodWithSuperConflict_es6.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 1270,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 43,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 43,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 25,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 15,
              "end": 25,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 18,
                "end": 25,
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
            "type": "MethodDefinition",
            "start": 30,
            "end": 41,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 31,
              "end": 41,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 34,
                "end": 41,
                "body": []
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
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 45,
      "end": 1269,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 63,
        "end": 1269,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 146,
            "end": 528,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 152,
              "end": 158,
              "decorators": [],
              "name": "simple",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 158,
              "end": 528,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 161,
                "end": 528,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 171,
                    "end": 191,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 177,
                        "end": 190,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 177,
                          "end": 183,
                          "decorators": [],
                          "name": "_super",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 186,
                          "end": 190,
                          "raw": "null",
                          "value": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 200,
                    "end": 225,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 206,
                        "end": 224,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 206,
                          "end": 217,
                          "decorators": [],
                          "name": "_superIndex",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 220,
                          "end": 224,
                          "raw": "null",
                          "value": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 271,
                    "end": 281,
                    "expression": {
                      "type": "CallExpression",
                      "start": 271,
                      "end": 280,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 271,
                        "end": 278,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 271,
                          "end": 276
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 277,
                          "end": 278,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 327,
                    "end": 337,
                    "expression": {
                      "type": "CallExpression",
                      "start": 327,
                      "end": 336,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 327,
                        "end": 334,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 327,
                          "end": 332
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 333,
                          "end": 334,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 383,
                    "end": 396,
                    "expression": {
                      "type": "CallExpression",
                      "start": 383,
                      "end": 395,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 383,
                        "end": 393,
                        "computed": true,
                        "object": {
                          "type": "Super",
                          "start": 383,
                          "end": 388
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "start": 389,
                          "end": 392,
                          "raw": "\"x\"",
                          "value": "x"
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 440,
                    "end": 458,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 446,
                        "end": 457,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 446,
                          "end": 447,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 450,
                          "end": 457,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 450,
                            "end": 455
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 456,
                            "end": 457,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 501,
                    "end": 522,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 507,
                        "end": 521,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 507,
                          "end": 508,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 511,
                          "end": 521,
                          "computed": true,
                          "object": {
                            "type": "Super",
                            "start": 511,
                            "end": 516
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 517,
                            "end": 520,
                            "raw": "\"x\"",
                            "value": "x"
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
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
            "start": 614,
            "end": 1267,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 620,
              "end": 628,
              "decorators": [],
              "name": "advanced",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 628,
              "end": 1267,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 631,
                "end": 1267,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 641,
                    "end": 661,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 647,
                        "end": 660,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 647,
                          "end": 653,
                          "decorators": [],
                          "name": "_super",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 656,
                          "end": 660,
                          "raw": "null",
                          "value": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 670,
                    "end": 695,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 676,
                        "end": 694,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 676,
                          "end": 687,
                          "decorators": [],
                          "name": "_superIndex",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 690,
                          "end": 694,
                          "raw": "null",
                          "value": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 704,
                    "end": 723,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 710,
                        "end": 722,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 710,
                          "end": 711,
                          "decorators": [],
                          "name": "f",
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 714,
                          "end": 722,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 720,
                            "end": 722,
                            "body": []
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": []
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 770,
                    "end": 780,
                    "expression": {
                      "type": "CallExpression",
                      "start": 770,
                      "end": 779,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 770,
                        "end": 777,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 770,
                          "end": 775
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 776,
                          "end": 777,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 826,
                    "end": 839,
                    "expression": {
                      "type": "CallExpression",
                      "start": 826,
                      "end": 838,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 826,
                        "end": 836,
                        "computed": true,
                        "object": {
                          "type": "Super",
                          "start": 826,
                          "end": 831
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "start": 832,
                          "end": 835,
                          "raw": "\"x\"",
                          "value": "x"
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 883,
                    "end": 901,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 889,
                        "end": 900,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 889,
                          "end": 890,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 893,
                          "end": 900,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 893,
                            "end": 898
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 899,
                            "end": 900,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 944,
                    "end": 965,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 950,
                        "end": 964,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 950,
                          "end": 951,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 954,
                          "end": 964,
                          "computed": true,
                          "object": {
                            "type": "Super",
                            "start": 954,
                            "end": 959
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 960,
                            "end": 963,
                            "raw": "\"x\"",
                            "value": "x"
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1011,
                    "end": 1023,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1011,
                      "end": 1022,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1011,
                        "end": 1018,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 1011,
                          "end": 1016
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1017,
                          "end": 1018,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1021,
                        "end": 1022,
                        "decorators": [],
                        "name": "f",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1068,
                    "end": 1083,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1068,
                      "end": 1082,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1068,
                        "end": 1078,
                        "computed": true,
                        "object": {
                          "type": "Super",
                          "start": 1068,
                          "end": 1073
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "start": 1074,
                          "end": 1077,
                          "raw": "\"x\"",
                          "value": "x"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1081,
                        "end": 1082,
                        "decorators": [],
                        "name": "f",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1146,
                    "end": 1171,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1147,
                      "end": 1169,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 1147,
                        "end": 1161,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1149,
                            "end": 1159,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1149,
                              "end": 1150,
                              "decorators": [],
                              "name": "f",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "MemberExpression",
                              "start": 1152,
                              "end": 1159,
                              "computed": false,
                              "object": {
                                "type": "Super",
                                "start": 1152,
                                "end": 1157
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 1158,
                                "end": 1159,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              }
                            }
                          }
                        ]
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 1164,
                        "end": 1169,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1166,
                            "end": 1167,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1166,
                              "end": 1167,
                              "decorators": [],
                              "name": "f",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 1166,
                              "end": 1167,
                              "decorators": [],
                              "name": "f",
                              "optional": false
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1233,
                    "end": 1261,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1234,
                      "end": 1259,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 1234,
                        "end": 1251,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1236,
                            "end": 1249,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1236,
                              "end": 1237,
                              "decorators": [],
                              "name": "f",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "MemberExpression",
                              "start": 1239,
                              "end": 1249,
                              "computed": true,
                              "object": {
                                "type": "Super",
                                "start": 1239,
                                "end": 1244
                              },
                              "optional": false,
                              "property": {
                                "type": "Literal",
                                "start": 1245,
                                "end": 1248,
                                "raw": "\"x\"",
                                "value": "x"
                              }
                            }
                          }
                        ]
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 1254,
                        "end": 1259,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1256,
                            "end": 1257,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1256,
                              "end": 1257,
                              "decorators": [],
                              "name": "f",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 1256,
                              "end": 1257,
                              "decorators": [],
                              "name": "f",
                              "optional": false
                            }
                          }
                        ]
                      }
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 52,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 61,
        "end": 62,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
