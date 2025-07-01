__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 15
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 18,
              "end": 19
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 20
          }
        ],
        "start": 8,
        "end": 22
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 30,
        "end": 32
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 41,
        "end": 42
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 60
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 64,
                      "end": 70
                    },
                    "start": 62,
                    "end": 70
                  },
                  "start": 61,
                  "end": 70
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 86,
                          "end": 88
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 91,
                          "end": 95
                        },
                        "definite": false,
                        "start": 86,
                        "end": 95
                      }
                    ],
                    "declare": false,
                    "start": 82,
                    "end": 96
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 119,
                          "end": 121
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 124,
                            "end": 128
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 129,
                            "end": 130
                          },
                          "optional": false,
                          "computed": false,
                          "start": 124,
                          "end": 130
                        },
                        "definite": false,
                        "start": 119,
                        "end": 130
                      }
                    ],
                    "declare": false,
                    "start": 115,
                    "end": 131
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 154,
                          "end": 156
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 159,
                            "end": 164
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 165,
                            "end": 166
                          },
                          "optional": false,
                          "computed": false,
                          "start": 159,
                          "end": 166
                        },
                        "definite": false,
                        "start": 154,
                        "end": 166
                      }
                    ],
                    "declare": false,
                    "start": 150,
                    "end": 167
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a4",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 190,
                          "end": 192
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "ThisExpression",
                            "start": 201,
                            "end": 205
                          },
                          "id": null,
                          "generator": false,
                          "start": 195,
                          "end": 205
                        },
                        "definite": false,
                        "start": 190,
                        "end": 205
                      }
                    ],
                    "declare": false,
                    "start": 186,
                    "end": 206
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a5",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 219,
                          "end": 221
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 230,
                              "end": 234
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 235,
                              "end": 236
                            },
                            "optional": false,
                            "computed": false,
                            "start": 230,
                            "end": 236
                          },
                          "id": null,
                          "generator": false,
                          "start": 224,
                          "end": 236
                        },
                        "definite": false,
                        "start": 219,
                        "end": 236
                      }
                    ],
                    "declare": false,
                    "start": 215,
                    "end": 237
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a6",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 250,
                          "end": 252
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 261,
                              "end": 266
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 267,
                              "end": 268
                            },
                            "optional": false,
                            "computed": false,
                            "start": 261,
                            "end": 268
                          },
                          "id": null,
                          "generator": false,
                          "start": 255,
                          "end": 268
                        },
                        "definite": false,
                        "start": 250,
                        "end": 268
                      }
                    ],
                    "declare": false,
                    "start": 246,
                    "end": 269
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "UnaryExpression",
                        "operator": "!",
                        "argument": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 284,
                          "end": 288
                        },
                        "prefix": true,
                        "start": 283,
                        "end": 288
                      },
                      "prefix": true,
                      "start": 282,
                      "end": 288
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Super",
                              "start": 304,
                              "end": 309
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 304,
                            "end": 311
                          },
                          "directive": null,
                          "start": 304,
                          "end": 312
                        },
                        {
                          "type": "VariableDeclaration",
                          "kind": "let",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 329,
                                "end": 331
                              },
                              "init": {
                                "type": "ThisExpression",
                                "start": 334,
                                "end": 338
                              },
                              "definite": false,
                              "start": 329,
                              "end": 338
                            }
                          ],
                          "declare": false,
                          "start": 325,
                          "end": 339
                        },
                        {
                          "type": "VariableDeclaration",
                          "kind": "let",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 356,
                                "end": 358
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 361,
                                  "end": 365
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 366,
                                  "end": 367
                                },
                                "optional": false,
                                "computed": false,
                                "start": 361,
                                "end": 367
                              },
                              "definite": false,
                              "start": 356,
                              "end": 367
                            }
                          ],
                          "declare": false,
                          "start": 352,
                          "end": 368
                        },
                        {
                          "type": "VariableDeclaration",
                          "kind": "let",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 385,
                                "end": 387
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Super",
                                  "start": 390,
                                  "end": 395
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 396,
                                  "end": 397
                                },
                                "optional": false,
                                "computed": false,
                                "start": 390,
                                "end": 397
                              },
                              "definite": false,
                              "start": 385,
                              "end": 397
                            }
                          ],
                          "declare": false,
                          "start": 381,
                          "end": 398
                        }
                      ],
                      "start": 290,
                      "end": 408
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "kind": "let",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 440,
                                "end": 442
                              },
                              "init": {
                                "type": "ThisExpression",
                                "start": 445,
                                "end": 449
                              },
                              "definite": false,
                              "start": 440,
                              "end": 449
                            }
                          ],
                          "declare": false,
                          "start": 436,
                          "end": 450
                        },
                        {
                          "type": "VariableDeclaration",
                          "kind": "let",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 477,
                                "end": 479
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 482,
                                  "end": 486
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 487,
                                  "end": 488
                                },
                                "optional": false,
                                "computed": false,
                                "start": 482,
                                "end": 488
                              },
                              "definite": false,
                              "start": 477,
                              "end": 488
                            }
                          ],
                          "declare": false,
                          "start": 473,
                          "end": 489
                        },
                        {
                          "type": "VariableDeclaration",
                          "kind": "let",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 516,
                                "end": 518
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Super",
                                  "start": 521,
                                  "end": 526
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 527,
                                  "end": 528
                                },
                                "optional": false,
                                "computed": false,
                                "start": 521,
                                "end": 528
                              },
                              "definite": false,
                              "start": 516,
                              "end": 528
                            }
                          ],
                          "declare": false,
                          "start": 512,
                          "end": 529
                        }
                      ],
                      "start": 422,
                      "end": 549
                    },
                    "start": 278,
                    "end": 549
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "UnaryExpression",
                        "operator": "!",
                        "argument": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 564,
                          "end": 568
                        },
                        "prefix": true,
                        "start": 563,
                        "end": 568
                      },
                      "prefix": true,
                      "start": 562,
                      "end": 568
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "SwitchStatement",
                          "discriminant": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 592,
                            "end": 593
                          },
                          "cases": [
                            {
                              "type": "SwitchCase",
                              "test": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 618,
                                "end": 619
                              },
                              "consequent": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Super",
                                      "start": 641,
                                      "end": 646
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 641,
                                    "end": 648
                                  },
                                  "directive": null,
                                  "start": 641,
                                  "end": 649
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "kind": "let",
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "id": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "d1",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 674,
                                        "end": 676
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 679,
                                          "end": 683
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 684,
                                          "end": 685
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 679,
                                        "end": 685
                                      },
                                      "definite": false,
                                      "start": 674,
                                      "end": 685
                                    }
                                  ],
                                  "declare": false,
                                  "start": 670,
                                  "end": 686
                                }
                              ],
                              "start": 613,
                              "end": 686
                            },
                            {
                              "type": "SwitchCase",
                              "test": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 708,
                                "end": 709
                              },
                              "consequent": [
                                {
                                  "type": "VariableDeclaration",
                                  "kind": "let",
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "id": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "d2",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 735,
                                        "end": 737
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 740,
                                          "end": 744
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 745,
                                          "end": 746
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 740,
                                        "end": 746
                                      },
                                      "definite": false,
                                      "start": 735,
                                      "end": 746
                                    }
                                  ],
                                  "declare": false,
                                  "start": 731,
                                  "end": 747
                                }
                              ],
                              "start": 703,
                              "end": 747
                            },
                            {
                              "type": "SwitchCase",
                              "test": null,
                              "consequent": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Super",
                                      "start": 803,
                                      "end": 808
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 803,
                                    "end": 810
                                  },
                                  "directive": null,
                                  "start": 803,
                                  "end": 811
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "kind": "let",
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "id": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "d3",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 836,
                                        "end": 838
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 841,
                                          "end": 845
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 846,
                                          "end": 847
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 841,
                                        "end": 847
                                      },
                                      "definite": false,
                                      "start": 836,
                                      "end": 847
                                    }
                                  ],
                                  "declare": false,
                                  "start": 832,
                                  "end": 848
                                }
                              ],
                              "start": 774,
                              "end": 848
                            }
                          ],
                          "start": 584,
                          "end": 862
                        },
                        {
                          "type": "VariableDeclaration",
                          "kind": "let",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "d4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 879,
                                "end": 881
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 884,
                                  "end": 888
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 889,
                                  "end": 890
                                },
                                "optional": false,
                                "computed": false,
                                "start": 884,
                                "end": 890
                              },
                              "definite": false,
                              "start": 879,
                              "end": 890
                            }
                          ],
                          "declare": false,
                          "start": 875,
                          "end": 891
                        }
                      ],
                      "start": 570,
                      "end": 901
                    },
                    "alternate": null,
                    "start": 558,
                    "end": 901
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "UnaryExpression",
                        "operator": "!",
                        "argument": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 916,
                          "end": 920
                        },
                        "prefix": true,
                        "start": 915,
                        "end": 920
                      },
                      "prefix": true,
                      "start": 914,
                      "end": 920
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "kind": "let",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "e1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 940,
                                "end": 942
                              },
                              "init": {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "w",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 947,
                                      "end": 948
                                    },
                                    "value": {
                                      "type": "ConditionalExpression",
                                      "test": {
                                        "type": "UnaryExpression",
                                        "operator": "!",
                                        "argument": {
                                          "type": "UnaryExpression",
                                          "operator": "!",
                                          "argument": {
                                            "type": "Literal",
                                            "value": true,
                                            "raw": "true",
                                            "start": 952,
                                            "end": 956
                                          },
                                          "prefix": true,
                                          "start": 951,
                                          "end": 956
                                        },
                                        "prefix": true,
                                        "start": 950,
                                        "end": 956
                                      },
                                      "consequent": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Super",
                                          "start": 959,
                                          "end": 964
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 959,
                                        "end": 966
                                      },
                                      "alternate": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0",
                                        "start": 969,
                                        "end": 970
                                      },
                                      "start": 950,
                                      "end": 970
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 947,
                                    "end": 970
                                  }
                                ],
                                "start": 945,
                                "end": 972
                              },
                              "definite": false,
                              "start": 940,
                              "end": 972
                            }
                          ],
                          "declare": false,
                          "start": 936,
                          "end": 973
                        },
                        {
                          "type": "VariableDeclaration",
                          "kind": "let",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "e2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 990,
                                "end": 992
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 995,
                                  "end": 999
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1000,
                                  "end": 1001
                                },
                                "optional": false,
                                "computed": false,
                                "start": 995,
                                "end": 1001
                              },
                              "definite": false,
                              "start": 990,
                              "end": 1001
                            }
                          ],
                          "declare": false,
                          "start": 986,
                          "end": 1002
                        },
                        {
                          "type": "VariableDeclaration",
                          "kind": "let",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "e3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1029,
                                "end": 1031
                              },
                              "init": {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "w",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1036,
                                      "end": 1037
                                    },
                                    "value": {
                                      "type": "ConditionalExpression",
                                      "test": {
                                        "type": "UnaryExpression",
                                        "operator": "!",
                                        "argument": {
                                          "type": "UnaryExpression",
                                          "operator": "!",
                                          "argument": {
                                            "type": "Literal",
                                            "value": true,
                                            "raw": "true",
                                            "start": 1041,
                                            "end": 1045
                                          },
                                          "prefix": true,
                                          "start": 1040,
                                          "end": 1045
                                        },
                                        "prefix": true,
                                        "start": 1039,
                                        "end": 1045
                                      },
                                      "consequent": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Super",
                                          "start": 1048,
                                          "end": 1053
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 1048,
                                        "end": 1055
                                      },
                                      "alternate": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Super",
                                          "start": 1058,
                                          "end": 1063
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 1058,
                                        "end": 1065
                                      },
                                      "start": 1039,
                                      "end": 1065
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 1036,
                                    "end": 1065
                                  }
                                ],
                                "start": 1034,
                                "end": 1067
                              },
                              "definite": false,
                              "start": 1029,
                              "end": 1067
                            }
                          ],
                          "declare": false,
                          "start": 1025,
                          "end": 1068
                        },
                        {
                          "type": "VariableDeclaration",
                          "kind": "let",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "e4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1085,
                                "end": 1087
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1090,
                                  "end": 1094
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1095,
                                  "end": 1096
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1090,
                                "end": 1096
                              },
                              "definite": false,
                              "start": 1085,
                              "end": 1096
                            }
                          ],
                          "declare": false,
                          "start": 1081,
                          "end": 1097
                        }
                      ],
                      "start": 922,
                      "end": 1107
                    },
                    "alternate": null,
                    "start": 910,
                    "end": 1107
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1120,
                          "end": 1122
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 1125,
                          "end": 1129
                        },
                        "definite": false,
                        "start": 1120,
                        "end": 1129
                      }
                    ],
                    "declare": false,
                    "start": 1116,
                    "end": 1130
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1153,
                          "end": 1155
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1158,
                            "end": 1162
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1163,
                            "end": 1164
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1158,
                          "end": 1164
                        },
                        "definite": false,
                        "start": 1153,
                        "end": 1164
                      }
                    ],
                    "declare": false,
                    "start": 1149,
                    "end": 1165
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1188,
                          "end": 1190
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 1193,
                            "end": 1198
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1199,
                            "end": 1200
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1193,
                          "end": 1200
                        },
                        "definite": false,
                        "start": 1188,
                        "end": 1200
                      }
                    ],
                    "declare": false,
                    "start": 1184,
                    "end": 1201
                  }
                ],
                "start": 72,
                "end": 1217
              },
              "expression": false,
              "start": 60,
              "end": 1217
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 49,
            "end": 1217
          }
        ],
        "start": 43,
        "end": 1219
      },
      "abstract": false,
      "declare": false,
      "start": 24,
      "end": 1219
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 1256,
          "end": 1259
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 1266,
                "end": 1277
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1285,
                        "end": 1291
                      },
                      "start": 1283,
                      "end": 1291
                    },
                    "start": 1278,
                    "end": 1291
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1293,
                  "end": 1300
                },
                "expression": false,
                "start": 1277,
                "end": 1300
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1266,
              "end": 1300
            }
          ],
          "start": 1260,
          "end": 1302
        },
        "abstract": false,
        "declare": false,
        "start": 1250,
        "end": 1302
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1243,
      "end": 1302
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "BarCorrectlyFails",
          "optional": false,
          "typeAnnotation": null,
          "start": 1317,
          "end": 1334
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 1343,
          "end": 1346
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 1353,
                "end": 1364
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "something",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1376,
                        "end": 1383
                      },
                      "start": 1374,
                      "end": 1383
                    },
                    "start": 1365,
                    "end": 1383
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "UnaryExpression",
                        "operator": "!",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "something",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1400,
                          "end": 1409
                        },
                        "prefix": true,
                        "start": 1399,
                        "end": 1409
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "kind": "const",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1431,
                                  "end": 1436
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 1439,
                                      "end": 1443
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "bar",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1444,
                                      "end": 1447
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1439,
                                    "end": 1447
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false,
                                  "start": 1439,
                                  "end": 1449
                                },
                                "definite": false,
                                "start": 1431,
                                "end": 1449
                              }
                            ],
                            "declare": false,
                            "start": 1425,
                            "end": 1450
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Super",
                                "start": 1473,
                                "end": 1478
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1479,
                                  "end": 1484
                                }
                              ],
                              "optional": false,
                              "start": 1473,
                              "end": 1485
                            },
                            "directive": null,
                            "start": 1473,
                            "end": 1486
                          }
                        ],
                        "start": 1411,
                        "end": 1496
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Super",
                                "start": 1524,
                                "end": 1529
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": 1337,
                                  "raw": "1337",
                                  "start": 1530,
                                  "end": 1534
                                }
                              ],
                              "optional": false,
                              "start": 1524,
                              "end": 1535
                            },
                            "directive": null,
                            "start": 1524,
                            "end": 1536
                          }
                        ],
                        "start": 1510,
                        "end": 1546
                      },
                      "start": 1395,
                      "end": 1546
                    }
                  ],
                  "start": 1385,
                  "end": 1552
                },
                "expression": false,
                "start": 1364,
                "end": 1552
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1353,
              "end": 1552
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 1557,
                "end": 1560
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1564,
                    "end": 1570
                  },
                  "start": 1562,
                  "end": 1570
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 1580,
                        "end": 1581
                      },
                      "start": 1573,
                      "end": 1582
                    }
                  ],
                  "start": 1571,
                  "end": 1584
                },
                "expression": false,
                "start": 1560,
                "end": 1584
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1557,
              "end": 1584
            }
          ],
          "start": 1347,
          "end": 1586
        },
        "abstract": false,
        "declare": false,
        "start": 1311,
        "end": 1586
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1304,
      "end": 1586
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "BarIncorrectlyWorks",
          "optional": false,
          "typeAnnotation": null,
          "start": 1601,
          "end": 1620
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 1629,
          "end": 1632
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 1639,
                "end": 1650
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "something",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1662,
                        "end": 1669
                      },
                      "start": 1660,
                      "end": 1669
                    },
                    "start": 1651,
                    "end": 1669
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "something",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1685,
                        "end": 1694
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Super",
                                "start": 1710,
                                "end": 1715
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": 1337,
                                  "raw": "1337",
                                  "start": 1716,
                                  "end": 1720
                                }
                              ],
                              "optional": false,
                              "start": 1710,
                              "end": 1721
                            },
                            "directive": null,
                            "start": 1710,
                            "end": 1722
                          }
                        ],
                        "start": 1696,
                        "end": 1732
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "kind": "const",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1766,
                                  "end": 1771
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 1774,
                                      "end": 1778
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "bar",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1779,
                                      "end": 1782
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1774,
                                    "end": 1782
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false,
                                  "start": 1774,
                                  "end": 1784
                                },
                                "definite": false,
                                "start": 1766,
                                "end": 1784
                              }
                            ],
                            "declare": false,
                            "start": 1760,
                            "end": 1785
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Super",
                                "start": 1808,
                                "end": 1813
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1814,
                                  "end": 1819
                                }
                              ],
                              "optional": false,
                              "start": 1808,
                              "end": 1820
                            },
                            "directive": null,
                            "start": 1808,
                            "end": 1821
                          }
                        ],
                        "start": 1746,
                        "end": 1831
                      },
                      "start": 1681,
                      "end": 1831
                    }
                  ],
                  "start": 1671,
                  "end": 1837
                },
                "expression": false,
                "start": 1650,
                "end": 1837
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1639,
              "end": 1837
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 1842,
                "end": 1845
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1849,
                    "end": 1855
                  },
                  "start": 1847,
                  "end": 1855
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 1865,
                        "end": 1866
                      },
                      "start": 1858,
                      "end": 1867
                    }
                  ],
                  "start": 1856,
                  "end": 1869
                },
                "expression": false,
                "start": 1845,
                "end": 1869
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1842,
              "end": 1869
            }
          ],
          "start": 1633,
          "end": 1871
        },
        "abstract": false,
        "declare": false,
        "start": 1595,
        "end": 1871
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1588,
      "end": 1871
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1871
}
```
