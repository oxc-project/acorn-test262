__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 22,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 20,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 18,
              "end": 19,
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
      "start": 24,
      "end": 1219,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 32,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 41,
        "end": 42,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 43,
        "end": 1219,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 49,
            "end": 1217,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 60,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 60,
              "end": 1217,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 61,
                  "end": 70,
                  "name": "n",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 62,
                    "end": 70,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 64,
                      "end": 70
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "id": {
                          "type": "Identifier",
                          "start": 86,
                          "end": 88,
                          "name": "a1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 91,
                          "end": 95
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
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
                        "id": {
                          "type": "Identifier",
                          "start": 119,
                          "end": 121,
                          "name": "a2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 124,
                          "end": 130,
                          "object": {
                            "type": "ThisExpression",
                            "start": 124,
                            "end": 128
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 129,
                            "end": 130,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
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
                        "id": {
                          "type": "Identifier",
                          "start": 154,
                          "end": 156,
                          "name": "a3",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 159,
                          "end": 166,
                          "object": {
                            "type": "Super",
                            "start": 159,
                            "end": 164
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 165,
                            "end": 166,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
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
                        "id": {
                          "type": "Identifier",
                          "start": 190,
                          "end": 192,
                          "name": "a4",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 195,
                          "end": 205,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "ThisExpression",
                            "start": 201,
                            "end": 205
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
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
                        "id": {
                          "type": "Identifier",
                          "start": 219,
                          "end": 221,
                          "name": "a5",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 224,
                          "end": 236,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "MemberExpression",
                            "start": 230,
                            "end": 236,
                            "object": {
                              "type": "ThisExpression",
                              "start": 230,
                              "end": 234
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 235,
                              "end": 236,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
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
                        "id": {
                          "type": "Identifier",
                          "start": 250,
                          "end": 252,
                          "name": "a6",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 255,
                          "end": 268,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "MemberExpression",
                            "start": 261,
                            "end": 268,
                            "object": {
                              "type": "Super",
                              "start": 261,
                              "end": 266
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 267,
                              "end": 268,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
                  },
                  {
                    "type": "IfStatement",
                    "start": 278,
                    "end": 549,
                    "test": {
                      "type": "UnaryExpression",
                      "start": 282,
                      "end": 288,
                      "operator": "!",
                      "prefix": true,
                      "argument": {
                        "type": "UnaryExpression",
                        "start": 283,
                        "end": 288,
                        "operator": "!",
                        "prefix": true,
                        "argument": {
                          "type": "Literal",
                          "start": 284,
                          "end": 288,
                          "value": true,
                          "raw": "true"
                        }
                      }
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
                            "callee": {
                              "type": "Super",
                              "start": 304,
                              "end": 309
                            },
                            "arguments": [],
                            "optional": false,
                            "typeArguments": null
                          },
                          "directive": null
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
                              "id": {
                                "type": "Identifier",
                                "start": 329,
                                "end": 331,
                                "name": "b1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "ThisExpression",
                                "start": 334,
                                "end": 338
                              },
                              "definite": false
                            }
                          ],
                          "kind": "let",
                          "declare": false
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
                              "id": {
                                "type": "Identifier",
                                "start": 356,
                                "end": 358,
                                "name": "b2",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "MemberExpression",
                                "start": 361,
                                "end": 367,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 361,
                                  "end": 365
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 366,
                                  "end": 367,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "definite": false
                            }
                          ],
                          "kind": "let",
                          "declare": false
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
                              "id": {
                                "type": "Identifier",
                                "start": 385,
                                "end": 387,
                                "name": "b3",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "MemberExpression",
                                "start": 390,
                                "end": 397,
                                "object": {
                                  "type": "Super",
                                  "start": 390,
                                  "end": 395
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 396,
                                  "end": 397,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "definite": false
                            }
                          ],
                          "kind": "let",
                          "declare": false
                        }
                      ]
                    },
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
                              "id": {
                                "type": "Identifier",
                                "start": 440,
                                "end": 442,
                                "name": "c1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "ThisExpression",
                                "start": 445,
                                "end": 449
                              },
                              "definite": false
                            }
                          ],
                          "kind": "let",
                          "declare": false
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
                              "id": {
                                "type": "Identifier",
                                "start": 477,
                                "end": 479,
                                "name": "c2",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "MemberExpression",
                                "start": 482,
                                "end": 488,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 482,
                                  "end": 486
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 487,
                                  "end": 488,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "definite": false
                            }
                          ],
                          "kind": "let",
                          "declare": false
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
                              "id": {
                                "type": "Identifier",
                                "start": 516,
                                "end": 518,
                                "name": "c3",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "MemberExpression",
                                "start": 521,
                                "end": 528,
                                "object": {
                                  "type": "Super",
                                  "start": 521,
                                  "end": 526
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 527,
                                  "end": 528,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "definite": false
                            }
                          ],
                          "kind": "let",
                          "declare": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "IfStatement",
                    "start": 558,
                    "end": 901,
                    "test": {
                      "type": "UnaryExpression",
                      "start": 562,
                      "end": 568,
                      "operator": "!",
                      "prefix": true,
                      "argument": {
                        "type": "UnaryExpression",
                        "start": 563,
                        "end": 568,
                        "operator": "!",
                        "prefix": true,
                        "argument": {
                          "type": "Literal",
                          "start": 564,
                          "end": 568,
                          "value": true,
                          "raw": "true"
                        }
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 570,
                      "end": 901,
                      "body": [
                        {
                          "type": "SwitchStatement",
                          "start": 584,
                          "end": 862,
                          "discriminant": {
                            "type": "Identifier",
                            "start": 592,
                            "end": 593,
                            "name": "n",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
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
                                    "callee": {
                                      "type": "Super",
                                      "start": 641,
                                      "end": 646
                                    },
                                    "arguments": [],
                                    "optional": false,
                                    "typeArguments": null
                                  },
                                  "directive": null
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
                                      "id": {
                                        "type": "Identifier",
                                        "start": 674,
                                        "end": 676,
                                        "name": "d1",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 679,
                                        "end": 685,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 679,
                                          "end": 683
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 684,
                                          "end": 685,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
                                      },
                                      "definite": false
                                    }
                                  ],
                                  "kind": "let",
                                  "declare": false
                                }
                              ],
                              "test": {
                                "type": "Literal",
                                "start": 618,
                                "end": 619,
                                "value": 1,
                                "raw": "1"
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
                                      "id": {
                                        "type": "Identifier",
                                        "start": 735,
                                        "end": 737,
                                        "name": "d2",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 740,
                                        "end": 746,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 740,
                                          "end": 744
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 745,
                                          "end": 746,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
                                      },
                                      "definite": false
                                    }
                                  ],
                                  "kind": "let",
                                  "declare": false
                                }
                              ],
                              "test": {
                                "type": "Literal",
                                "start": 708,
                                "end": 709,
                                "value": 2,
                                "raw": "2"
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
                                    "callee": {
                                      "type": "Super",
                                      "start": 803,
                                      "end": 808
                                    },
                                    "arguments": [],
                                    "optional": false,
                                    "typeArguments": null
                                  },
                                  "directive": null
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
                                      "id": {
                                        "type": "Identifier",
                                        "start": 836,
                                        "end": 838,
                                        "name": "d3",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 841,
                                        "end": 847,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 841,
                                          "end": 845
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 846,
                                          "end": 847,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
                                      },
                                      "definite": false
                                    }
                                  ],
                                  "kind": "let",
                                  "declare": false
                                }
                              ],
                              "test": null
                            }
                          ]
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
                              "id": {
                                "type": "Identifier",
                                "start": 879,
                                "end": 881,
                                "name": "d4",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "MemberExpression",
                                "start": 884,
                                "end": 890,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 884,
                                  "end": 888
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 889,
                                  "end": 890,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "definite": false
                            }
                          ],
                          "kind": "let",
                          "declare": false
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "IfStatement",
                    "start": 910,
                    "end": 1107,
                    "test": {
                      "type": "UnaryExpression",
                      "start": 914,
                      "end": 920,
                      "operator": "!",
                      "prefix": true,
                      "argument": {
                        "type": "UnaryExpression",
                        "start": 915,
                        "end": 920,
                        "operator": "!",
                        "prefix": true,
                        "argument": {
                          "type": "Literal",
                          "start": 916,
                          "end": 920,
                          "value": true,
                          "raw": "true"
                        }
                      }
                    },
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
                              "id": {
                                "type": "Identifier",
                                "start": 940,
                                "end": 942,
                                "name": "e1",
                                "typeAnnotation": null,
                                "decorators": [],
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
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 947,
                                      "end": 948,
                                      "name": "w",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "value": {
                                      "type": "ConditionalExpression",
                                      "start": 950,
                                      "end": 970,
                                      "test": {
                                        "type": "UnaryExpression",
                                        "start": 950,
                                        "end": 956,
                                        "operator": "!",
                                        "prefix": true,
                                        "argument": {
                                          "type": "UnaryExpression",
                                          "start": 951,
                                          "end": 956,
                                          "operator": "!",
                                          "prefix": true,
                                          "argument": {
                                            "type": "Literal",
                                            "start": 952,
                                            "end": 956,
                                            "value": true,
                                            "raw": "true"
                                          }
                                        }
                                      },
                                      "consequent": {
                                        "type": "CallExpression",
                                        "start": 959,
                                        "end": 966,
                                        "callee": {
                                          "type": "Super",
                                          "start": 959,
                                          "end": 964
                                        },
                                        "arguments": [],
                                        "optional": false,
                                        "typeArguments": null
                                      },
                                      "alternate": {
                                        "type": "Literal",
                                        "start": 969,
                                        "end": 970,
                                        "value": 0,
                                        "raw": "0"
                                      }
                                    },
                                    "kind": "init",
                                    "optional": false
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "kind": "let",
                          "declare": false
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
                              "id": {
                                "type": "Identifier",
                                "start": 990,
                                "end": 992,
                                "name": "e2",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "MemberExpression",
                                "start": 995,
                                "end": 1001,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 995,
                                  "end": 999
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1000,
                                  "end": 1001,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "definite": false
                            }
                          ],
                          "kind": "let",
                          "declare": false
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
                              "id": {
                                "type": "Identifier",
                                "start": 1029,
                                "end": 1031,
                                "name": "e3",
                                "typeAnnotation": null,
                                "decorators": [],
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
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 1036,
                                      "end": 1037,
                                      "name": "w",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "value": {
                                      "type": "ConditionalExpression",
                                      "start": 1039,
                                      "end": 1065,
                                      "test": {
                                        "type": "UnaryExpression",
                                        "start": 1039,
                                        "end": 1045,
                                        "operator": "!",
                                        "prefix": true,
                                        "argument": {
                                          "type": "UnaryExpression",
                                          "start": 1040,
                                          "end": 1045,
                                          "operator": "!",
                                          "prefix": true,
                                          "argument": {
                                            "type": "Literal",
                                            "start": 1041,
                                            "end": 1045,
                                            "value": true,
                                            "raw": "true"
                                          }
                                        }
                                      },
                                      "consequent": {
                                        "type": "CallExpression",
                                        "start": 1048,
                                        "end": 1055,
                                        "callee": {
                                          "type": "Super",
                                          "start": 1048,
                                          "end": 1053
                                        },
                                        "arguments": [],
                                        "optional": false,
                                        "typeArguments": null
                                      },
                                      "alternate": {
                                        "type": "CallExpression",
                                        "start": 1058,
                                        "end": 1065,
                                        "callee": {
                                          "type": "Super",
                                          "start": 1058,
                                          "end": 1063
                                        },
                                        "arguments": [],
                                        "optional": false,
                                        "typeArguments": null
                                      }
                                    },
                                    "kind": "init",
                                    "optional": false
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
                          "kind": "let",
                          "declare": false
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
                              "id": {
                                "type": "Identifier",
                                "start": 1085,
                                "end": 1087,
                                "name": "e4",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "MemberExpression",
                                "start": 1090,
                                "end": 1096,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1090,
                                  "end": 1094
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1095,
                                  "end": 1096,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "definite": false
                            }
                          ],
                          "kind": "let",
                          "declare": false
                        }
                      ]
                    },
                    "alternate": null
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
                        "id": {
                          "type": "Identifier",
                          "start": 1120,
                          "end": 1122,
                          "name": "f1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 1125,
                          "end": 1129
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
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
                        "id": {
                          "type": "Identifier",
                          "start": 1153,
                          "end": 1155,
                          "name": "f2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 1158,
                          "end": 1164,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1158,
                            "end": 1162
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1163,
                            "end": 1164,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
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
                        "id": {
                          "type": "Identifier",
                          "start": 1188,
                          "end": 1190,
                          "name": "f3",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 1193,
                          "end": 1200,
                          "object": {
                            "type": "Super",
                            "start": 1193,
                            "end": 1198
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1199,
                            "end": 1200,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1243,
      "end": 1302,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 1250,
        "end": 1302,
        "id": {
          "type": "Identifier",
          "start": 1256,
          "end": 1259,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 1260,
          "end": 1302,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 1266,
              "end": 1300,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1266,
                "end": 1277,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 1277,
                "end": 1300,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1278,
                    "end": 1291,
                    "name": "value",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1283,
                      "end": 1291,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1285,
                        "end": 1291
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 1293,
                  "end": 1300,
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1304,
      "end": 1586,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 1311,
        "end": 1586,
        "id": {
          "type": "Identifier",
          "start": 1317,
          "end": 1334,
          "name": "BarCorrectlyFails",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "Identifier",
          "start": 1343,
          "end": 1346,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 1347,
          "end": 1586,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 1353,
              "end": 1552,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1353,
                "end": 1364,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 1364,
                "end": 1552,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1365,
                    "end": 1383,
                    "name": "something",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1374,
                      "end": 1383,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1376,
                        "end": 1383
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 1385,
                  "end": 1552,
                  "body": [
                    {
                      "type": "IfStatement",
                      "start": 1395,
                      "end": 1546,
                      "test": {
                        "type": "UnaryExpression",
                        "start": 1399,
                        "end": 1409,
                        "operator": "!",
                        "prefix": true,
                        "argument": {
                          "type": "Identifier",
                          "start": 1400,
                          "end": 1409,
                          "name": "something",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
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
                                "id": {
                                  "type": "Identifier",
                                  "start": 1431,
                                  "end": 1436,
                                  "name": "value",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "start": 1439,
                                  "end": 1449,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 1439,
                                    "end": 1447,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 1439,
                                      "end": 1443
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1444,
                                      "end": 1447,
                                      "name": "bar",
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
                            "kind": "const",
                            "declare": false
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 1473,
                            "end": 1486,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1473,
                              "end": 1485,
                              "callee": {
                                "type": "Super",
                                "start": 1473,
                                "end": 1478
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 1479,
                                  "end": 1484,
                                  "name": "value",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "directive": null
                          }
                        ]
                      },
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
                              "callee": {
                                "type": "Super",
                                "start": 1524,
                                "end": 1529
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "start": 1530,
                                  "end": 1534,
                                  "value": 1337,
                                  "raw": "1337"
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "directive": null
                          }
                        ]
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
              "start": 1557,
              "end": 1584,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1557,
                "end": 1560,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 1560,
                "end": 1584,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "value": 4,
                        "raw": "4"
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1588,
      "end": 1871,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 1595,
        "end": 1871,
        "id": {
          "type": "Identifier",
          "start": 1601,
          "end": 1620,
          "name": "BarIncorrectlyWorks",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "Identifier",
          "start": 1629,
          "end": 1632,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 1633,
          "end": 1871,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 1639,
              "end": 1837,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1639,
                "end": 1650,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 1650,
                "end": 1837,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1651,
                    "end": 1669,
                    "name": "something",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1660,
                      "end": 1669,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1662,
                        "end": 1669
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 1671,
                  "end": 1837,
                  "body": [
                    {
                      "type": "IfStatement",
                      "start": 1681,
                      "end": 1831,
                      "test": {
                        "type": "Identifier",
                        "start": 1685,
                        "end": 1694,
                        "name": "something",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                              "callee": {
                                "type": "Super",
                                "start": 1710,
                                "end": 1715
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "start": 1716,
                                  "end": 1720,
                                  "value": 1337,
                                  "raw": "1337"
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "directive": null
                          }
                        ]
                      },
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
                                "id": {
                                  "type": "Identifier",
                                  "start": 1766,
                                  "end": 1771,
                                  "name": "value",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "start": 1774,
                                  "end": 1784,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 1774,
                                    "end": 1782,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 1774,
                                      "end": 1778
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1779,
                                      "end": 1782,
                                      "name": "bar",
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
                            "kind": "const",
                            "declare": false
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 1808,
                            "end": 1821,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1808,
                              "end": 1820,
                              "callee": {
                                "type": "Super",
                                "start": 1808,
                                "end": 1813
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 1814,
                                  "end": 1819,
                                  "name": "value",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "directive": null
                          }
                        ]
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
              "start": 1842,
              "end": 1869,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1842,
                "end": 1845,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 1845,
                "end": 1869,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "value": 4,
                        "raw": "4"
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
