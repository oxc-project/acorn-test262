checkSuperCallBeforeThisAccess.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 1872,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 22,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 22,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 20,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 18,
              "end": 19,
              "raw": "1",
              "value": 1
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
      "start": 24,
      "end": 1219,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 43,
        "end": 1219,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 49,
            "end": 1217,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 60,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 60,
              "end": 1217,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 72,
                "end": 1217,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 82,
                    "end": 96,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 86,
                        "end": 95,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 86,
                          "end": 88,
                          "decorators": [],
                          "name": "a1",
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 91,
                          "end": 95
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 115,
                    "end": 131,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 119,
                        "end": 130,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 119,
                          "end": 121,
                          "decorators": [],
                          "name": "a2",
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 124,
                          "end": 130,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 124,
                            "end": 128
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 129,
                            "end": 130,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 150,
                    "end": 167,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 154,
                        "end": 166,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 154,
                          "end": 156,
                          "decorators": [],
                          "name": "a3",
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 159,
                          "end": 166,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 159,
                            "end": 164
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 165,
                            "end": 166,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 186,
                    "end": 206,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 190,
                        "end": 205,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 190,
                          "end": 192,
                          "decorators": [],
                          "name": "a4",
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 195,
                          "end": 205,
                          "async": false,
                          "body": {
                            "type": "ThisExpression",
                            "start": 201,
                            "end": 205
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": []
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 215,
                    "end": 237,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 219,
                        "end": 236,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 219,
                          "end": 221,
                          "decorators": [],
                          "name": "a5",
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 224,
                          "end": 236,
                          "async": false,
                          "body": {
                            "type": "MemberExpression",
                            "start": 230,
                            "end": 236,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 230,
                              "end": 234
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 235,
                              "end": 236,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            }
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": []
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 246,
                    "end": 269,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 250,
                        "end": 268,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 250,
                          "end": 252,
                          "decorators": [],
                          "name": "a6",
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 255,
                          "end": 268,
                          "async": false,
                          "body": {
                            "type": "MemberExpression",
                            "start": 261,
                            "end": 268,
                            "computed": false,
                            "object": {
                              "type": "Super",
                              "start": 261,
                              "end": 266
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 267,
                              "end": 268,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            }
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": []
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "IfStatement",
                    "start": 278,
                    "end": 549,
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 422,
                      "end": 549,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 436,
                          "end": 450,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 440,
                              "end": 449,
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 440,
                                "end": 442,
                                "decorators": [],
                                "name": "c1",
                                "optional": false
                              },
                              "init": {
                                "type": "ThisExpression",
                                "start": 445,
                                "end": 449
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "let"
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 473,
                          "end": 489,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 477,
                              "end": 488,
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 477,
                                "end": 479,
                                "decorators": [],
                                "name": "c2",
                                "optional": false
                              },
                              "init": {
                                "type": "MemberExpression",
                                "start": 482,
                                "end": 488,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 482,
                                  "end": 486
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 487,
                                  "end": 488,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "let"
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 512,
                          "end": 529,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 516,
                              "end": 528,
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 516,
                                "end": 518,
                                "decorators": [],
                                "name": "c3",
                                "optional": false
                              },
                              "init": {
                                "type": "MemberExpression",
                                "start": 521,
                                "end": 528,
                                "computed": false,
                                "object": {
                                  "type": "Super",
                                  "start": 521,
                                  "end": 526
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 527,
                                  "end": 528,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "let"
                        }
                      ]
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 290,
                      "end": 408,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 304,
                          "end": 312,
                          "expression": {
                            "type": "CallExpression",
                            "start": 304,
                            "end": 311,
                            "arguments": [],
                            "callee": {
                              "type": "Super",
                              "start": 304,
                              "end": 309
                            },
                            "optional": false
                          }
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 325,
                          "end": 339,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 329,
                              "end": 338,
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 329,
                                "end": 331,
                                "decorators": [],
                                "name": "b1",
                                "optional": false
                              },
                              "init": {
                                "type": "ThisExpression",
                                "start": 334,
                                "end": 338
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "let"
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 352,
                          "end": 368,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 356,
                              "end": 367,
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 356,
                                "end": 358,
                                "decorators": [],
                                "name": "b2",
                                "optional": false
                              },
                              "init": {
                                "type": "MemberExpression",
                                "start": 361,
                                "end": 367,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 361,
                                  "end": 365
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 366,
                                  "end": 367,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "let"
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 381,
                          "end": 398,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 385,
                              "end": 397,
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 385,
                                "end": 387,
                                "decorators": [],
                                "name": "b3",
                                "optional": false
                              },
                              "init": {
                                "type": "MemberExpression",
                                "start": 390,
                                "end": 397,
                                "computed": false,
                                "object": {
                                  "type": "Super",
                                  "start": 390,
                                  "end": 395
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 396,
                                  "end": 397,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "let"
                        }
                      ]
                    },
                    "test": {
                      "type": "UnaryExpression",
                      "start": 282,
                      "end": 288,
                      "argument": {
                        "type": "UnaryExpression",
                        "start": 283,
                        "end": 288,
                        "argument": {
                          "type": "Literal",
                          "start": 284,
                          "end": 288,
                          "raw": "true",
                          "value": true
                        },
                        "operator": "!",
                        "prefix": true
                      },
                      "operator": "!",
                      "prefix": true
                    }
                  },
                  {
                    "type": "IfStatement",
                    "start": 558,
                    "end": 901,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 570,
                      "end": 901,
                      "body": [
                        {
                          "type": "SwitchStatement",
                          "start": 584,
                          "end": 862,
                          "cases": [
                            {
                              "type": "SwitchCase",
                              "start": 613,
                              "end": 686,
                              "consequent": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 641,
                                  "end": 649,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 641,
                                    "end": 648,
                                    "arguments": [],
                                    "callee": {
                                      "type": "Super",
                                      "start": 641,
                                      "end": 646
                                    },
                                    "optional": false
                                  }
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 670,
                                  "end": 686,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 674,
                                      "end": 685,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 674,
                                        "end": 676,
                                        "decorators": [],
                                        "name": "d1",
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 679,
                                        "end": 685,
                                        "computed": false,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 679,
                                          "end": 683
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 684,
                                          "end": 685,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "let"
                                }
                              ],
                              "test": {
                                "type": "Literal",
                                "start": 618,
                                "end": 619,
                                "raw": "1",
                                "value": 1
                              }
                            },
                            {
                              "type": "SwitchCase",
                              "start": 703,
                              "end": 747,
                              "consequent": [
                                {
                                  "type": "VariableDeclaration",
                                  "start": 731,
                                  "end": 747,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 735,
                                      "end": 746,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 735,
                                        "end": 737,
                                        "decorators": [],
                                        "name": "d2",
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 740,
                                        "end": 746,
                                        "computed": false,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 740,
                                          "end": 744
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 745,
                                          "end": 746,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "let"
                                }
                              ],
                              "test": {
                                "type": "Literal",
                                "start": 708,
                                "end": 709,
                                "raw": "2",
                                "value": 2
                              }
                            },
                            {
                              "type": "SwitchCase",
                              "start": 774,
                              "end": 848,
                              "consequent": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 803,
                                  "end": 811,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 803,
                                    "end": 810,
                                    "arguments": [],
                                    "callee": {
                                      "type": "Super",
                                      "start": 803,
                                      "end": 808
                                    },
                                    "optional": false
                                  }
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 832,
                                  "end": 848,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 836,
                                      "end": 847,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 836,
                                        "end": 838,
                                        "decorators": [],
                                        "name": "d3",
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 841,
                                        "end": 847,
                                        "computed": false,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 841,
                                          "end": 845
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 846,
                                          "end": 847,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "let"
                                }
                              ],
                              "test": null
                            }
                          ],
                          "discriminant": {
                            "type": "Identifier",
                            "start": 592,
                            "end": 593,
                            "decorators": [],
                            "name": "n",
                            "optional": false
                          }
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 875,
                          "end": 891,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 879,
                              "end": 890,
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 879,
                                "end": 881,
                                "decorators": [],
                                "name": "d4",
                                "optional": false
                              },
                              "init": {
                                "type": "MemberExpression",
                                "start": 884,
                                "end": 890,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 884,
                                  "end": 888
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 889,
                                  "end": 890,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "let"
                        }
                      ]
                    },
                    "test": {
                      "type": "UnaryExpression",
                      "start": 562,
                      "end": 568,
                      "argument": {
                        "type": "UnaryExpression",
                        "start": 563,
                        "end": 568,
                        "argument": {
                          "type": "Literal",
                          "start": 564,
                          "end": 568,
                          "raw": "true",
                          "value": true
                        },
                        "operator": "!",
                        "prefix": true
                      },
                      "operator": "!",
                      "prefix": true
                    }
                  },
                  {
                    "type": "IfStatement",
                    "start": 910,
                    "end": 1107,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 922,
                      "end": 1107,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 936,
                          "end": 973,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 940,
                              "end": 972,
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 940,
                                "end": 942,
                                "decorators": [],
                                "name": "e1",
                                "optional": false
                              },
                              "init": {
                                "type": "ObjectExpression",
                                "start": 945,
                                "end": 972,
                                "properties": [
                                  {
                                    "type": "Property",
                                    "start": 947,
                                    "end": 970,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 947,
                                      "end": 948,
                                      "decorators": [],
                                      "name": "w",
                                      "optional": false
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "optional": false,
                                    "shorthand": false,
                                    "value": {
                                      "type": "ConditionalExpression",
                                      "start": 950,
                                      "end": 970,
                                      "alternate": {
                                        "type": "Literal",
                                        "start": 969,
                                        "end": 970,
                                        "raw": "0",
                                        "value": 0
                                      },
                                      "consequent": {
                                        "type": "CallExpression",
                                        "start": 959,
                                        "end": 966,
                                        "arguments": [],
                                        "callee": {
                                          "type": "Super",
                                          "start": 959,
                                          "end": 964
                                        },
                                        "optional": false
                                      },
                                      "test": {
                                        "type": "UnaryExpression",
                                        "start": 950,
                                        "end": 956,
                                        "argument": {
                                          "type": "UnaryExpression",
                                          "start": 951,
                                          "end": 956,
                                          "argument": {
                                            "type": "Literal",
                                            "start": 952,
                                            "end": 956,
                                            "raw": "true",
                                            "value": true
                                          },
                                          "operator": "!",
                                          "prefix": true
                                        },
                                        "operator": "!",
                                        "prefix": true
                                      }
                                    }
                                  }
                                ]
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "let"
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 986,
                          "end": 1002,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 990,
                              "end": 1001,
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 990,
                                "end": 992,
                                "decorators": [],
                                "name": "e2",
                                "optional": false
                              },
                              "init": {
                                "type": "MemberExpression",
                                "start": 995,
                                "end": 1001,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 995,
                                  "end": 999
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1000,
                                  "end": 1001,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "let"
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 1025,
                          "end": 1068,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1029,
                              "end": 1067,
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 1029,
                                "end": 1031,
                                "decorators": [],
                                "name": "e3",
                                "optional": false
                              },
                              "init": {
                                "type": "ObjectExpression",
                                "start": 1034,
                                "end": 1067,
                                "properties": [
                                  {
                                    "type": "Property",
                                    "start": 1036,
                                    "end": 1065,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 1036,
                                      "end": 1037,
                                      "decorators": [],
                                      "name": "w",
                                      "optional": false
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "optional": false,
                                    "shorthand": false,
                                    "value": {
                                      "type": "ConditionalExpression",
                                      "start": 1039,
                                      "end": 1065,
                                      "alternate": {
                                        "type": "CallExpression",
                                        "start": 1058,
                                        "end": 1065,
                                        "arguments": [],
                                        "callee": {
                                          "type": "Super",
                                          "start": 1058,
                                          "end": 1063
                                        },
                                        "optional": false
                                      },
                                      "consequent": {
                                        "type": "CallExpression",
                                        "start": 1048,
                                        "end": 1055,
                                        "arguments": [],
                                        "callee": {
                                          "type": "Super",
                                          "start": 1048,
                                          "end": 1053
                                        },
                                        "optional": false
                                      },
                                      "test": {
                                        "type": "UnaryExpression",
                                        "start": 1039,
                                        "end": 1045,
                                        "argument": {
                                          "type": "UnaryExpression",
                                          "start": 1040,
                                          "end": 1045,
                                          "argument": {
                                            "type": "Literal",
                                            "start": 1041,
                                            "end": 1045,
                                            "raw": "true",
                                            "value": true
                                          },
                                          "operator": "!",
                                          "prefix": true
                                        },
                                        "operator": "!",
                                        "prefix": true
                                      }
                                    }
                                  }
                                ]
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "let"
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 1081,
                          "end": 1097,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1085,
                              "end": 1096,
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 1085,
                                "end": 1087,
                                "decorators": [],
                                "name": "e4",
                                "optional": false
                              },
                              "init": {
                                "type": "MemberExpression",
                                "start": 1090,
                                "end": 1096,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1090,
                                  "end": 1094
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1095,
                                  "end": 1096,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "let"
                        }
                      ]
                    },
                    "test": {
                      "type": "UnaryExpression",
                      "start": 914,
                      "end": 920,
                      "argument": {
                        "type": "UnaryExpression",
                        "start": 915,
                        "end": 920,
                        "argument": {
                          "type": "Literal",
                          "start": 916,
                          "end": 920,
                          "raw": "true",
                          "value": true
                        },
                        "operator": "!",
                        "prefix": true
                      },
                      "operator": "!",
                      "prefix": true
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1116,
                    "end": 1130,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1120,
                        "end": 1129,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1120,
                          "end": 1122,
                          "decorators": [],
                          "name": "f1",
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 1125,
                          "end": 1129
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1149,
                    "end": 1165,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1153,
                        "end": 1164,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1153,
                          "end": 1155,
                          "decorators": [],
                          "name": "f2",
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 1158,
                          "end": 1164,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1158,
                            "end": 1162
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1163,
                            "end": 1164,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1184,
                    "end": 1201,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1188,
                        "end": 1200,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1188,
                          "end": 1190,
                          "decorators": [],
                          "name": "f3",
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 1193,
                          "end": 1200,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 1193,
                            "end": 1198
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1199,
                            "end": 1200,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
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
                  "start": 61,
                  "end": 70,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 62,
                    "end": 70,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 64,
                      "end": 70
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
        "start": 30,
        "end": 32,
        "decorators": [],
        "name": "C1",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 41,
        "end": 42,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1243,
      "end": 1302,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 1250,
        "end": 1302,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 1260,
          "end": 1302,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 1266,
              "end": 1300,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1266,
                "end": 1277,
                "decorators": [],
                "name": "constructor",
                "optional": false
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 1277,
                "end": 1300,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1293,
                  "end": 1300,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1278,
                    "end": 1291,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1283,
                      "end": 1291,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1285,
                        "end": 1291
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
          "start": 1256,
          "end": 1259,
          "decorators": [],
          "name": "Foo",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1304,
      "end": 1586,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 1311,
        "end": 1586,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 1347,
          "end": 1586,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 1353,
              "end": 1552,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1353,
                "end": 1364,
                "decorators": [],
                "name": "constructor",
                "optional": false
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 1364,
                "end": 1552,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1385,
                  "end": 1552,
                  "body": [
                    {
                      "type": "IfStatement",
                      "start": 1395,
                      "end": 1546,
                      "alternate": {
                        "type": "BlockStatement",
                        "start": 1510,
                        "end": 1546,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 1524,
                            "end": 1536,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1524,
                              "end": 1535,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "start": 1530,
                                  "end": 1534,
                                  "raw": "1337",
                                  "value": 1337
                                }
                              ],
                              "callee": {
                                "type": "Super",
                                "start": 1524,
                                "end": 1529
                              },
                              "optional": false
                            }
                          }
                        ]
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "start": 1411,
                        "end": 1496,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 1425,
                            "end": 1450,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 1431,
                                "end": 1449,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 1431,
                                  "end": 1436,
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "start": 1439,
                                  "end": 1449,
                                  "arguments": [],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 1439,
                                    "end": 1447,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 1439,
                                      "end": 1443
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1444,
                                      "end": 1447,
                                      "decorators": [],
                                      "name": "bar",
                                      "optional": false
                                    }
                                  },
                                  "optional": false
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "const"
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 1473,
                            "end": 1486,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1473,
                              "end": 1485,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 1479,
                                  "end": 1484,
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false
                                }
                              ],
                              "callee": {
                                "type": "Super",
                                "start": 1473,
                                "end": 1478
                              },
                              "optional": false
                            }
                          }
                        ]
                      },
                      "test": {
                        "type": "UnaryExpression",
                        "start": 1399,
                        "end": 1409,
                        "argument": {
                          "type": "Identifier",
                          "start": 1400,
                          "end": 1409,
                          "decorators": [],
                          "name": "something",
                          "optional": false
                        },
                        "operator": "!",
                        "prefix": true
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
                    "start": 1365,
                    "end": 1383,
                    "decorators": [],
                    "name": "something",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1374,
                      "end": 1383,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1376,
                        "end": 1383
                      }
                    }
                  }
                ]
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1557,
              "end": 1584,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1557,
                "end": 1560,
                "decorators": [],
                "name": "bar",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 1560,
                "end": 1584,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1571,
                  "end": 1584,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1573,
                      "end": 1582,
                      "argument": {
                        "type": "Literal",
                        "start": 1580,
                        "end": 1581,
                        "raw": "4",
                        "value": 4
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1562,
                  "end": 1570,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1564,
                    "end": 1570
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 1317,
          "end": 1334,
          "decorators": [],
          "name": "BarCorrectlyFails",
          "optional": false
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 1343,
          "end": 1346,
          "decorators": [],
          "name": "Foo",
          "optional": false
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1588,
      "end": 1871,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 1595,
        "end": 1871,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 1633,
          "end": 1871,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 1639,
              "end": 1837,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1639,
                "end": 1650,
                "decorators": [],
                "name": "constructor",
                "optional": false
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 1650,
                "end": 1837,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1671,
                  "end": 1837,
                  "body": [
                    {
                      "type": "IfStatement",
                      "start": 1681,
                      "end": 1831,
                      "alternate": {
                        "type": "BlockStatement",
                        "start": 1746,
                        "end": 1831,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 1760,
                            "end": 1785,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 1766,
                                "end": 1784,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 1766,
                                  "end": 1771,
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "start": 1774,
                                  "end": 1784,
                                  "arguments": [],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 1774,
                                    "end": 1782,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 1774,
                                      "end": 1778
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1779,
                                      "end": 1782,
                                      "decorators": [],
                                      "name": "bar",
                                      "optional": false
                                    }
                                  },
                                  "optional": false
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "const"
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 1808,
                            "end": 1821,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1808,
                              "end": 1820,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 1814,
                                  "end": 1819,
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false
                                }
                              ],
                              "callee": {
                                "type": "Super",
                                "start": 1808,
                                "end": 1813
                              },
                              "optional": false
                            }
                          }
                        ]
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "start": 1696,
                        "end": 1732,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 1710,
                            "end": 1722,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1710,
                              "end": 1721,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "start": 1716,
                                  "end": 1720,
                                  "raw": "1337",
                                  "value": 1337
                                }
                              ],
                              "callee": {
                                "type": "Super",
                                "start": 1710,
                                "end": 1715
                              },
                              "optional": false
                            }
                          }
                        ]
                      },
                      "test": {
                        "type": "Identifier",
                        "start": 1685,
                        "end": 1694,
                        "decorators": [],
                        "name": "something",
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
                    "start": 1651,
                    "end": 1669,
                    "decorators": [],
                    "name": "something",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1660,
                      "end": 1669,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1662,
                        "end": 1669
                      }
                    }
                  }
                ]
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1842,
              "end": 1869,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1842,
                "end": 1845,
                "decorators": [],
                "name": "bar",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 1845,
                "end": 1869,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1856,
                  "end": 1869,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1858,
                      "end": 1867,
                      "argument": {
                        "type": "Literal",
                        "start": 1865,
                        "end": 1866,
                        "raw": "4",
                        "value": 4
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1847,
                  "end": 1855,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1849,
                    "end": 1855
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 1601,
          "end": 1620,
          "decorators": [],
          "name": "BarIncorrectlyWorks",
          "optional": false
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 1629,
          "end": 1632,
          "decorators": [],
          "name": "Foo",
          "optional": false
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```
