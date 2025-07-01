__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 13
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 19,
                "end": 22
              },
              "start": 19,
              "end": 22
            },
            "start": 17,
            "end": 22
          },
          "start": 14,
          "end": 22
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 25,
          "end": 31
        },
        "start": 23,
        "end": 31
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 48
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 65,
                  "end": 68
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 89,
                      "end": 90
                    },
                    "start": 82,
                    "end": 91
                  }
                ],
                "start": 60,
                "end": 91
              }
            ],
            "start": 38,
            "end": 97
          }
        ],
        "start": 32,
        "end": 99
      },
      "expression": false,
      "start": 0,
      "end": 99
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 110,
        "end": 114
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 120,
                "end": 123
              },
              "start": 120,
              "end": 123
            },
            "start": 118,
            "end": 123
          },
          "start": 115,
          "end": 123
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 126,
          "end": 132
        },
        "start": 124,
        "end": 132
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 149
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 166,
                  "end": 169
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 190,
                      "end": 191
                    },
                    "start": 183,
                    "end": 192
                  }
                ],
                "start": 161,
                "end": 192
              }
            ],
            "start": 139,
            "end": 198
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
                  "name": "unusedVariable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 208,
                  "end": 222
                },
                "init": null,
                "definite": false,
                "start": 208,
                "end": 222
              }
            ],
            "declare": false,
            "start": 204,
            "end": 223
          }
        ],
        "start": 133,
        "end": 225
      },
      "expression": false,
      "start": 101,
      "end": 225
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 236,
        "end": 240
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 246,
                "end": 249
              },
              "start": 246,
              "end": 249
            },
            "start": 244,
            "end": 249
          },
          "start": 241,
          "end": 249
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 252,
          "end": 258
        },
        "start": 250,
        "end": 258
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 272,
              "end": 275
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 292,
                  "end": 295
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 316,
                      "end": 317
                    },
                    "start": 309,
                    "end": 318
                  }
                ],
                "start": 287,
                "end": 318
              }
            ],
            "start": 265,
            "end": 324
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "neverCalled",
              "optional": false,
              "typeAnnotation": null,
              "start": 339,
              "end": 350
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 353,
              "end": 355
            },
            "expression": false,
            "start": 330,
            "end": 355
          }
        ],
        "start": 259,
        "end": 357
      },
      "expression": false,
      "start": 227,
      "end": 357
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 368,
        "end": 372
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 378,
                "end": 381
              },
              "start": 378,
              "end": 381
            },
            "start": 376,
            "end": 381
          },
          "start": 373,
          "end": 381
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 384,
          "end": 390
        },
        "start": 382,
        "end": 390
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 404,
              "end": 407
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 424,
                  "end": 427
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 448,
                      "end": 449
                    },
                    "start": 441,
                    "end": 450
                  }
                ],
                "start": 419,
                "end": 450
              }
            ],
            "start": 397,
            "end": 456
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo3",
                "optional": false,
                "typeAnnotation": null,
                "start": 462,
                "end": 466
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 467,
                  "end": 470
                }
              ],
              "optional": false,
              "start": 462,
              "end": 471
            },
            "directive": null,
            "start": 462,
            "end": 472
          }
        ],
        "start": 391,
        "end": 474
      },
      "expression": false,
      "start": 359,
      "end": 474
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 485,
        "end": 489
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 495,
                    "end": 498
                  },
                  "start": 495,
                  "end": 498
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 501,
                    "end": 504
                  },
                  "start": 501,
                  "end": 504
                }
              ],
              "start": 495,
              "end": 504
            },
            "start": 493,
            "end": 504
          },
          "start": 490,
          "end": 504
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 507,
          "end": 513
        },
        "start": 505,
        "end": 513
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 527,
              "end": 530
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 547,
                  "end": 550
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 571,
                      "end": 572
                    },
                    "start": 564,
                    "end": 573
                  }
                ],
                "start": 542,
                "end": 573
              }
            ],
            "start": 520,
            "end": 579
          }
        ],
        "start": 514,
        "end": 581
      },
      "expression": false,
      "start": 476,
      "end": 581
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 592,
        "end": 596
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 602,
                "end": 605
              },
              "start": 602,
              "end": 605
            },
            "start": 600,
            "end": 605
          },
          "start": 597,
          "end": 605
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 610,
              "end": 617
            },
            "start": 608,
            "end": 617
          },
          "start": 607,
          "end": 617
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 622,
              "end": 629
            },
            "start": 620,
            "end": 629
          },
          "start": 619,
          "end": 629
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 632,
          "end": 638
        },
        "start": 630,
        "end": 638
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 649,
              "end": 650
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "SwitchStatement",
                  "discriminant": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 670,
                    "end": 673
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 694,
                        "end": 697
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 706,
                            "end": 707
                          },
                          "start": 699,
                          "end": 708
                        }
                      ],
                      "start": 689,
                      "end": 708
                    }
                  ],
                  "start": 662,
                  "end": 718
                }
              ],
              "start": 652,
              "end": 724
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "SwitchStatement",
                  "discriminant": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 752,
                    "end": 753
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 774,
                        "end": 778
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "UnaryExpression",
                            "operator": "-",
                            "argument": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 788,
                              "end": 789
                            },
                            "prefix": true,
                            "start": 787,
                            "end": 789
                          },
                          "start": 780,
                          "end": 790
                        }
                      ],
                      "start": 769,
                      "end": 790
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 808,
                        "end": 813
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 822,
                            "end": 823
                          },
                          "start": 815,
                          "end": 824
                        }
                      ],
                      "start": 803,
                      "end": 824
                    }
                  ],
                  "start": 744,
                  "end": 834
                }
              ],
              "start": 734,
              "end": 840
            },
            "start": 645,
            "end": 840
          }
        ],
        "start": 639,
        "end": 842
      },
      "expression": false,
      "start": 583,
      "end": 842
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 842
}
```
