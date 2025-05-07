__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2756,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 184,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 184,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 25,
            "end": 89,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 36,
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
              "start": 36,
              "end": 89,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 81,
                "end": 89,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 37,
                  "end": 56,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 56,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 48,
                      "end": 56,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 50,
                        "end": 56
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 58,
                  "end": 79,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 79,
                    "decorators": [],
                    "name": "health",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 71,
                      "end": 79,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 73,
                        "end": 79
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 95,
            "end": 161,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 95,
              "end": 101,
              "decorators": [],
              "name": "attack",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 101,
              "end": 161,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 110,
                "end": 161,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 102,
                  "end": 108,
                  "decorators": [],
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 167,
            "end": 182,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 174,
              "decorators": [],
              "name": "isAlive",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 177,
              "end": 181,
              "raw": "true",
              "value": true,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 18,
        "decorators": [],
        "name": "BasicMonster",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 186,
      "end": 222,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 190,
          "end": 221,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 190,
            "end": 192,
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 195,
            "end": 221,
            "arguments": [
              {
                "type": "Literal",
                "start": 212,
                "end": 215,
                "raw": "\"1\"",
                "value": "1",
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 217,
                "end": 220,
                "raw": "100",
                "value": 100,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 199,
              "end": 211,
              "decorators": [],
              "name": "BasicMonster",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 223,
      "end": 259,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 227,
          "end": 258,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 227,
            "end": 229,
            "decorators": [],
            "name": "m2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 232,
            "end": 258,
            "arguments": [
              {
                "type": "Literal",
                "start": 249,
                "end": 252,
                "raw": "\"2\"",
                "value": "2",
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 254,
                "end": 257,
                "raw": "100",
                "value": 100,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 236,
              "end": 248,
              "decorators": [],
              "name": "BasicMonster",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 260,
      "end": 274,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 260,
        "end": 273,
        "arguments": [
          {
            "type": "Identifier",
            "start": 270,
            "end": 272,
            "decorators": [],
            "name": "m2",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 260,
          "end": 269,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 260,
            "end": 262,
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 263,
            "end": 269,
            "decorators": [],
            "name": "attack",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 275,
      "end": 289,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 275,
        "end": 288,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 275,
          "end": 284,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 275,
            "end": 277,
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 278,
            "end": 284,
            "decorators": [],
            "name": "health",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 287,
          "end": 288,
          "raw": "0",
          "value": 0,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 290,
      "end": 332,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 290,
        "end": 331,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 302,
            "end": 330,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 302,
              "end": 328,
              "computed": false,
              "object": {
                "type": "TSTypeAssertion",
                "start": 303,
                "end": 318,
                "expression": {
                  "type": "MemberExpression",
                  "start": 308,
                  "end": 318,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 308,
                    "end": 310,
                    "decorators": [],
                    "name": "m5",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 311,
                    "end": 318,
                    "decorators": [],
                    "name": "isAlive",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 304,
                  "end": 307
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 320,
                "end": 328,
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 290,
          "end": 301,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 290,
            "end": 297,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 298,
            "end": 301,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 334,
      "end": 933,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 354,
        "end": 933,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 360,
            "end": 426,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 360,
              "end": 371,
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
              "start": 371,
              "end": 426,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 418,
                "end": 426,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 372,
                  "end": 391,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 379,
                    "end": 391,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 383,
                      "end": 391,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 385,
                        "end": 391
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 393,
                  "end": 416,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 401,
                    "end": 416,
                    "decorators": [],
                    "name": "_health",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 408,
                      "end": 416,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 410,
                        "end": 416
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 432,
            "end": 498,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 432,
              "end": 438,
              "decorators": [],
              "name": "attack",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 438,
              "end": 498,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 447,
                "end": 498,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 439,
                  "end": 445,
                  "decorators": [],
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 668,
            "end": 722,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 672,
              "end": 679,
              "decorators": [],
              "name": "isAlive",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 679,
              "end": 722,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 682,
                "end": 722,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 692,
                    "end": 716,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 699,
                      "end": 715,
                      "operator": ">",
                      "left": {
                        "type": "MemberExpression",
                        "start": 699,
                        "end": 711,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 699,
                          "end": 703
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 704,
                          "end": 711,
                          "decorators": [],
                          "name": "_health",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 714,
                        "end": 715,
                        "raw": "0",
                        "value": 0,
                        "regex": null,
                        "bigint": null
                      }
                    }
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
          },
          {
            "type": "MethodDefinition",
            "start": 780,
            "end": 931,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 784,
              "end": 790,
              "decorators": [],
              "name": "health",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 790,
              "end": 931,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 806,
                "end": 931,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 816,
                    "end": 898,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 831,
                      "end": 898,
                      "body": [
                        {
                          "type": "ThrowStatement",
                          "start": 845,
                          "end": 892,
                          "argument": {
                            "type": "NewExpression",
                            "start": 851,
                            "end": 892,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 861,
                                "end": 891,
                                "raw": "'Health must be non-negative.'",
                                "value": "Health must be non-negative.",
                                "regex": null,
                                "bigint": null
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 855,
                              "end": 860,
                              "decorators": [],
                              "name": "Error",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 820,
                      "end": 829,
                      "operator": "<",
                      "left": {
                        "type": "Identifier",
                        "start": 820,
                        "end": 825,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 828,
                        "end": 829,
                        "raw": "0",
                        "value": 0,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 907,
                    "end": 927,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 907,
                      "end": 927,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 907,
                        "end": 919,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 907,
                          "end": 911
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 912,
                          "end": 919,
                          "decorators": [],
                          "name": "_health",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 922,
                        "end": 927,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
                  "start": 791,
                  "end": 804,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 796,
                    "end": 804,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 798,
                      "end": 804
                    }
                  }
                }
              ],
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
        "start": 340,
        "end": 353,
        "decorators": [],
        "name": "GetSetMonster",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 935,
      "end": 971,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 939,
          "end": 970,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 939,
            "end": 941,
            "decorators": [],
            "name": "m3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 944,
            "end": 970,
            "arguments": [
              {
                "type": "Literal",
                "start": 961,
                "end": 964,
                "raw": "\"1\"",
                "value": "1",
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 966,
                "end": 969,
                "raw": "100",
                "value": 100,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 948,
              "end": 960,
              "decorators": [],
              "name": "BasicMonster",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 972,
      "end": 1008,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 976,
          "end": 1007,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 976,
            "end": 978,
            "decorators": [],
            "name": "m4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 981,
            "end": 1007,
            "arguments": [
              {
                "type": "Literal",
                "start": 998,
                "end": 1001,
                "raw": "\"2\"",
                "value": "2",
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 1003,
                "end": 1006,
                "raw": "100",
                "value": 100,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 985,
              "end": 997,
              "decorators": [],
              "name": "BasicMonster",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1009,
      "end": 1023,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1009,
        "end": 1022,
        "arguments": [
          {
            "type": "Identifier",
            "start": 1019,
            "end": 1021,
            "decorators": [],
            "name": "m4",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1009,
          "end": 1018,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1009,
            "end": 1011,
            "decorators": [],
            "name": "m3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1012,
            "end": 1018,
            "decorators": [],
            "name": "attack",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1024,
      "end": 1038,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1024,
        "end": 1037,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1024,
          "end": 1033,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1024,
            "end": 1026,
            "decorators": [],
            "name": "m3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1027,
            "end": 1033,
            "decorators": [],
            "name": "health",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 1036,
          "end": 1037,
          "raw": "0",
          "value": 0,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1039,
      "end": 1075,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1043,
          "end": 1075,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1043,
            "end": 1044,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1047,
            "end": 1075,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 1047,
              "end": 1073,
              "computed": false,
              "object": {
                "type": "TSTypeAssertion",
                "start": 1048,
                "end": 1063,
                "expression": {
                  "type": "MemberExpression",
                  "start": 1053,
                  "end": 1063,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1053,
                    "end": 1055,
                    "decorators": [],
                    "name": "m5",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1056,
                    "end": 1063,
                    "decorators": [],
                    "name": "isAlive",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1049,
                  "end": 1052
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1065,
                "end": 1073,
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 1077,
      "end": 1334,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1101,
        "end": 1334,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1107,
            "end": 1133,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1107,
              "end": 1118,
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
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1118,
              "end": 1133,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1119,
                  "end": 1131,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1123,
                    "end": 1131,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1125,
                      "end": 1131
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1138,
            "end": 1203,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1138,
              "end": 1149,
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
              "start": 1149,
              "end": 1203,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1195,
                "end": 1203,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 1150,
                  "end": 1169,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 1157,
                    "end": 1169,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1161,
                      "end": 1169,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1163,
                        "end": 1169
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 1171,
                  "end": 1193,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 1178,
                    "end": 1193,
                    "decorators": [],
                    "name": "health",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1185,
                      "end": 1193,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1187,
                        "end": 1193
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1209,
            "end": 1218,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1209,
              "end": 1215,
              "decorators": [],
              "name": "attack",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1215,
              "end": 1218,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1223,
            "end": 1238,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1223,
              "end": 1229,
              "decorators": [],
              "name": "attack",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1229,
              "end": 1238,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1230,
                  "end": 1236,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1231,
                    "end": 1236,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1233,
                      "end": 1236
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1243,
            "end": 1311,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1243,
              "end": 1249,
              "decorators": [],
              "name": "attack",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1249,
              "end": 1311,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1259,
                "end": 1311,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1250,
                  "end": 1257,
                  "decorators": [],
                  "name": "target",
                  "optional": true,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1317,
            "end": 1332,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1317,
              "end": 1324,
              "decorators": [],
              "name": "isAlive",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 1327,
              "end": 1331,
              "raw": "true",
              "value": true,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1083,
        "end": 1100,
        "decorators": [],
        "name": "OverloadedMonster",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1336,
      "end": 1372,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1340,
          "end": 1371,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1340,
            "end": 1342,
            "decorators": [],
            "name": "m5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1345,
            "end": 1371,
            "arguments": [
              {
                "type": "Literal",
                "start": 1367,
                "end": 1370,
                "raw": "\"1\"",
                "value": "1",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1349,
              "end": 1366,
              "decorators": [],
              "name": "OverloadedMonster",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1373,
      "end": 1409,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1377,
          "end": 1408,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1377,
            "end": 1379,
            "decorators": [],
            "name": "m6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1382,
            "end": 1408,
            "arguments": [
              {
                "type": "Literal",
                "start": 1404,
                "end": 1407,
                "raw": "\"2\"",
                "value": "2",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1386,
              "end": 1403,
              "decorators": [],
              "name": "OverloadedMonster",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1410,
      "end": 1424,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1410,
        "end": 1423,
        "arguments": [
          {
            "type": "Identifier",
            "start": 1420,
            "end": 1422,
            "decorators": [],
            "name": "m6",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1410,
          "end": 1419,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1410,
            "end": 1412,
            "decorators": [],
            "name": "m5",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1413,
            "end": 1419,
            "decorators": [],
            "name": "attack",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1425,
      "end": 1439,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1425,
        "end": 1438,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1425,
          "end": 1434,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1425,
            "end": 1427,
            "decorators": [],
            "name": "m5",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1428,
            "end": 1434,
            "decorators": [],
            "name": "health",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 1437,
          "end": 1438,
          "raw": "0",
          "value": 0,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1440,
      "end": 1476,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1444,
          "end": 1476,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1444,
            "end": 1445,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1448,
            "end": 1476,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 1448,
              "end": 1474,
              "computed": false,
              "object": {
                "type": "TSTypeAssertion",
                "start": 1449,
                "end": 1464,
                "expression": {
                  "type": "MemberExpression",
                  "start": 1454,
                  "end": 1464,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1454,
                    "end": 1456,
                    "decorators": [],
                    "name": "m5",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1457,
                    "end": 1464,
                    "decorators": [],
                    "name": "isAlive",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1450,
                  "end": 1453
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1466,
                "end": 1474,
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 1478,
      "end": 1585,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1497,
        "end": 1585,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1503,
            "end": 1537,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1503,
              "end": 1514,
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
              "start": 1514,
              "end": 1537,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1534,
                "end": 1537,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 1515,
                  "end": 1532,
                  "argument": {
                    "type": "Identifier",
                    "start": 1518,
                    "end": 1522,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1522,
                    "end": 1532,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1524,
                      "end": 1532,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 1524,
                        "end": 1530
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1542,
            "end": 1583,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1542,
              "end": 1546,
              "decorators": [],
              "name": "roar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1546,
              "end": 1583,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1580,
                "end": 1583,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1547,
                  "end": 1559,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1551,
                    "end": 1559,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1553,
                      "end": 1559
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 1561,
                  "end": 1578,
                  "argument": {
                    "type": "Identifier",
                    "start": 1564,
                    "end": 1568,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1568,
                    "end": 1578,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1570,
                      "end": 1578,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 1570,
                        "end": 1576
                      }
                    }
                  },
                  "value": null
                }
              ],
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
        "start": 1484,
        "end": 1496,
        "decorators": [],
        "name": "SplatMonster",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1588,
      "end": 1619,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1603,
        "end": 1619,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1605,
            "end": 1617,
            "argument": {
              "type": "Literal",
              "start": 1612,
              "end": 1616,
              "raw": "true",
              "value": true,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1597,
        "end": 1600,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1620,
      "end": 1700,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1643,
        "end": 1700,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1649,
            "end": 1665,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1649,
              "end": 1652,
              "decorators": [],
              "name": "age",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1652,
              "end": 1660,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1654,
                "end": 1660
              }
            },
            "value": {
              "type": "Literal",
              "start": 1663,
              "end": 1664,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1670,
            "end": 1683,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1670,
              "end": 1674,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1674,
              "end": 1682,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1676,
                "end": 1682
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1688,
            "end": 1698,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1688,
              "end": 1689,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 1692,
              "end": 1697,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1692,
                "end": 1695,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1626,
        "end": 1642,
        "decorators": [],
        "name": "PrototypeMonster",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1702,
      "end": 1804,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1720,
        "end": 1804,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1726,
            "end": 1757,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1726,
              "end": 1737,
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
              "start": 1737,
              "end": 1757,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1749,
                "end": 1757,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1738,
                  "end": 1747,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1739,
                    "end": 1747,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1741,
                      "end": 1747
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1763,
            "end": 1784,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1763,
              "end": 1764,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1764,
              "end": 1784,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1776,
                "end": 1784,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1765,
                  "end": 1774,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1766,
                    "end": 1774,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1768,
                      "end": 1774
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1790,
            "end": 1802,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1790,
              "end": 1791,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1791,
              "end": 1802,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1794,
                "end": 1802,
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
        "start": 1708,
        "end": 1719,
        "decorators": [],
        "name": "SuperParent",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1806,
      "end": 1967,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1843,
        "end": 1967,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1849,
            "end": 1888,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1849,
              "end": 1860,
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
              "start": 1860,
              "end": 1888,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1863,
                "end": 1888,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1873,
                    "end": 1882,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1873,
                      "end": 1881,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 1879,
                          "end": 1880,
                          "raw": "1",
                          "value": 1,
                          "regex": null,
                          "bigint": null
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 1873,
                        "end": 1878
                      },
                      "optional": false,
                      "typeArguments": null
                    }
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
          },
          {
            "type": "MethodDefinition",
            "start": 1894,
            "end": 1929,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1894,
              "end": 1895,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1895,
              "end": 1929,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1898,
                "end": 1929,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1908,
                    "end": 1923,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1908,
                      "end": 1922,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 1916,
                          "end": 1921,
                          "raw": "'str'",
                          "value": "str",
                          "regex": null,
                          "bigint": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1908,
                        "end": 1915,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 1908,
                          "end": 1913
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1914,
                          "end": 1915,
                          "decorators": [],
                          "name": "b",
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
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1935,
            "end": 1965,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1935,
              "end": 1936,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1936,
              "end": 1965,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1939,
                "end": 1965,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1949,
                    "end": 1959,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1949,
                      "end": 1958,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1949,
                        "end": 1956,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 1949,
                          "end": 1954
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1955,
                          "end": 1956,
                          "decorators": [],
                          "name": "c",
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
        "start": 1812,
        "end": 1822,
        "decorators": [],
        "name": "SuperChild",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 1831,
        "end": 1842,
        "decorators": [],
        "name": "SuperParent",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1969,
      "end": 2075,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1983,
        "end": 2075,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1989,
            "end": 2004,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1996,
              "end": 1999,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 2002,
              "end": 2003,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 2009,
            "end": 2028,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 2016,
              "end": 2019,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2019,
              "end": 2027,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2021,
                "end": 2027
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 2034,
            "end": 2073,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2041,
              "end": 2044,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 2044,
              "end": 2073,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2047,
                "end": 2073,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2057,
                    "end": 2067,
                    "argument": {
                      "type": "Literal",
                      "start": 2064,
                      "end": 2066,
                      "raw": "\"\"",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    }
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
        "start": 1975,
        "end": 1982,
        "decorators": [],
        "name": "Statics",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2077,
      "end": 2102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2081,
          "end": 2101,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2081,
            "end": 2085,
            "decorators": [],
            "name": "stat",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 2088,
            "end": 2101,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 2092,
              "end": 2099,
              "decorators": [],
              "name": "Statics",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2104,
      "end": 2152,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2119,
        "end": 2152,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2125,
            "end": 2135,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2125,
              "end": 2126,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2126,
              "end": 2134,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2128,
                "end": 2134
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2140,
            "end": 2150,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2140,
              "end": 2141,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2141,
              "end": 2149,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2143,
                "end": 2149
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 2114,
        "end": 2118,
        "decorators": [],
        "name": "IFoo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 2154,
      "end": 2313,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2196,
        "end": 2313,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 2202,
            "end": 2219,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 2209,
              "end": 2210,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2210,
              "end": 2218,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2212,
                "end": 2218
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 2224,
            "end": 2241,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 2231,
              "end": 2232,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2232,
              "end": 2240,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2234,
                "end": 2240
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 2246,
            "end": 2311,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2246,
              "end": 2257,
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
              "start": 2257,
              "end": 2311,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2260,
                "end": 2311,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2270,
                    "end": 2281,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2270,
                      "end": 2280,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 2270,
                        "end": 2276,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 2270,
                          "end": 2274
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 2275,
                          "end": 2276,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2279,
                        "end": 2280,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2290,
                    "end": 2305,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2290,
                      "end": 2304,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 2290,
                        "end": 2296,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 2290,
                          "end": 2294
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 2295,
                          "end": 2296,
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2299,
                        "end": 2304,
                        "raw": "\"foo\"",
                        "value": "foo",
                        "regex": null,
                        "bigint": null
                      }
                    }
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
        "start": 2160,
        "end": 2179,
        "decorators": [],
        "name": "ImplementsInterface",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 2191,
          "end": 2195,
          "expression": {
            "type": "Identifier",
            "start": 2191,
            "end": 2195,
            "decorators": [],
            "name": "IFoo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 2315,
      "end": 2511,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2332,
        "end": 2511,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2338,
            "end": 2354,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2345,
              "end": 2348,
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
              "start": 2348,
              "end": 2354,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2351,
                "end": 2354,
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
          },
          {
            "type": "MethodDefinition",
            "start": 2359,
            "end": 2376,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2367,
              "end": 2370,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2370,
              "end": 2376,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2373,
                "end": 2376,
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
          },
          {
            "type": "PropertyDefinition",
            "start": 2381,
            "end": 2399,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 2389,
              "end": 2390,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2390,
              "end": 2398,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2392,
                "end": 2398
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 2404,
            "end": 2421,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 2411,
              "end": 2412,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2412,
              "end": 2420,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2414,
                "end": 2420
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 2426,
            "end": 2443,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 2433,
              "end": 2434,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2434,
              "end": 2442,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2436,
                "end": 2442
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 2448,
            "end": 2509,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2448,
              "end": 2459,
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
              "start": 2459,
              "end": 2509,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2462,
                "end": 2509,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2472,
                    "end": 2483,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2472,
                      "end": 2482,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 2472,
                        "end": 2478,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 2472,
                          "end": 2476
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 2477,
                          "end": 2478,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2481,
                        "end": 2482,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2492,
                    "end": 2503,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2492,
                      "end": 2502,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 2492,
                        "end": 2498,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 2492,
                          "end": 2496
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 2497,
                          "end": 2498,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2501,
                        "end": 2502,
                        "raw": "2",
                        "value": 2,
                        "regex": null,
                        "bigint": null
                      }
                    }
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
        "start": 2321,
        "end": 2331,
        "decorators": [],
        "name": "Visibility",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 2513,
      "end": 2603,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2544,
        "end": 2603,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2550,
            "end": 2601,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2550,
              "end": 2561,
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
              "start": 2561,
              "end": 2601,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2598,
                "end": 2601,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 2562,
                  "end": 2578,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 2569,
                    "end": 2578,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2570,
                      "end": 2578,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2572,
                        "end": 2578
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 2580,
                  "end": 2596,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 2587,
                    "end": 2596,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2588,
                      "end": 2596,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2590,
                        "end": 2596
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
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
        "start": 2519,
        "end": 2543,
        "decorators": [],
        "name": "BaseClassWithConstructor",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 2629,
      "end": 2700,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2697,
        "end": 2700,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2635,
        "end": 2663,
        "decorators": [],
        "name": "ChildClassWithoutConstructor",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 2672,
        "end": 2696,
        "decorators": [],
        "name": "BaseClassWithConstructor",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2703,
      "end": 2755,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2707,
          "end": 2754,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2707,
            "end": 2711,
            "decorators": [],
            "name": "ccwc",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 2714,
            "end": 2754,
            "arguments": [
              {
                "type": "Literal",
                "start": 2747,
                "end": 2748,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 2750,
                "end": 2753,
                "raw": "\"s\"",
                "value": "s",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 2718,
              "end": 2746,
              "decorators": [],
              "name": "ChildClassWithoutConstructor",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
