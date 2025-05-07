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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 32,
        "end": 99,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 38,
            "end": 97,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 60,
                "end": 91,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 82,
                    "end": 91,
                    "argument": {
                      "type": "Literal",
                      "start": 89,
                      "end": 90,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 65,
                  "end": 68,
                  "raw": "\"a\"",
                  "value": "a",
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 45,
              "end": 48,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
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
                "raw": "\"a\"",
                "value": "a",
                "regex": null,
                "bigint": null
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
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 101,
      "end": 225,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 133,
        "end": 225,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 139,
            "end": 198,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 161,
                "end": 192,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 183,
                    "end": 192,
                    "argument": {
                      "type": "Literal",
                      "start": 190,
                      "end": 191,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 166,
                  "end": 169,
                  "raw": "\"a\"",
                  "value": "a",
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 146,
              "end": 149,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 204,
            "end": 223,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 208,
                "end": 222,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 208,
                  "end": 222,
                  "decorators": [],
                  "name": "unusedVariable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
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
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 114,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
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
                "raw": "\"a\"",
                "value": "a",
                "regex": null,
                "bigint": null
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
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 227,
      "end": 357,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 259,
        "end": 357,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 265,
            "end": 324,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 287,
                "end": 318,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 309,
                    "end": 318,
                    "argument": {
                      "type": "Literal",
                      "start": 316,
                      "end": 317,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 292,
                  "end": 295,
                  "raw": "\"a\"",
                  "value": "a",
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 272,
              "end": 275,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "FunctionDeclaration",
            "start": 330,
            "end": 355,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 353,
              "end": 355,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 339,
              "end": 350,
              "decorators": [],
              "name": "neverCalled",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 236,
        "end": 240,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
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
                "raw": "\"a\"",
                "value": "a",
                "regex": null,
                "bigint": null
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
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 359,
      "end": 474,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 391,
        "end": 474,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 397,
            "end": 456,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 419,
                "end": 450,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 441,
                    "end": 450,
                    "argument": {
                      "type": "Literal",
                      "start": 448,
                      "end": 449,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 424,
                  "end": 427,
                  "raw": "\"a\"",
                  "value": "a",
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 404,
              "end": 407,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 462,
            "end": 472,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 462,
              "end": 471,
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
              "callee": {
                "type": "Identifier",
                "start": 462,
                "end": 466,
                "decorators": [],
                "name": "foo3",
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
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 368,
        "end": 372,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
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
                "raw": "\"a\"",
                "value": "a",
                "regex": null,
                "bigint": null
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
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 476,
      "end": 581,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 514,
        "end": 581,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 520,
            "end": 579,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 542,
                "end": 573,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 564,
                    "end": 573,
                    "argument": {
                      "type": "Literal",
                      "start": 571,
                      "end": 572,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 547,
                  "end": 550,
                  "raw": "\"a\"",
                  "value": "a",
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 527,
              "end": 530,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 485,
        "end": 489,
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null
      },
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
                    "raw": "\"a\"",
                    "value": "a",
                    "regex": null,
                    "bigint": null
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
                    "raw": "\"b\"",
                    "value": "b",
                    "regex": null,
                    "bigint": null
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
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 583,
      "end": 842,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 639,
        "end": 842,
        "body": [
          {
            "type": "IfStatement",
            "start": 645,
            "end": 840,
            "alternate": {
              "type": "BlockStatement",
              "start": 734,
              "end": 840,
              "body": [
                {
                  "type": "SwitchStatement",
                  "start": 744,
                  "end": 834,
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "start": 769,
                      "end": 790,
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "start": 780,
                          "end": 790,
                          "argument": {
                            "type": "UnaryExpression",
                            "start": 787,
                            "end": 789,
                            "argument": {
                              "type": "Literal",
                              "start": 788,
                              "end": 789,
                              "raw": "1",
                              "value": 1,
                              "regex": null,
                              "bigint": null
                            },
                            "operator": "-",
                            "prefix": true
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 774,
                        "end": 778,
                        "raw": "true",
                        "value": true,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "SwitchCase",
                      "start": 803,
                      "end": 824,
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "start": 815,
                          "end": 824,
                          "argument": {
                            "type": "Literal",
                            "start": 822,
                            "end": 823,
                            "raw": "0",
                            "value": 0,
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 808,
                        "end": 813,
                        "raw": "false",
                        "value": false,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ],
                  "discriminant": {
                    "type": "Identifier",
                    "start": 752,
                    "end": 753,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
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
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "start": 689,
                      "end": 708,
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "start": 699,
                          "end": 708,
                          "argument": {
                            "type": "Literal",
                            "start": 706,
                            "end": 707,
                            "raw": "1",
                            "value": 1,
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 694,
                        "end": 697,
                        "raw": "\"a\"",
                        "value": "a",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ],
                  "discriminant": {
                    "type": "Identifier",
                    "start": 670,
                    "end": 673,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 649,
              "end": 650,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 592,
        "end": 596,
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null
      },
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
                "raw": "\"a\"",
                "value": "a",
                "regex": null,
                "bigint": null
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
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
