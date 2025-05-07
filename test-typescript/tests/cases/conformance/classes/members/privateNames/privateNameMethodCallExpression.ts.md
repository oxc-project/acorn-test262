__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 688,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 688,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 688,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 41,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 15,
              "end": 22,
              "name": "method"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 22,
              "end": 41,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 25,
                "end": 41,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 27,
                    "end": 39,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 27,
                      "end": 38,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 27,
                        "end": 33,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 27,
                          "end": 31
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 32,
                          "end": 33,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 36,
                        "end": 38,
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
            "start": 47,
            "end": 67,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 47,
              "end": 55,
              "name": "method2"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 55,
              "end": 67,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 65,
                "end": 67,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "RestElement",
                  "start": 59,
                  "end": 63,
                  "argument": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 63,
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
            "start": 73,
            "end": 79,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "decorators": [],
              "name": "x",
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
              "start": 77,
              "end": 78,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 84,
            "end": 647,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 84,
              "end": 88,
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
              "start": 88,
              "end": 647,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 91,
                "end": 647,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 101,
                    "end": 116,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 101,
                      "end": 115,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 101,
                        "end": 113,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 101,
                          "end": 105
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 106,
                          "end": 113,
                          "name": "method"
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 125,
                    "end": 151,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 131,
                        "end": 150,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 131,
                          "end": 135,
                          "decorators": [],
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 138,
                          "end": 150,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 138,
                            "end": 142
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 143,
                            "end": 150,
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
                    "start": 160,
                    "end": 167,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 160,
                      "end": 166,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 160,
                        "end": 164,
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
                    "start": 176,
                    "end": 195,
                    "directive": null,
                    "expression": {
                      "type": "NewExpression",
                      "start": 176,
                      "end": 194,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 180,
                        "end": 192,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 180,
                          "end": 184
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 185,
                          "end": 192,
                          "name": "method"
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 205,
                    "end": 226,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 211,
                        "end": 225,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 211,
                          "end": 214,
                          "decorators": [],
                          "name": "arr",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "start": 217,
                          "end": 225,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 219,
                              "end": 220,
                              "raw": "1",
                              "value": 1,
                              "regex": null,
                              "bigint": null
                            },
                            {
                              "type": "Literal",
                              "start": 222,
                              "end": 223,
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
                    "start": 235,
                    "end": 263,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 235,
                      "end": 262,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 249,
                          "end": 250,
                          "raw": "0",
                          "value": 0,
                          "regex": null,
                          "bigint": null
                        },
                        {
                          "type": "SpreadElement",
                          "start": 252,
                          "end": 258,
                          "argument": {
                            "type": "Identifier",
                            "start": 255,
                            "end": 258,
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "Literal",
                          "start": 260,
                          "end": 261,
                          "raw": "3",
                          "value": 3,
                          "regex": null,
                          "bigint": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 235,
                        "end": 248,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 235,
                          "end": 239
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 240,
                          "end": 248,
                          "name": "method2"
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 273,
                    "end": 315,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 279,
                        "end": 314,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 279,
                          "end": 280,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 283,
                          "end": 314,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 301,
                              "end": 302,
                              "raw": "0",
                              "value": 0,
                              "regex": null,
                              "bigint": null
                            },
                            {
                              "type": "SpreadElement",
                              "start": 304,
                              "end": 310,
                              "argument": {
                                "type": "Identifier",
                                "start": 307,
                                "end": 310,
                                "decorators": [],
                                "name": "arr",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "Literal",
                              "start": 312,
                              "end": 313,
                              "raw": "3",
                              "value": 3,
                              "regex": null,
                              "bigint": null
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 287,
                            "end": 300,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 287,
                              "end": 291
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 292,
                              "end": 300,
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
                    "start": 333,
                    "end": 383,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 339,
                        "end": 382,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 339,
                          "end": 342,
                          "decorators": [],
                          "name": "str",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "TaggedTemplateExpression",
                          "start": 345,
                          "end": 382,
                          "quasi": {
                            "type": "TemplateLiteral",
                            "start": 358,
                            "end": 382,
                            "expressions": [
                              {
                                "type": "Literal",
                                "start": 365,
                                "end": 366,
                                "raw": "1",
                                "value": 1,
                                "regex": null,
                                "bigint": null
                              },
                              {
                                "type": "Literal",
                                "start": 375,
                                "end": 376,
                                "raw": "2",
                                "value": 2,
                                "regex": null,
                                "bigint": null
                              }
                            ],
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "start": 358,
                                "end": 365,
                                "tail": false,
                                "value": {
                                  "cooked": "head",
                                  "raw": "head"
                                }
                              },
                              {
                                "type": "TemplateElement",
                                "start": 366,
                                "end": 375,
                                "tail": false,
                                "value": {
                                  "cooked": "middle",
                                  "raw": "middle"
                                }
                              },
                              {
                                "type": "TemplateElement",
                                "start": 376,
                                "end": 382,
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
                            "start": 345,
                            "end": 358,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 345,
                              "end": 349
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 350,
                              "end": 358,
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
                    "start": 392,
                    "end": 437,
                    "directive": null,
                    "expression": {
                      "type": "TaggedTemplateExpression",
                      "start": 392,
                      "end": 436,
                      "quasi": {
                        "type": "TemplateLiteral",
                        "start": 419,
                        "end": 436,
                        "expressions": [
                          {
                            "type": "Literal",
                            "start": 426,
                            "end": 427,
                            "raw": "1",
                            "value": 1,
                            "regex": null,
                            "bigint": null
                          },
                          {
                            "type": "Literal",
                            "start": 433,
                            "end": 434,
                            "raw": "2",
                            "value": 2,
                            "regex": null,
                            "bigint": null
                          }
                        ],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 419,
                            "end": 426,
                            "tail": false,
                            "value": {
                              "cooked": "test",
                              "raw": "test"
                            }
                          },
                          {
                            "type": "TemplateElement",
                            "start": 427,
                            "end": 433,
                            "tail": false,
                            "value": {
                              "cooked": "and",
                              "raw": "and"
                            }
                          },
                          {
                            "type": "TemplateElement",
                            "start": 434,
                            "end": 436,
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
                        "start": 392,
                        "end": 419,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 392,
                          "end": 410,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 392,
                            "end": 408,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 392,
                              "end": 396
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 397,
                              "end": 408,
                              "decorators": [],
                              "name": "getInstance",
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
                          "start": 411,
                          "end": 419,
                          "name": "method2"
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 447,
                    "end": 489,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 447,
                      "end": 488,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 475,
                          "end": 476,
                          "raw": "0",
                          "value": 0,
                          "regex": null,
                          "bigint": null
                        },
                        {
                          "type": "SpreadElement",
                          "start": 478,
                          "end": 484,
                          "argument": {
                            "type": "Identifier",
                            "start": 481,
                            "end": 484,
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "Literal",
                          "start": 486,
                          "end": 487,
                          "raw": "3",
                          "value": 3,
                          "regex": null,
                          "bigint": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 447,
                        "end": 474,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 447,
                          "end": 465,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 447,
                            "end": 463,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 447,
                              "end": 451
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 452,
                              "end": 463,
                              "decorators": [],
                              "name": "getInstance",
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
                          "start": 466,
                          "end": 474,
                          "name": "method2"
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 499,
                    "end": 558,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 505,
                        "end": 557,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 505,
                          "end": 507,
                          "decorators": [],
                          "name": "b2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 510,
                          "end": 557,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 544,
                              "end": 545,
                              "raw": "0",
                              "value": 0,
                              "regex": null,
                              "bigint": null
                            },
                            {
                              "type": "SpreadElement",
                              "start": 547,
                              "end": 553,
                              "argument": {
                                "type": "Identifier",
                                "start": 550,
                                "end": 553,
                                "decorators": [],
                                "name": "arr",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "Literal",
                              "start": 555,
                              "end": 556,
                              "raw": "3",
                              "value": 3,
                              "regex": null,
                              "bigint": null
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 515,
                            "end": 542,
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "start": 515,
                              "end": 533,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 515,
                                "end": 531,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 515,
                                  "end": 519
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 520,
                                  "end": 531,
                                  "decorators": [],
                                  "name": "getInstance",
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
                              "start": 534,
                              "end": 542,
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
                    "start": 576,
                    "end": 641,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 582,
                        "end": 640,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 582,
                          "end": 586,
                          "decorators": [],
                          "name": "str2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "TaggedTemplateExpression",
                          "start": 589,
                          "end": 640,
                          "quasi": {
                            "type": "TemplateLiteral",
                            "start": 616,
                            "end": 640,
                            "expressions": [
                              {
                                "type": "Literal",
                                "start": 623,
                                "end": 624,
                                "raw": "1",
                                "value": 1,
                                "regex": null,
                                "bigint": null
                              },
                              {
                                "type": "Literal",
                                "start": 633,
                                "end": 634,
                                "raw": "2",
                                "value": 2,
                                "regex": null,
                                "bigint": null
                              }
                            ],
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "start": 616,
                                "end": 623,
                                "tail": false,
                                "value": {
                                  "cooked": "head",
                                  "raw": "head"
                                }
                              },
                              {
                                "type": "TemplateElement",
                                "start": 624,
                                "end": 633,
                                "tail": false,
                                "value": {
                                  "cooked": "middle",
                                  "raw": "middle"
                                }
                              },
                              {
                                "type": "TemplateElement",
                                "start": 634,
                                "end": 640,
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
                            "start": 589,
                            "end": 616,
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "start": 589,
                              "end": 607,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 589,
                                "end": 605,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 589,
                                  "end": 593
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 594,
                                  "end": 605,
                                  "decorators": [],
                                  "name": "getInstance",
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
                              "start": 608,
                              "end": 616,
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
            "start": 652,
            "end": 686,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 652,
              "end": 663,
              "decorators": [],
              "name": "getInstance",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 663,
              "end": 686,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 666,
                "end": 686,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 668,
                    "end": 684,
                    "argument": {
                      "type": "NewExpression",
                      "start": 675,
                      "end": 683,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 679,
                        "end": 681,
                        "decorators": [],
                        "name": "AA",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
