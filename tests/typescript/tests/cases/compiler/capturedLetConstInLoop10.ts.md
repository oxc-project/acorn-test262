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
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 17
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ForOfStatement",
                    "await": false,
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "let",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 39,
                            "end": 40
                          },
                          "init": null,
                          "definite": false,
                          "start": 39,
                          "end": 40
                        }
                      ],
                      "declare": false,
                      "start": 35,
                      "end": 40
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 45,
                          "end": 46
                        }
                      ],
                      "start": 44,
                      "end": 47
                    },
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
                                "name": "f",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 67,
                                "end": 68
                              },
                              "init": {
                                "type": "FunctionExpression",
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 91,
                                        "end": 92
                                      },
                                      "start": 84,
                                      "end": 93
                                    }
                                  ],
                                  "start": 82,
                                  "end": 95
                                },
                                "expression": false,
                                "start": 71,
                                "end": 95
                              },
                              "definite": false,
                              "start": 67,
                              "end": 95
                            }
                          ],
                          "declare": false,
                          "start": 63,
                          "end": 96
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 109,
                                "end": 113
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 114,
                                "end": 117
                              },
                              "optional": false,
                              "computed": false,
                              "start": 109,
                              "end": 117
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 118,
                                  "end": 119
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 118,
                                "end": 121
                              }
                            ],
                            "optional": false,
                            "start": 109,
                            "end": 122
                          },
                          "directive": null,
                          "start": 109,
                          "end": 123
                        }
                      ],
                      "start": 49,
                      "end": 133
                    },
                    "start": 30,
                    "end": 133
                  }
                ],
                "start": 20,
                "end": 139
              },
              "expression": false,
              "start": 17,
              "end": 139
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 14,
            "end": 139
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
              "start": 144,
              "end": 147
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 151,
                      "end": 157
                    },
                    "start": 149,
                    "end": 157
                  },
                  "start": 148,
                  "end": 157
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 159,
                "end": 166
              },
              "expression": false,
              "start": 147,
              "end": 166
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 144,
            "end": 166
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 172,
              "end": 175
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ForOfStatement",
                    "await": false,
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "let",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 197,
                            "end": 198
                          },
                          "init": null,
                          "definite": false,
                          "start": 197,
                          "end": 198
                        }
                      ],
                      "declare": false,
                      "start": 193,
                      "end": 198
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 203,
                          "end": 204
                        }
                      ],
                      "start": 202,
                      "end": 205
                    },
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
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 225,
                                "end": 226
                              },
                              "init": {
                                "type": "FunctionExpression",
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 250,
                                        "end": 251
                                      },
                                      "start": 243,
                                      "end": 252
                                    }
                                  ],
                                  "start": 240,
                                  "end": 254
                                },
                                "expression": false,
                                "start": 229,
                                "end": 254
                              },
                              "definite": false,
                              "start": 225,
                              "end": 254
                            }
                          ],
                          "declare": false,
                          "start": 221,
                          "end": 255
                        },
                        {
                          "type": "ForOfStatement",
                          "await": false,
                          "left": {
                            "type": "VariableDeclaration",
                            "kind": "let",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 277,
                                  "end": 278
                                },
                                "init": null,
                                "definite": false,
                                "start": 277,
                                "end": 278
                              }
                            ],
                            "declare": false,
                            "start": 273,
                            "end": 278
                          },
                          "right": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 283,
                                "end": 284
                              }
                            ],
                            "start": 282,
                            "end": 285
                          },
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
                                      "name": "b",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 309,
                                      "end": 310
                                    },
                                    "init": {
                                      "type": "FunctionExpression",
                                      "id": null,
                                      "generator": false,
                                      "async": false,
                                      "declare": false,
                                      "typeParameters": null,
                                      "params": [],
                                      "returnType": null,
                                      "body": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "ReturnStatement",
                                            "argument": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "y",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 333,
                                              "end": 334
                                            },
                                            "start": 326,
                                            "end": 335
                                          }
                                        ],
                                        "start": 324,
                                        "end": 337
                                      },
                                      "expression": false,
                                      "start": 313,
                                      "end": 337
                                    },
                                    "definite": false,
                                    "start": 309,
                                    "end": 337
                                  }
                                ],
                                "declare": false,
                                "start": 305,
                                "end": 338
                              },
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 355,
                                      "end": 359
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "bar",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 360,
                                      "end": 363
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 355,
                                    "end": 363
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "b",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 364,
                                        "end": 365
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "optional": false,
                                      "start": 364,
                                      "end": 367
                                    }
                                  ],
                                  "optional": false,
                                  "start": 355,
                                  "end": 368
                                },
                                "directive": null,
                                "start": 355,
                                "end": 369
                              }
                            ],
                            "start": 287,
                            "end": 383
                          },
                          "start": 268,
                          "end": 383
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 396,
                                "end": 400
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 401,
                                "end": 404
                              },
                              "optional": false,
                              "computed": false,
                              "start": 396,
                              "end": 404
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 405,
                                  "end": 406
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 405,
                                "end": 408
                              }
                            ],
                            "optional": false,
                            "start": 396,
                            "end": 409
                          },
                          "directive": null,
                          "start": 396,
                          "end": 410
                        }
                      ],
                      "start": 207,
                      "end": 420
                    },
                    "start": 188,
                    "end": 420
                  }
                ],
                "start": 178,
                "end": 426
              },
              "expression": false,
              "start": 175,
              "end": 426
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 172,
            "end": 426
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz2",
              "optional": false,
              "typeAnnotation": null,
              "start": 431,
              "end": 435
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ForOfStatement",
                    "await": false,
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "let",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 457,
                            "end": 458
                          },
                          "init": null,
                          "definite": false,
                          "start": 457,
                          "end": 458
                        }
                      ],
                      "declare": false,
                      "start": 453,
                      "end": 458
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 463,
                          "end": 464
                        }
                      ],
                      "start": 462,
                      "end": 465
                    },
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
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 485,
                                "end": 486
                              },
                              "init": {
                                "type": "FunctionExpression",
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 510,
                                        "end": 511
                                      },
                                      "start": 503,
                                      "end": 512
                                    }
                                  ],
                                  "start": 500,
                                  "end": 514
                                },
                                "expression": false,
                                "start": 489,
                                "end": 514
                              },
                              "definite": false,
                              "start": 485,
                              "end": 514
                            }
                          ],
                          "declare": false,
                          "start": 481,
                          "end": 515
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 528,
                                "end": 532
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 533,
                                "end": 536
                              },
                              "optional": false,
                              "computed": false,
                              "start": 528,
                              "end": 536
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 537,
                                  "end": 538
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 537,
                                "end": 540
                              }
                            ],
                            "optional": false,
                            "start": 528,
                            "end": 541
                          },
                          "directive": null,
                          "start": 528,
                          "end": 542
                        },
                        {
                          "type": "ForOfStatement",
                          "await": false,
                          "left": {
                            "type": "VariableDeclaration",
                            "kind": "let",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 564,
                                  "end": 565
                                },
                                "init": null,
                                "definite": false,
                                "start": 564,
                                "end": 565
                              }
                            ],
                            "declare": false,
                            "start": 560,
                            "end": 565
                          },
                          "right": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 570,
                                "end": 571
                              }
                            ],
                            "start": 569,
                            "end": 572
                          },
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
                                      "name": "b",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 596,
                                      "end": 597
                                    },
                                    "init": {
                                      "type": "FunctionExpression",
                                      "id": null,
                                      "generator": false,
                                      "async": false,
                                      "declare": false,
                                      "typeParameters": null,
                                      "params": [],
                                      "returnType": null,
                                      "body": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "ReturnStatement",
                                            "argument": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "y",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 620,
                                              "end": 621
                                            },
                                            "start": 613,
                                            "end": 622
                                          }
                                        ],
                                        "start": 611,
                                        "end": 624
                                      },
                                      "expression": false,
                                      "start": 600,
                                      "end": 624
                                    },
                                    "definite": false,
                                    "start": 596,
                                    "end": 624
                                  }
                                ],
                                "declare": false,
                                "start": 592,
                                "end": 625
                              },
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 642,
                                      "end": 646
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "bar",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 647,
                                      "end": 650
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 642,
                                    "end": 650
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "b",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 651,
                                        "end": 652
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "optional": false,
                                      "start": 651,
                                      "end": 654
                                    }
                                  ],
                                  "optional": false,
                                  "start": 642,
                                  "end": 655
                                },
                                "directive": null,
                                "start": 642,
                                "end": 656
                              }
                            ],
                            "start": 574,
                            "end": 670
                          },
                          "start": 555,
                          "end": 670
                        }
                      ],
                      "start": 467,
                      "end": 680
                    },
                    "start": 448,
                    "end": 680
                  }
                ],
                "start": 438,
                "end": 686
              },
              "expression": false,
              "start": 435,
              "end": 686
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 431,
            "end": 686
          }
        ],
        "start": 8,
        "end": 688
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 688
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 696,
        "end": 697
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 704,
              "end": 707
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 724,
                          "end": 725
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ForOfStatement",
                                "await": false,
                                "left": {
                                  "type": "VariableDeclaration",
                                  "kind": "let",
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "id": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 773,
                                        "end": 774
                                      },
                                      "init": null,
                                      "definite": false,
                                      "start": 773,
                                      "end": 774
                                    }
                                  ],
                                  "declare": false,
                                  "start": 769,
                                  "end": 774
                                },
                                "right": {
                                  "type": "ArrayExpression",
                                  "elements": [
                                    {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0",
                                      "start": 779,
                                      "end": 780
                                    }
                                  ],
                                  "start": 778,
                                  "end": 781
                                },
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
                                            "name": "f",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 809,
                                            "end": 810
                                          },
                                          "init": {
                                            "type": "ArrowFunctionExpression",
                                            "expression": true,
                                            "async": false,
                                            "typeParameters": null,
                                            "params": [],
                                            "returnType": null,
                                            "body": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "x",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 819,
                                              "end": 820
                                            },
                                            "id": null,
                                            "generator": false,
                                            "start": 813,
                                            "end": 820
                                          },
                                          "definite": false,
                                          "start": 809,
                                          "end": 820
                                        }
                                      ],
                                      "declare": false,
                                      "start": 805,
                                      "end": 821
                                    },
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 842,
                                            "end": 846
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "bar",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 847,
                                            "end": 850
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 842,
                                          "end": 850
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "f",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 851,
                                              "end": 852
                                            },
                                            "typeArguments": null,
                                            "arguments": [],
                                            "optional": false,
                                            "start": 851,
                                            "end": 854
                                          }
                                        ],
                                        "optional": false,
                                        "start": 842,
                                        "end": 855
                                      },
                                      "directive": null,
                                      "start": 842,
                                      "end": 856
                                    }
                                  ],
                                  "start": 783,
                                  "end": 874
                                },
                                "start": 764,
                                "end": 874
                              }
                            ],
                            "start": 746,
                            "end": 888
                          },
                          "id": null,
                          "generator": false,
                          "start": 740,
                          "end": 888
                        },
                        "definite": false,
                        "start": 724,
                        "end": 888
                      }
                    ],
                    "declare": false,
                    "start": 720,
                    "end": 888
                  }
                ],
                "start": 710,
                "end": 894
              },
              "expression": false,
              "start": 707,
              "end": 894
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 704,
            "end": 894
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
              "start": 899,
              "end": 902
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 906,
                      "end": 912
                    },
                    "start": 904,
                    "end": 912
                  },
                  "start": 903,
                  "end": 912
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 914,
                "end": 921
              },
              "expression": false,
              "start": 902,
              "end": 921
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 899,
            "end": 921
          }
        ],
        "start": 698,
        "end": 923
      },
      "abstract": false,
      "declare": false,
      "start": 690,
      "end": 923
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 923
}
```
