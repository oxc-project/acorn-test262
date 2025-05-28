__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 842,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 99,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 14,
          "end": 22,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 17,
            "end": 22,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 19,
              "end": 22,
              "literal": {
                "type": "Literal",
                "start": 19,
                "end": 22,
                "value": "a",
                "raw": "\"a\""
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 23,
        "end": 31,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 25,
          "end": 31
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 32,
        "end": 99,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 38,
            "end": 97,
            "discriminant": {
              "type": "Identifier",
              "start": 45,
              "end": 48,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 60,
                "end": 91,
                "test": {
                  "type": "Literal",
                  "start": 65,
                  "end": 68,
                  "value": "a",
                  "raw": "\"a\""
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 82,
                    "end": 91,
                    "argument": {
                      "type": "Literal",
                      "start": 89,
                      "end": 90,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 101,
      "end": 225,
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 114,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 115,
          "end": 123,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 118,
            "end": 123,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 120,
              "end": 123,
              "literal": {
                "type": "Literal",
                "start": 120,
                "end": 123,
                "value": "a",
                "raw": "\"a\""
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 124,
        "end": 132,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 126,
          "end": 132
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 133,
        "end": 225,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 139,
            "end": 198,
            "discriminant": {
              "type": "Identifier",
              "start": 146,
              "end": 149,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 161,
                "end": 192,
                "test": {
                  "type": "Literal",
                  "start": 166,
                  "end": 169,
                  "value": "a",
                  "raw": "\"a\""
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 183,
                    "end": 192,
                    "argument": {
                      "type": "Literal",
                      "start": 190,
                      "end": 191,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "VariableDeclaration",
            "start": 204,
            "end": 223,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 208,
                "end": 222,
                "id": {
                  "type": "Identifier",
                  "start": 208,
                  "end": 222,
                  "decorators": [],
                  "name": "unusedVariable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 227,
      "end": 357,
      "id": {
        "type": "Identifier",
        "start": 236,
        "end": 240,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 241,
          "end": 249,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 244,
            "end": 249,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 246,
              "end": 249,
              "literal": {
                "type": "Literal",
                "start": 246,
                "end": 249,
                "value": "a",
                "raw": "\"a\""
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 250,
        "end": 258,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 252,
          "end": 258
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 259,
        "end": 357,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 265,
            "end": 324,
            "discriminant": {
              "type": "Identifier",
              "start": 272,
              "end": 275,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 287,
                "end": 318,
                "test": {
                  "type": "Literal",
                  "start": 292,
                  "end": 295,
                  "value": "a",
                  "raw": "\"a\""
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 309,
                    "end": 318,
                    "argument": {
                      "type": "Literal",
                      "start": 316,
                      "end": 317,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "FunctionDeclaration",
            "start": 330,
            "end": 355,
            "id": {
              "type": "Identifier",
              "start": 339,
              "end": 350,
              "decorators": [],
              "name": "neverCalled",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 353,
              "end": 355,
              "body": []
            },
            "expression": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 359,
      "end": 474,
      "id": {
        "type": "Identifier",
        "start": 368,
        "end": 372,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 373,
          "end": 381,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 376,
            "end": 381,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 378,
              "end": 381,
              "literal": {
                "type": "Literal",
                "start": 378,
                "end": 381,
                "value": "a",
                "raw": "\"a\""
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 382,
        "end": 390,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 384,
          "end": 390
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 391,
        "end": 474,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 397,
            "end": 456,
            "discriminant": {
              "type": "Identifier",
              "start": 404,
              "end": 407,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 419,
                "end": 450,
                "test": {
                  "type": "Literal",
                  "start": 424,
                  "end": 427,
                  "value": "a",
                  "raw": "\"a\""
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 441,
                    "end": 450,
                    "argument": {
                      "type": "Literal",
                      "start": 448,
                      "end": 449,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "ExpressionStatement",
            "start": 462,
            "end": 472,
            "expression": {
              "type": "CallExpression",
              "start": 462,
              "end": 471,
              "callee": {
                "type": "Identifier",
                "start": 462,
                "end": 466,
                "decorators": [],
                "name": "foo3",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 467,
                  "end": 470,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 476,
      "end": 581,
      "id": {
        "type": "Identifier",
        "start": 485,
        "end": 489,
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 490,
          "end": 504,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 493,
            "end": 504,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 495,
              "end": 504,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 495,
                  "end": 498,
                  "literal": {
                    "type": "Literal",
                    "start": 495,
                    "end": 498,
                    "value": "a",
                    "raw": "\"a\""
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 501,
                  "end": 504,
                  "literal": {
                    "type": "Literal",
                    "start": 501,
                    "end": 504,
                    "value": "b",
                    "raw": "\"b\""
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 505,
        "end": 513,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 507,
          "end": 513
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 514,
        "end": 581,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 520,
            "end": 579,
            "discriminant": {
              "type": "Identifier",
              "start": 527,
              "end": 530,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 542,
                "end": 573,
                "test": {
                  "type": "Literal",
                  "start": 547,
                  "end": 550,
                  "value": "a",
                  "raw": "\"a\""
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 564,
                    "end": 573,
                    "argument": {
                      "type": "Literal",
                      "start": 571,
                      "end": 572,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 583,
      "end": 842,
      "id": {
        "type": "Identifier",
        "start": 592,
        "end": 596,
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 597,
          "end": 605,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 600,
            "end": 605,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 602,
              "end": 605,
              "literal": {
                "type": "Literal",
                "start": 602,
                "end": 605,
                "value": "a",
                "raw": "\"a\""
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 607,
          "end": 617,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 608,
            "end": 617,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 610,
              "end": 617
            }
          }
        },
        {
          "type": "Identifier",
          "start": 619,
          "end": 629,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 620,
            "end": 629,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 622,
              "end": 629
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 630,
        "end": 638,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 632,
          "end": 638
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 639,
        "end": 842,
        "body": [
          {
            "type": "IfStatement",
            "start": 645,
            "end": 840,
            "test": {
              "type": "Identifier",
              "start": 649,
              "end": 650,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 652,
              "end": 724,
              "body": [
                {
                  "type": "SwitchStatement",
                  "start": 662,
                  "end": 718,
                  "discriminant": {
                    "type": "Identifier",
                    "start": 670,
                    "end": 673,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "start": 689,
                      "end": 708,
                      "test": {
                        "type": "Literal",
                        "start": 694,
                        "end": 697,
                        "value": "a",
                        "raw": "\"a\""
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "start": 699,
                          "end": 708,
                          "argument": {
                            "type": "Literal",
                            "start": 706,
                            "end": 707,
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 734,
              "end": 840,
              "body": [
                {
                  "type": "SwitchStatement",
                  "start": 744,
                  "end": 834,
                  "discriminant": {
                    "type": "Identifier",
                    "start": 752,
                    "end": 753,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "start": 769,
                      "end": 790,
                      "test": {
                        "type": "Literal",
                        "start": 774,
                        "end": 778,
                        "value": true,
                        "raw": "true"
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "start": 780,
                          "end": 790,
                          "argument": {
                            "type": "UnaryExpression",
                            "start": 787,
                            "end": 789,
                            "operator": "-",
                            "argument": {
                              "type": "Literal",
                              "start": 788,
                              "end": 789,
                              "value": 1,
                              "raw": "1"
                            },
                            "prefix": true
                          }
                        }
                      ]
                    },
                    {
                      "type": "SwitchCase",
                      "start": 803,
                      "end": 824,
                      "test": {
                        "type": "Literal",
                        "start": 808,
                        "end": 813,
                        "value": false,
                        "raw": "false"
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "start": 815,
                          "end": 824,
                          "argument": {
                            "type": "Literal",
                            "start": 822,
                            "end": 823,
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
