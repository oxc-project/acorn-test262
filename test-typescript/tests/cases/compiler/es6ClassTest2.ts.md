__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2757,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 184,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 18,
        "name": "BasicMonster",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 184,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 25,
            "end": 89,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 36,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 36,
              "end": 89,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "name",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 48,
                      "end": 56,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 50,
                        "end": 56
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                    "name": "health",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 71,
                      "end": 79,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 73,
                        "end": 79
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 81,
                "end": 89,
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
          },
          {
            "type": "MethodDefinition",
            "start": 95,
            "end": 161,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 95,
              "end": 101,
              "name": "attack",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 101,
              "end": 161,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 102,
                  "end": 108,
                  "name": "target",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 110,
                "end": 161,
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
          },
          {
            "type": "PropertyDefinition",
            "start": 167,
            "end": 182,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 174,
              "name": "isAlive",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 177,
              "end": 181,
              "value": true,
              "raw": "true"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
      "type": "VariableDeclaration",
      "start": 186,
      "end": 222,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 190,
          "end": 221,
          "id": {
            "type": "Identifier",
            "start": 190,
            "end": 192,
            "name": "m1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 195,
            "end": 221,
            "callee": {
              "type": "Identifier",
              "start": 199,
              "end": 211,
              "name": "BasicMonster",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 212,
                "end": 215,
                "value": "1",
                "raw": "\"1\""
              },
              {
                "type": "Literal",
                "start": 217,
                "end": 220,
                "value": 100,
                "raw": "100"
              }
            ],
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
      "start": 223,
      "end": 259,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 227,
          "end": 258,
          "id": {
            "type": "Identifier",
            "start": 227,
            "end": 229,
            "name": "m2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 232,
            "end": 258,
            "callee": {
              "type": "Identifier",
              "start": 236,
              "end": 248,
              "name": "BasicMonster",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 249,
                "end": 252,
                "value": "2",
                "raw": "\"2\""
              },
              {
                "type": "Literal",
                "start": 254,
                "end": 257,
                "value": 100,
                "raw": "100"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 260,
      "end": 274,
      "expression": {
        "type": "CallExpression",
        "start": 260,
        "end": 273,
        "callee": {
          "type": "MemberExpression",
          "start": 260,
          "end": 269,
          "object": {
            "type": "Identifier",
            "start": 260,
            "end": 262,
            "name": "m1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 263,
            "end": 269,
            "name": "attack",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 270,
            "end": 272,
            "name": "m2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 275,
      "end": 289,
      "expression": {
        "type": "AssignmentExpression",
        "start": 275,
        "end": 288,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 275,
          "end": 284,
          "object": {
            "type": "Identifier",
            "start": 275,
            "end": 277,
            "name": "m1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 278,
            "end": 284,
            "name": "health",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 287,
          "end": 288,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 290,
      "end": 332,
      "expression": {
        "type": "CallExpression",
        "start": 290,
        "end": 331,
        "callee": {
          "type": "MemberExpression",
          "start": 290,
          "end": 301,
          "object": {
            "type": "Identifier",
            "start": 290,
            "end": 297,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 298,
            "end": 301,
            "name": "log",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "CallExpression",
            "start": 302,
            "end": 330,
            "callee": {
              "type": "MemberExpression",
              "start": 302,
              "end": 328,
              "object": {
                "type": "TSTypeAssertion",
                "start": 303,
                "end": 318,
                "expression": {
                  "type": "MemberExpression",
                  "start": 308,
                  "end": 318,
                  "object": {
                    "type": "Identifier",
                    "start": 308,
                    "end": 310,
                    "name": "m5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 311,
                    "end": 318,
                    "name": "isAlive",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 304,
                  "end": 307
                }
              },
              "property": {
                "type": "Identifier",
                "start": 320,
                "end": 328,
                "name": "toString",
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
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 334,
      "end": 933,
      "id": {
        "type": "Identifier",
        "start": 340,
        "end": 353,
        "name": "GetSetMonster",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 354,
        "end": 933,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 360,
            "end": 426,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 360,
              "end": 371,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 371,
              "end": 426,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "name",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 383,
                      "end": 391,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 385,
                        "end": 391
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                    "name": "_health",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 408,
                      "end": 416,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 410,
                        "end": 416
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 418,
                "end": 426,
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
          },
          {
            "type": "MethodDefinition",
            "start": 432,
            "end": 498,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 432,
              "end": 438,
              "name": "attack",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 438,
              "end": 498,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 439,
                  "end": 445,
                  "name": "target",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 447,
                "end": 498,
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
          },
          {
            "type": "MethodDefinition",
            "start": 668,
            "end": 722,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 672,
              "end": 679,
              "name": "isAlive",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 679,
              "end": 722,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "left": {
                        "type": "MemberExpression",
                        "start": 699,
                        "end": 711,
                        "object": {
                          "type": "ThisExpression",
                          "start": 699,
                          "end": 703
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 704,
                          "end": 711,
                          "name": "_health",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": ">",
                      "right": {
                        "type": "Literal",
                        "start": 714,
                        "end": 715,
                        "value": 0,
                        "raw": "0"
                      }
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
            "start": 780,
            "end": 931,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 784,
              "end": 790,
              "name": "health",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 790,
              "end": 931,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 791,
                  "end": 804,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 796,
                    "end": 804,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 798,
                      "end": 804
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 806,
                "end": 931,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 816,
                    "end": 898,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 820,
                      "end": 829,
                      "left": {
                        "type": "Identifier",
                        "start": 820,
                        "end": 825,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "start": 828,
                        "end": 829,
                        "value": 0,
                        "raw": "0"
                      }
                    },
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
                            "callee": {
                              "type": "Identifier",
                              "start": 855,
                              "end": 860,
                              "name": "Error",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 861,
                                "end": 891,
                                "value": "Health must be non-negative.",
                                "raw": "'Health must be non-negative.'"
                              }
                            ],
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 907,
                    "end": 927,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 907,
                      "end": 927,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 907,
                        "end": 919,
                        "object": {
                          "type": "ThisExpression",
                          "start": 907,
                          "end": 911
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 912,
                          "end": 919,
                          "name": "_health",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 922,
                        "end": 927,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 939,
            "end": 941,
            "name": "m3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 944,
            "end": 970,
            "callee": {
              "type": "Identifier",
              "start": 948,
              "end": 960,
              "name": "BasicMonster",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 961,
                "end": 964,
                "value": "1",
                "raw": "\"1\""
              },
              {
                "type": "Literal",
                "start": 966,
                "end": 969,
                "value": 100,
                "raw": "100"
              }
            ],
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
      "start": 972,
      "end": 1008,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 976,
          "end": 1007,
          "id": {
            "type": "Identifier",
            "start": 976,
            "end": 978,
            "name": "m4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 981,
            "end": 1007,
            "callee": {
              "type": "Identifier",
              "start": 985,
              "end": 997,
              "name": "BasicMonster",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 998,
                "end": 1001,
                "value": "2",
                "raw": "\"2\""
              },
              {
                "type": "Literal",
                "start": 1003,
                "end": 1006,
                "value": 100,
                "raw": "100"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1009,
      "end": 1023,
      "expression": {
        "type": "CallExpression",
        "start": 1009,
        "end": 1022,
        "callee": {
          "type": "MemberExpression",
          "start": 1009,
          "end": 1018,
          "object": {
            "type": "Identifier",
            "start": 1009,
            "end": 1011,
            "name": "m3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1012,
            "end": 1018,
            "name": "attack",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 1019,
            "end": 1021,
            "name": "m4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1024,
      "end": 1038,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1024,
        "end": 1037,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1024,
          "end": 1033,
          "object": {
            "type": "Identifier",
            "start": 1024,
            "end": 1026,
            "name": "m3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1027,
            "end": 1033,
            "name": "health",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1036,
          "end": 1037,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 1043,
            "end": 1044,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1047,
            "end": 1075,
            "callee": {
              "type": "MemberExpression",
              "start": 1047,
              "end": 1073,
              "object": {
                "type": "TSTypeAssertion",
                "start": 1048,
                "end": 1063,
                "expression": {
                  "type": "MemberExpression",
                  "start": 1053,
                  "end": 1063,
                  "object": {
                    "type": "Identifier",
                    "start": 1053,
                    "end": 1055,
                    "name": "m5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1056,
                    "end": 1063,
                    "name": "isAlive",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1049,
                  "end": 1052
                }
              },
              "property": {
                "type": "Identifier",
                "start": 1065,
                "end": 1073,
                "name": "toString",
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
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1077,
      "end": 1334,
      "id": {
        "type": "Identifier",
        "start": 1083,
        "end": 1100,
        "name": "OverloadedMonster",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1101,
        "end": 1334,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1107,
            "end": 1133,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1107,
              "end": 1118,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1118,
              "end": 1133,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1119,
                  "end": 1131,
                  "name": "name",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1123,
                    "end": 1131,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1125,
                      "end": 1131
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
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
            "start": 1138,
            "end": 1203,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1138,
              "end": 1149,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 1149,
              "end": 1203,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "name",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1161,
                      "end": 1169,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1163,
                        "end": 1169
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                    "name": "health",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1185,
                      "end": 1193,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1187,
                        "end": 1193
                      }
                    },
                    "decorators": [],
                    "optional": true
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1195,
                "end": 1203,
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
          },
          {
            "type": "MethodDefinition",
            "start": 1209,
            "end": 1218,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1209,
              "end": 1215,
              "name": "attack",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1215,
              "end": 1218,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
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
            "start": 1223,
            "end": 1238,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1223,
              "end": 1229,
              "name": "attack",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1229,
              "end": 1238,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1230,
                  "end": 1236,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1231,
                    "end": 1236,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1233,
                      "end": 1236
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
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
            "start": 1243,
            "end": 1311,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1243,
              "end": 1249,
              "name": "attack",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1249,
              "end": 1311,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1250,
                  "end": 1257,
                  "name": "target",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1259,
                "end": 1311,
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
          },
          {
            "type": "PropertyDefinition",
            "start": 1317,
            "end": 1332,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1317,
              "end": 1324,
              "name": "isAlive",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 1327,
              "end": 1331,
              "value": true,
              "raw": "true"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
      "type": "VariableDeclaration",
      "start": 1336,
      "end": 1372,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1340,
          "end": 1371,
          "id": {
            "type": "Identifier",
            "start": 1340,
            "end": 1342,
            "name": "m5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1345,
            "end": 1371,
            "callee": {
              "type": "Identifier",
              "start": 1349,
              "end": 1366,
              "name": "OverloadedMonster",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1367,
                "end": 1370,
                "value": "1",
                "raw": "\"1\""
              }
            ],
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
      "start": 1373,
      "end": 1409,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1377,
          "end": 1408,
          "id": {
            "type": "Identifier",
            "start": 1377,
            "end": 1379,
            "name": "m6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1382,
            "end": 1408,
            "callee": {
              "type": "Identifier",
              "start": 1386,
              "end": 1403,
              "name": "OverloadedMonster",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1404,
                "end": 1407,
                "value": "2",
                "raw": "\"2\""
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1410,
      "end": 1424,
      "expression": {
        "type": "CallExpression",
        "start": 1410,
        "end": 1423,
        "callee": {
          "type": "MemberExpression",
          "start": 1410,
          "end": 1419,
          "object": {
            "type": "Identifier",
            "start": 1410,
            "end": 1412,
            "name": "m5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1413,
            "end": 1419,
            "name": "attack",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 1420,
            "end": 1422,
            "name": "m6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1425,
      "end": 1439,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1425,
        "end": 1438,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1425,
          "end": 1434,
          "object": {
            "type": "Identifier",
            "start": 1425,
            "end": 1427,
            "name": "m5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1428,
            "end": 1434,
            "name": "health",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1437,
          "end": 1438,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 1444,
            "end": 1445,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1448,
            "end": 1476,
            "callee": {
              "type": "MemberExpression",
              "start": 1448,
              "end": 1474,
              "object": {
                "type": "TSTypeAssertion",
                "start": 1449,
                "end": 1464,
                "expression": {
                  "type": "MemberExpression",
                  "start": 1454,
                  "end": 1464,
                  "object": {
                    "type": "Identifier",
                    "start": 1454,
                    "end": 1456,
                    "name": "m5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1457,
                    "end": 1464,
                    "name": "isAlive",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1450,
                  "end": 1453
                }
              },
              "property": {
                "type": "Identifier",
                "start": 1466,
                "end": 1474,
                "name": "toString",
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
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1478,
      "end": 1585,
      "id": {
        "type": "Identifier",
        "start": 1484,
        "end": 1496,
        "name": "SplatMonster",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1497,
        "end": 1585,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1503,
            "end": 1537,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1503,
              "end": 1514,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 1514,
              "end": 1537,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 1515,
                  "end": 1532,
                  "argument": {
                    "type": "Identifier",
                    "start": 1518,
                    "end": 1522,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "body": {
                "type": "BlockStatement",
                "start": 1534,
                "end": 1537,
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
          },
          {
            "type": "MethodDefinition",
            "start": 1542,
            "end": 1583,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1542,
              "end": 1546,
              "name": "roar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1546,
              "end": 1583,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1547,
                  "end": 1559,
                  "name": "name",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1551,
                    "end": 1559,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1553,
                      "end": 1559
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "RestElement",
                  "start": 1561,
                  "end": 1578,
                  "argument": {
                    "type": "Identifier",
                    "start": 1564,
                    "end": 1568,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "body": {
                "type": "BlockStatement",
                "start": 1580,
                "end": 1583,
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
      "type": "FunctionDeclaration",
      "start": 1588,
      "end": 1619,
      "id": {
        "type": "Identifier",
        "start": 1597,
        "end": 1600,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "value": true,
              "raw": "true"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1620,
      "end": 1700,
      "id": {
        "type": "Identifier",
        "start": 1626,
        "end": 1642,
        "name": "PrototypeMonster",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1643,
        "end": 1700,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1649,
            "end": 1665,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1649,
              "end": 1652,
              "name": "age",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 1663,
              "end": 1664,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1670,
            "end": 1683,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1670,
              "end": 1674,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1688,
            "end": 1698,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1688,
              "end": 1689,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 1692,
              "end": 1697,
              "callee": {
                "type": "Identifier",
                "start": 1692,
                "end": 1695,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
      "start": 1702,
      "end": 1804,
      "id": {
        "type": "Identifier",
        "start": 1708,
        "end": 1719,
        "name": "SuperParent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1720,
        "end": 1804,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1726,
            "end": 1757,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1726,
              "end": 1737,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 1737,
              "end": 1757,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1738,
                  "end": 1747,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1739,
                    "end": 1747,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1741,
                      "end": 1747
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1749,
                "end": 1757,
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
          },
          {
            "type": "MethodDefinition",
            "start": 1763,
            "end": 1784,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1763,
              "end": 1764,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1764,
              "end": 1784,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1765,
                  "end": 1774,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1766,
                    "end": 1774,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1768,
                      "end": 1774
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1776,
                "end": 1784,
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
          },
          {
            "type": "MethodDefinition",
            "start": 1790,
            "end": 1802,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1790,
              "end": 1791,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1791,
              "end": 1802,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1794,
                "end": 1802,
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
      "start": 1806,
      "end": 1967,
      "id": {
        "type": "Identifier",
        "start": 1812,
        "end": 1822,
        "name": "SuperChild",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 1831,
        "end": 1842,
        "name": "SuperParent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 1843,
        "end": 1967,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1849,
            "end": 1888,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1849,
              "end": 1860,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 1860,
              "end": 1888,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1863,
                "end": 1888,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1873,
                    "end": 1882,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1873,
                      "end": 1881,
                      "callee": {
                        "type": "Super",
                        "start": 1873,
                        "end": 1878
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 1879,
                          "end": 1880,
                          "value": 1,
                          "raw": "1"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
            "start": 1894,
            "end": 1929,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1894,
              "end": 1895,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1895,
              "end": 1929,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1898,
                "end": 1929,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1908,
                    "end": 1923,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1908,
                      "end": 1922,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1908,
                        "end": 1915,
                        "object": {
                          "type": "Super",
                          "start": 1908,
                          "end": 1913
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1914,
                          "end": 1915,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 1916,
                          "end": 1921,
                          "value": "str",
                          "raw": "'str'"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
            "start": 1935,
            "end": 1965,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1935,
              "end": 1936,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1936,
              "end": 1965,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1939,
                "end": 1965,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1949,
                    "end": 1959,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1949,
                      "end": 1958,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1949,
                        "end": 1956,
                        "object": {
                          "type": "Super",
                          "start": 1949,
                          "end": 1954
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1955,
                          "end": 1956,
                          "name": "c",
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
      "start": 1969,
      "end": 2075,
      "id": {
        "type": "Identifier",
        "start": 1975,
        "end": 1982,
        "name": "Statics",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1983,
        "end": 2075,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1989,
            "end": 2004,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1996,
              "end": 1999,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 2002,
              "end": 2003,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 2009,
            "end": 2028,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2016,
              "end": 2019,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2034,
            "end": 2073,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2041,
              "end": 2044,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2044,
              "end": 2073,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": "",
                      "raw": "\"\""
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
      "type": "VariableDeclaration",
      "start": 2077,
      "end": 2102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2081,
          "end": 2101,
          "id": {
            "type": "Identifier",
            "start": 2081,
            "end": 2085,
            "name": "stat",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 2088,
            "end": 2101,
            "callee": {
              "type": "Identifier",
              "start": 2092,
              "end": 2099,
              "name": "Statics",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2104,
      "end": 2152,
      "id": {
        "type": "Identifier",
        "start": 2114,
        "end": 2118,
        "name": "IFoo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2119,
        "end": 2152,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2125,
            "end": 2135,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2125,
              "end": 2126,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2126,
              "end": 2134,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2128,
                "end": 2134
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2140,
            "end": 2150,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2140,
              "end": 2141,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2141,
              "end": 2149,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2143,
                "end": 2149
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 2154,
      "end": 2313,
      "id": {
        "type": "Identifier",
        "start": 2160,
        "end": 2179,
        "name": "ImplementsInterface",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2196,
        "end": 2313,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 2202,
            "end": 2219,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2209,
              "end": 2210,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 2224,
            "end": 2241,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2231,
              "end": 2232,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 2246,
            "end": 2311,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2246,
              "end": 2257,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 2257,
              "end": 2311,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2260,
                "end": 2311,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2270,
                    "end": 2281,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2270,
                      "end": 2280,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 2270,
                        "end": 2276,
                        "object": {
                          "type": "ThisExpression",
                          "start": 2270,
                          "end": 2274
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2275,
                          "end": 2276,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2279,
                        "end": 2280,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2290,
                    "end": 2305,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2290,
                      "end": 2304,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 2290,
                        "end": 2296,
                        "object": {
                          "type": "ThisExpression",
                          "start": 2290,
                          "end": 2294
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2295,
                          "end": 2296,
                          "name": "z",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2299,
                        "end": 2304,
                        "value": "foo",
                        "raw": "\"foo\""
                      }
                    },
                    "directive": null
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
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 2191,
          "end": 2195,
          "expression": {
            "type": "Identifier",
            "start": 2191,
            "end": 2195,
            "name": "IFoo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 2315,
      "end": 2511,
      "id": {
        "type": "Identifier",
        "start": 2321,
        "end": 2331,
        "name": "Visibility",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2332,
        "end": 2511,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2338,
            "end": 2354,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2345,
              "end": 2348,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2348,
              "end": 2354,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2351,
                "end": 2354,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 2359,
            "end": 2376,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2367,
              "end": 2370,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2370,
              "end": 2376,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2373,
                "end": 2376,
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
            "start": 2381,
            "end": 2399,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2389,
              "end": 2390,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 2404,
            "end": 2421,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2411,
              "end": 2412,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 2426,
            "end": 2443,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2433,
              "end": 2434,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 2448,
            "end": 2509,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2448,
              "end": 2459,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 2459,
              "end": 2509,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2462,
                "end": 2509,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2472,
                    "end": 2483,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2472,
                      "end": 2482,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 2472,
                        "end": 2478,
                        "object": {
                          "type": "ThisExpression",
                          "start": 2472,
                          "end": 2476
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2477,
                          "end": 2478,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2481,
                        "end": 2482,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2492,
                    "end": 2503,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2492,
                      "end": 2502,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 2492,
                        "end": 2498,
                        "object": {
                          "type": "ThisExpression",
                          "start": 2492,
                          "end": 2496
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2497,
                          "end": 2498,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2501,
                        "end": 2502,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "directive": null
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
    },
    {
      "type": "ClassDeclaration",
      "start": 2513,
      "end": 2603,
      "id": {
        "type": "Identifier",
        "start": 2519,
        "end": 2543,
        "name": "BaseClassWithConstructor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2544,
        "end": 2603,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2550,
            "end": 2601,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2550,
              "end": 2561,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 2561,
              "end": 2601,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2570,
                      "end": 2578,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2572,
                        "end": 2578
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                    "name": "s",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2588,
                      "end": 2596,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2590,
                        "end": 2596
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 2598,
                "end": 2601,
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
      "start": 2629,
      "end": 2700,
      "id": {
        "type": "Identifier",
        "start": 2635,
        "end": 2663,
        "name": "ChildClassWithoutConstructor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 2672,
        "end": 2696,
        "name": "BaseClassWithConstructor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 2697,
        "end": 2700,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 2707,
            "end": 2711,
            "name": "ccwc",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 2714,
            "end": 2754,
            "callee": {
              "type": "Identifier",
              "start": 2718,
              "end": 2746,
              "name": "ChildClassWithoutConstructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 2747,
                "end": 2748,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 2750,
                "end": 2753,
                "value": "s",
                "raw": "\"s\""
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
