__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 680,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 17,
      "declaration": {
        "type": "Literal",
        "start": 15,
        "end": 17,
        "raw": "12",
        "value": 12,
        "regex": null,
        "bigint": null
      },
      "exportKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 18,
      "end": 35,
      "declaration": {
        "type": "Literal",
        "start": 33,
        "end": 35,
        "raw": "13",
        "value": 13,
        "regex": null,
        "bigint": null
      },
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 42,
          "end": 51,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 42,
            "end": 47,
            "decorators": [],
            "name": "await",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 50,
            "end": 51,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 52,
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 67,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 63,
            "decorators": [],
            "name": "yield",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 66,
            "end": 67,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 68,
      "end": 110,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 87,
        "end": 110,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 93,
            "end": 108,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 99,
                "end": 108,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 104,
                  "decorators": [],
                  "name": "await",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 107,
                  "end": 108,
                  "raw": "3",
                  "value": 3,
                  "regex": null,
                  "bigint": null
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
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 84,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 111,
      "end": 148,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 125,
        "end": 148,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 131,
            "end": 146,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 137,
                "end": 146,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 142,
                  "decorators": [],
                  "name": "yield",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 145,
                  "end": 146,
                  "raw": "4",
                  "value": 4,
                  "regex": null,
                  "bigint": null
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
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 122,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 149,
      "end": 644,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 157,
        "end": 644,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 163,
            "end": 179,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 163,
              "end": 175,
              "name": "constructor"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 178,
              "end": 179,
              "raw": "5",
              "value": 5,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 184,
            "end": 324,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 184,
              "end": 191,
              "decorators": [],
              "name": "deleted",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 191,
              "end": 324,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 194,
                "end": 324,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 204,
                    "end": 258,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 226,
                      "end": 258,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 240,
                          "end": 248,
                          "directive": null,
                          "expression": {
                            "type": "UnaryExpression",
                            "start": 240,
                            "end": 248,
                            "argument": {
                              "type": "Identifier",
                              "start": 247,
                              "end": 248,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "delete",
                            "prefix": true
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": {
                      "type": "Identifier",
                      "start": 213,
                      "end": 222,
                      "decorators": [],
                      "name": "container",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 223,
                        "end": 224,
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 267,
                    "end": 276,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 271,
                        "end": 276,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 271,
                          "end": 272,
                          "decorators": [],
                          "name": "g",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 275,
                          "end": 276,
                          "raw": "6",
                          "value": 6,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 285,
                    "end": 293,
                    "directive": null,
                    "expression": {
                      "type": "UnaryExpression",
                      "start": 285,
                      "end": 293,
                      "argument": {
                        "type": "Identifier",
                        "start": 292,
                        "end": 293,
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "delete",
                      "prefix": true
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 302,
                    "end": 318,
                    "directive": null,
                    "expression": {
                      "type": "UnaryExpression",
                      "start": 302,
                      "end": 318,
                      "argument": {
                        "type": "Identifier",
                        "start": 309,
                        "end": 318,
                        "decorators": [],
                        "name": "container",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "delete",
                      "prefix": true
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
            "start": 329,
            "end": 403,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 329,
              "end": 342,
              "decorators": [],
              "name": "evalArguments",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 342,
              "end": 403,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 345,
                "end": 403,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 355,
                    "end": 369,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 361,
                        "end": 369,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 361,
                          "end": 365,
                          "decorators": [],
                          "name": "eval",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 368,
                          "end": 369,
                          "raw": "7",
                          "value": 7,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 378,
                    "end": 397,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 384,
                        "end": 397,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 384,
                          "end": 393,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 396,
                          "end": 397,
                          "raw": "8",
                          "value": 8,
                          "regex": null,
                          "bigint": null
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
            "start": 408,
            "end": 524,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 408,
              "end": 417,
              "decorators": [],
              "name": "withOctal",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 417,
              "end": 524,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 420,
                "end": 524,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 430,
                    "end": 452,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 436,
                        "end": 452,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 436,
                          "end": 445,
                          "decorators": [],
                          "name": "redundant",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 448,
                          "end": 452,
                          "raw": "0o10",
                          "value": 8,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "WithStatement",
                    "start": 461,
                    "end": 518,
                    "body": {
                      "type": "BlockStatement",
                      "start": 478,
                      "end": 518,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 492,
                          "end": 508,
                          "argument": {
                            "type": "CallExpression",
                            "start": 499,
                            "end": 508,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 499,
                              "end": 506,
                              "decorators": [],
                              "name": "toFixed",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "object": {
                      "type": "Identifier",
                      "start": 467,
                      "end": 476,
                      "decorators": [],
                      "name": "redundant",
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
          },
          {
            "type": "MethodDefinition",
            "start": 529,
            "end": 642,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 529,
              "end": 534,
              "decorators": [],
              "name": "label",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 534,
              "end": 642,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 537,
                "end": 642,
                "body": [
                  {
                    "type": "ForStatement",
                    "start": 547,
                    "end": 619,
                    "body": {
                      "type": "BlockStatement",
                      "start": 555,
                      "end": 619,
                      "body": [
                        {
                          "type": "LabeledStatement",
                          "start": 569,
                          "end": 585,
                          "body": {
                            "type": "VariableDeclaration",
                            "start": 576,
                            "end": 585,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 580,
                                "end": 585,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 580,
                                  "end": 581,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "Literal",
                                  "start": 584,
                                  "end": 585,
                                  "raw": "1",
                                  "value": 1,
                                  "regex": null,
                                  "bigint": null
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "var"
                          },
                          "label": {
                            "type": "Identifier",
                            "start": 569,
                            "end": 574,
                            "decorators": [],
                            "name": "label",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "BreakStatement",
                          "start": 598,
                          "end": 609,
                          "label": {
                            "type": "Identifier",
                            "start": 604,
                            "end": 609,
                            "decorators": [],
                            "name": "label",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "init": null,
                    "test": null,
                    "update": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 628,
                    "end": 636,
                    "argument": {
                      "type": "Identifier",
                      "start": 635,
                      "end": 636,
                      "decorators": [],
                      "name": "x",
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
        "start": 155,
        "end": 156,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 645,
      "end": 659,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 651,
          "end": 659,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 651,
            "end": 655,
            "decorators": [],
            "name": "eval",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 658,
            "end": 659,
            "raw": "9",
            "value": 9,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 660,
      "end": 680,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 666,
          "end": 680,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 666,
            "end": 675,
            "decorators": [],
            "name": "arguments",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 678,
            "end": 680,
            "raw": "10",
            "value": 10,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
