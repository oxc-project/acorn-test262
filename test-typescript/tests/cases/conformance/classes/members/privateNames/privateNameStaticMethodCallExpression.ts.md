__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 675,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 675,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 675,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 22,
              "end": 29,
              "name": "method"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 29,
              "end": 48,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 32,
                "end": 48,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 34,
                    "end": 46,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 34,
                      "end": 45,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 34,
                        "end": 40,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 34,
                          "end": 38
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 39,
                          "end": 40,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 43,
                        "end": 45,
                        "raw": "10",
                        "value": 10,
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
            "start": 54,
            "end": 81,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 61,
              "end": 69,
              "name": "method2"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 69,
              "end": 81,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 79,
                "end": 81,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 70,
                  "end": 71,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "RestElement",
                  "start": 73,
                  "end": 77,
                  "argument": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 77,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 87,
            "end": 100,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "decorators": [],
              "name": "x",
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
              "start": 98,
              "end": 99,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 105,
            "end": 636,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 109,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 109,
              "end": 636,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 112,
                "end": 636,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 122,
                    "end": 135,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 122,
                      "end": 134,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 122,
                        "end": 132,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 122,
                          "end": 124,
                          "decorators": [],
                          "name": "AA",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 125,
                          "end": 132,
                          "name": "method"
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 144,
                    "end": 168,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 150,
                        "end": 167,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 150,
                          "end": 154,
                          "decorators": [],
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 157,
                          "end": 167,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 157,
                            "end": 159,
                            "decorators": [],
                            "name": "AA",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 160,
                            "end": 167,
                            "name": "method"
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 177,
                    "end": 184,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 177,
                      "end": 183,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 177,
                        "end": 181,
                        "decorators": [],
                        "name": "func",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 193,
                    "end": 210,
                    "directive": null,
                    "expression": {
                      "type": "NewExpression",
                      "start": 193,
                      "end": 209,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 197,
                        "end": 207,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 197,
                          "end": 199,
                          "decorators": [],
                          "name": "AA",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 200,
                          "end": 207,
                          "name": "method"
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 220,
                    "end": 241,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 226,
                        "end": 240,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 226,
                          "end": 229,
                          "decorators": [],
                          "name": "arr",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "start": 232,
                          "end": 240,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 234,
                              "end": 235,
                              "raw": "1",
                              "value": 1,
                              "regex": null,
                              "bigint": null
                            },
                            {
                              "type": "Literal",
                              "start": 237,
                              "end": 238,
                              "raw": "2",
                              "value": 2,
                              "regex": null,
                              "bigint": null
                            }
                          ]
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 250,
                    "end": 276,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 250,
                      "end": 275,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 262,
                          "end": 263,
                          "raw": "0",
                          "value": 0,
                          "regex": null,
                          "bigint": null
                        },
                        {
                          "type": "SpreadElement",
                          "start": 265,
                          "end": 271,
                          "argument": {
                            "type": "Identifier",
                            "start": 268,
                            "end": 271,
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "Literal",
                          "start": 273,
                          "end": 274,
                          "raw": "3",
                          "value": 3,
                          "regex": null,
                          "bigint": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 250,
                        "end": 261,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 250,
                          "end": 252,
                          "decorators": [],
                          "name": "AA",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 253,
                          "end": 261,
                          "name": "method2"
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 286,
                    "end": 326,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 292,
                        "end": 325,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 292,
                          "end": 293,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 296,
                          "end": 325,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 312,
                              "end": 313,
                              "raw": "0",
                              "value": 0,
                              "regex": null,
                              "bigint": null
                            },
                            {
                              "type": "SpreadElement",
                              "start": 315,
                              "end": 321,
                              "argument": {
                                "type": "Identifier",
                                "start": 318,
                                "end": 321,
                                "decorators": [],
                                "name": "arr",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "Literal",
                              "start": 323,
                              "end": 324,
                              "raw": "3",
                              "value": 3,
                              "regex": null,
                              "bigint": null
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 300,
                            "end": 311,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 300,
                              "end": 302,
                              "decorators": [],
                              "name": "AA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 303,
                              "end": 311,
                              "name": "method2"
                            }
                          },
                          "typeArguments": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 344,
                    "end": 392,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 350,
                        "end": 391,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 350,
                          "end": 353,
                          "decorators": [],
                          "name": "str",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "TaggedTemplateExpression",
                          "start": 356,
                          "end": 391,
                          "quasi": {
                            "type": "TemplateLiteral",
                            "start": 367,
                            "end": 391,
                            "expressions": [
                              {
                                "type": "Literal",
                                "start": 374,
                                "end": 375,
                                "raw": "1",
                                "value": 1,
                                "regex": null,
                                "bigint": null
                              },
                              {
                                "type": "Literal",
                                "start": 384,
                                "end": 385,
                                "raw": "2",
                                "value": 2,
                                "regex": null,
                                "bigint": null
                              }
                            ],
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "start": 367,
                                "end": 374,
                                "tail": false,
                                "value": {
                                  "cooked": "head",
                                  "raw": "head"
                                }
                              },
                              {
                                "type": "TemplateElement",
                                "start": 375,
                                "end": 384,
                                "tail": false,
                                "value": {
                                  "cooked": "middle",
                                  "raw": "middle"
                                }
                              },
                              {
                                "type": "TemplateElement",
                                "start": 385,
                                "end": 391,
                                "tail": true,
                                "value": {
                                  "cooked": "tail",
                                  "raw": "tail"
                                }
                              }
                            ]
                          },
                          "tag": {
                            "type": "MemberExpression",
                            "start": 356,
                            "end": 367,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 356,
                              "end": 358,
                              "decorators": [],
                              "name": "AA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 359,
                              "end": 367,
                              "name": "method2"
                            }
                          },
                          "typeArguments": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 401,
                    "end": 441,
                    "directive": null,
                    "expression": {
                      "type": "TaggedTemplateExpression",
                      "start": 401,
                      "end": 440,
                      "quasi": {
                        "type": "TemplateLiteral",
                        "start": 423,
                        "end": 440,
                        "expressions": [
                          {
                            "type": "Literal",
                            "start": 430,
                            "end": 431,
                            "raw": "1",
                            "value": 1,
                            "regex": null,
                            "bigint": null
                          },
                          {
                            "type": "Literal",
                            "start": 437,
                            "end": 438,
                            "raw": "2",
                            "value": 2,
                            "regex": null,
                            "bigint": null
                          }
                        ],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 423,
                            "end": 430,
                            "tail": false,
                            "value": {
                              "cooked": "test",
                              "raw": "test"
                            }
                          },
                          {
                            "type": "TemplateElement",
                            "start": 431,
                            "end": 437,
                            "tail": false,
                            "value": {
                              "cooked": "and",
                              "raw": "and"
                            }
                          },
                          {
                            "type": "TemplateElement",
                            "start": 438,
                            "end": 440,
                            "tail": true,
                            "value": {
                              "cooked": "",
                              "raw": ""
                            }
                          }
                        ]
                      },
                      "tag": {
                        "type": "MemberExpression",
                        "start": 401,
                        "end": 423,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 401,
                          "end": 414,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 401,
                            "end": 412,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 401,
                              "end": 403,
                              "decorators": [],
                              "name": "AA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 404,
                              "end": 412,
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 415,
                          "end": 423,
                          "name": "method2"
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 451,
                    "end": 488,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 451,
                      "end": 487,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 474,
                          "end": 475,
                          "raw": "0",
                          "value": 0,
                          "regex": null,
                          "bigint": null
                        },
                        {
                          "type": "SpreadElement",
                          "start": 477,
                          "end": 483,
                          "argument": {
                            "type": "Identifier",
                            "start": 480,
                            "end": 483,
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "Literal",
                          "start": 485,
                          "end": 486,
                          "raw": "3",
                          "value": 3,
                          "regex": null,
                          "bigint": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 451,
                        "end": 473,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 451,
                          "end": 464,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 451,
                            "end": 462,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 451,
                              "end": 453,
                              "decorators": [],
                              "name": "AA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 454,
                              "end": 462,
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 465,
                          "end": 473,
                          "name": "method2"
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 498,
                    "end": 552,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 504,
                        "end": 551,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 504,
                          "end": 506,
                          "decorators": [],
                          "name": "b2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 509,
                          "end": 551,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 538,
                              "end": 539,
                              "raw": "0",
                              "value": 0,
                              "regex": null,
                              "bigint": null
                            },
                            {
                              "type": "SpreadElement",
                              "start": 541,
                              "end": 547,
                              "argument": {
                                "type": "Identifier",
                                "start": 544,
                                "end": 547,
                                "decorators": [],
                                "name": "arr",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "Literal",
                              "start": 549,
                              "end": 550,
                              "raw": "3",
                              "value": 3,
                              "regex": null,
                              "bigint": null
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 514,
                            "end": 536,
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "start": 514,
                              "end": 527,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 514,
                                "end": 525,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 514,
                                  "end": 516,
                                  "decorators": [],
                                  "name": "AA",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 517,
                                  "end": 525,
                                  "decorators": [],
                                  "name": "getClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 528,
                              "end": 536,
                              "name": "method2"
                            }
                          },
                          "typeArguments": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 570,
                    "end": 630,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 576,
                        "end": 629,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 576,
                          "end": 580,
                          "decorators": [],
                          "name": "str2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "TaggedTemplateExpression",
                          "start": 583,
                          "end": 629,
                          "quasi": {
                            "type": "TemplateLiteral",
                            "start": 605,
                            "end": 629,
                            "expressions": [
                              {
                                "type": "Literal",
                                "start": 612,
                                "end": 613,
                                "raw": "1",
                                "value": 1,
                                "regex": null,
                                "bigint": null
                              },
                              {
                                "type": "Literal",
                                "start": 622,
                                "end": 623,
                                "raw": "2",
                                "value": 2,
                                "regex": null,
                                "bigint": null
                              }
                            ],
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "start": 605,
                                "end": 612,
                                "tail": false,
                                "value": {
                                  "cooked": "head",
                                  "raw": "head"
                                }
                              },
                              {
                                "type": "TemplateElement",
                                "start": 613,
                                "end": 622,
                                "tail": false,
                                "value": {
                                  "cooked": "middle",
                                  "raw": "middle"
                                }
                              },
                              {
                                "type": "TemplateElement",
                                "start": 623,
                                "end": 629,
                                "tail": true,
                                "value": {
                                  "cooked": "tail",
                                  "raw": "tail"
                                }
                              }
                            ]
                          },
                          "tag": {
                            "type": "MemberExpression",
                            "start": 583,
                            "end": 605,
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "start": 583,
                              "end": 596,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 583,
                                "end": 594,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 583,
                                  "end": 585,
                                  "decorators": [],
                                  "name": "AA",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 586,
                                  "end": 594,
                                  "decorators": [],
                                  "name": "getClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 597,
                              "end": 605,
                              "name": "method2"
                            }
                          },
                          "typeArguments": null
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
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 641,
            "end": 673,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 648,
              "end": 656,
              "decorators": [],
              "name": "getClass",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 656,
              "end": 673,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 659,
                "end": 673,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 661,
                    "end": 671,
                    "argument": {
                      "type": "Identifier",
                      "start": 668,
                      "end": 670,
                      "decorators": [],
                      "name": "AA",
                      "optional": false,
                      "typeAnnotation": null
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
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "AA",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
